const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware');
const { Notification } = require('../models');
const { paginate, paginationResponse } = require('../utils/helpers');

// Get user notifications
router.get('/', authenticate, async (req, res) => {
  try {
    const { is_read, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (req.user) where.user_id = req.user.id;
    if (req.admin) where.admin_id = req.admin.id;
    if (is_read !== undefined) where.is_read = is_read;

    const { rows, count } = await Notification.findAndCountAll({
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

// Get unread count
router.get('/unread-count', authenticate, async (req, res) => {
  try {
    const where = { is_read: 0 };
    if (req.user) where.user_id = req.user.id;
    if (req.admin) where.admin_id = req.admin.id;

    const count = await Notification.count({ where });

    res.json({ success: true, data: { count } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Mark as read
router.put('/:id/read', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;
    if (req.admin) where.admin_id = req.admin.id;

    await Notification.update(
      { is_read: 1, read_at: new Date() },
      { where }
    );

    res.json({ success: true, message: 'Marked as read' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Mark all as read
router.put('/read-all', authenticate, async (req, res) => {
  try {
    const where = { is_read: 0 };
    if (req.user) where.user_id = req.user.id;
    if (req.admin) where.admin_id = req.admin.id;

    await Notification.update(
      { is_read: 1, read_at: new Date() },
      { where }
    );

    res.json({ success: true, message: 'All marked as read' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete notification
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id };
    if (req.user) where.user_id = req.user.id;
    if (req.admin) where.admin_id = req.admin.id;

    await Notification.destroy({ where });

    res.json({ success: true, message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
