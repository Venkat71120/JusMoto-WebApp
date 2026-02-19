const express = require('express');
const router = express.Router();
const { authenticate, isAdmin, hasPermission } = require('../middleware/auth.middleware');
const { uploadSingle } = require('../middleware/upload.middleware');
const { User, Admin, Order, Service, Category, SubCategory, Brand, Car, Coupon, Offer, OfferService,
        Variant, Review, Ticket, ChatMessage, Department, RefundedOrder, State, City, Area,
        Slider, AdminOutletLocation, AdminNotification, MediaUpload, EngineType, FuelType,
        Role, Permission } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, createSlug } = require('../utils/helpers');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// ==================== Dashboard ====================
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
    const [recentOrders] = await require('../models').sequelize.query(`
      SELECT o.id, o.total, o.status, o.payment_status, o.created_at,
             u.first_name, u.last_name, u.email, u.image as user_image
      FROM orders o LEFT JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC LIMIT 5
    `);
    const [recentUsers] = await require('../models').sequelize.query(`
      SELECT id, first_name, last_name, email, image, created_at
      FROM users WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 5
    `);
    res.json({ success: true, data: { ...stats[0], recent_orders: recentOrders, recent_users: recentUsers } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Media Upload ====================
const mediaUploadDir = path.join(__dirname, '../../uploads/media');
['', '/thumb', '/grid', '/large'].forEach(sub => {
  const dir = mediaUploadDir + sub;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

router.get('/media', authenticate, isAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 30, search } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (search) where.title = { [Op.like]: `%${search}%` };
    const { rows, count } = await MediaUpload.findAndCountAll({
      where, ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/media/upload', authenticate, isAdmin, ...uploadSingle('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });

    const file = req.file;
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.filename, path.extname(file.filename));

    // Move to media dir
    const destPath = path.join(mediaUploadDir, file.filename);
    fs.renameSync(file.path, destPath);

    let dimensions = null;
    // Generate thumbnails for images
    if (file.mimetype.startsWith('image/')) {
      try {
        const img = sharp(destPath);
        const meta = await img.metadata();
        dimensions = `${meta.width}x${meta.height}`;

        // Thumb 150x150
        await sharp(destPath).resize(150, 150, { fit: 'cover' }).toFile(path.join(mediaUploadDir, 'thumb', file.filename));
        // Grid 350px wide
        await sharp(destPath).resize(350, null).toFile(path.join(mediaUploadDir, 'grid', file.filename));
        // Large 740px wide
        await sharp(destPath).resize(740, null).toFile(path.join(mediaUploadDir, 'large', file.filename));
      } catch (e) {
        console.error('Image processing error:', e.message);
      }
    }

    const media = await MediaUpload.create({
      title: path.basename(file.originalname, ext),
      path: `media/${file.filename}`,
      alt: path.basename(file.originalname, ext),
      size: String(file.size),
      dimensions,
      type: file.mimetype,
      user_id: req.admin ? req.admin.id : null
    });

    res.status(201).json({ success: true, data: media, message: 'File uploaded' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/media/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const media = await MediaUpload.findByPk(req.params.id);
    if (!media) return res.status(404).json({ success: false, error: 'Media not found' });

    // Delete physical files
    const filename = path.basename(media.path);
    [mediaUploadDir, path.join(mediaUploadDir, 'thumb'), path.join(mediaUploadDir, 'grid'), path.join(mediaUploadDir, 'large')].forEach(dir => {
      const fp = path.join(dir, filename);
      if (fs.existsSync(fp)) fs.unlinkSync(fp);
    });

    await media.destroy();
    res.json({ success: true, message: 'Media deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== User Management ====================
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
      where, attributes: { exclude: ['password'] }, ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/users/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { include: ['wallet', 'orders'] });
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/users/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, is_suspend } = req.body;
    await User.update({ status, is_suspend }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'User status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

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
      ...pagination, order: [['created_at', 'DESC']], subQuery: false
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
    await Order.update({ status: req.body.status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Order status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/orders/:id/payment-status', authenticate, isAdmin, async (req, res) => {
  try {
    await Order.update({ payment_status: req.body.payment_status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Payment status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/orders/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const allowedFields = ['franchise_admin_id', 'order_note'];
    const updateData = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) updateData[field] = req.body[field];
    }
    await Order.update(updateData, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Order updated successfully' });
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
      where[Op.or] = [{ title: { [Op.like]: `%${search}%` } }, { slug: { [Op.like]: `%${search}%` } }];
    }
    const { rows, count } = await Service.findAndCountAll({
      where, include: [{ association: 'category', attributes: ['id', 'name'] }],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/services/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id, { include: ['category', 'includes', 'excludes', 'addons'] });
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });
    res.json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/services', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, category_id, sub_category_id, price, discount_price, description, image, duration, max_qty, type, is_featured, status } = req.body;
    const service = await Service.create({
      admin_id: req.admin.id, title, slug: createSlug(title), category_id, sub_category_id, price, discount_price, description, image, duration, max_qty, type: type || 0, is_featured: is_featured || 0, status: status !== undefined ? status : 1
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
    if (title) updateData.slug = createSlug(title);
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
    if (search) { where[Op.or] = [{ name: { [Op.like]: `%${search}%` } }, { slug: { [Op.like]: `%${search}%` } }]; }
    const { rows, count } = await Category.findAndCountAll({ where, ...pagination, order: [['created_at', 'DESC']] });
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
    const category = await Category.create({ name, slug: createSlug(name), description, image, icon, status: status !== undefined ? status : 1 });
    res.status(201).json({ success: true, data: category, message: 'Category created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/categories/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, description, image, icon, status } = req.body;
    const updateData = { name, description, image, icon, status };
    if (name) updateData.slug = createSlug(name);
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

// ==================== Sub-Categories Management ====================
router.get('/sub-categories', authenticate, isAdmin, async (req, res) => {
  try {
    const { category_id, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (category_id) where.category_id = category_id;
    if (search) where.name = { [Op.like]: `%${search}%` };
    const { rows, count } = await SubCategory.findAndCountAll({
      where, include: [{ association: 'category', attributes: ['id', 'name'] }],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/sub-categories', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, category_id, description, image, status } = req.body;
    const sub = await SubCategory.create({ name, slug: createSlug(name), category_id, description, image, status: status !== undefined ? status : 1 });
    res.status(201).json({ success: true, data: sub, message: 'Sub-category created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/sub-categories/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, category_id, description, image, status } = req.body;
    const updateData = { name, category_id, description, image, status };
    if (name) updateData.slug = createSlug(name);
    await SubCategory.update(updateData, { where: { id: req.params.id } });
    const sub = await SubCategory.findByPk(req.params.id, { include: ['category'] });
    res.json({ success: true, data: sub, message: 'Sub-category updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/sub-categories/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const sub = await SubCategory.findByPk(req.params.id);
    if (!sub) return res.status(404).json({ success: false, error: 'Sub-category not found' });
    await sub.update({ status: sub.status ? 0 : 1 });
    res.json({ success: true, data: sub, message: 'Status toggled' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/sub-categories/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await SubCategory.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Sub-category deleted' });
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
    await Brand.update({ name, image }, { where: { id: req.params.id } });
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
      where, include: [{ association: 'brand', attributes: ['id', 'name', 'image'] }],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/cars/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id, { include: ['brand'] });
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
    await Car.update({ brand_id, name, image, Year: year }, { where: { id: req.params.id } });
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

// ==================== Engine Types ====================
router.get('/engine-types', authenticate, isAdmin, async (req, res) => {
  try {
    const types = await EngineType.findAll({ order: [['name', 'ASC']] });
    res.json({ success: true, data: types });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/engine-types', authenticate, isAdmin, async (req, res) => {
  try {
    const type = await EngineType.create({ name: req.body.name });
    res.status(201).json({ success: true, data: type, message: 'Engine type created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/engine-types/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await EngineType.update({ name: req.body.name }, { where: { id: req.params.id } });
    const type = await EngineType.findByPk(req.params.id);
    res.json({ success: true, data: type, message: 'Engine type updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/engine-types/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await EngineType.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Engine type deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Fuel Types ====================
router.get('/fuel-types', authenticate, isAdmin, async (req, res) => {
  try {
    const types = await FuelType.findAll({ order: [['name', 'ASC']] });
    res.json({ success: true, data: types });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/fuel-types', authenticate, isAdmin, async (req, res) => {
  try {
    const type = await FuelType.create({ name: req.body.name, image: req.body.image || 0 });
    res.status(201).json({ success: true, data: type, message: 'Fuel type created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/fuel-types/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await FuelType.update({ name: req.body.name, image: req.body.image }, { where: { id: req.params.id } });
    const type = await FuelType.findByPk(req.params.id);
    res.json({ success: true, data: type, message: 'Fuel type updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/fuel-types/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await FuelType.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Fuel type deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Variants ====================
router.get('/variants', authenticate, isAdmin, async (req, res) => {
  try {
    const { car_id, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (car_id) where.car_id = car_id;
    const { rows, count } = await Variant.findAndCountAll({
      where,
      include: [
        { association: 'car', include: [{ association: 'brand', attributes: ['id', 'name'] }] },
        { association: 'engineType' },
        { association: 'fuelType' }
      ],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/variants', authenticate, isAdmin, async (req, res) => {
  try {
    const { car_id, engine_type_id, fual_type_id } = req.body;
    const variant = await Variant.create({ car_id, engine_type_id, fual_type_id });
    res.status(201).json({ success: true, data: variant, message: 'Variant created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/variants/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { car_id, engine_type_id, fual_type_id } = req.body;
    await Variant.update({ car_id, engine_type_id, fual_type_id }, { where: { id: req.params.id } });
    const variant = await Variant.findByPk(req.params.id, {
      include: ['car', 'engineType', 'fuelType']
    });
    res.json({ success: true, data: variant, message: 'Variant updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/variants/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Variant.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Variant deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Coupons Management ====================
router.get('/coupons', authenticate, isAdmin, async (req, res) => {
  try {
    const coupons = await Coupon.findAll({ order: [['created_at', 'DESC']] });
    res.json({ success: true, data: coupons });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/coupons/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const coupon = await Coupon.findByPk(req.params.id);
    if (!coupon) return res.status(404).json({ success: false, error: 'Coupon not found' });
    res.json({ success: true, data: coupon });
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

// ==================== Tickets Management ====================
router.get('/tickets', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, priority, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { subject: { [Op.like]: `%${search}%` } }
      ];
    }
    const { rows, count } = await Ticket.findAndCountAll({
      where,
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { association: 'department', attributes: ['id', 'name'] }
      ],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/tickets/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'image'] },
        { association: 'department' },
        { association: 'messages', order: [['created_at', 'ASC']] }
      ]
    });
    if (!ticket) return res.status(404).json({ success: false, error: 'Ticket not found' });
    res.json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/tickets/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    await Ticket.update({ status: req.body.status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Ticket status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/tickets/:id/reply', authenticate, isAdmin, async (req, res) => {
  try {
    const { message, type } = req.body;
    const chatMsg = await ChatMessage.create({
      ticket_id: req.params.id,
      message,
      type: type || 'admin',
      notify: 'user'
    });
    res.status(201).json({ success: true, data: chatMsg, message: 'Reply sent' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Departments ====================
router.get('/departments', authenticate, isAdmin, async (req, res) => {
  try {
    const departments = await Department.findAll({ order: [['name', 'ASC']] });
    res.json({ success: true, data: departments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/departments', authenticate, isAdmin, async (req, res) => {
  try {
    const dept = await Department.create({ name: req.body.name, status: req.body.status !== undefined ? req.body.status : 1 });
    res.status(201).json({ success: true, data: dept, message: 'Department created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/departments/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Department.update({ name: req.body.name, status: req.body.status }, { where: { id: req.params.id } });
    const dept = await Department.findByPk(req.params.id);
    res.json({ success: true, data: dept, message: 'Department updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/departments/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Department.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Department deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Reviews ====================
router.get('/reviews', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (status) where.status = status;
    const { rows, count } = await Review.findAndCountAll({
      where,
      include: [
        { association: 'reviewer', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { association: 'service', attributes: ['id', 'title'] }
      ],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/reviews/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    await Review.update({ status: req.body.status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Review status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/reviews/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Sliders ====================
router.get('/sliders', authenticate, isAdmin, async (req, res) => {
  try {
    const sliders = await Slider.findAll({ order: [['id', 'ASC']] });
    res.json({ success: true, data: sliders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/sliders', authenticate, isAdmin, async (req, res) => {
  try {
    const slider = await Slider.create(req.body);
    res.status(201).json({ success: true, data: slider, message: 'Slider created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/sliders/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Slider.update(req.body, { where: { id: req.params.id } });
    const slider = await Slider.findByPk(req.params.id);
    res.json({ success: true, data: slider, message: 'Slider updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/sliders/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Slider.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Slider deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Admin Notifications ====================
router.get('/notifications', authenticate, isAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const pagination = paginate(page, limit);
    const { rows, count } = await AdminNotification.findAndCountAll({
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/notifications/:id/read', authenticate, isAdmin, async (req, res) => {
  try {
    await AdminNotification.update({ is_read: 'read' }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Outlet Locations ====================
router.get('/outlet-locations', authenticate, isAdmin, async (req, res) => {
  try {
    const locations = await AdminOutletLocation.findAll({
      include: [{ association: 'admin', attributes: ['id', 'name'] }],
      order: [['created_at', 'DESC']]
    });
    res.json({ success: true, data: locations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/outlet-locations', authenticate, isAdmin, async (req, res) => {
  try {
    const loc = await AdminOutletLocation.create({ ...req.body, admin_id: req.admin.id });
    res.status(201).json({ success: true, data: loc, message: 'Location created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/outlet-locations/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await AdminOutletLocation.update(req.body, { where: { id: req.params.id } });
    const loc = await AdminOutletLocation.findByPk(req.params.id);
    res.json({ success: true, data: loc, message: 'Location updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/outlet-locations/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await AdminOutletLocation.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Location deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Staff / Admin Management ====================
router.get('/staff', authenticate, isAdmin, async (req, res) => {
  try {
    const { search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } }
      ];
    }
    const { rows, count } = await Admin.findAndCountAll({
      where, attributes: { exclude: ['password'] },
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/staff', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, email, password, role, status } = req.body;
    const admin = await Admin.create({ name, email, password, role: role || 'staff', status: status !== undefined ? status : 1 });
    res.status(201).json({ success: true, data: { id: admin.id, name: admin.name, email: admin.email, role: admin.role }, message: 'Staff created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/staff/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, email, role, status } = req.body;
    const updateData = { name, email, role, status };
    if (req.body.password) updateData.password = req.body.password;
    await Admin.update(updateData, { where: { id: req.params.id } });
    const admin = await Admin.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
    res.json({ success: true, data: admin, message: 'Staff updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/staff/:id', authenticate, isAdmin, async (req, res) => {
  try {
    if (req.params.id == req.admin.id) return res.status(400).json({ success: false, error: 'Cannot delete yourself' });
    await Admin.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Staff deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Roles & Permissions ====================
router.get('/roles', authenticate, isAdmin, async (req, res) => {
  try {
    const [roles] = await require('../models').sequelize.query(`
      SELECT r.*, GROUP_CONCAT(p.id) as permission_ids, GROUP_CONCAT(p.name) as permission_names
      FROM roles r
      LEFT JOIN role_has_permissions rhp ON r.id = rhp.role_id
      LEFT JOIN permissions p ON rhp.permission_id = p.id
      GROUP BY r.id ORDER BY r.name ASC
    `);
    const mapped = roles.map(r => ({
      ...r,
      permissions: r.permission_ids ? r.permission_ids.split(',').map((id, i) => ({ id: Number(id), name: r.permission_names.split(',')[i] })) : []
    }));
    res.json({ success: true, data: mapped });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/roles/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ success: false, error: 'Role not found' });
    const [perms] = await require('../models').sequelize.query(
      'SELECT p.id, p.name, p.menu_name FROM permissions p INNER JOIN role_has_permissions rhp ON p.id = rhp.permission_id WHERE rhp.role_id = ?',
      { replacements: [req.params.id] }
    );
    res.json({ success: true, data: { ...role.toJSON(), permissions: perms } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/roles', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, permission_ids } = req.body;
    if (!name) return res.status(400).json({ success: false, error: 'Name is required' });
    const role = await Role.create({ name, guard_name: 'admin' });
    if (permission_ids && permission_ids.length > 0) {
      const values = permission_ids.map(pid => `(${Number(pid)}, ${role.id})`).join(',');
      await require('../models').sequelize.query(`INSERT INTO role_has_permissions (permission_id, role_id) VALUES ${values}`);
    }
    res.status(201).json({ success: true, data: role, message: 'Role created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/roles/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, permission_ids } = req.body;
    await Role.update({ name }, { where: { id: req.params.id } });
    if (permission_ids !== undefined) {
      await require('../models').sequelize.query('DELETE FROM role_has_permissions WHERE role_id = ?', { replacements: [req.params.id] });
      if (permission_ids.length > 0) {
        const values = permission_ids.map(pid => `(${Number(pid)}, ${Number(req.params.id)})`).join(',');
        await require('../models').sequelize.query(`INSERT INTO role_has_permissions (permission_id, role_id) VALUES ${values}`);
      }
    }
    const role = await Role.findByPk(req.params.id);
    res.json({ success: true, data: role, message: 'Role updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/roles/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await require('../models').sequelize.query('DELETE FROM role_has_permissions WHERE role_id = ?', { replacements: [req.params.id] });
    await Role.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Role deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/permissions', authenticate, isAdmin, async (req, res) => {
  try {
    const permissions = await Permission.findAll({ order: [['menu_name', 'ASC'], ['name', 'ASC']] });
    res.json({ success: true, data: permissions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Location Management (States/Cities/Areas) ====================
router.get('/states', authenticate, isAdmin, async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};
    if (search) where.state = { [Op.like]: `%${search}%` };
    const states = await State.findAll({ where, order: [['state', 'ASC']] });
    res.json({ success: true, data: states });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/states', authenticate, isAdmin, async (req, res) => {
  try {
    const s = await State.create(req.body);
    res.status(201).json({ success: true, data: s, message: 'State created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/states/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await State.update(req.body, { where: { id: req.params.id } });
    const s = await State.findByPk(req.params.id);
    res.json({ success: true, data: s, message: 'State updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/states/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await State.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'State deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/cities', authenticate, isAdmin, async (req, res) => {
  try {
    const { state_id, search } = req.query;
    const where = {};
    if (state_id) where.state_id = state_id;
    if (search) where.city = { [Op.like]: `%${search}%` };
    const cities = await City.findAll({ where, include: [{ association: 'state', attributes: ['id', 'state'] }], order: [['city', 'ASC']] });
    res.json({ success: true, data: cities });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/cities', authenticate, isAdmin, async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json({ success: true, data: city, message: 'City created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/cities/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await City.update(req.body, { where: { id: req.params.id } });
    const city = await City.findByPk(req.params.id);
    res.json({ success: true, data: city, message: 'City updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/cities/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await City.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'City deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/areas', authenticate, isAdmin, async (req, res) => {
  try {
    const { city_id, search } = req.query;
    const where = {};
    if (city_id) where.city_id = city_id;
    if (search) where.area = { [Op.like]: `%${search}%` };
    const areas = await Area.findAll({ where, include: [{ association: 'city', attributes: ['id', 'city'] }], order: [['area', 'ASC']] });
    res.json({ success: true, data: areas });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/areas', authenticate, isAdmin, async (req, res) => {
  try {
    const area = await Area.create(req.body);
    res.status(201).json({ success: true, data: area, message: 'Area created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/areas/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Area.update(req.body, { where: { id: req.params.id } });
    const area = await Area.findByPk(req.params.id);
    res.json({ success: true, data: area, message: 'Area updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/areas/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Area.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Area deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Refunded Orders ====================
router.get('/refunded-orders', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    if (status !== undefined && status !== '') where.status = status;
    const { rows, count } = await RefundedOrder.findAndCountAll({
      where,
      include: [
        { association: 'order', attributes: ['id', 'invoice_number', 'total'] },
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email'] }
      ],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/refunded-orders/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    await RefundedOrder.update({ status: req.body.status }, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Refund status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Offers ====================
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

router.get('/offers/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const offer = await Offer.findByPk(req.params.id, { include: ['offerServices'] });
    if (!offer) return res.status(404).json({ success: false, error: 'Offer not found' });
    res.json({ success: true, data: offer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/offers', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, subTitle, image, offerPercentage, expires_at, is_primary, service_ids } = req.body;
    const offer = await Offer.create({ title, subTitle, image, offerPercentage, expires_at, is_primary, status: 1 });
    if (service_ids && service_ids.length > 0) {
      await OfferService.bulkCreate(service_ids.map(id => ({ offer_id: offer.id, service_id: id })));
    }
    res.status(201).json({ success: true, data: offer, message: 'Offer created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/offers/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, subTitle, image, offerPercentage, expires_at, is_primary, status, service_ids } = req.body;
    await Offer.update({ title, subTitle, image, offerPercentage, expires_at, is_primary, status }, { where: { id: req.params.id } });
    if (service_ids) {
      await OfferService.destroy({ where: { offer_id: req.params.id } });
      if (service_ids.length > 0) {
        await OfferService.bulkCreate(service_ids.map(id => ({ offer_id: req.params.id, service_id: id })));
      }
    }
    const offer = await Offer.findByPk(req.params.id, { include: ['offerServices'] });
    res.json({ success: true, data: offer, message: 'Offer updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/offers/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await OfferService.destroy({ where: { offer_id: req.params.id } });
    await Offer.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Offer deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Franchises ====================
router.get('/franchises', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = { is_franchise: 1 };
    if (status !== undefined) where.status = status;
    const { rows, count } = await Admin.findAndCountAll({ where, ...pagination, order: [['created_at', 'DESC']] });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/franchises', authenticate, isAdmin, async (req, res) => {
  try {
    const franchise = await Admin.create({ ...req.body, is_franchise: 1, role: 'franchise', status: 1 });
    res.status(201).json({ success: true, data: franchise, message: 'Franchise created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Reports ====================
router.get('/reports/revenue', authenticate, isAdmin, async (req, res) => {
  try {
    const { from, to, group_by = 'day' } = req.query;
    let dateFormat;
    switch (group_by) {
      case 'month': dateFormat = '%Y-%m'; break;
      case 'week': dateFormat = '%Y-%u'; break;
      default: dateFormat = '%Y-%m-%d';
    }
    const [report] = await require('../models').sequelize.query(`
      SELECT DATE_FORMAT(created_at, '${dateFormat}') as period,
             COUNT(*) as order_count, SUM(total) as total_revenue,
             SUM(CASE WHEN payment_status = 1 THEN total ELSE 0 END) as paid_revenue
      FROM orders WHERE created_at BETWEEN ? AND ?
      GROUP BY period ORDER BY period ASC
    `, { replacements: [from || '2000-01-01', to || '2099-12-31'] });
    res.json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/reports/orders', authenticate, isAdmin, async (req, res) => {
  try {
    const [report] = await require('../models').sequelize.query(`
      SELECT status, COUNT(*) as count, SUM(total) as total_amount FROM orders GROUP BY status
    `);
    res.json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Seed Data ====================
router.post('/seed-data', authenticate, isAdmin, async (req, res) => {
  try {
    const results = { brands: 0, cars: 0, states: 0, cities: 0 };
    const https = require('https');

    function fetchJsonApi(url, body = null) {
      return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const options = { hostname: parsedUrl.hostname, port: 443, path: parsedUrl.pathname + parsedUrl.search, method: body ? 'POST' : 'GET', headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
        if (body) options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(body));
        const r = https.request(options, (response) => {
          let data = '';
          response.on('data', c => data += c);
          response.on('end', () => { try { resolve(JSON.parse(data)); } catch(e) { reject(e); } });
        });
        r.on('error', reject);
        r.setTimeout(30000, () => { r.destroy(); reject(new Error('Timeout')); });
        if (body) r.write(JSON.stringify(body));
        r.end();
      });
    }

    const brandNames = ['Maruti Suzuki','Hyundai','Tata','Mahindra','Kia','Toyota','Honda','MG','Skoda','Volkswagen','Renault','Nissan','Jeep','Citroen','BMW','Mercedes-Benz','Audi','Ford','Chevrolet','Fiat'];
    const carModels = {
      'Maruti Suzuki':['Swift','Baleno','Dzire','Alto','WagonR','Brezza','Ertiga','Celerio','S-Presso','XL6','Ignis','Ciaz','Grand Vitara','Jimny','Fronx','Invicto'],
      'Hyundai':['Creta','Venue','i20','i10 Nios','Verna','Tucson','Alcazar','Aura','Exter','Ioniq 5'],
      'Tata':['Nexon','Punch','Harrier','Safari','Altroz','Tiago','Tigor','Curvv'],
      'Mahindra':['Thar','XUV700','Scorpio N','XUV400','XUV300','Bolero','Bolero Neo','Marazzo','XUV 3XO'],
      'Kia':['Seltos','Sonet','Carens','EV6','Carnival'],
      'Toyota':['Fortuner','Innova Crysta','Innova Hycross','Glanza','Urban Cruiser Hyryder','Camry','Vellfire','Hilux'],
      'Honda':['City','Amaze','Elevate','WR-V'],
      'MG':['Hector','Astor','ZS EV','Gloster','Comet EV'],
      'Skoda':['Kushaq','Slavia','Superb','Kodiaq','Octavia'],
      'Volkswagen':['Taigun','Virtus','Tiguan'],
      'Renault':['Kwid','Kiger','Triber'],
      'Nissan':['Magnite','Kicks','X-Trail'],
      'Jeep':['Compass','Meridian','Wrangler','Grand Cherokee'],
      'BMW':['3 Series','5 Series','X1','X3','X5','X7','iX','2 Series Gran Coupe'],
      'Mercedes-Benz':['C-Class','E-Class','S-Class','GLA','GLC','GLE','A-Class Limousine','EQS'],
      'Audi':['A4','A6','Q3','Q5','Q7','Q8','e-tron']
    };

    // Seed brands
    for (const name of brandNames) {
      const [, created] = await Brand.findOrCreate({ where: { name }, defaults: { name, image: null } });
      if (created) results.brands++;
    }

    // Seed cars
    const allBrands = await Brand.findAll();
    const brandMap = {};
    for (const b of allBrands) brandMap[b.name] = b.id;
    for (const [brandName, models] of Object.entries(carModels)) {
      const brandId = brandMap[brandName];
      if (!brandId) continue;
      for (const modelName of models) {
        const year = String(Math.floor(Math.random() * 6) + 2020);
        const [, created] = await Car.findOrCreate({ where: { name: modelName, brand_id: brandId }, defaults: { brand_id: brandId, name: modelName, image: null, Year: year } });
        if (created) results.cars++;
      }
    }

    // Seed states from API
    try {
      const stateRes = await fetchJsonApi('https://countriesnow.space/api/v0.1/countries/states', { country: 'India' });
      if (stateRes && stateRes.data && stateRes.data.states) {
        for (const s of stateRes.data.states) {
          const [, created] = await State.findOrCreate({ where: { state: s.name }, defaults: { state: s.name, state_code: s.state_code || null, status: 1 } });
          if (created) results.states++;
        }
      }
    } catch (e) { console.log('State API error:', e.message); }

    // Seed cities from API
    try {
      const allStates = await State.findAll();
      for (const stateRecord of allStates) {
        try {
          const cityRes = await fetchJsonApi('https://countriesnow.space/api/v0.1/countries/state/cities', { country: 'India', state: stateRecord.state });
          if (cityRes && cityRes.data && Array.isArray(cityRes.data)) {
            for (const cityName of cityRes.data) {
              if (!cityName || typeof cityName !== 'string') continue;
              const [, created] = await City.findOrCreate({ where: { city: cityName.trim(), state_id: stateRecord.id }, defaults: { state_id: stateRecord.id, city: cityName.trim(), status: 1 } });
              if (created) results.cities++;
            }
          }
          await new Promise(r => setTimeout(r, 150));
        } catch (e) { continue; }
      }
    } catch (e) { console.log('City API error:', e.message); }

    res.json({ success: true, message: 'Data seeded successfully', data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
