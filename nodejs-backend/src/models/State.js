const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const State = sequelize.define('State', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  country_id: {
    type: DataTypes.INTEGER.UNSIGNED,
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
