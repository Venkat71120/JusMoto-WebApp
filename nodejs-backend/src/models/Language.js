const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Language = sequelize.define('Language', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  },
  direction: {
    type: DataTypes.ENUM('ltr', 'rtl'),
    defaultValue: 'ltr'
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'languages',
  timestamps: true,
  underscored: true
});

module.exports = Language;
