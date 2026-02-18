const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Area = sequelize.define('Area', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  city_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'cities',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  zip_code: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'areas',
  timestamps: true,
  underscored: true
});

module.exports = Area;
