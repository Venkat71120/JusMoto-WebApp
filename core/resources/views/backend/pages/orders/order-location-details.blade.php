<h4 class="section-title">
    <i class="las la-map-marker"></i>
    {{ __('Client Location') }}
</h4>

<!-- Location Card -->
<div class="location-card mt-4">
    <div class="location-grid">
        <!-- Address -->
        <div class="location-item">
            <span class="location-label">{{ __('Address') }}</span>
            <span class="location-value">{{ $order->OrderLocations?->address ?? 'N/A' }}</span>
        </div>

        <!-- State -->
        <div class="location-item">
            <span class="location-label">{{ __('State') }}</span>
            <span class="location-value">{{ $order->OrderLocations?->state?->state ?? 'N/A' }}</span>
        </div>

        <!-- City -->
        <div class="location-item">
            <span class="location-label">{{ __('City') }}</span>
            <span class="location-value">{{ $order->OrderLocations?->city?->city ?? 'N/A' }}</span>
        </div>

        <!-- Area -->
        <div class="location-item">
            <span class="location-label">{{ __('Area') }}</span>
            <span class="location-value">{{ $order->OrderLocations?->area?->area ?? 'N/A' }}</span>
        </div>

        <!-- Post Code -->
        <div class="location-item">
            <span class="location-label">{{ __('Post Code') }}</span>
            <span class="location-value">{{ $order->OrderLocations?->post_code ?? 'N/A' }}</span>
        </div>

        <!-- Latitude -->
        <div class="location-item">
            <span class="location-label">{{ __('Latitude') }}</span>
            <span class="location-value coordinates">{{ $order->OrderLocations?->latitude ?? 'N/A' }}</span>
        </div>

        <!-- Longitude -->
        <div class="location-item">
            <span class="location-label">{{ __('Longitude') }}</span>
            <span class="location-value coordinates">{{ $order->OrderLocations?->longitude ?? 'N/A' }}</span>
        </div>
    </div>
</div>

<style>
/* ===== CLIENT LOCATION STYLES ===== */

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
    --transition: all 0.2s ease;
}

/* Section Title */
.section-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray-800);
    margin: 24px 0 16px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    padding-left: 16px;
}

.section-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background: var(--red);
    border-radius: 4px;
}

.section-title i {
    color: var(--red);
    font-size: 22px;
    margin-right: 4px;
}

/* Location Card */
.location-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    padding: 24px;
    box-shadow: var(--shadow-sm);
}

/* Location Grid */
.location-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Location Item */
.location-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    transition: var(--transition);
}

.location-item:hover {
    border-color: var(--red);
    box-shadow: 0 2px 8px rgba(227, 27, 35, 0.05);
}

/* Location Label */
.location-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

/* Location Value */
.location-value {
    font-size: 15px;
    font-weight: 500;
    color: var(--gray-800);
    word-break: break-word;
}

.location-value.coordinates {
    font-family: monospace;
    font-size: 14px;
    color: var(--red);
}

/* Responsive */
@media (max-width: 768px) {
    .section-title {
        font-size: 18px;
        margin: 16px 0 12px 0;
    }
    
    .location-card {
        padding: 16px;
    }
    
    .location-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    
    .location-item {
        padding: 10px;
    }
    
    .location-value {
        font-size: 14px;
    }
}

/* Preserve original classes */
.tableStyle_one,
.table-responsive,
.table,
.orderItemTable {
    /* Preserved for compatibility */
}

.mt-4 {
    margin-top: 20px;
}
</style>