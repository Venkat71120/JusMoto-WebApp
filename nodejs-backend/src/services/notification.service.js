const { v4: uuidv4 } = require('uuid');
const { Notification } = require('../models');

let _io = null;

class NotificationService {
  /** Set the Socket.IO instance (call once from server startup) */
  setIO(io) {
    _io = io;
  }

  /** Emit a notification via socket to the user/admin room */
  _emitSocket(notification) {
    if (_io && notification) {
      const room = `notifications-${notification.notifiable_type}-${notification.notifiable_id}`;
      _io.to(room).emit('new-notification', notification);
    }
  }

  /**
   * Create a notification for a user
   */
  async notify(userId, type, title, message, data = null) {
    try {
      const notification = await Notification.create({
        id: uuidv4(),
        notifiable_id: userId,
        notifiable_type: 'User',
        type,
        title,
        message,
        data: data ? JSON.stringify(data) : null
      });
      this._emitSocket(notification);
      return notification;
    } catch (err) {
      console.error('Failed to create notification:', err.message);
    }
  }

  /**
   * Create a notification for an admin
   */
  async notifyAdmin(adminId, type, title, message, data = null) {
    try {
      const notification = await Notification.create({
        id: uuidv4(),
        notifiable_id: adminId,
        notifiable_type: 'Admin',
        type,
        title,
        message,
        data: data ? JSON.stringify(data) : null
      });
      this._emitSocket(notification);
      return notification;
    } catch (err) {
      console.error('Failed to create admin notification:', err.message);
    }
  }

  // --- Convenience methods ---

  async orderPlaced(userId, order) {
    return this.notify(userId, 'order', 'Order Placed',
      `Your order #${order.id} has been placed successfully. Total: ₹${order.total}`,
      { url: `/client/orders/${order.id}`, order_id: order.id }
    );
  }

  async orderStatusChanged(userId, order, status) {
    return this.notify(userId, 'order', 'Order Status Updated',
      `Your order #${order.id} status has been updated to: ${status}`,
      { url: `/client/orders/${order.id}`, order_id: order.id }
    );
  }

  async welcomeUser(userId) {
    return this.notify(userId, 'system', 'Welcome to JusMoto!',
      'Your account has been created. Explore our car services and book your first appointment!',
      { url: '/client/dashboard' }
    );
  }

  async paymentReceived(userId, order) {
    return this.notify(userId, 'payment', 'Payment Received',
      `Payment for order #${order.id} has been received. Amount: ₹${order.total}`,
      { url: `/client/orders/${order.id}`, order_id: order.id }
    );
  }
}

module.exports = new NotificationService();
