@extends('backend.admin-master')

@section('site-title')
    {{ __('Wallet Details') }}
@endsection

@section('content')
    <div class="col-lg-12 col-ml-12 padding-bottom-30">
        <div class="row">
            <div class="col-lg-12">
                <div class="margin-top-40"></div>
                <x-msg.error />
                <x-msg.flash-msg />
            </div>

            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">{{ __('Wallet Details') }} #{{ $wallet->id }}</h4>

                        <div class="table-responsive mt-4">
                            <table class="table table-striped">
                                <tr>
                                    <td><strong>{{ __('Wallet ID') }}</strong></td>
                                    <td>#{{ $wallet->id }}</td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('User') }}</strong></td>
                                    <td>
                                        {{ trim($wallet->user?->fullname) !== '' ? $wallet->user->fullname : $wallet->user?->username }}<br>
                                        <small class="text-muted">{{ $wallet->user->email ?? '' }}</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Available Balance') }}</strong></td>
                                    <td>
                                        <h5 class="text-success">{{float_amount_with_currency_symbol($wallet->available_balance)}}</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Created At') }}</strong></td>
                                    <td>{{ $wallet->created_at->format('Y-m-d H:i:s') }}</td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Updated At') }}</strong></td>
                                    <td>{{ $wallet->updated_at->format('Y-m-d H:i:s') }}</td>
                                </tr>
                            </table>
                        </div>

                        <div class="mt-4">
                            <a href="{{ route('admin.wallet.wallets') }}" class="btn btn-secondary">
                                {{ __('Back to Wallets') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
