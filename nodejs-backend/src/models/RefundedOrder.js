const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const RefundedOrder = sequelize.define('RefundedOrder', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  order_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  cancel_reason: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  gateway_id: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  gateway_fields: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'refunded_orders',
  timestamps: true,
  underscored: true
});

module.exports = RefundedOrder;
