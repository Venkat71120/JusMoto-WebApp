const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Tax = sequelize.define('Tax', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tax_percentage: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0
  },
  state_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'taxes',
  timestamps: true,
  underscored: true
});

module.exports = Tax;
