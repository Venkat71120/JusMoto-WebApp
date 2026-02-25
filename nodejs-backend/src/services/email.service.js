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
   * Send order confirmation with address + slot details
   */
  async sendOrderConfirmation(user, order) {
    const subject = `Order Confirmed #${order.id} - JusMoto`;
    const loc = order.location || {};
    const addr = [loc.address, loc.city, loc.state, loc.zip_code || loc.post_code].filter(Boolean).join(', ');
    const scheduleLabels = { morning: 'Morning (9 AM - 12 PM)', afternoon: 'Afternoon (12 PM - 4 PM)', evening: 'Evening (4 PM - 8 PM)' };
    const slotText = order.schedule ? (scheduleLabels[order.schedule] || order.schedule) : 'Flexible';
    const dateText = order.date ? new Date(order.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'As scheduled';
    const items = order.items || [];

    let itemsHtml = '';
    for (const item of items) {
      const name = item.service_name || item.name || `Service #${item.service_id}`;
      const qty = item.quantity || 1;
      const price = item.price || item.unit_price || 0;
      itemsHtml += `
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #333;">${name}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #666; text-align: center;">${qty}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #333; text-align: right;">₹${Number(price * qty).toFixed(2)}</td>
        </tr>`;
    }

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
        <!-- Header -->
        <div style="background: #e31b23; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 700;">Order Confirmed!</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Thank you for choosing JusMoto</p>
        </div>

        <div style="background: #fff; padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="margin: 0 0 24px; font-size: 16px; color: #333;">Hi ${user.first_name || 'there'},</p>
          <p style="margin: 0 0 24px; font-size: 14px; color: #555; line-height: 1.6;">Your order has been placed successfully. Here are your order details:</p>

          <!-- Order Info -->
          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; font-size: 14px; color: #666;">Order ID</td>
                <td style="padding: 6px 0; font-size: 14px; color: #333; font-weight: 600; text-align: right;">#${order.id}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 14px; color: #666;">Order Date</td>
                <td style="padding: 6px 0; font-size: 14px; color: #333; text-align: right;">${new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 14px; color: #666;">Payment</td>
                <td style="padding: 6px 0; font-size: 14px; color: #333; text-align: right;">${order.payment_gateway ? order.payment_gateway.charAt(0).toUpperCase() + order.payment_gateway.slice(1) : 'Pending'}</td>
              </tr>
            </table>
          </div>

          <!-- Schedule Slot -->
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 15px; color: #1a1a1a; margin: 0 0 12px; padding-bottom: 8px; border-bottom: 2px solid #e31b23; display: inline-block;">Service Schedule</h3>
            <div style="background: #fff5f5; border: 1px solid #fecdd3; border-radius: 8px; padding: 16px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 4px 0; font-size: 14px; color: #666;">
                    <span style="margin-right: 8px;">📅</span> Date
                  </td>
                  <td style="padding: 4px 0; font-size: 14px; color: #333; font-weight: 600; text-align: right;">${dateText}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; font-size: 14px; color: #666;">
                    <span style="margin-right: 8px;">🕐</span> Time Slot
                  </td>
                  <td style="padding: 4px 0; font-size: 14px; color: #333; font-weight: 600; text-align: right;">${slotText}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Delivery Address -->
          ${addr ? `
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 15px; color: #1a1a1a; margin: 0 0 12px; padding-bottom: 8px; border-bottom: 2px solid #e31b23; display: inline-block;">Delivery Address</h3>
            <div style="background: #f8f9fa; border-radius: 8px; padding: 16px;">
              ${loc.name ? `<p style="margin: 0 0 4px; font-size: 14px; font-weight: 600; color: #333;">${loc.name}</p>` : ''}
              <p style="margin: 0 0 4px; font-size: 14px; color: #555; line-height: 1.5;">${addr}</p>
              ${loc.phone ? `<p style="margin: 4px 0 0; font-size: 14px; color: #555;">📞 ${loc.phone}</p>` : ''}
            </div>
          </div>` : ''}

          <!-- Order Items -->
          ${items.length > 0 ? `
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 15px; color: #1a1a1a; margin: 0 0 12px; padding-bottom: 8px; border-bottom: 2px solid #e31b23; display: inline-block;">Order Items</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: #f8f9fa;">
                  <th style="padding: 10px 16px; font-size: 12px; color: #666; text-align: left; text-transform: uppercase; font-weight: 600;">Service</th>
                  <th style="padding: 10px 16px; font-size: 12px; color: #666; text-align: center; text-transform: uppercase; font-weight: 600;">Qty</th>
                  <th style="padding: 10px 16px; font-size: 12px; color: #666; text-align: right; text-transform: uppercase; font-weight: 600;">Amount</th>
                </tr>
              </thead>
              <tbody>${itemsHtml}</tbody>
            </table>
          </div>` : ''}

          <!-- Order Total -->
          <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; font-size: 14px; color: #666;">Subtotal</td>
                <td style="padding: 6px 0; font-size: 14px; color: #333; text-align: right;">₹${Number(order.sub_total || 0).toFixed(2)}</td>
              </tr>
              ${order.tax > 0 ? `<tr>
                <td style="padding: 6px 0; font-size: 14px; color: #666;">Tax</td>
                <td style="padding: 6px 0; font-size: 14px; color: #333; text-align: right;">₹${Number(order.tax).toFixed(2)}</td>
              </tr>` : ''}
              ${order.delivery_charge > 0 ? `<tr>
                <td style="padding: 6px 0; font-size: 14px; color: #666;">Delivery Charge</td>
                <td style="padding: 6px 0; font-size: 14px; color: #333; text-align: right;">₹${Number(order.delivery_charge).toFixed(2)}</td>
              </tr>` : ''}
              ${order.coupon_amount > 0 ? `<tr>
                <td style="padding: 6px 0; font-size: 14px; color: #28a745;">Coupon Discount (${order.coupon_code})</td>
                <td style="padding: 6px 0; font-size: 14px; color: #28a745; text-align: right;">-₹${Number(order.coupon_amount).toFixed(2)}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0 6px; font-size: 16px; color: #1a1a1a; font-weight: 700; border-top: 2px solid #e5e7eb;">Total</td>
                <td style="padding: 12px 0 6px; font-size: 16px; color: #e31b23; font-weight: 700; text-align: right; border-top: 2px solid #e5e7eb;">₹${Number(order.total || 0).toFixed(2)}</td>
              </tr>
            </table>
          </div>

          <p style="font-size: 14px; color: #555; line-height: 1.6;">You can track your order status anytime from your <strong>JusMoto dashboard</strong>.</p>
        </div>

        <!-- Footer -->
        <div style="padding: 20px 24px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Need help? Contact us at <a href="mailto:support@jusmoto.com" style="color: #e31b23; text-decoration: none;">support@jusmoto.com</a></p>
          <p style="margin: 0; font-size: 12px; color: #aaa;">© ${new Date().getFullYear()} JusMoto. All rights reserved.</p>
        </div>
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
   * Send account created email (welcome + account info)
   */
  async sendAccountCreated(user) {
    const subject = 'Your JusMoto Account Has Been Created';
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #e31b23; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0;">Welcome to JusMoto!</h1>
        </div>
        <div style="padding: 30px; background: #fff; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px;">
          <p>Hi ${user.first_name || 'there'},</p>
          <p>Your account has been successfully created. Here are your account details:</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 4px 0;"><strong>Name:</strong> ${user.first_name || ''} ${user.last_name || ''}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> ${user.email}</p>
            <p style="margin: 4px 0;"><strong>Username:</strong> ${user.username}</p>
          </div>
          <p>You can now log in and start using our services:</p>
          <ul>
            <li>Book car services at your convenience</li>
            <li>Track your service orders in real-time</li>
            <li>Pay traffic challans easily</li>
            <li>Get exclusive offers and discounts</li>
          </ul>
          <p style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL || 'http://localhost:4200'}/auth/login" style="background-color: #e31b23; color: white; padding: 14px 36px; text-decoration: none; border-radius: 8px; font-weight: bold;">Login to Your Account</a>
          </p>
          <p style="color: #666; font-size: 13px;">If you didn't create this account, please ignore this email.</p>
          <p>Best regards,<br>The JusMoto Team</p>
        </div>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send account status changed email (activated / deactivated / suspended)
   */
  async sendAccountStatusChanged(user, statusType) {
    const statusConfig = {
      activated: {
        title: 'Account Activated',
        color: '#16a34a',
        message: 'Your JusMoto account has been activated. You can now log in and use all our services.',
        icon: 'check_circle'
      },
      deactivated: {
        title: 'Account Deactivated',
        color: '#dc2626',
        message: 'Your JusMoto account has been deactivated. You will not be able to log in until your account is reactivated. If you believe this is a mistake, please contact our support team.',
        icon: 'block'
      },
      suspended: {
        title: 'Account Suspended',
        color: '#f59e0b',
        message: 'Your JusMoto account has been suspended due to a policy violation. Please contact our support team for more information.',
        icon: 'warning'
      }
    };

    const config = statusConfig[statusType] || statusConfig.deactivated;
    const subject = `${config.title} - JusMoto`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: ${config.color}; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0;">${config.title}</h1>
        </div>
        <div style="padding: 30px; background: #fff; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px;">
          <p>Hi ${user.first_name || 'there'},</p>
          <p>${config.message}</p>
          <div style="background: #f8f9fa; padding: 16px; border-left: 4px solid ${config.color}; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Account:</strong> ${user.email}</p>
            <p style="margin: 4px 0 0;"><strong>Status:</strong> ${config.title}</p>
          </div>
          <p style="color: #666; font-size: 13px;">If you have any questions, please contact our support team.</p>
          <p>Best regards,<br>The JusMoto Team</p>
        </div>
      </div>
    `;
    return this.send(user.email, subject, html);
  }

  /**
   * Send account deleted email
   */
  async sendAccountDeleted(user) {
    const subject = 'Your JusMoto Account Has Been Deleted';
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #dc2626; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0;">Account Deleted</h1>
        </div>
        <div style="padding: 30px; background: #fff; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px;">
          <p>Hi ${user.first_name || 'there'},</p>
          <p>We're writing to confirm that your JusMoto account associated with <strong>${user.email}</strong> has been deleted.</p>
          <p>All your personal data will be removed from our systems in accordance with our data retention policy.</p>
          <div style="background: #fef2f2; padding: 16px; border-left: 4px solid #dc2626; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #991b1b;">If you did not request this deletion, please contact our support team immediately.</p>
          </div>
          <p>We're sorry to see you go. If you change your mind, you're always welcome to create a new account.</p>
          <p>Best regards,<br>The JusMoto Team</p>
        </div>
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
