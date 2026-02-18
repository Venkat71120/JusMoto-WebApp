const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const UserCartItem = sequelize.define('UserCartItem', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  item_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'services',
      key: 'id'
    }
  },
  item_type: {
    type: DataTypes.STRING(50),
    defaultValue: 'service'
  },
  car_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  variant_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  price: {
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
  tableName: 'user_cart_items',
  timestamps: true,
  underscored: true
});

module.exports = UserCartItem;
