const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin } = require('../middleware/auth.middleware');
const { TrafficChallan, User } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse } = require('../utils/helpers');

// Get user's challans
router.get('/', authenticate, isClient, async (req, res) => {
  try {
    const { status, vehicle_number, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { user_id: req.user.id };
    if (status) where.status = status;
    if (vehicle_number) where.vehicle_number = { [Op.like]: `%${vehicle_number}%` };

    const { rows, count } = await TrafficChallan.findAndCountAll({
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

// Get challan by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };
    if (req.user) {
      where.user_id = req.user.id;
    }

    const challan = await TrafficChallan.findOne({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] }
      ]
    });

    if (!challan) {
      return res.status(404).json({ success: false, error: 'Challan not found' });
    }

    res.json({ success: true, data: challan });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Check challans for vehicle number (public API call)
router.post('/check', authenticate, isClient, async (req, res) => {
  try {
    const { vehicle_number } = req.body;

    if (!vehicle_number) {
      return res.status(400).json({ success: false, error: 'Vehicle number is required' });
    }

    // TODO: Call external API to fetch challans
    // This is a placeholder - integrate with actual traffic challan API

    // For now, return existing challans from database
    const challans = await TrafficChallan.findAll({
      where: {
        user_id: req.user.id,
        vehicle_number: vehicle_number.toUpperCase().replace(/\s/g, ''),
        status: 'pending'
      }
    });

    res.json({
      success: true,
      data: challans,
      message: challans.length > 0 ? `Found ${challans.length} pending challan(s)` : 'No pending challans found'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create challan (from API response or manual)
router.post('/', authenticate, isClient, async (req, res) => {
  try {
    const {
      vehicle_number, challan_number, offence_type, offence_description,
      fine_amount, offence_location, offence_date, due_date,
      issuing_authority, api_reference_id
    } = req.body;

    // Check for duplicate challan
    if (challan_number) {
      const existing = await TrafficChallan.findOne({ where: { challan_number } });
      if (existing) {
        return res.status(400).json({ success: false, error: 'Challan already exists' });
      }
    }

    const challan = await TrafficChallan.create({
      user_id: req.user.id,
      vehicle_number: vehicle_number.toUpperCase().replace(/\s/g, ''),
      challan_number,
      offence_type,
      offence_description,
      fine_amount,
      offence_location,
      offence_date,
      due_date,
      status: 'pending',
      payment_status: 'pending',
      issuing_authority,
      api_reference_id
    });

    res.status(201).json({ success: true, data: challan, message: 'Challan added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Initiate challan payment
router.post('/:id/pay', authenticate, isClient, async (req, res) => {
  try {
    const { payment_method } = req.body;

    const challan = await TrafficChallan.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!challan) {
      return res.status(404).json({ success: false, error: 'Challan not found' });
    }

    if (challan.status === 'paid') {
      return res.status(400).json({ success: false, error: 'Challan already paid' });
    }

    // TODO: Integrate with payment gateway
    // For now, return payment initiation data

    res.json({
      success: true,
      data: {
        challan_id: challan.id,
        amount: challan.fine_amount,
        payment_method,
        // payment_url: 'https://payment-gateway.com/pay/...'
      },
      message: 'Payment initiated'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Payment callback/webhook
router.post('/payment/callback', async (req, res) => {
  try {
    const { challan_id, transaction_id, status, payment_method } = req.body;

    const challan = await TrafficChallan.findByPk(challan_id);

    if (!challan) {
      return res.status(404).json({ success: false, error: 'Challan not found' });
    }

    if (status === 'success') {
      await challan.markAsPaid(payment_method, transaction_id);
    } else {
      await challan.update({
        payment_status: 'failed',
        payment_gateway_response: req.body
      });
    }

    res.json({ success: true, message: 'Payment status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get challan statistics
router.get('/stats/summary', authenticate, isClient, async (req, res) => {
  try {
    const { sequelize } = require('../models');

    const [stats] = await sequelize.query(`
      SELECT
        COUNT(*) as total_challans,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_count,
        SUM(CASE WHEN status = 'paid' THEN 1 ELSE 0 END) as paid_count,
        SUM(CASE WHEN status = 'pending' THEN fine_amount ELSE 0 END) as pending_amount,
        SUM(CASE WHEN status = 'paid' THEN paid_amount ELSE 0 END) as paid_amount
      FROM traffic_challans
      WHERE user_id = ? AND deleted_at IS NULL
    `, {
      replacements: [req.user.id]
    });

    res.json({ success: true, data: stats[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.get('/admin/all', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, vehicle_number, user_id, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (status) where.status = status;
    if (vehicle_number) where.vehicle_number = { [Op.like]: `%${vehicle_number}%` };
    if (user_id) where.user_id = user_id;

    const { rows, count } = await TrafficChallan.findAndCountAll({
      where,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] }
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

module.exports = router;
