const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  terms_condition: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  email_verify_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  email_verified: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  check_online_status: {
    type: DataTypes.DATE,
    allowNull: true
  },
  verified_status: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  is_suspend: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },
  firebase_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  otp_verified: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  last_seen: {
    type: DataTypes.DATE,
    allowNull: true
  },
  selected_lang: {
    type: DataTypes.STRING(10),
    defaultValue: 'en'
  },
  password_reset_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  password_reset_expires: {
    type: DataTypes.DATE,
    allowNull: true
  },
  remember_token: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  underscored: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  }
});

// Instance methods
User.prototype.validPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

User.prototype.getFullName = function() {
  return `${this.first_name || ''} ${this.last_name || ''}`.trim();
};

User.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.password;
  delete values.remember_token;
  delete values.email_verify_token;
  values.full_name = this.getFullName();
  return values;
};

module.exports = User;
