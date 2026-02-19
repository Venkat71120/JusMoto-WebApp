const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const MediaUpload = sequelize.define('MediaUpload', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  path: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  alt: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  size: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  dimensions: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'media_uploads',
  timestamps: true,
  underscored: true
});

module.exports = MediaUpload;
