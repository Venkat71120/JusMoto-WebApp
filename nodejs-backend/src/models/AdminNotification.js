const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const AdminNotification = sequelize.define('AdminNotification', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  identity: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  message: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  is_read: {
    type: DataTypes.STRING(191),
    defaultValue: 'unread'
  }
}, {
  tableName: 'admin_notifications',
  timestamps: true,
  underscored: true
});

module.exports = AdminNotification;
