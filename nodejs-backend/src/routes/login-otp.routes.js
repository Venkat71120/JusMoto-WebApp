const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const { User } = require('../models');
const authService = require('../services/auth.service');
const firebaseService = require('../services/firebase.service');
const { formatError } = require('../utils/formatError');

// POST /api/v1/login-otp/verify-token — Verify Firebase ID token and login
// Mobile app handles OTP send/verify via Firebase SDK, then sends the ID token here
router.post('/verify-token', async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(422).json({ success: false, message: 'Firebase ID token is required' });
    }

    // Verify the Firebase ID token
    const result = await firebaseService.verifyIdToken(idToken);

    if (!result.success) {
      return res.status(401).json({ success: false, message: result.error || 'Invalid Firebase token' });
    }

    const { decoded } = result;
    const phone = decoded.phone_number; // e.g. "+919876543210"

    if (!phone) {
      return res.status(400).json({ success: false, message: 'No phone number found in Firebase token' });
    }

    // Normalize phone: strip + and country code prefix for storage
    // Store as 10-digit number (strip +91)
    const normalizedPhone = phone.replace(/^\+91/, '');

    // Find or create user by phone
    let user = await User.findOne({ where: { phone: normalizedPhone } });

    if (!user) {
      user = await User.create({
        phone: normalizedPhone,
        password: crypto.randomBytes(16).toString('hex')
      });
    }

    // Update last_seen
    await user.update({ last_seen: new Date() });

    // Generate JWT tokens
    const accessToken = authService.generateAccessToken(user, 'user');
    const refreshToken = authService.generateRefreshToken(user);

    // Sanitize user for response
    const { password, email_verify_token, password_reset_token, password_reset_expires, ...userData } = user.toJSON();

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: userData,
        token: accessToken,
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    console.error('Firebase phone login error:', error);
    res.status(500).json({ success: false, message: 'Login failed', error: formatError(error) });
  }
});

module.exports = router;
