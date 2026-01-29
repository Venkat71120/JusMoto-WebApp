@extends('backend.admin-master')

@section('site-title')
    {{ __('All Transactions') }}
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
            <div class="col-lg-3 col-md-6">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h5>{{ __('Total Amount') }}</h5>
                        <h3>${{ number_format($totals['total_amount'], 2) }}</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h5>{{ __('Pending') }}</h5>
                        <h3>${{ number_format($totals['pending_amount'], 2) }}</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h5>{{ __('Completed') }}</h5>
                        <h3>${{ number_format($totals['completed_amount'], 2) }}</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card bg-danger text-white">
                    <div class="card-body">
                        <h5>{{ __('Failed') }}</h5>
                        <h3>${{ number_format($totals['failed_amount'], 2) }}</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">{{ __('Transactions') }}</h4>

                        <!-- Filters -->
                        <form method="GET" class="row mb-4">
                            <div class="col-md-3">
                                <select name="user_id" class="form-control">
                                    <option value="">{{ __('All Users') }}</option>
                                    @foreach($users as $user)
                                        <option value="{{ $user->id }}" {{ request('user_id') == $user->id ? 'selected' : '' }}>
                                            {{ $user->name }} ({{ $user->email }})
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-2">
                                <select name="transaction_type" class="form-control">
                                    <option value="">{{ __('All Types') }}</option>
                                    @foreach($transactionTypes as $type)
                                        <option value="{{ $type }}" {{ request('transaction_type') == $type ? 'selected' : '' }}>
                                            {{ ucfirst($type) }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-2">
                                <select name="status" class="form-control">
                                    <option value="">{{ __('All Status') }}</option>
                                    @foreach($statuses as $status)
                                        <option value="{{ $status }}" {{ request('status') == $status ? 'selected' : '' }}>
                                            {{ ucfirst($status) }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-2">
                                <input type="date" name="date_from" class="form-control" value="{{ request('date_from') }}" placeholder="{{ __('From Date') }}">
                            </div>
                            <div class="col-md-2">
                                <input type="date" name="date_to" class="form-control" value="{{ request('date_to') }}" placeholder="{{ __('To Date') }}">
                            </div>
                            <div class="col-md-1">
                                <button type="submit" class="btn btn-primary">{{ __('Filter') }}</button>
                            </div>
                        </form>

                        <!-- Transactions Table -->
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>{{ __('ID') }}</th>
                                        <th>{{ __('User') }}</th>
                                        <th>{{ __('Type') }}</th>
                                        <th>{{ __('Amount') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Reference') }}</th>
                                        <th>{{ __('Date') }}</th>
                                        <th>{{ __('Actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($transactions as $transaction)
                                        <tr>
                                            <td>#{{ $transaction->id }}</td>
                                            <td>
                                                {{ trim($transaction->user?->fullname) !== '' ? $transaction->user->fullname : $transaction->user?->username }}<br>
                                                <small class="text-muted">{{ $transaction->user->email ?? '' }}</small>
                                            </td>
                                            <td>
                                                <span class="text-success">{{ ucfirst($transaction->transaction_type) }}</span>
                                            </td>
                                            <td>${{ number_format($transaction->amount, 2) }}</td>
                                            <td>
                                                @if($transaction->status === 'completed')
                                                    <span class="text-success">{{ ucfirst($transaction->status) }}</span>
                                                @elseif($transaction->status === 'pending')
                                                    <span class="text-warning">{{ ucfirst($transaction->status) }}</span>
                                                @else
                                                    <span class="text-danger">{{ ucfirst($transaction->status) }}</span>
                                                @endif
                                            </td>
                                            <td>{{ $transaction->reference_type ? ucwords(str_replace('_', ' ', $transaction->reference_type)) : 'N/A' }}</td>
                                            <td>{{ $transaction->created_at->format('Y-m-d H:i') }}</td>
                                            <td>
                                                <a href="{{ route('admin.wallet.transactions.show', $transaction->id) }}" class="btn btn-sm btn-primary">
                                                    {{ __('View') }}
                                                </a>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="8" class="text-center">{{ __('No transactions found') }}</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>

                        <!-- Pagination -->
                        {{ $transactions->appends(request()->query())->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
