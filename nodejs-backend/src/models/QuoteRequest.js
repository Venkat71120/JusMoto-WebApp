const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const QuoteRequest = sequelize.define('QuoteRequest', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('service', 'product'),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'reviewed', 'quoted', 'closed'),
    defaultValue: 'pending'
  },
  admin_note: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  quoted_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  }
}, {
  tableName: 'quote_requests',
  timestamps: true,
  underscored: true
});

module.exports = QuoteRequest;
