const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { Order, WalletTransaction, Wallet } = require('../models');

// Initialize payment
router.post('/initiate', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, payment_method } = req.body;

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.payment_status === 1) {
      return res.status(400).json({ success: false, error: 'Order already paid' });
    }

    // Handle PayZapp payment
    if (payment_method === 'payzapp') {
      // TODO: Integrate PayZapp SDK/API with account details
      // For now, mark as pending payment and return order info
      await order.update({
        payment_status: 0,
        payment_gateway: 'payzapp',
        transaction_id: `PZ${Date.now()}`
      });

      return res.json({
        success: true,
        message: 'Order placed successfully. Payment via PayZapp.',
        data: {
          order_id: order.id,
          amount: order.total,
          currency: 'INR',
          payment_method: 'payzapp'
        }
      });
    }

    return res.status(400).json({ success: false, error: 'Invalid payment method' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Verify payment
router.post('/verify', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, transaction_id, payment_method, payment_response } = req.body;

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    // TODO: Verify PayZapp payment response
    await order.update({
      payment_status: 1,
      payment_gateway: payment_method,
      transaction_id
    });

    res.json({ success: true, message: 'Payment verified', data: { order_id: order.id } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Payment webhook for PayZapp
router.post('/webhook/payzapp', async (req, res) => {
  try {
    // TODO: Handle PayZapp webhook/callback
    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get available payment methods
router.get('/methods', async (req, res) => {
  try {
    const methods = [
      { id: 'payzapp', name: 'PayZapp', icon: 'payzapp', description: 'UPI, Cards, Net Banking & Wallets', enabled: true }
    ];

    res.json({ success: true, data: methods });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
