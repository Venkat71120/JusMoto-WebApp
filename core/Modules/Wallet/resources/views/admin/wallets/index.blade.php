@extends('backend.admin-master')

@section('site-title')
    {{ __('Wallet Management') }}
@endsection

@section('content')
    <div class="col-lg-12 col-ml-12 padding-bottom-30">
        <div class="row">
            <div class="col-lg-12">
                <div class="margin-top-40"></div>
                <x-msg.error />
                <x-msg.flash-msg />
            </div>

            <!-- Statistics Cards -->
            <div class="col-lg-2 col-md-4">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <h6 style="color: #fff">{{ __('Total Wallets') }}</h6>
                        <h4 style="color: #fff">{{ number_format($totals['total_wallets']) }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h6 style="color: #fff">{{ __('Total Balance') }}</h6>
                        <h4 style="color: #fff">${{ number_format($totals['total_balance'], 2) }}</h4>
                    </div>
                </div>
            </div>

            <!-- Transaction Statistics -->
            <div class="col-lg-12 mt-4">
                <div class="card">
                    <div class="card-body">
                        <h5>{{ __('Transaction Statistics') }}</h5>
                        <div class="row mt-1">
                            <div class="col-md-3">
                                <p><strong>{{ __('Total Transactions:') }}</strong> {{ number_format($transactionStats['total_transactions']) }}</p>
                                <p><strong>{{ __('Pending:') }}</strong> {{ number_format($transactionStats['pending_transactions']) }}</p>
                            </div>
                            <div class="col-md-3">
                                <p><strong>{{ __('Completed:') }}</strong> {{ number_format($transactionStats['completed_transactions']) }}</p>
                                <p><strong>{{ __('Failed:') }}</strong> {{ number_format($transactionStats['failed_transactions']) }}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>{{ __('Total Transaction Amount:') }}</strong> ${{ number_format($transactionStats['total_transaction_amount'], 2) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mt-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">{{ __('All Wallets') }}</h4>

                        <!-- Filters -->
                        <form method="GET" class="row mb-4 mt-2">

                            <div class="col-md-2">
                                <input type="number" name="min_balance" class="form-control" step="0.01" value="{{ request('min_balance') }}" placeholder="{{ __('Min Balance') }}">
                            </div>
                            <div class="col-md-2">
                                <input type="number" name="max_balance" class="form-control" step="0.01" value="{{ request('max_balance') }}" placeholder="{{ __('Max Balance') }}">
                            </div>
                            <div class="col-md-2">
                                <button type="submit" class="btn btn-primary">{{ __('Filter') }}</button>
                                <a href="{{ route('admin.wallet.wallets') }}" class="btn btn-secondary ml-2">{{ __('Reset') }}</a>
                            </div>
                        </form>

                        <!-- Wallets Table -->
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>{{ __('ID') }}</th>
                                        <th>{{ __('User') }}</th>
                                        <th>{{ __('Balance') }}</th>
                                        <th>{{ __('Transactions') }}</th>
                                        <th>{{ __('Created') }}</th>
                                        <th>{{ __('Actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($wallets as $balance)
                                        <tr>
                                            <td>#{{ $balance->id }}</td>
                                            <td>
                                                {{ trim($balance->user?->fullname) !== '' ? $balance->user->fullname : $balance->user?->username }}</br>

                                                <small class="text-muted">{{ $balance->user?->email ?? '' }}</small>
                                            </td>
                                            <td>
                                                <strong class="text-{{ $balance->available_balance > 0 ? 'success' : 'danger' }}">
                                                    ${{ number_format($balance->available_balance, 2) }}
                                                </strong>
                                            </td>
                                            <td>
                                                <span >{{ $balance->transactions->count() }}</span>
                                            </td>
                                            <td>{{ $balance->created_at->format('Y-m-d') }}</td>
                                            <td>
                                                <a href="{{ route('admin.wallet.wallets.show', $balance->id) }}" class="btn btn-sm btn-primary">
                                                    {{ __('View') }}
                                                </a>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="8" class="text-center">{{ __('No wallets found') }}</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>

                        <!-- Pagination -->
                        {{ $wallets->appends(request()->query())->links() }}
                    </div>
                </div>
            </div>

            <!-- Recent Transactions -->
            <div class="col-lg-12 mt-4">
                <div class="card">
                    <div class="card-body">
                        <h5>{{ __('Recent Transactions') }}</h5>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>{{ __('User') }}</th>
                                        <th>{{ __('Type') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Date') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($recentTransactions as $transaction)
                                        <tr>
                                            <td>{{ trim($transaction->user?->fullname) !== '' ? $transaction->user->fullname : $transaction->user?->username }}
                                            </td>
                                            <td>
                                                <span>{{ ucfirst($transaction->transaction_type) }}</span>
                                            </td>
                                            <td>${{ number_format($transaction->amount, 2) }}</td>
                                            <td>
                                                <span class="">{{ ucfirst($transaction->status) }}</span>
                                            </td>
                                            <td>{{ $transaction->created_at->format('Y-m-d H:i') }}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="5" class="text-center">{{ __('No recent transactions') }}</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
