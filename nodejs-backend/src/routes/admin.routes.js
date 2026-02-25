const express = require('express');
const router = express.Router();
const { authenticate, isAdmin, hasPermission } = require('../middleware/auth.middleware');
const { uploadSingle } = require('../middleware/upload.middleware');
const { User, Admin, Order, Service, Category, SubCategory, Brand, Car, Coupon, Offer, OfferService,
        Variant, Review, Ticket, ChatMessage, Department, RefundedOrder, State, City, Area,
        Slider, AdminOutletLocation, AdminNotification, MediaUpload, EngineType, FuelType,
        Role, Permission, ServiceInclude, ServiceFaq, ServiceAdditional } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, createSlug } = require('../utils/helpers');
const path = require('path');
const fs = require('fs');
const emailService = require('../services/email.service');
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
    // Monthly revenue & orders for last 6 months (for charts)
    const [monthlyStats] = await require('../models').sequelize.query(`
      SELECT DATE_FORMAT(created_at, '%Y-%m') as month,
             DATE_FORMAT(created_at, '%b') as label,
             COUNT(*) as order_count,
             COALESCE(SUM(total), 0) as revenue,
             COALESCE(SUM(CASE WHEN payment_status = 1 THEN total ELSE 0 END), 0) as paid_revenue
      FROM orders
      WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
      GROUP BY month, label ORDER BY month ASC
    `);
    // Order status breakdown
    const [ordersByStatus] = await require('../models').sequelize.query(`
      SELECT status, COUNT(*) as count FROM orders GROUP BY status
    `);
    res.json({ success: true, data: { ...stats[0], recent_orders: recentOrders, recent_users: recentUsers, monthly_stats: monthlyStats, orders_by_status: ordersByStatus } });
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

    // Send account status email
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        let statusType = 'deactivated';
        if (is_suspend === 1) statusType = 'suspended';
        else if (status === 1) statusType = 'activated';
        await emailService.sendAccountStatusChanged(user, statusType);
      }
    } catch (emailErr) {
      console.error('Failed to send account status email:', emailErr.message);
    }

    res.json({ success: true, message: 'User status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/users/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    // Send deletion email before destroying (need email/name while record exists)
    try {
      await emailService.sendAccountDeleted(user);
    } catch (emailErr) {
      console.error('Failed to send account deletion email:', emailErr.message);
    }

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
    // Franchise admins only see orders allocated to them
    if (req.admin.is_franchise) {
      where.franchise_admin_id = req.admin.id;
    }
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
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone', 'image'] },
        { association: 'items', attributes: ['id'], include: [{ association: 'service', attributes: ['id', 'type'] }] }
      ],
      ...pagination, order: [['created_at', 'DESC']], subQuery: false
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/orders/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const where = { id: req.params.id };
    // Franchise admins can only view their allocated orders
    if (req.admin.is_franchise) {
      where.franchise_admin_id = req.admin.id;
    }
    const order = await Order.findOne({
      where,
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone', 'image'] },
        { association: 'items', include: [{ association: 'service', attributes: ['id', 'title', 'image', 'price', 'type'] }] },
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

// Generate invoice HTML for download
router.get('/orders/:id/invoice', authenticate, isAdmin, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { association: 'items', include: [{ association: 'service', attributes: ['id', 'title'] }] },
        { association: 'location' }
      ]
    });
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });

    const statusLabels = ['Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];
    const scheduleLabels = { morning: '9 AM - 12 PM', afternoon: '12 PM - 4 PM', evening: '4 PM - 7 PM' };

    const itemsHtml = (order.items || []).map((item, i) => {
      const qty = item.qty || item.quantity || 1;
      return `<tr><td>${i + 1}</td><td>${item.service?.title || 'Service #' + item.service_id}</td><td>&#8377;${Number(item.price).toFixed(2)}</td><td>${qty}</td><td style="text-align:right">&#8377;${(item.price * qty).toFixed(2)}</td></tr>`;
    }).join('');

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Invoice ${order.invoice_number || order.id}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;color:#333;padding:40px;max-width:800px;margin:0 auto}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:30px;border-bottom:3px solid #e31b23;padding-bottom:20px}
.brand{font-size:28px;font-weight:700;color:#e31b23}
.invoice-title{text-align:right}.invoice-title h2{font-size:24px;color:#333;margin-bottom:5px}.invoice-title p{color:#666;font-size:13px}
.info-grid{display:flex;justify-content:space-between;margin-bottom:30px;gap:20px;flex-wrap:wrap}.info-box{flex:1;min-width:180px}.info-box h4{font-size:12px;text-transform:uppercase;color:#999;margin-bottom:8px;letter-spacing:0.5px}
.info-box p{font-size:14px;line-height:1.6}
table{width:100%;border-collapse:collapse;margin-bottom:20px}th{background:#f8f9fa;padding:10px 12px;text-align:left;font-size:12px;text-transform:uppercase;color:#666;border-bottom:2px solid #e5e7eb}
td{padding:10px 12px;border-bottom:1px solid #f1f5f9;font-size:14px}
.totals{margin-left:auto;width:280px}.totals .row{display:flex;justify-content:space-between;padding:6px 0;font-size:14px}
.totals .total{border-top:2px solid #333;padding-top:10px;margin-top:6px;font-weight:700;font-size:18px;color:#e31b23}
.footer{margin-top:40px;padding-top:20px;border-top:1px solid #e5e7eb;text-align:center;color:#999;font-size:12px}
@media print{body{padding:20px}}
</style></head><body>
<div class="header"><div class="brand">JusMoto</div><div class="invoice-title"><h2>INVOICE</h2><p>${order.invoice_number || 'INV-' + order.id}</p><p>${new Date(order.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p></div></div>
<div class="info-grid"><div class="info-box"><h4>Bill To</h4><p><strong>${order.user?.first_name || ''} ${order.user?.last_name || ''}</strong><br>${order.user?.email || ''}<br>${order.user?.phone || ''}</p></div>
<div class="info-box"><h4>Service Address</h4><p>${order.location?.title ? '<strong>' + order.location.title + '</strong><br>' : ''}${order.location?.address || '-'}<br>${order.location?.post_code ? 'PIN: ' + order.location.post_code : ''}${order.location?.phone ? '<br>Ph: ' + order.location.phone : ''}</p></div>
<div class="info-box"><h4>Order Details</h4><p>Order #${order.id}<br>Status: ${statusLabels[order.status] || order.status}<br>Payment: ${order.payment_status ? '<strong style="color:#16a34a">Paid</strong>' : 'Unpaid'}${order.date ? '<br>Date: ' + new Date(order.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}${order.schedule ? '<br>Slot: ' + (scheduleLabels[order.schedule] || order.schedule) : ''}</p></div></div>
<table><thead><tr><th>#</th><th>Service</th><th>Price</th><th>Qty</th><th style="text-align:right">Total</th></tr></thead><tbody>${itemsHtml}</tbody></table>
<div class="totals"><div class="row"><span>Subtotal</span><span>&#8377;${Number(order.sub_total || 0).toFixed(2)}</span></div>
<div class="row"><span>Tax</span><span>&#8377;${Number(order.tax || 0).toFixed(2)}</span></div>
${order.coupon_amount > 0 ? `<div class="row"><span>Coupon (${order.coupon_code || ''})</span><span style="color:#16a34a">-&#8377;${Number(order.coupon_amount).toFixed(2)}</span></div>` : ''}
${order.delivery_charge > 0 ? `<div class="row"><span>Delivery</span><span>&#8377;${Number(order.delivery_charge).toFixed(2)}</span></div>` : ''}
<div class="row total"><span>Grand Total</span><span>&#8377;${Number(order.total || 0).toFixed(2)}</span></div></div>
<div class="footer"><p>Thank you for choosing JusMoto!</p><p>This is a computer-generated invoice.</p></div>
</body></html>`;

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `inline; filename="invoice-${order.invoice_number || order.id}.html"`);
    res.send(html);
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
    const order = await Order.findByPk(req.params.id, {
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name'] },
        { association: 'items', include: [{ association: 'service', attributes: ['id', 'title', 'type'] }] }
      ]
    });
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    await order.update(updateData);

    // Auto-create service request when franchise admin is assigned (service orders only, not products)
    if (req.body.franchise_admin_id) {
      const hasServiceItem = (order.items || []).some(i => !i.service?.type || i.service.type === 0);
      if (hasServiceItem) {
        const existingTicket = await Ticket.findOne({ where: { order_id: order.id, admin_id: req.body.franchise_admin_id } });
        if (!existingTicket) {
          const itemsList = (order.items || []).map(i => `- ${i.service?.title || 'Service #' + i.service_id} (Qty: ${i.qty}, Price: ₹${i.price})`).join('\n');
          const desc = `ORDER DETAILS\nOrder ID: #${order.invoice_number || order.id}\nCustomer: ${order.user?.first_name || ''} ${order.user?.last_name || ''}\nTotal: ₹${order.total}\n\nItems:\n${itemsList}`;
          const ticket = await Ticket.create({
            admin_id: req.body.franchise_admin_id,
            user_id: order.user_id,
            order_id: order.id,
            title: `Order #${order.invoice_number || order.id} - Service Assignment`,
            subject: `Franchise service request for Order #${order.invoice_number || order.id}`,
            priority: 'normal',
            status: 'open',
            via: 'admin',
            description: desc
          });
          const { TicketMessage } = require('../models');
          await TicketMessage.create({ ticket_id: ticket.id, admin_id: req.admin.id, message: desc });
        }
      }
    }
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
    const service = await Service.findByPk(req.params.id, {
      include: ['category', 'includes', 'excludes', 'addons', 'faqs', 'additionals']
    });
    if (!service) return res.status(404).json({ success: false, error: 'Service not found' });

    const data = service.toJSON();

    // Transform includes: DB {title, description} → Frontend {title, icon}
    if (data.includes) {
      data.includes = data.includes.map(i => ({ id: i.id, title: i.title, icon: i.description || '' }));
    }

    // Transform faqs: DB {title, description} → Frontend {question, answer}
    if (data.faqs) {
      data.faqs = data.faqs.map(f => ({ id: f.id, question: f.title, answer: f.description || '' }));
    }

    // Split additionals into additional_info and specifications
    const additionals = data.additionals || [];
    data.additional_info = additionals
      .filter(a => a.type === 'info')
      .map(a => ({ id: a.id, title: a.title, description: a.description || '' }));
    data.specifications = additionals
      .filter(a => a.type === 'specification')
      .map(a => ({ id: a.id, title: a.title, value: a.description || '' }));
    delete data.additionals;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/services', authenticate, isAdmin, async (req, res) => {
  try {
    const { title, category_id, sub_category_id, price, discount_price, description, image,
            duration, max_qty, type, is_featured, status, video_url, gallery,
            includes, faqs, additional_info, specifications } = req.body;

    const service = await Service.create({
      admin_id: req.admin.id,
      title,
      slug: createSlug(title),
      category_id,
      sub_category_id,
      price,
      discount_price,
      description,
      image,
      video_url,
      gallery_images: gallery || [],
      duration,
      max_qty,
      type: type || 0,
      is_featured: is_featured || 0,
      status: status !== undefined ? status : 1,
      is_published: 1,
      published_at: new Date()
    });

    const serviceId = service.id;

    // Save includes: Frontend {icon, title} → DB {title, description: icon}
    if (includes && Array.isArray(includes)) {
      await ServiceInclude.bulkCreate(includes.map(i => ({
        service_id: serviceId, title: i.title || '', description: i.icon || ''
      })));
    }

    // Save FAQs: Frontend {question, answer} → DB {title: question, description: answer}
    if (faqs && Array.isArray(faqs)) {
      await ServiceFaq.bulkCreate(faqs.map(f => ({
        service_id: serviceId, title: f.question || '', description: f.answer || ''
      })));
    }

    // Save additional info → DB type='info'
    if (additional_info && Array.isArray(additional_info)) {
      await ServiceAdditional.bulkCreate(additional_info.map(a => ({
        service_id: serviceId, title: a.title || '', description: a.description || '', type: 'info'
      })));
    }

    // Save specifications → DB type='specification'
    if (specifications && Array.isArray(specifications)) {
      await ServiceAdditional.bulkCreate(specifications.map(s => ({
        service_id: serviceId, title: s.title || '', description: s.value || '', type: 'specification'
      })));
    }

    res.status(201).json({ success: true, data: service, message: 'Service created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/services/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { title, category_id, sub_category_id, price, discount_price, description, image,
            duration, max_qty, type, is_featured, status, video_url, gallery,
            includes, faqs, additional_info, specifications } = req.body;

    const updateData = { title, category_id, sub_category_id, price, discount_price, description,
                         image, duration, max_qty, type, is_featured, status, video_url };
    if (title) updateData.slug = createSlug(title);
    if (gallery !== undefined) updateData.gallery_images = gallery || [];

    await Service.update(updateData, { where: { id: serviceId } });

    // Replace includes: delete old, insert new
    if (includes && Array.isArray(includes)) {
      await ServiceInclude.destroy({ where: { service_id: serviceId } });
      if (includes.length > 0) {
        await ServiceInclude.bulkCreate(includes.map(i => ({
          service_id: serviceId, title: i.title || '', description: i.icon || ''
        })));
      }
    }

    // Replace FAQs: delete old, insert new
    if (faqs && Array.isArray(faqs)) {
      await ServiceFaq.destroy({ where: { service_id: serviceId } });
      if (faqs.length > 0) {
        await ServiceFaq.bulkCreate(faqs.map(f => ({
          service_id: serviceId, title: f.question || '', description: f.answer || ''
        })));
      }
    }

    // Replace additional info & specifications
    if (additional_info !== undefined || specifications !== undefined) {
      await ServiceAdditional.destroy({ where: { service_id: serviceId } });

      const additionalRows = [];
      if (additional_info && Array.isArray(additional_info)) {
        additional_info.forEach(a => {
          additionalRows.push({
            service_id: serviceId, title: a.title || '', description: a.description || '', type: 'info'
          });
        });
      }
      if (specifications && Array.isArray(specifications)) {
        specifications.forEach(s => {
          additionalRows.push({
            service_id: serviceId, title: s.title || '', description: s.value || '', type: 'specification'
          });
        });
      }
      if (additionalRows.length > 0) {
        await ServiceAdditional.bulkCreate(additionalRows);
      }
    }

    const service = await Service.findByPk(serviceId, { include: ['category'] });
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

    // Resolve numeric image IDs (legacy Laravel media) to actual file paths
    const brandsData = await Promise.all(brands.map(async (b) => {
      const brand = b.toJSON();
      if (brand.image && !isNaN(brand.image) && Number(brand.image) > 0) {
        const media = await MediaUpload.findByPk(Number(brand.image));
        brand.image = media ? media.path : null;
      } else if (brand.image === 0 || brand.image === '0') {
        brand.image = null;
      }
      return brand;
    }));

    res.json({ success: true, data: brandsData });
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
    const { name, car_id, engine_type_id, fual_type_id } = req.body;
    const variant = await Variant.create({ name: name || null, car_id, engine_type_id, fual_type_id });
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

// ==================== Service Requests (Tickets) Management ====================
router.get('/tickets', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, priority, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);
    const where = {};
    // Franchise admins only see their assigned tickets
    if (req.admin.is_franchise) {
      where.admin_id = req.admin.id;
    }
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
        { association: 'department', attributes: ['id', 'name'] },
        { association: 'admin', attributes: ['id', 'name', 'email'] }
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
    const { TicketMessage } = require('../models');
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'image', 'phone'] },
        { association: 'admin', attributes: ['id', 'name', 'email'] },
        { association: 'department' },
        { association: 'order', attributes: ['id', 'invoice_number', 'total', 'status', 'payment_status'] },
        { association: 'ticketMessages', include: [{ association: 'user', attributes: ['id', 'first_name', 'last_name', 'image'] }, { association: 'admin', attributes: ['id', 'name', 'image'] }] }
      ],
      order: [[{ model: TicketMessage, as: 'ticketMessages' }, 'created_at', 'ASC']]
    });
    if (!ticket) return res.status(404).json({ success: false, error: 'Service request not found' });
    res.json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/tickets/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const updateData = {};
    if (req.body.status) updateData.status = req.body.status;
    if (req.body.admin_id !== undefined) updateData.admin_id = req.body.admin_id || null;
    await Ticket.update(updateData, { where: { id: req.params.id } });
    res.json({ success: true, message: 'Service request updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/tickets/:id/reply', authenticate, isAdmin, ...uploadSingle('attachment'), async (req, res) => {
  try {
    const { message, type } = req.body;
    let attachment = null;
    if (req.file) {
      const filename = req.file.filename;
      const destDir = path.join(__dirname, '../../uploads/ticket');
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
      fs.renameSync(req.file.path, path.join(destDir, filename));
      attachment = `ticket/${filename}`;
    }
    const { TicketMessage } = require('../models');
    const ticketMsg = await TicketMessage.create({
      ticket_id: req.params.id,
      admin_id: req.admin.id,
      message,
      attachment
    });
    // Update ticket status to answered
    await Ticket.update({ status: 'answered' }, { where: { id: req.params.id } });
    res.status(201).json({ success: true, data: ticketMsg, message: 'Reply sent' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Assign service request to franchise admin
router.put('/tickets/:id/assign', authenticate, isAdmin, async (req, res) => {
  try {
    const { admin_id } = req.body;
    const ticket = await require('../models').Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ success: false, error: 'Service request not found' });
    await ticket.update({ admin_id: admin_id || null });
    res.json({ success: true, data: ticket, message: 'Service request assigned' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create service request from order (admin) - only for service orders
router.post('/tickets/create-from-order', authenticate, isAdmin, async (req, res) => {
  try {
    const { order_id, admin_id, title, subject, priority, description, department_id } = req.body;
    const order = await Order.findByPk(order_id, {
      include: [
        { association: 'user', attributes: ['id', 'first_name', 'last_name'] },
        { association: 'items', include: [{ association: 'service', attributes: ['id', 'type'] }] }
      ]
    });
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    const hasServiceItem = (order.items || []).some(i => !i.service?.type || i.service.type === 0);
    if (!hasServiceItem) return res.status(400).json({ success: false, error: 'Service requests can only be created for service orders, not product orders' });
    const ticket = await require('../models').Ticket.create({
      department_id: department_id || null,
      admin_id: admin_id || null,
      user_id: order.user_id,
      order_id: order.id,
      title: title || `Order #${order.invoice_number || order.id}`,
      subject: subject || `Service request for Order #${order.invoice_number || order.id}`,
      priority: priority || 'normal',
      status: 'open',
      via: 'admin',
      description: description || `Service request created from Order #${order.invoice_number || order.id}\nCustomer: ${order.user?.first_name || ''} ${order.user?.last_name || ''}\nTotal: ₹${order.total}`
    });
    if (description) {
      const { TicketMessage } = require('../models');
      await TicketMessage.create({ ticket_id: ticket.id, admin_id: req.admin.id, message: description });
    }
    res.status(201).json({ success: true, data: ticket, message: 'Service request created from order' });
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
    const data = [];
    for (const s of sliders) {
      const slider = s.toJSON();
      if (slider.image && !isNaN(slider.image) && Number(slider.image) > 0) {
        const media = await MediaUpload.findByPk(Number(slider.image));
        slider.image_url = media ? media.path : null;
      } else {
        slider.image_url = slider.image || null;
      }
      data.push(slider);
    }
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/sliders/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const slider = await Slider.findByPk(req.params.id);
    if (!slider) return res.status(404).json({ success: false, error: 'Slider not found' });
    res.json({ success: true, data: slider });
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
      include: [{ model: AdminOutletLocation, as: 'outletLocation', attributes: ['id', 'name', 'address'], required: false }],
      ...pagination, order: [['created_at', 'DESC']]
    });
    res.json({ success: true, ...paginationResponse(rows, count, pagination.page, pagination.limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/staff/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: AdminOutletLocation, as: 'outletLocation', attributes: ['id', 'name', 'address'], required: false }]
    });
    if (!admin) return res.status(404).json({ success: false, error: 'Staff not found' });
    res.json({ success: true, data: admin });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/staff', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, username, email, password, role, status, outlet_location_id } = req.body;
    const admin = await Admin.create({
      name, username, email, password,
      role: role || 'staff',
      is_franchise: 1,
      outlet_location_id: outlet_location_id || null,
      status: status !== undefined ? status : 1
    });
    res.status(201).json({ success: true, data: { id: admin.id, name: admin.name, email: admin.email, role: admin.role }, message: 'Franchise admin created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/staff/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, username, email, role, status, outlet_location_id } = req.body;
    const updateData = { name, username, email, role, status, outlet_location_id: outlet_location_id || null };
    if (req.body.password) updateData.password = req.body.password;
    await Admin.update(updateData, { where: { id: req.params.id } });
    const admin = await Admin.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: AdminOutletLocation, as: 'outletLocation', attributes: ['id', 'name', 'address'], required: false }]
    });
    res.json({ success: true, data: admin, message: 'Franchise admin updated' });
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

// ==================== Bulk Import Locations from API ====================
router.post('/locations/import-states', authenticate, isAdmin, async (req, res) => {
  try {
    const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
    const resp = await fetch('https://countriesnow.space/api/v0.1/countries/states/q?country=India');
    const json = await resp.json();
    if (!json.data || !json.data.states) return res.status(400).json({ success: false, error: 'Could not fetch states' });
    const states = json.data.states;
    let added = 0;
    for (const s of states) {
      const exists = await State.findOne({ where: { state: s.name } });
      if (!exists) {
        await State.create({ state: s.name, state_code: s.state_code || '', status: 1 });
        added++;
      }
    }
    res.json({ success: true, message: `Imported ${added} new states (${states.length - added} already existed)`, data: { total: states.length, added } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/locations/import-cities', authenticate, isAdmin, async (req, res) => {
  try {
    const { state_id } = req.body;
    if (!state_id) return res.status(400).json({ success: false, error: 'state_id is required' });
    const stateRecord = await State.findByPk(state_id);
    if (!stateRecord) return res.status(404).json({ success: false, error: 'State not found' });
    const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
    const url = `https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=${encodeURIComponent(stateRecord.state)}`;
    const resp = await fetch(url);
    const json = await resp.json();
    if (!json.data || !Array.isArray(json.data)) return res.status(400).json({ success: false, error: 'Could not fetch cities' });
    let added = 0;
    for (const cityName of json.data) {
      const exists = await City.findOne({ where: { city: cityName, state_id } });
      if (!exists) {
        await City.create({ city: cityName, state_id, status: 1 });
        added++;
      }
    }
    res.json({ success: true, message: `Imported ${added} new cities for ${stateRecord.state}`, data: { total: json.data.length, added } });
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

// ==================== Seed Permissions ====================
router.post('/seed-permissions', authenticate, isAdmin, async (req, res) => {
  try {
    const sidebarPermissions = [
      { name: 'dashboard.view', menu_name: 'Dashboard', guard_name: 'admin' },
      { name: 'orders.view', menu_name: 'Orders', guard_name: 'admin' },
      { name: 'users.view', menu_name: 'Users', guard_name: 'admin' },
      { name: 'catalog.view', menu_name: 'Catalog', guard_name: 'admin' },
      { name: 'vehicle.view', menu_name: 'Vehicle', guard_name: 'admin' },
      { name: 'franchise.view', menu_name: 'Franchise', guard_name: 'admin' },
      { name: 'marketing.view', menu_name: 'Marketing', guard_name: 'admin' },
      { name: 'support.view', menu_name: 'Support', guard_name: 'admin' },
      { name: 'locations.view', menu_name: 'Locations', guard_name: 'admin' },
      { name: 'reports.view', menu_name: 'Reports', guard_name: 'admin' },
      { name: 'finance.view', menu_name: 'Finance', guard_name: 'admin' },
      { name: 'content.view', menu_name: 'Content', guard_name: 'admin' },
      { name: 'settings.view', menu_name: 'Settings', guard_name: 'admin' }
    ];
    let added = 0;
    for (const perm of sidebarPermissions) {
      const [, created] = await Permission.findOrCreate({
        where: { name: perm.name },
        defaults: perm
      });
      if (created) added++;
    }
    res.json({ success: true, message: `Seeded ${added} new permissions (${sidebarPermissions.length - added} already existed)`, data: { total: sidebarPermissions.length, added } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== Seed Archive Cars ====================
router.post('/seed-archive-cars', authenticate, isAdmin, async (req, res) => {
  try {
    const results = { engineTypes: 0, fuelTypes: 0, brands: 0, cars: 0, variants: 0, errors: [] };

    // Archive path (relative to routes dir → ../../archive from nodejs-backend root → ../archive)
    const archivePath = path.join(__dirname, '../../../archive/car_data/car_data/train');
    if (!fs.existsSync(archivePath)) {
      return res.status(400).json({ success: false, error: 'Archive folder not found at expected path. Ensure archive/car_data/car_data/train/ exists.' });
    }

    // Create cars image directory
    const carImgDir = path.join(__dirname, '../../uploads/media/cars');
    if (!fs.existsSync(carImgDir)) fs.mkdirSync(carImgDir, { recursive: true });

    // ---- Seed Engine Types ----
    const engineTypeNames = ['Inline-4', 'Inline-5', 'Inline-6', 'V6', 'V8', 'V10', 'V12', 'W12', 'W16', 'Flat-4', 'Flat-6', 'Electric Motor'];
    const engineTypeMap = {};
    for (const name of engineTypeNames) {
      const [et, created] = await EngineType.findOrCreate({ where: { name }, defaults: { name } });
      engineTypeMap[name] = et.id;
      if (created) results.engineTypes++;
    }

    // ---- Seed Fuel Types ----
    const fuelTypeData = [
      { name: 'Petrol', image: 1 }, { name: 'Diesel', image: 2 }, { name: 'Electric', image: 3 },
      { name: 'Hybrid', image: 4 }, { name: 'Plug-in Hybrid', image: 5 }
    ];
    const fuelTypeMap = {};
    for (const ft of fuelTypeData) {
      const [record, created] = await FuelType.findOrCreate({ where: { name: ft.name }, defaults: ft });
      fuelTypeMap[ft.name] = record.id;
      if (created) results.fuelTypes++;
    }

    // ---- Known brands (sorted longest-first for multi-word matching) ----
    const knownBrands = [
      'AM General', 'Aston Martin', 'Land Rover', 'Mercedes-Benz', 'Rolls-Royce',
      'Chevrolet', 'Chrysler', 'Lamborghini', 'Mitsubishi', 'Volkswagen',
      'Cadillac', 'Bentley', 'Bugatti', 'Ferrari', 'Hyundai', 'Infiniti',
      'Lincoln', 'Maybach', 'McLaren', 'Plymouth', 'Porsche', 'Toyota',
      'Daewoo', 'Fisker', 'HUMMER', 'Jaguar', 'Nissan', 'Spyker', 'Suzuki',
      'Acura', 'Dodge', 'Eagle', 'Honda', 'Isuzu', 'Mazda', 'Scion', 'Tesla', 'Volvo',
      'Audi', 'FIAT', 'Ford', 'Jeep', 'MINI', 'BMW', 'GMC', 'Geo', 'Ram', 'Buick',
      'smart'
    ];

    // ---- Engine type overrides by exact directory name ----
    const engineOverrides = {
      // Electric
      'Tesla Model S Sedan 2012': 'Electric Motor',
      'Nissan Leaf Hatchback 2012': 'Electric Motor',
      // V12
      'Aston Martin Virage Convertible 2012': 'V12', 'Aston Martin Virage Coupe 2012': 'V12',
      'Ferrari FF Coupe 2012': 'V12',
      'Lamborghini Aventador Coupe 2012': 'V12', 'Lamborghini Diablo Coupe 2001': 'V12', 'Lamborghini Reventon Coupe 2008': 'V12',
      'Maybach Landaulet Convertible 2012': 'V12',
      'Rolls-Royce Phantom Drophead Coupe Convertible 2012': 'V12', 'Rolls-Royce Ghost Sedan 2012': 'V12', 'Rolls-Royce Phantom Sedan 2012': 'V12',
      // W16
      'Bugatti Veyron 16.4 Convertible 2009': 'W16', 'Bugatti Veyron 16.4 Coupe 2009': 'W16',
      // W12
      'Bentley Continental Supersports Conv. Convertible 2012': 'W12', 'Bentley Continental GT Coupe 2012': 'W12',
      'Bentley Continental GT Coupe 2007': 'W12', 'Bentley Continental Flying Spur Sedan 2007': 'W12',
      // V10
      'Audi R8 Coupe 2012': 'V10', 'Audi S6 Sedan 2011': 'V10',
      'Lamborghini Gallardo LP 570-4 Superleggera 2012': 'V10',
      // V8 overrides (brands that default to something else)
      'Audi RS 4 Convertible 2008': 'V8', 'Audi V8 Sedan 1994': 'V8', 'Audi S4 Sedan 2007': 'V8',
      'Bentley Arnage Sedan 2009': 'V8', 'Bentley Mulsanne Sedan 2011': 'V8',
      'Buick Rainier SUV 2007': 'V8',
      'Cadillac CTS-V Sedan 2012': 'V8', 'Cadillac Escalade EXT Crew Cab 2007': 'V8',
      'Chevrolet Corvette Convertible 2012': 'V8', 'Chevrolet Corvette ZR1 2012': 'V8',
      'Chevrolet Corvette Ron Fellows Edition Z06 2007': 'V8',
      'Chevrolet Camaro Convertible 2012': 'V8', 'Chevrolet Tahoe Hybrid SUV 2012': 'V8',
      'Chevrolet Silverado 1500 Hybrid Crew Cab 2012': 'V8',
      'Chevrolet Silverado 2500HD Regular Cab 2012': 'V8',
      'Chevrolet Silverado 1500 Classic Extended Cab 2007': 'V8',
      'Chevrolet Silverado 1500 Extended Cab 2012': 'V8',
      'Chevrolet Silverado 1500 Regular Cab 2012': 'V8',
      'Chevrolet Avalanche Crew Cab 2012': 'V8', 'Chevrolet TrailBlazer SS 2009': 'V8',
      'Chevrolet Monte Carlo Coupe 2007': 'V8', 'Chevrolet Express Cargo Van 2007': 'V8',
      'Chevrolet Express Van 2007': 'V8',
      'Chrysler 300 SRT-8 2010': 'V8', 'Chrysler Aspen SUV 2009': 'V8',
      'Dodge Ram Pickup 3500 Crew Cab 2010': 'V8', 'Dodge Ram Pickup 3500 Quad Cab 2009': 'V8',
      'Dodge Challenger SRT8 2011': 'V8', 'Dodge Charger Sedan 2012': 'V8',
      'Dodge Charger SRT-8 2009': 'V8', 'Dodge Durango SUV 2012': 'V8', 'Dodge Durango SUV 2007': 'V8',
      'Dodge Magnum Wagon 2008': 'V8',
      'Ferrari California Convertible 2012': 'V8', 'Ferrari 458 Italia Convertible 2012': 'V8', 'Ferrari 458 Italia Coupe 2012': 'V8',
      'Ford F-450 Super Duty Crew Cab 2012': 'V8', 'Ford Mustang Convertible 2007': 'V8',
      'Ford Expedition EL SUV 2009': 'V8', 'Ford GT Coupe 2006': 'V8',
      'Ford F-150 Regular Cab 2012': 'V8', 'Ford F-150 Regular Cab 2007': 'V8',
      'GMC Yukon Hybrid SUV 2012': 'V8', 'GMC Savana Van 2012': 'V8',
      'HUMMER H3T Crew Cab 2010': 'V8', 'HUMMER H2 SUT Crew Cab 2009': 'V8',
      'Hyundai Genesis Sedan 2012': 'V8', 'Infiniti QX56 SUV 2011': 'V8',
      'Jaguar XK XKR 2012': 'V8',
      'Land Rover Range Rover SUV 2012': 'V8', 'Land Rover LR2 SUV 2012': 'Inline-6',
      'Lincoln Town Car Sedan 2011': 'V8',
      'Mercedes-Benz S-Class Sedan 2012': 'V8', 'Mercedes-Benz SL-Class Coupe 2009': 'V8',
      'Porsche Panamera Sedan 2012': 'V8',
      'Ram C/V Cargo Van Minivan 2012': 'V6',
      'Spyker C8 Convertible 2009': 'V8', 'Spyker C8 Coupe 2009': 'V8',
      'Toyota Sequoia SUV 2012': 'V8',
      // V6 overrides (brands that default to Inline-4)
      'Chevrolet Traverse SUV 2012': 'V6', 'Chevrolet Impala Sedan 2007': 'V6',
      'Chevrolet Malibu Sedan 2007': 'V6', 'Chevrolet Malibu Hybrid Sedan 2010': 'V6',
      'Chrysler Sebring Convertible 2010': 'V6', 'Chrysler Town and Country Minivan 2012': 'V6',
      'Chrysler Crossfire Convertible 2008': 'V6',
      'Dodge Journey SUV 2012': 'V6', 'Dodge Dakota Crew Cab 2010': 'V6', 'Dodge Dakota Club Cab 2007': 'V6',
      'Dodge Caravan Minivan 1997': 'V6',
      'Ford Edge SUV 2012': 'V6', 'Ford Freestar Minivan 2007': 'V6', 'Ford E-Series Wagon Van 2012': 'V6',
      'GMC Terrain SUV 2012': 'V6', 'GMC Acadia SUV 2012': 'V6', 'GMC Canyon Extended Cab 2012': 'Inline-4',
      'Honda Odyssey Minivan 2012': 'V6', 'Honda Odyssey Minivan 2007': 'V6',
      'Honda Accord Coupe 2012': 'V6', 'Honda Accord Sedan 2012': 'V6',
      'Hyundai Santa Fe SUV 2012': 'V6', 'Hyundai Veracruz SUV 2012': 'V6', 'Hyundai Azera Sedan 2012': 'V6',
      'Isuzu Ascender SUV 2008': 'V6',
      'Mazda Tribute SUV 2011': 'V6',
      'Mercedes-Benz 300-Class Convertible 1993': 'Inline-6',
      'Nissan NV Passenger Van 2012': 'V6',
      'Toyota Camry Sedan 2012': 'V6', 'Toyota 4Runner SUV 2012': 'V6',
      // Inline-5 overrides
      'Audi 100 Sedan 1994': 'Inline-5', 'Audi 100 Wagon 1994': 'Inline-5', 'Audi TT RS Coupe 2012': 'Inline-5',
      // Inline-6 overrides
      'BMW ActiveHybrid 5 Sedan 2012': 'Inline-6', 'BMW 1 Series Convertible 2012': 'Inline-6',
      'BMW 1 Series Coupe 2012': 'Inline-6', 'BMW 3 Series Sedan 2012': 'Inline-6',
      'BMW 3 Series Wagon 2012': 'Inline-6', 'BMW 6 Series Convertible 2007': 'Inline-6',
      'BMW X5 SUV 2007': 'Inline-6', 'BMW X6 SUV 2012': 'Inline-6', 'BMW M3 Coupe 2012': 'V8',
      'BMW M5 Sedan 2010': 'V10', 'BMW M6 Convertible 2010': 'V10',
      'BMW X3 SUV 2012': 'Inline-6', 'BMW Z4 Convertible 2012': 'Inline-6',
      // Inline-4 overrides (for brands defaulting to V6)
      'Buick Verano Sedan 2012': 'Inline-4',
      'Chevrolet HHR SS 2010': 'Inline-4', 'Chevrolet Cobalt SS 2010': 'Inline-4', 'Chevrolet Sonic Sedan 2012': 'Inline-4',
      'Dodge Caliber Wagon 2012': 'Inline-4', 'Dodge Caliber Wagon 2007': 'Inline-4',
      'Dodge Sprinter Cargo Van 2009': 'Inline-5',
      'Ford Focus Sedan 2007': 'Inline-4', 'Ford Fiesta Sedan 2012': 'Inline-4', 'Ford Ranger SuperCab 2011': 'Inline-4',
      'Mercedes-Benz Sprinter Van 2012': 'Inline-4',
      'Nissan Juke Hatchback 2012': 'Inline-4', 'Nissan 240SX Coupe 1998': 'Inline-4',
      'Volvo 240 Sedan 1993': 'Inline-4',
    };

    // ---- Fuel type overrides (default = Petrol) ----
    const fuelOverrides = {
      'Tesla Model S Sedan 2012': 'Electric',
      'Nissan Leaf Hatchback 2012': 'Electric',
      'BMW ActiveHybrid 5 Sedan 2012': 'Hybrid',
      'Chevrolet Silverado 1500 Hybrid Crew Cab 2012': 'Hybrid',
      'Chevrolet Tahoe Hybrid SUV 2012': 'Hybrid',
      'Chevrolet Malibu Hybrid Sedan 2010': 'Hybrid',
      'Fisker Karma Sedan 2012': 'Plug-in Hybrid',
      'GMC Yukon Hybrid SUV 2012': 'Hybrid',
      'Hyundai Sonata Hybrid Sedan 2012': 'Hybrid',
      'Mercedes-Benz Sprinter Van 2012': 'Diesel',
      'Dodge Sprinter Cargo Van 2009': 'Diesel',
      'Ford F-450 Super Duty Crew Cab 2012': 'Diesel',
      'Chevrolet Silverado 2500HD Regular Cab 2012': 'Diesel',
    };

    // ---- Brand default engine types ----
    const brandEngineDefaults = {
      'AM General': 'V8', 'Acura': 'V6', 'Aston Martin': 'V8', 'Audi': 'Inline-4',
      'BMW': 'Inline-6', 'Bentley': 'W12', 'Bugatti': 'W16', 'Buick': 'V6',
      'Cadillac': 'V6', 'Chevrolet': 'V6', 'Chrysler': 'V6', 'Daewoo': 'Inline-4',
      'Dodge': 'V6', 'Eagle': 'Inline-4', 'FIAT': 'Inline-4', 'Ferrari': 'V8',
      'Fisker': 'Inline-4', 'Ford': 'V6', 'GMC': 'V6', 'Geo': 'Inline-4',
      'HUMMER': 'V8', 'Honda': 'Inline-4', 'Hyundai': 'Inline-4', 'Infiniti': 'V6',
      'Isuzu': 'Inline-4', 'Jaguar': 'V8', 'Jeep': 'V6', 'Lamborghini': 'V10',
      'Land Rover': 'V8', 'Lincoln': 'V8', 'MINI': 'Inline-4', 'Maybach': 'V12',
      'Mazda': 'Inline-4', 'McLaren': 'V8', 'Mercedes-Benz': 'V6', 'Mitsubishi': 'Inline-4',
      'Nissan': 'Inline-4', 'Plymouth': 'Inline-4', 'Porsche': 'Flat-6', 'Ram': 'V8',
      'Rolls-Royce': 'V12', 'Scion': 'Inline-4', 'Spyker': 'V8', 'Suzuki': 'Inline-4',
      'Tesla': 'Electric Motor', 'Toyota': 'Inline-4', 'Volkswagen': 'Inline-4',
      'Volvo': 'Inline-5', 'smart': 'Inline-4'
    };

    // ---- Read archive directories ----
    const dirs = fs.readdirSync(archivePath).filter(d =>
      fs.statSync(path.join(archivePath, d)).isDirectory()
    ).sort();

    for (const dirName of dirs) {
      try {
        // Parse brand (match longest brand name first)
        let brand = null;
        let rest = null;
        for (const b of knownBrands) {
          if (dirName.startsWith(b + ' ')) {
            brand = b;
            rest = dirName.substring(b.length + 1).trim();
            break;
          }
          // Case-insensitive check for 'smart'
          if (dirName.toLowerCase().startsWith(b.toLowerCase() + ' ')) {
            brand = b;
            rest = dirName.substring(b.length + 1).trim();
            break;
          }
        }
        if (!brand || !rest) {
          results.errors.push(`Could not parse brand: ${dirName}`);
          continue;
        }

        // Parse year (last token) and model name (everything else)
        const tokens = rest.split(' ');
        const year = tokens.pop();
        const modelName = tokens.join(' ');
        if (!modelName || !year || !/^\d{4}$/.test(year)) {
          results.errors.push(`Could not parse model/year: ${dirName}`);
          continue;
        }

        // Create brand
        const [brandRecord, brandCreated] = await Brand.findOrCreate({
          where: { name: brand },
          defaults: { name: brand, image: 0 }
        });
        if (brandCreated) results.brands++;

        // Copy first image from archive
        const carDir = path.join(archivePath, dirName);
        const images = fs.readdirSync(carDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();
        let imagePath = null;

        if (images.length > 0) {
          const slug = dirName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
          const destFile = `${slug}.jpg`;
          const destPath = path.join(carImgDir, destFile);

          if (!fs.existsSync(destPath)) {
            fs.copyFileSync(path.join(carDir, images[0]), destPath);
            // Generate thumbnail
            const thumbDir = path.join(__dirname, '../../uploads/media/thumb');
            if (!fs.existsSync(thumbDir)) fs.mkdirSync(thumbDir, { recursive: true });
            try {
              await sharp(destPath).resize(150, 150, { fit: 'cover' }).toFile(path.join(thumbDir, destFile));
            } catch (e) { /* thumbnail generation is optional */ }
          }
          imagePath = `cars/${destFile}`;
        }

        // Create car
        const [carRecord, carCreated] = await Car.findOrCreate({
          where: { name: modelName, brand_id: brandRecord.id },
          defaults: {
            brand_id: brandRecord.id,
            name: modelName,
            image: imagePath,
            Year: year,
            status: 1
          }
        });
        // Update image if car exists but has no image
        if (!carCreated && !carRecord.image && imagePath) {
          await carRecord.update({ image: imagePath });
        }
        if (carCreated) results.cars++;

        // Determine engine and fuel type
        const engineName = engineOverrides[dirName] || brandEngineDefaults[brand] || 'Inline-4';
        const fuelName = fuelOverrides[dirName] || (brand === 'Tesla' ? 'Electric' : 'Petrol');
        const engineTypeId = engineTypeMap[engineName] || engineTypeMap['Inline-4'];
        const fuelTypeId = fuelTypeMap[fuelName] || fuelTypeMap['Petrol'];

        // Create variant
        const variantDisplayName = `${modelName} ${year}`;
        const [, varCreated] = await Variant.findOrCreate({
          where: { car_id: carRecord.id, name: variantDisplayName },
          defaults: {
            car_id: carRecord.id,
            name: variantDisplayName,
            engine_type_id: engineTypeId,
            fual_type_id: fuelTypeId,
            status: 1
          }
        });
        if (varCreated) results.variants++;

      } catch (err) {
        results.errors.push(`${dirName}: ${err.message}`);
      }
    }

    res.json({
      success: true,
      message: `Archive seeded: ${results.brands} brands, ${results.cars} cars, ${results.variants} variants, ${results.engineTypes} engine types, ${results.fuelTypes} fuel types`,
      data: results
    });
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
