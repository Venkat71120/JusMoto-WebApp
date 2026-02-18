const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { Coupon } = require('../models');

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

    if (order_amount < parseFloat(coupon.min_order_amount)) {
      return res.status(400).json({
        success: false,
        error: `Minimum order amount is ${coupon.min_order_amount}`
      });
    }

    const discount = coupon.calculateDiscount(order_amount);

    res.json({
      success: true,
      data: {
        code: coupon.code,
        type: coupon.type,
        discount,
        discount_percentage: coupon.type === 'percentage' ? coupon.discount : null,
        max_discount: coupon.max_discount
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get available coupons
router.get('/available', authenticate, isClient, async (req, res) => {
  try {
    const now = new Date();

    const coupons = await Coupon.findAll({
      where: {
        status: 1,
        start_date: { [require('sequelize').Op.lte]: now },
        expire_date: { [require('sequelize').Op.gte]: now }
      },
      attributes: ['code', 'type', 'discount', 'max_discount', 'min_order_amount', 'description', 'expire_date']
    });

    res.json({ success: true, data: coupons });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
