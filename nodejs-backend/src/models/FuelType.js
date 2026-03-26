const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const FuelType = sequelize.define('FuelType', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(500),
    allowNull: true
  }
}, {
  tableName: 'fuel_types',
  timestamps: true,
  underscored: true
});

module.exports = FuelType;
