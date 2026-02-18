const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const PaymentGateway = sequelize.define('PaymentGateway', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  credentials: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('credentials');
      return value ? JSON.parse(value) : null;
    },
    set(value) {
      this.setDataValue('credentials', JSON.stringify(value));
    }
  },
  test_mode: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'payment_gateways',
  timestamps: true,
  underscored: true
});

module.exports = PaymentGateway;
