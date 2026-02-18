const router = require('express').Router();

// Import route modules
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const serviceRoutes = require('./service.routes');
const categoryRoutes = require('./category.routes');
const brandRoutes = require('./brand.routes');
const carRoutes = require('./car.routes');
const cartRoutes = require('./cart.routes');
const orderRoutes = require('./order.routes');
const paymentRoutes = require('./payment.routes');
const trafficChallanRoutes = require('./traffic-challan.routes');
const walletRoutes = require('./wallet.routes');
const reviewRoutes = require('./review.routes');
const couponRoutes = require('./coupon.routes');
const favoriteRoutes = require('./favorite.routes');
const notificationRoutes = require('./notification.routes');
const supportRoutes = require('./support.routes');
const franchiseRoutes = require('./franchise.routes');
const generalRoutes = require('./general.routes');

// Public routes (no authentication required)
router.use('/auth', authRoutes);
router.use('/general', generalRoutes);
router.use('/services', serviceRoutes);
router.use('/categories', categoryRoutes);
router.use('/brands', brandRoutes);
router.use('/cars', carRoutes);

// Authenticated routes
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);
router.use('/payments', paymentRoutes);
router.use('/traffic-challan', trafficChallanRoutes);
router.use('/wallet', walletRoutes);
router.use('/reviews', reviewRoutes);
router.use('/coupons', couponRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/notifications', notificationRoutes);
router.use('/support', supportRoutes);

// Franchise routes
router.use('/franchise', franchiseRoutes);

module.exports = router;
