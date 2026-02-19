const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  notifiable_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  notifiable_type: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  data: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('data');
      try { return value ? JSON.parse(value) : null; } catch { return value; }
    }
  },
  read_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'notifications',
  timestamps: true,
  underscored: true
});

module.exports = Notification;
