const { Role, Permission } = require('../models');

/**
 * Check if admin has required permission
 */
const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const admin = req.admin;

      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      // Super admin has all permissions
      if (admin.is_super_admin) {
        return next();
      }

      // Get admin's roles
      const roles = await admin.getRoles({
        include: [{
          model: Permission,
          as: 'permissions'
        }]
      });

      // Flatten all permissions from all roles
      const permissions = roles.reduce((acc, role) => {
        if (role.permissions) {
          role.permissions.forEach(p => acc.add(p.name));
        }
        return acc;
      }, new Set());

      // Check if admin has required permission
      if (!permissions.has(requiredPermission)) {
        return res.status(403).json({
          success: false,
          message: 'Permission denied'
        });
      }

      next();
    } catch (error) {
      console.error('Permission check error:', error);
      return res.status(500).json({
        success: false,
        message: 'Permission check failed'
      });
    }
  };
};

/**
 * Check if admin has any of the required permissions
 */
const checkAnyPermission = (requiredPermissions) => {
  return async (req, res, next) => {
    try {
      const admin = req.admin;

      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      // Super admin has all permissions
      if (admin.is_super_admin) {
        return next();
      }

      // Get admin's roles
      const roles = await admin.getRoles({
        include: [{
          model: Permission,
          as: 'permissions'
        }]
      });

      // Flatten all permissions from all roles
      const permissions = roles.reduce((acc, role) => {
        if (role.permissions) {
          role.permissions.forEach(p => acc.add(p.name));
        }
        return acc;
      }, new Set());

      // Check if admin has any of the required permissions
      const hasPermission = requiredPermissions.some(p => permissions.has(p));

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: 'Permission denied'
        });
      }

      next();
    } catch (error) {
      console.error('Permission check error:', error);
      return res.status(500).json({
        success: false,
        message: 'Permission check failed'
      });
    }
  };
};

/**
 * Check if admin has all required permissions
 */
const checkAllPermissions = (requiredPermissions) => {
  return async (req, res, next) => {
    try {
      const admin = req.admin;

      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      // Super admin has all permissions
      if (admin.is_super_admin) {
        return next();
      }

      // Get admin's roles
      const roles = await admin.getRoles({
        include: [{
          model: Permission,
          as: 'permissions'
        }]
      });

      // Flatten all permissions from all roles
      const permissions = roles.reduce((acc, role) => {
        if (role.permissions) {
          role.permissions.forEach(p => acc.add(p.name));
        }
        return acc;
      }, new Set());

      // Check if admin has all required permissions
      const hasAllPermissions = requiredPermissions.every(p => permissions.has(p));

      if (!hasAllPermissions) {
        return res.status(403).json({
          success: false,
          message: 'Permission denied'
        });
      }

      next();
    } catch (error) {
      console.error('Permission check error:', error);
      return res.status(500).json({
        success: false,
        message: 'Permission check failed'
      });
    }
  };
};

module.exports = {
  checkPermission,
  checkAnyPermission,
  checkAllPermissions
};
