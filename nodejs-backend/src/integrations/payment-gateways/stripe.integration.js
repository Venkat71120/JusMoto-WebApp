const Stripe = require('stripe');
const paymentConfig = require('../../config/payment');
const { formatError } = require('../../utils/formatError');

class StripeIntegration {
  constructor() {
    const config = paymentConfig.gateways.stripe;
    if (config.secretKey) {
      this.stripe = new Stripe(config.secretKey);
      this.publicKey = config.publishableKey;
    }
  }

  isEnabled() {
    return !!this.stripe;
  }

  /**
   * Create payment intent
   */
  async createPaymentIntent(amount, currency = 'INR', metadata = {}) {
    if (!this.isEnabled()) {
      throw new Error('Stripe is not configured');
    }

    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to smallest currency unit
        currency: currency.toLowerCase(),
        metadata,
        payment_method_types: ['card']
      });

      return {
        success: true,
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
      };
    } catch (error) {
      console.error('Stripe createPaymentIntent error:', error);
      return {
        success: false,
        error: formatError(error)
      };
    }
  }

  /**
   * Confirm payment intent
   */
  async confirmPaymentIntent(paymentIntentId) {
    if (!this.isEnabled()) {
      throw new Error('Stripe is not configured');
    }

    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentIntentId);

      return {
        success: true,
        status: paymentIntent.status,
        paid: paymentIntent.status === 'succeeded',
        paymentIntent
      };
    } catch (error) {
      console.error('Stripe confirmPaymentIntent error:', error);
      return {
        success: false,
        error: formatError(error)
      };
    }
  }

  /**
   * Create checkout session
   */
  async createCheckoutSession(lineItems, successUrl, cancelUrl, metadata = {}) {
    if (!this.isEnabled()) {
      throw new Error('Stripe is not configured');
    }

    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems.map(item => ({
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.name,
              description: item.description
            },
            unit_amount: Math.round(item.price * 100)
          },
          quantity: item.quantity
        })),
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata
      });

      return {
        success: true,
        sessionId: session.id,
        url: session.url
      };
    } catch (error) {
      console.error('Stripe createCheckoutSession error:', error);
      return {
        success: false,
        error: formatError(error)
      };
    }
  }

  /**
   * Process refund
   */
  async refund(paymentIntentId, amount = null) {
    if (!this.isEnabled()) {
      throw new Error('Stripe is not configured');
    }

    try {
      const refundData = { payment_intent: paymentIntentId };
      if (amount) {
        refundData.amount = Math.round(amount * 100);
      }

      const refund = await this.stripe.refunds.create(refundData);

      return {
        success: true,
        refundId: refund.id,
        status: refund.status
      };
    } catch (error) {
      console.error('Stripe refund error:', error);
      return {
        success: false,
        error: formatError(error)
      };
    }
  }

  /**
   * Get public key for frontend
   */
  getPublicKey() {
    return this.publicKey;
  }
}

module.exports = new StripeIntegration();
