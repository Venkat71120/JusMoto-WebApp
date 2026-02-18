const router = require('express').Router();
const { Op } = require('sequelize');
const { User, Order, Service, Admin, Review, TrafficChallan } = require('../../../models');
const { sequelize } = require('../../../config/database');

/**
 * @route   GET /api/admin/dashboard/statistics
 * @desc    Get dashboard statistics
 * @access  Admin
 */
router.get('/statistics', async (req, res) => {
  try {
    const adminId = req.adminId;
    const admin = req.admin;

    // Build where clause for franchise
    const orderWhere = admin.is_franchise ? { franchise_admin_id: adminId } : {};
    const serviceWhere = admin.is_franchise ? { admin_id: adminId } : {};

    // Get counts
    const [
      totalUsers,
      totalOrders,
      totalServices,
      pendingOrders,
      completedOrders,
      totalRevenue
    ] = await Promise.all([
      User.count(),
      Order.count({ where: orderWhere }),
      Service.count({ where: { ...serviceWhere, status: 1 } }),
      Order.count({ where: { ...orderWhere, status: 0 } }),
      Order.count({ where: { ...orderWhere, status: 2 } }),
      Order.sum('total', { where: { ...orderWhere, payment_status: 1 } })
    ]);

    res.json({
      success: true,
      data: {
        totalUsers,
        totalOrders,
        totalServices,
        pendingOrders,
        completedOrders,
        totalRevenue: totalRevenue || 0
      }
    });
  } catch (error) {
    console.error('Dashboard statistics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get dashboard statistics'
    });
  }
});

/**
 * @route   GET /api/admin/dashboard/order-counts
 * @desc    Get order counts by status
 * @access  Admin
 */
router.get('/order-counts', async (req, res) => {
  try {
    const adminId = req.adminId;
    const admin = req.admin;

    const orderWhere = admin.is_franchise ? { franchise_admin_id: adminId } : {};

    const statusCounts = await Order.findAll({
      where: orderWhere,
      attributes: [
        'status',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count']
      ],
      group: ['status']
    });

    const counts = {
      pending: 0,
      active: 0,
      completed: 0,
      delivered: 0,
      cancelled: 0
    };

    statusCounts.forEach(item => {
      const statusMap = {
        0: 'pending',
        1: 'active',
        2: 'completed',
        3: 'delivered',
        4: 'cancelled'
      };
      counts[statusMap[item.status]] = parseInt(item.dataValues.count);
    });

    res.json({
      success: true,
      data: counts
    });
  } catch (error) {
    console.error('Order counts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get order counts'
    });
  }
});

/**
 * @route   GET /api/admin/dashboard/earnings
 * @desc    Get earnings summary
 * @access  Admin
 */
router.get('/earnings', async (req, res) => {
  try {
    const adminId = req.adminId;
    const admin = req.admin;

    const orderWhere = admin.is_franchise ? { franchise_admin_id: adminId } : {};

    // Today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // This week start (Sunday)
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());

    // This month start
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

    const [todayEarnings, weekEarnings, monthEarnings, totalEarnings] = await Promise.all([
      Order.sum('total', {
        where: {
          ...orderWhere,
          payment_status: 1,
          created_at: { [Op.gte]: today }
        }
      }),
      Order.sum('total', {
        where: {
          ...orderWhere,
          payment_status: 1,
          created_at: { [Op.gte]: weekStart }
        }
      }),
      Order.sum('total', {
        where: {
          ...orderWhere,
          payment_status: 1,
          created_at: { [Op.gte]: monthStart }
        }
      }),
      Order.sum('total', {
        where: { ...orderWhere, payment_status: 1 }
      })
    ]);

    res.json({
      success: true,
      data: {
        today: todayEarnings || 0,
        thisWeek: weekEarnings || 0,
        thisMonth: monthEarnings || 0,
        total: totalEarnings || 0
      }
    });
  } catch (error) {
    console.error('Earnings error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get earnings'
    });
  }
});

/**
 * @route   GET /api/admin/dashboard/recent-orders
 * @desc    Get recent orders
 * @access  Admin
 */
router.get('/recent-orders', async (req, res) => {
  try {
    const adminId = req.adminId;
    const admin = req.admin;
    const limit = parseInt(req.query.limit) || 10;

    const orderWhere = admin.is_franchise ? { franchise_admin_id: adminId } : {};

    const orders = await Order.findAll({
      where: orderWhere,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email'] }
      ],
      order: [['created_at', 'DESC']],
      limit
    });

    res.json({
      success: true,
      data: orders
    });
  } catch (error) {
    console.error('Recent orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get recent orders'
    });
  }
});

/**
 * @route   GET /api/admin/dashboard/earnings-chart
 * @desc    Get earnings chart data (last 7 days)
 * @access  Admin
 */
router.get('/earnings-chart', async (req, res) => {
  try {
    const adminId = req.adminId;
    const admin = req.admin;
    const days = parseInt(req.query.days) || 7;

    const orderWhere = admin.is_franchise ? { franchise_admin_id: adminId } : {};

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    startDate.setHours(0, 0, 0, 0);

    const earnings = await Order.findAll({
      where: {
        ...orderWhere,
        payment_status: 1,
        created_at: { [Op.gte]: startDate }
      },
      attributes: [
        [sequelize.fn('DATE', sequelize.col('created_at')), 'date'],
        [sequelize.fn('SUM', sequelize.col('total')), 'total']
      ],
      group: [sequelize.fn('DATE', sequelize.col('created_at'))],
      order: [[sequelize.fn('DATE', sequelize.col('created_at')), 'ASC']]
    });

    // Fill in missing dates with 0
    const chartData = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const found = earnings.find(e => e.dataValues.date === dateStr);
      chartData.push({
        date: dateStr,
        total: found ? parseFloat(found.dataValues.total) : 0
      });
    }

    res.json({
      success: true,
      data: chartData
    });
  } catch (error) {
    console.error('Earnings chart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get earnings chart'
    });
  }
});

module.exports = router;
