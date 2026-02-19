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

    // Run safe migrations (adds missing columns only)
    try {
      const [cols] = await sequelize.query("SHOW COLUMNS FROM tickets LIKE 'order_id'");
      if (cols.length === 0) {
        await sequelize.query("ALTER TABLE tickets ADD COLUMN order_id BIGINT UNSIGNED NULL AFTER user_id");
        console.log('Migration: Added order_id to tickets table');
      }
    } catch (e) {
      console.log('Migration check (tickets):', e.message);
    }

    // Add name and status to varients table
    try {
      const [vCols] = await sequelize.query("SHOW COLUMNS FROM varients LIKE 'name'");
      if (vCols.length === 0) {
        await sequelize.query("ALTER TABLE varients ADD COLUMN name VARCHAR(191) NULL AFTER car_id, ADD COLUMN status TINYINT DEFAULT 1 AFTER fual_type_id");
        console.log('Migration: Added name, status to varients table');
      }
      // Make engine_type_id and fual_type_id nullable for user-added variants
      await sequelize.query("ALTER TABLE varients MODIFY COLUMN engine_type_id BIGINT UNSIGNED NULL, MODIFY COLUMN fual_type_id BIGINT UNSIGNED NULL");
    } catch (e) {
      console.log('Migration check (varients):', e.message);
    }
    console.log('Database models synchronized');

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
