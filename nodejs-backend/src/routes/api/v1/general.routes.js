const router = require('express').Router();
const {
  Slider,
  Offer,
  OfferService,
  Service,
  AdminOutletLocation,
  State,
  City,
  Area,
  StaticOption
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
 * @desc    Get public settings (site info, contact details, etc.)
 * @access  Public
 */
router.get('/settings', async (req, res) => {
  try {
    // Fetch all static options from DB
    const options = await StaticOption.findAll();
    const optMap = {};
    options.forEach(o => { optMap[o.option_name] = o.option_value; });

    res.json({
      success: true,
      data: {
        site_name: optMap.site_name || 'JusMoto',
        site_tagline: optMap.site_tagline || 'Redefining Car Care',
        site_logo: optMap.site_logo || null,
        currency_symbol: optMap.currency_symbol || '₹',
        currency_code: optMap.currency_code || 'INR',
        default_language: optMap.default_language || 'en',
        contact_email: optMap.contact_email || 'support@jusmoto.com',
        contact_phone: optMap.contact_phone || '',
        contact_whatsapp: optMap.contact_whatsapp || '',
        contact_address: optMap.contact_address || '',
        social_facebook: optMap.social_facebook || '',
        social_instagram: optMap.social_instagram || '',
        social_twitter: optMap.social_twitter || '',
        social_youtube: optMap.social_youtube || '',
        play_store_url: optMap.play_store_url || '',
        app_store_url: optMap.app_store_url || '',
        app_version: optMap.app_version || '1.0.0',
        force_update: optMap.force_update || '0'
      }
    });
  } catch (error) {
    console.error('Get settings error:', error);
    res.status(500).json({ success: false, message: 'Failed to get settings' });
  }
});

/**
 * @route   GET /api/v1/general/contact
 * @desc    Get contact details
 * @access  Public
 */
router.get('/contact', async (req, res) => {
  try {
    const options = await StaticOption.findAll({
      where: {
        option_name: ['contact_email', 'contact_phone', 'contact_whatsapp', 'contact_address',
                       'social_facebook', 'social_instagram', 'social_twitter', 'social_youtube']
      }
    });
    const optMap = {};
    options.forEach(o => { optMap[o.option_name] = o.option_value; });

    // Also get outlet locations as store addresses
    const outlets = await AdminOutletLocation.findAll({ where: { status: 1 } });

    res.json({
      success: true,
      data: {
        email: optMap.contact_email || 'support@jusmoto.com',
        phone: optMap.contact_phone || '',
        whatsapp: optMap.contact_whatsapp || '',
        address: optMap.contact_address || '',
        social: {
          facebook: optMap.social_facebook || '',
          instagram: optMap.social_instagram || '',
          twitter: optMap.social_twitter || '',
          youtube: optMap.social_youtube || ''
        },
        outlets
      }
    });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to get contact details' });
  }
});

/**
 * @route   GET /api/v1/general/pages/:slug
 * @desc    Get page content (terms, privacy, about, etc.)
 * @access  Public
 */
router.get('/pages/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const validSlugs = ['terms-and-conditions', 'privacy-policy', 'about-us', 'refund-policy', 'cancellation-policy'];

    if (!validSlugs.includes(slug)) {
      return res.status(404).json({ success: false, message: 'Page not found' });
    }

    const optionName = `page_${slug.replace(/-/g, '_')}`;
    const titleName = `page_${slug.replace(/-/g, '_')}_title`;

    const [content, title] = await Promise.all([
      StaticOption.findOne({ where: { option_name: optionName } }),
      StaticOption.findOne({ where: { option_name: titleName } })
    ]);

    res.json({
      success: true,
      data: {
        slug,
        title: title?.option_value || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        content: content?.option_value || '',
        updated_at: content?.updated_at || null
      }
    });
  } catch (error) {
    console.error('Get page error:', error);
    res.status(500).json({ success: false, message: 'Failed to get page' });
  }
});

/**
 * @route   GET /api/v1/general/terms-and-conditions
 * @desc    Get terms and conditions (shortcut)
 * @access  Public
 */
router.get('/terms-and-conditions', async (req, res) => {
  try {
    const content = await StaticOption.findOne({ where: { option_name: 'page_terms_and_conditions' } });
    res.json({
      success: true,
      data: {
        title: 'Terms and Conditions',
        content: content?.option_value || ''
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get terms' });
  }
});

/**
 * @route   GET /api/v1/general/privacy-policy
 * @desc    Get privacy policy (shortcut)
 * @access  Public
 */
router.get('/privacy-policy', async (req, res) => {
  try {
    const content = await StaticOption.findOne({ where: { option_name: 'page_privacy_policy' } });
    res.json({
      success: true,
      data: {
        title: 'Privacy Policy',
        content: content?.option_value || ''
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get privacy policy' });
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
