const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Variant = sequelize.define('Variant', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  car_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'cars',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  engine_type_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  fuel_type_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  }
}, {
  tableName: 'varients', // keeping original table name from Laravel
  timestamps: true,
  underscored: true
});

module.exports = Variant;
