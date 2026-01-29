<div class="col-xl-6 col-lg-6 col-md-6 col-12 mt-4">
    <div class="customer__details__author__item p-2 radius-10">
        <div class="customer__details__author__item__header">
            <div class="customer__details__author__item__header__flex">
                <div class="customer__details__author__item__header__left">
                    <h4 class="customer__details__author__item__title">{{ __('Order Details') }}</h4>
                </div>
            </div>
        </div>
        <div class="customer__details__author__item__inner border_top_1 top_15">
            <div class="customer__account__details">
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Order ID:') }}</strong>
                        <span>{{ $order->id }}</span>
                    </div>
                </div> 
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Booking Date:') }}</strong>
                        <span>{{ $order->date }}</span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Schedule:') }}</strong>
                        <span>{{ $order->schedule }}</span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Delivery_mode:') }}</strong>
                        <span>{{ $order->delivery_mode }}</span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Status:') }}</strong>
                        <x-status.main-order-status :status="$order->status"/>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Payment Gateway:') }}</strong>
                        <span>{{ ucwords(str_replace("_", " ", $order->payment_gateway)) }}</span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        @php
                            $flag="";
                            if($order->payment_status== 0) {
                                $flag="pending";
                            }
                            elseif($order->payment_status== 1) {
                                $flag="completed";
                            }    

                        @endphp
                        <strong>{{ __('Payment Status:') }}</strong>
                        <span class="text-bold">{{ ucwords(str_replace("_", " ", $flag)) }}</span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong>{{ __('Invoice No:') }}</strong>
                        <span>{{ $order->invoice_number }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
