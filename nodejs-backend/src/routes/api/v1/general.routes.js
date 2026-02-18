const router = require('express').Router();
const {
  Slider,
  Offer,
  OfferService,
  Service,
  OutletLocation,
  PaymentGateway,
  Language,
  StaticOption,
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
      order: [['order', 'ASC']]
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

    const outlets = await OutletLocation.findAll({
      where,
      include: [
        { model: State, as: 'state', attributes: ['id', 'name'] },
        { model: City, as: 'city', attributes: ['id', 'name'] },
        { model: Area, as: 'area', attributes: ['id', 'name'] }
      ]
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
    const outlet = await OutletLocation.findByPk(req.params.id, {
      include: [
        { model: State, as: 'state', attributes: ['id', 'name'] },
        { model: City, as: 'city', attributes: ['id', 'name'] },
        { model: Area, as: 'area', attributes: ['id', 'name'] }
      ]
    });

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
 * @desc    Get active payment gateways
 * @access  Public
 */
router.get('/payment-gateways', async (req, res) => {
  try {
    const gateways = await PaymentGateway.findAll({
      where: { status: 1 },
      attributes: ['id', 'name', 'slug', 'image'],
      order: [['order', 'ASC']]
    });

    res.json({
      success: true,
      data: gateways
    });
  } catch (error) {
    console.error('Get payment gateways error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get payment gateways'
    });
  }
});

/**
 * @route   GET /api/v1/general/languages
 * @desc    Get all active languages
 * @access  Public
 */
router.get('/languages', async (req, res) => {
  try {
    const languages = await Language.findAll({
      where: { status: 1 },
      attributes: ['id', 'name', 'code', 'direction', 'is_default']
    });

    res.json({
      success: true,
      data: languages
    });
  } catch (error) {
    console.error('Get languages error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get languages'
    });
  }
});

/**
 * @route   GET /api/v1/general/settings
 * @desc    Get public settings
 * @access  Public
 */
router.get('/settings', async (req, res) => {
  try {
    const options = await StaticOption.findAll({
      where: {
        option_name: [
          'site_name',
          'site_logo',
          'site_favicon',
          'site_tagline',
          'contact_email',
          'contact_phone',
          'contact_address',
          'currency_symbol',
          'currency_code',
          'default_language',
          'social_facebook',
          'social_twitter',
          'social_instagram',
          'social_youtube'
        ]
      }
    });

    const settings = {};
    options.forEach(opt => {
      settings[opt.option_name] = opt.option_value;
    });

    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    console.error('Get settings error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get settings'
    });
  }
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
      attributes: ['id', 'name', 'code'],
      order: [['name', 'ASC']]
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
      attributes: ['id', 'name'],
      order: [['name', 'ASC']]
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
      attributes: ['id', 'name'],
      order: [['name', 'ASC']]
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
