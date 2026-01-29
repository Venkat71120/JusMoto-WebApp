@extends('frontend.user.layout.master')

@section('site-title')
    {{ __('Transaction Details') }}
@endsection

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="col-lg-12 col-ml-12 padding-bottom-30">
                <div class="order_details col-lg-7">
                    <!-- Transaction Details Card -->
                    <div class="amount-details-card">
                        <div class="section-header">{{ __('Transaction Details') }} #{{ $transaction->id }}</div>
                        <div class="amount-details">
                            <div class="amount-row">
                                <span class="amount-label">{{ __('User') }}</span>
                                <span class="amount-value">{{ trim($transaction->user?->fullname) !== '' ? $transaction->user->fullname : $transaction->user?->username }}<br>
                                        <small class="text-muted">{{ $transaction->user->email ?? '' }}</small>
                                </span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Wallet ID') }}</span>
                                <span class="amount-value">#{{ $transaction->wallet_id }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Transaction Type') }}</span>
                                <span class="amount-value">{{ ucfirst($transaction->transaction_type) }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Amount') }}</span>
                                <span class="amount-value">{{float_amount_with_currency_symbol($transaction->amount)}}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Current Status') }}</span>
                                <span class="amount-value">{{ ucfirst($transaction->status) }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Invoice Number') }}</span>
                                <span class="amount-value">{{ $transaction->invoice_number ?? 'N/A' }}</span>

                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Description') }}</span>
                                <span class="amount-value">{{ $transaction->description ?? 'N/A' }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Created At') }}</span>
                                <span class="amount-value">{{ $transaction->created_at->format('Y-m-d H:i:s') }}</span>
                            </div>
                            <div class="amount-row">
                                <span class="amount-label">{{ __('Updated At') }}</span>
                                <span class="amount-value">{{ $transaction->updated_at->format('Y-m-d H:i:s') }}</span>
                            </div>
                            <div class="amount-row">
                                <a href="{{ route('client.wallet.transactions') }}" class="btn_primary text-decoration-none">{{ __('Back to Transactions') }}</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
