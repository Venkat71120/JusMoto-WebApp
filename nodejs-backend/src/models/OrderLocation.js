const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const OrderLocation = sequelize.define('OrderLocation', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  order_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  state_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  area_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  post_code: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  emergency_phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'order_locations',
  timestamps: true,
  underscored: true
});

module.exports = OrderLocation;
