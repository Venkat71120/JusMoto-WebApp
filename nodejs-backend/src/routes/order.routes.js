const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin, isFranchise } = require('../middleware/auth.middleware');
const { Order, OrderItem, OrderLocation, Service, User, Review, RefundedOrder, Coupon, UserCartItem } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, generateOrderNumber, generateInvoiceNumber } = require('../utils/helpers');
const emailService = require('../services/email.service');
const notificationService = require('../services/notification.service');

// Get user orders
router.get('/', authenticate, isClient, async (req, res) => {
  try {
    const { status, payment_status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { user_id: req.user.id };
    if (status !== undefined) where.status = status;
    if (payment_status !== undefined) where.payment_status = payment_status;

    const { rows, count } = await Order.findAndCountAll({
      where,
      include: [
        {
          model: OrderItem,
          as: 'items',
          include: [{ model: Service, as: 'service', attributes: ['id', 'title', 'image', 'type'] }]
        },
        { model: OrderLocation, as: 'location' }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      ...paginationResponse(rows, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get order details
router.get('/:id', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };

    // If client, restrict to their orders
    if (req.user) {
      where.user_id = req.user.id;
    }

    const order = await Order.findOne({
      where,
      include: [
        {
          model: OrderItem,
          as: 'items',
          include: [
            { model: Service, as: 'service' }
          ]
        },
        { model: OrderLocation, as: 'location' },
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { model: Review, as: 'reviews' },
        { model: RefundedOrder, as: 'refund' }
      ]
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create order
router.post('/', authenticate, isClient, async (req, res) => {
  try {
    const {
      items, // Array of { service_id, car_id, variant_id, quantity, addons }
      coupon_code,
      delivery_mode,
      date,
      schedule,
      order_note,
      address // { name, phone, email, address, city, state, zip_code, country, latitude, longitude }
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'No items in order' });
    }

    // Calculate order totals
    let subTotal = 0;
    const orderItems = [];

    for (const item of items) {
      const service = await Service.findByPk(item.service_id);
      if (!service) {
        return res.status(400).json({ success: false, error: `Service ${item.service_id} not found` });
      }

      const price = service.getFinalPrice();
      const quantity = item.quantity || 1;
      let addonTotal = 0;

      // Calculate addon totals
      if (item.addons && item.addons.length > 0) {
        for (const addonId of item.addons) {
          const addon = await require('../models').ServiceAddon.findByPk(addonId);
          if (addon) {
            addonTotal += parseFloat(addon.price);
          }
        }
      }

      const itemTotal = (price * quantity) + addonTotal;
      subTotal += itemTotal;

      orderItems.push({
        service_id: service.id,
        car_id: item.car_id,
        variant_id: item.variant_id,
        title: service.title,
        price,
        quantity,
        total: itemTotal,
        addons: item.addons || [],
        addon_total: addonTotal
      });
    }

    // Apply coupon if provided
    let couponAmount = 0;
    let couponType = null;

    if (coupon_code) {
      const coupon = await Coupon.findOne({ where: { code: coupon_code } });
      if (coupon && coupon.isValid()) {
        couponAmount = coupon.calculateDiscount(subTotal);
        couponType = coupon.discount_type;
      }
    }

    // Calculate tax (configurable - default 0)
    const taxRate = 0; // TODO: Get from settings
    const tax = (subTotal - couponAmount) * (taxRate / 100);

    // Calculate delivery charge (if applicable)
    const deliveryCharge = 0; // TODO: Calculate based on delivery_mode

    const total = subTotal - couponAmount + tax + deliveryCharge;

    // Create order
    const order = await Order.create({
      user_id: req.user.id,
      invoice_number: generateInvoiceNumber(),
      date,
      schedule,
      coupon_code,
      coupon_type: couponType,
      coupon_amount: couponAmount,
      delivery_charge: deliveryCharge,
      delivery_mode,
      sub_total: subTotal,
      tax,
      total,
      payment_status: 0,
      status: 0,
      order_note
    });

    // Create order items
    for (const item of orderItems) {
      await OrderItem.create({
        order_id: order.id,
        ...item
      });
    }

    // Create order location if provided
    if (address) {
      await OrderLocation.create({
        order_id: order.id,
        ...address
      });
    }

    // Clear cart items
    await UserCartItem.destroy({ where: { user_id: req.user.id } });

    // Fetch complete order
    const completeOrder = await Order.findByPk(order.id, {
      include: [
        { model: OrderItem, as: 'items' },
        { model: OrderLocation, as: 'location' }
      ]
    });

    // Send order confirmation email + notification
    try {
      const user = await User.findByPk(req.user.id);
      if (user) {
        await emailService.sendOrderConfirmation(user, completeOrder);
      }
    } catch (emailErr) {
      console.error('Failed to send order confirmation email:', emailErr.message);
    }

    notificationService.orderPlaced(req.user.id, completeOrder).catch(() => {});

    res.status(201).json({
      success: true,
      data: completeOrder,
      message: 'Order created successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Request order completion
router.post('/:id/complete-request', authenticate, isClient, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.status !== 2) {
      return res.status(400).json({ success: false, error: 'Order must be in progress to request completion' });
    }

    await order.update({ complete_request: 1 });

    res.json({ success: true, message: 'Completion request submitted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Cancel order
router.post('/:id/cancel', authenticate, isClient, async (req, res) => {
  try {
    const { reason } = req.body;

    const order = await Order.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.status >= 2) {
      return res.status(400).json({ success: false, error: 'Cannot cancel order that is already in progress' });
    }

    await order.update({
      status: 4,
      order_note: reason ? `Cancelled by user: ${reason}` : 'Cancelled by user'
    });

    // Auto-create refund if the order was already paid
    let refund = null;
    if (order.payment_status === 1) {
      const existingRefund = await RefundedOrder.findOne({ where: { order_id: order.id } });
      if (!existingRefund) {
        refund = await RefundedOrder.create({
          order_id: order.id,
          user_id: req.user.id,
          amount: parseFloat(order.total),
          cancel_reason: reason || 'Order cancelled',
          status: 0
        });
      }
    }

    res.json({
      success: true,
      message: refund ? 'Order cancelled and refund request created' : 'Order cancelled successfully',
      data: { refund }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Request refund
router.post('/:id/refund', authenticate, isClient, async (req, res) => {
  try {
    const { reason } = req.body;

    const order = await Order.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.payment_status !== 1) {
      return res.status(400).json({ success: false, error: 'Cannot refund unpaid order' });
    }

    // Check if refund already exists
    const existingRefund = await RefundedOrder.findOne({ where: { order_id: order.id } });
    if (existingRefund) {
      return res.status(400).json({ success: false, error: 'Refund already requested for this order' });
    }

    const refund = await RefundedOrder.create({
      order_id: order.id,
      user_id: req.user.id,
      amount: parseFloat(order.total),
      cancel_reason: reason || null,
      status: 0
    });

    res.status(201).json({ success: true, data: refund, message: 'Refund request submitted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Submit review
router.post('/:id/review', authenticate, isClient, async (req, res) => {
  try {
    const { service_id, rating, review } = req.body;

    const order = await Order.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.status !== 3) {
      return res.status(400).json({ success: false, error: 'Can only review completed orders' });
    }

    // Check if already reviewed
    const existingReview = await Review.findOne({
      where: { order_id: order.id, service_id, user_id: req.user.id }
    });

    if (existingReview) {
      return res.status(400).json({ success: false, error: 'Already reviewed this service' });
    }

    const newReview = await Review.create({
      user_id: req.user.id,
      service_id,
      order_id: order.id,
      rating,
      review,
      status: 1
    });

    res.status(201).json({ success: true, data: newReview, message: 'Review submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Client invoice download
router.get('/:id/invoice', authenticate, isClient, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { id: req.params.id, user_id: req.user.id },
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { model: OrderItem, as: 'items', include: [{ model: Service, as: 'service', attributes: ['id', 'title'] }] },
        { model: OrderLocation, as: 'location' }
      ]
    });
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });

    const { generateInvoiceHtml } = require('../utils/invoice');
    const html = generateInvoiceHtml(order);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `inline; filename="invoice-${order.invoice_number || order.id}.html"`);
    res.send(html);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.get('/admin/all', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, payment_status, user_id, date_from, date_to, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (status !== undefined) where.status = status;
    if (payment_status !== undefined) where.payment_status = payment_status;
    if (user_id) where.user_id = user_id;

    if (date_from || date_to) {
      where.created_at = {};
      if (date_from) where.created_at[Op.gte] = new Date(date_from);
      if (date_to) where.created_at[Op.lte] = new Date(date_to);
    }

    if (search) {
      where[Op.or] = [
        { invoice_number: { [Op.like]: `%${search}%` } },
        { '$user.email$': { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await Order.findAndCountAll({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { model: OrderItem, as: 'items' }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      ...paginationResponse(rows, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/admin/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, note } = req.body;

    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    await order.update({
      status,
      admin_id: req.admin.id,
      order_note: note ? `${order.order_note || ''}\n[Admin]: ${note}` : order.order_note
    });

    // Send order status update email to user
    const statusLabels = { 0: 'Pending', 1: 'Accepted', 2: 'In Progress', 3: 'Completed', 4: 'Cancelled', 5: 'On Hold' };
    try {
      const orderUser = await User.findByPk(order.user_id);
      if (orderUser) {
        await emailService.sendOrderStatusUpdate(orderUser, order, statusLabels[status] || 'Updated');
      }
    } catch (emailErr) {
      console.error('Failed to send order status email:', emailErr.message);
    }

    notificationService.orderStatusChanged(order.user_id, order, statusLabels[status] || 'Updated').catch(() => {});

    res.json({ success: true, data: order, message: 'Order status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
