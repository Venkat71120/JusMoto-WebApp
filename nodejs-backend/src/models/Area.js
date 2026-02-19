const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Area = sequelize.define('Area', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  city_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  area: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'areas',
  timestamps: true,
  underscored: true
});

module.exports = Area;
