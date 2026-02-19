const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const OrderItem = sequelize.define('OrderItem', {
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
  service_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'services',
      key: 'id'
    }
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  qty: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'order_items',
  timestamps: true,
  underscored: true
});

module.exports = OrderItem;
