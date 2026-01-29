<div class="perent">
    <div class="payment-getway">
        <h2>{{__('Choose Payment Method')}}</h2>
        <div class="mt-3">
            <div class="confirm-payment payment-border">
                <div class="single-checkbox">
                    <div class="checkbox-inlines">
                        <label class="checkbox-label" for="check2">
                            @if (Auth::check() && Auth::user()->wallet?->available_balance > 0)
                                {!! \App\Helpers\PaymentGatewayRenderHelper::renderWalletForm() !!}
                                <span class="wallet-balance mt-2 d-block">{{ __('Wallet Balance:') }}
                                    <strong
                                        class="main-balance">{{ float_amount_with_currency_symbol(Auth::user()->wallet?->available_balance) }}
                                    </strong>
                                </span>
                                <br>
                                <span class="display_balance"></span>
                                <br>
                                <span class="deposit_link"></span>
                            @endif

                            <br>
                            {!! \App\Helpers\PaymentGatewayRenderHelper::renderPaymentGatewayForForm(['cash_on_delivery']) !!}
                        </label>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
