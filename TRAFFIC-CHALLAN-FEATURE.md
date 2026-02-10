# Traffic Challan Payment Feature

## Overview

This feature allows users to check and pay their traffic challans directly through the JusMoto application. The system integrates with traffic challan APIs to fetch real-time challan data and process payments.

---

## Features Implemented

### 1. **Fetch Traffic Challans**
- Users can fetch traffic challans by entering their vehicle registration number
- System retrieves all pending challans for the vehicle
- Displays challan details including fine amount, offence type, location, and due date

### 2. **View Challan History**
- Users can view their complete challan payment history
- Filter challans by status (pending/paid/cancelled)
- Pagination support for large datasets

### 3. **Pay Challans**
- Users can pay challans directly through the app
- Multiple payment methods supported:
  - Cash
  - Card
  - Wallet
  - UPI
  - Net Banking
- Payment confirmation with reference number

### 4. **Dashboard Statistics**
- Total challans count
- Pending vs paid challans
- Total pending amount
- Total paid amount

---

## Database Schema

### `traffic_challans` Table

| Column | Type | Description |
|--------|------|-------------|
| id | bigint | Primary key |
| user_id | bigint | Foreign key to users table |
| vehicle_number | string | Vehicle registration number |
| challan_number | string | Unique challan identifier |
| offence_type | string | Type of traffic violation |
| offence_description | text | Detailed description |
| fine_amount | decimal(10,2) | Total fine amount |
| paid_amount | decimal(10,2) | Amount paid |
| offence_location | string | Location of offence |
| offence_date | datetime | Date and time of offence |
| due_date | datetime | Payment due date |
| status | enum | pending, paid, cancelled |
| payment_status | enum | unpaid, paid, partial |
| payment_method | string | Payment method used |
| payment_reference | string | Payment reference number |
| payment_gateway_response | string | Gateway response |
| paid_at | datetime | Payment timestamp |
| remarks | text | Additional remarks |
| issuing_authority | string | Police department name |
| api_reference_id | string | External API reference |
| timestamps | timestamps | Created/Updated at |
| deleted_at | timestamp | Soft delete timestamp |

---

## API Endpoints

All endpoints are prefixed with `/api/v1/user/traffic-challan/` and require authentication via Sanctum.

### 1. Fetch Challans

**Endpoint:** `POST /api/v1/user/traffic-challan/fetch`

**Request:**
```json
{
  "vehicle_number": "KA01AB1234"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Challans fetched successfully",
  "data": {
    "vehicle_number": "KA01AB1234",
    "total_challans": 3,
    "total_fine_amount": 3000.00,
    "challans": [
      {
        "id": 1,
        "challan_number": "CH123456",
        "offence_type": "Over Speeding",
        "fine_amount": 1000.00,
        "offence_date": "2026-02-05 14:30:00",
        "due_date": "2026-03-07 00:00:00",
        "status": "pending"
      }
    ]
  }
}
```

### 2. View Challan History

**Endpoint:** `GET /api/v1/user/traffic-challan/history?status=pending`

**Query Parameters:**
- `status` (optional): Filter by status (pending/paid/cancelled)
- `page` (optional): Page number for pagination

**Response:**
```json
{
  "success": true,
  "message": "Challans retrieved successfully",
  "data": {
    "current_page": 1,
    "data": [...],
    "total": 10
  }
}
```

### 3. Get Challan Details

**Endpoint:** `GET /api/v1/user/traffic-challan/details/{id}`

**Response:**
```json
{
  "success": true,
  "message": "Challan details retrieved successfully",
  "data": {
    "id": 1,
    "challan_number": "CH123456",
    "vehicle_number": "KA01AB1234",
    "offence_type": "Over Speeding",
    "offence_description": "Driving at 80 km/h in 60 km/h zone",
    "fine_amount": 1000.00,
    "paid_amount": 0.00,
    "offence_location": "MG Road, Bangalore",
    "offence_date": "2026-02-05 14:30:00",
    "due_date": "2026-03-07 00:00:00",
    "status": "pending",
    "payment_status": "unpaid"
  }
}
```

### 4. Pay Challan

**Endpoint:** `POST /api/v1/user/traffic-challan/pay`

**Request:**
```json
{
  "challan_id": 1,
  "payment_method": "upi"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Challan paid successfully",
  "data": {
    "challan": {
      "id": 1,
      "status": "paid",
      "payment_status": "paid",
      "paid_amount": 1000.00,
      "payment_reference": "PAY123456789",
      "paid_at": "2026-02-10 15:30:00"
    },
    "payment_details": {
      "payment_reference": "PAY123456789",
      "payment_status": "success"
    }
  }
}
```

### 5. Get Statistics

**Endpoint:** `GET /api/v1/user/traffic-challan/stats`

**Response:**
```json
{
  "success": true,
  "message": "Statistics retrieved successfully",
  "data": {
    "total_challans": 10,
    "pending_challans": 3,
    "paid_challans": 7,
    "total_pending_amount": 3000.00,
    "total_paid_amount": 7000.00
  }
}
```

---

## Configuration

Add these environment variables to your `.env` file:

```env
# Traffic Challan API Configuration
TRAFFIC_CHALLAN_API_URL=https://api.instantpay.in
TRAFFIC_CHALLAN_API_KEY=your_api_key_here
TRAFFIC_CHALLAN_API_SECRET=your_api_secret_here
TRAFFIC_CHALLAN_USE_MOCK=true
```

### Configuration Options:

- **TRAFFIC_CHALLAN_API_URL**: The base URL for the traffic challan API
- **TRAFFIC_CHALLAN_API_KEY**: Your API key from the provider
- **TRAFFIC_CHALLAN_API_SECRET**: Your API secret from the provider
- **TRAFFIC_CHALLAN_USE_MOCK**: Set to `true` to use mock data (for testing), `false` for production

---

## Available Traffic Challan APIs in India

### 1. InstantPay API
- **Website**: https://www.instantpay.in
- **Developer Portal**: https://developers.instantpay.in
- **Features**:
  - Real-time challan verification
  - Vehicle challan lookup by registration number
  - Payment processing support
  - Comprehensive API documentation

**Getting Started:**
1. Create account at InstantPay
2. Navigate to developer dashboard
3. Generate API credentials (Key & Secret)
4. Choose appropriate service plan
5. Integrate using their documentation

### 2. APIMall Challan API
- **Website**: https://apimall.in
- **Features**:
  - Vehicle challan details API
  - Instant verification
  - Pan-India coverage

### 3. Official e-Challan Parivahan
- **Website**: https://echallan.parivahan.gov.in
- **Note**: This is the official government portal. For commercial integration, you'll need to go through official channels or use authorized API providers like InstantPay.

---

## Installation & Setup

### 1. Run Database Migration

```bash
php artisan migrate
```

This will create the `traffic_challans` table in your database.

### 2. Configure Environment

Update your `.env` file with the traffic challan API credentials (see Configuration section above).

### 3. Test with Mock Data

For development and testing, keep `TRAFFIC_CHALLAN_USE_MOCK=true`. The system will generate realistic mock data for testing.

### 4. Switch to Production

When ready for production:
1. Sign up for a traffic challan API provider (e.g., InstantPay)
2. Get your API credentials
3. Update `.env` with real credentials
4. Set `TRAFFIC_CHALLAN_USE_MOCK=false`

---

## Testing

### Using Mock Data (Development)

The system comes with a built-in mock data generator that simulates real API responses. This is perfect for:
- Development without API costs
- Testing the UI/UX
- Demo purposes

### Mock Data Features:
- Generates 3 sample challans for any vehicle number
- Includes various offence types (Over Speeding, Red Light Violation, No Helmet)
- Realistic fine amounts (₹500 - ₹1500)
- Proper dates and timestamps
- Mock payment processing

### Example Test Flow:

1. **Fetch Challans**:
   ```bash
   curl -X POST http://your-domain.com/api/v1/user/traffic-challan/fetch \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"vehicle_number": "KA01AB1234"}'
   ```

2. **Pay Challan**:
   ```bash
   curl -X POST http://your-domain.com/api/v1/user/traffic-challan/pay \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"challan_id": 1, "payment_method": "upi"}'
   ```

---

## Files Created/Modified

### New Files:
1. `database/migrations/2026_02_10_153000_create_traffic_challans_table.php` - Database migration
2. `app/Models/TrafficChallan.php` - Eloquent model
3. `app/Services/TrafficChallanService.php` - Service class for API integration
4. `app/Http/Controllers/Api/TrafficChallan/TrafficChallanController.php` - API controller

### Modified Files:
1. `routes/api.php` - Added traffic challan API routes

---

## Security Considerations

1. **Authentication**: All endpoints require Sanctum authentication
2. **User Isolation**: Users can only access their own challans
3. **Payment Verification**: Payment status is verified before marking challan as paid
4. **API Credentials**: Store API keys securely in `.env`, never commit them
5. **Input Validation**: All inputs are validated using Laravel's validation

---

## Future Enhancements

1. **Email/SMS Notifications**:
   - Send notification when new challans are found
   - Send payment confirmation
   - Send reminder before due date

2. **Multiple Vehicles**:
   - Allow users to save multiple vehicles
   - Quick fetch for saved vehicles

3. **Payment Gateway Integration**:
   - Integrate with Razorpay/other payment gateways
   - Support for EMI payments for large fines

4. **Reminders**:
   - Push notifications for pending challans
   - Reminders before due date

5. **Reports**:
   - Monthly challan reports
   - Downloadable payment receipts

6. **Admin Panel**:
   - View all user challans
   - Generate reports
   - Monitor payment failures

---

## Support & Documentation

### Traffic Challan API Resources:
- [InstantPay Traffic Challan API Guide](https://www.instantpay.in/blog/2024/10/25/traffic-challan-api-in-india/)
- [InstantPay Developer Documentation](https://developers.instantpay.in/)
- [Official e-Challan Portal](https://echallan.parivahan.gov.in/)
- [Challan API Documentation - APIMall](https://apimall.in/products/challan/vehicle-challan-details-api)

### Laravel Resources:
- [Laravel 12 Documentation](https://laravel.com/docs/12.x)
- [Laravel Sanctum Authentication](https://laravel.com/docs/12.x/sanctum)
- [Laravel Migrations](https://laravel.com/docs/12.x/migrations)

---

## Developer Notes

### Payment Flow:
1. User fetches challans by vehicle number
2. Challans are saved/updated in local database
3. User selects a challan to pay
4. Payment request is sent to API
5. On successful payment, challan status is updated
6. Payment reference is stored for future reference

### API Service Layer:
The `TrafficChallanService` class abstracts the API integration:
- Handles both mock and real API calls
- Provides consistent response format
- Logs errors for debugging
- Can be easily swapped with different API providers

### Mock Data Generator:
The mock data is generated based on the vehicle number using MD5 hashing to ensure consistency - the same vehicle number will always return the same mock challans.

---

**Feature Implementation Date**: February 10, 2026
**Branch**: `traffic-challan`
**Status**: Ready for Testing
**Next Steps**: Test locally, integrate with frontend, deploy to staging
