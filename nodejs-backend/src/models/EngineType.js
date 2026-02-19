const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const EngineType = sequelize.define('EngineType', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  }
}, {
  tableName: 'engine_types',
  timestamps: true,
  underscored: true
});

module.exports = EngineType;
