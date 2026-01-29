@extends('frontend.user.layout.master')

@section('title','Refund Details')
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header d-flex align-items-center justify-content-between">
                <h3 class="page_title mb_12">{{__('Refund Details - ID: ')}}{{ $refund->id }}</h3>
                <a href="{{ route('refunds.index') }}" class="btn btn-secondary">
                    <i class="icon-base ti tabler-arrow-left"></i> {{__('Back to Refunds')}}
                </a>
            </div>

            @if(session('success'))
                <div class="alert alert-success mt_12">
                    {{ session('success') }}
                </div>
            @endif

            <!-- Refund Details Card -->
            <div class="mt_12 modal_card">
                <div class="section-header">{{__('Refund Details')}}</div>
                <div class="amount-details">
                    <div class="amount-row">
                        <span class="amount-label">{{__('Order ID:')}}</span>
                        <span class="amount-value">{{ $refund->order_id }}</span>
                    </div>

                    <div class="amount-row">
                        <span class="amount-label">{{__('Refund ID:')}}</span>
                        <span class="amount-value">{{ $refund->id }}</span>
                    </div>

                    <div class="amount-row">
                        <span class="amount-label">{{__('Request Date:')}}</span>
                        <span class="amount-value">
                            {{ $refund->created_at->format('d-m-Y h:i A') }}
                        </span>
                    </div>

                    <div class="amount-row">
                        <span class="amount-label">{{__('Payment Gateway:')}}</span>
                        <span class="amount-value">{{ $refund->gateway_name }}</span>
                    </div>

                    <div class="amount-row">
                        <span class="amount-label">{{__('Refund Amount:')}}</span>
                        <span class="amount-value">${{ number_format($refund->amount, 2) }}</span>
                    </div>

                    <div class="amount-row">
                        <span class="amount-label">{{__('Refund Status:')}}</span>
                        <span class="table_status {{ $refund->status_class }}">
                            {{ $refund->status_label }}
                        </span>
                    </div>

                    <div class="amount-row">
                        <span class="amount-label">{{__('Cancel Reason:')}}</span>
                        <span class="amount-value">{{ $refund->cancel_reason ?: 'N/A' }}</span>
                    </div>
                </div>
            </div>

            <!-- Order Details (Optional) -->
            @if($refund->order)
                <div class="mt_12 modal_card">
                    <div class="section-header">{{__('Order Information')}}</div>
                    <div class="amount-details">
                        <div class="amount-row">
                            <span class="amount-label">{{__('Order Date:')}}</span>
                            <span class="amount-value">
                                {{ $refund->order->created_at->format('d-m-Y h:i A') }}
                            </span>
                        </div>

                        <div class="amount-row">
                            <span class="amount-label">{{__('Order Total:')}}</span>
                            <span class="amount-value">${{ number_format($refund->order->total, 2) }}</span>
                        </div>

                        <div class="amount-row">
                            <span class="amount-label">{{__('Payment Status:')}}</span>
                            <span class="amount-value">
                                {{ $refund->order->payment_status == 1 ? 'Completed' : 'Pending' }}
                            </span>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
@endsection
