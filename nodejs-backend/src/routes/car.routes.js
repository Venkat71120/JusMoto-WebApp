const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { Car, Brand, Variant } = require('../models');
const { Op } = require('sequelize');
const { createSlug } = require('../utils/helpers');

// Get all cars
router.get('/', async (req, res) => {
  try {
    const { brand_id, status, search } = req.query;

    const where = {};
    if (brand_id) where.brand_id = brand_id;
    if (status !== undefined) where.status = parseInt(status);
    if (search) {
      where.name = { [Op.like]: `%${search}%` };
    }

    const cars = await Car.findAll({
      where,
      include: [
        { model: Brand, as: 'brand' },
        { model: Variant, as: 'variants', where: { status: 1 }, required: false }
      ],
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id, {
      include: [
        { model: Brand, as: 'brand' },
        { model: Variant, as: 'variants', where: { status: 1 }, required: false }
      ]
    });

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    res.json({ success: true, data: car });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get variants by car
router.get('/:id/variants', async (req, res) => {
  try {
    const variants = await Variant.findAll({
      where: { car_id: req.params.id, status: 1 },
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: variants });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const { brand_id, name, year, image, status } = req.body;

    const car = await Car.create({
      brand_id,
      name,
      slug: createSlug(name),
      year,
      image,
      status: status ?? 1
    });

    res.status(201).json({ success: true, data: car, message: 'Car created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    const { brand_id, name, year, image, status } = req.body;

    await car.update({
      brand_id: brand_id ?? car.brand_id,
      name: name ?? car.name,
      slug: name ? createSlug(name) : car.slug,
      year: year ?? car.year,
      image: image ?? car.image,
      status: status ?? car.status
    });

    res.json({ success: true, data: car, message: 'Car updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    await car.destroy();

    res.json({ success: true, message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Variant routes
router.post('/:carId/variants', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, engine_type_id, fuel_type_id, status } = req.body;

    const variant = await Variant.create({
      car_id: req.params.carId,
      name,
      engine_type_id,
      fuel_type_id,
      status: status ?? 1
    });

    res.status(201).json({ success: true, data: variant, message: 'Variant created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/variants/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const variant = await Variant.findByPk(req.params.id);

    if (!variant) {
      return res.status(404).json({ success: false, error: 'Variant not found' });
    }

    await variant.update(req.body);

    res.json({ success: true, data: variant, message: 'Variant updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/variants/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const variant = await Variant.findByPk(req.params.id);

    if (!variant) {
      return res.status(404).json({ success: false, error: 'Variant not found' });
    }

    await variant.destroy();

    res.json({ success: true, message: 'Variant deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
