const router = require('express').Router();
const {
  Slider,
  Offer,
  OfferService,
  Service,
  AdminOutletLocation,
  State,
  City,
  Area
} = require('../../../models');

/**
 * @route   GET /api/v1/general/sliders
 * @desc    Get all active sliders
 * @access  Public
 */
router.get('/sliders', async (req, res) => {
  try {
    const sliders = await Slider.findAll({
      where: { status: 1 },
      order: [['id', 'ASC']]
    });

    res.json({
      success: true,
      data: sliders
    });
  } catch (error) {
    console.error('Get sliders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get sliders'
    });
  }
});

/**
 * @route   GET /api/v1/general/offers
 * @desc    Get all active offers
 * @access  Public
 */
router.get('/offers', async (req, res) => {
  try {
    const offers = await Offer.findAll({
      where: { status: 1 },
      include: [{
        model: OfferService,
        as: 'offerServices',
        include: [{
          model: Service,
          as: 'service',
          attributes: ['id', 'title', 'slug', 'image', 'price', 'discount_price']
        }]
      }],
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      data: offers
    });
  } catch (error) {
    console.error('Get offers error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get offers'
    });
  }
});

/**
 * @route   GET /api/v1/general/primary-offer
 * @desc    Get primary offer
 * @access  Public
 */
router.get('/primary-offer', async (req, res) => {
  try {
    const offer = await Offer.findOne({
      where: { status: 1, is_primary: true },
      include: [{
        model: OfferService,
        as: 'offerServices',
        include: [{
          model: Service,
          as: 'service',
          attributes: ['id', 'title', 'slug', 'image', 'price', 'discount_price']
        }]
      }]
    });

    res.json({
      success: true,
      data: offer
    });
  } catch (error) {
    console.error('Get primary offer error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get primary offer'
    });
  }
});

/**
 * @route   GET /api/v1/general/outlets
 * @desc    Get all outlet locations
 * @access  Public
 */
router.get('/outlets', async (req, res) => {
  try {
    const { state_id, city_id } = req.query;

    const where = { status: 1 };
    if (state_id) where.state_id = state_id;
    if (city_id) where.city_id = city_id;

    const outlets = await AdminOutletLocation.findAll({
      where
    });

    res.json({
      success: true,
      data: outlets
    });
  } catch (error) {
    console.error('Get outlets error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get outlets'
    });
  }
});

/**
 * @route   GET /api/v1/general/outlets/:id
 * @desc    Get outlet details
 * @access  Public
 */
router.get('/outlets/:id', async (req, res) => {
  try {
    const outlet = await AdminOutletLocation.findByPk(req.params.id);

    if (!outlet) {
      return res.status(404).json({
        success: false,
        message: 'Outlet not found'
      });
    }

    res.json({
      success: true,
      data: outlet
    });
  } catch (error) {
    console.error('Get outlet details error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get outlet details'
    });
  }
});

/**
 * @route   GET /api/v1/general/payment-gateways
 * @desc    Get available payment methods
 * @access  Public
 */
router.get('/payment-gateways', async (req, res) => {
  res.json({
    success: true,
    data: [{ id: 1, name: 'PayZapp', slug: 'payzapp', image: null }]
  });
});

/**
 * @route   GET /api/v1/general/languages
 * @desc    Get available languages
 * @access  Public
 */
router.get('/languages', async (req, res) => {
  res.json({
    success: true,
    data: [{ id: 1, name: 'English', code: 'en', direction: 'ltr', is_default: 1 }]
  });
});

/**
 * @route   GET /api/v1/general/settings
 * @desc    Get public settings
 * @access  Public
 */
router.get('/settings', async (req, res) => {
  res.json({
    success: true,
    data: {
      site_name: 'JusMoto',
      currency_symbol: '₹',
      currency_code: 'INR',
      default_language: 'en',
      contact_email: 'support@jusmoto.com'
    }
  });
});

/**
 * @route   GET /api/v1/general/states
 * @desc    Get all states
 * @access  Public
 */
router.get('/states', async (req, res) => {
  try {
    const states = await State.findAll({
      where: { status: 1 },
      attributes: ['id', 'state'],
      order: [['state', 'ASC']]
    });

    res.json({
      success: true,
      data: states
    });
  } catch (error) {
    console.error('Get states error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get states'
    });
  }
});

/**
 * @route   GET /api/v1/general/cities/:stateId
 * @desc    Get cities by state
 * @access  Public
 */
router.get('/cities/:stateId', async (req, res) => {
  try {
    const cities = await City.findAll({
      where: { state_id: req.params.stateId, status: 1 },
      attributes: ['id', 'city'],
      order: [['city', 'ASC']]
    });

    res.json({
      success: true,
      data: cities
    });
  } catch (error) {
    console.error('Get cities error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get cities'
    });
  }
});

/**
 * @route   GET /api/v1/general/areas/:cityId
 * @desc    Get areas by city
 * @access  Public
 */
router.get('/areas/:cityId', async (req, res) => {
  try {
    const areas = await Area.findAll({
      where: { city_id: req.params.cityId, status: 1 },
      attributes: ['id', 'area'],
      order: [['area', 'ASC']]
    });

    res.json({
      success: true,
      data: areas
    });
  } catch (error) {
    console.error('Get areas error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get areas'
    });
  }
});

module.exports = router;
