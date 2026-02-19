const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ServiceInclude = sequelize.define('ServiceInclude', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  service_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'services',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'service_includes',
  timestamps: true,
  underscored: true
});

module.exports = ServiceInclude;
