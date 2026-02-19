const { body } = require('express-validator');

const registerValidator = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6, max: 191 })
    .withMessage('Password must be between 6 and 191 characters'),
  body('terms_conditions')
    .isBoolean()
    .withMessage('Terms and conditions must be accepted')
    .custom(value => value === true)
    .withMessage('You must accept the terms and conditions'),
  body('first_name')
    .optional()
    .isLength({ max: 100 })
    .withMessage('First name cannot exceed 100 characters'),
  body('last_name')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Last name cannot exceed 100 characters'),
  body('phone')
    .optional()
    .matches(/^[+]?[\d\s-]+$/)
    .withMessage('Please provide a valid phone number')
];

const loginValidator = [
  body('email')
    .notEmpty()
    .withMessage('Email or username is required')
    .isLength({ max: 191 })
    .withMessage('Email/username is too long'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const adminLoginValidator = [
  body('email')
    .notEmpty()
    .withMessage('Email or username is required')
    .isLength({ max: 191 })
    .withMessage('Email/username is too long'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const verifyEmailValidator = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('otp')
    .isLength({ min: 6, max: 6 })
    .withMessage('OTP must be 6 digits')
    .isNumeric()
    .withMessage('OTP must be numeric')
];

const resendOtpValidator = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
];

const forgotPasswordValidator = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
];

const resetPasswordValidator = [
  body('token')
    .notEmpty()
    .withMessage('Reset token is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('password_confirmation')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Password confirmation does not match')
];

const updateFirebaseTokenValidator = [
  body('firebase_token')
    .notEmpty()
    .withMessage('Firebase token is required')
];

module.exports = {
  registerValidator,
  loginValidator,
  adminLoginValidator,
  verifyEmailValidator,
  resendOtpValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  updateFirebaseTokenValidator
};
