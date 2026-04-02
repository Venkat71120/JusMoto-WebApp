require('dotenv').config();

module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '180d',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'your-refresh-secret',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '365d',
    issuer: process.env.APP_NAME || 'JusMoto',
    audience: process.env.FRONTEND_URL || 'http://localhost:4200'
  },

  password: {
    minLength: 8,
    maxLength: 128,
    saltRounds: 12
  },

  otp: {
    length: 6,
    expiresIn: 10 * 60 * 1000, // 10 minutes in milliseconds
    maxAttempts: 3
  },

  social: {
    google: {
      clientIds: (process.env.GOOGLE_CLIENT_IDS || process.env.GOOGLE_CLIENT_ID || '').split(',').map(s => s.trim()).filter(Boolean)
    },
    apple: {
      clientId: process.env.APPLE_CLIENT_ID || '',
      teamId: process.env.APPLE_TEAM_ID || '',
      keyId: process.env.APPLE_KEY_ID || ''
    },
    facebook: {
      appId: process.env.FACEBOOK_APP_ID,
      appSecret: process.env.FACEBOOK_APP_SECRET
    }
  },

  session: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }
};
