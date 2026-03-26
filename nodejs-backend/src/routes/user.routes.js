const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { uploadSingle } = require('../middleware/upload.middleware');
const { uploadToS3, generateS3Key } = require('../config/s3');

// User profile routes
router.get('/profile', authenticate, isClient, async (req, res) => {
  try {
    const { User, Wallet, UserSelectedCar, Brand, Car, Variant } = require('../models');
const { formatError } = require('../utils/formatError');

    const user = await User.findByPk(req.user.id, {
      include: [
        { model: Wallet, as: 'wallet', attributes: ['available_balance'] },
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
    res.status(500).json({ success: false, error: formatError(error) });
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
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Mobile app compatible: POST /profile/update (with image upload)
router.post('/profile/update', authenticate, isClient, ...uploadSingle('file'), async (req, res) => {
  try {
    const { first_name, last_name, phone, date_of_birth, update_type } = req.body;
    const { User } = require('../models');

    if (!first_name || !last_name) {
      return res.status(422).json({
        message: 'Validation failed',
        errors: {
          ...(!first_name ? { first_name: ['The first name field is required.'] } : {}),
          ...(!last_name ? { last_name: ['The last name field is required.'] } : {})
        }
      });
    }

    const updateData = { first_name, last_name };
    if (phone) updateData.phone = phone;
    if (date_of_birth) updateData.date_of_birth = date_of_birth;

    // Handle profile image upload
    if (req.file) {
      const s3Key = generateS3Key('avatars', req.file.originalname);
      const imageUrl = await uploadToS3(req.file.buffer, s3Key, req.file.mimetype);
      updateData.image = imageUrl;
    }

    await User.update(updateData, { where: { id: req.user.id } });

    res.status(201).json({ message: 'Profile Updated Successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Mobile app compatible: POST /profile/firebase-token
router.post('/profile/firebase-token', authenticate, isClient, async (req, res) => {
  try {
    const { firebase_token } = req.body;
    const { User } = require('../models');

    if (!firebase_token) {
      return res.status(422).json({ message: 'The firebase_token field is required.' });
    }

    await User.update({ firebase_token }, { where: { id: req.user.id } });

    res.json({ message: 'Token Updated Successfully' });
  } catch (error) {
    res.status(500).json({ error: formatError(error) });
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
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Change email - send OTP to new email
router.post('/change-email', authenticate, isClient, async (req, res) => {
  try {
    const { email } = req.body;
    const { User } = require('../models');

    if (!email) {
      return res.status(422).json({ success: false, message: 'Email is required' });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(422).json({ success: false, message: 'Invalid email format' });
    }

    // Check if email is already used by another user
    const existing = await User.findOne({ where: { email } });
    if (existing && existing.id !== req.user.id) {
      return res.status(409).json({ success: false, message: 'Email already in use by another account' });
    }

    // Generate OTP
    const crypto = require('crypto');
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP in user record (reuse password_reset fields)
    await User.update(
      { password_reset_token: `email:${email}:${otp}`, password_reset_expires: otpExpires },
      { where: { id: req.user.id } }
    );

    // Send OTP to the NEW email address
    const emailService = require('../services/email.service');
    const user = await User.findByPk(req.user.id);
    await emailService.sendOTP({ ...user.toJSON(), email }, otp);

    res.json({
      success: true,
      message: 'OTP sent to new email address',
      data: {
        email,
        expires_in: 600,
        ...(process.env.NODE_ENV === 'development' ? { otp } : {})
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Verify email OTP and update email
router.post('/verify-email-otp', authenticate, isClient, async (req, res) => {
  try {
    const { email, otp } = req.body;
    const { User } = require('../models');

    if (!email || !otp) {
      return res.status(422).json({ success: false, message: 'Email and OTP are required' });
    }

    const user = await User.findByPk(req.user.id);

    // Check OTP expiry
    if (!user.password_reset_expires || new Date() > new Date(user.password_reset_expires)) {
      return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new one.' });
    }

    // Verify OTP (stored as "email:{address}:{otp}")
    const expected = `email:${email}:${otp}`;
    if (user.password_reset_token !== expected) {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }

    // Update email
    await user.update({
      email,
      email_verified: 1,
      password_reset_token: null,
      password_reset_expires: null
    });

    res.json({
      success: true,
      message: 'Email updated successfully',
      data: { email: user.email }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Change phone number - send OTP
router.post('/change-phone-number', authenticate, isClient, async (req, res) => {
  try {
    const { phone } = req.body;
    const { User } = require('../models');

    if (!phone) {
      return res.status(422).json({ success: false, message: 'Phone number is required' });
    }

    // Check if phone is already used by another user
    const existing = await User.findOne({ where: { phone } });
    if (existing && existing.id !== req.user.id) {
      return res.status(409).json({ success: false, message: 'Phone number already in use by another account' });
    }

    // Generate OTP
    const crypto = require('crypto');
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP in user record (reuse password_reset fields)
    await User.update(
      { password_reset_token: `phone:${phone}:${otp}`, password_reset_expires: otpExpires },
      { where: { id: req.user.id } }
    );

    // Try SMS first, fallback to email
    const smsService = require('../services/sms.service');
    const smsResult = await smsService.sendOTP(phone, otp);

    if (!smsResult.success) {
      // Fallback: send OTP via email
      const user = await User.findByPk(req.user.id);
      if (user.email) {
        const emailService = require('../services/email.service');
        await emailService.sendOTP(user, otp);
      }
    }

    res.json({
      success: true,
      message: 'OTP sent successfully',
      data: {
        phone,
        otp_sent_via: smsResult.success ? 'sms' : 'email',
        expires_in: 600,
        ...(process.env.NODE_ENV === 'development' ? { otp } : {})
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Verify phone OTP and update phone number
router.post('/verify-phone-otp', authenticate, isClient, async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const { User } = require('../models');

    if (!phone || !otp) {
      return res.status(422).json({ success: false, message: 'Phone and OTP are required' });
    }

    const user = await User.findByPk(req.user.id);

    // Check OTP expiry
    if (!user.password_reset_expires || new Date() > new Date(user.password_reset_expires)) {
      return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new one.' });
    }

    // Verify OTP (stored as "phone:{number}:{otp}")
    const expected = `phone:${phone}:${otp}`;
    if (user.password_reset_token !== expected) {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }

    // Update phone number
    await user.update({
      phone,
      password_reset_token: null,
      password_reset_expires: null
    });

    res.json({
      success: true,
      message: 'Phone number updated successfully',
      data: { phone: user.phone }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// User cars routes
router.get('/cars', authenticate, isClient, async (req, res) => {
  try {
    const { UserSelectedCar, Brand, Car, Variant, EngineType, FuelType } = require('../models');

    const cars = await UserSelectedCar.findAll({
      where: { user_id: req.user.id },
      include: [
        { model: Brand, as: 'brand' },
        { model: Car, as: 'car' },
        { model: Variant, as: 'variant', include: [
          { model: EngineType, as: 'engineType', attributes: ['id', 'name'] },
          { model: FuelType, as: 'fuelType', attributes: ['id', 'name'] }
        ]}
      ]
    });

    res.json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

router.post('/cars', authenticate, isClient, async (req, res) => {
  try {
    const { brand_id, car_id, brand_name, car_name, variant_id, variant_name, registration_number, is_default, image } = req.body;
    const { UserSelectedCar, Variant, Brand, Car } = require('../models');

    // Resolve brand: use brand_id if provided, otherwise findOrCreate from brand_name
    let resolvedBrandId = brand_id || null;
    if (!resolvedBrandId && brand_name) {
      const [brand] = await Brand.findOrCreate({
        where: { name: brand_name },
        defaults: { name: brand_name, image: 0 }
      });
      resolvedBrandId = brand.id;
    }

    // Resolve car: use car_id if provided, otherwise findOrCreate from car_name
    let resolvedCarId = car_id || null;
    if (!resolvedCarId && car_name && resolvedBrandId) {
      const [carRecord] = await Car.findOrCreate({
        where: { brand_id: resolvedBrandId, name: car_name },
        defaults: { brand_id: resolvedBrandId, name: car_name, status: 1 }
      });
      resolvedCarId = carRecord.id;
      // Update car image if provided
      if (image) {
        await carRecord.update({ image });
      }
    } else if (image && resolvedCarId) {
      // Update existing car's image if provided
      const carRecord = await Car.findByPk(resolvedCarId);
      if (carRecord) await carRecord.update({ image });
    }

    // If setting as default, unset other defaults
    if (is_default) {
      await UserSelectedCar.update(
        { is_default: 0 },
        { where: { user_id: req.user.id } }
      );
    }

    // Auto-create variant if variant_name is provided and no variant_id
    let resolvedVariantId = variant_id || null;
    if (variant_name && !variant_id && resolvedCarId) {
      const [variant] = await Variant.findOrCreate({
        where: { car_id: resolvedCarId, name: variant_name },
        defaults: { car_id: resolvedCarId, name: variant_name, status: 1 }
      });
      resolvedVariantId = variant.id;
    }

    const car = await UserSelectedCar.create({
      user_id: req.user.id,
      brand_id: resolvedBrandId,
      car_id: resolvedCarId,
      variant_id: resolvedVariantId,
      registration_number,
      is_default: is_default ? 1 : 0
    });

    res.status(201).json({ success: true, data: car, message: 'Car added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

router.put('/cars/:id', authenticate, isClient, async (req, res) => {
  try {
    const { brand_id, car_id, brand_name, car_name, variant_id, variant_name, registration_number, is_default, image } = req.body;
    const { UserSelectedCar, Variant, Brand, Car } = require('../models');

    const car = await UserSelectedCar.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    // Resolve brand
    let resolvedBrandId = brand_id || null;
    if (!resolvedBrandId && brand_name) {
      const [brand] = await Brand.findOrCreate({
        where: { name: brand_name },
        defaults: { name: brand_name, image: 0 }
      });
      resolvedBrandId = brand.id;
    }

    // Resolve car
    let resolvedCarId = car_id || null;
    if (!resolvedCarId && car_name && resolvedBrandId) {
      const [carRecord] = await Car.findOrCreate({
        where: { brand_id: resolvedBrandId, name: car_name },
        defaults: { brand_id: resolvedBrandId, name: car_name, status: 1 }
      });
      resolvedCarId = carRecord.id;
      if (image) await carRecord.update({ image });
    } else if (image && resolvedCarId) {
      const carRecord = await Car.findByPk(resolvedCarId);
      if (carRecord) await carRecord.update({ image });
    }

    if (is_default) {
      await UserSelectedCar.update(
        { is_default: 0 },
        { where: { user_id: req.user.id } }
      );
    }

    // Auto-create variant if variant_name is provided and no variant_id
    let resolvedVariantId = variant_id || null;
    if (variant_name && !variant_id && resolvedCarId) {
      const [variant] = await Variant.findOrCreate({
        where: { car_id: resolvedCarId, name: variant_name },
        defaults: { car_id: resolvedCarId, name: variant_name, status: 1 }
      });
      resolvedVariantId = variant.id;
    }

    await car.update({
      brand_id: resolvedBrandId,
      car_id: resolvedCarId,
      variant_id: resolvedVariantId,
      registration_number,
      is_default: is_default ? 1 : 0
    });

    res.json({ success: true, data: car, message: 'Car updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
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
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Helper: look up state_id and city_id from text names
async function resolveLocationIds(stateName, cityName) {
  const { State, City } = require('../models');
  let state_id = null, city_id = null;
  if (stateName) {
    const stateRow = await State.findOne({ where: { state: stateName } });
    if (stateRow) {
      state_id = stateRow.id;
      if (cityName) {
        const cityRow = await City.findOne({ where: { city: cityName, state_id: stateRow.id } });
        if (cityRow) city_id = cityRow.id;
      }
    }
  }
  return { state_id, city_id };
}

// Map frontend fields to DB columns
function mapAddressFields(body) {
  return {
    title: body.name || body.title || null,
    address: body.address || [body.address_line1, body.address_line2].filter(Boolean).join(', ') || null,
    post_code: body.zip_code || body.pincode || body.post_code || null,
    phone: body.phone || null,
    latitude: body.latitude || null,
    longitude: body.longitude || null,
    type: body.type === 'work' || body.type === 1 ? 1 : 0,
    is_default: body.is_default ? 1 : 0
  };
}

// Format DB row for frontend response (add friendly fields)
function formatAddress(loc) {
  const plain = loc.toJSON ? loc.toJSON() : loc;
  plain.name = plain.title;
  plain.zip_code = plain.post_code;
  return plain;
}

// User addresses
router.get('/addresses', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation, State, City } = require('../models');

    const addresses = await UserLocation.findAll({
      where: { user_id: req.user.id },
      include: [
        { model: State, as: 'stateInfo', attributes: ['id', 'state'] },
        { model: City, as: 'cityInfo', attributes: ['id', 'city'] }
      ],
      order: [['is_default', 'DESC'], ['created_at', 'DESC']]
    });

    const data = addresses.map(loc => {
      const plain = formatAddress(loc);
      plain.state = plain.stateInfo?.state || '';
      plain.city = plain.cityInfo?.city || '';
      delete plain.stateInfo;
      delete plain.cityInfo;
      return plain;
    });

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

router.post('/addresses', authenticate, isClient, async (req, res) => {
  try {
    const { UserLocation } = require('../models');
    const mapped = mapAddressFields(req.body);
    const { state_id, city_id } = await resolveLocationIds(req.body.state, req.body.city);

    if (mapped.is_default) {
      await UserLocation.update({ is_default: 0 }, { where: { user_id: req.user.id } });
    }

    const location = await UserLocation.create({
      user_id: req.user.id,
      state_id,
      city_id,
      ...mapped
    });

    res.status(201).json({ success: true, data: formatAddress(location), message: 'Address added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
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

    const mapped = mapAddressFields(req.body);
    const { state_id, city_id } = await resolveLocationIds(req.body.state, req.body.city);

    if (mapped.is_default) {
      await UserLocation.update({ is_default: 0 }, { where: { user_id: req.user.id } });
    }

    await location.update({ state_id, city_id, ...mapped });

    res.json({ success: true, data: formatAddress(location), message: 'Address updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
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
    res.status(500).json({ success: false, error: formatError(error) });
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
        { model: OrderLocation, as: 'location' },
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
    res.status(500).json({ success: false, error: formatError(error) });
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
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
