const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { Coupon } = require('../models');
const { Op } = require('sequelize');
const { formatError } = require('../utils/formatError');

// Validate coupon
router.post('/validate', authenticate, isClient, async (req, res) => {
  try {
    const { code, order_amount } = req.body;

    const coupon = await Coupon.findOne({ where: { code: code.toUpperCase() } });

    if (!coupon) {
      return res.status(404).json({ success: false, error: 'Coupon not found' });
    }

    if (!coupon.isValid()) {
      return res.status(400).json({ success: false, error: 'Coupon is not valid or expired' });
    }

    const discount = coupon.calculateDiscount(order_amount);

    res.json({
      success: true,
      data: {
        code: coupon.code,
        discount_type: coupon.discount_type,
        discount,
        discount_percentage: coupon.discount_type === 'percentage' ? coupon.discount : null
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Get available coupons
router.get('/available', authenticate, isClient, async (req, res) => {
  try {
    const now = new Date();

    const coupons = await Coupon.findAll({
      where: {
        status: 1,
        [Op.or]: [
          { expire_date: null },
          { expire_date: { [Op.gte]: now } }
        ]
      },
      attributes: ['code', 'title', 'discount', 'discount_type', 'expire_date']
    });

    res.json({ success: true, data: coupons });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
