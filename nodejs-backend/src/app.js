require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');

const { sequelize, testConnection } = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const brandRoutes = require('./routes/brand.routes');
const carRoutes = require('./routes/car.routes');
const serviceRoutes = require('./routes/service.routes');
const orderRoutes = require('./routes/order.routes');
const cartRoutes = require('./routes/cart.routes');
const paymentRoutes = require('./routes/payment.routes');
const franchiseRoutes = require('./routes/franchise.routes');
const challanRoutes = require('./routes/challan.routes');
const adminRoutes = require('./routes/admin.routes');
const ticketRoutes = require('./routes/ticket.routes');
const walletRoutes = require('./routes/wallet.routes');
const notificationRoutes = require('./routes/notification.routes');
const couponRoutes = require('./routes/coupon.routes');
const uploadRoutes = require('./routes/upload.routes');
const locationRoutes = require('./routes/location.routes');
const reviewRoutes = require('./routes/review.routes');
const offerRoutes = require('./routes/offer.routes');

const app = express();
const httpServer = createServer(app);

// Socket.io setup for real-time features
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:4200',
    methods: ['GET', 'POST']
  }
});

// Make io accessible to routes
app.set('io', io);

// Trust proxy for rate limiting behind reverse proxy
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API Routes - v1
const apiV1 = '/api/v1';

app.use(`${apiV1}/auth`, authRoutes);
app.use(`${apiV1}/user`, userRoutes);
app.use(`${apiV1}/categories`, categoryRoutes);
app.use(`${apiV1}/brands`, brandRoutes);
app.use(`${apiV1}/cars`, carRoutes);
app.use(`${apiV1}/services`, serviceRoutes);
app.use(`${apiV1}/orders`, orderRoutes);
app.use(`${apiV1}/cart`, cartRoutes);
app.use(`${apiV1}/payments`, paymentRoutes);
app.use(`${apiV1}/franchise`, franchiseRoutes);
app.use(`${apiV1}/challans`, challanRoutes);
app.use(`${apiV1}/admin`, adminRoutes);
app.use(`${apiV1}/tickets`, ticketRoutes);
app.use(`${apiV1}/wallet`, walletRoutes);
app.use(`${apiV1}/notifications`, notificationRoutes);
app.use(`${apiV1}/coupons`, couponRoutes);
app.use(`${apiV1}/upload`, uploadRoutes);
app.use(`${apiV1}/locations`, locationRoutes);
app.use(`${apiV1}/reviews`, reviewRoutes);
app.use(`${apiV1}/offers`, offerRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Test database connection
    await testConnection();

    // Sync models (in development only)
    if (process.env.NODE_ENV === 'development') {
      // await sequelize.sync({ alter: true });
      console.log('📦 Models synchronized');
    }

    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = { app, io };
