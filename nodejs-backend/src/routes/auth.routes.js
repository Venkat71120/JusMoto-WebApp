const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidator = require('../validators/auth.validator');
const { validate } = require('../middleware/validate.middleware');
const { authenticate } = require('../middleware/auth.middleware');
const { formatError } = require('../utils/formatError');

// Public routes
router.post('/register', authValidator.registerValidator, validate, authController.register);
router.post('/login', authValidator.loginValidator, validate, authController.login);
router.post('/admin/login', authValidator.adminLoginValidator, validate, authController.adminLogin);
router.post('/verify-email', authValidator.verifyEmailValidator, validate, authController.verifyEmail);
router.post('/resend-otp', authValidator.resendOtpValidator, validate, authController.resendOtp);
router.post('/forgot-password', authValidator.forgotPasswordValidator, validate, authController.forgotPassword);
router.post('/reset-password', authValidator.resetPasswordValidator, validate, authController.resetPassword);

// Social login — delegates to v1 auth routes (Google, Apple, Facebook)
// Use POST /api/v1/auth/google or /api/v1/auth/apple for verified login
router.post('/social/login', async (req, res) => {
  try {
    const { provider, email, firstName, lastName, socialId, image } = req.body;
    if (!provider || !email) {
      return res.status(400).json({ success: false, error: 'Provider and email are required' });
    }

    const { User } = require('../models');
    const authService = require('../services/auth.service');

    // Find by social_id first, then email
    let user = socialId
      ? await User.findOne({ where: { provider, social_id: socialId } })
      : null;

    if (!user) {
      user = await User.findOne({ where: { email } });
      if (user && !user.provider) {
        await user.update({ provider, social_id: socialId || null });
      }
    }

    if (!user) {
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
        provider,
        social_id: socialId || null,
        password: require('crypto').randomBytes(32).toString('hex'),
        terms_condition: true
      });
    }

    const token = authService.generateAccessToken(user, 'user');
    const refreshToken = authService.generateRefreshToken(user);

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
          image: user.image,
          provider: user.provider
        },
        token,
        accessToken: token,
        refreshToken
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Protected routes
router.post('/logout', authenticate, authController.logout);
router.post('/refresh-token', authenticate, authController.refreshToken);
router.get('/me', authenticate, authController.me);
router.post('/firebase-token', authenticate, authValidator.updateFirebaseTokenValidator, validate, authController.updateFirebaseToken);

module.exports = router;
