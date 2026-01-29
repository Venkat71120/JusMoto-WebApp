<div class="modal fade w-100" id="paymentGatewayModal" tabindex="-1" aria-labelledby="paymentGatewayModalLabel" aria-hidden="true">
    <div class="modal-dialog ab">
        <form action="{{route('client.order.payment.process')}}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paymentGatewayModalLabel">{{ $title ?? '' }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="confirm-payment payment-border">
                        <div class="single-checkbox">
                            <div class="checkbox-inlines">
                                <label class="checkbox-label" for="check2">
                                    @if (Auth::check() && Auth::user()->wallet?->available_balance > 0)
                                        {!! \App\Helpers\PaymentGatewayRenderHelper::renderWalletForm() !!}
                                        <span class="wallet-balance mt-2 d-block">{{ __('Wallet Balance:') }}
                                            <strong
                                                class="main-balance">{{ float_amount_with_currency_symbol(Auth::user()->wallet?->available_balance) }}</strong></span>
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
                    <hr>
                    <div class="amount_details">
                        <div class="customer__account__details">
                            <input type="hidden" name="order_id" id="order_id" value="{{$order->id}}">
                            <div class="customer__account__details__item">
                                <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                    <strong>{{ __('Sub Total:') }}</strong>
                                    <span>{{ float_amount_with_currency_symbol($order->sub_total)  }}</span>
                                </div>
                            </div>
                            <div class="customer__account__details__item">
                                <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                    <strong>{{ __('Tax:') }}</strong>
                                    <span><strong>+</strong>{{ float_amount_with_currency_symbol($order->tax)  }}</span>
                                </div>
                            </div>
                            <div class="customer__account__details__item">
                                <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                    <strong>{{ __('Shipping Charge:') }}</strong>
                                    <span><strong>+</strong>{{ float_amount_with_currency_symbol($order->delivery_charge)  }}</span>
                                </div>
                            </div>
                            @if(!empty($order->coupon_code) && !empty($order->coupon_amount))
                                <div class="customer__account__details__item">
                                    <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                        <strong>{{ __('Coupon Code:') }}</strong>
                                        <span>{{ $order->coupon_code }}</span>
                                    </div>
                                </div>
                                <div class="customer__account__details__item">
                                    <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                        <strong>{{ __('Discount:') }}</strong>
                                        <span><strong>-</strong><span id="discount">{{float_amount_with_currency_symbol($order->coupon_amount)  }}</span></span>
                                    </div>
                                </div>
                            @else
                                <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                    <strong>{{ __('Discount:') }}</strong>
                                    <span><strong>-</strong><span id="discount">{{float_amount_with_currency_symbol(0.00)  }}</span></span>
                                </div>
                            @endif

                            <div class="customer__account__details__item">
                                <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                    <strong>{{ __('Total:') }}</strong>
                                    <span><span id="total_after_discount">{{ float_amount_with_currency_symbol($order->total)  }}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>

                </div>
                <div class="modal-footer">
                    <div class="btn-wrapper d-flex align-items-center gap-2">
                        <button type="button" class="cmn-btn btn_gray" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="cmn-btn btn_primary" >{{__('Order Now')}}</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

