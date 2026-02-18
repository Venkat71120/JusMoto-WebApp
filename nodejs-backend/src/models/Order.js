const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Order = sequelize.define('Order', {
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
  admin_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'admins',
      key: 'id'
    }
  },
  franchise_admin_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'admins',
      key: 'id'
    }
  },
  staff_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  outlet_location_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  schedule: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  coupon_code: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  coupon_type: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  coupon_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  delivery_charge: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  delivery_mode: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  sub_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  tax: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  payment_gateway: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  transaction_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  invoice_number: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true
  },
  payment_attachment: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  complete_request: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  payment_status: {
    type: DataTypes.TINYINT,
    defaultValue: 0, // 0=pending, 1=paid
    comment: '0=pending, 1=paid'
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 0, // 0=pending, 1=accepted, 2=in_progress, 3=completed, 4=cancelled
    comment: '0=pending, 1=accepted, 2=in_progress, 3=completed, 4=cancelled, 5=refunded'
  },
  order_note: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  is_refunded: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  }
}, {
  tableName: 'orders',
  timestamps: true,
  underscored: true
});

// Get status label
Order.prototype.getStatusLabel = function() {
  const labels = {
    0: 'Pending',
    1: 'Accepted',
    2: 'In Progress',
    3: 'Completed',
    4: 'Cancelled',
    5: 'Refunded'
  };
  return labels[this.status] || 'Unknown';
};

// Get payment status label
Order.prototype.getPaymentStatusLabel = function() {
  return this.payment_status === 1 ? 'Paid' : 'Pending';
};

module.exports = Order;
