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
  favoritable_type: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  favoritable_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
}, {
  tableName: 'favorite_items',
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'favoritable_type', 'favoritable_id']
    }
  ]
});

module.exports = FavoriteItem;
