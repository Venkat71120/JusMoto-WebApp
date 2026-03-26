/**
 * Converts raw database/server errors into user-friendly messages.
 * Always logs the real error for developers.
 */
function formatError(error) {
  // Log actual error for developers
  console.error('[Error]', error?.message || error, error?.stack || '');

  if (!error) return 'Something went wrong. Please try again.';

  const msg = error.message || '';

  // Sequelize validation errors — list the problematic fields
  if (error.name === 'SequelizeValidationError' && error.errors) {
    const fields = error.errors.map(e => {
      const label = (e.path || '').replace(/_/g, ' ');
      if (e.type === 'notNull Violation') return `"${label}" is required`;
      return `"${label}" is invalid`;
    });
    return fields.join(', ');
  }

  // Column cannot be null  (e.g. "Column 'discount_price' cannot be null")
  const nullMatch = msg.match(/Column '(\w+)' cannot be null/i);
  if (nullMatch) {
    const field = nullMatch[1].replace(/_/g, ' ');
    return `The field "${field}" is required`;
  }

  // Unique constraint  (duplicate entry)
  if (error.name === 'SequelizeUniqueConstraintError' || msg.includes('ER_DUP_ENTRY')) {
    const dupMatch = msg.match(/Duplicate entry '(.+?)' for key/);
    if (dupMatch) return `"${dupMatch[1]}" already exists. Please use a different value.`;
    return 'A record with this information already exists.';
  }

  // Foreign key constraint
  if (error.name === 'SequelizeForeignKeyConstraintError' || msg.includes('ER_NO_REFERENCED_ROW')) {
    return 'The referenced record was not found. Please check your selection.';
  }

  // Cannot delete — child rows exist
  if (msg.includes('ER_ROW_IS_REFERENCED') || msg.includes('Cannot delete or update a parent row')) {
    return 'This record is linked to other data and cannot be deleted.';
  }

  // Data too long
  if (msg.includes('ER_DATA_TOO_LONG') || msg.includes('Data too long')) {
    const longMatch = msg.match(/Data too long for column '(\w+)'/);
    if (longMatch) return `The value for "${longMatch[1].replace(/_/g, ' ')}" is too long.`;
    return 'One of the values exceeds the maximum allowed length.';
  }

  // Bad field / unknown column
  if (msg.includes('ER_BAD_FIELD_ERROR') || msg.includes('Unknown column')) {
    return 'Invalid data was submitted. Please check your input.';
  }

  // Connection / timeout errors
  if (msg.includes('ECONNREFUSED') || msg.includes('ETIMEDOUT') || msg.includes('ENOTFOUND')) {
    return 'Service is temporarily unavailable. Please try again later.';
  }

  // Access denied
  if (msg.includes('ER_ACCESS_DENIED') || msg.includes('Access denied')) {
    return 'Service is temporarily unavailable. Please try again later.';
  }

  // JSON parse errors
  if (msg.includes('JSON') || msg.includes('Unexpected token')) {
    return 'Invalid data format. Please check your input.';
  }

  // Out of range
  if (msg.includes('ER_WARN_DATA_OUT_OF_RANGE') || msg.includes('Out of range')) {
    return 'One of the values is out of the allowed range.';
  }

  // Default: generic message
  return 'Something went wrong. Please try again.';
}

module.exports = { formatError };
