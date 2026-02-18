const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const OfferService = sequelize.define('OfferService', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  offer_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'offers',
      key: 'id'
    }
  },
  service_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'services',
      key: 'id'
    }
  }
}, {
  tableName: 'offer_services',
  timestamps: true,
  underscored: true
});

module.exports = OfferService;
