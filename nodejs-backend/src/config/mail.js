require('dotenv').config();

module.exports = {
  host: process.env.MAIL_HOST || 'smtp.mailtrap.io',
  port: parseInt(process.env.MAIL_PORT, 10) || 587,
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USERNAME || process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASSWORD || ''
  },
  from: {
    address: process.env.MAIL_FROM || 'noreply@jusmoto.com',
    name: process.env.MAIL_FROM_NAME || 'JusMoto'
  },
  templates: {
    welcomeEmail: 'welcome',
    passwordReset: 'password-reset',
    emailVerification: 'email-verification',
    orderConfirmation: 'order-confirmation',
    orderStatusChange: 'order-status-change',
    orderCancellation: 'order-cancellation',
    refundConfirmation: 'refund-confirmation',
    supportTicket: 'support-ticket',
    challanPayment: 'challan-payment'
  }
};
