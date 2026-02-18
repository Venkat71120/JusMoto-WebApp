const Razorpay = require('razorpay');
const crypto = require('crypto');
const paymentConfig = require('../../config/payment');

class RazorpayIntegration {
  constructor() {
    const config = paymentConfig.gateways.razorpay;
    if (config.keyId && config.keySecret) {
      this.razorpay = new Razorpay({
        key_id: config.keyId,
        key_secret: config.keySecret
      });
      this.keyId = config.keyId;
      this.keySecret = config.keySecret;
    }
  }

  isEnabled() {
    return !!this.razorpay;
  }

  /**
   * Create order
   */
  async createOrder(amount, currency = 'INR', receipt = null, notes = {}) {
    if (!this.isEnabled()) {
      throw new Error('Razorpay is not configured');
    }

    try {
      const options = {
        amount: Math.round(amount * 100), // Convert to paise
        currency: currency.toUpperCase(),
        receipt: receipt || `receipt_${Date.now()}`,
        notes
      };

      const order = await this.razorpay.orders.create(options);

      return {
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: this.keyId
      };
    } catch (error) {
      console.error('Razorpay createOrder error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Verify payment signature
   */
  verifyPaymentSignature(orderId, paymentId, signature) {
    const body = orderId + '|' + paymentId;
    const expectedSignature = crypto
      .createHmac('sha256', this.keySecret)
      .update(body)
      .digest('hex');

    return expectedSignature === signature;
  }

  /**
   * Capture payment
   */
  async capturePayment(paymentId, amount, currency = 'INR') {
    if (!this.isEnabled()) {
      throw new Error('Razorpay is not configured');
    }

    try {
      const payment = await this.razorpay.payments.capture(
        paymentId,
        Math.round(amount * 100),
        currency.toUpperCase()
      );

      return {
        success: true,
        paymentId: payment.id,
        status: payment.status
      };
    } catch (error) {
      console.error('Razorpay capturePayment error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Fetch payment details
   */
  async fetchPayment(paymentId) {
    if (!this.isEnabled()) {
      throw new Error('Razorpay is not configured');
    }

    try {
      const payment = await this.razorpay.payments.fetch(paymentId);

      return {
        success: true,
        payment,
        status: payment.status,
        captured: payment.captured
      };
    } catch (error) {
      console.error('Razorpay fetchPayment error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Process refund
   */
  async refund(paymentId, amount = null, notes = {}) {
    if (!this.isEnabled()) {
      throw new Error('Razorpay is not configured');
    }

    try {
      const refundData = { notes };
      if (amount) {
        refundData.amount = Math.round(amount * 100);
      }

      const refund = await this.razorpay.payments.refund(paymentId, refundData);

      return {
        success: true,
        refundId: refund.id,
        status: refund.status
      };
    } catch (error) {
      console.error('Razorpay refund error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get key ID for frontend
   */
  getKeyId() {
    return this.keyId;
  }
}

module.exports = new RazorpayIntegration();
