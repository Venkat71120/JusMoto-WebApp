@extends('frontend.user.layout.master')
@section('site-title')
    {{ __('All Transactions') }}
@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="col-lg-12 col-ml-12 padding-bottom-30">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="margin-top-40"></div>
                        <x-msg.error />
                        <x-msg.flash-msg />
                        <x-msg.response-message />
                    </div>
                    <!-- Wallet Balance Card-->
                    <div class="col-lg-12 mb-4">
                        <div class="card border-0 shadow-sm p-4 d-flex flex-md-row flex-column align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <div class="me-3">
                                    <div class="bg-light d-flex align-items-center justify-content-center rounded-circle" style="width: 56px; height: 56px;">
                                        <!-- Wallet SVG (56x56) -->
                                        <svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <title>Wallet</title>
                                            <rect x="0" y="0" width="52" height="52" rx="8" fill="#FF6B2C" fill-opacity="0.08"/>
                                            <path d="M12 18C12 16.8954 12.8954 16 14 16H36C37.1046 16 38 16.8954 38 18V20H14C12.8954 20 12 20.8954 12 22V34C12 35.1046 12.8954 36 14 36H38V38C38 39.1046 37.1046 40 36 40H14C11.7909 40 10 38.2091 10 36V18Z"
                                                  stroke="#FF6B2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                            <path d="M38 22H42C43.1046 22 44 22.8954 44 24V32C44 33.1046 43.1046 34 42 34H38V22Z"
                                                  stroke="#FF6B2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                            <circle cx="40" cy="28" r="1.5" fill="#FF6B2C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="text-muted mb-1">{{ __('Wallet Balance') }}</h6>
                                    <h4 class="fw-semibold mb-0">{{ float_amount_with_currency_symbol($totals['wallet_balance']) }}</h4>
                                </div>
                            </div>
                            <div class="mt-3 mt-md-0">
                                <a href="javascript:void(0)"
                                   class="btn_primary text-decoration-none"
                                   data-bs-toggle="modal"
                                   data-bs-target="#paymentGatewayModal">
                                    {{ __('Deposit Now') }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 mt-2">
                        <!-- Order List Section -->
                        <h4 class="section-header ">{{ __('Transactions') }}</h4>
                        <!-- Filters -->
                        <form method="GET" class="row mb-4">
                            <div class="col-md-3">
                                <select name="transaction_type" class="form-select">
                                    <option value="">{{ __('All Types') }}</option>
                                    @foreach($transactionTypes as $type)
                                        <option value="{{ $type }}" {{ request('transaction_type') == $type ? 'selected' : '' }}>
                                            {{ ucfirst($type) }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select name="status" class="form-select">
                                    <option value="">{{ __('All Status') }}</option>
                                    @foreach($statuses as $status)
                                        <option value="{{ $status }}" {{ request('status') == $status ? 'selected' : '' }}>
                                            {{ ucfirst($status) }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-3">
                                <input type="date" name="date" class="form-control" value="{{ request('date') }}" placeholder="{{ __('Date') }}">
                            </div>
                            <div class="col-md-1 d-flex justify-content-between gap-1">
                                <button type="submit" class="btn_primary btn-sm py-1 px-3">{{ __('Filter') }}</button>
                                <a href="{{ route('client.wallet.transactions') }}" class="btn btn-secondary">Reset</a>
                            </div>
                        </form>
                        <div class="table_wrapper ">
                            @if($transactions->count() > 0)
                                <table class="data-table table w-100 br_4 overflow-hidden">
                                    <colgroup>
                                        <col data-dt-column="1" style="width: 235px;">
                                        <col data-dt-column="2" style="width: 371px;">
                                        <col data-dt-column="3" style="width: 179px;">
                                        <col data-dt-column="4" style="width: 259px;">
                                        <col data-dt-column="5" style="width: 177px;">
                                        <col data-dt-column="6" style="width: 115px;">
                                    </colgroup>
                                    <thead class="table_head">
                                    <tr>
                                        <th>{{ __('ID') }}</th>
                                        <th>{{ __('Type') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Reference') }}</th>
                                        <th>{{ __('Date') }}</th>
                                        <th>{{ __('Actions') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody class="table_body">
                                    @foreach($transactions as $transaction)
                                        <tr>
                                            <td>#{{ $transaction->id }}</td>
                                            <td>
                                                <span class="text-success">{{ ucfirst($transaction->transaction_type) }}</span>
                                            </td>
                                            <td>
                                                {{ float_amount_with_currency_symbol($transaction->amount) }}
                                            </td>
                                            @if($transaction->status === 'completed')
                                                <td class="table_payment {{ 'complete'}}">
                                                    {{ ucfirst($transaction->status) }}
                                                </td>
                                            @elseif($transaction->status === 'pending')
                                                <td class="table_payment {{ 'pending'}}">
                                                    {{ ucfirst($transaction->status) }}
                                                </td>
                                            @else
                                                <td class="table_payment {{ 'failed'}}">
                                                    {{ ucfirst($transaction->status) }}
                                                </td>
                                            @endif
                                            <td>{{ $transaction->reference_type ? ucwords(str_replace('_', ' ', $transaction->reference_type)) : 'N/A' }}</td>
                                            <td>{{ $transaction->created_at->format('Y-m-d H:i') }}</td>
                                            <td class="action_icon">
                                                <a href="{{ route('client.wallet.transactions.show', $transaction->id) }}" title="View Details">
                                                    <i class="icon-base ti tabler-eye"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <!-- Pagination -->
                                <div class="pagination mt-3" id="tablePagination">
                                    <x-frontend.dashboard-pagination.pagination
                                        :paginator="$transactions"
                                        :filters="request()->query()"
                                    />
                                </div>
                            @else
                                <div class="alert alert-info text-center p-4">
                                    <i class="fa-solid fa-info-circle fa-2x mb-3"></i>
                                    <p class="mb-0">{{__('No Transactions found.')}}</p>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('wallet::frontend.transactions.Deposit.deposit-modal')
@endsection
@section('scripts')
    @include('wallet::frontend.transactions.Deposit.payment-gateway-js')
    <script>
        $(document).ready(function () {
            // Listen for input change on amount field
            $('#amount').on('input', function () {
                let amount = parseFloat($(this).val());
                // Fallback to 0 if invalid or empty
                if (isNaN(amount) || amount < 0) {
                    amount = 0;
                }
                let symbol = "{{ site_currency_symbol('') }}";
                amount = symbol + amount.toFixed(2);
                // Update Total Amount section
                $('.customer__account__details__item__flex span').text(amount);
            });

            @if($errors->any())
                $('#paymentGatewayModal').modal('show');
            @endif
        });
    </script>
@endsection

