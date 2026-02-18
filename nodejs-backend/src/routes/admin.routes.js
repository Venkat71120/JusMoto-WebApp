const express = require('express');
const router = express.Router();
const { authenticate, isAdmin, hasPermission } = require('../middleware/auth.middleware');
const { User, Admin, Order, Service, Category, Brand, Coupon, Offer } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse } = require('../utils/helpers');

// Dashboard stats
router.get('/dashboard', authenticate, isAdmin, async (req, res) => {
  try {
    const [stats] = await require('../models').sequelize.query(`
      SELECT
        (SELECT COUNT(*) FROM users WHERE deleted_at IS NULL) as total_users,
        (SELECT COUNT(*) FROM orders) as total_orders,
        (SELECT SUM(total) FROM orders WHERE payment_status = 1) as total_revenue,
        (SELECT COUNT(*) FROM services WHERE status = 1) as active_services,
        (SELECT COUNT(*) FROM orders WHERE status = 0) as pending_orders,
        (SELECT COUNT(*) FROM orders WHERE DATE(created_at) = CURDATE()) as today_orders
    `);

    res.json({ success: true, data: stats[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// User management
router.get('/users', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (status !== undefined) where.status = status;
    if (search) {
      where[Op.or] = [
        { first_name: { [Op.like]: `%${search}%` } },
        { last_name: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
        { phone: { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await User.findAndCountAll({
      where,
      attributes: { exclude: ['password'] },
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

router.get('/users/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: ['wallet', 'orders', 'selectedCars']
    });

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/users/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, is_suspend } = req.body;

    await User.update(
      { status, is_suspend },
      { where: { id: req.params.id } }
    );

    res.json({ success: true, message: 'User status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Franchise management
router.get('/franchises', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { is_franchise: 1 };
    if (status !== undefined) where.status = status;

    const { rows, count } = await Admin.findAndCountAll({
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

router.post('/franchises', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, email, password, phone, franchise_name, franchise_address, commission_rate, state_id, city_id } = req.body;

    const franchise = await Admin.create({
      name,
      email,
      password,
      phone,
      is_franchise: 1,
      franchise_name,
      franchise_address,
      commission_rate,
      state_id,
      city_id,
      role: 'franchise',
      status: 1
    });

    res.status(201).json({ success: true, data: franchise, message: 'Franchise created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Coupon management
router.get('/coupons', authenticate, isAdmin, async (req, res) => {
  try {
    const coupons = await Coupon.findAll({
      order: [['created_at', 'DESC']]
    });
    res.json({ success: true, data: coupons });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/coupons', authenticate, isAdmin, async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.status(201).json({ success: true, data: coupon, message: 'Coupon created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/coupons/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Coupon.update(req.body, { where: { id: req.params.id } });
    const coupon = await Coupon.findByPk(req.params.id);
    res.json({ success: true, data: coupon, message: 'Coupon updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/coupons/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Coupon.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Coupon deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Offer management
router.get('/offers', authenticate, isAdmin, async (req, res) => {
  try {
    const offers = await Offer.findAll({
      include: ['offerServices'],
      order: [['created_at', 'DESC']]
    });
    res.json({ success: true, data: offers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/offers', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, description, image, offer_percentage, start_date, expires_at, service_ids } = req.body;

    const offer = await Offer.create({
      title,
      slug: require('../utils/helpers').createSlug(title),
      description,
      image,
      offer_percentage,
      start_date,
      expires_at,
      status: 1
    });

    if (service_ids && service_ids.length > 0) {
      const { OfferService } = require('../models');
      await OfferService.bulkCreate(
        service_ids.map(id => ({ offer_id: offer.id, service_id: id }))
      );
    }

    res.status(201).json({ success: true, data: offer, message: 'Offer created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Reports
router.get('/reports/revenue', authenticate, isAdmin, async (req, res) => {
  try {
    const { from, to, group_by = 'day' } = req.query;

    let dateFormat;
    switch (group_by) {
      case 'month':
        dateFormat = '%Y-%m';
        break;
      case 'week':
        dateFormat = '%Y-%u';
        break;
      default:
        dateFormat = '%Y-%m-%d';
    }

    const [report] = await require('../models').sequelize.query(`
      SELECT
        DATE_FORMAT(created_at, '${dateFormat}') as period,
        COUNT(*) as order_count,
        SUM(total) as total_revenue,
        SUM(CASE WHEN payment_status = 1 THEN total ELSE 0 END) as paid_revenue
      FROM orders
      WHERE created_at BETWEEN ? AND ?
      GROUP BY period
      ORDER BY period ASC
    `, {
      replacements: [from || '2000-01-01', to || '2099-12-31']
    });

    res.json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/reports/orders', authenticate, isAdmin, async (req, res) => {
  try {
    const [report] = await require('../models').sequelize.query(`
      SELECT
        status,
        COUNT(*) as count,
        SUM(total) as total_amount
      FROM orders
      GROUP BY status
    `);

    res.json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
