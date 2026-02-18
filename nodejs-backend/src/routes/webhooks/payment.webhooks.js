const router = require('express').Router();
const express = require('express');
const { Order } = require('../../models');

/**
 * @route   POST /webhooks/payment/stripe
 * @desc    Stripe webhook handler
 * @access  Public (Stripe)
 */
router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.error('Stripe webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        const orderId = paymentIntent.metadata.order_id;

        if (orderId) {
          await Order.update(
            { payment_status: 1, transaction_id: paymentIntent.id },
            { where: { id: orderId } }
          );
          console.log(`Payment succeeded for order ${orderId}`);
        }
        break;

      case 'payment_intent.payment_failed':
        const failedIntent = event.data.object;
        const failedOrderId = failedIntent.metadata.order_id;

        if (failedOrderId) {
          console.log(`Payment failed for order ${failedOrderId}`);
        }
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

/**
 * @route   POST /webhooks/payment/razorpay
 * @desc    Razorpay webhook handler
 * @access  Public (Razorpay)
 */
router.post('/razorpay', express.json(), async (req, res) => {
  try {
    const crypto = require('crypto');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest('hex');

    if (digest !== req.headers['x-razorpay-signature']) {
      console.error('Razorpay webhook signature verification failed');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    const event = req.body.event;
    const payload = req.body.payload;

    switch (event) {
      case 'payment.captured':
        const payment = payload.payment.entity;
        const orderId = payment.notes.order_id;

        if (orderId) {
          await Order.update(
            { payment_status: 1, transaction_id: payment.id },
            { where: { id: orderId } }
          );
          console.log(`Razorpay payment captured for order ${orderId}`);
        }
        break;

      case 'payment.failed':
        const failedPayment = payload.payment.entity;
        console.log(`Razorpay payment failed: ${failedPayment.id}`);
        break;

      default:
        console.log(`Unhandled Razorpay event: ${event}`);
    }

    res.json({ status: 'ok' });
  } catch (error) {
    console.error('Razorpay webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

/**
 * @route   POST /webhooks/payment/paypal
 * @desc    PayPal webhook handler
 * @access  Public (PayPal)
 */
router.post('/paypal', express.json(), async (req, res) => {
  try {
    const eventType = req.body.event_type;
    const resource = req.body.resource;

    switch (eventType) {
      case 'PAYMENT.CAPTURE.COMPLETED':
        const orderId = resource.custom_id;

        if (orderId) {
          await Order.update(
            { payment_status: 1, transaction_id: resource.id },
            { where: { id: orderId } }
          );
          console.log(`PayPal payment completed for order ${orderId}`);
        }
        break;

      case 'PAYMENT.CAPTURE.DENIED':
        console.log('PayPal payment denied:', resource.id);
        break;

      default:
        console.log(`Unhandled PayPal event: ${eventType}`);
    }

    res.json({ status: 'ok' });
  } catch (error) {
    console.error('PayPal webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

module.exports = router;
