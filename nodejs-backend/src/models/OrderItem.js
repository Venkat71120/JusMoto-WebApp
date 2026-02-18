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
  car_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  variant_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  addons: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('addons');
      return value ? JSON.parse(value) : [];
    },
    set(value) {
      this.setDataValue('addons', JSON.stringify(value));
    }
  },
  addon_total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  }
}, {
  tableName: 'order_items',
  timestamps: true,
  underscored: true
});

module.exports = OrderItem;
