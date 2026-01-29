<div class="row">
    <div class="col-lg-12">
        <div class="total-amount-section ">
            <div class="cupon-input d-flex form-controls input-summary align-items-center justify-between">
                <input type="text" class="add-coupon" id="coupon_code" name="coupon" placeholder="Coupon Code" value="{{old('coupon')}}">
                <button type="button" id="applyCouponBtn" class="cmn-btn black-btn md-btn">{{__('Apply Coupon')}}</button>
            </div>

            @php
                $delivery = session('booking_delivery_charge', 0);
                $tax      = session('booking_tax', 0);
                $discount = session('booking_discount', 0);
                $total    = session('booking_total', $sub_total);

            @endphp

            <div class="order-summary">
                <div class="summary-title">
                    <h2 class="subtitle-2 fw_semibold">{{__('Order Summary')}}</h2>
                </div>
                <div class="items-wrapper">
                    <div class="d-flex align-items-center justify-between">
                        <span class="fs_md fw_mideum">{{__('Sub Total')}}</span>
                        <span class="fs_md fw_semibold item-price">{{float_amount_with_currency_symbol($sub_total)}}</span>
                    </div>
                    <div class="d-flex align-items-center justify-between">
                        <span class="fs_md fw_semibold">{{__('Discount')}}</span>
                        <span class="fs_md fw_semibold item-price">{{__('- ')}}{{float_amount_with_currency_symbol($discount)}}</span>
                    </div>
                    <div class="d-flex align-items-center justify-between">
                        <span class="fs_md fw_mideum">{{__('Shipping')}}</span>
                        <span class="fs_md fw_semibold item-price">{{__('+ ')}}{{float_amount_with_currency_symbol($delivery)}}</span>
                    </div>
                    <div class="d-flex align-items-center justify-between">
                        <span class="fs_md fw_semibold">{{__('Tax')}}<span class="tax-percentage">(0%)</span></span>
                        <span class="fs_md fw_semibold item-price">{{__('+ ')}}{{float_amount_with_currency_symbol($tax)}}</span>
                    </div>

                </div>

                <div class="d-flex align-items-center justify-between total-payable">
                    <span class="fs_md fw_semibold item-price">{{__('Total Price')}}</span>
                    <span class="fs_md fw_bold selected">{{float_amount_with_currency_symbol($total)}}</span>
                </div>
                <input type="hidden" id="order_total" value="{{ $sub_total }}">
                <input type="hidden" id="sub_total_with_coupon" name="sub_total_with_coupon" value="{{ $sub_total }}">

                <div class="procced-to-pay">
                    <button type="submit" class="cmn-btn md-btn primary-btn w-100 text-center">{{__('Pay & Confirm Order')}}</button>
                </div>
            </div>
        </div>
    </div>

</div>
