const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Permission = sequelize.define('Permission', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  menu_name: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(125),
    allowNull: false,
    unique: true
  },
  guard_name: {
    type: DataTypes.STRING(125),
    allowNull: false,
    defaultValue: 'admin'
  }
}, {
  tableName: 'permissions',
  timestamps: true,
  underscored: true
});

module.exports = Permission;
