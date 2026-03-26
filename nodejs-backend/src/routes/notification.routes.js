const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { authenticate } = require('../middleware/auth.middleware');
const { Notification } = require('../models');
const { paginate, paginationResponse } = require('../utils/helpers');
const { formatError } = require('../utils/formatError');

// Helper to build owner filter (uses Laravel morph pattern)
function ownerWhere(req) {
  if (req.user) return { notifiable_id: req.user.id, notifiable_type: 'User' };
  if (req.admin) return { notifiable_id: req.admin.id, notifiable_type: 'Admin' };
  return {};
}

// Add is_read boolean to notification object
function formatNotification(n) {
  const json = n.toJSON ? n.toJSON() : { ...n };
  json.is_read = json.read_at !== null;
  return json;
}

// Get user notifications
router.get('/', authenticate, async (req, res) => {
  try {
    const { is_read, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { ...ownerWhere(req) };
    if (is_read !== undefined) {
      if (is_read === '1' || is_read === 'true') {
        where.read_at = { [Op.ne]: null };
      } else if (is_read === '0' || is_read === 'false') {
        where.read_at = null;
      }
    }

    const { rows, count } = await Notification.findAndCountAll({
      where,
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    const formatted = rows.map(formatNotification);

    res.json({
      success: true,
      ...paginationResponse(formatted, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Get unread count
router.get('/unread-count', authenticate, async (req, res) => {
  try {
    const where = { ...ownerWhere(req), read_at: null };
    const count = await Notification.count({ where });

    res.json({ success: true, unread_count: count, data: { count } });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Mark all as read (must be before /:id routes)
router.put('/read-all', authenticate, async (req, res) => {
  try {
    const where = { ...ownerWhere(req), read_at: null };

    const [affectedCount] = await Notification.update(
      { read_at: new Date() },
      { where }
    );

    res.json({ success: true, message: 'All marked as read', data: { updated: affectedCount } });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Update notification (mark read/unread via is_read)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id, ...ownerWhere(req) };
    const notification = await Notification.findOne({ where });

    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }

    const { is_read } = req.body;
    if (is_read !== undefined) {
      const readVal = is_read === true || is_read === 1 || is_read === '1' || is_read === 'true';
      await notification.update({ read_at: readVal ? new Date() : null });
    }

    res.json({ success: true, message: is_read ? 'Marked as read' : 'Marked as unread', data: formatNotification(notification) });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Mark as read (legacy)
router.put('/:id/read', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id, ...ownerWhere(req) };

    await Notification.update(
      { read_at: new Date() },
      { where }
    );

    res.json({ success: true, message: 'Marked as read' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Delete notification
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const where = { id: req.params.id, ...ownerWhere(req) };

    await Notification.destroy({ where });

    res.json({ success: true, message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
