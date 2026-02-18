# JusMoto WebApp - Laravel to Angular + Node.js Conversion Plan

## Executive Summary

This document outlines the comprehensive plan to convert the JusMoto Laravel application to:
- **Frontend:** Angular 17+ (Standalone Components, Signals, New Control Flow)
- **Backend:** Node.js with Express.js
- **ORM:** Sequelize with MySQL
- **Authentication:** JWT (JSON Web Tokens)

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Phase 1: Backend Foundation](#2-phase-1-backend-foundation)
3. [Phase 2: Database Models](#3-phase-2-database-models)
4. [Phase 3: Authentication & Authorization](#4-phase-3-authentication--authorization)
5. [Phase 4: API Development](#5-phase-4-api-development)
6. [Phase 5: Angular Frontend Setup](#6-phase-5-angular-frontend-setup)
7. [Phase 6: Frontend Components](#7-phase-6-frontend-components)
8. [Phase 7: Third-Party Integrations](#8-phase-7-third-party-integrations)
9. [Phase 8: Testing & Deployment](#9-phase-8-testing--deployment)
10. [Database Schema Reference](#10-database-schema-reference)
11. [API Endpoints Reference](#11-api-endpoints-reference)

---

## 1. Project Structure

### 1.1 Directory Layout

```
JusMoto-WebApp/
├── angular-frontend/                 # Angular 17+ Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/                 # Core services, guards, interceptors
│   │   │   │   ├── services/
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   ├── api.service.ts
│   │   │   │   │   ├── storage.service.ts
│   │   │   │   │   └── notification.service.ts
│   │   │   │   ├── guards/
│   │   │   │   │   ├── auth.guard.ts
│   │   │   │   │   ├── admin.guard.ts
│   │   │   │   │   └── franchise.guard.ts
│   │   │   │   ├── interceptors/
│   │   │   │   │   ├── auth.interceptor.ts
│   │   │   │   │   ├── error.interceptor.ts
│   │   │   │   │   └── loading.interceptor.ts
│   │   │   │   └── models/
│   │   │   │       ├── user.model.ts
│   │   │   │       ├── order.model.ts
│   │   │   │       ├── service.model.ts
│   │   │   │       └── ... (all models)
│   │   │   │
│   │   │   ├── shared/               # Shared components, pipes, directives
│   │   │   │   ├── components/
│   │   │   │   │   ├── header/
│   │   │   │   │   ├── footer/
│   │   │   │   │   ├── sidebar/
│   │   │   │   │   ├── loading/
│   │   │   │   │   ├── pagination/
│   │   │   │   │   └── modals/
│   │   │   │   ├── pipes/
│   │   │   │   └── directives/
│   │   │   │
│   │   │   ├── features/             # Feature modules
│   │   │   │   ├── auth/
│   │   │   │   │   ├── login/
│   │   │   │   │   ├── register/
│   │   │   │   │   ├── forgot-password/
│   │   │   │   │   ├── reset-password/
│   │   │   │   │   └── verify-email/
│   │   │   │   │
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── client-dashboard/
│   │   │   │   │   ├── admin-dashboard/
│   │   │   │   │   └── franchise-dashboard/
│   │   │   │   │
│   │   │   │   ├── services/
│   │   │   │   │   ├── service-list/
│   │   │   │   │   ├── service-detail/
│   │   │   │   │   └── service-filter/
│   │   │   │   │
│   │   │   │   ├── products/
│   │   │   │   │   ├── product-list/
│   │   │   │   │   ├── product-detail/
│   │   │   │   │   └── product-filter/
│   │   │   │   │
│   │   │   │   ├── cart/
│   │   │   │   │   ├── cart-list/
│   │   │   │   │   └── cart-item/
│   │   │   │   │
│   │   │   │   ├── checkout/
│   │   │   │   │   ├── checkout-page/
│   │   │   │   │   ├── payment-selection/
│   │   │   │   │   └── order-confirmation/
│   │   │   │   │
│   │   │   │   ├── orders/
│   │   │   │   │   ├── order-list/
│   │   │   │   │   ├── order-detail/
│   │   │   │   │   └── order-tracking/
│   │   │   │   │
│   │   │   │   ├── traffic-challan/
│   │   │   │   │   ├── challan-search/
│   │   │   │   │   ├── challan-list/
│   │   │   │   │   ├── challan-detail/
│   │   │   │   │   └── challan-payment/
│   │   │   │   │
│   │   │   │   ├── profile/
│   │   │   │   │   ├── user-profile/
│   │   │   │   │   ├── edit-profile/
│   │   │   │   │   ├── addresses/
│   │   │   │   │   └── settings/
│   │   │   │   │
│   │   │   │   ├── wallet/
│   │   │   │   │   ├── wallet-balance/
│   │   │   │   │   └── transactions/
│   │   │   │   │
│   │   │   │   ├── reviews/
│   │   │   │   │   ├── add-review/
│   │   │   │   │   └── review-list/
│   │   │   │   │
│   │   │   │   ├── support/
│   │   │   │   │   ├── ticket-list/
│   │   │   │   │   ├── ticket-detail/
│   │   │   │   │   └── create-ticket/
│   │   │   │   │
│   │   │   │   ├── favorites/
│   │   │   │   │
│   │   │   │   ├── notifications/
│   │   │   │   │
│   │   │   │   ├── refunds/
│   │   │   │   │
│   │   │   │   └── admin/
│   │   │   │       ├── users/
│   │   │   │       ├── orders/
│   │   │   │       ├── services/
│   │   │   │       ├── products/
│   │   │   │       ├── categories/
│   │   │   │       ├── brands/
│   │   │   │       ├── staff/
│   │   │   │       ├── offers/
│   │   │   │       ├── coupons/
│   │   │   │       ├── reviews/
│   │   │   │       ├── settings/
│   │   │   │       └── reports/
│   │   │   │
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts
│   │   │   └── app.routes.ts
│   │   │
│   │   ├── assets/
│   │   ├── environments/
│   │   └── styles/
│   │
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── nodejs-backend/                   # Node.js Express Application
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── auth.js
│   │   │   ├── firebase.js
│   │   │   ├── payment.js
│   │   │   ├── mail.js
│   │   │   ├── sms.js
│   │   │   └── app.js
│   │   │
│   │   ├── models/                   # Sequelize Models
│   │   │   ├── index.js
│   │   │   ├── User.js
│   │   │   ├── Admin.js
│   │   │   ├── Order.js
│   │   │   ├── OrderItem.js
│   │   │   ├── OrderLocation.js
│   │   │   ├── Service.js
│   │   │   ├── ServiceInclude.js
│   │   │   ├── ServiceExclude.js
│   │   │   ├── ServiceAddon.js
│   │   │   ├── ServiceFaq.js
│   │   │   ├── Category.js
│   │   │   ├── SubCategory.js
│   │   │   ├── ChildCategory.js
│   │   │   ├── Brand.js
│   │   │   ├── Car.js
│   │   │   ├── Variant.js
│   │   │   ├── EngineType.js
│   │   │   ├── FuelType.js
│   │   │   ├── TrafficChallan.js
│   │   │   ├── Review.js
│   │   │   ├── Staff.js
│   │   │   ├── Wallet.js
│   │   │   ├── WalletTransaction.js
│   │   │   ├── Coupon.js
│   │   │   ├── Offer.js
│   │   │   ├── OfferService.js
│   │   │   ├── Slider.js
│   │   │   ├── UserCartItem.js
│   │   │   ├── UserLocation.js
│   │   │   ├── UserSelectedCar.js
│   │   │   ├── UserNotification.js
│   │   │   ├── FavoriteItem.js
│   │   │   ├── Schedule.js
│   │   │   ├── OutletLocation.js
│   │   │   ├── State.js
│   │   │   ├── City.js
│   │   │   ├── Area.js
│   │   │   ├── Tax.js
│   │   │   ├── DeliveryCharge.js
│   │   │   ├── PaymentGateway.js
│   │   │   ├── RefundGateway.js
│   │   │   ├── RefundedOrder.js
│   │   │   ├── Ticket.js
│   │   │   ├── TicketMessage.js
│   │   │   ├── Department.js
│   │   │   ├── Language.js
│   │   │   ├── StaticOption.js
│   │   │   ├── Page.js
│   │   │   ├── Menu.js
│   │   │   ├── Widget.js
│   │   │   ├── BlogPost.js
│   │   │   ├── Role.js
│   │   │   ├── Permission.js
│   │   │   └── ... (all 57 models)
│   │   │
│   │   ├── controllers/
│   │   │   ├── api/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── loginController.js
│   │   │   │   │   ├── registerController.js
│   │   │   │   │   ├── adminLoginController.js
│   │   │   │   │   ├── socialLoginController.js
│   │   │   │   │   └── passwordResetController.js
│   │   │   │   │
│   │   │   │   ├── user/
│   │   │   │   │   ├── userController.js
│   │   │   │   │   ├── profileController.js
│   │   │   │   │   ├── locationController.js
│   │   │   │   │   ├── notificationController.js
│   │   │   │   │   ├── favoriteController.js
│   │   │   │   │   └── settingsController.js
│   │   │   │   │
│   │   │   │   ├── service/
│   │   │   │   │   ├── serviceController.js
│   │   │   │   │   ├── categoryController.js
│   │   │   │   │   ├── brandController.js
│   │   │   │   │   └── carController.js
│   │   │   │   │
│   │   │   │   ├── order/
│   │   │   │   │   ├── orderController.js
│   │   │   │   │   ├── clientOrderController.js
│   │   │   │   │   ├── cartController.js
│   │   │   │   │   └── refundController.js
│   │   │   │   │
│   │   │   │   ├── payment/
│   │   │   │   │   ├── paymentGatewayController.js
│   │   │   │   │   └── invoiceController.js
│   │   │   │   │
│   │   │   │   ├── traffic-challan/
│   │   │   │   │   └── trafficChallanController.js
│   │   │   │   │
│   │   │   │   ├── franchise/
│   │   │   │   │   ├── dashboardController.js
│   │   │   │   │   ├── orderController.js
│   │   │   │   │   ├── notificationController.js
│   │   │   │   │   └── supportTicketController.js
│   │   │   │   │
│   │   │   │   ├── general/
│   │   │   │   │   ├── homeController.js
│   │   │   │   │   ├── sliderController.js
│   │   │   │   │   ├── offerController.js
│   │   │   │   │   ├── couponController.js
│   │   │   │   │   └── locationController.js
│   │   │   │   │
│   │   │   │   └── review/
│   │   │   │       └── reviewController.js
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── dashboardController.js
│   │   │       ├── userManageController.js
│   │   │       ├── orderManageController.js
│   │   │       ├── serviceController.js
│   │   │       ├── productController.js
│   │   │       ├── categoryController.js
│   │   │       ├── brandController.js
│   │   │       ├── carController.js
│   │   │       ├── staffController.js
│   │   │       ├── couponController.js
│   │   │       ├── offerController.js
│   │   │       ├── reviewController.js
│   │   │       ├── settingsController.js
│   │   │       ├── languageController.js
│   │   │       ├── paymentGatewayController.js
│   │   │       └── ... (all admin controllers)
│   │   │
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   ├── api/
│   │   │   │   ├── v1/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── auth.routes.js
│   │   │   │   │   ├── user.routes.js
│   │   │   │   │   ├── service.routes.js
│   │   │   │   │   ├── order.routes.js
│   │   │   │   │   ├── cart.routes.js
│   │   │   │   │   ├── payment.routes.js
│   │   │   │   │   ├── traffic-challan.routes.js
│   │   │   │   │   ├── franchise.routes.js
│   │   │   │   │   ├── client.routes.js
│   │   │   │   │   ├── general.routes.js
│   │   │   │   │   ├── review.routes.js
│   │   │   │   │   ├── wallet.routes.js
│   │   │   │   │   ├── coupon.routes.js
│   │   │   │   │   └── support.routes.js
│   │   │   │   │
│   │   │   │   └── admin/
│   │   │   │       ├── index.js
│   │   │   │       ├── dashboard.routes.js
│   │   │   │       ├── user.routes.js
│   │   │   │       ├── order.routes.js
│   │   │   │       ├── service.routes.js
│   │   │   │       ├── product.routes.js
│   │   │   │       ├── category.routes.js
│   │   │   │       ├── brand.routes.js
│   │   │   │       ├── car.routes.js
│   │   │   │       ├── staff.routes.js
│   │   │   │       ├── settings.routes.js
│   │   │   │       └── ... (all admin routes)
│   │   │   │
│   │   │   └── webhooks/
│   │   │       └── payment.webhooks.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── admin.middleware.js
│   │   │   ├── franchise.middleware.js
│   │   │   ├── permission.middleware.js
│   │   │   ├── validation.middleware.js
│   │   │   ├── upload.middleware.js
│   │   │   ├── language.middleware.js
│   │   │   ├── rateLimiter.middleware.js
│   │   │   ├── cors.middleware.js
│   │   │   └── errorHandler.middleware.js
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.js
│   │   │   ├── user.service.js
│   │   │   ├── order.service.js
│   │   │   ├── payment.service.js
│   │   │   ├── email.service.js
│   │   │   ├── sms.service.js
│   │   │   ├── firebase.service.js
│   │   │   ├── trafficChallan.service.js
│   │   │   ├── wallet.service.js
│   │   │   ├── coupon.service.js
│   │   │   ├── tax.service.js
│   │   │   ├── deliveryCharge.service.js
│   │   │   ├── upload.service.js
│   │   │   └── notification.service.js
│   │   │
│   │   ├── integrations/
│   │   │   ├── payment-gateways/
│   │   │   │   ├── stripe.integration.js
│   │   │   │   ├── paypal.integration.js
│   │   │   │   ├── razorpay.integration.js
│   │   │   │   ├── paytm.integration.js
│   │   │   │   ├── cashfree.integration.js
│   │   │   │   ├── midtrans.integration.js
│   │   │   │   ├── mollie.integration.js
│   │   │   │   ├── payfast.integration.js
│   │   │   │   ├── instamojo.integration.js
│   │   │   │   ├── mercadopago.integration.js
│   │   │   │   ├── zitopay.integration.js
│   │   │   │   ├── squareup.integration.js
│   │   │   │   ├── cinetpay.integration.js
│   │   │   │   ├── paytabs.integration.js
│   │   │   │   ├── billplz.integration.js
│   │   │   │   ├── toyyibpay.integration.js
│   │   │   │   ├── flutterwave.integration.js
│   │   │   │   └── paystack.integration.js
│   │   │   │
│   │   │   ├── instantpay.integration.js
│   │   │   ├── firebase.integration.js
│   │   │   ├── twilio.integration.js
│   │   │   ├── google.integration.js
│   │   │   └── facebook.integration.js
│   │   │
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   ├── validators.js
│   │   │   ├── constants.js
│   │   │   ├── logger.js
│   │   │   ├── pagination.js
│   │   │   ├── slugify.js
│   │   │   ├── encryption.js
│   │   │   └── response.js
│   │   │
│   │   ├── jobs/
│   │   │   ├── queue.js
│   │   │   ├── sendOrderEmail.job.js
│   │   │   ├── sendStatusChangeEmail.job.js
│   │   │   ├── sendWhatsAppMessage.job.js
│   │   │   └── sendPushNotification.job.js
│   │   │
│   │   ├── validators/
│   │   │   ├── auth.validator.js
│   │   │   ├── user.validator.js
│   │   │   ├── order.validator.js
│   │   │   ├── service.validator.js
│   │   │   └── ... (all validators)
│   │   │
│   │   └── app.js
│   │
│   ├── migrations/
│   │   └── ... (Sequelize migrations)
│   │
│   ├── seeders/
│   │   └── ... (Sequelize seeders)
│   │
│   ├── uploads/
│   ├── logs/
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── core/                             # Original Laravel (Reference)
```

---

## 2. Phase 1: Backend Foundation

### 2.1 Initialize Node.js Project

```bash
cd nodejs-backend
npm init -y
```

### 2.2 Install Core Dependencies

```bash
# Core
npm install express cors helmet morgan dotenv

# Database
npm install sequelize mysql2

# Authentication
npm install jsonwebtoken bcryptjs passport passport-jwt passport-local

# Validation
npm install joi express-validator

# File Upload
npm install multer sharp

# Email
npm install nodemailer

# SMS
npm install twilio

# Firebase
npm install firebase-admin

# Payment Gateways
npm install stripe razorpay paypal-rest-sdk

# Utilities
npm install uuid slugify moment lodash axios

# Queue
npm install bull redis

# Development
npm install --save-dev nodemon sequelize-cli
```

### 2.3 Create Base Configuration Files

#### .env.example
```env
# Application
NODE_ENV=development
PORT=3000
APP_NAME=JusMoto
APP_URL=http://localhost:3000
FRONTEND_URL=http://localhost:4200

# Database
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=jusmoto
DB_USERNAME=root
DB_PASSWORD=

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRES_IN=30d

# Mail
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=
MAIL_PASS=
MAIL_FROM=noreply@jusmoto.com

# Twilio
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Firebase
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# Payment Gateways
STRIPE_SECRET_KEY=
STRIPE_PUBLIC_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox

# InstantPay (Traffic Challan)
INSTANTPAY_BASE_URL=https://api.instantpay.in
INSTANTPAY_CLIENT_ID=
INSTANTPAY_CLIENT_SECRET=
INSTANTPAY_ENCRYPTION_KEY=
INSTANTPAY_AUTH_CODE=
INSTANTPAY_USE_MOCK=false

# Social Login
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

# Redis (for queues)
REDIS_HOST=localhost
REDIS_PORT=6379

# File Upload
UPLOAD_MAX_SIZE=5242880
UPLOAD_PATH=uploads
```

### 2.4 Express App Setup (src/app.js)

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();

// Security
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// Logging
app.use(morgan('dev'));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/v1', require('./routes/api/v1'));
app.use('/api/admin', require('./routes/api/admin'));

// Error handling
app.use(require('./middleware/errorHandler.middleware'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

module.exports = app;
```

---

## 3. Phase 2: Database Models

### 3.1 Sequelize Configuration

```javascript
// src/config/database.js
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: console.log,
    define: {
      timestamps: true,
      underscored: true,
      paranoid: true // Soft deletes
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      paranoid: true
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
```

### 3.2 Models to Create (57 models)

#### Priority 1: Core Models
1. **User** - User accounts
2. **Admin** - Admin/franchise accounts
3. **Role** - User roles
4. **Permission** - Role permissions
5. **UserLocation** - User addresses
6. **UserSelectedCar** - User's vehicles
7. **UserCartItem** - Shopping cart
8. **UserNotification** - Notifications

#### Priority 2: Catalog Models
9. **Category** - Main categories
10. **SubCategory** - Subcategories
11. **ChildCategory** - Third-level categories
12. **Brand** - Vehicle brands
13. **Car** - Car models
14. **Variant** - Car variants
15. **EngineType** - Engine types
16. **FuelType** - Fuel types
17. **Service** - Service listings
18. **ServiceInclude** - Service inclusions
19. **ServiceExclude** - Service exclusions
20. **ServiceAddon** - Add-on services
21. **ServiceFaq** - Service FAQs
22. **ServiceCar** - Service-car associations

#### Priority 3: Order Models
23. **Order** - Orders
24. **OrderItem** - Order line items
25. **OrderLocation** - Order delivery address
26. **OrderCompleteRequest** - Completion verification
27. **OrderCancellationPolicy** - Cancellation policies
28. **RefundedOrder** - Refunds
29. **Schedule** - Service schedules

#### Priority 4: Feature Models
30. **TrafficChallan** - Traffic violations
31. **Review** - Service reviews
32. **Staff** - Service technicians
33. **Wallet** - User wallets
34. **WalletTransaction** - Wallet transactions
35. **Coupon** - Discount coupons
36. **Offer** - Promotional offers
37. **OfferService** - Offer services
38. **FavoriteItem** - User favorites

#### Priority 5: Location Models
39. **State** - States
40. **City** - Cities
41. **Area** - Areas
42. **OutletLocation** - Franchise outlets
43. **Tax** - Tax configurations
44. **DeliveryCharge** - Delivery charges

#### Priority 6: System Models
45. **Slider** - Homepage sliders
46. **Language** - Languages
47. **StaticOption** - Configuration
48. **Page** - Dynamic pages
49. **Menu** - Navigation menus
50. **Widget** - Page widgets
51. **BlogPost** - Blog articles
52. **Ticket** - Support tickets
53. **TicketMessage** - Ticket messages
54. **Department** - Support departments
55. **PaymentGateway** - Payment configs
56. **RefundGateway** - Refund configs
57. **AccountDeactivate** - Deactivation history

### 3.3 Sample Model Definition

```javascript
// src/models/User.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'last_name'
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'email_verified'
    },
    emailVerifyToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'email_verify_token'
    },
    verifiedStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'verified_status'
    },
    isSuspend: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_suspend'
    },
    status: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    },
    firebaseToken: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'firebase_token'
    },
    otpVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'otp_verified'
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'date_of_birth'
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    checkOnlineStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'check_online_status'
    },
    lastSeen: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_seen'
    },
    selectedLang: {
      type: DataTypes.STRING(10),
      defaultValue: 'en',
      field: 'selected_lang'
    },
    termsCondition: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'terms_condition'
    }
  }, {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true
  });

  User.associate = (models) => {
    User.hasMany(models.UserSelectedCar, { foreignKey: 'user_id', as: 'selectedCars' });
    User.hasMany(models.UserLocation, { foreignKey: 'user_id', as: 'locations' });
    User.hasMany(models.UserCartItem, { foreignKey: 'user_id', as: 'cartItems' });
    User.hasMany(models.Order, { foreignKey: 'user_id', as: 'orders' });
    User.hasMany(models.Review, { foreignKey: 'user_id', as: 'reviews' });
    User.hasMany(models.UserNotification, { foreignKey: 'user_id', as: 'notifications' });
    User.hasMany(models.TrafficChallan, { foreignKey: 'user_id', as: 'challans' });
    User.hasMany(models.FavoriteItem, { foreignKey: 'user_id', as: 'favorites' });
    User.hasOne(models.Wallet, { foreignKey: 'user_id', as: 'wallet' });
    User.hasMany(models.Ticket, { foreignKey: 'user_id', as: 'tickets' });
  };

  return User;
};
```

---

## 4. Phase 3: Authentication & Authorization

### 4.1 JWT Authentication

```javascript
// src/services/auth.service.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

class AuthService {
  generateAccessToken(user) {
    return jwt.sign(
      { id: user.id, email: user.email, type: 'user' },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
  }

  generateRefreshToken(user) {
    return jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
    );
  }

  async hashPassword(password) {
    return bcrypt.hash(password, 12);
  }

  async comparePasswords(plain, hashed) {
    return bcrypt.compare(plain, hashed);
  }

  async register(data) {
    const hashedPassword = await this.hashPassword(data.password);
    const user = await User.create({
      ...data,
      password: hashedPassword
    });
    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user);
    return { user, accessToken, refreshToken };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const isValid = await this.comparePasswords(password, user.password);
    if (!isValid) throw new Error('Invalid credentials');

    if (user.isSuspend) throw new Error('Account suspended');

    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user);
    return { user, accessToken, refreshToken };
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}

module.exports = new AuthService();
```

### 4.2 Auth Middleware

```javascript
// src/middleware/auth.middleware.js
const jwt = require('jsonwebtoken');
const { User, Admin } = require('../models');

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user;
    if (decoded.type === 'admin') {
      user = await Admin.findByPk(decoded.id);
    } else {
      user = await User.findByPk(decoded.id);
    }

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    req.user = user;
    req.userType = decoded.type;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.type !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }

    const admin = await Admin.findByPk(decoded.id);
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Admin not found' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

const authenticateFranchise = async (req, res, next) => {
  try {
    await authenticateAdmin(req, res, () => {
      if (!req.admin.isFranchise) {
        return res.status(403).json({ success: false, message: 'Franchise access required' });
      }
      next();
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = { authenticateUser, authenticateAdmin, authenticateFranchise };
```

### 4.3 Permission Middleware

```javascript
// src/middleware/permission.middleware.js
const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const admin = req.admin;
      const permissions = await admin.getPermissions();

      const hasPermission = permissions.some(p => p.name === requiredPermission);

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: 'Permission denied'
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
};

module.exports = { checkPermission };
```

---

## 5. Phase 4: API Development

### 5.1 API Routes Structure

```javascript
// src/routes/api/v1/index.js
const router = require('express').Router();

// Public routes
router.use('/auth', require('./auth.routes'));
router.use('/general', require('./general.routes'));
router.use('/services', require('./service.routes'));
router.use('/categories', require('./category.routes'));
router.use('/brands', require('./brand.routes'));
router.use('/cars', require('./car.routes'));
router.use('/offers', require('./offer.routes'));
router.use('/outlets', require('./outlet.routes'));
router.use('/sliders', require('./slider.routes'));
router.use('/locations', require('./location.routes'));

// Authenticated routes
router.use('/user', require('./user.routes'));
router.use('/client', require('./client.routes'));
router.use('/cart', require('./cart.routes'));
router.use('/orders', require('./order.routes'));
router.use('/payments', require('./payment.routes'));
router.use('/traffic-challan', require('./traffic-challan.routes'));
router.use('/wallet', require('./wallet.routes'));
router.use('/reviews', require('./review.routes'));
router.use('/favorites', require('./favorite.routes'));
router.use('/notifications', require('./notification.routes'));
router.use('/support', require('./support.routes'));
router.use('/coupons', require('./coupon.routes'));

// Franchise routes
router.use('/franchise', require('./franchise.routes'));

module.exports = router;
```

### 5.2 API Endpoints to Implement

#### Authentication (10 endpoints)
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/admin/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/send-otp
POST   /api/v1/auth/verify-otp
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
POST   /api/v1/auth/social/login
POST   /api/v1/auth/refresh-token
```

#### User Management (20 endpoints)
```
GET    /api/v1/user/profile
PUT    /api/v1/user/profile
POST   /api/v1/user/change-password
POST   /api/v1/user/change-email
POST   /api/v1/user/change-phone
POST   /api/v1/user/firebase-token
GET    /api/v1/user/locations
POST   /api/v1/user/locations
PUT    /api/v1/user/locations/:id
DELETE /api/v1/user/locations/:id
GET    /api/v1/user/notifications
POST   /api/v1/user/notifications/:id/read
POST   /api/v1/user/notifications/read-all
DELETE /api/v1/user/notifications/clear
GET    /api/v1/user/favorites
POST   /api/v1/user/favorites/add
DELETE /api/v1/user/favorites/:id
POST   /api/v1/user/settings/deactivate
POST   /api/v1/user/settings/reactivate
DELETE /api/v1/user/settings/delete-account
```

#### Services & Products (15 endpoints)
```
GET    /api/v1/services
GET    /api/v1/services/:id
GET    /api/v1/services/:id/variants/:variantId
GET    /api/v1/services/popular
GET    /api/v1/services/featured
GET    /api/v1/services/schedules/:day
GET    /api/v1/categories
GET    /api/v1/categories/:id/subcategories
GET    /api/v1/subcategories/:id/children
GET    /api/v1/brands
GET    /api/v1/cars
GET    /api/v1/cars/:brandId
GET    /api/v1/variants/:carId
GET    /api/v1/engine-types
GET    /api/v1/fuel-types
```

#### Cart & Checkout (10 endpoints)
```
GET    /api/v1/cart
POST   /api/v1/cart/add
PUT    /api/v1/cart/item/:id/increase
PUT    /api/v1/cart/item/:id/decrease
DELETE /api/v1/cart/item/:id
DELETE /api/v1/cart/clear
POST   /api/v1/checkout/tax-info
POST   /api/v1/checkout/delivery-charge
POST   /api/v1/checkout/apply-coupon
POST   /api/v1/checkout/validate-coupon
```

#### Orders (15 endpoints)
```
GET    /api/v1/orders
GET    /api/v1/orders/:id
POST   /api/v1/orders/create
POST   /api/v1/orders/:id/cancel
POST   /api/v1/orders/:id/payment-update
GET    /api/v1/orders/:id/invoice
GET    /api/v1/orders/refunds
GET    /api/v1/orders/refunds/:id
POST   /api/v1/orders/:id/refund-request
POST   /api/v1/orders/:id/complete-request/approve
POST   /api/v1/orders/:id/complete-request/decline
GET    /api/v1/orders/complete-request/history
GET    /api/v1/orders/cancel-policies
```

#### Traffic Challan (6 endpoints)
```
POST   /api/v1/traffic-challan/fetch
GET    /api/v1/traffic-challan/history
GET    /api/v1/traffic-challan/:id
POST   /api/v1/traffic-challan/:id/pay
GET    /api/v1/traffic-challan/stats
```

#### Payments (10 endpoints)
```
GET    /api/v1/payments/gateways
POST   /api/v1/payments/process
POST   /api/v1/payments/verify
POST   /api/v1/payments/webhook/stripe
POST   /api/v1/payments/webhook/razorpay
POST   /api/v1/payments/webhook/paypal
... (webhooks for all payment gateways)
```

#### Franchise (20 endpoints)
```
GET    /api/v1/franchise/dashboard/statistics
GET    /api/v1/franchise/dashboard/order-counts
GET    /api/v1/franchise/dashboard/earnings
GET    /api/v1/franchise/dashboard/recent-activity
GET    /api/v1/franchise/dashboard/earnings-chart
GET    /api/v1/franchise/orders
GET    /api/v1/franchise/orders/:id
PUT    /api/v1/franchise/orders/:id/status
PUT    /api/v1/franchise/orders/:id/payment-status
POST   /api/v1/franchise/orders/:id/assign-staff
GET    /api/v1/franchise/staff
GET    /api/v1/franchise/notifications
GET    /api/v1/franchise/notifications/unread-count
POST   /api/v1/franchise/notifications/:id/read
POST   /api/v1/franchise/notifications/read-all
GET    /api/v1/franchise/support-tickets
GET    /api/v1/franchise/support-tickets/:id
POST   /api/v1/franchise/support-tickets/:id/reply
PUT    /api/v1/franchise/support-tickets/:id/status
GET    /api/v1/franchise/support-tickets/statistics
```

#### Admin API (150+ endpoints)
- Dashboard analytics
- User management (CRUD)
- Order management
- Service management (CRUD)
- Product management (CRUD)
- Category management (CRUD)
- Brand/Car/Variant management
- Staff management
- Coupon management
- Offer management
- Review moderation
- Settings configuration
- Payment gateway configuration
- Language management
- Page/Menu/Widget management
- Reports and analytics

---

## 6. Phase 5: Angular Frontend Setup

### 6.1 Initialize Angular Project

```bash
cd angular-frontend
ng new jusmoto-frontend --routing --style=scss --standalone
```

### 6.2 Install Dependencies

```bash
# Core
npm install @angular/material @angular/cdk
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools

# HTTP & Forms
npm install @angular/forms

# UI Libraries
npm install ngx-toastr
npm install ngx-spinner
npm install sweetalert2

# Utilities
npm install moment
npm install lodash-es @types/lodash-es

# Icons
npm install @fortawesome/fontawesome-free

# Maps (if needed)
npm install @angular/google-maps

# Social Login
npm install angularx-social-login

# File Upload
npm install ng2-file-upload

# Charts
npm install chart.js ng2-charts
```

### 6.3 Environment Configuration

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',
  adminApiUrl: 'http://localhost:3000/api/admin',
  uploadUrl: 'http://localhost:3000/uploads',
  googleClientId: 'your-google-client-id',
  facebookAppId: 'your-facebook-app-id',
  stripePublicKey: 'your-stripe-public-key',
  razorpayKeyId: 'your-razorpay-key-id',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

### 6.4 Core Services

```typescript
// src/app/core/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  get<T>(endpoint: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { params: httpParams });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`);
  }

  upload<T>(endpoint: string, formData: FormData): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, formData);
  }
}
```

```typescript
// src/app/core/services/auth.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  image?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);
  private storage = inject(StorageService);
  private router = inject(Router);

  currentUser = signal<User | null>(null);
  isAuthenticated = signal<boolean>(false);

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const user = this.storage.getUser();
    const token = this.storage.getToken();
    if (user && token) {
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('auth/login', { email, password }).pipe(
      tap(response => {
        if (response.success) {
          this.storage.setToken(response.data.accessToken);
          this.storage.setRefreshToken(response.data.refreshToken);
          this.storage.setUser(response.data.user);
          this.currentUser.set(response.data.user);
          this.isAuthenticated.set(true);
        }
      })
    );
  }

  register(data: any): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('auth/register', data).pipe(
      tap(response => {
        if (response.success) {
          this.storage.setToken(response.data.accessToken);
          this.storage.setRefreshToken(response.data.refreshToken);
          this.storage.setUser(response.data.user);
          this.currentUser.set(response.data.user);
          this.isAuthenticated.set(true);
        }
      })
    );
  }

  logout(): void {
    this.api.post('auth/logout', {}).subscribe();
    this.storage.clear();
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.storage.getToken();
  }
}
```

### 6.5 HTTP Interceptor

```typescript
// src/app/core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(StorageService);
  const token = storage.getToken();

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
```

### 6.6 Routing Configuration

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { franchiseGuard } from './core/guards/franchise.guard';

export const routes: Routes = [
  // Public routes
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'reset-password/:token', loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },

  // Services & Products
  { path: 'services', loadComponent: () => import('./features/services/service-list/service-list.component').then(m => m.ServiceListComponent) },
  { path: 'service/:slug', loadComponent: () => import('./features/services/service-detail/service-detail.component').then(m => m.ServiceDetailComponent) },
  { path: 'products', loadComponent: () => import('./features/products/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'product/:slug', loadComponent: () => import('./features/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },

  // Cart & Checkout
  { path: 'cart', loadComponent: () => import('./features/cart/cart-list/cart-list.component').then(m => m.CartListComponent) },
  { path: 'checkout', loadComponent: () => import('./features/checkout/checkout-page/checkout-page.component').then(m => m.CheckoutPageComponent), canActivate: [authGuard] },

  // User Dashboard
  {
    path: 'dashboard',
    canActivate: [authGuard],
    children: [
      { path: '', loadComponent: () => import('./features/dashboard/client-dashboard/client-dashboard.component').then(m => m.ClientDashboardComponent) },
      { path: 'orders', loadComponent: () => import('./features/orders/order-list/order-list.component').then(m => m.OrderListComponent) },
      { path: 'orders/:id', loadComponent: () => import('./features/orders/order-detail/order-detail.component').then(m => m.OrderDetailComponent) },
      { path: 'profile', loadComponent: () => import('./features/profile/user-profile/user-profile.component').then(m => m.UserProfileComponent) },
      { path: 'addresses', loadComponent: () => import('./features/profile/addresses/addresses.component').then(m => m.AddressesComponent) },
      { path: 'settings', loadComponent: () => import('./features/profile/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'traffic-challan', loadComponent: () => import('./features/traffic-challan/challan-search/challan-search.component').then(m => m.ChallanSearchComponent) },
      { path: 'traffic-challan/history', loadComponent: () => import('./features/traffic-challan/challan-list/challan-list.component').then(m => m.ChallanListComponent) },
      { path: 'traffic-challan/:id', loadComponent: () => import('./features/traffic-challan/challan-detail/challan-detail.component').then(m => m.ChallanDetailComponent) },
      { path: 'wallet', loadComponent: () => import('./features/wallet/wallet-balance/wallet-balance.component').then(m => m.WalletBalanceComponent) },
      { path: 'favorites', loadComponent: () => import('./features/favorites/favorites.component').then(m => m.FavoritesComponent) },
      { path: 'reviews', loadComponent: () => import('./features/reviews/review-list/review-list.component').then(m => m.ReviewListComponent) },
      { path: 'support', loadComponent: () => import('./features/support/ticket-list/ticket-list.component').then(m => m.TicketListComponent) },
      { path: 'support/:id', loadComponent: () => import('./features/support/ticket-detail/ticket-detail.component').then(m => m.TicketDetailComponent) },
      { path: 'refunds', loadComponent: () => import('./features/refunds/refund-list/refund-list.component').then(m => m.RefundListComponent) },
      { path: 'notifications', loadComponent: () => import('./features/notifications/notifications.component').then(m => m.NotificationsComponent) },
    ]
  },

  // Admin Dashboard
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  // Franchise Dashboard
  {
    path: 'franchise',
    canActivate: [franchiseGuard],
    loadChildren: () => import('./features/franchise/franchise.routes').then(m => m.FRANCHISE_ROUTES)
  },

  // Dynamic pages
  { path: ':slug', loadComponent: () => import('./features/pages/dynamic-page/dynamic-page.component').then(m => m.DynamicPageComponent) },

  // 404
  { path: '**', loadComponent: () => import('./features/pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
```

---

## 7. Phase 6: Frontend Components

### 7.1 Components to Create

#### Shared Components (15+)
1. HeaderComponent
2. FooterComponent
3. SidebarComponent
4. LoadingSpinnerComponent
5. PaginationComponent
6. ConfirmDialogComponent
7. ImageUploaderComponent
8. SearchBarComponent
9. FilterSidebarComponent
10. RatingStarsComponent
11. PriceDisplayComponent
12. CartIconComponent
13. NotificationBellComponent
14. BreadcrumbComponent
15. EmptyStateComponent

#### Auth Components (5)
1. LoginComponent
2. RegisterComponent
3. ForgotPasswordComponent
4. ResetPasswordComponent
5. VerifyEmailComponent

#### Dashboard Components (3)
1. ClientDashboardComponent
2. AdminDashboardComponent
3. FranchiseDashboardComponent

#### Service Components (5)
1. ServiceListComponent
2. ServiceDetailComponent
3. ServiceFilterComponent
4. ServiceCardComponent
5. ServiceScheduleComponent

#### Product Components (5)
1. ProductListComponent
2. ProductDetailComponent
3. ProductFilterComponent
4. ProductCardComponent
5. ProductGalleryComponent

#### Cart Components (3)
1. CartListComponent
2. CartItemComponent
3. CartSummaryComponent

#### Checkout Components (5)
1. CheckoutPageComponent
2. AddressSelectionComponent
3. PaymentSelectionComponent
4. OrderSummaryComponent
5. OrderConfirmationComponent

#### Order Components (5)
1. OrderListComponent
2. OrderDetailComponent
3. OrderTrackingComponent
4. OrderCancelComponent
5. OrderInvoiceComponent

#### Traffic Challan Components (4)
1. ChallanSearchComponent
2. ChallanListComponent
3. ChallanDetailComponent
4. ChallanPaymentComponent

#### Profile Components (5)
1. UserProfileComponent
2. EditProfileComponent
3. AddressListComponent
4. AddressFormComponent
5. SettingsComponent

#### Wallet Components (3)
1. WalletBalanceComponent
2. TransactionListComponent
3. AddFundsComponent

#### Review Components (3)
1. AddReviewComponent
2. ReviewListComponent
3. ReviewCardComponent

#### Support Components (4)
1. TicketListComponent
2. TicketDetailComponent
3. CreateTicketComponent
4. TicketMessageComponent

#### Admin Components (50+)
- Dashboard widgets
- User management CRUD
- Order management
- Service management CRUD
- Product management CRUD
- Category management CRUD
- Brand/Car management
- Staff management
- Coupon management
- Offer management
- Review moderation
- Settings panels
- Payment gateway config
- Language management
- Page/Menu/Widget builders

---

## 8. Phase 7: Third-Party Integrations

### 8.1 Payment Gateway Integration

Each payment gateway needs:
1. Server-side integration (Node.js)
2. Client-side SDK integration (Angular)
3. Webhook handlers
4. Error handling

#### Payment Gateways to Integrate (17)
1. Stripe
2. PayPal
3. Razorpay
4. PayTM
5. Cashfree
6. Midtrans
7. Mollie
8. PayFast
9. Instamojo
10. MercadoPago
11. ZitoPay
12. SquareUp
13. CinetPay
14. PayTabs
15. BillPlz
16. Toyyib Pay
17. Flutterwave
18. Paystack

### 8.2 Firebase Integration

```javascript
// nodejs-backend/src/integrations/firebase.integration.js
const admin = require('firebase-admin');

const serviceAccount = require('../../firebase-config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendPushNotification = async (token, title, body, data = {}) => {
  const message = {
    notification: { title, body },
    data,
    token
  };

  try {
    const response = await admin.messaging().send(message);
    return { success: true, response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const sendMulticastNotification = async (tokens, title, body, data = {}) => {
  const message = {
    notification: { title, body },
    data,
    tokens
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    return { success: true, response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { sendPushNotification, sendMulticastNotification };
```

### 8.3 Twilio SMS Integration

```javascript
// nodejs-backend/src/integrations/twilio.integration.js
const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSMS = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to
    });
    return { success: true, sid: message.sid };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const sendOTP = async (to, otp) => {
  const body = `Your OTP for JusMoto is: ${otp}. Valid for 10 minutes.`;
  return sendSMS(to, body);
};

const sendWhatsApp = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${to}`
    });
    return { success: true, sid: message.sid };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { sendSMS, sendOTP, sendWhatsApp };
```

### 8.4 InstantPay Traffic Challan Integration

```javascript
// nodejs-backend/src/integrations/instantpay.integration.js
const axios = require('axios');
const crypto = require('crypto');

class InstantPayService {
  constructor() {
    this.baseUrl = process.env.INSTANTPAY_BASE_URL;
    this.clientId = process.env.INSTANTPAY_CLIENT_ID;
    this.clientSecret = process.env.INSTANTPAY_CLIENT_SECRET;
    this.encryptionKey = process.env.INSTANTPAY_ENCRYPTION_KEY;
    this.useMock = process.env.INSTANTPAY_USE_MOCK === 'true';
  }

  getHeaders() {
    return {
      'X-Ipay-Client-Id': this.clientId,
      'X-Ipay-Client-Secret': this.clientSecret,
      'X-Ipay-Auth-Code': process.env.INSTANTPAY_AUTH_CODE,
      'Content-Type': 'application/json'
    };
  }

  async fetchChallansByVehicle(vehicleNumber) {
    if (this.useMock) {
      return this.getMockChallans(vehicleNumber);
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/traffic/challan/fetch`,
        { vehicleNumber },
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      throw new Error(`InstantPay API error: ${error.message}`);
    }
  }

  async payChallan(challanNumber, amount, paymentMethod) {
    if (this.useMock) {
      return this.getMockPaymentResponse(challanNumber, amount);
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/traffic/challan/pay`,
        { challanNumber, amount, paymentMethod },
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      throw new Error(`InstantPay payment error: ${error.message}`);
    }
  }

  getMockChallans(vehicleNumber) {
    return {
      success: true,
      data: [
        {
          challanNumber: 'CH' + Date.now(),
          vehicleNumber,
          offenceType: 'Over Speeding',
          offenceDescription: 'Vehicle exceeded speed limit by 20 km/h',
          fineAmount: 500,
          offenceLocation: 'Delhi - Ring Road',
          offenceDate: new Date().toISOString(),
          dueDate: new Date(Date.now() + 30*24*60*60*1000).toISOString(),
          status: 'pending'
        }
      ]
    };
  }

  getMockPaymentResponse(challanNumber, amount) {
    return {
      success: true,
      data: {
        transactionId: 'TXN' + Date.now(),
        challanNumber,
        amount,
        status: 'paid',
        paidAt: new Date().toISOString()
      }
    };
  }
}

module.exports = new InstantPayService();
```

### 8.5 Social Login Integration

```javascript
// nodejs-backend/src/integrations/google.integration.js
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    return {
      success: true,
      user: {
        googleId: payload['sub'],
        email: payload['email'],
        firstName: payload['given_name'],
        lastName: payload['family_name'],
        image: payload['picture'],
        emailVerified: payload['email_verified']
      }
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { verifyGoogleToken };
```

---

## 9. Phase 8: Testing & Deployment

### 9.1 Backend Testing

```javascript
// Test setup with Jest
// nodejs-backend/tests/auth.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Authentication', () => {
  describe('POST /api/v1/auth/register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          password: 'password123'
        });
      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.accessToken).toBeDefined();
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('should login existing user', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'john@example.com',
          password: 'password123'
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });
});
```

### 9.2 Frontend Testing

```typescript
// Angular component testing
// src/app/features/auth/login/login.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../core/services/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login on submit', () => {
    authService.login.and.returnValue(of({ success: true, data: {} }));
    component.email = 'test@example.com';
    component.password = 'password';
    component.onSubmit();
    expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
```

### 9.3 Deployment Configuration

#### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./angular-frontend
    ports:
      - "4200:80"
    depends_on:
      - backend
    environment:
      - API_URL=http://backend:3000

  backend:
    build: ./nodejs-backend
    ports:
      - "3000:3000"
    depends_on:
      - mysql
      - redis
    environment:
      - NODE_ENV=production
      - DB_HOST=mysql
      - REDIS_HOST=redis
    volumes:
      - ./nodejs-backend/uploads:/app/uploads

  mysql:
    image: mysql:8
    environment:
      - MYSQL_ROOT_PASSWORD=secret
      - MYSQL_DATABASE=jusmoto
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  mysql_data:
```

---

## 10. Database Schema Reference

### Tables Overview (103 migrations → 57+ tables)

| Table | Description | Priority |
|-------|-------------|----------|
| users | User accounts | 1 |
| admins | Admin/franchise accounts | 1 |
| roles | User roles | 1 |
| permissions | Role permissions | 1 |
| role_has_permissions | Role-permission mapping | 1 |
| model_has_roles | User-role mapping | 1 |
| user_locations | User addresses | 1 |
| user_selected_cars | User vehicles | 1 |
| user_cart_items | Shopping cart | 1 |
| user_notifications | Notifications | 1 |
| categories | Main categories | 2 |
| sub_categories | Subcategories | 2 |
| child_categories | Third-level categories | 2 |
| brands | Vehicle brands | 2 |
| cars | Car models | 2 |
| variants | Car variants | 2 |
| engine_types | Engine types | 2 |
| fual_types | Fuel types | 2 |
| services | Service listings | 2 |
| service_includes | Service inclusions | 2 |
| service_excludes | Service exclusions | 2 |
| service_addons | Add-on services | 2 |
| service_faqs | Service FAQs | 2 |
| service_cars | Service-car mapping | 2 |
| service_additionals | Service variants | 2 |
| orders | Orders | 3 |
| order_items | Order line items | 3 |
| order_locations | Order addresses | 3 |
| order_complete_requests | Completion verification | 3 |
| order_cancellation_policies | Cancellation rules | 3 |
| refunded_orders | Refunds | 3 |
| schedules | Service schedules | 3 |
| after_booking_steps | Post-order steps | 3 |
| traffic_challans | Traffic violations | 4 |
| reviews | Service reviews | 4 |
| staff | Service technicians | 4 |
| wallets | User wallets | 4 |
| wallet_transactions | Wallet transactions | 4 |
| coupons | Discount coupons | 4 |
| offers | Promotional offers | 4 |
| offer_services | Offer-service mapping | 4 |
| favorite_items | User favorites | 4 |
| states | States | 5 |
| cities | Cities | 5 |
| areas | Areas | 5 |
| admin_outlet_locations | Franchise outlets | 5 |
| taxes | Tax configurations | 5 |
| delivery_charges | Delivery charges | 5 |
| sliders | Homepage sliders | 6 |
| languages | Languages | 6 |
| static_options | Configuration | 6 |
| pages | Dynamic pages | 6 |
| menus | Navigation menus | 6 |
| widgets | Page widgets | 6 |
| blog_posts | Blog articles | 6 |
| tickets | Support tickets | 6 |
| ticket_messages | Ticket messages | 6 |
| departments | Support departments | 6 |
| payment_gateways | Payment configs | 6 |
| refund_gateways | Refund configs | 6 |
| account_deactivates | Deactivation history | 6 |

---

## 11. API Endpoints Reference

### Complete API Endpoint Count: 200+

| Category | Endpoints | Priority |
|----------|-----------|----------|
| Authentication | 10 | 1 |
| User Management | 20 | 1 |
| Services & Products | 15 | 2 |
| Cart & Checkout | 10 | 2 |
| Orders | 15 | 2 |
| Traffic Challan | 6 | 3 |
| Payments | 10 | 3 |
| Franchise | 20 | 3 |
| Wallet | 5 | 4 |
| Reviews | 5 | 4 |
| Support | 8 | 4 |
| Coupons | 5 | 4 |
| Favorites | 4 | 4 |
| Notifications | 5 | 4 |
| Admin Dashboard | 10 | 5 |
| Admin Users | 15 | 5 |
| Admin Orders | 15 | 5 |
| Admin Services | 15 | 5 |
| Admin Products | 15 | 5 |
| Admin Categories | 12 | 5 |
| Admin Settings | 20 | 6 |

---

## Execution Timeline

### Sprint 1: Foundation (Backend Setup)
- [ ] Initialize Node.js project
- [ ] Set up Sequelize and database connection
- [ ] Create core models (User, Admin, Role, Permission)
- [ ] Implement JWT authentication
- [ ] Create authentication endpoints

### Sprint 2: Core Models & APIs
- [ ] Create catalog models (Category, Service, Product, Brand, Car)
- [ ] Create order models (Order, OrderItem, OrderLocation)
- [ ] Implement service/product APIs
- [ ] Implement cart APIs

### Sprint 3: Order & Payment
- [ ] Implement order creation and management
- [ ] Integrate Stripe payment gateway
- [ ] Integrate Razorpay payment gateway
- [ ] Implement webhook handlers

### Sprint 4: Traffic Challan & Features
- [ ] Create TrafficChallan model
- [ ] Integrate InstantPay API
- [ ] Implement challan fetch and payment
- [ ] Implement wallet system

### Sprint 5: Additional Features
- [ ] Implement reviews system
- [ ] Implement support tickets
- [ ] Implement coupon system
- [ ] Implement favorites

### Sprint 6: Franchise & Admin
- [ ] Implement franchise dashboard APIs
- [ ] Implement franchise order management
- [ ] Create admin management APIs
- [ ] Implement settings APIs

### Sprint 7: Angular Setup
- [ ] Initialize Angular 17 project
- [ ] Create core services and interceptors
- [ ] Create shared components
- [ ] Implement routing

### Sprint 8: Angular Auth & Dashboard
- [ ] Create auth components (login, register, etc.)
- [ ] Create client dashboard
- [ ] Create profile management
- [ ] Create address management

### Sprint 9: Angular Services & Products
- [ ] Create service listing and detail pages
- [ ] Create product listing and detail pages
- [ ] Implement filtering and search
- [ ] Create cart components

### Sprint 10: Angular Checkout & Orders
- [ ] Create checkout flow
- [ ] Integrate payment gateways (frontend)
- [ ] Create order listing and details
- [ ] Create order tracking

### Sprint 11: Angular Traffic Challan
- [ ] Create challan search component
- [ ] Create challan list and details
- [ ] Implement challan payment flow
- [ ] Create challan history

### Sprint 12: Angular Admin Dashboard
- [ ] Create admin layout
- [ ] Create admin dashboard widgets
- [ ] Create user management pages
- [ ] Create order management pages

### Sprint 13: Angular Admin Features
- [ ] Create service/product management
- [ ] Create category management
- [ ] Create settings pages
- [ ] Create reports

### Sprint 14: Testing & Deployment
- [ ] Write backend unit tests
- [ ] Write frontend unit tests
- [ ] Set up CI/CD pipeline
- [ ] Deploy to production

---

## Notes

1. **Database Migration**: The existing MySQL database from Laravel can be reused. Sequelize will connect to the same database.

2. **API Compatibility**: All API endpoints should maintain the same response format as the Laravel API to ensure smooth transition.

3. **File Uploads**: Existing uploaded files in Laravel storage can be migrated to the Node.js uploads directory.

4. **Environment Variables**: All environment variables from Laravel .env should be mapped to Node.js .env.

5. **Payment Webhooks**: Update webhook URLs in all payment gateway dashboards to point to Node.js endpoints.

6. **Firebase**: The same Firebase project can be used; just download new service account credentials.

7. **Social Login**: Keep the same Google/Facebook OAuth credentials; update callback URLs.

---

## Success Criteria

- [ ] All 200+ API endpoints working correctly
- [ ] All 57 database models properly defined with relationships
- [ ] All 17 payment gateways integrated and tested
- [ ] All Angular components rendering correctly
- [ ] All forms validating properly
- [ ] All authentication flows working
- [ ] All authorization/permissions enforced
- [ ] All third-party integrations working
- [ ] All webhooks processing correctly
- [ ] All notifications sending
- [ ] All emails sending
- [ ] All SMS/OTP working
- [ ] Zero critical bugs
- [ ] Performance within acceptable limits
- [ ] Mobile responsive design
- [ ] Cross-browser compatibility
