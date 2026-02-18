const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
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
  tableName: 'roles',
  timestamps: true,
  underscored: true
});

module.exports = Role;
