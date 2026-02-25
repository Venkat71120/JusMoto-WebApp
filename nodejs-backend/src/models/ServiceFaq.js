const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ServiceFaq = sequelize.define('ServiceFaq', {
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
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'service_faqs',
  timestamps: true,
  underscored: true
});

module.exports = ServiceFaq;
