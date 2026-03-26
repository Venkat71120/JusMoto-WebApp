const admin = require('firebase-admin');
const firebaseConfig = require('../config/firebase');
const { formatError } = require('../utils/formatError');

class FirebaseService {
  constructor() {
    this.initialized = false;
    this.init();
  }

  init() {
    if (firebaseConfig.projectId && firebaseConfig.privateKey && firebaseConfig.clientEmail) {
      try {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: firebaseConfig.projectId,
            privateKey: firebaseConfig.privateKey,
            clientEmail: firebaseConfig.clientEmail
          })
        });
        this.initialized = true;
        console.log('Firebase initialized successfully');
      } catch (error) {
        console.error('Firebase initialization error:', error);
      }
    } else {
      console.warn('Firebase credentials not configured');
    }
  }

  /**
   * Send push notification to single device
   */
  async sendToDevice(token, title, body, data = {}) {
    if (!this.initialized) {
      return { success: false, error: 'Firebase not initialized' };
    }

    try {
      const message = {
        notification: {
          title,
          body
        },
        data: this.stringifyData(data),
        token,
        android: {
          priority: 'high',
          notification: {
            sound: 'default',
            clickAction: 'FLUTTER_NOTIFICATION_CLICK'
          }
        },
        apns: {
          payload: {
            aps: {
              sound: 'default'
            }
          }
        }
      };

      const response = await admin.messaging().send(message);
      return { success: true, messageId: response };
    } catch (error) {
      console.error('Push notification error:', error);
      return { success: false, error: formatError(error) };
    }
  }

  /**
   * Send push notification to multiple devices
   */
  async sendToDevices(tokens, title, body, data = {}) {
    if (!this.initialized) {
      return { success: false, error: 'Firebase not initialized' };
    }

    if (!tokens || tokens.length === 0) {
      return { success: false, error: 'No tokens provided' };
    }

    try {
      const message = {
        notification: {
          title,
          body
        },
        data: this.stringifyData(data),
        tokens,
        android: {
          priority: 'high',
          notification: {
            sound: 'default',
            clickAction: 'FLUTTER_NOTIFICATION_CLICK'
          }
        },
        apns: {
          payload: {
            aps: {
              sound: 'default'
            }
          }
        }
      };

      const response = await admin.messaging().sendEachForMulticast(message);
      return {
        success: true,
        successCount: response.successCount,
        failureCount: response.failureCount,
        responses: response.responses
      };
    } catch (error) {
      console.error('Multicast push notification error:', error);
      return { success: false, error: formatError(error) };
    }
  }

  /**
   * Send push notification to topic
   */
  async sendToTopic(topic, title, body, data = {}) {
    if (!this.initialized) {
      return { success: false, error: 'Firebase not initialized' };
    }

    try {
      const message = {
        notification: {
          title,
          body
        },
        data: this.stringifyData(data),
        topic,
        android: {
          priority: 'high'
        }
      };

      const response = await admin.messaging().send(message);
      return { success: true, messageId: response };
    } catch (error) {
      console.error('Topic push notification error:', error);
      return { success: false, error: formatError(error) };
    }
  }

  /**
   * Subscribe device to topic
   */
  async subscribeToTopic(token, topic) {
    if (!this.initialized) {
      return { success: false, error: 'Firebase not initialized' };
    }

    try {
      await admin.messaging().subscribeToTopic(token, topic);
      return { success: true };
    } catch (error) {
      console.error('Topic subscription error:', error);
      return { success: false, error: formatError(error) };
    }
  }

  /**
   * Unsubscribe device from topic
   */
  async unsubscribeFromTopic(token, topic) {
    if (!this.initialized) {
      return { success: false, error: 'Firebase not initialized' };
    }

    try {
      await admin.messaging().unsubscribeFromTopic(token, topic);
      return { success: true };
    } catch (error) {
      console.error('Topic unsubscription error:', error);
      return { success: false, error: formatError(error) };
    }
  }

  /**
   * Convert data object values to strings (Firebase requirement)
   */
  stringifyData(data) {
    const stringified = {};
    for (const key in data) {
      stringified[key] = String(data[key]);
    }
    return stringified;
  }
}

module.exports = new FirebaseService();
