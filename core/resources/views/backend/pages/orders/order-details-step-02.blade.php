<div class="col-xl-6 col-lg-6 col-md-6 col-12 mt-4">
    <div class="amount-details-card">
        <div class="card-header">
            <h4 class="card-title">
                <i class="las la-calculator"></i>
                {{ __('Amount Details') }}
            </h4>
        </div>
        
        <div class="card-body">
            <div class="details-list">
                <!-- Delivery Charge -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Delivery Charge:') }}</span>
                    <span class="detail-value">{{ float_amount_with_currency_symbol($order->delivery_charge) }}</span>
                </div>

                <!-- Sub Total -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Sub Total:') }}</span>
                    <span class="detail-value">{{ float_amount_with_currency_symbol($order->sub_total) }}</span>
                </div>

                @if(!empty($order->coupon_code) && !empty($order->coupon_amount))
                <!-- Coupon Code -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Coupon Code:') }}</span>
                    <span class="detail-value coupon-code">{{ $order->coupon_code }}</span>
                </div>

                <!-- Coupon Type -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Coupon Type:') }}</span>
                    <span class="detail-value">{{ $order->coupon_type }}</span>
                </div>

                <!-- Coupon Amount -->
                <div class="detail-row discount">
                    <span class="detail-label">{{ __('Coupon Amount:') }}</span>
                    <span class="detail-value">
                        <span class="discount-symbol">-</span>
                        {{ float_amount_with_currency_symbol($order->coupon_amount) }}
                    </span>
                </div>
                @endif

                <!-- Tax -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Tax:') }}</span>
                    <span class="detail-value">
                        <span class="plus-symbol">+</span>
                        {{ float_amount_with_currency_symbol($order->tax) }}
                    </span>
                </div>

                <!-- Total -->
                <div class="detail-row total">
                    <span class="detail-label">{{ __('Total:') }}</span>
                    <span class="detail-value total-amount">{{ float_amount_with_currency_symbol($order->total) }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== AMOUNT DETAILS CARD STYLES ===== */

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
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Amount Details Card */
.amount-details-card {
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

/* Details List */
.details-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Detail Row */
.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed var(--gray-200);
}

.detail-row:last-child {
    border-bottom: none;
}

.detail-row.discount {
    background: var(--red-light);
    margin: 4px -8px;
    padding: 8px 12px;
    border-radius: var(--radius);
    border-bottom: none;
}

.detail-row.total {
    margin-top: 8px;
    padding-top: 12px;
    border-top: 2px solid var(--gray-200);
    border-bottom: none;
    font-weight: 600;
}

/* Labels */
.detail-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-600);
}

/* Values */
.detail-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-800);
}

.coupon-code {
    font-family: monospace;
    font-weight: 600;
    color: var(--red);
    background: var(--red-light);
    padding: 4px 8px;
    border-radius: 4px;
}

.discount-symbol,
.plus-symbol {
    font-weight: 600;
    margin-right: 2px;
}

.discount-symbol {
    color: var(--red);
}

.plus-symbol {
    color: var(--green-dark);
}

.total-amount {
    font-size: 16px;
    font-weight: 700;
    color: var(--red);
}

/* Responsive */
@media (max-width: 768px) {
    .detail-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
    
    .detail-label {
        width: 100%;
    }
    
    .detail-row.discount {
        flex-direction: row;
        align-items: center;
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