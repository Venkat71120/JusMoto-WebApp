const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const StaticOption = sequelize.define('StaticOption', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  option_name: {
    type: DataTypes.STRING(191),
    allowNull: false,
    unique: true
  },
  option_value: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'static_options',
  timestamps: true,
  underscored: true
});

module.exports = StaticOption;
