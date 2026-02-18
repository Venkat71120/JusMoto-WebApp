require('dotenv').config();

module.exports = {
  defaultGateway: 'stripe',
  currency: 'INR',

  gateways: {
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
      enabled: !!process.env.STRIPE_SECRET_KEY
    },

    razorpay: {
      keyId: process.env.RAZORPAY_KEY_ID,
      keySecret: process.env.RAZORPAY_KEY_SECRET,
      webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET,
      enabled: !!process.env.RAZORPAY_KEY_ID
    },

    paypal: {
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      mode: process.env.PAYPAL_MODE || 'sandbox',
      enabled: !!process.env.PAYPAL_CLIENT_ID
    },

    paytm: {
      merchantId: process.env.PAYTM_MERCHANT_ID,
      merchantKey: process.env.PAYTM_MERCHANT_KEY,
      website: process.env.PAYTM_WEBSITE,
      industryType: process.env.PAYTM_INDUSTRY_TYPE,
      channelId: process.env.PAYTM_CHANNEL_ID,
      enabled: !!process.env.PAYTM_MERCHANT_ID
    },

    cashfree: {
      appId: process.env.CASHFREE_APP_ID,
      secretKey: process.env.CASHFREE_SECRET_KEY,
      env: process.env.CASHFREE_ENV || 'TEST',
      enabled: !!process.env.CASHFREE_APP_ID
    },

    midtrans: {
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
      isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
      enabled: !!process.env.MIDTRANS_SERVER_KEY
    },

    mollie: {
      apiKey: process.env.MOLLIE_API_KEY,
      enabled: !!process.env.MOLLIE_API_KEY
    },

    payfast: {
      merchantId: process.env.PAYFAST_MERCHANT_ID,
      merchantKey: process.env.PAYFAST_MERCHANT_KEY,
      passphrase: process.env.PAYFAST_PASSPHRASE,
      mode: process.env.PAYFAST_MODE || 'sandbox',
      enabled: !!process.env.PAYFAST_MERCHANT_ID
    },

    instamojo: {
      apiKey: process.env.INSTAMOJO_API_KEY,
      authToken: process.env.INSTAMOJO_AUTH_TOKEN,
      mode: process.env.INSTAMOJO_MODE || 'sandbox',
      enabled: !!process.env.INSTAMOJO_API_KEY
    },

    mercadopago: {
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
      enabled: !!process.env.MERCADOPAGO_ACCESS_TOKEN
    },

    flutterwave: {
      publicKey: process.env.FLUTTERWAVE_PUBLIC_KEY,
      secretKey: process.env.FLUTTERWAVE_SECRET_KEY,
      encryptionKey: process.env.FLUTTERWAVE_ENCRYPTION_KEY,
      enabled: !!process.env.FLUTTERWAVE_SECRET_KEY
    },

    paystack: {
      secretKey: process.env.PAYSTACK_SECRET_KEY,
      publicKey: process.env.PAYSTACK_PUBLIC_KEY,
      enabled: !!process.env.PAYSTACK_SECRET_KEY
    }
  },

  instantpay: {
    baseUrl: process.env.INSTANTPAY_BASE_URL || 'https://api.instantpay.in',
    clientId: process.env.INSTANTPAY_CLIENT_ID,
    clientSecret: process.env.INSTANTPAY_CLIENT_SECRET,
    encryptionKey: process.env.INSTANTPAY_ENCRYPTION_KEY,
    authCode: process.env.INSTANTPAY_AUTH_CODE,
    endpointIp: process.env.INSTANTPAY_ENDPOINT_IP,
    useMock: process.env.INSTANTPAY_USE_MOCK === 'true'
  }
};
