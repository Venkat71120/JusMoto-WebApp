const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Slider = sequelize.define('Slider', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  identity: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'sliders',
  timestamps: true,
  underscored: true
});

module.exports = Slider;
