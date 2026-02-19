const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  admin_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  reviewer_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  rating: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true
  },
  service_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  message: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(191),
    defaultValue: 'pending'
  },
  order_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  }
}, {
  tableName: 'reviews',
  timestamps: true,
  underscored: true
});

module.exports = Review;
