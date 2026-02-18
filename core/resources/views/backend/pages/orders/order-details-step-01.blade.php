<div class="col-xl-6 col-lg-6 col-md-6 col-12 mt-4">
    <div class="order-details-card">
        <div class="card-header">
            <h4 class="card-title">
                <i class="las la-shopping-cart"></i>
                {{ __('Order Details') }}
            </h4>
        </div>
        
        <div class="card-body">
            <div class="details-grid">
                <div class="detail-item">
                    <span class="detail-label">{{ __('Order ID:') }}</span>
                    <span class="detail-value">#{{ $order->id }}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Booking Date:') }}</span>
                    <span class="detail-value">{{ $order->date }}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Schedule:') }}</span>
                    <span class="detail-value">{{ $order->schedule }}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Delivery Mode:') }}</span>
                    <span class="detail-value">{{ $order->delivery_mode }}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Status:') }}</span>
                    <span class="detail-value">
                        <x-status.main-order-status :status="$order->status"/>
                    </span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Payment Gateway:') }}</span>
                    <span class="detail-value">{{ ucwords(str_replace("_", " ", $order->payment_gateway)) }}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Payment Status:') }}</span>
                    <span class="detail-value">
                        @php
                            $flag = "";
                            if($order->payment_status == 0) {
                                $flag = "pending";
                            } elseif($order->payment_status == 1) {
                                $flag = "completed";
                            }
                        @endphp
                        <span class="payment-status {{ $flag }}">{{ ucwords($flag) }}</span>
                    </span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">{{ __('Invoice No:') }}</span>
                    <span class="detail-value">{{ $order->invoice_number }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== ORDER DETAILS CARD STYLES ===== */

:root {
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --red: #e31b23;
    --red-light: #fee2e2;
    --red-dark: #b91c1c;
    --green-light: #d1fae5;
    --green-dark: #047857;
    --yellow-light: #fef3c7;
    --yellow-dark: #b45309;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Order Details Card */
.order-details-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    height: 100%;
}

/* Card Header */
.card-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-800);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.card-title i {
    color: var(--red);
    font-size: 20px;
    background: var(--red-light);
    padding: 6px;
    border-radius: 8px;
}

/* Card Body */
.card-body {
    padding: 20px;
}

/* Details Grid */
.details-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Detail Item */
.detail-item {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px dashed var(--gray-200);
}

.detail-item:last-child {
    border-bottom: none;
}

.detail-label {
    width: 130px;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray-600);
}

.detail-value {
    flex: 1;
    font-size: 14px;
    color: var(--gray-800);
}

/* Payment Status */
.payment-status {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 40px;
    font-size: 12px;
    font-weight: 500;
}

.payment-status.pending {
    background: var(--yellow-light);
    color: var(--yellow-dark);
}

.payment-status.completed {
    background: var(--green-light);
    color: var(--green-dark);
}

/* Responsive */
@media (max-width: 768px) {
    .detail-item {
        flex-direction: column;
        gap: 4px;
    }
    
    .detail-label {
        width: 100%;
    }
}

/* Preserve original classes */
.customer__details__author__item,
.customer__details__author__item__header,
.customer__details__author__item__inner,
.customer__account__details,
.customer__account__details__item,
.customer__account__details__item__flex {
    /* Preserved for compatibility */
}

.p-2 {
    padding: 8px;
}

.radius-10 {
    border-radius: var(--radius);
}

.mt-4 {
    margin-top: 20px;
}
</style>