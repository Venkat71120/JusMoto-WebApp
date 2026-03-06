const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const FavoriteItem = sequelize.define('FavoriteItem', {
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
  item_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(191),
    allowNull: false
  }
}, {
  tableName: 'favorite_items',
  timestamps: true,
  underscored: true
});

module.exports = FavoriteItem;
