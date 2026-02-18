require('dotenv').config();

module.exports = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,

  // Notification defaults
  notification: {
    defaultIcon: '/assets/icons/notification-icon.png',
    defaultSound: 'default',
    priority: 'high',
    ttl: 3600 // 1 hour
  },

  // Topic names for group notifications
  topics: {
    allUsers: 'all_users',
    adminNotifications: 'admin_notifications',
    franchiseNotifications: 'franchise_notifications',
    orderUpdates: 'order_updates',
    promotions: 'promotions'
  }
};
