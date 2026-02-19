const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ServiceCar = sequelize.define('ServiceCar', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  service_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'services',
      key: 'id'
    }
  },
  varient_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  discount_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  unit: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  sold_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  use_default: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  duration: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'service__cars',
  timestamps: true,
  underscored: true
});

module.exports = ServiceCar;
