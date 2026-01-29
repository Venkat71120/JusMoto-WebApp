@extends('backend.admin-master')

@section('site-title')
    {{ __('Transaction Details') }}
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
                        <h4 class="header-title">{{ __('Transaction Details') }} #{{ $transaction->id }}</h4>

                        <div class="table-responsive mt-4">
                            <table class="table table-striped">
                                <tr>
                                    <td><strong>{{ __('Transaction ID') }}</strong></td>
                                    <td>#{{ $transaction->id }}</td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('User') }}</strong></td>
                                    <td>
                                        {{ trim($transaction->user?->fullname) !== '' ? $transaction->user->fullname : $transaction->user?->username }}<br>
                                        <small class="text-muted">{{ $transaction->user->email ?? '' }}</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Wallet ID') }}</strong></td>
                                    <td>
                                        <a href="{{ route('admin.wallet.wallets.show', ['id' => $transaction->wallet_id]) }}" class="btn btn-sm btn-info">
                                            #{{ $transaction->wallet_id }}
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Transaction Type') }}</strong></td>
                                    <td>
                                        <span class="text-info">{{ ucfirst($transaction->transaction_type) }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Amount') }}</strong></td>
                                    <td>
                                        <h5 class="text-success">${{ number_format($transaction->amount, 2) }}</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Current Status') }}</strong></td>
                                    <td>
                                        @if($transaction->status === 'completed')
                                            <span class="text-success">{{ ucfirst($transaction->status) }}</span>
                                        @elseif($transaction->status === 'pending')
                                            <span class="text-warning">{{ ucfirst($transaction->status) }}</span>
                                        @else
                                            <span class="text-danger">{{ ucfirst($transaction->status) }}</span>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Invoice Number') }}</strong></td>
                                    <td>{{ $transaction->invoice_number ?? 'N/A' }}</td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Description') }}</strong></td>
                                    <td>{{ $transaction->description ?? 'N/A' }}</td>
                                </tr>
                                @if($transaction->payment_gateway == 'manual_payment')

                                    <tr>
                                        <td><strong>{{ __('Payment Attachment') }}</strong></td>
                                        <td>  <a href="#" class="open-modal"
                                                 data-file-url="{{ asset('assets/uploads/manual-payment/deposit/'.$transaction->payment_attachment) }}"
                                                 data-file-name="{{ $transaction->payment_attachment }}">
                                                <i class="las la-file-invoice"></i>
                                            </a></td>
                                    </tr>


                                @endif
                                <tr>
                                    <td><strong>{{ __('Created At') }}</strong></td>
                                    <td>{{ $transaction->created_at->format('Y-m-d H:i:s') }}</td>
                                </tr>
                                <tr>
                                    <td><strong>{{ __('Updated At') }}</strong></td>
                                    <td>{{ $transaction->updated_at->format('Y-m-d H:i:s') }}</td>
                                </tr>
                            </table>
                        </div>

                        <div class="mt-4">
                            <a href="{{ route('admin.wallet.transactions') }}" class="btn btn-secondary">
                                {{ __('Back to Transactions') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                @if($transaction->transaction_type === 'deposit' || $transaction->transaction_type === 'withdrawal')
                     <div class="card">
                    <div class="card-body">
                        <h5>{{ __('Update Transaction Status') }}</h5>

                        <form action="{{ route('admin.wallet.transactions.update-status', $transaction->id) }}" method="POST">
                            @csrf

                            <div class="form-group mb-2">
                                <label for="status">{{ __('Status') }}</label>
                                <select name="status" id="status" class="form-control">
                                    <option value="pending" {{ $transaction->status === 'pending' ? 'selected' : '' }}>
                                        {{ __('Pending') }}
                                    </option>
                                    <option value="completed" {{ $transaction->status === 'completed' ? 'selected' : '' }}>
                                        {{ __('Completed') }}
                                    </option>
                                    <option value="failed" {{ $transaction->status === 'failed' ? 'selected' : '' }}>
                                        {{ __('Failed') }}
                                    </option>
                                </select>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                {{ __('Update Status') }}
                            </button>
                        </form>
                    </div>
                </div>
                @endif

                <!-- Wallet Information -->
                <div class="card mt-4">
                    <div class="card-body">
                        <h5>{{ __('Wallet Information') }}</h5>

                        <table class="table table-sm">
                            <tr>
                                <td><strong>{{ __('User Type') }}</strong></td>
                                <td>
                                    <span class="{{ $transaction->user->type == '0' ? 'text-info' : 'text-success' }}">
                                        {{ $transaction->user->type == '0' ? 'Provider' : 'Client' }}
                                    </span>

                                </td>
                            </tr>
                            <tr>
                                <td><strong>{{ __('Current Balance') }}</strong></td>
                                <td>
                                    <strong class="text-{{ $transaction->wallet?->available_balance > 0 ? 'success' : 'danger' }}">
                                        ${{ number_format($transaction->wallet?->available_balance, 2) }}
                                    </strong>
                                </td>
                            </tr>

                        </table>

                        <a href="{{ route('admin.wallet.wallets.show', $transaction->wallet_id) }}" class="btn btn-sm btn-info">
                            {{ __('View Wallet Details') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('backend.pages.orders.manual-payment-file-modal')
@endsection

@section('scripts')
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function() {

                $(document).on('click', '.open-modal', function (event) {
                    // Get file URL and name from data attributes
                    var fileUrl = $(this).data('file-url');
                    var fileName = $(this).data('file-name');

                    // Get modal elements
                    var filePreview = $('#filePreview');
                    var fileDownload = $('#fileDownload');

                    // Reset preview and download elements
                    filePreview.hide().attr('src', '');
                    fileDownload.hide().attr('href', '');

                    // Check file type and update modal content
                    var fileExtension = fileUrl.split('.').pop().toLowerCase();
                    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                        // Image file
                        filePreview.attr('src', fileUrl).show();
                        fileDownload.hide();
                    } else {
                        // Non-image file
                        filePreview.hide();
                        fileDownload.attr('href', fileUrl).show().text('Download ' + fileName);
                    }

                    // Show the modal
                    var modal = new bootstrap.Modal(document.getElementById('fileModal'));
                    modal.show();
                });
            });
        })(jQuery);
    </script>
@endsection
