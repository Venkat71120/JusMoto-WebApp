const express = require('express');
const router = express.Router();
const { authenticate, isClient, isAdmin } = require('../middleware/auth.middleware');
const { Wallet, WalletTransaction, User } = require('../models');
const { paginate, paginationResponse, generateTransactionId } = require('../utils/helpers');

// Get wallet balance
router.get('/', authenticate, isClient, async (req, res) => {
  try {
    let wallet = await Wallet.findOne({ where: { user_id: req.user.id } });

    // Create wallet if doesn't exist
    if (!wallet) {
      wallet = await Wallet.create({ user_id: req.user.id, balance: 0.00 });
    }

    res.json({ success: true, data: { balance: wallet.balance } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get wallet transactions
router.get('/transactions', authenticate, isClient, async (req, res) => {
  try {
    const { type, page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const where = { user_id: req.user.id };
    if (type) where.type = type;

    const { rows, count } = await WalletTransaction.findAndCountAll({
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

// Add money to wallet
router.post('/topup', authenticate, isClient, async (req, res) => {
  try {
    const { amount, payment_method } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: 'Invalid amount' });
    }

    let wallet = await Wallet.findOne({ where: { user_id: req.user.id } });

    if (!wallet) {
      wallet = await Wallet.create({ user_id: req.user.id, balance: 0.00 });
    }

    // TODO: Integrate payment gateway for actual payment

    // For now, directly add to wallet (for testing)
    const newBalance = parseFloat(wallet.balance) + parseFloat(amount);
    await wallet.update({ balance: newBalance });

    const transaction = await WalletTransaction.create({
      wallet_id: wallet.id,
      user_id: req.user.id,
      type: 'credit',
      amount,
      balance_after: newBalance,
      description: 'Wallet top-up',
      reference_type: 'topup',
      payment_gateway: payment_method,
      transaction_id: generateTransactionId()
    });

    res.json({
      success: true,
      data: { balance: newBalance, transaction },
      message: 'Wallet topped up successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.post('/admin/add', authenticate, isAdmin, async (req, res) => {
  try {
    const { user_id, amount, description } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    let wallet = await Wallet.findOne({ where: { user_id } });

    if (!wallet) {
      wallet = await Wallet.create({ user_id, balance: 0.00 });
    }

    const newBalance = parseFloat(wallet.balance) + parseFloat(amount);
    await wallet.update({ balance: newBalance });

    await WalletTransaction.create({
      wallet_id: wallet.id,
      user_id,
      type: 'credit',
      amount,
      balance_after: newBalance,
      description: description || 'Admin credit',
      reference_type: 'admin',
      transaction_id: generateTransactionId()
    });

    res.json({
      success: true,
      data: { balance: newBalance },
      message: 'Amount added to wallet'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/admin/deduct', authenticate, isAdmin, async (req, res) => {
  try {
    const { user_id, amount, description } = req.body;

    const wallet = await Wallet.findOne({ where: { user_id } });

    if (!wallet) {
      return res.status(404).json({ success: false, error: 'Wallet not found' });
    }

    if (parseFloat(wallet.balance) < parseFloat(amount)) {
      return res.status(400).json({ success: false, error: 'Insufficient balance' });
    }

    const newBalance = parseFloat(wallet.balance) - parseFloat(amount);
    await wallet.update({ balance: newBalance });

    await WalletTransaction.create({
      wallet_id: wallet.id,
      user_id,
      type: 'debit',
      amount,
      balance_after: newBalance,
      description: description || 'Admin debit',
      reference_type: 'admin',
      transaction_id: generateTransactionId()
    });

    res.json({
      success: true,
      data: { balance: newBalance },
      message: 'Amount deducted from wallet'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
