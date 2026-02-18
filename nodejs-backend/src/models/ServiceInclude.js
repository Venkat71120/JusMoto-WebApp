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
  include_text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'service_includes',
  timestamps: true,
  underscored: true
});

module.exports = ServiceInclude;
