const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidator = require('../validators/auth.validator');
const { validate } = require('../middleware/validate.middleware');
const { authenticate } = require('../middleware/auth.middleware');

// Public routes
router.post('/register', authValidator.registerValidator, validate, authController.register);
router.post('/login', authValidator.loginValidator, validate, authController.login);
router.post('/admin/login', authValidator.adminLoginValidator, validate, authController.adminLogin);
router.post('/verify-email', authValidator.verifyEmailValidator, validate, authController.verifyEmail);
router.post('/resend-otp', authValidator.resendOtpValidator, validate, authController.resendOtp);
router.post('/forgot-password', authValidator.forgotPasswordValidator, validate, authController.forgotPassword);
router.post('/reset-password', authValidator.resetPasswordValidator, validate, authController.resetPassword);

// Social login (Google, Facebook, etc.)
router.post('/social/login', async (req, res) => {
  try {
    const { provider, email, firstName, lastName, socialId, image } = req.body;
    if (!provider || !email) {
      return res.status(400).json({ success: false, error: 'Provider and email are required' });
    }

    const { User } = require('../models');
    const authService = require('../services/auth.service');

    let user = await User.findOne({ where: { email } });
    if (!user) {
      // Generate unique username from email
      const emailParts = email.split('@');
      let username = emailParts[0].replace(/[^a-zA-Z0-9_]/g, '');
      const originalUsername = username;
      let counter = 1;
      while (await User.findOne({ where: { username } })) {
        username = `${originalUsername}_${counter}`;
        counter++;
      }

      user = await User.create({
        email,
        username,
        first_name: firstName || null,
        last_name: lastName || null,
        image: image || null,
        email_verified: 1,
        password: require('crypto').randomBytes(16).toString('hex'),
        terms_condition: true
      });
    }

    const token = authService.generateAccessToken(user, 'user');

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone,
          username: user.username,
          email_verified: user.email_verified,
          image: user.image
        },
        token
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Protected routes
router.post('/logout', authenticate, authController.logout);
router.post('/refresh-token', authenticate, authController.refreshToken);
router.get('/me', authenticate, authController.me);
router.post('/firebase-token', authenticate, authValidator.updateFirebaseTokenValidator, validate, authController.updateFirebaseToken);

module.exports = router;
