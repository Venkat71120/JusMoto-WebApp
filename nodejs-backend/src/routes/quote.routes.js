const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin } = require('../middleware/auth.middleware');
const { QuoteRequest, User } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse } = require('../utils/helpers');
const { formatError } = require('../utils/formatError');

// ==================== Client Endpoints ====================

// Create quote request
router.post('/', authenticate, isClient, async (req, res) => {
  try {
    const { title, description, type } = req.body;

    if (!title || !description || !type) {
      return res.status(400).json({ success: false, error: 'Title, description, and type are required' });
    }

    if (!['service', 'product'].includes(type)) {
      return res.status(400).json({ success: false, error: 'Type must be "service" or "product"' });
    }

    const quote = await QuoteRequest.create({
      user_id: req.user.id,
      title,
      description,
      type
    });

    res.status(201).json({ success: true, data: quote, message: 'Quote request submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// List user's own quotes (paginated)
router.get('/my', authenticate, isClient, async (req, res) => {
  try {
    const { page = 1, limit = 15 } = req.query;
    const pag = paginate(page, limit);

    const { rows, count } = await QuoteRequest.findAndCountAll({
      where: { user_id: req.user.id },
      ...pag,
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      ...paginationResponse(rows, count, pag.page, pag.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// View single quote detail (own)
router.get('/my/:id', authenticate, isClient, async (req, res) => {
  try {
    const quote = await QuoteRequest.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote request not found' });
    }

    res.json({ success: true, data: quote });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ==================== Admin Endpoints ====================

// List all quotes (paginated, filterable)
router.get('/admin/all', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, type, search, date, page = 1, limit = 15 } = req.query;
    const pag = paginate(page, limit);

    const where = {};
    if (status) where.status = status;
    if (type) where.type = type;

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }

    if (date) {
      const startOfDay = new Date(date);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      where.created_at = { [Op.between]: [startOfDay, endOfDay] };
    }

    const { rows, count } = await QuoteRequest.findAndCountAll({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] }
      ],
      ...pag,
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      ...paginationResponse(rows, count, pag.page, pag.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// View single quote (admin)
router.get('/admin/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const quote = await QuoteRequest.findByPk(req.params.id, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] }
      ]
    });

    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote request not found' });
    }

    res.json({ success: true, data: quote });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Update quote (admin)
router.put('/admin/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const quote = await QuoteRequest.findByPk(req.params.id);

    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote request not found' });
    }

    const { status, admin_note, quoted_price } = req.body;
    const updateData = {};

    if (status && ['pending', 'reviewed', 'quoted', 'closed'].includes(status)) {
      updateData.status = status;
    }
    if (admin_note !== undefined) updateData.admin_note = admin_note;
    if (quoted_price !== undefined) updateData.quoted_price = quoted_price;

    await quote.update(updateData);

    res.json({ success: true, data: quote, message: 'Quote request updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Delete quote (admin)
router.delete('/admin/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const quote = await QuoteRequest.findByPk(req.params.id);

    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote request not found' });
    }

    await quote.destroy();

    res.json({ success: true, message: 'Quote request deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
