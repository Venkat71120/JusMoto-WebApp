const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const City = sequelize.define('City', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },
  timezone: {
    type: DataTypes.STRING(191),
    allowNull: true
  }
}, {
  tableName: 'cities',
  timestamps: true,
  underscored: true
});

module.exports = City;
