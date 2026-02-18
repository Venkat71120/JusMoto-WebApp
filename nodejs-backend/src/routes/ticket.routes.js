const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin, isFranchise } = require('../middleware/auth.middleware');
const { Ticket, TicketMessage, User, Admin } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, generateRandomString } = require('../utils/helpers');

// Get user tickets
router.get('/', authenticate, async (req, res) => {
  try {
    const { status, priority, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (req.user) where.user_id = req.user.id;
    if (req.admin) where.admin_id = req.admin.id;
    if (status) where.status = status;
    if (priority) where.priority = priority;

    const { rows, count } = await Ticket.findAndCountAll({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email'] }
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

// Get ticket details with messages
router.get('/:id', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;
    if (req.admin && !req.admin.is_franchise) {
      // Super admin can see all
      delete where.admin_id;
    } else if (req.admin) {
      where.admin_id = req.admin.id;
    }

    const ticket = await Ticket.findOne({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] },
        { model: Admin, as: 'admin', attributes: ['id', 'name', 'email'] },
        {
          model: TicketMessage,
          as: 'messages',
          include: [
            { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'image'] },
            { model: Admin, as: 'admin', attributes: ['id', 'name', 'image'] }
          ],
          order: [['created_at', 'ASC']]
        }
      ]
    });

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }

    // Mark messages as read
    await TicketMessage.update(
      { is_read: 1 },
      {
        where: {
          ticket_id: ticket.id,
          [req.user ? 'admin_id' : 'user_id']: { [Op.ne]: null }
        }
      }
    );

    res.json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create ticket
router.post('/', authenticate, async (req, res) => {
  try {
    const { subject, priority, department, description, attachment } = req.body;

    const ticketNumber = `TKT${Date.now().toString(36).toUpperCase()}${generateRandomString(4).toUpperCase()}`;

    const ticketData = {
      ticket_number: ticketNumber,
      subject,
      priority: priority || 'medium',
      department,
      description,
      attachment,
      status: 'open'
    };

    if (req.user) ticketData.user_id = req.user.id;
    if (req.admin) ticketData.admin_id = req.admin.id;

    const ticket = await Ticket.create(ticketData);

    // Create initial message if description provided
    if (description) {
      await TicketMessage.create({
        ticket_id: ticket.id,
        user_id: req.user ? req.user.id : null,
        admin_id: req.admin ? req.admin.id : null,
        message: description,
        attachment
      });
    }

    res.status(201).json({ success: true, data: ticket, message: 'Ticket created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add message to ticket
router.post('/:id/messages', authenticate, async (req, res) => {
  try {
    const { message, attachment } = req.body;

    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;

    const ticket = await Ticket.findOne({ where });

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }

    if (ticket.status === 'closed') {
      return res.status(400).json({ success: false, error: 'Cannot reply to closed ticket' });
    }

    const ticketMessage = await TicketMessage.create({
      ticket_id: ticket.id,
      user_id: req.user ? req.user.id : null,
      admin_id: req.admin ? req.admin.id : null,
      message,
      attachment
    });

    // Reopen ticket if closed
    if (ticket.status === 'resolved') {
      await ticket.update({ status: 'open' });
    }

    res.status(201).json({ success: true, data: ticketMessage, message: 'Reply sent' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Close ticket
router.post('/:id/close', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;

    const ticket = await Ticket.findOne({ where });

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }

    await ticket.update({ status: 'closed', closed_at: new Date() });

    res.json({ success: true, message: 'Ticket closed' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.get('/admin/all', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, priority, search, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;

    if (search) {
      where[Op.or] = [
        { ticket_number: { [Op.like]: `%${search}%` } },
        { subject: { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await Ticket.findAndCountAll({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { model: Admin, as: 'admin', attributes: ['id', 'name', 'email'] }
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
    const { status, assigned_to } = req.body;

    const ticket = await Ticket.findByPk(req.params.id);

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Ticket not found' });
    }

    const updateData = { status };
    if (assigned_to) updateData.assigned_to = assigned_to;

    if (status === 'resolved') updateData.resolved_at = new Date();
    if (status === 'closed') updateData.closed_at = new Date();

    await ticket.update(updateData);

    res.json({ success: true, data: ticket, message: 'Ticket updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
