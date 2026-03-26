const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { RefundedOrder, Order, OrderItem, Service } = require('../models');
const { paginate, paginationResponse } = require('../utils/helpers');
const { formatError } = require('../utils/formatError');

const STATUS_MAP = { 0: 'pending', 1: 'approved', 2: 'rejected' };

function formatRefund(r) {
  const plain = r.toJSON ? r.toJSON() : r;
  return {
    ...plain,
    reason: plain.cancel_reason || null,
    status: STATUS_MAP[plain.status] || 'pending',
    refund_number: `REF-${plain.id}`
  };
}

// GET /refunds - Client's refund list
router.get('/', authenticate, isClient, async (req, res) => {
  try {
    const { status, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { user_id: req.user.id };
    if (status !== undefined && status !== '') {
      // Accept both numeric and string status
      const reverseMap = { pending: 0, approved: 1, rejected: 2 };
      where.status = reverseMap[status] !== undefined ? reverseMap[status] : status;
    }

    const { rows, count } = await RefundedOrder.findAndCountAll({
      where,
      include: [
        {
          model: Order,
          as: 'order',
          attributes: ['id', 'invoice_number', 'total', 'status', 'payment_status'],
          include: [
            {
              model: OrderItem,
              as: 'items',
              include: [{ model: Service, as: 'service', attributes: ['id', 'title', 'image'] }]
            }
          ]
        }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    const data = rows.map(formatRefund);

    res.json({
      success: true,
      data,
      ...paginationResponse(data, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// GET /refunds/:id - Single refund details
router.get('/:id', authenticate, isClient, async (req, res) => {
  try {
    const refund = await RefundedOrder.findOne({
      where: { id: req.params.id, user_id: req.user.id },
      include: [
        {
          model: Order,
          as: 'order',
          include: [
            {
              model: OrderItem,
              as: 'items',
              include: [{ model: Service, as: 'service', attributes: ['id', 'title', 'image'] }]
            }
          ]
        }
      ]
    });

    if (!refund) {
      return res.status(404).json({ success: false, error: 'Refund not found' });
    }

    res.json({ success: true, data: formatRefund(refund) });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
