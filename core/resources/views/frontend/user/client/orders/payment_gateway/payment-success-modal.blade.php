<!-- Order Success Modal -->
<div class="modal fade" id="OrderSuccessModal" tabindex="-1" aria-labelledby="OrderSuccessLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p_20">

            <div class="success-container border-0 shadow-none p-0 m-0">
                <!-- Success Header -->
                <div class="success-header rounded-top">
                    <div class="success-icon">{{__('✓')}}</div>
                    <h1 class="success-title">{{__('Success!')}}</h1>
                    <p class="success-message">{{__('You have successfully placed an order')}}</p>
                </div>

                <!-- Order Details -->
                <div class="order-details p-4">
                    <div class="detail-row">
                        <span class="detail-label">{{__('Order ID')}}</span>
                        <span class="detail-value order-id"></span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">{{__('Total Price')}}</span>
                        <span class="detail-value price"></span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">{{__('Date')}}</span>
                        <span class="detail-value date"></span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">{{__('Schedule')}}</span>
                        <span class="detail-value schedule"></span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">{{__('Invoice Number')}}</span>
                        <span class="detail-value invoice-number"></span>
                    </div>

                    <div class="action-buttons mt-4 d-flex gap-2">
                        <a href="{{ route('order.details', $order->id) }}" class="btn btn-primary flex-fill" id="view-details-btn">
                            {{ __('View Details') }}
                        </a>
                        <a href="{{ route('user.dashboard')}}" class="btn btn-secondary flex-fill" id="back-home-btn">
                            {{ __('Back to Home') }}
                        </a>
                    </div>
                </div>

                <!-- Optional Additional Info -->
                <div class="additional-info rounded-bottom">
                    <p class="info-text">{{ __('Thank you for your order! You can view or manage it anytime from your dashboard.') }}</p>
                </div>
            </div>

            <!-- Confetti -->
            <div class="confetti" id="confetti"></div>

        </div>
    </div>
</div>
