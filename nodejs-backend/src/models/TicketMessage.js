const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const TicketMessage = sequelize.define('TicketMessage', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  ticket_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'tickets',
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  admin_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'admins',
      key: 'id'
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  attachment: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  is_read: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  }
}, {
  tableName: 'ticket_messages',
  timestamps: true,
  underscored: true
});

module.exports = TicketMessage;
