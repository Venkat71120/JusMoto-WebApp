require('dotenv').config();

module.exports = {
  // Application
  name: process.env.APP_NAME || 'JusMoto',
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  url: process.env.APP_URL || 'http://localhost:3000',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:4200',

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'your-refresh-secret',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d'
  },

  // File Upload
  upload: {
    maxSize: parseInt(process.env.UPLOAD_MAX_SIZE, 10) || 5242880, // 5MB
    path: process.env.UPLOAD_PATH || 'uploads',
    allowedMimeTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf'
    ]
  },

  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900000, // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100
  },

  // Pagination
  pagination: {
    defaultLimit: 10,
    maxLimit: 100
  },

  // OTP
  otp: {
    length: 6,
    expiresIn: 10 * 60 * 1000 // 10 minutes
  },

  // Password
  password: {
    minLength: 8,
    saltRounds: 12
  }
};
