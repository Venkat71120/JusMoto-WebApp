const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { User, Admin, Wallet, sequelize } = require('../models');
const { generateOTP, generateRandomString } = require('../utils/helpers');
const response = require('../utils/response');
const emailService = require('../services/email.service');
const notificationService = require('../services/notification.service');

/**
 * User Registration
 */
const register = async (req, res) => {
  try {
    const { email, password, terms_conditions, first_name, last_name, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return response.error(res, 'Email already registered', 422);
    }

    // Generate username from email
    const emailParts = email.split('@');
    let username = emailParts[0].replace(/[^a-zA-Z0-9_]/g, '');
    const originalUsername = username;
    let counter = 1;

    // Ensure unique username
    while (await User.findOne({ where: { username } })) {
      username = `${originalUsername}_${counter}`;
      counter++;
    }

    // Generate OTP for email verification
    const emailVerifyToken = generateOTP(6);

    // Create user
    const user = await User.create({
      first_name: first_name || null,
      last_name: last_name || null,
      username,
      email,
      phone: phone || null,
      password,
      terms_condition: terms_conditions ? 1 : 0,
      email_verify_token: emailVerifyToken,
      status: 1,
      email_verified: 0
    });

    // Create wallet for user
    await Wallet.create({
      user_id: user.id,
      available_balance: 0.00
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, type: 'client', email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '180d' }
    );

    // Send OTP email for email verification + welcome email
    try {
      await emailService.sendOTP(user, emailVerifyToken);
      await emailService.sendAccountCreated(user);
    } catch (emailErr) {
      console.error('Failed to send registration emails:', emailErr.message);
    }

    notificationService.welcomeUser(user.id).catch(() => {});

    return response.created(res, {
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        username: user.username,
        email_verified: user.email_verified
      },
      token,
      verify_enabled: false // Can be configured from settings
    }, 'Registration successful');

  } catch (error) {
    console.error('Registration error:', error);
    return response.serverError(res, error);
  }
};

/**
 * User Login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email or username login
    const isEmail = email.includes('@');
    const whereClause = isEmail ? { email } : { username: email };

    const user = await User.findOne({
      where: whereClause,
      attributes: ['id', 'first_name', 'last_name', 'email', 'phone', 'email_verified', 'username', 'password', 'status', 'is_suspend']
    });

    if (!user) {
      return response.notFound(res, 'User not found');
    }

    // Check if account is suspended
    if (user.is_suspend === 1) {
      return response.forbidden(res, 'Your account has been suspended');
    }

    // Check if account is active
    if (user.status !== 1) {
      return response.forbidden(res, 'Your account is not active');
    }

    // Verify password
    const isValidPassword = await user.validPassword(password);
    if (!isValidPassword) {
      return response.unauthorized(res, 'Invalid email/username or password');
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, type: 'client', email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '180d' }
    );

    // Update last seen
    await user.update({ last_seen: new Date() });

    return response.success(res, {
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        username: user.username,
        email_verified: user.email_verified
      },
      token,
      verify_enabled: false
    }, 'Login successful');

  } catch (error) {
    console.error('Login error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Admin Login
 */
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      where: {
        [require('sequelize').Op.or]: [
          { email },
          { username: email }
        ]
      },
      attributes: ['id', 'name', 'email', 'username', 'password', 'role', 'is_franchise', 'status', 'image']
    });

    if (!admin) {
      return response.notFound(res, 'Admin not found');
    }

    if (!admin.status) {
      return response.forbidden(res, 'Account is disabled');
    }

    const isValidPassword = await admin.validPassword(password);
    if (!isValidPassword) {
      return response.unauthorized(res, 'Invalid credentials');
    }

    const token = jwt.sign(
      { id: admin.id, type: 'admin', role: admin.role, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '180d' }
    );

    // Fetch permissions for this admin's role
    let permissions = [];
    try {
      const [perms] = await sequelize.query(
        `SELECT DISTINCT p.name FROM permissions p
         INNER JOIN role_has_permissions rhp ON p.id = rhp.permission_id
         INNER JOIN roles r ON rhp.role_id = r.id
         WHERE r.name = ?`,
        { replacements: [admin.role] }
      );
      permissions = perms.map(p => p.name);
    } catch (e) {
      // If permissions query fails, continue with empty permissions
      console.error('Permission fetch error:', e.message);
    }

    return response.success(res, {
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        username: admin.username,
        role: admin.role,
        is_franchise: admin.is_franchise ? 1 : 0,
        image: admin.image,
        permissions
      },
      token
    }, 'Login successful');

  } catch (error) {
    console.error('Admin login error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Verify Email OTP
 */
const verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.notFound(res, 'User not found');
    }

    if (user.email_verified === 1) {
      return response.error(res, 'Email already verified', 400);
    }

    if (user.email_verify_token !== otp) {
      return response.error(res, 'Invalid OTP', 400);
    }

    await user.update({
      email_verified: 1,
      email_verified_at: new Date(),
      email_verify_token: null
    });

    return response.success(res, null, 'Email verified successfully');

  } catch (error) {
    console.error('Email verification error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Resend Email OTP
 */
const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.notFound(res, 'User not found');
    }

    if (user.email_verified === 1) {
      return response.error(res, 'Email already verified', 400);
    }

    const newOtp = generateOTP(6);
    await user.update({ email_verify_token: newOtp });

    // Send OTP email
    try {
      await emailService.sendOTP(user, newOtp);
    } catch (emailErr) {
      console.error('Failed to send OTP email:', emailErr.message);
    }

    return response.success(res, null, 'OTP sent successfully');

  } catch (error) {
    console.error('Resend OTP error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Forgot Password - Request Reset
 */
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      // Don't reveal if user exists
      return response.success(res, null, 'If the email exists, a reset link will be sent');
    }

    const resetToken = generateRandomString(64);
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Store hashed reset token with expiry
    await user.update({
      password_reset_token: hashedToken,
      password_reset_expires: expiresAt
    });

    // Send password reset email
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:4200'}/auth/reset-password?token=${resetToken}`;
    try {
      await emailService.sendPasswordReset(user, resetUrl);
    } catch (emailErr) {
      console.error('Failed to send reset email:', emailErr.message);
    }

    return response.success(res, null, 'If the email exists, a reset link will be sent');

  } catch (error) {
    console.error('Forgot password error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Reset Password
 */
const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    // Hash the token to compare with stored hash
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Find user with matching token that hasn't expired
    const user = await User.findOne({
      where: {
        password_reset_token: hashedToken,
        password_reset_expires: { [require('sequelize').Op.gt]: new Date() }
      }
    });

    if (!user) {
      return response.error(res, 'Invalid or expired reset token', 400);
    }

    // Update password and clear reset token
    await user.update({
      password,
      password_reset_token: null,
      password_reset_expires: null
    });

    return response.success(res, null, 'Password reset successfully');

  } catch (error) {
    console.error('Reset password error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Logout
 */
const logout = async (req, res) => {
  try {
    // For JWT, just return success (client should remove token)
    return response.success(res, null, 'Logged out successfully');
  } catch (error) {
    console.error('Logout error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Refresh Token
 */
const refreshToken = async (req, res) => {
  try {
    const user = req.user || req.admin;
    const type = req.userType;

    if (!user) {
      return response.unauthorized(res, 'Invalid token');
    }

    const newToken = jwt.sign(
      { id: user.id, type, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '180d' }
    );

    return response.success(res, { token: newToken }, 'Token refreshed');

  } catch (error) {
    console.error('Refresh token error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Get Current User
 */
const me = async (req, res) => {
  try {
    const user = req.user;
    const admin = req.admin;

    if (admin) {
      return response.success(res, {
        type: 'admin',
        user: admin
      });
    }

    if (user) {
      const userData = await User.findByPk(user.id, {
        include: [
          { association: 'wallet', attributes: ['available_balance'] }
        ]
      });

      return response.success(res, {
        type: 'client',
        user: userData
      });
    }

    return response.unauthorized(res);

  } catch (error) {
    console.error('Me error:', error);
    return response.serverError(res, error);
  }
};

/**
 * Update Firebase Token
 */
const updateFirebaseToken = async (req, res) => {
  try {
    const { firebase_token } = req.body;
    const user = req.user || req.admin;
    const Model = req.user ? User : Admin;

    await Model.update(
      { firebase_token },
      { where: { id: user.id } }
    );

    return response.success(res, null, 'Firebase token updated');

  } catch (error) {
    console.error('Update firebase token error:', error);
    return response.serverError(res, error);
  }
};

module.exports = {
  register,
  login,
  adminLogin,
  verifyEmail,
  resendOtp,
  forgotPassword,
  resetPassword,
  logout,
  refreshToken,
  me,
  updateFirebaseToken
};
