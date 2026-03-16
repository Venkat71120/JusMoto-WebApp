const express = require('express');
const router = express.Router();
const { authenticate, isFranchise, isAdmin } = require('../middleware/auth.middleware');
const { Order, OrderItem, User, Service, Admin, Ticket } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse } = require('../utils/helpers');

// Franchise dashboard stats
router.get('/dashboard', authenticate, isFranchise, async (req, res) => {
  try {
    const franchiseId = req.admin.id;

    const [orderStats] = await require('../models').sequelize.query(`
      SELECT
        COUNT(*) as total_orders,
        SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) as pending_orders,
        SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) as accepted_orders,
        SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) as in_progress_orders,
        SUM(CASE WHEN status = 3 THEN 1 ELSE 0 END) as completed_orders,
        SUM(CASE WHEN status = 4 THEN 1 ELSE 0 END) as cancelled_orders,
        SUM(total) as total_revenue,
        SUM(CASE WHEN payment_status = 1 THEN total ELSE 0 END) as paid_revenue
      FROM orders
      WHERE franchise_admin_id = ?
    `, { replacements: [franchiseId] });

    // Today's orders
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayOrders = await Order.count({
      where: {
        franchise_admin_id: franchiseId,
        created_at: { [Op.gte]: today }
      }
    });

    // Open tickets
    const openTickets = await Ticket.count({
      where: {
        admin_id: franchiseId,
        status: { [Op.in]: ['open', 'in_progress'] }
      }
    });

    // Orders by status (for distribution chart)
    const [ordersByStatus] = await require('../models').sequelize.query(`
      SELECT status, COUNT(*) as count FROM orders
      WHERE franchise_admin_id = ?
      GROUP BY status
    `, { replacements: [franchiseId] });

    // Recent orders
    const [recentOrders] = await require('../models').sequelize.query(`
      SELECT o.id, o.total, o.status, o.payment_status, o.created_at,
             u.first_name, u.last_name, u.email, u.image as user_image
      FROM orders o LEFT JOIN users u ON o.user_id = u.id
      WHERE o.franchise_admin_id = ?
      ORDER BY o.created_at DESC LIMIT 5
    `, { replacements: [franchiseId] });

    res.json({
      success: true,
      data: {
        ...orderStats[0],
        today_orders: todayOrders,
        open_tickets: openTickets,
        orders_by_status: ordersByStatus,
        recent_orders: recentOrders
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get franchise orders
router.get('/orders', authenticate, isFranchise, async (req, res) => {
  try {
    const { status, payment_status, date_from, date_to, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { franchise_admin_id: req.admin.id };
    if (status !== undefined) where.status = status;
    if (payment_status !== undefined) where.payment_status = payment_status;

    if (date_from || date_to) {
      where.created_at = {};
      if (date_from) where.created_at[Op.gte] = new Date(date_from);
      if (date_to) where.created_at[Op.lte] = new Date(date_to);
    }

    const { rows, count } = await Order.findAndCountAll({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { model: OrderItem, as: 'items', include: ['service'] }
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
router.get('/orders/:id', authenticate, isFranchise, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { id: req.params.id, franchise_admin_id: req.admin.id },
      include: [
        { model: User, as: 'user' },
        { model: OrderItem, as: 'items', include: ['service'] },
        'location', 'reviews', 'refund'
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

// Update order status
router.put('/orders/:id/status', authenticate, isFranchise, async (req, res) => {
  try {
    const { status, note } = req.body;

    const order = await Order.findOne({
      where: { id: req.params.id, franchise_admin_id: req.admin.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    await order.update({
      status,
      order_note: note ? `${order.order_note || ''}\n[Franchise]: ${note}` : order.order_note
    });

    // TODO: Send notification to user

    res.json({ success: true, data: order, message: 'Order status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get franchise services
router.get('/services', authenticate, isFranchise, async (req, res) => {
  try {
    const { status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { admin_id: req.admin.id };
    if (status !== undefined) where.status = status;

    const { rows, count } = await Service.findAndCountAll({
      where,
      include: ['category', 'subCategory'],
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

// Franchise profile
router.get('/profile', authenticate, isFranchise, async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.admin.id);
    res.json({ success: true, data: admin });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/profile', authenticate, isFranchise, async (req, res) => {
  try {
    const { name, phone, franchise_name, franchise_address, franchise_logo } = req.body;

    await Admin.update(
      { name, phone, franchise_name, franchise_address, franchise_logo },
      { where: { id: req.admin.id } }
    );

    const admin = await Admin.findByPk(req.admin.id);
    res.json({ success: true, data: admin, message: 'Profile updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Franchise tickets
router.get('/tickets', authenticate, isFranchise, async (req, res) => {
  try {
    const { status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { admin_id: req.admin.id };
    if (status) where.status = status;

    const { rows, count } = await Ticket.findAndCountAll({
      where,
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

// Revenue report
router.get('/reports/revenue', authenticate, isFranchise, async (req, res) => {
  try {
    const { period = 'month' } = req.query;
    const franchiseId = req.admin.id;

    let dateFormat, groupBy;
    switch (period) {
      case 'day':
        dateFormat = '%Y-%m-%d';
        groupBy = 'DATE(created_at)';
        break;
      case 'week':
        dateFormat = '%Y-%u';
        groupBy = 'YEARWEEK(created_at)';
        break;
      case 'month':
      default:
        dateFormat = '%Y-%m';
        groupBy = "DATE_FORMAT(created_at, '%Y-%m')";
        break;
    }

    const [revenue] = await require('../models').sequelize.query(`
      SELECT
        DATE_FORMAT(created_at, '${dateFormat}') as period,
        COUNT(*) as order_count,
        SUM(total) as total_revenue,
        SUM(CASE WHEN payment_status = 1 THEN total ELSE 0 END) as paid_revenue
      FROM orders
      WHERE franchise_admin_id = ?
        AND created_at >= DATE_SUB(NOW(), INTERVAL 12 MONTH)
      GROUP BY ${groupBy}
      ORDER BY period DESC
      LIMIT 12
    `, { replacements: [franchiseId] });

    res.json({ success: true, data: revenue });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
