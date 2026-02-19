const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');

// User profile routes
router.get('/profile', authenticate, isClient, async (req, res) => {
  try {
    const { User, Wallet, UserSelectedCar, Brand, Car, Variant } = require('../models');

    const user = await User.findByPk(req.user.id, {
      include: [
        { model: Wallet, as: 'wallet', attributes: ['balance'] },
        {
          model: UserSelectedCar,
          as: 'selectedCars',
          include: [
            { model: Brand, as: 'brand' },
            { model: Car, as: 'car' },
            { model: Variant, as: 'variant' }
          ]
        }
      ]
    });

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/profile', authenticate, isClient, async (req, res) => {
  try {
    const { first_name, last_name, phone, date_of_birth } = req.body;
    const { User } = require('../models');

    await User.update(
      { first_name, last_name, phone, date_of_birth },
      { where: { id: req.user.id } }
    );

    const user = await User.findByPk(req.user.id);
    res.json({ success: true, data: user, message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/change-password', authenticate, isClient, async (req, res) => {
  try {
    const { current_password, new_password } = req.body;
    const { User } = require('../models');

    const user = await User.findByPk(req.user.id);

    const isValid = await user.validPassword(current_password);
    if (!isValid) {
      return res.status(400).json({ success: false, error: 'Current password is incorrect' });
    }

    user.password = new_password;
    await user.save();

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// User cars routes
router.get('/cars', authenticate, isClient, async (req, res) => {
  try {
    const { UserSelectedCar, Brand, Car, Variant } = require('../models');

    const cars = await UserSelectedCar.findAll({
      where: { user_id: req.user.id },
      include: [
        { model: Brand, as: 'brand' },
        { model: Car, as: 'car' },
        { model: Variant, as: 'variant' }
      ]
    });

    res.json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/cars', authenticate, isClient, async (req, res) => {
  try {
    const { brand_id, car_id, variant_id, variant_name, registration_number, is_default } = req.body;
    const { UserSelectedCar, Variant } = require('../models');

    // If setting as default, unset other defaults
    if (is_default) {
      await UserSelectedCar.update(
        { is_default: 0 },
        { where: { user_id: req.user.id } }
      );
    }

    // Auto-create variant if variant_name is provided and no variant_id
    let resolvedVariantId = variant_id || null;
    if (variant_name && !variant_id && car_id) {
      const [variant] = await Variant.findOrCreate({
        where: { car_id, name: variant_name },
        defaults: { car_id, name: variant_name, status: 1 }
      });
      resolvedVariantId = variant.id;
    }

    const car = await UserSelectedCar.create({
      user_id: req.user.id,
      brand_id,
      car_id,
      variant_id: resolvedVariantId,
      registration_number,
      is_default: is_default ? 1 : 0
    });

    res.status(201).json({ success: true, data: car, message: 'Car added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/cars/:id', authenticate, isClient, async (req, res) => {
  try {
    const { brand_id, car_id, variant_id, variant_name, registration_number, is_default } = req.body;
    const { UserSelectedCar, Variant } = require('../models');

    const car = await UserSelectedCar.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    if (is_default) {
      await UserSelectedCar.update(
        { is_default: 0 },
        { where: { user_id: req.user.id } }
      );
    }

    // Auto-create variant if variant_name is provided and no variant_id
    let resolvedVariantId = variant_id || null;
    if (variant_name && !variant_id && car_id) {
      const [variant] = await Variant.findOrCreate({
        where: { car_id, name: variant_name },
        defaults: { car_id, name: variant_name, status: 1 }
      });
      resolvedVariantId = variant.id;
    }

    await car.update({ brand_id, car_id, variant_id: resolvedVariantId, registration_number, is_default: is_default ? 1 : 0 });

    res.json({ success: true, data: car, message: 'Car updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/cars/:id', authenticate, isClient, async (req, res) => {
  try {
    const { UserSelectedCar } = require('../models');

    const deleted = await UserSelectedCar.destroy({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    res.json({ success: true, message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// User addresses
router.get('/addresses', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation } = require('../models');

    const addresses = await UserLocation.findAll({
      where: { user_id: req.user.id }
    });

    res.json({ success: true, data: addresses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/addresses', authenticate, isClient, async (req, res) => {
  try {
    const { name, address, city, state, zip_code, country, latitude, longitude, is_default, phone } = req.body;
    const { UserLocation } = require('../models');

    if (is_default) {
      await UserLocation.update(
        { is_default: 0 },
        { where: { user_id: req.user.id } }
      );
    }

    const location = await UserLocation.create({
      user_id: req.user.id,
      name,
      address,
      city,
      state,
      zip_code,
      country,
      latitude,
      longitude,
      is_default: is_default ? 1 : 0,
      phone
    });

    res.status(201).json({ success: true, data: location, message: 'Address added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/addresses/:id', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation } = require('../models');

    const location = await UserLocation.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!location) {
      return res.status(404).json({ success: false, error: 'Address not found' });
    }

    if (req.body.is_default) {
      await UserLocation.update(
        { is_default: 0 },
        { where: { user_id: req.user.id } }
      );
    }

    await location.update(req.body);

    res.json({ success: true, data: location, message: 'Address updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/addresses/:id', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation } = require('../models');

    const deleted = await UserLocation.destroy({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Address not found' });
    }

    res.json({ success: true, message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Dashboard aggregation
router.get('/dashboard', authenticate, isClient, async (req, res) => {
  try {
    const { Order, UserSelectedCar, Brand, Car, Variant, Wallet, OrderItem, OrderLocation, Service } = require('../models');
    const { Op } = require('sequelize');

    const userId = req.user.id;

    // Order stats
    const [totalOrders, pendingOrders, completedOrders, cancelledOrders, inProgressOrders] = await Promise.all([
      Order.count({ where: { user_id: userId } }),
      Order.count({ where: { user_id: userId, status: 0 } }),
      Order.count({ where: { user_id: userId, status: 3 } }),
      Order.count({ where: { user_id: userId, status: 4 } }),
      Order.count({ where: { user_id: userId, status: 2 } })
    ]);

    // Recent orders (last 5)
    const orders = await Order.findAll({
      where: { user_id: userId },
      include: [
        { model: OrderLocation, as: 'orderLocation' },
        { model: OrderItem, as: 'items', include: [{ model: Service, as: 'service', attributes: ['id', 'title'] }] }
      ],
      order: [['created_at', 'DESC']],
      limit: 5
    });

    // User cars
    const cars = await UserSelectedCar.findAll({
      where: { user_id: userId },
      include: [
        { model: Brand, as: 'brand' },
        { model: Car, as: 'car' },
        { model: Variant, as: 'variant' }
      ]
    });

    // Wallet balance
    const wallet = await Wallet.findOne({ where: { user_id: userId } });

    res.json({
      success: true,
      data: {
        totalOrders,
        pendingOrders,
        completedOrders,
        cancelledOrders,
        inProgressOrders,
        walletBalance: wallet ? parseFloat(wallet.available_balance || 0) : 0,
        totalCars: cars.length,
        cars,
        orders
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Set car as default
router.put('/cars/:id/default', authenticate, isClient, async (req, res) => {
  try {
    const { UserSelectedCar } = require('../models');

    const car = await UserSelectedCar.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    // Unset all defaults
    await UserSelectedCar.update(
      { is_default: 0 },
      { where: { user_id: req.user.id } }
    );

    // Set this one as default
    await car.update({ is_default: 1 });

    res.json({ success: true, message: 'Default car updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
