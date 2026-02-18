const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ServiceExclude = sequelize.define('ServiceExclude', {
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
  exclude_text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'service_excludes',
  timestamps: true,
  underscored: true
});

module.exports = ServiceExclude;
