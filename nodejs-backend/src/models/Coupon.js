const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Coupon = sequelize.define('Coupon', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  type: {
    type: DataTypes.ENUM('percentage', 'fixed'),
    defaultValue: 'percentage'
  },
  discount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  max_discount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  min_order_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  max_uses: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  max_uses_per_user: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  used_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  expire_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
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

// Check if coupon is valid
Coupon.prototype.isValid = function() {
  const now = new Date();

  if (this.status !== 1) return false;
  if (this.start_date && new Date(this.start_date) > now) return false;
  if (this.expire_date && new Date(this.expire_date) < now) return false;
  if (this.max_uses && this.used_count >= this.max_uses) return false;

  return true;
};

// Calculate discount
Coupon.prototype.calculateDiscount = function(orderAmount) {
  if (!this.isValid()) return 0;
  if (orderAmount < this.min_order_amount) return 0;

  let discount = 0;
  if (this.type === 'percentage') {
    discount = (orderAmount * parseFloat(this.discount)) / 100;
    if (this.max_discount && discount > parseFloat(this.max_discount)) {
      discount = parseFloat(this.max_discount);
    }
  } else {
    discount = parseFloat(this.discount);
  }

  return Math.min(discount, orderAmount);
};

module.exports = Coupon;
