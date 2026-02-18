const twilio = require('twilio');
const smsConfig = require('../config/sms');

class SMSService {
  constructor() {
    if (smsConfig.twilio.accountSid && smsConfig.twilio.authToken) {
      this.client = twilio(
        smsConfig.twilio.accountSid,
        smsConfig.twilio.authToken
      );
    }
  }

  /**
   * Send SMS
   */
  async send(to, message) {
    if (!this.client) {
      console.warn('SMS client not configured');
      return { success: false, error: 'SMS client not configured' };
    }

    try {
      const result = await this.client.messages.create({
        body: message,
        from: smsConfig.twilio.phoneNumber,
        to
      });

      return { success: true, sid: result.sid };
    } catch (error) {
      console.error('SMS send error:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Send OTP
   */
  async sendOTP(phone, otp) {
    const message = smsConfig.templates.otp.replace('{{otp}}', otp);
    return this.send(phone, message);
  }

  /**
   * Send order confirmation SMS
   */
  async sendOrderConfirmation(phone, orderId) {
    const message = smsConfig.templates.orderConfirmation.replace('{{orderId}}', orderId);
    return this.send(phone, message);
  }

  /**
   * Send order status update SMS
   */
  async sendOrderStatusUpdate(phone, orderId, status) {
    const message = smsConfig.templates.orderStatusChange
      .replace('{{orderId}}', orderId)
      .replace('{{status}}', status);
    return this.send(phone, message);
  }

  /**
   * Send password reset SMS
   */
  async sendPasswordReset(phone, code) {
    const message = smsConfig.templates.passwordReset.replace('{{code}}', code);
    return this.send(phone, message);
  }

  /**
   * Send welcome SMS
   */
  async sendWelcome(phone) {
    return this.send(phone, smsConfig.templates.welcome);
  }

  /**
   * Send challan payment confirmation
   */
  async sendChallanPaymentConfirmation(phone, amount, vehicleNumber) {
    const message = smsConfig.templates.challanPayment
      .replace('{{amount}}', amount)
      .replace('{{vehicleNumber}}', vehicleNumber);
    return this.send(phone, message);
  }

  /**
   * Send WhatsApp message
   */
  async sendWhatsApp(to, message) {
    if (!this.client || !smsConfig.twilio.whatsappNumber) {
      console.warn('WhatsApp client not configured');
      return { success: false, error: 'WhatsApp client not configured' };
    }

    try {
      const result = await this.client.messages.create({
        body: message,
        from: `whatsapp:${smsConfig.twilio.whatsappNumber}`,
        to: `whatsapp:${to}`
      });

      return { success: true, sid: result.sid };
    } catch (error) {
      console.error('WhatsApp send error:', error);
      return { success: false, error: error.message };
    }
  }
}

module.exports = new SMSService();
