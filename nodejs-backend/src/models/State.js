const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const State = sequelize.define('State', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  state: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  state_code: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  dial_code: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  latitude: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  longitude: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'states',
  timestamps: true,
  underscored: true
});

module.exports = State;
