const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const OutletLocation = sequelize.define('OutletLocation', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  admin_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  location_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  state_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  area_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'admin_outlet_locations',
  timestamps: true,
  underscored: true
});

module.exports = OutletLocation;
