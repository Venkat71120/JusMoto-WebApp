const express = require('express');
const router = express.Router();
const { State, City, Area } = require('../models');

// Get all states
router.get('/states', async (req, res) => {
  try {
    const states = await State.findAll({
      where: { status: 1 },
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: states });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get cities by state
router.get('/states/:stateId/cities', async (req, res) => {
  try {
    const cities = await City.findAll({
      where: { state_id: req.params.stateId, status: 1 },
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: cities });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get areas by city
router.get('/cities/:cityId/areas', async (req, res) => {
  try {
    const areas = await Area.findAll({
      where: { city_id: req.params.cityId, status: 1 },
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: areas });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all cities
router.get('/cities', async (req, res) => {
  try {
    const { state_id } = req.query;
    const where = { status: 1 };
    if (state_id) where.state_id = state_id;

    const cities = await City.findAll({
      where,
      include: [{ model: State, as: 'state' }],
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: cities });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all areas
router.get('/areas', async (req, res) => {
  try {
    const { city_id } = req.query;
    const where = { status: 1 };
    if (city_id) where.city_id = city_id;

    const areas = await Area.findAll({
      where,
      include: [{ model: City, as: 'city', include: [{ model: State, as: 'state' }] }],
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: areas });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
