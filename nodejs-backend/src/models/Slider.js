const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Slider = sequelize.define('Slider', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  subtitle: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  button_text: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  button_link: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  mobile_image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'sliders',
  timestamps: true,
  underscored: true
});

module.exports = Slider;
