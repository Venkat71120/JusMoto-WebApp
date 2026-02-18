require('dotenv').config();

module.exports = {
  provider: 'twilio',

  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER,
    whatsappNumber: process.env.TWILIO_WHATSAPP_NUMBER
  },

  templates: {
    otp: 'Your JusMoto verification code is: {{otp}}. Valid for 10 minutes. Do not share with anyone.',
    orderConfirmation: 'Your JusMoto order #{{orderId}} has been confirmed. Track your order in the app.',
    orderStatusChange: 'Your JusMoto order #{{orderId}} status has been updated to: {{status}}',
    passwordReset: 'Your JusMoto password reset code is: {{code}}. Valid for 10 minutes.',
    welcome: 'Welcome to JusMoto! Your account has been created successfully.',
    challanPayment: 'Your traffic challan payment of Rs.{{amount}} for {{vehicleNumber}} has been processed successfully.'
  }
};
