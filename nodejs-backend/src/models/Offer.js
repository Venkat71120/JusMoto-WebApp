const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Offer = sequelize.define('Offer', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  subTitle: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_primary: {
    type: DataTypes.ENUM('0', '1'),
    defaultValue: '0'
  },
  expires_at: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  offerPercentage: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'offers',
  timestamps: true,
  underscored: false
});

module.exports = Offer;
