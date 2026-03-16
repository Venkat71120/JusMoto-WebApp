const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Variant = sequelize.define('Variant', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  car_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  engine_type_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  fuel_type_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'variants',
  timestamps: true,
  underscored: true
});

module.exports = Variant;
