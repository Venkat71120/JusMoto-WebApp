/**
 * Standard API response utilities
 */

const success = (res, data = null, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

const created = (res, data = null, message = 'Created successfully') => {
  return success(res, data, message, 201);
};

const error = (res, message = 'Error', statusCode = 400, errors = null) => {
  const response = {
    success: false,
    error: message
  };

  if (errors) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};

const notFound = (res, message = 'Resource not found') => {
  return error(res, message, 404);
};

const unauthorized = (res, message = 'Unauthorized') => {
  return error(res, message, 401);
};

const forbidden = (res, message = 'Access denied') => {
  return error(res, message, 403);
};

const validationError = (res, errors) => {
  return res.status(422).json({
    success: false,
    error: 'Validation failed',
    errors
  });
};

const serverError = (res, error = null) => {
  console.error('Server Error:', error);
  return res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
};

const paginated = (res, data, pagination, message = 'Success') => {
  return res.status(200).json({
    success: true,
    message,
    data,
    pagination
  });
};

module.exports = {
  success,
  created,
  error,
  notFound,
  unauthorized,
  forbidden,
  validationError,
  serverError,
  paginated
};
