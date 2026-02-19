const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const bcrypt = require('bcryptjs');

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
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
  phone: {
    type: DataTypes.STRING(191),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(191),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  email_verified: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING(191),
    defaultValue: 'editor'
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  remember_token: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'admins',
  timestamps: true,
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
  // Laravel uses $2y$ prefix, bcryptjs expects $2a$ or $2b$
  const hash = this.password.replace(/^\$2y\$/, '$2a$');
  return bcrypt.compare(password, hash);
};

Admin.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.password;
  delete values.remember_token;
  return values;
};

module.exports = Admin;
