const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const UserLocation = sequelize.define('UserLocation', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
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
  title: {
    type: DataTypes.STRING(191),
    allowNull: true,
    comment: 'Address label: Home, Office, etc.'
  },
  post_code: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  emergency_phone: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '0=Home, 1=Office'
  },
  is_default: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'user_locations',
  timestamps: true,
  underscored: true
});

module.exports = UserLocation;
