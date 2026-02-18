const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const UserLocation = sequelize.define('UserLocation', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'Home, Office, etc.'
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  zip_code: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(100),
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
  is_default: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'user_locations',
  timestamps: true,
  underscored: true
});

module.exports = UserLocation;
