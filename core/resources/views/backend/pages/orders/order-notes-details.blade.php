<div class="col-xl-12  col-md-12 mt-5">
    <div class="customer__details__author__item padding-20 radius-10">
        <div class="customer__details__author__item__header">
            <div class="customer__details__author__item__header__flex">
                <div class="customer__details__author__item__header__left">
                    <h4 class="customer__details__author__item__title">{{ __('Order Notes') }}</h4>
                </div>
            </div>
        </div>
        <div class="customer__details__author__item__inner border_top_1 top_15">
            <div class="customer__account__details">
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <span>{{ $order->order_note ?? "No order note found" }}</span>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
