const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ChatMessage = sequelize.define('ChatMessage', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  ticket_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  notify: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  attachment: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(191),
    allowNull: true
  }
}, {
  tableName: 'chat_messages',
  timestamps: true,
  underscored: true
});

module.exports = ChatMessage;
