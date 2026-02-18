const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const UserSelectedCar = sequelize.define('UserSelectedCar', {
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
  brand_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'brands',
      key: 'id'
    }
  },
  car_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'cars',
      key: 'id'
    }
  },
  variant_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'varients',
      key: 'id'
    }
  },
  registration_number: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  is_default: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'user_selected_cars',
  timestamps: true,
  underscored: true
});

module.exports = UserSelectedCar;
