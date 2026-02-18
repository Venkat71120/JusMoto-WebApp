const stripeIntegration = require('../integrations/payment-gateways/stripe.integration');
const razorpayIntegration = require('../integrations/payment-gateways/razorpay.integration');
const { Order, PaymentGateway } = require('../models');

class PaymentService {
  /**
   * Get available payment gateways
   */
  async getAvailableGateways() {
    const gateways = await PaymentGateway.findAll({
      where: { status: 1 },
      attributes: ['id', 'name', 'slug', 'image'],
      order: [['order', 'ASC']]
    });

    return gateways.map(g => ({
      ...g.toJSON(),
      enabled: this.isGatewayEnabled(g.slug)
    })).filter(g => g.enabled);
  }

  /**
   * Check if gateway is enabled
   */
  isGatewayEnabled(gateway) {
    switch (gateway) {
      case 'stripe':
        return stripeIntegration.isEnabled();
      case 'razorpay':
        return razorpayIntegration.isEnabled();
      default:
        return false;
    }
  }

  /**
   * Initialize payment
   */
  async initializePayment(orderId, gateway, frontendUrl) {
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    if (order.payment_status === 1) {
      throw new Error('Order already paid');
    }

    const amount = parseFloat(order.total);
    const metadata = { order_id: orderId };

    switch (gateway) {
      case 'stripe':
        return this.initializeStripePayment(order, amount, metadata);

      case 'razorpay':
        return this.initializeRazorpayPayment(order, amount, metadata);

      default:
        throw new Error(`Gateway ${gateway} not supported`);
    }
  }

  /**
   * Initialize Stripe payment
   */
  async initializeStripePayment(order, amount, metadata) {
    const result = await stripeIntegration.createPaymentIntent(amount, 'INR', metadata);

    if (!result.success) {
      throw new Error(result.error);
    }

    return {
      gateway: 'stripe',
      clientSecret: result.clientSecret,
      paymentIntentId: result.paymentIntentId,
      publicKey: stripeIntegration.getPublicKey()
    };
  }

  /**
   * Initialize Razorpay payment
   */
  async initializeRazorpayPayment(order, amount, metadata) {
    const result = await razorpayIntegration.createOrder(
      amount,
      'INR',
      `order_${order.id}`,
      metadata
    );

    if (!result.success) {
      throw new Error(result.error);
    }

    return {
      gateway: 'razorpay',
      orderId: result.orderId,
      amount: result.amount,
      currency: result.currency,
      keyId: result.keyId
    };
  }

  /**
   * Verify and complete payment
   */
  async verifyPayment(orderId, gateway, paymentData) {
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    let verified = false;
    let transactionId = null;

    switch (gateway) {
      case 'stripe':
        const stripeResult = await stripeIntegration.confirmPaymentIntent(paymentData.paymentIntentId);
        verified = stripeResult.paid;
        transactionId = paymentData.paymentIntentId;
        break;

      case 'razorpay':
        verified = razorpayIntegration.verifyPaymentSignature(
          paymentData.razorpay_order_id,
          paymentData.razorpay_payment_id,
          paymentData.razorpay_signature
        );
        transactionId = paymentData.razorpay_payment_id;
        break;

      default:
        throw new Error(`Gateway ${gateway} not supported`);
    }

    if (verified) {
      await order.update({
        payment_status: 1,
        payment_gateway: gateway,
        transaction_id: transactionId
      });

      return {
        success: true,
        message: 'Payment verified successfully',
        order
      };
    }

    return {
      success: false,
      message: 'Payment verification failed'
    };
  }

  /**
   * Process refund
   */
  async processRefund(orderId, amount = null) {
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    if (order.payment_status !== 1) {
      throw new Error('Order not paid');
    }

    const gateway = order.payment_gateway;
    const transactionId = order.transaction_id;
    const refundAmount = amount || parseFloat(order.total);

    let result;

    switch (gateway) {
      case 'stripe':
        result = await stripeIntegration.refund(transactionId, refundAmount);
        break;

      case 'razorpay':
        result = await razorpayIntegration.refund(transactionId, refundAmount);
        break;

      default:
        throw new Error(`Gateway ${gateway} not supported for refund`);
    }

    if (result.success) {
      await order.update({
        is_refunded: true
      });
    }

    return result;
  }
}

module.exports = new PaymentService();
