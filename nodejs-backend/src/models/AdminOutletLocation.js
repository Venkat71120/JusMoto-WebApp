const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const AdminOutletLocation = sequelize.define('AdminOutletLocation', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  admin_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
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
  post_code: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT(1),
    defaultValue: 0
  }
}, {
  tableName: 'admin_outlet_locations',
  timestamps: true,
  underscored: true
});

module.exports = AdminOutletLocation;
