const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { Car, Brand, Variant } = require('../models');
const { Op } = require('sequelize');
const { createSlug } = require('../utils/helpers');

// ── NHTSA API: Fetch & import car brands ──
router.post('/fetch-brands', authenticate, async (req, res) => {
  try {
    const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
    const resp = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
    const json = await resp.json();

    if (!json.Results || json.Results.length === 0) {
      return res.status(400).json({ success: false, error: 'No brands returned from API' });
    }

    let imported = 0;
    for (const make of json.Results) {
      const name = make.Make_Name;
      if (!name) continue;
      const [brand, created] = await Brand.findOrCreate({
        where: { name },
        defaults: { name }
      });
      if (created) imported++;
    }

    res.json({ success: true, message: `Imported ${imported} new brands (${json.Results.length} total from API)` });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ── NHTSA API: Fetch & import car models for a brand ──
router.post('/fetch-models', authenticate, async (req, res) => {
  try {
    const { brand_id } = req.body;
    if (!brand_id) return res.status(400).json({ success: false, error: 'brand_id is required' });

    const brand = await Brand.findByPk(brand_id);
    if (!brand) return res.status(404).json({ success: false, error: 'Brand not found' });

    const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(brand.name)}?format=json`;
    const resp = await fetch(url);
    const json = await resp.json();

    if (!json.Results || json.Results.length === 0) {
      return res.json({ success: true, message: 'No models found for this brand', data: [] });
    }

    let imported = 0;
    for (const model of json.Results) {
      const name = model.Model_Name;
      if (!name) continue;
      const [car, created] = await Car.findOrCreate({
        where: { brand_id, name },
        defaults: { brand_id, name }
      });
      if (created) imported++;
    }

    // Return updated car list
    const cars = await Car.findAll({
      where: { brand_id },
      include: [{ model: Variant, as: 'variants', required: false }],
      order: [['name', 'ASC']]
    });

    res.json({ success: true, message: `Imported ${imported} new models (${json.Results.length} from API)`, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

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
