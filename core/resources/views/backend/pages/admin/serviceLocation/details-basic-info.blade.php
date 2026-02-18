<div class="outlet-details-section">
    <div class="details-grid">
        <!-- Outlet Name -->
        <div class="detail-item">
            <span class="detail-label">{{ __('Outlet Name:') }}</span>
            <span class="detail-value">{{ $outlet?->name }}</span>
        </div>

        <!-- Address -->
        <div class="detail-item">
            <span class="detail-label">{{ __('Address:') }}</span>
            <span class="detail-value">{{ $outlet?->address }}</span>
        </div>

        <!-- State -->
        <div class="detail-item">
            <span class="detail-label">{{ __('State:') }}</span>
            <span class="detail-value">{{ $outlet?->state?->state }}</span>
        </div>

        <!-- City -->
        <div class="detail-item">
            <span class="detail-label">{{ __('City:') }}</span>
            <span class="detail-value">{{ $outlet?->city?->city }}</span>
        </div>

        <!-- Area -->
        <div class="detail-item">
            <span class="detail-label">{{ __('Area:') }}</span>
            <span class="detail-value">{{ $outlet?->area?->area }}</span>
        </div>

        <!-- Longitude -->
        <div class="detail-item">
            <span class="detail-label">{{ __('Longitude:') }}</span>
            <span class="detail-value">{{ $outlet?->longitude }}</span>
        </div>

        <!-- Latitude -->
        <div class="detail-item">
            <span class="detail-label">{{ __('Latitude:') }}</span>
            <span class="detail-value">{{ $outlet?->latitude }}</span>
        </div>

        <!-- Zip Code -->
        <div class="detail-item">
            <span class="detail-label">{{ __('Zip Code:') }}</span>
            <span class="detail-value">{{ $outlet?->post_code }}</span>
        </div>
    </div>
</div>

<style>
/* ===== CLEAN OUTLET DETAILS SECTION ===== */
/* No dark mode - just clean, modern styling */

.outlet-details-section {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 24px;
    margin-top: 16px;
}

.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.detail-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 16px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.detail-item:hover {
    border-color: #e31b23;
    box-shadow: 0 2px 8px rgba(227, 27, 35, 0.05);
}

.detail-label {
    font-size: 12px;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.detail-value {
    font-size: 16px;
    font-weight: 500;
    color: #111827;
    word-break: break-word;
}

/* Responsive */
@media (max-width: 768px) {
    .outlet-details-section {
        padding: 16px;
    }
    
    .details-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    
    .detail-item {
        padding: 10px 14px;
    }
    
    .detail-value {
        font-size: 14px;
    }
}

/* Preserve original classes */
.editProduct,
.editProduct__contents,
.editProduct__contents__category,
.editProduct__contents__sku__para {
    /* Original classes preserved */
}
</style>