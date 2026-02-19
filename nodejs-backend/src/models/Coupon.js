const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Coupon = sequelize.define('Coupon', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  discount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  discount_type: {
    type: DataTypes.STRING(50),
    defaultValue: 'percentage'
  },
  discount_on: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  discount_on_details: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  expire_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'coupons',
  timestamps: true,
  underscored: true
});

module.exports = Coupon;
