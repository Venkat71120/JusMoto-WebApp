const router = require('express').Router();
const { authenticateAdmin } = require('../../../middleware/auth.middleware');

// Import admin route modules
const dashboardRoutes = require('./dashboard.routes');
const userRoutes = require('./user.routes');
const orderRoutes = require('./order.routes');
const serviceRoutes = require('./service.routes');
const categoryRoutes = require('./category.routes');
const brandRoutes = require('./brand.routes');
const settingsRoutes = require('./settings.routes');

// All admin routes require authentication
router.use(authenticateAdmin);

// Admin routes
router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/services', serviceRoutes);
router.use('/categories', categoryRoutes);
router.use('/brands', brandRoutes);
router.use('/settings', settingsRoutes);

module.exports = router;
