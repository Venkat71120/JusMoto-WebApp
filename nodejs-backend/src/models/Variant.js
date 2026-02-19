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
  engine_type_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  fual_type_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  }
}, {
  tableName: 'varients',
  timestamps: true,
  underscored: true
});

module.exports = Variant;
