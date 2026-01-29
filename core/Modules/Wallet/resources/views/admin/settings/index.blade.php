@extends('backend.admin-master')

@section('site-title')
    {{ __('Wallet Settings') }}
@endsection

@section('content')
    <div class="col-lg-12 col-ml-12 padding-bottom-30">
        <div class="row">
            <div class="col-lg-12">
                <div class="margin-top-40"></div>
                <x-msg.error />
                <x-msg.flash-msg />
            </div>

            <div class="col-lg-12 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">{{ __('Wallet Settings') }}</h4>

                        <form action="{{ route('admin.wallet.settings.update') }}" method="POST">
                            @csrf

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="transaction_fee_percentage">{{ __('Transaction Fee Percentage') }}</label>
                                        <input type="number"
                                               step="0.01"
                                               max="100"
                                               min="0"
                                               name="transaction_fee_percentage"
                                               id="transaction_fee_percentage"
                                               class="form-control"
                                               value="{{ $walletSettings['transaction_fee_percentage'] }}"
                                               placeholder="{{ __('0.00') }}">
                                        <small class="text-muted">{{ __('Percentage fee charged on transactions (0-100%)') }}</small>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="client_min_deposit">{{ __('Users Minimum Deposit') }}</label>
                                        <input type="number"
                                               step="0.01"
                                               min="0"
                                               name="client_min_deposit"
                                               id="client_min_deposit"
                                               class="form-control"
                                               value="{{ $walletSettings['client_min_deposit'] }}"
                                               placeholder="{{ __('1.00') }}">
                                        <small class="text-muted">{{ __('Minimum amount users can deposit') }}</small>
                                    </div>
                                </div>

                            </div>

                            <div class="form-group mt-4">
                                <button type="submit" class="btn btn-primary mr-3">{{ __('Update Settings') }}</button>

                                <button type="button"
                                        class="btn btn-warning"
                                        onclick="if(confirm('Are you sure you want to reset settings to default?')) { document.getElementById('reset-form').submit(); }">
                                    {{ __('Reset to Default') }}
                                </button>
                            </div>
                        </form>

                        <form id="reset-form" action="{{ route('admin.wallet.settings.reset') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
