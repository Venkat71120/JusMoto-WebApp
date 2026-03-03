const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// State-level tax (table: state_taxes)
const StateTax = sequelize.define('StateTax', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  state_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  tax_rate: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'state_taxes',
  timestamps: true,
  underscored: true
});

// City-level tax (table: city_taxes)
const CityTax = sequelize.define('CityTax', {
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
  tax_rate: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'city_taxes',
  timestamps: true,
  underscored: true
});

module.exports = { StateTax, CityTax };
