const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const DeliveryCharge = sequelize.define('DeliveryCharge', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  state_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  area_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  charge: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0
  },
  min_order_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    comment: 'Minimum order amount for free delivery'
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'delivery_charges',
  timestamps: true,
  underscored: true
});

module.exports = DeliveryCharge;
