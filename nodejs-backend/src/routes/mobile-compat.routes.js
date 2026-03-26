const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { PaymentGateway, StateTax, CityTax, StateDeliveryCharge, CityDeliveryCharge, StaticOption, Order, OrderItem, OrderLocation, Service, ServiceCar, ServiceAddon, Coupon, UserCartItem, User, Review, RefundedOrder } = require('../models');
const { paginate, paginationResponse, generateOrderNumber, generateInvoiceNumber } = require('../utils/helpers');
const emailService = require('../services/email.service');
const notificationService = require('../services/notification.service');
const { formatError } = require('../utils/formatError');

// ─── GET /payment-gateway-list (Laravel-compatible) ─────────────────
router.get('/payment-gateway-list', async (req, res) => {
  try {
    const dbGateways = await PaymentGateway.findAll({
      where: { status: 1 },
      attributes: ['id', 'name', 'slug', 'image', 'status', 'test_mode']
    });

    const gateways = dbGateways.map(g => ({
      id: g.id,
      name: g.slug || g.name.toLowerCase().replace(/\s+/g, '_'),
      description: '',
      image: g.image || '',
      status: g.status,
      test_mode: g.test_mode,
      credentials: ''
    }));

    // Add PayZapp if not in DB
    if (!gateways.find(g => g.name === 'payzapp')) {
      gateways.unshift({
        id: gateways.length > 0 ? Math.max(...gateways.map(g => g.id)) + 1 : 1,
        name: 'payzapp',
        description: 'UPI, Cards, Net Banking & Wallets',
        image: '',
        status: 1,
        test_mode: 0,
        credentials: ''
      });
    }

    // Add wallet
    if (!gateways.find(g => g.name === 'wallet')) {
      gateways.push({
        id: gateways.length > 0 ? Math.max(...gateways.map(g => g.id)) + 1 : 2,
        name: 'wallet',
        description: 'Pay using wallet balance',
        image: '',
        status: 1,
        test_mode: 0,
        credentials: ''
      });
    }

    // Add COD
    const codOption = await StaticOption.findOne({ where: { option_name: 'cash_on_delivery' } });
    if (codOption && codOption.option_value) {
      gateways.push({
        id: gateways.length > 0 ? Math.max(...gateways.map(g => g.id)) + 1 : 3,
        name: 'cash_on_delivery',
        description: '',
        image: '',
        status: 1,
        test_mode: 1,
        credentials: ''
      });
    }

    res.json({ data: gateways });
  } catch (error) {
    res.json({ data: [
      { id: 1, name: 'payzapp', description: 'UPI, Cards, Net Banking & Wallets', image: '', status: 1, test_mode: 0, credentials: '' },
      { id: 2, name: 'wallet', description: 'Pay using wallet balance', image: '', status: 1, test_mode: 0, credentials: '' },
      { id: 3, name: 'cash_on_delivery', description: '', image: '', status: 1, test_mode: 1, credentials: '' }
    ]});
  }
});

// ─── Helper: get tax rate based on location ─────────────────────────
async function getTaxRate(outlet_id, state_id, city_id) {
  // Try city-level tax first (city_taxes table)
  if (city_id) {
    const cityTax = await CityTax.findOne({ where: { city_id } });
    if (cityTax) return parseFloat(cityTax.tax_rate);
  }
  // Then state-level (state_taxes table)
  if (state_id) {
    const stateTax = await StateTax.findOne({ where: { state_id } });
    if (stateTax) return parseFloat(stateTax.tax_rate);
  }
  // Fallback to global setting
  const globalTax = await StaticOption.findOne({ where: { option_name: 'tax_rate_by_country' } });
  return globalTax ? parseFloat(globalTax.option_value || 0) : 0;
}

// ─── Helper: get delivery charge based on location ──────────────────
async function getDeliveryCharge(outlet_id, state_id, city_id) {
  // Try city-level first (city_delivery_charges table)
  if (city_id) {
    const cityCharge = await CityDeliveryCharge.findOne({ where: { city_id } });
    if (cityCharge) return parseFloat(cityCharge.delivery_charge);
  }
  // Then state-level (state_delivery_charges table)
  if (state_id) {
    const stateCharge = await StateDeliveryCharge.findOne({ where: { state_id } });
    if (stateCharge) return parseFloat(stateCharge.delivery_charge);
  }
  // Fallback to global
  const globalCharge = await StaticOption.findOne({ where: { option_name: 'delivery_charge' } });
  return globalCharge ? parseFloat(globalCharge.option_value || 0) : 0;
}

// ─── POST /client/tax-info (Laravel-compatible) ─────────────────────
router.post('/client/tax-info', authenticate, isClient, async (req, res) => {
  try {
    const { outlet_id, state_id, city_id } = req.body;
    const taxRate = await getTaxRate(outlet_id, state_id, city_id);
    res.json({ tax_info: taxRate });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── POST /client/delivery-charge-info (Laravel-compatible) ─────────
router.post('/client/delivery-charge-info', authenticate, isClient, async (req, res) => {
  try {
    const { outlet_id, state_id, city_id } = req.body;
    const charge = await getDeliveryCharge(outlet_id, state_id, city_id);

    const chargeSys = await StaticOption.findOne({ where: { option_name: 'delivery_charge_system' } });
    res.json({
      delivery_charge_system: chargeSys ? chargeSys.option_value : 'flat',
      delivery_charge: charge
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── POST /client/tax-delivery-charge-info (Laravel-compatible) ─────
router.post('/client/tax-delivery-charge-info', authenticate, isClient, async (req, res) => {
  try {
    const { outlet_id, state_id, city_id } = req.body;
    const taxRate = await getTaxRate(outlet_id, state_id, city_id);
    const charge = await getDeliveryCharge(outlet_id, state_id, city_id);

    const chargeSys = await StaticOption.findOne({ where: { option_name: 'delivery_charge_system' } });
    res.json({
      tax_info: taxRate,
      delivery_charge: charge,
      delivery_charge_system: chargeSys ? chargeSys.option_value : 'flat'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ═══════════════════════════════════════════════════════════════════
// ORDER ROUTES (Laravel-compatible for mobile app)
// ═══════════════════════════════════════════════════════════════════

// ─── POST /client/service/order-create (Laravel-compatible) ──────
router.post('/client/service/order-create', authenticate, isClient, async (req, res) => {
  try {
    let {
      items,           // JSON string or array: [{id, qty}] (Laravel format)
      car_variant,     // variant_id
      date,
      time,            // schedule slot (e.g. "6:40 PM")
      selected_payment_gateway,
      delivery_mode,
      coupon_code,
      order_note,
      address_id,      // optional: use saved address
      address,         // optional: inline address object
      outlet_id,
      state_id,
      city_id
    } = req.body;

    // Parse items if it's a JSON string (form-data sends strings)
    if (typeof items === 'string') {
      try { items = JSON.parse(items); } catch (e) {
        return res.status(422).json({ message: 'Invalid items format', errors: { items: ['Items must be a valid JSON array'] } });
      }
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(422).json({ message: 'Validation failed', errors: { items: ['At least one item is required'] } });
    }

    // Calculate order totals
    let subTotal = 0;
    const orderItems = [];

    for (const item of items) {
      const serviceId = item.id || item.service_id;
      const quantity = item.qty || item.quantity || 1;
      const variantId = item.variant_id || car_variant || null;

      const service = await Service.findByPk(serviceId);
      if (!service) {
        return res.status(422).json({ message: `Service #${serviceId} not found`, errors: { items: [`Service ${serviceId} not found`] } });
      }

      // Get price (check for variant-specific pricing)
      let price = parseFloat(service.discount_price) > 0
        ? parseFloat(service.discount_price)
        : parseFloat(service.price);

      if (variantId) {
        const serviceCar = await ServiceCar.findOne({ where: { service_id: serviceId, variant_id: variantId } });
        if (serviceCar) {
          price = serviceCar.discount_price && parseFloat(serviceCar.discount_price) > 0
            ? parseFloat(serviceCar.discount_price)
            : parseFloat(serviceCar.price);
        }
      }

      let addonTotal = 0;
      const addonIds = item.addons || [];
      if (addonIds.length > 0) {
        const addons = await ServiceAddon.findAll({ where: { id: addonIds, service_id: serviceId } });
        addonTotal = addons.reduce((sum, a) => sum + parseFloat(a.price), 0);
      }

      const itemTotal = (price * quantity) + addonTotal;
      subTotal += itemTotal;

      orderItems.push({
        service_id: serviceId,
        car_id: item.car_id || null,
        variant_id: variantId,
        title: service.title,
        price,
        quantity,
        total: itemTotal,
        addons: addonIds,
        addon_total: addonTotal
      });
    }

    // Apply coupon
    let couponAmount = 0;
    let couponType = null;
    if (coupon_code) {
      const coupon = await Coupon.findOne({ where: { code: coupon_code.toUpperCase() } });
      if (coupon && coupon.isValid()) {
        couponAmount = coupon.calculateDiscount(subTotal);
        couponType = coupon.discount_type;
      }
    }

    // Get tax & delivery charges
    const taxRate = await getTaxRate(outlet_id, state_id, city_id);
    const tax = (subTotal - couponAmount) * (taxRate / 100);
    const deliveryCharge = delivery_mode === 'pickup' ? 0 : await getDeliveryCharge(outlet_id, state_id, city_id);

    const total = subTotal - couponAmount + tax + deliveryCharge;

    // Create order
    const order = await Order.create({
      user_id: req.user.id,
      invoice_number: generateInvoiceNumber(),
      date,
      schedule: time || null,
      coupon_code,
      coupon_type: couponType,
      coupon_amount: couponAmount,
      delivery_charge: deliveryCharge,
      delivery_mode: delivery_mode || 'pickup',
      sub_total: subTotal,
      tax,
      total,
      payment_status: selected_payment_gateway === 'cash_on_delivery' ? 0 : 0,
      payment_gateway: selected_payment_gateway || null,
      status: 0,
      order_note
    });

    // Create order items
    for (const item of orderItems) {
      await OrderItem.create({ order_id: order.id, ...item });
    }

    // Create order location from saved address or inline
    if (address_id) {
      const { UserLocation } = require('../models');
      const loc = await UserLocation.findByPk(address_id);
      if (loc) {
        await OrderLocation.create({
          order_id: order.id,
          title: loc.title,
          address: loc.address,
          post_code: loc.post_code,
          phone: loc.phone,
          latitude: loc.latitude,
          longitude: loc.longitude
        });
      }
    } else if (address) {
      const addr = typeof address === 'string' ? JSON.parse(address) : address;
      await OrderLocation.create({
        order_id: order.id,
        title: addr.name || addr.title || null,
        address: addr.address || null,
        post_code: addr.zip_code || addr.post_code || null,
        phone: addr.phone || null,
        latitude: addr.latitude || null,
        longitude: addr.longitude || null
      });
    }

    // Clear user's cart
    await UserCartItem.destroy({ where: { user_id: req.user.id } });

    // Fetch complete order
    const completeOrder = await Order.findByPk(order.id, {
      include: [
        { model: OrderItem, as: 'items', include: [{ model: Service, as: 'service', attributes: ['id', 'title', 'image', 'type'] }] },
        { model: OrderLocation, as: 'location' }
      ]
    });

    // Send notifications (non-blocking)
    try {
      const user = await User.findByPk(req.user.id);
      if (user) await emailService.sendOrderConfirmation(user, completeOrder);
    } catch (e) { /* ignore email errors */ }
    notificationService.orderPlaced(req.user.id, completeOrder).catch(() => {});

    // Return Laravel-compatible response
    res.status(201).json({
      message: 'Order placed successfully',
      data: completeOrder
    });
  } catch (error) {
    console.error('order-create error:', error);
    res.status(500).json({ message: 'Failed to create order', error: formatError(error) });
  }
});

// ─── GET /client/orders/all (Laravel-compatible) ─────────────────
router.get('/client/orders/all', authenticate, isClient, async (req, res) => {
  try {
    const { status, order_type, page = 1, limit = 10 } = req.query;
    const pagination = paginate(page, limit);

    const where = { user_id: req.user.id };
    if (status !== undefined) where.status = status;

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
      data: rows,
      ...paginationResponse(rows, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: formatError(error) });
  }
});

// ─── GET /client/orders/details/:id (Laravel-compatible) ─────────
router.get('/client/orders/details/:id', authenticate, isClient, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { id: req.params.id, user_id: req.user.id },
      include: [
        {
          model: OrderItem,
          as: 'items',
          include: [{ model: Service, as: 'service' }]
        },
        { model: OrderLocation, as: 'location' },
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { model: Review, as: 'reviews' },
        { model: RefundedOrder, as: 'refund' }
      ]
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ data: order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch order details', error: formatError(error) });
  }
});

// ─── POST /client/service/order-cancel (Laravel-compatible) ──────
router.post('/client/service/order-cancel', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, reason } = req.body;

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status >= 2) {
      return res.status(400).json({ message: 'Cannot cancel order that is already in progress' });
    }

    await order.update({
      status: 4,
      order_note: reason ? `Cancelled by user: ${reason}` : 'Cancelled by user'
    });

    res.json({ message: 'Order cancelled successfully', data: order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to cancel order', error: formatError(error) });
  }
});

// ─── POST /client/service/order-payment-status-update (Laravel-compatible) ──
router.post('/client/service/order-payment-status-update', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, id, payment_status, transaction_id, payment_gateway } = req.body;
    const orderId = order_id || id;

    if (!orderId) {
      return res.status(422).json({ message: 'order_id is required' });
    }

    const order = await Order.findOne({
      where: { id: orderId, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const updateData = {};
    if (payment_status !== undefined) updateData.payment_status = payment_status;
    if (transaction_id) updateData.transaction_id = transaction_id;
    if (payment_gateway) updateData.payment_gateway = payment_gateway;

    await order.update(updateData);

    res.json({ message: 'Payment status updated', data: order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update payment status', error: formatError(error) });
  }
});

// ─── GET /client/dashboard/info (Laravel-compatible) ─────────────
router.get('/client/dashboard/info', authenticate, isClient, async (req, res) => {
  try {
    const { Wallet } = require('../models');
    const userId = req.user.id;

    const [totalOrders, pendingOrders, completedOrders, cancelledOrders, inProgressOrders] = await Promise.all([
      Order.count({ where: { user_id: userId } }),
      Order.count({ where: { user_id: userId, status: 0 } }),
      Order.count({ where: { user_id: userId, status: 3 } }),
      Order.count({ where: { user_id: userId, status: 4 } }),
      Order.count({ where: { user_id: userId, status: 2 } })
    ]);

    const wallet = await Wallet.findOne({ where: { user_id: userId } });

    res.json({
      data: {
        totalOrders,
        pendingOrders,
        completedOrders,
        cancelledOrders,
        inProgressOrders,
        walletBalance: wallet ? parseFloat(wallet.available_balance || 0) : 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dashboard', error: formatError(error) });
  }
});

// ─── GET /coupon-info/:coupon_code (Laravel-compatible) ──────────
router.get('/coupon-info/:coupon_code', authenticate, async (req, res) => {
  try {
    const coupon = await require('../models').Coupon.findOne({
      where: { code: req.params.coupon_code.toUpperCase() }
    });

    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    if (!coupon.isValid()) {
      return res.status(400).json({ message: 'Coupon is expired or invalid' });
    }

    res.json({
      data: {
        code: coupon.code,
        title: coupon.title,
        discount: coupon.discount,
        discount_type: coupon.discount_type,
        expire_date: coupon.expire_date
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch coupon', error: formatError(error) });
  }
});

// ─── POST /client/service/refund-info-update (Laravel-compatible) ──
router.post('/client/service/refund-info-update', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, reason } = req.body;

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.payment_status !== 1) {
      return res.status(400).json({ message: 'Cannot refund unpaid order' });
    }

    const existing = await RefundedOrder.findOne({ where: { order_id: order.id } });
    if (existing) {
      return res.status(400).json({ message: 'Refund already requested' });
    }

    const refund = await RefundedOrder.create({
      order_id: order.id,
      user_id: req.user.id,
      amount: parseFloat(order.total),
      cancel_reason: reason || null,
      status: 0
    });

    res.json({ message: 'Refund request submitted', data: refund });
  } catch (error) {
    res.status(500).json({ message: 'Failed to request refund', error: formatError(error) });
  }
});

// ─── GET /client/orders/all-refund-list (Laravel-compatible) ─────
router.get('/client/orders/all-refund-list', authenticate, isClient, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pagination = paginate(page, limit);

    const { rows, count } = await RefundedOrder.findAndCountAll({
      where: { user_id: req.user.id },
      include: [{ model: Order, as: 'order' }],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    res.json({
      data: rows,
      ...paginationResponse(rows, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch refunds', error: formatError(error) });
  }
});

// ─── Cart Routes (Laravel-compatible aliases) ────────────────────

// POST /client/cart/add
router.post('/client/cart/add', authenticate, isClient, async (req, res) => {
  try {
    const { service_id, id, car_id, variant_id, car_variant, quantity, qty, addons } = req.body;
    const svcId = service_id || id;
    const varId = variant_id || car_variant || null;
    const q = quantity || qty || 1;

    const service = await Service.findByPk(svcId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    // Check existing
    const existing = await UserCartItem.findOne({
      where: { user_id: req.user.id, item_id: svcId, variant_id: varId }
    });

    if (existing) {
      await existing.update({ quantity: existing.quantity + q });
      return res.json({ message: 'Cart updated', data: existing });
    }

    let price = parseFloat(service.discount_price) > 0 ? parseFloat(service.discount_price) : parseFloat(service.price);
    if (varId) {
      const sc = await ServiceCar.findOne({ where: { service_id: svcId, variant_id: varId } });
      if (sc) price = sc.discount_price && parseFloat(sc.discount_price) > 0 ? parseFloat(sc.discount_price) : parseFloat(sc.price);
    }

    let addonTotal = 0;
    if (addons && addons.length > 0) {
      const addonRecords = await ServiceAddon.findAll({ where: { id: addons, service_id: svcId } });
      addonTotal = addonRecords.reduce((sum, a) => sum + parseFloat(a.price), 0);
    }

    const cartItem = await UserCartItem.create({
      user_id: req.user.id,
      item_id: svcId,
      item_type: service.type === 1 ? 'product' : 'service',
      car_id,
      variant_id: varId,
      quantity: q,
      price,
      addons: addons || [],
      addon_total: addonTotal
    });

    res.status(201).json({ message: 'Item added to cart', data: cartItem });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add to cart', error: formatError(error) });
  }
});

// POST /client/cart/item-increase
router.post('/client/cart/item-increase', authenticate, isClient, async (req, res) => {
  try {
    const { cart_item_id } = req.body;
    const item = await UserCartItem.findOne({ where: { id: cart_item_id, user_id: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    await item.update({ quantity: item.quantity + 1 });
    res.json({ message: 'Quantity increased', data: item });
  } catch (error) {
    res.status(500).json({ message: formatError(error) });
  }
});

// POST /client/cart/item-decrease
router.post('/client/cart/item-decrease', authenticate, isClient, async (req, res) => {
  try {
    const { cart_item_id } = req.body;
    const item = await UserCartItem.findOne({ where: { id: cart_item_id, user_id: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    if (item.quantity <= 1) {
      await item.destroy();
      return res.json({ message: 'Item removed from cart' });
    }
    await item.update({ quantity: item.quantity - 1 });
    res.json({ message: 'Quantity decreased', data: item });
  } catch (error) {
    res.status(500).json({ message: formatError(error) });
  }
});

// POST /client/cart/item-remove
router.post('/client/cart/item-remove', authenticate, isClient, async (req, res) => {
  try {
    const { cart_item_id } = req.body;
    await UserCartItem.destroy({ where: { id: cart_item_id, user_id: req.user.id } });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: formatError(error) });
  }
});

// POST /client/cart/clear-all
router.post('/client/cart/clear-all', authenticate, isClient, async (req, res) => {
  try {
    await UserCartItem.destroy({ where: { user_id: req.user.id } });
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: formatError(error) });
  }
});

// ─── Location Routes (Laravel-compatible aliases) ────────────────

// POST /client/location/create
router.post('/client/location/create', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation, State, City } = require('../models');
    const { name, title, address, phone, post_code, zip_code, pincode, state, city, latitude, longitude, type, is_default } = req.body;

    let state_id = null, city_id = null;
    if (state) {
      const stateRow = await State.findOne({ where: { state } });
      if (stateRow) { state_id = stateRow.id; if (city) { const cityRow = await City.findOne({ where: { city, state_id: stateRow.id } }); if (cityRow) city_id = cityRow.id; } }
    }

    if (is_default) await UserLocation.update({ is_default: 0 }, { where: { user_id: req.user.id } });

    const loc = await UserLocation.create({
      user_id: req.user.id,
      state_id,
      city_id,
      title: name || title || null,
      address: address || null,
      post_code: zip_code || pincode || post_code || null,
      phone: phone || null,
      latitude: latitude || null,
      longitude: longitude || null,
      type: type === 'work' || type === 1 ? 1 : 0,
      is_default: is_default ? 1 : 0
    });

    res.status(201).json({ message: 'Location created', data: loc });
  } catch (error) {
    res.status(500).json({ message: formatError(error) });
  }
});

// GET /client/location/all
router.get('/client/location/all', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation, State, City } = require('../models');
    const locations = await UserLocation.findAll({
      where: { user_id: req.user.id },
      include: [
        { model: State, as: 'stateInfo', attributes: ['id', 'state'] },
        { model: City, as: 'cityInfo', attributes: ['id', 'city'] }
      ],
      order: [['is_default', 'DESC'], ['created_at', 'DESC']]
    });

    const data = locations.map(loc => {
      const plain = loc.toJSON();
      plain.name = plain.title;
      plain.state = plain.stateInfo?.state || '';
      plain.city = plain.cityInfo?.city || '';
      delete plain.stateInfo;
      delete plain.cityInfo;
      return plain;
    });

    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: formatError(error) });
  }
});

// ═══════════════════════════════════════════════════════════════════
// REVIEW ROUTES (Laravel-compatible for mobile app)
// ═══════════════════════════════════════════════════════════════════

// ─── GET /client/reviews/all (Laravel-compatible) ────────────────
router.get('/client/reviews/all', authenticate, isClient, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pagination = paginate(page, limit);

    const { rows, count } = await Review.findAndCountAll({
      where: { reviewer_id: req.user.id },
      include: [
        { model: User, as: 'reviewer', attributes: ['id', 'first_name', 'last_name', 'email', 'image'] },
        { model: Service, as: 'service', attributes: ['id', 'title', 'image', 'type'] },
        { model: require('../models').Order, as: 'order', attributes: ['id', 'invoice_number', 'status'] }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    if (count === 0) {
      return res.json({ message: 'No reviews found', data: [], current_page: 1, total: 0, last_page: 1 });
    }

    // Format response like Laravel ReviewResource
    const data = rows.map(r => {
      const plain = r.toJSON();
      return {
        id: plain.id,
        admin_id: plain.admin_id,
        order_id: plain.order_id,
        reviewer_id: plain.reviewer_id,
        service_id: plain.service_id,
        service_title: plain.service?.title || null,
        type: plain.type,
        rating: plain.rating,
        message: plain.message,
        status: plain.status,
        created_at: plain.created_at,
        reviewer: plain.reviewer || null
      };
    });

    res.json({
      data,
      ...paginationResponse(data, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: formatError(error) });
  }
});

// ─── POST /service/review (Laravel-compatible) ──────────────────
// Get reviews for a service (public, filtered by service_id/rating)
router.post('/service/review', async (req, res) => {
  try {
    const { service_id, rating, page = 1, limit = 10 } = req.body;

    if (!service_id && !rating) {
      return res.status(422).json({ message: 'At least service_id or rating is required' });
    }

    const where = { status: 'published' };
    if (service_id) where.service_id = service_id;
    if (rating) where.rating = rating;

    const pagination = paginate(page, limit);

    const { rows, count } = await Review.findAndCountAll({
      where,
      include: [
        { model: User, as: 'reviewer', attributes: ['id', 'first_name', 'last_name', 'email', 'image'] },
        { model: Service, as: 'service', attributes: ['id', 'title', 'image'] }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    const data = rows.map(r => {
      const plain = r.toJSON();
      return {
        id: plain.id,
        admin_id: plain.admin_id,
        order_id: plain.order_id,
        reviewer_id: plain.reviewer_id,
        service_id: plain.service_id,
        service_title: plain.service?.title || null,
        type: plain.type,
        rating: plain.rating,
        message: plain.message,
        status: plain.status,
        created_at: plain.created_at,
        reviewer: plain.reviewer || null
      };
    });

    res.json({
      data,
      ...paginationResponse(data, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: formatError(error) });
  }
});

// ─── POST /user/review-add (Laravel-compatible) ─────────────────
router.post('/user/review-add', authenticate, isClient, async (req, res) => {
  try {
    const { service_id, order_id, rating, message: msg } = req.body;

    // Validation
    const errors = {};
    if (!rating || rating < 1 || rating > 5) errors.rating = ['Rating must be between 1 and 5'];
    if (!service_id) errors.service_id = ['Service ID is required'];
    if (!order_id) errors.order_id = ['Order ID is required'];
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ message: 'Validation failed', errors });
    }

    // Check service exists
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(422).json({ message: 'Service not found', errors: { service_id: ['Service does not exist'] } });
    }

    // Check order exists and belongs to user
    const { Order } = require('../models');
    const order = await Order.findOne({ where: { id: order_id, user_id: req.user.id } });
    if (!order) {
      return res.status(422).json({ message: 'Order not found', errors: { order_id: ['Order does not exist'] } });
    }

    // Check duplicate review
    const existing = await Review.findOne({
      where: { reviewer_id: req.user.id, service_id, order_id }
    });
    if (existing) {
      return res.status(400).json({ message: 'You have already reviewed this service for this order' });
    }

    const newReview = await Review.create({
      reviewer_id: req.user.id,
      admin_id: service.admin_id || null,
      type: service.type || null,
      service_id,
      order_id,
      rating,
      message: msg || null,
      status: 'published'
    });

    res.status(201).json({ message: 'Review added successfully', status: 'add_success', data: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add review', error: formatError(error) });
  }
});

module.exports = router;
