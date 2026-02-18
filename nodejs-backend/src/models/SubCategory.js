const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const SubCategory = sequelize.define('SubCategory', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'categories',
      key: 'id'
    }
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
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'sub_categories',
  timestamps: true,
  underscored: true
});

module.exports = SubCategory;
