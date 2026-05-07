const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Car = sequelize.define('Car', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  brand_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'brands',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  Year: {
    type: DataTypes.STRING(10),
    allowNull: true,
    field: 'Year'
  },
  engine_type_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  fuel_type_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  tableName: 'cars',
  timestamps: true,
  underscored: true
});

module.exports = Car;
