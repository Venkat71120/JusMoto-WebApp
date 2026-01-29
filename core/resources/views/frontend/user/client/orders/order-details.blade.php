@extends('frontend.user.layout.master')
@section('title', 'Order Details')
@section('style')
    <style>
        .star {
            font-size: 20px;
            color: #ccc;
            cursor: pointer;
            transition: color 0.2s;
        }

        .star.selected {
            color: #f1c40f; /* gold */
        }
        .success-container {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            width: 100%;
            max-width: 500px;
            margin-inline:auto;
            animation: slideUp 0.6s ease-out;
        }

        h1{
            color:#fff;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .success-header {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #fff;
            padding: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .success-header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            animation: float 20s infinite linear;
        }

        @keyframes float {
            0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
            100% { transform: translateX(0%) translateY(0%) rotate(360deg); }
        }

        .success-icon {
            width: 80px;
            height: 80px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 40px;
            color: #22c55e;
            position: relative;
            z-index: 1;
            animation: bounceIn 0.8s ease-out 0.3s both;
        }

        @keyframes bounceIn {
            0% {
                transform: scale(0.3);
                opacity: 0;
            }
            50% {
                transform: scale(1.05);
            }
            70% {
                transform: scale(0.9);
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        .success-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .success-message {
            font-size: 16px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }

        .order-details {
            padding: 30px;
            background: #fff;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #f1f5f9;
            transition: background-color 0.3s ease;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-row:hover {
            background-color: #f8fafc;
            margin: 0 -15px;
            padding: 15px;
            border-radius: 8px;
        }

        .detail-label {
            font-weight: 600;
            color: #374151;
            font-size: 16px;
        }

        .detail-value {
            font-weight: 700;
            color: #1f2937;
            font-size: 16px;
        }

        .order-id {
            color: #2563eb;
            font-family: 'Monaco', 'Menlo', monospace;
        }

        .price {
            color: #059669;
            font-size: 18px;
        }

        .invoice-number {
            color: #7c3aed;
            font-family: 'Monaco', 'Menlo', monospace;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 30px;
        }

        .btn {
            flex: 1;
            padding: 14px 20px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #fff;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }

        .btn-secondary {
            background: #6b7280;
            color: #fff;
        }

        .btn-secondary:hover {
            background: #4b5563;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(107, 114, 128, 0.3);
        }

        .btn:active {
            transform: translateY(0);
        }

        /* Additional Info Section */
        .additional-info {
            background: #f8fafc;
            padding: 20px 30px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
        }

        .info-text {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 10px;
        }

        .contact-info {
            color: #2563eb;
            font-weight: 600;
            font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .success-container {
                margin: 10px;
                border-radius: 8px;
            }

            .success-header {
                padding: 25px 20px;
            }

            .success-icon {
                width: 60px;
                height: 60px;
                font-size: 30px;
            }

            .success-title {
                font-size: 24px;
            }

            .order-details {
                padding: 25px 20px;
            }

            .action-buttons {
                flex-direction: column;
                gap: 10px;
            }

            .additional-info {
                padding: 15px 20px;
            }

            .detail-row:hover {
                margin: 0 -10px;
                padding: 15px 10px;
            }
        }

        /* Loading animation for buttons */
        .btn.loading {
            position: relative;
            color: transparent;
        }

        .btn.loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        /* Celebration confetti effect */
        .confetti {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        }

        .confetti-piece {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #f59e0b;
            animation: fall 3s linear infinite;
        }

        .confetti-piece:nth-child(odd) {
            background: #10b981;
            animation-delay: -0.5s;
        }

        .confetti-piece:nth-child(3n) {
            background: #3b82f6;
            animation-delay: -1s;
        }

        .confetti-piece:nth-child(4n) {
            background: #ef4444;
            animation-delay: -1.5s;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    </style>
@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_20">
            <div class="order-header d-flex justify-content-between">
                <!-- <button class="back_btn"><i class="icon-base ti tabler-arrow-left"></i></button> -->
                <h1 class="order-title m_0">{{__('Order ID:')}} {{ $order->id}}</h1>
                <div class="d-flex align-items-center gap-2">
                    @if($order->payment_status != 1 && $order->payment_gateway !== 'cash_on_delivery' && $order->payment_gateway !== 'manual_payment')
                        <a href="#/"
                           class="btn_gray w-100 text-decoration-none"
                           data-order_id="{{ $order->id }}" data-bs-toggle="modal"
                           data-bs-target="#paymentGatewayModal">{{ __('Pay Now') }}
                        </a>
                    @endif
                    @if($order->status != 4)
                        <button type="button"
                                class="btn_primary btn-cancel"
                                data-bs-toggle="modal"
                                data-bs-target="#CancelFormModal"
                                data-order_id="{{ $order->id }}">
                            {{ __("Cancel") }}
                        </button>
                    @endif
                </div>
            </div>
            <x-msg.flash-msg />
            <x-msg.response-message />
            <div class="d-flex g-4 row">
                <div class="order_details col-lg-7">
                    <div class="order_items">
                        <div class="section-header">{{__('Order Items')}}</div>
                        <div class="order_items_wrapper">
                            @if($order_items->count() > 0)
                                @foreach($order_items as $item)
                                    <div class="order-item">
                                        <div class="item_details_wrapper">
                                            <div class="item_image_wrapppr">
                                                {!! render_image_markup_by_attachment_id($item->service ? $item->service->image : '', 'thumb') !!}
                                            </div>
                                            <div class="item-details">
                                                <div class="item-name">{{ $item->service ? $item->service->title : 'N/A' }}</div>
                                                <div class="item-category"><strong>Category:</strong> {{ $item->service && $item->service->category ? $item->service->category->name : 'N/A' }}</div>
                                                <div class="item-qty"><strong>Quantity:</strong> {{ $item->qty }}</div>
                                            </div>
                                        </div>
                                        <div class="item-action">
                                            <div class="item-price">${{ number_format($item->price, 2) }}</div>
                                            <div class="item-actions">
                                                @if($item->service)
                                                    <a href="{{ route('frontend.service.details', $item->service->slug) }}" class="action-btn hw_40 bg_roundend_gray"><i class="icon-base ti tabler-eye"></i></a>
                                                @endif

                                            </div>
                                            @if($item->order->status == 2 && !$item->review_existing)
                                                <div class="item-actions">
                                                        <button type="button"
                                                                class="cmn-btn btn_primary btn-review py-2"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#ReviewFormModal"
                                                                data-order_id="{{ $item->order_id }}"
                                                                data-service_id="{{ $item->service_id}}">
                                                            {{ __("Submit Review") }}
                                                        </button>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                @endforeach
                            @else
                                <div class="alert alert-info">{{__('No items found for this order.')}}</div>
                            @endif
                        </div>
                    </div>

                    <!-- Amount Details Card -->
                    <div class="amount-details-card">
                        <div class="section-header">{{__('Amount Details')}}</div>
                        <div class="amount-details">
                            <div class="amount-row">
                                <span class="amount-label">{{__('Items')}}</span>
                                <span class="amount-value">{{ $order->orderItems->sum('qty') }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Sub Total')}}</span>
                                <span class="amount-value">${{ number_format($order->sub_total, 2) }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Shipping')}}</span>
                                <span class="amount-value">${{ number_format($order->delivery_charge ?? 0, 2) }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Taxes')}}</span>
                                <span class="amount-value">${{ number_format($order->tax, 2) }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Payment Gateways')}}</span>
                                <span class="amount-value">{{ $order->payment_gateway ?? 'N/A' }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Order Status')}}</span>
                                <span class="status-badge {{ $order->status == 2 || $order->status == 3 ? 'status-completed' : ($order->status == 4 ? 'status-cancelled' : 'status-pending') }}">
                                    {{ $order->status == 0 ? 'Pending' : ($order->status == 1 ? 'Active' : ($order->status == 2 ? 'Completed' : ($order->status == 3 ? 'Delivered' : 'Cancelled'))) }}
                                </span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Payment Status')}}</span>
                                <span class="status-badge {{ $order->payment_status == 1 ? 'status-completed' : 'status-pending' }}">
                                    {{ $order->payment_status == 1 ? 'Completed' : 'Pending' }}
                                </span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{__('Coupon Discount')}}</span>
                                <span class="amount-value">${{ number_format($order->coupon_amount ?? 0, 2) }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label total-price-title">{{__('Total Price')}}</span>
                                <span class="amount-value total-price">${{ number_format($order->total, 2) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order_details col-lg-5">
                    <div class="info-card">
                        <div class="card-title">{{__('Order Details')}}</div>
                        <div class="info-row">
                            <span class="info-label">
                                <i class="icon-base ti tabler-tag"></i>
                                {{__('Order ID:')}}
                            </span>
                            <span class="info-value">{{ $order->id }}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">
                                <i class="icon-base ti tabler-user"></i>
                                {{__('Name')}}
                            </span>
                            <span class="info-value">{{ $order->user ? $order->user->first_name . ' ' . $order->user->last_name : 'N/A' }}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">
                                <i class="icon-base ti tabler-mail"></i>
                                {{__('Email')}}
                            </span>
                            <span class="info-value">{{ $order->user ? $order->user->email : 'N/A' }}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">
                                <i class="icon-base ti tabler-phone"></i>
                               {{__('Phone')}}
                            </span>
                            <span class="info-value">{{ $order->user ? $order->user->phone : 'N/A' }}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">
                                <i class="icon-base ti tabler-calendar"></i>
                                {{__('Schedule Date')}}
                            </span>
                            <span class="info-value">{{ $order->date ? \Carbon\Carbon::parse($order->date)->format('d-m-Y') : 'N/A' }}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">
                                <i class="icon-base ti tabler-map-pin"></i>
                                {{__('Address')}}
                            </span>
                            <span class="info-value">{{ $order->orderLocations ? $order->orderLocations->address : 'N/A' }}</span>
                        </div>
                        @if($order->orderLocations && $order->orderLocations->latitude && $order->orderLocations->longitude)
                            <div class="pt_4">
                                <a href="https://maps.google.com/?q={{ $order->orderLocations->latitude }},{{ $order->orderLocations->longitude }}" class="info-value link-text" target="_blank">
                                    <i class="icon-base ti tabler-map"></i>{{__('View Map')}}
                                </a>
                                <span class="flex-grow-1"></span>
                            </div>
                        @endif
                    </div>

                    <div class="info-card">
                        <div class="card-title">{{__('Outlet Location')}}</div>
                        <div class="info_card_wrapper">
                            @if($order->outlet_location_id)
                                @php
                                    $outlet = \App\Models\Backend\Admin_outlet_location::find($order->outlet_location_id);
                                @endphp
                                <div class="info-row">
                                    <span class="info-label">{{__('Name')}}</span>
                                    <span class="info-value">{{ $outlet ? $outlet->name : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('Address')}}</span>
                                    <span class="info-value">{{ $outlet ? $outlet->address : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('State')}}</span>
                                    <span class="info-value">{{ $outlet && $outlet->state ? $outlet->state->name : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('City')}}</span>
                                    <span class="info-value">{{ $outlet && $outlet->city ? $outlet->city->name : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('Area')}}</span>
                                    <span class="info-value">{{ $outlet && $outlet->area ? $outlet->area->name : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('Post Code')}}</span>
                                    <span class="info-value">{{ $outlet ? $outlet->post_code : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('Latitude')}}</span>
                                    <span class="info-value">{{ $outlet ? $outlet->latitude : 'N/A' }}</span>
                                </div>
                                <div class="info-row">
                                    <span class="info-label">{{__('Longitude')}}</span>
                                    <span class="info-value">{{ $outlet ? $outlet->longitude : 'N/A' }}</span>
                                </div>
                            @else
                                <p class="no-notes">{{__('No outlet location specified.')}}</p>
                            @endif
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="card-title">{{__('Order Notes')}}</div>
                        <div class="info_card_wrapper">
                            @if($order->order_note)
                                <p>{{ $order->order_note }}</p>
                            @else
                                <p class="no-notes">{{__('No Order note found')}}</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('frontend.user.client.orders.order-cancel-modal')
    @include('frontend.user.client.orders.review-modal')
    @include('frontend.user.client.orders.payment_gateway.gateway-markup')
    @include('frontend.user.client.orders.payment_gateway.payment-success-modal')
    @include('frontend.user.client.orders.payment_gateway.payment-failed-modal')
@endsection
@section('scripts')
    @include('frontend.user.client.orders.payment_gateway.payment-gateway-js')
    @if(session('payment_success'))
        <script>
            $(function() {
                // Fill modal fields dynamically from session data
                let order = @json(session('order_success_details'));

                if(order){
                    $('#OrderSuccessModal .order-id').text('#000' + order.id);
                    $('#OrderSuccessModal .price').text(formatCurrency(order.total));
                    $('#OrderSuccessModal .date').text(order.date);
                    $('#OrderSuccessModal .schedule').text(order.schedule);
                    $('#OrderSuccessModal .invoice-number').text('#' + order.invoice_number);
                    $('#OrderSuccessModal .success-message').text("{{ __('You have successfully placed an order!') }}");
                }

                // Then show modal
                $('#OrderSuccessModal').modal('show');
            });
            // Helper to format currency
            function formatCurrency(amount) {
                let symbol = "{{ site_currency_symbol('') }}";
                return symbol + amount.toFixed(2);
            }
        </script>
    @endif

    @if(session('payment_failed'))
        <script>
            $(function() {
                // Then show modal
                $('#paymentFailedModal').modal('show');
            });

        </script>
    @endif

    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        (function(){
            "use strict";
            $(document).ready(function(){

                @if($errors->any())
                $('#paymentGatewayModal').modal('show');
                @endif
                // Create confetti effect
                function createConfetti() {
                    const confettiContainer = $('#confetti');

                    for (let i = 0; i < 50; i++) {
                        const confettiPiece = $('<div class="confetti-piece"></div>');
                        confettiPiece.css({
                            left: Math.random() * 100 + '%',
                            animationDuration: (Math.random() * 3 + 2) + 's',
                            animationDelay: Math.random() * 2 + 's'
                        });
                        confettiContainer.append(confettiPiece);
                    }

                    // Remove confetti after animation
                    setTimeout(() => {
                        confettiContainer.fadeOut(1000, () => {
                            confettiContainer.remove();
                        });
                    }, 4000);
                }

                // Trigger confetti on page load
                setTimeout(createConfetti, 500);


                // Add click animation to detail rows
                $('.detail-row').click(function() {
                    const $row = $(this);
                    const value = $row.find('.detail-value').text();

                    // Copy to clipboard functionality
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(value).then(() => {
                            // Show temporary feedback
                            const originalBg = $row.css('background-color');
                            $row.css('background-color', '#dcfce7');

                            setTimeout(() => {
                                $row.css('background-color', originalBg);
                            }, 300);

                            // You could show a toast notification here
                            console.log('Copied to clipboard:', value);
                        });
                    }
                });

                // Add some interactive sparkle effects
                $('.success-icon').on('mouseenter', function() {
                    $(this).css('transform', 'scale(1.1) rotate(10deg)');
                }).on('mouseleave', function() {
                    $(this).css('transform', 'scale(1) rotate(0deg)');
                });

                $(document).on('click', '.btn-review', function () {
                    // Get values from clicked button
                    let order_id = $(this).data('order_id');
                    let service_id = $(this).data('service_id');

                    $('#order_id_for_review').val(order_id);
                    $('#service_id').val(service_id);

                    $('#review').val('');
                    $('#ratingInput').val('');
                    $('.star').removeClass('selected');
                });

                //review rating give
                $('.star').on('click', function () {
                    console.log("dsfdf");
                    var rating = $(this).data('value');
                    $('#ratingInput').val(rating);


                    $('.star').each(function (index) {
                        if (index < rating) {
                            $(this).addClass('selected');
                        }
                        else {
                            $(this).removeClass('selected');
                        }
                    });

                });

                $('#send_review').on('click', function ()
                {
                    var order_id = $('#order_id_for_review').val();
                    var service_id = $('#service_id').val();
                    var review = $('#review').val();
                    var star= $('#ratingInput').val();

                    $.ajax({
                        method: 'post',
                        url: "{{ route('client.review.add') }}",
                        data: {
                            order_id:order_id,
                            service_id:service_id,
                            message:review,
                            rating:star

                        },
                        success: function(res)
                        {
                            if (res.status == 'success')
                            {
                                toastr.success("{{__('Success')}}");
                                $('#ReviewFormModal').modal('hide');
                                location.reload();
                            }
                            else if (res.status == 'validation_error')
                            {
                                let errorMessage = "";
                                $.each(res.errors, function (key, value) {
                                    toastr.error(value[0]);
                                });
                            }
                            else{
                                toastr.error(res.message);
                            }

                        },
                        error:function(xhr)
                        {
                            if (xhr.status === 422) {
                                let errors = xhr.responseJSON.errors;
                                let errorMessage = "";
                                $.each(errors, function (key, value) {
                                    errorMessage += value[0] + "<br>";
                                });
                                toastr.error(errorMessage);
                            } else {
                                toastr.error("An error occurred. Please try again.");
                            }
                        }
                    });
                });


            });
        })(jQuery);
    </script>
@endsection
