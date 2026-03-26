const router = require('express').Router();
const trafficChallanService = require('../../../services/trafficChallan.service');
const { authenticateUser } = require('../../../middleware/auth.middleware');
const { body, validationResult } = require('express-validator');
const { formatError } = require('../../../utils/formatError');

// All routes require authentication
router.use(authenticateUser);

/**
 * @route   POST /api/v1/traffic-challan/fetch
 * @desc    Fetch challans by vehicle number
 * @access  Private
 */
router.post('/fetch', [
  body('vehicleNumber').trim().notEmpty().withMessage('Vehicle number is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { vehicleNumber } = req.body;
    const userId = req.userId;

    const result = await trafficChallanService.fetchChallansByVehicle(vehicleNumber, userId);

    res.json({
      success: true,
      message: result.data.length > 0 ? 'Challans found' : 'No challans found',
      data: result.data
    });
  } catch (error) {
    console.error('Fetch challans error:', error);
    res.status(500).json({
      success: false,
      message: formatError(error) || 'Failed to fetch challans'
    });
  }
});

/**
 * @route   GET /api/v1/traffic-challan/history
 * @desc    Get user's challan history
 * @access  Private
 */
router.get('/history', async (req, res) => {
  try {
    const userId = req.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await trafficChallanService.getChallanHistory(userId, page, limit);

    res.json({
      success: true,
      data: result.challans,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Get challan history error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get challan history'
    });
  }
});

/**
 * @route   GET /api/v1/traffic-challan/stats
 * @desc    Get user's challan statistics
 * @access  Private
 */
router.get('/stats', async (req, res) => {
  try {
    const userId = req.userId;

    const stats = await trafficChallanService.getChallanStats(userId);

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get challan stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get challan statistics'
    });
  }
});

/**
 * @route   GET /api/v1/traffic-challan/:id
 * @desc    Get challan details
 * @access  Private
 */
router.get('/:id', async (req, res) => {
  try {
    const challanId = req.params.id;
    const userId = req.userId;

    const challan = await trafficChallanService.getChallanDetails(challanId, userId);

    res.json({
      success: true,
      data: challan
    });
  } catch (error) {
    console.error('Get challan details error:', error);
    res.status(404).json({
      success: false,
      message: formatError(error) || 'Challan not found'
    });
  }
});

/**
 * @route   POST /api/v1/traffic-challan/:id/pay
 * @desc    Pay a challan
 * @access  Private
 */
router.post('/:id/pay', [
  body('paymentMethod').trim().notEmpty().withMessage('Payment method is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const challanId = req.params.id;
    const userId = req.userId;
    const { paymentMethod } = req.body;

    const result = await trafficChallanService.payChallan(challanId, userId, paymentMethod);

    res.json({
      success: true,
      message: 'Payment successful',
      data: {
        challan: result.data,
        transaction: result.transaction
      }
    });
  } catch (error) {
    console.error('Pay challan error:', error);
    res.status(400).json({
      success: false,
      message: formatError(error) || 'Payment failed'
    });
  }
});

module.exports = router;
