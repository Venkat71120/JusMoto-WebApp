const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { uploadSingle } = require('../middleware/upload.middleware');
const { uploadToS3, generateS3Key } = require('../config/s3');
const { Order, Wallet, WalletTransaction, PaymentGateway } = require('../models');
const { formatError } = require('../utils/formatError');

// ─── GET AVAILABLE PAYMENT METHODS ──────────────────────────────────
router.get('/methods', async (req, res) => {
  try {
    // Fetch active gateways from DB
    const dbGateways = await PaymentGateway.findAll({
      where: { status: 1 },
      attributes: ['id', 'name', 'slug', 'image', 'test_mode']
    });

    const methods = dbGateways.map(g => ({
      id: g.slug || g.name.toLowerCase().replace(/\s+/g, '_'),
      name: g.name,
      image: g.image || '',
      description: '',
      test_mode: g.test_mode,
      enabled: true
    }));

    // Always include PayZapp
    if (!methods.find(m => m.id === 'payzapp')) {
      methods.unshift({
        id: 'payzapp',
        name: 'PayZapp',
        image: '',
        description: 'UPI, Cards, Net Banking & Wallets',
        test_mode: false,
        enabled: true
      });
    }

    // Always include wallet
    if (!methods.find(m => m.id === 'wallet')) {
      methods.push({
        id: 'wallet',
        name: 'Wallet',
        image: '',
        description: 'Pay using wallet balance',
        test_mode: false,
        enabled: true
      });
    }

    // Always include COD
    if (!methods.find(m => m.id === 'cash_on_delivery')) {
      methods.push({
        id: 'cash_on_delivery',
        name: 'Cash on Delivery',
        image: '',
        description: 'Pay when service is completed',
        test_mode: false,
        enabled: true
      });
    }

    res.json({ success: true, data: methods });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── INITIATE PAYMENT ───────────────────────────────────────────────
router.post('/initiate', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, payment_method } = req.body;

    if (!order_id || !payment_method) {
      return res.status(422).json({ success: false, error: 'order_id and payment_method are required' });
    }

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.payment_status === 1) {
      return res.status(400).json({ success: false, error: 'Order already paid' });
    }

    const amount = parseFloat(order.total);

    // ── PayZapp ──
    if (payment_method === 'payzapp') {
      const txnId = `PZ${order.id}_${Date.now()}`;

      await order.update({
        payment_gateway: 'payzapp',
        transaction_id: txnId
      });

      return res.json({
        success: true,
        message: 'Payment initiated. Complete payment in PayZapp.',
        data: {
          order_id: order.id,
          transaction_id: txnId,
          amount,
          currency: 'INR',
          payment_method: 'payzapp',
          customer_name: `${req.user.first_name || ''} ${req.user.last_name || ''}`.trim(),
          customer_email: req.user.email,
          customer_phone: req.user.phone || '',
          description: `JusMoto Order #${order.id}`
        }
      });
    }

    // ── Wallet ──
    if (payment_method === 'wallet') {
      let wallet = await Wallet.findOne({ where: { user_id: req.user.id } });
      if (!wallet) {
        wallet = await Wallet.create({ user_id: req.user.id, available_balance: 0 });
      }

      const balance = parseFloat(wallet.available_balance);
      if (balance < amount) {
        return res.status(400).json({
          success: false,
          error: 'Insufficient wallet balance',
          data: { available_balance: balance, required: amount }
        });
      }

      // Deduct balance
      wallet.available_balance = balance - amount;
      await wallet.save();

      // Record transaction
      await WalletTransaction.create({
        wallet_id: wallet.id,
        user_id: req.user.id,
        type: 'debit',
        amount,
        balance_after: wallet.available_balance,
        description: `Payment for Order #${order.id}`,
        reference_type: 'order',
        reference_id: order.id,
        payment_gateway: 'wallet',
        status: 'completed'
      });

      // Mark order paid
      await order.update({
        payment_gateway: 'wallet',
        payment_status: 1,
        transaction_id: `WLT${order.id}_${Date.now()}`
      });

      return res.json({
        success: true,
        message: 'Payment successful via wallet',
        data: {
          order_id: order.id,
          amount,
          payment_method: 'wallet',
          payment_status: 1,
          wallet_balance: parseFloat(wallet.available_balance)
        }
      });
    }

    // ── Cash on Delivery ──
    if (payment_method === 'cash_on_delivery') {
      await order.update({
        payment_gateway: 'cash_on_delivery',
        payment_status: 0
      });

      return res.json({
        success: true,
        message: 'Order placed. Pay on delivery.',
        data: {
          order_id: order.id,
          amount,
          payment_method: 'cash_on_delivery',
          payment_status: 0
        }
      });
    }

    return res.status(400).json({ success: false, error: `Payment method '${payment_method}' is not supported` });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── VERIFY PAYMENT (after client-side PayZapp callback) ────────────
router.post('/verify', authenticate, isClient, async (req, res) => {
  try {
    const { order_id, transaction_id, payment_method, payment_response } = req.body;

    if (!order_id) {
      return res.status(422).json({ success: false, error: 'order_id is required' });
    }

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (order.payment_status === 1) {
      return res.json({ success: true, message: 'Payment already verified', data: { order_id: order.id, payment_status: 1 } });
    }

    const method = payment_method || order.payment_gateway;

    // PayZapp verification
    if (method === 'payzapp') {
      // PayZapp SDK returns a response on client side
      // The mobile app sends it here for server-side confirmation
      const paymentStatus = payment_response?.status || payment_response?.paymentStatus;

      if (paymentStatus === 'SUCCESS' || paymentStatus === 'success' || paymentStatus === 1 || paymentStatus === '1') {
        await order.update({
          payment_status: 1,
          payment_gateway: 'payzapp',
          transaction_id: transaction_id || payment_response?.transactionId || order.transaction_id
        });

        return res.json({
          success: true,
          message: 'Payment verified successfully',
          data: { order_id: order.id, payment_status: 1 }
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Payment verification failed',
        data: { order_id: order.id, payment_status: 0 }
      });
    }

    // Generic fallback — mark as paid if transaction_id is present
    if (transaction_id) {
      await order.update({
        payment_status: 1,
        payment_gateway: method,
        transaction_id
      });

      return res.json({
        success: true,
        message: 'Payment verified successfully',
        data: { order_id: order.id, payment_status: 1 }
      });
    }

    return res.status(400).json({ success: false, error: 'Cannot verify payment. Missing transaction_id or payment_response.' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── MANUAL PAYMENT (upload payment screenshot) ─────────────────────
router.post('/manual-upload', authenticate, isClient, ...uploadSingle('image'), async (req, res) => {
  try {
    const { order_id } = req.body;

    if (!order_id) {
      return res.status(422).json({ success: false, error: 'order_id is required' });
    }

    const order = await Order.findOne({
      where: { id: order_id, user_id: req.user.id }
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    if (!req.file) {
      return res.status(422).json({ success: false, error: 'Payment screenshot image is required' });
    }

    // Upload to S3
    const s3Key = generateS3Key('manual-payments', req.file.originalname);
    const imageUrl = await uploadToS3(req.file.buffer, s3Key, req.file.mimetype);

    await order.update({
      payment_gateway: 'manual_payment',
      payment_attachment: imageUrl,
      payment_status: 0 // pending admin approval
    });

    res.json({
      success: true,
      message: 'Payment screenshot uploaded. Awaiting admin verification.',
      data: {
        order_id: order.id,
        payment_attachment: imageUrl,
        payment_status: 0
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── PAYMENT STATUS CHECK ───────────────────────────────────────────
router.get('/status/:order_id', authenticate, isClient, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { id: req.params.order_id, user_id: req.user.id },
      attributes: ['id', 'total', 'payment_gateway', 'payment_status', 'transaction_id', 'payment_attachment']
    });

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.json({
      success: true,
      data: {
        order_id: order.id,
        total: order.total,
        payment_gateway: order.payment_gateway,
        payment_status: order.payment_status,
        payment_status_label: order.payment_status === 1 ? 'Paid' : 'Unpaid',
        transaction_id: order.transaction_id,
        payment_attachment: order.payment_attachment
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// ─── PAYZAPP WEBHOOK (server-to-server callback) ────────────────────
router.post('/webhook/payzapp', async (req, res) => {
  try {
    const { orderId, transactionId, status, amount } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'orderId is required' });
    }

    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (status === 'SUCCESS' || status === 'success') {
      await order.update({
        payment_status: 1,
        transaction_id: transactionId || order.transaction_id
      });
    }

    res.json({ received: true, order_id: orderId, status });
  } catch (error) {
    res.status(400).json({ error: formatError(error) });
  }
});

module.exports = router;
