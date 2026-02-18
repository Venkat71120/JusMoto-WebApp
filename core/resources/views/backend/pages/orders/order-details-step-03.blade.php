<div class="col-xl-6 col-lg-6 col-md-6 col-12 mt-4">
    <div class="client-details-card">
        <div class="card-header">
            <h4 class="card-title">
                <i class="las la-user-circle"></i>
                {{ __('Client Details') }}
            </h4>
        </div>
        
        <div class="card-body">
            <div class="details-list">
                <!-- Name -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Name:') }}</span>
                    <span class="detail-value">{{ $order->user?->first_name ?? 'N/A' }}</span>
                </div>

                <!-- Email -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Email:') }}</span>
                    <span class="detail-value">{{ $order->user?->email ?? 'N/A' }}</span>
                </div>

                <!-- Phone -->
                <div class="detail-row">
                    <span class="detail-label">{{ __('Phone:') }}</span>
                    <span class="detail-value">{{ $order->user?->phone ?? 'N/A' }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== CLIENT DETAILS CARD STYLES ===== */

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
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Client Details Card */
.client-details-card {
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
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed var(--gray-200);
}

.detail-row:last-child {
    border-bottom: none;
}

/* Label */
.detail-label {
    width: 80px;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray-600);
}

/* Value */
.detail-value {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-800);
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