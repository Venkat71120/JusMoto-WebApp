<div class="cart-overlay"></div>
<div class="cart-container">
    <div class="cart-header">
        <div class="cart-title-section">
            <button class="close-btn">
                <i class="icon-base ti tabler-x selected-5 icon-24px"></i>
            </button>
            <div>
                <div class="cart-title subtitle-2 fw_bold">{{ __('Your Cart') }}</div>
                <div class="cart-subtitle">
                    {{ $selectedItems->count() }} {{ __('Products In Your Cart') }}
                </div>
            </div>
        </div>
        <button class="clear-all fs-md fw_mideum">
            <i class="icon-base ti tabler-trash selected-5 icon-24px"></i>
            {{ __('Clear All') }}
        </button>
    </div>

    <div class="cart-items">
        @forelse($selectedItems as $item)
            @if($item->service)
                <div class="cart-item" data-id="{{ $item->id }}">
                    <div class="item-image">
                        {!! render_image_markup_by_attachment_id($item->service->image ?? '', '', 'thumb'); !!}
                    </div>
                    <div class="item-details">
                        <div class="item-name fs-md fw_mideum fw_semibold twoline">
                            {{ $item->service->title ?? 'Service unavailable' }}
                        </div>
                        <div class="item-price subtitle-4 fw_semibold" data-base="{{ $item->price }}">
                            ${{ number_format($item->price * $item->quantity, 2) }}
                        </div>
                        <div class="item-actions">
                            <div class="quantity-control">
                                <button class="qty-btn minus">
                                    <i class="icon-base ti tabler-minus icon-16px"></i>
                                </button>
                                <span class="quantity">{{ $item->quantity }}</span>
                                <button class="qty-btn plus">
                                    <i class="icon-base ti tabler-plus icon-16px"></i>
                                </button>
                            </div>
                            <button class="delete-btn">
                                <i class="icon-base ti tabler-trash icon-24px"></i>
                            </button>
                        </div>
                    </div>

                </div>
            @endif
        @empty
            <p>{{ __('Your cart is empty') }}</p>
        @endforelse
    </div>

    <div class="cart-footer pat-60">
        <div class="total-section">
            <div class="total-label subtitle-4 fw_semibold">{{ __('Total Price') }}</div>
            <div class="total-price subtitle-2 fw_bold"></div>
        </div>
        <div class="checkout-btn">
            @if(auth()->check())
                <a href="{{ route('client.booking_page') }}">{{ __('Proceed To Checkout') }}</a>
            @else
                <a href="{{ route('auth.login', ['redirect_to' => route('client.booking_page')]) }}">
                    {{ __('Proceed To Checkout') }}
                </a>
            @endif

        </div>
    </div>
</div>
