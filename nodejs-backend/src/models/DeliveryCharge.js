const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// State-level delivery charge (table: state_delivery_charges)
const StateDeliveryCharge = sequelize.define('StateDeliveryCharge', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  state_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  delivery_charge: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'state_delivery_charges',
  timestamps: true,
  underscored: true
});

// City-level delivery charge (table: city_delivery_charges)
const CityDeliveryCharge = sequelize.define('CityDeliveryCharge', {
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
  delivery_charge: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'city_delivery_charges',
  timestamps: true,
  underscored: true
});

module.exports = { StateDeliveryCharge, CityDeliveryCharge };
