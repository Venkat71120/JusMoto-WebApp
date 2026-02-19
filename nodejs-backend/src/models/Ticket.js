const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  department_id: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  admin_id: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  subject: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  priority: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(191),
    defaultValue: 'open'
  },
  via: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  operating_system: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  user_agent: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  }
}, {
  tableName: 'tickets',
  timestamps: true,
  underscored: true
});

module.exports = Ticket;
