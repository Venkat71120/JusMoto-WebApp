const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const RefundedOrder = sequelize.define('RefundedOrder', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  order_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  refund_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  admin_note: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected', 'completed'),
    defaultValue: 'pending'
  },
  refund_method: {
    type: DataTypes.STRING(50),
    allowNull: true,
    comment: 'wallet, original_payment'
  },
  processed_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  processed_by: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  }
}, {
  tableName: 'refunded_orders',
  timestamps: true,
  underscored: true
});

module.exports = RefundedOrder;
