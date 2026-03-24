module.exports = {
  // User Types
  USER_TYPES: {
    ADMIN: 'admin',
    FRANCHISE: 'franchise',
    CLIENT: 'client',
    STAFF: 'staff'
  },

  // Order Status
  ORDER_STATUS: {
    PENDING: 0,
    ACCEPTED: 1,
    IN_PROGRESS: 2,
    COMPLETED: 3,
    CANCELLED: 4,
    REFUNDED: 5
  },

  ORDER_STATUS_LABELS: {
    0: 'Pending',
    1: 'Accepted',
    2: 'In Progress',
    3: 'Completed',
    4: 'Cancelled',
    5: 'Refunded'
  },

  // Payment Status
  PAYMENT_STATUS: {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
    REFUNDED: 'refunded'
  },

  // Service Types
  SERVICE_TYPE: {
    PRODUCT: 'product',
    SERVICE: 'service'
  },

  // Status
  STATUS: {
    ACTIVE: 1,
    INACTIVE: 0,
    PENDING: 2,
    SUSPENDED: 3
  },

  // Traffic Challan Status
  CHALLAN_STATUS: {
    PENDING: 'pending',
    PAID: 'paid',
    DISPUTED: 'disputed'
  },

  // Pagination
  DEFAULT_PAGE_SIZE: 15,
  MAX_PAGE_SIZE: 100,

  // File Upload
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOC_TYPES: ['application/pdf', 'application/msword'],
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_DOC_SIZE: 10 * 1024 * 1024, // 10MB

  // Ticket Status
  TICKET_STATUS: {
    PENDING: 'pending',
    OPEN: 'open',
    IN_PROGRESS: 'in_progress',
    RESOLVED: 'resolved',
    CLOSED: 'closed',
    CANCELLED: 'cancelled'
  },

  // Wallet Transaction Types
  WALLET_TRANSACTION_TYPE: {
    CREDIT: 'credit',
    DEBIT: 'debit'
  },

  // Notification Types
  NOTIFICATION_TYPE: {
    ORDER: 'order',
    PAYMENT: 'payment',
    CHALLAN: 'challan',
    SYSTEM: 'system',
    PROMO: 'promo'
  },

  // Coupon Types
  COUPON_TYPE: {
    PERCENTAGE: 'percentage',
    FIXED: 'fixed'
  }
};
