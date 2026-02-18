/**
 * Pagination helper utilities
 */

const config = require('../config/app');

/**
 * Get pagination parameters from request
 */
const getPaginationParams = (query) => {
  const page = Math.max(1, parseInt(query.page, 10) || 1);
  const limit = Math.min(
    Math.max(1, parseInt(query.limit, 10) || config.pagination?.defaultLimit || 10),
    config.pagination?.maxLimit || 100
  );
  const offset = (page - 1) * limit;

  return { page, limit, offset };
};

/**
 * Get sort parameters from request
 */
const getSortParams = (query, allowedFields = [], defaultField = 'created_at', defaultOrder = 'DESC') => {
  let sortField = query.sort || defaultField;
  let sortOrder = (query.order || defaultOrder).toUpperCase();

  // Validate sort field
  if (allowedFields.length > 0 && !allowedFields.includes(sortField)) {
    sortField = defaultField;
  }

  // Validate sort order
  if (!['ASC', 'DESC'].includes(sortOrder)) {
    sortOrder = defaultOrder;
  }

  return { sortField, sortOrder };
};

/**
 * Build pagination response
 */
const buildPaginationResponse = (count, page, limit) => {
  const totalPages = Math.ceil(count / limit);
  const hasNext = page < totalPages;
  const hasPrev = page > 1;

  return {
    total: count,
    page,
    limit,
    totalPages,
    hasNext,
    hasPrev,
    nextPage: hasNext ? page + 1 : null,
    prevPage: hasPrev ? page - 1 : null
  };
};

/**
 * Paginate sequelize query
 */
const paginate = async (model, options = {}, query = {}) => {
  const { page, limit, offset } = getPaginationParams(query);

  const { count, rows } = await model.findAndCountAll({
    ...options,
    limit,
    offset
  });

  return {
    data: rows,
    pagination: buildPaginationResponse(count, page, limit)
  };
};

module.exports = {
  getPaginationParams,
  getSortParams,
  buildPaginationResponse,
  paginate
};
