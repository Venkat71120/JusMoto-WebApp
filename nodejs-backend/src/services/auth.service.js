const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { User, Admin } = require('../models');
const authConfig = require('../config/auth');

class AuthService {
  /**
   * Generate access token
   */
  generateAccessToken(user, type = 'user') {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        type
      },
      authConfig.jwt.secret,
      {
        expiresIn: authConfig.jwt.expiresIn,
        issuer: authConfig.jwt.issuer
      }
    );
  }

  /**
   * Generate refresh token
   */
  generateRefreshToken(user) {
    return jwt.sign(
      { id: user.id },
      authConfig.jwt.refreshSecret,
      { expiresIn: authConfig.jwt.refreshExpiresIn }
    );
  }

  /**
   * Hash password
   */
  async hashPassword(password) {
    return bcrypt.hash(password, authConfig.password.saltRounds);
  }

  /**
   * Compare passwords
   */
  async comparePasswords(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  /**
   * Generate OTP
   */
  generateOTP() {
    const otp = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + authConfig.otp.expiresIn);
    return { otp, expiresAt };
  }

  /**
   * Generate email verification token
   */
  generateVerificationToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  /**
   * Generate password reset token
   */
  generatePasswordResetToken() {
    const token = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    return { token, hashedToken, expiresAt };
  }

  /**
   * Register new user
   */
  async registerUser(data) {
    const hashedPassword = await this.hashPassword(data.password);
    const emailVerifyToken = this.generateVerificationToken();

    const user = await User.create({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
      email_verify_token: emailVerifyToken,
      terms_condition: data.termsCondition || true
    });

    const accessToken = this.generateAccessToken(user, 'user');
    const refreshToken = this.generateRefreshToken(user);

    return {
      user: this.sanitizeUser(user),
      accessToken,
      refreshToken,
      emailVerifyToken
    };
  }

  /**
   * Login user
   */
  async loginUser(email, password) {
    const { Op } = require('sequelize');
    // Accept email or username
    const user = await User.findOne({
      where: { [Op.or]: [{ email }, { username: email }] }
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await this.comparePasswords(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    if (user.is_suspend) {
      throw new Error('Account suspended');
    }

    // Update last seen
    await user.update({ last_seen: new Date() });

    const accessToken = this.generateAccessToken(user, 'user');
    const refreshToken = this.generateRefreshToken(user);

    return {
      user: this.sanitizeUser(user),
      accessToken,
      refreshToken
    };
  }

  /**
   * Login admin
   */
  async loginAdmin(email, password) {
    const { Op } = require('sequelize');
    // Accept email or username
    const admin = await Admin.findOne({
      where: { [Op.or]: [{ email }, { username: email }] }
    });

    if (!admin) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await this.comparePasswords(password, admin.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    if (admin.status !== 1) {
      throw new Error('Account inactive');
    }

    const type = admin.is_franchise ? 'franchise' : 'admin';
    const accessToken = this.generateAccessToken(admin, type);
    const refreshToken = this.generateRefreshToken(admin);

    return {
      admin: this.sanitizeAdmin(admin),
      accessToken,
      refreshToken,
      type
    };
  }

  /**
   * Verify token
   */
  verifyToken(token) {
    return jwt.verify(token, authConfig.jwt.secret);
  }

  /**
   * Verify refresh token
   */
  verifyRefreshToken(token) {
    return jwt.verify(token, authConfig.jwt.refreshSecret);
  }

  /**
   * Refresh access token
   */
  async refreshAccessToken(refreshToken) {
    const decoded = this.verifyRefreshToken(refreshToken);

    // Check if user still exists
    const user = await User.findByPk(decoded.id);
    if (!user) {
      const admin = await Admin.findByPk(decoded.id);
      if (!admin) {
        throw new Error('User not found');
      }
      const type = admin.is_franchise ? 'franchise' : 'admin';
      return {
        accessToken: this.generateAccessToken(admin, type),
        type
      };
    }

    return {
      accessToken: this.generateAccessToken(user, 'user'),
      type: 'user'
    };
  }

  /**
   * Sanitize user object for response
   */
  sanitizeUser(user) {
    const { password, email_verify_token, ...sanitized } = user.toJSON();
    return sanitized;
  }

  /**
   * Sanitize admin object for response
   */
  sanitizeAdmin(admin) {
    const { password, ...sanitized } = admin.toJSON();
    return sanitized;
  }
}

module.exports = new AuthService();
