const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Staff = sequelize.define('Staff', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  admin_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  avatar: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
    comment: '0: inactive, 1: active'
  }
}, {
  tableName: 'staff',
  timestamps: true,
  underscored: true,
  paranoid: true
});

module.exports = Staff;
