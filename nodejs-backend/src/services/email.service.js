const nodemailer = require('nodemailer');
const mailConfig = require('../config/mail');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.auth.user,
        pass: mailConfig.auth.pass
      }
    });
  }

  /**
   * Send email
   */
  async send(to, subject, html, text = null) {
    try {
      const mailOptions = {
        from: `"${mailConfig.from.name}" <${mailConfig.from.address}>`,
        to,
        subject,
        html,
        text: text || this.stripHtml(html)
      };

      const result = await this.transporter.sendMail(mailOptions);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Email send error:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Send welcome email
   */
  async sendWelcome(user) {
    const subject = `Welcome to JusMoto, ${user.first_name}!`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Welcome to JusMoto!</h1>
        <p>Hi ${user.first_name},</p>
        <p>Thank you for joining JusMoto. We're excited to have you on board!</p>
        <p>With JusMoto, you can:</p>
        <ul>
          <li>Book car services at your convenience</li>
          <li>Track your service orders in real-time</li>
          <li>Pay traffic challans easily</li>
          <li>Get exclusive offers and discounts</li>
        </ul>
        <p>If you have any questions, feel free to contact our support team.</p>
        <p>Best regards,<br>The JusMoto Team</p>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send email verification
   */
  async sendEmailVerification(user, verificationUrl) {
    const subject = 'Verify Your Email - JusMoto';
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Verify Your Email</h1>
        <p>Hi ${user.first_name},</p>
        <p>Please verify your email address by clicking the button below:</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">Verify Email</a>
        </p>
        <p>Or copy and paste this link in your browser:</p>
        <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
        <p>This link will expire in 24 hours.</p>
        <p>Best regards,<br>The JusMoto Team</p>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send password reset email
   */
  async sendPasswordReset(user, resetUrl) {
    const subject = 'Reset Your Password - JusMoto';
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Reset Your Password</h1>
        <p>Hi ${user.first_name},</p>
        <p>We received a request to reset your password. Click the button below to set a new password:</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">Reset Password</a>
        </p>
        <p>Or copy and paste this link in your browser:</p>
        <p style="word-break: break-all; color: #666;">${resetUrl}</p>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request a password reset, please ignore this email.</p>
        <p>Best regards,<br>The JusMoto Team</p>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send OTP email
   */
  async sendOTP(user, otp) {
    const subject = 'Your Verification Code - JusMoto';
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Verification Code</h1>
        <p>Hi ${user.first_name},</p>
        <p>Your verification code is:</p>
        <p style="font-size: 32px; font-weight: bold; text-align: center; letter-spacing: 5px; color: #007bff; margin: 30px 0;">${otp}</p>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this code, please ignore this email.</p>
        <p>Best regards,<br>The JusMoto Team</p>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send order confirmation
   */
  async sendOrderConfirmation(user, order) {
    const subject = `Order Confirmed #${order.id} - JusMoto`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Order Confirmed!</h1>
        <p>Hi ${user.first_name},</p>
        <p>Thank you for your order. Here are your order details:</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Order ID:</strong> #${order.id}</p>
          <p><strong>Date:</strong> ${new Date(order.created_at).toLocaleDateString()}</p>
          <p><strong>Total:</strong> ₹${order.total}</p>
          <p><strong>Status:</strong> ${order.status}</p>
        </div>
        <p>You can track your order status in the app.</p>
        <p>Best regards,<br>The JusMoto Team</p>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send order status update
   */
  async sendOrderStatusUpdate(user, order, status) {
    const subject = `Order #${order.id} Status Update - JusMoto`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Order Status Update</h1>
        <p>Hi ${user.first_name},</p>
        <p>Your order #${order.id} status has been updated to: <strong>${status}</strong></p>
        <p>You can track your order in the app for more details.</p>
        <p>Best regards,<br>The JusMoto Team</p>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Strip HTML tags
   */
  stripHtml(html) {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
}

module.exports = new EmailService();
