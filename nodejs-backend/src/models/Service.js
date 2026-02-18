const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  admin_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'admins',
      key: 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  sub_category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'sub_categories',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: true,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  gallery_images: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('gallery_images');
      return value ? JSON.parse(value) : [];
    },
    set(value) {
      this.setDataValue('gallery_images', JSON.stringify(value));
    }
  },
  video_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  discount_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  unit: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  is_featured: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },
  is_published: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  published_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  max_qty: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  type: {
    type: DataTypes.TINYINT,
    defaultValue: 0, // 0 = service, 1 = product
    comment: '0=service, 1=product'
  },
  duration: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  disable_staff: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  sold_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  state_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  city_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  area_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  }
}, {
  tableName: 'services',
  timestamps: true,
  underscored: true
});

// Instance method to get final price with offer/discount
Service.prototype.getFinalPrice = function(variantPrice = null) {
  const basePrice = variantPrice || parseFloat(this.price);

  if (this.discount_price && parseFloat(this.discount_price) > 0) {
    return parseFloat(this.discount_price);
  }

  return basePrice;
};

module.exports = Service;
