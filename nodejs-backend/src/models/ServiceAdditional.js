const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ServiceAdditional = sequelize.define('ServiceAdditional', {
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
    allowNull: false
  },
  image: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  type: {
    type: DataTypes.ENUM('info', 'specification'),
    allowNull: false
  }
}, {
  tableName: 'service_additionals',
  timestamps: true,
  underscored: true
});

module.exports = ServiceAdditional;
