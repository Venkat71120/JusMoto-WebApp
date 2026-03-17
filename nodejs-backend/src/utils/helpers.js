const crypto = require('crypto');
const slugify = require('slugify');

/**
 * Generate a random string
 */
const generateRandomString = (length = 32) => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
};

/**
 * Generate OTP
 */
const generateOTP = (length = 6) => {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};

/**
 * Generate unique order number
 */
const generateOrderNumber = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

/**
 * Generate invoice number
 */
const generateInvoiceNumber = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `INV-${year}${month}-${random}`;
};

/**
 * Create URL slug
 */
const createSlug = (text) => {
  return slugify(text, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g
  });
};

/**
 * Paginate results
 */
const paginate = (page = 1, limit = 15) => {
  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.min(1000, Math.max(1, parseInt(limit)));
  const offset = (pageNum - 1) * limitNum;

  return {
    limit: limitNum,
    offset,
    page: pageNum
  };
};

/**
 * Format pagination response
 */
const paginationResponse = (data, count, page, limit) => {
  const totalPages = Math.ceil(count / limit);

  return {
    data,
    pagination: {
      total: count,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
};

/**
 * Calculate percentage
 */
const calculatePercentage = (value, percentage) => {
  return (value * percentage) / 100;
};

/**
 * Format currency
 */
const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency
  }).format(amount);
};

/**
 * Parse boolean from string
 */
const parseBoolean = (value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return ['true', '1', 'yes'].includes(value.toLowerCase());
  }
  return Boolean(value);
};

/**
 * Clean object - remove undefined and null values
 */
const cleanObject = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v != null)
  );
};

/**
 * Generate unique transaction ID
 */
const generateTransactionId = () => {
  return `TXN${Date.now()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
};

/**
 * Mask sensitive data (e.g., phone, email)
 */
const maskPhone = (phone) => {
  if (!phone || phone.length < 6) return phone;
  return phone.slice(0, 2) + '****' + phone.slice(-2);
};

const maskEmail = (email) => {
  if (!email) return email;
  const [name, domain] = email.split('@');
  if (!domain) return email;
  const maskedName = name.slice(0, 2) + '***';
  return `${maskedName}@${domain}`;
};

/**
 * Deep merge objects
 */
const deepMerge = (target, source) => {
  const result = { ...target };
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
};

module.exports = {
  generateRandomString,
  generateOTP,
  generateOrderNumber,
  generateInvoiceNumber,
  createSlug,
  paginate,
  paginationResponse,
  calculatePercentage,
  formatCurrency,
  parseBoolean,
  cleanObject,
  generateTransactionId,
  maskPhone,
  maskEmail,
  deepMerge
};
