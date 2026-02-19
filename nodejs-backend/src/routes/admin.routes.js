const express = require('express');
const router = express.Router();
const { authenticate, isAdmin, hasPermission } = require('../middleware/auth.middleware');
const { User, Admin, Order, Service, Category, Brand, Car, Coupon, Offer } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse } = require('../utils/helpers');

// Dashboard stats
router.get('/dashboard', authenticate, isAdmin, async (req, res) => {
  try {
    const [stats] = await require('../models').sequelize.query(`
      SELECT
        (SELECT COUNT(*) FROM admins) as total_admins,
        (SELECT COUNT(*) FROM users WHERE deleted_at IS NULL) as total_users,
        (SELECT COUNT(*) FROM services WHERE status = 1 AND type = 0) as total_services,
        (SELECT COUNT(*) FROM services WHERE status = 1 AND type = 1) as total_products,
        (SELECT COUNT(*) FROM cars) as total_cars,
        (SELECT COUNT(*) FROM coupons) as total_coupons,
        (SELECT COUNT(*) FROM orders) as total_orders,
        (SELECT COALESCE(SUM(tax), 0) FROM orders WHERE status IN (2,3) AND payment_status = 1) as total_tax,
        (SELECT COALESCE(SUM(total), 0) FROM orders WHERE status IN (2,3) AND payment_status = 1) as total_earnings,
        (SELECT COALESCE(SUM(total), 0) FROM orders WHERE payment_status = 1) as total_revenue,
        (SELECT COUNT(*) FROM orders WHERE status = 0) as pending_orders,
        (SELECT COUNT(*) FROM orders WHERE DATE(created_at) = CURDATE()) as today_orders
    `);

    // Recent orders
    const [recentOrders] = await require('../models').sequelize.query(`
      SELECT o.id, o.total, o.status, o.payment_status, o.created_at,
             u.first_name, u.last_name, u.email, u.image as user_image
      FROM orders o
      LEFT JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC
      LIMIT 5
    `);

    // Recent users
    const [recentUsers] = await require('../models').sequelize.query(`
      SELECT id, first_name, last_name, email, image, created_at
      FROM users WHERE deleted_at IS NULL
      ORDER BY created_at DESC
      LIMIT 5
    `);

    res.json({
      success: true,
      data: {
        ...stats[0],
        recent_orders: recentOrders,
        recent_users: recentUsers
      }
    });
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
      include: ['wallet', 'orders']
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

// Delete user
router.delete('/users/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    await user.destroy();
    res.json({ success: true, message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Orders Management ====================
router.get('/orders', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, payment_status, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (status !== undefined && status !== '') where.status = status;
    if (payment_status !== undefined && payment_status !== '') where.payment_status = payment_status;
    if (search) {
      where[Op.or] = [
        { invoice_number: { [Op.like]: `%${search}%` } },
        { '$user.first_name$': { [Op.like]: `%${search}%` } },
        { '$user.last_name$': { [Op.like]: `%${search}%` } },
        { '$user.email$': { [Op.like]: `%${search}%` } }
      ];
    }
    const { rows, count } = await Order.findAndCountAll({
      where,
      include: [{ association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone', 'image'] }],
      ...pagination,
      order: [['created_at', 'DESC']],
      subQuery: false
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/orders/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone', 'image'] },
        { association: 'items', include: [{ association: 'service', attributes: ['id', 'title', 'image', 'price'] }] },
        { association: 'location' }
      ]
    });
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/orders/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    await Order.update({ status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Order status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/orders/:id/payment-status', authenticate, isAdmin, async (req, res) => {
  try {
    const { payment_status } = req.body;
    await Order.update({ payment_status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Payment status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Services Management ====================
router.get('/services', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, is_featured, type, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (status !== undefined && status !== '') where.status = status;
    if (is_featured !== undefined && is_featured !== '') where.is_featured = is_featured;
    if (type !== undefined && type !== '') where.type = type;
    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { slug: { [Op.like]: `%${search}%` } }
      ];
    }
    const { rows, count } = await Service.findAndCountAll({
      where,
      include: [{ association: 'category', attributes: ['id', 'name'] }],
      ...pagination,
      order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/services/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id, {
      include: ['category', 'includes', 'excludes', 'addons']
    });
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });
    res.json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/services', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, category_id, sub_category_id, price, discount_price, description, image, duration, max_qty, type, is_featured, status } = req.body;
    const slug = require('../utils/helpers').createSlug(title);
    const service = await Service.create({
      admin_id: req.admin.id, title, slug, category_id, sub_category_id, price, discount_price, description, image, duration, max_qty, type: type || 0, is_featured: is_featured || 0, status: status !== undefined ? status : 1
    });
    res.status(201).json({ success: true, data: service, message: 'Service created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/services/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, category_id, sub_category_id, price, discount_price, description, image, duration, max_qty, type, is_featured, status } = req.body;
    const updateData = { title, category_id, sub_category_id, price, discount_price, description, image, duration, max_qty, type, is_featured, status };
    if (title) updateData.slug = require('../utils/helpers').createSlug(title);
    await Service.update(updateData, { where: { id: req.params.id } });
    const service = await Service.findByPk(req.params.id, { include: ['category'] });
    res.json({ success: true, data: service, message: 'Service updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/services/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });
    await service.update({ status: service.status ? 0 : 1 });
    res.json({ success: true, data: service, message: 'Status toggled' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/services/:id/featured', authenticate, isAdmin, async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });
    await service.update({ is_featured: service.is_featured ? 0 : 1 });
    res.json({ success: true, data: service, message: 'Featured toggled' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/services/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Service.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Categories Management ====================
router.get('/categories', authenticate, isAdmin, async (req, res) => {
  try {
    const { search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { slug: { [Op.like]: `%${search}%` } }
      ];
    }
    const { rows, count } = await Category.findAndCountAll({
      where, ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/categories/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: ['subCategories'] });
    if (!category) return res.status(404).json({ success: false, error: 'Category not found' });
    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/categories', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, description, image, icon, status } = req.body;
    const slug = require('../utils/helpers').createSlug(name);
    const category = await Category.create({ name, slug, description, image, icon, status: status !== undefined ? status : 1 });
    res.status(201).json({ success: true, data: category, message: 'Category created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/categories/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, description, image, icon, status } = req.body;
    const updateData = { name, description, image, icon, status };
    if (name) updateData.slug = require('../utils/helpers').createSlug(name);
    await Category.update(updateData, { where: { id: req.params.id } });
    const category = await Category.findByPk(req.params.id);
    res.json({ success: true, data: category, message: 'Category updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/categories/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ success: false, error: 'Category not found' });
    await category.update({ status: category.status ? 0 : 1 });
    res.json({ success: true, data: category, message: 'Status toggled' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/categories/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Brands Management ====================
router.get('/brands', authenticate, isAdmin, async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};
    if (search) where.name = { [Op.like]: `%${search}%` };
    const brands = await Brand.findAll({ where, order: [['name', 'ASC']] });
    res.json({ success: true, data: brands });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/brands', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, image } = req.body;
    const brand = await Brand.create({ name, image });
    res.status(201).json({ success: true, data: brand, message: 'Brand created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/brands/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, image } = req.body;
    const updateData = { name, image };
    await Brand.update(updateData, { where: { id: req.params.id } });
    const brand = await Brand.findByPk(req.params.id);
    res.json({ success: true, data: brand, message: 'Brand updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/brands/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Brand.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Brand deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Cars Management ====================
router.get('/cars', authenticate, isAdmin, async (req, res) => {
  try {
    const { brand_id, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (brand_id) where.brand_id = brand_id;
    if (search) where.name = { [Op.like]: `%${search}%` };
    const { rows, count } = await Car.findAndCountAll({
      where,
      include: [{ association: 'brand', attributes: ['id', 'name', 'image'] }],
      ...pagination,
      order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/cars/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id, {
      include: ['brand']
    });
    if (!car) return res.status(404).json({ success: false, error: 'Car not found' });
    res.json({ success: true, data: car });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/cars', authenticate, isAdmin, async (req, res) => {
  try {
    const { brand_id, name, year, image } = req.body;
    const car = await Car.create({ brand_id, name, image, Year: year });
    res.status(201).json({ success: true, data: car, message: 'Car created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/cars/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { brand_id, name, year, image } = req.body;
    const updateData = { brand_id, name, image, Year: year };
    await Car.update(updateData, { where: { id: req.params.id } });
    const car = await Car.findByPk(req.params.id, { include: ['brand'] });
    res.json({ success: true, data: car, message: 'Car updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/cars/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Car.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Car deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get coupon detail
router.get('/coupons/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const coupon = await Coupon.findByPk(req.params.id);
    if (!coupon) return res.status(404).json({ success: false, error: 'Coupon not found' });
    res.json({ success: true, data: coupon });
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
