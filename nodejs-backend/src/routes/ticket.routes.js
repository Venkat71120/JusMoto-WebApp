const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin, isFranchise } = require('../middleware/auth.middleware');
const { uploadSingle } = require('../middleware/upload.middleware');
const { uploadToS3, generateS3Key } = require('../config/s3');
const { Ticket, TicketMessage, User, Admin, Department } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, generateRandomString } = require('../utils/helpers');
const { formatError } = require('../utils/formatError');

// Get active departments (public - for mobile app service request creation)
router.get('/departments', async (req, res) => {
  try {
    const departments = await Department.findAll({
      where: { status: 1 },
      attributes: ['id', 'name'],
      order: [['name', 'ASC']]
    });
    res.json({ success: true, data: departments });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

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
    res.status(500).json({ success: false, error: formatError(error) });
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
          as: 'ticketMessages',
          include: [
            { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'image'] },
            { model: Admin, as: 'admin', attributes: ['id', 'name', 'image'] }
          ]
        }
      ],
      order: [[{ model: TicketMessage, as: 'ticketMessages' }, 'created_at', 'ASC']]
    });

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Service request not found' });
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
    res.status(500).json({ success: false, error: formatError(error) });
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

    res.status(201).json({ success: true, data: ticket, message: 'Service request created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Add message to ticket
router.post('/:id/messages', authenticate, ...uploadSingle('attachment'), async (req, res) => {
  try {
    const { message } = req.body;

    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;

    const ticket = await Ticket.findOne({ where });

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Service request not found' });
    }

    if (ticket.status === 'closed') {
      return res.status(400).json({ success: false, error: 'Cannot reply to closed service request' });
    }

    let attachment = null;
    if (req.file) {
      const s3Key = generateS3Key('tickets', req.file.originalname);
      attachment = await uploadToS3(req.file.buffer, s3Key, req.file.mimetype);
    }

    const ticketMessage = await TicketMessage.create({
      ticket_id: ticket.id,
      user_id: req.user ? req.user.id : null,
      admin_id: req.admin ? req.admin.id : null,
      message,
      attachment
    });

    // Reopen ticket if it was answered (admin replied but user has follow-up)
    if (ticket.status === 'answered') {
      await ticket.update({ status: 'open' });
    }

    // Emit socket event for real-time chat
    const io = req.app.get('io');
    if (io) {
      const fullMsg = await TicketMessage.findByPk(ticketMessage.id, {
        include: [
          { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'image'] },
          { model: Admin, as: 'admin', attributes: ['id', 'name', 'image'] }
        ]
      });
      io.to(`ticket-${ticket.id}`).emit('new-ticket-message', fullMsg);
    }

    res.status(201).json({ success: true, data: ticketMessage, message: 'Reply sent' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Close ticket
router.post('/:id/close', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;

    const ticket = await Ticket.findOne({ where });

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Service request not found' });
    }

    await ticket.update({ status: 'closed', closed_at: new Date() });

    res.json({ success: true, message: 'Service request closed' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
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
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

router.put('/admin/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, assigned_to } = req.body;

    const ticket = await Ticket.findByPk(req.params.id);

    if (!ticket) {
      return res.status(404).json({ success: false, error: 'Service request not found' });
    }

    const updateData = { status };
    if (assigned_to) updateData.assigned_to = assigned_to;

    if (status === 'resolved') updateData.resolved_at = new Date();
    if (status === 'closed') updateData.closed_at = new Date();

    await ticket.update(updateData);

    res.json({ success: true, data: ticket, message: 'Service request updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
