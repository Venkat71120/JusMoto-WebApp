const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Schedule = sequelize.define('Schedule', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  admin_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  day_of_week: {
    type: DataTypes.TINYINT,
    allowNull: false,
    comment: '0: Sunday, 1: Monday, ..., 6: Saturday'
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
    comment: '0: inactive, 1: active'
  }
}, {
  tableName: 'schedules',
  timestamps: true,
  underscored: true
});

module.exports = Schedule;
