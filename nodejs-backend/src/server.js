require('dotenv').config();
const { app, httpServer, io } = require('./app');
const { sequelize, testConnection } = require('./config/database');
const config = require('./config/app');
const notificationService = require('./services/notification.service');

// Pass Socket.IO to notification service for real-time push
notificationService.setIO(io);

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
    // Ensure user_selected_cars has all required columns
    try {
      const colsToAdd = [
        { name: 'variant_id', sql: "ADD COLUMN variant_id INT UNSIGNED NULL AFTER car_id" },
        { name: 'registration_number', sql: "ADD COLUMN registration_number VARCHAR(50) NULL" },
        { name: 'is_default', sql: "ADD COLUMN is_default TINYINT DEFAULT 0" },
        { name: 'status', sql: "ADD COLUMN status TINYINT DEFAULT 1" }
      ];
      for (const col of colsToAdd) {
        const [exists] = await sequelize.query(`SHOW COLUMNS FROM user_selected_cars LIKE '${col.name}'`);
        if (exists.length === 0) {
          await sequelize.query(`ALTER TABLE user_selected_cars ${col.sql}`);
          console.log(`Migration: Added ${col.name} to user_selected_cars`);
        }
      }
    } catch (e) {
      console.log('Migration check (user_selected_cars):', e.message);
    }

    // Add description column to service_additionals if missing
    try {
      const [saCols] = await sequelize.query("SHOW COLUMNS FROM service_additionals LIKE 'description'");
      if (saCols.length === 0) {
        await sequelize.query("ALTER TABLE service_additionals ADD COLUMN description TEXT NULL AFTER title");
        console.log('Migration: Added description to service_additionals table');
      }
    } catch (e) {
      console.log('Migration check (service_additionals):', e.message);
    }

    // Add social login columns to users table if missing
    try {
      const [provCol] = await sequelize.query("SHOW COLUMNS FROM users LIKE 'provider'");
      if (provCol.length === 0) {
        await sequelize.query("ALTER TABLE users ADD COLUMN provider VARCHAR(20) NULL AFTER image, ADD COLUMN social_id VARCHAR(255) NULL AFTER provider");
        console.log('Migration: Added provider, social_id to users table');
      }
    } catch (e) {
      console.log('Migration check (users social login):', e.message);
    }

    // Add password_reset columns to users table if missing
    try {
      const [prCols] = await sequelize.query("SHOW COLUMNS FROM users LIKE 'password_reset_token'");
      if (prCols.length === 0) {
        await sequelize.query("ALTER TABLE users ADD COLUMN password_reset_token VARCHAR(255) NULL, ADD COLUMN password_reset_expires DATETIME NULL");
        console.log('Migration: Added password_reset_token, password_reset_expires to users table');
      }
    } catch (e) {
      console.log('Migration check (users password_reset):', e.message);
    }

    // Create ticket_messages table if not exists
    try {
      await sequelize.query(`CREATE TABLE IF NOT EXISTS ticket_messages (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        ticket_id INT UNSIGNED NOT NULL,
        user_id INT UNSIGNED NULL,
        admin_id INT UNSIGNED NULL,
        message TEXT NOT NULL,
        attachment VARCHAR(255) NULL,
        is_read TINYINT DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )`);
    } catch (e) {
      console.log('Migration check (ticket_messages):', e.message);
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
