const jwt = require('jsonwebtoken');
const { User, Admin } = require('../models');

/**
 * Verify JWT token and attach user to request
 */
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if it's an admin or user token
      if (decoded.type === 'admin') {
        const admin = await Admin.findByPk(decoded.id);
        if (!admin || admin.status !== 1) {
          return res.status(401).json({ error: 'Invalid token or account disabled.' });
        }
        req.admin = admin;
        req.userType = 'admin';
      } else {
        const user = await User.findByPk(decoded.id);
        if (!user || user.status !== 1) {
          return res.status(401).json({ error: 'Invalid token or account disabled.' });
        }
        req.user = user;
        req.userType = decoded.type || 'client';
      }

      req.tokenData = decoded;
      next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expired.' });
      }
      return res.status(401).json({ error: 'Invalid token.' });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Optional authentication - doesn't fail if no token
 */
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next();
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.type === 'admin') {
        const admin = await Admin.findByPk(decoded.id);
        if (admin && admin.status === 1) {
          req.admin = admin;
          req.userType = 'admin';
        }
      } else {
        const user = await User.findByPk(decoded.id);
        if (user && user.status === 1) {
          req.user = user;
          req.userType = decoded.type || 'client';
        }
      }
      req.tokenData = decoded;
    } catch (err) {
      // Token invalid but we continue anyway
    }
    next();
  } catch (error) {
    next();
  }
};

/**
 * Check if user is admin
 */
const isAdmin = (req, res, next) => {
  if (req.userType !== 'admin' || !req.admin) {
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }
  next();
};

/**
 * Check if user is franchise
 */
const isFranchise = (req, res, next) => {
  if (req.userType !== 'franchise' && req.userType !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Franchise only.' });
  }
  next();
};

/**
 * Check if user is client
 */
const isClient = (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({ error: 'Access denied. Client only.' });
  }
  next();
};

/**
 * Check specific permissions (for admin roles)
 */
const hasPermission = (...permissions) => {
  return async (req, res, next) => {
    try {
      if (!req.admin) {
        return res.status(403).json({ error: 'Access denied.' });
      }

      // Super admin has all permissions
      if (req.admin.role === 'super_admin') {
        return next();
      }

      // Check if admin has required permissions
      const adminPermissions = await req.admin.getPermissions();
      const hasRequired = permissions.some(p => adminPermissions.includes(p));

      if (!hasRequired) {
        return res.status(403).json({ error: 'Insufficient permissions.' });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: 'Permission check failed.' });
    }
  };
};

/**
 * Verify email is verified
 */
const emailVerified = (req, res, next) => {
  if (req.user && !req.user.email_verified) {
    return res.status(403).json({
      error: 'Email not verified.',
      code: 'EMAIL_NOT_VERIFIED'
    });
  }
  next();
};

module.exports = {
  authenticate,
  optionalAuth,
  isAdmin,
  isFranchise,
  isClient,
  hasPermission,
  emailVerified
};
