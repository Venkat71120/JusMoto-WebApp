const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(191),
    allowNull: true,
    unique: true
  },
  icon: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  mobile_icon: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'categories',
  timestamps: true,
  underscored: true
});

module.exports = Category;
