const { validationResult } = require('express-validator');

/**
 * Validation middleware - checks for validation errors
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().reduce((acc, error) => {
      acc[error.path] = error.msg;
      return acc;
    }, {});

    return res.status(422).json({
      error: 'Validation failed',
      errors: formattedErrors
    });
  }

  next();
};

module.exports = { validate };
