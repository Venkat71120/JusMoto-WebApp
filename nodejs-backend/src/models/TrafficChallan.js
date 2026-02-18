const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const TrafficChallan = sequelize.define('TrafficChallan', {
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
  vehicle_number: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  challan_number: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true
  },
  offence_type: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  offence_description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fine_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  paid_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  offence_location: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  offence_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'paid', 'disputed'),
    defaultValue: 'pending'
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'paid', 'failed'),
    defaultValue: 'pending'
  },
  payment_method: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  payment_reference: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  payment_gateway_response: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('payment_gateway_response');
      return value ? JSON.parse(value) : null;
    },
    set(value) {
      this.setDataValue('payment_gateway_response', JSON.stringify(value));
    }
  },
  paid_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  issuing_authority: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  api_reference_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'traffic_challans',
  timestamps: true,
  paranoid: true,
  underscored: true
});

// Instance methods
TrafficChallan.prototype.isOverdue = function() {
  return this.due_date && new Date(this.due_date) < new Date() && this.status === 'pending';
};

TrafficChallan.prototype.getRemainingAmount = function() {
  return parseFloat(this.fine_amount) - parseFloat(this.paid_amount);
};

TrafficChallan.prototype.markAsPaid = async function(paymentMethod, paymentReference, amount = null) {
  return this.update({
    status: 'paid',
    payment_status: 'paid',
    paid_amount: amount || this.fine_amount,
    payment_method: paymentMethod,
    payment_reference: paymentReference,
    paid_at: new Date()
  });
};

module.exports = TrafficChallan;
