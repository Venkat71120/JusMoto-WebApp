const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  state_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'states',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'cities',
  timestamps: true,
  underscored: true
});

module.exports = City;
