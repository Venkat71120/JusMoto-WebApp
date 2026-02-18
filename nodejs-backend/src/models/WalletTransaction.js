const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const WalletTransaction = sequelize.define('WalletTransaction', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  wallet_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'wallets',
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
  type: {
    type: DataTypes.ENUM('credit', 'debit'),
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  balance_after: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  reference_type: {
    type: DataTypes.STRING(50),
    allowNull: true,
    comment: 'order, refund, topup, etc.'
  },
  reference_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  payment_gateway: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  transaction_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'completed'
  }
}, {
  tableName: 'wallet_transactions',
  timestamps: true,
  underscored: true
});

module.exports = WalletTransaction;
