const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Car = sequelize.define('Car', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  brand_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'brands',
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
  year: {
    type: DataTypes.STRING(10),
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
  tableName: 'cars',
  timestamps: true,
  underscored: true
});

module.exports = Car;
