const { validationResult } = require('express-validator');
const Joi = require('joi');

/**
 * Express-validator middleware to check validation results
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }

  next();
};

/**
 * Joi validation middleware factory
 */
const validateJoi = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message.replace(/"/g, '')
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Replace request data with validated value
    req[property] = value;
    next();
  };
};

/**
 * Common validation schemas
 */
const schemas = {
  // Pagination
  pagination: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    sort: Joi.string().default('created_at'),
    order: Joi.string().valid('asc', 'desc', 'ASC', 'DESC').default('desc')
  }),

  // ID parameter
  idParam: Joi.object({
    id: Joi.number().integer().positive().required()
  }),

  // UUID parameter
  uuidParam: Joi.object({
    id: Joi.string().uuid().required()
  }),

  // Search
  search: Joi.object({
    q: Joi.string().min(1).max(100),
    search: Joi.string().min(1).max(100)
  }),

  // Date range
  dateRange: Joi.object({
    start_date: Joi.date().iso(),
    end_date: Joi.date().iso().greater(Joi.ref('start_date'))
  }),

  // Status filter
  statusFilter: Joi.object({
    status: Joi.alternatives().try(
      Joi.number().integer(),
      Joi.string()
    )
  })
};

module.exports = {
  validate,
  validateJoi,
  schemas
};
