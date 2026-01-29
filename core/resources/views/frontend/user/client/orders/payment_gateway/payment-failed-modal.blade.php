<!-- Payment Failed Modal -->
<div class="modal fade" id="paymentFailedModal" tabindex="-1" aria-labelledby="PaymentFailLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p_20">

            <!-- Modal Header -->
            <div class="card shadow-sm border-0 w-100">
                <div class="card-header bg-danger text-white text-center rounded-top">
                    <h4 class="mb-0">{{ __('Oops!') }}</h4>
                </div>

                <!-- Modal Body -->
                <div class="card-body text-center">
                    <p class="card-text">
                        {{ __('Your payment has been') }}
                        <strong>{{ __('cancelled') }}</strong>.
                    </p>
                    <hr>
                    <div class="d-flex justify-content-center mt-3">
                        <a href="{{ route('user.dashboard') }}" class="btn_gray text-decoration-none">
                            {{ __('Back to Dashboard') }}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
