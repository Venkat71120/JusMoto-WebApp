const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const bcrypt = require('bcryptjs');

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(191),
    allowNull: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING(191),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  role: {
    type: DataTypes.STRING(50),
    defaultValue: 'admin'
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  firebase_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  remember_token: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  // Franchise specific fields
  is_franchise: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  franchise_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  franchise_address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  franchise_logo: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  commission_rate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00
  },
  state_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'admins',
  timestamps: true,
  paranoid: true,
  underscored: true,
  hooks: {
    beforeCreate: async (admin) => {
      if (admin.password) {
        admin.password = await bcrypt.hash(admin.password, 10);
      }
    },
    beforeUpdate: async (admin) => {
      if (admin.changed('password')) {
        admin.password = await bcrypt.hash(admin.password, 10);
      }
    }
  }
});

// Instance methods
Admin.prototype.validPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

Admin.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.password;
  delete values.remember_token;
  return values;
};

module.exports = Admin;
