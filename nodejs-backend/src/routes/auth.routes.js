const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidator = require('../validators/auth.validator');
const { validate } = require('../middleware/validate.middleware');
const { authenticate } = require('../middleware/auth.middleware');

// Public routes
router.post('/register', authValidator.registerValidator, validate, authController.register);
router.post('/login', authValidator.loginValidator, validate, authController.login);
router.post('/admin/login', authValidator.adminLoginValidator, validate, authController.adminLogin);
router.post('/verify-email', authValidator.verifyEmailValidator, validate, authController.verifyEmail);
router.post('/resend-otp', authValidator.resendOtpValidator, validate, authController.resendOtp);
router.post('/forgot-password', authValidator.forgotPasswordValidator, validate, authController.forgotPassword);
router.post('/reset-password', authValidator.resetPasswordValidator, validate, authController.resetPassword);

// Protected routes
router.post('/logout', authenticate, authController.logout);
router.post('/refresh-token', authenticate, authController.refreshToken);
router.get('/me', authenticate, authController.me);
router.post('/firebase-token', authenticate, authValidator.updateFirebaseTokenValidator, validate, authController.updateFirebaseToken);

module.exports = router;
