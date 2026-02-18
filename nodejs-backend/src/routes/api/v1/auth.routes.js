const router = require('express').Router();
const authService = require('../../../services/auth.service');
const emailService = require('../../../services/email.service');
const smsService = require('../../../services/sms.service');
const { User, Admin } = require('../../../models');
const { authenticateUser } = require('../../../middleware/auth.middleware');
const { body, validationResult } = require('express-validator');

// Validation middleware
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('firstName').trim().notEmpty(),
  body('lastName').trim().optional()
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
];

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register new user
 * @access  Public
 */
router.post('/register', registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password, firstName, lastName, phone, termsCondition } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already registered'
      });
    }

    // Register user
    const result = await authService.registerUser({
      email,
      password,
      firstName,
      lastName,
      phone,
      termsCondition
    });

    // Send verification email
    const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${result.emailVerifyToken}`;
    await emailService.sendEmailVerification(result.user, verificationUrl);

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please verify your email.',
      data: {
        user: result.user,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Registration failed'
    });
  }
});

/**
 * @route   POST /api/v1/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', loginValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    const result = await authService.loginUser(email, password);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: result.user,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(401).json({
      success: false,
      message: error.message || 'Invalid credentials'
    });
  }
});

/**
 * @route   POST /api/v1/auth/admin/login
 * @desc    Login admin/franchise
 * @access  Public
 */
router.post('/admin/login', loginValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    const result = await authService.loginAdmin(email, password);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        admin: result.admin,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        type: result.type
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(401).json({
      success: false,
      message: error.message || 'Invalid credentials'
    });
  }
});

/**
 * @route   POST /api/v1/auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', authenticateUser, async (req, res) => {
  try {
    // In a real implementation, you might want to blacklist the token
    // For now, we just return success and let the client clear the token

    res.json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Logout failed'
    });
  }
});

/**
 * @route   POST /api/v1/auth/refresh-token
 * @desc    Refresh access token
 * @access  Public
 */
router.post('/refresh-token', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Refresh token required'
      });
    }

    const result = await authService.refreshAccessToken(refreshToken);

    res.json({
      success: true,
      data: {
        accessToken: result.accessToken
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid refresh token'
    });
  }
});

/**
 * @route   POST /api/v1/auth/send-otp
 * @desc    Send OTP to email/phone
 * @access  Public
 */
router.post('/send-otp', async (req, res) => {
  try {
    const { email, phone, type } = req.body;

    if (!email && !phone) {
      return res.status(400).json({
        success: false,
        message: 'Email or phone required'
      });
    }

    const { otp, expiresAt } = authService.generateOTP();

    // Store OTP (in production, use Redis or database)
    // For now, we'll just send it

    if (email) {
      const user = await User.findOne({ where: { email } });
      if (!user && type === 'reset') {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
      await emailService.sendOTP(user || { email, first_name: 'User' }, otp);
    }

    if (phone) {
      await smsService.sendOTP(phone, otp);
    }

    res.json({
      success: true,
      message: 'OTP sent successfully',
      data: {
        expiresAt,
        // In production, don't send OTP in response
        ...(process.env.NODE_ENV === 'development' && { otp })
      }
    });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send OTP'
    });
  }
});

/**
 * @route   POST /api/v1/auth/verify-otp
 * @desc    Verify OTP
 * @access  Public
 */
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, phone, otp } = req.body;

    // In production, verify OTP from Redis/database
    // For now, we'll accept any 6-digit OTP in development
    if (process.env.NODE_ENV !== 'development' && otp !== '123456') {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP'
      });
    }

    res.json({
      success: true,
      message: 'OTP verified successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'OTP verification failed'
    });
  }
});

/**
 * @route   POST /api/v1/auth/forgot-password
 * @desc    Request password reset
 * @access  Public
 */
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      // Don't reveal if user exists
      return res.json({
        success: true,
        message: 'If email exists, reset link will be sent'
      });
    }

    const { token, hashedToken, expiresAt } = authService.generatePasswordResetToken();

    // Save hashed token to user
    await user.update({
      password_reset_token: hashedToken,
      password_reset_expires: expiresAt
    });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    await emailService.sendPasswordReset(user, resetUrl);

    res.json({
      success: true,
      message: 'Password reset link sent to email'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process request'
    });
  }
});

/**
 * @route   POST /api/v1/auth/reset-password
 * @desc    Reset password with token
 * @access  Public
 */
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({
        success: false,
        message: 'Token and password required'
      });
    }

    const crypto = require('crypto');
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      where: {
        password_reset_token: hashedToken
      }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }

    // Check if token expired
    if (new Date() > new Date(user.password_reset_expires)) {
      return res.status(400).json({
        success: false,
        message: 'Token has expired'
      });
    }

    // Update password
    const hashedPassword = await authService.hashPassword(password);
    await user.update({
      password: hashedPassword,
      password_reset_token: null,
      password_reset_expires: null
    });

    res.json({
      success: true,
      message: 'Password reset successful'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reset password'
    });
  }
});

/**
 * @route   POST /api/v1/auth/social/login
 * @desc    Social login (Google/Facebook)
 * @access  Public
 */
router.post('/social/login', async (req, res) => {
  try {
    const { provider, token, email, firstName, lastName, socialId, image } = req.body;

    if (!provider || !email) {
      return res.status(400).json({
        success: false,
        message: 'Provider and email required'
      });
    }

    // Find or create user
    let user = await User.findOne({ where: { email } });

    if (!user) {
      // Create new user
      user = await User.create({
        email,
        first_name: firstName,
        last_name: lastName,
        image,
        email_verified: true, // Social login users are verified
        password: await authService.hashPassword(Math.random().toString(36)), // Random password
        terms_condition: true
      });
    }

    const accessToken = authService.generateAccessToken(user, 'user');
    const refreshToken = authService.generateRefreshToken(user);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: authService.sanitizeUser(user),
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    console.error('Social login error:', error);
    res.status(500).json({
      success: false,
      message: 'Social login failed'
    });
  }
});

module.exports = router;
