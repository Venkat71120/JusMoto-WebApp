const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin } = require('../middleware/auth.middleware');
const { Review, User, Service, Order } = require('../models');
const { paginate, paginationResponse } = require('../utils/helpers');
const { formatError } = require('../utils/formatError');

// Get reviews for a service
router.get('/service/:serviceId', async (req, res) => {
  try {
    const { page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const { rows, count } = await Review.findAndCountAll({
      where: { service_id: req.params.serviceId, status: 'published' },
      include: [
        { model: User, as: 'reviewer', attributes: ['id', 'first_name', 'last_name', 'image'] }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    // Calculate stats
    const allReviews = await Review.findAll({
      where: { service_id: req.params.serviceId, status: 'published' },
      attributes: ['rating']
    });

    const stats = {
      total: allReviews.length,
      average: allReviews.length > 0
        ? (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1)
        : 0,
      distribution: {
        5: allReviews.filter(r => r.rating === 5).length,
        4: allReviews.filter(r => r.rating === 4).length,
        3: allReviews.filter(r => r.rating === 3).length,
        2: allReviews.filter(r => r.rating === 2).length,
        1: allReviews.filter(r => r.rating === 1).length
      }
    };

    res.json({
      success: true,
      stats,
      ...paginationResponse(rows, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Get user's reviews
router.get('/my', authenticate, isClient, async (req, res) => {
  try {
    const { page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const { rows, count } = await Review.findAndCountAll({
      where: { reviewer_id: req.user.id },
      include: [
        { model: Service, as: 'service', attributes: ['id', 'title', 'image'] }
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

// Create review
router.post('/', authenticate, isClient, async (req, res) => {
  try {
    const { service_id, order_id, rating, review, message: msg } = req.body;
    const reviewMessage = msg || review || null;

    // Verify order belongs to user and is completed
    if (order_id) {
      const order = await Order.findOne({
        where: { id: order_id, user_id: req.user.id, status: 3 }
      });

      if (!order) {
        return res.status(400).json({ success: false, error: 'Invalid order or order not completed' });
      }
    }

    // Check existing review
    const existing = await Review.findOne({
      where: { reviewer_id: req.user.id, service_id, order_id }
    });

    if (existing) {
      return res.status(400).json({ success: false, error: 'Already reviewed' });
    }

    // Get admin_id and type from service
    const service = await Service.findByPk(service_id);

    const newReview = await Review.create({
      reviewer_id: req.user.id,
      admin_id: service ? service.admin_id : null,
      type: service ? service.type : null,
      service_id,
      order_id,
      rating,
      message: reviewMessage,
      status: 'published'
    });

    res.status(201).json({ success: true, data: newReview, message: 'Review submitted' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Update review
router.put('/:id', authenticate, isClient, async (req, res) => {
  try {
    const { rating, review, message: msg } = req.body;

    const existingReview = await Review.findOne({
      where: { id: req.params.id, reviewer_id: req.user.id }
    });

    if (!existingReview) {
      return res.status(404).json({ success: false, error: 'Review not found' });
    }

    await existingReview.update({ rating, message: msg || review });

    res.json({ success: true, data: existingReview, message: 'Review updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Delete review
router.delete('/:id', authenticate, isClient, async (req, res) => {
  try {
    const deleted = await Review.destroy({
      where: { id: req.params.id, reviewer_id: req.user.id }
    });

    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Review not found' });
    }

    res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Admin routes
router.get('/admin/all', authenticate, isAdmin, async (req, res) => {
  try {
    const { status, service_id, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = {};
    if (status !== undefined) where.status = status;
    if (service_id) where.service_id = service_id;

    const { rows, count } = await Review.findAndCountAll({
      where,
      include: [
        { model: User, as: 'reviewer', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { model: Service, as: 'service', attributes: ['id', 'title'] }
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
    const { status } = req.body;

    await Review.update({ status }, { where: { id: req.params.id } });

    res.json({ success: true, message: 'Review status updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
