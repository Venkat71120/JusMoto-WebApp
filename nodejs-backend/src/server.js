require('dotenv').config();
const { app, httpServer, io } = require('./app');
const { sequelize, testConnection } = require('./config/database');
const config = require('./config/app');

const PORT = config.port || 3000;

// Initialize server
const startServer = async () => {
  try {
    // Test database connection
    await testConnection();

    // Sync database models (in development only)
    if (process.env.NODE_ENV === 'development') {
      // Use { alter: true } to update tables without dropping them
      // Use { force: true } to drop and recreate tables (CAUTION: loses data)
      // await sequelize.sync({ alter: true });
      console.log('📦 Database models synchronized');
    }

    // Start server (use httpServer for Socket.io support)
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 API URL: ${config.url}/api/v1`);
      console.log(`🌐 Frontend URL: ${config.frontendUrl}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  sequelize.close().then(() => {
    console.log('💤 Database connection closed.');
    process.exit(0);
  });
});

startServer();
