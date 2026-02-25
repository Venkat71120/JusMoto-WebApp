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

// Instance methods
Coupon.prototype.isValid = function () {
  if (this.status !== 1) return false;
  if (this.expire_date && new Date(this.expire_date) < new Date()) return false;
  return true;
};

Coupon.prototype.calculateDiscount = function (amount) {
  const amt = parseFloat(amount) || 0;
  const disc = parseFloat(this.discount) || 0;
  if (this.discount_type === 'percentage') {
    return Math.round((amt * disc / 100) * 100) / 100;
  }
  // flat amount
  return Math.min(disc, amt);
};

module.exports = Coupon;
