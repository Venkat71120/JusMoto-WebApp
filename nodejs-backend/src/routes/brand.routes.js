const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { Brand, Car, Variant } = require('../models');
const { Op } = require('sequelize');
const { createSlug } = require('../utils/helpers');

// Get all brands
router.get('/', async (req, res) => {
  try {
    const { status, search } = req.query;

    const where = {};
    if (status !== undefined) where.status = parseInt(status);
    if (search) {
      where.name = { [Op.like]: `%${search}%` };
    }

    const brands = await Brand.findAll({
      where,
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: brands });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get brand by ID
router.get('/:id', async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id, {
      include: [
        { model: Car, as: 'cars', where: { status: 1 }, required: false }
      ]
    });

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    res.json({ success: true, data: brand });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get cars by brand
router.get('/:id/cars', async (req, res) => {
  try {
    const cars = await Car.findAll({
      where: { brand_id: req.params.id },
      include: [
        { model: Variant, as: 'variants', required: false }
      ],
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, image, status } = req.body;

    const brand = await Brand.create({
      name,
      slug: createSlug(name),
      image,
      status: status ?? 1
    });

    res.status(201).json({ success: true, data: brand, message: 'Brand created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    const { name, image, status } = req.body;

    await brand.update({
      name: name ?? brand.name,
      slug: name ? createSlug(name) : brand.slug,
      image: image ?? brand.image,
      status: status ?? brand.status
    });

    res.json({ success: true, data: brand, message: 'Brand updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    // Check if brand has cars
    const carCount = await Car.count({ where: { brand_id: brand.id } });
    if (carCount > 0) {
      return res.status(400).json({ success: false, error: 'Cannot delete brand with cars' });
    }

    await brand.destroy();

    res.json({ success: true, message: 'Brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
