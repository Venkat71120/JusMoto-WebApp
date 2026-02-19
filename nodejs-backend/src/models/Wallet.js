const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Wallet = sequelize.define('Wallet', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  available_balance: {
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0.00
  }
}, {
  tableName: 'wallets',
  timestamps: true,
  underscored: true
});

module.exports = Wallet;
