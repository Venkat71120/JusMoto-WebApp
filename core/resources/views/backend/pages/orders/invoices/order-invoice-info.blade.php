<div class="invoice-details-flex">
    <div class="invoice-single-details" id="invoice-single-details-company">
        <h4 class="invoice-details-title">{{ get_static_option('bill_to_title') ?? __('Bill To Title:') }}</h4>
        <ul class="details-list">
            <li class="list"> {{ __('Name:') }} {{ get_static_option('site_title') }} </li>
            <li class="list"> <a href="#"> {{ __('Email:') }} {{ get_static_option('site_email') }} </a> </li>
            <li class="list"> <a href="#"> {{ __('Phone:') }} {{  get_static_option('site_phone') }}</a> </li>
            <li class="list" id="company-address">
                <a href="#"> {{ __('Address:') }} {{ get_static_option('site_address') }}</a>
            </li>
        </ul>
    </div>
    <div class="invoice-single-details" id="invoice-single-details-customer">
        <h4 class="invoice-details-title">{{ get_static_option('ship_to_title') ?? __('Ship To Title:') }}</h4>
        <ul class="details-list">
        @php
            $location = $order_details?->OrderLocations?->first();
        @endphp
            <li class="list"> <strong>{{ __('Name') }}: </strong> {{ $order_details?->user?->first_name ?? __('N/A') }} </li>
            <li class="list"> <strong>{{ __('Phone') }}: </strong> {{ $location?->phone ?? __('N/A') }} </li>
            <li class="list"> <strong>{{ __('Emergency Phone') }}: </strong> {{ $location?->emergency_phone ?? __('N/A') }} </li>
            <li class="list"> <strong>{{ __('Address Type') }}: </strong>
                @if($location?->type == 1)
                    {{ __('Office') }}
                @else
                    {{ __('Home') }}
                @endif
            </li>
            <li class="list"> <strong>{{ __('City') }}: </strong> {{ $location?->city?->city ?? __('N/A') }} </li>
            <li class="list"> <strong>{{ __('Area') }}: </strong> {{ $location?->area?->area ?? __('N/A') }} </li>
            <li class="list"> <strong>{{ __('Post Code') }}: </strong> {{ $location?->post_code ?? __('N/A') }} </li>
            <li class="list" id="customer-address">
                <strong>{{ __('Address') }}: </strong> {{ $location?->address ?? __('N/A') }}
            </li>
        </ul>
    </div>
</div>
<div class="order-item-description">
    <div class="table-responsive">
        <h5 class="table-title">{{ __('Items') }}</h5>
        <table class="custom--table">
            <thead class="head-bg">
            <tr>
                <th>{{ __('Item ID') }}</th>
                <th>{{ __('Item Title') }}</th>
                <th>{{ __('Quantity') }}</th>
                <th>{{ __('Unit Price') }}</th>
                <th>{{ __('Total price') }}</th>
            </tr>
            </thead>
            <tbody>
            @foreach($order_details->orderItems as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->service?->title }}</td>
                    <td>{{ $item->qty }}</td>
                    <td>{{ float_amount_with_currency_symbol($item->price) }}</td>
                    @php
                        $sum=$item->qty * $item->price;
                    @endphp
                    <td>{{ float_amount_with_currency_symbol($sum) }}</td>
                </tr>
            @endforeach    
            </tbody>
        </table>
    </div>
</div>

<table class="table">
    <tr>
        <td>
            <div class="order-single-details">
                <h4 class="order-details-title">{{ "Order Details" }}</h4>
                <ul class="details-list">
                    <li class="list"> {{ __('Id:') }} {{ $order_details->id }} </li>
                    <li class="list"> {{ __('Status:') }}
                        @if ($order_details->status == 0)  <span>{{ __('Pending') }}</span>@endif
                        @if ($order_details->status == 1) <span> {{ __('Active') }}</span>@endif
                        @if ($order_details->status == 2) <span> {{ __('Completed') }}</span>@endif
                        @if ($order_details->status == 3) <span> {{ __('Delivered') }}</span>@endif
                        @if ($order_details->status == 4) <span> {{ __('Cancelled') }}</span>@endif
                    </li>
                    <li class="list"> {{ __('Delivery Mode:') }} {{ $order_details->delivery_mode }} </li>
                    <li class="list"><span class="data-span"> {{ __('Delivery Charge:') }} </span>
                        {{ float_amount_with_currency_symbol($order_details->delivery_charge) }}
                    </li>
                    <li class="list"><span class="data-span"> {{ __('Sub Total:') }} </span>
                        {{ float_amount_with_currency_symbol($order_details->sub_total) }}
                    </li>
        
                    @if(!empty($order_details->coupon_amount))
                        <li class="list"><span class="data-span"> {{ __('Coupon Amount:') }} </span>
                        <strong>-</strong> {{ float_amount_with_currency_symbol($order_details->coupon_amount) }}
                        </li>   
                    @endif
        
                    <li class="list"><span class="data-span"> {{ __('Tax:') }} </span>
                        <strong>+</strong> {{ float_amount_with_currency_symbol($order_details->tax) }}
                    </li>    
                    <li class="list">
                        <span class="data-span"> {{ __('Total:') }} </span>{{ float_amount_with_currency_symbol($order_details->total) }} <br>
                    </li>
                </ul>
            </div>
        </td>
        <td>
            <div class="order-single-details">
                <h5 class="order-details-title">{{ "Payment Details" }}</h5>
                <ul class="details-list">
                    <li class="list"> <strong>{{ __('Payment Gateway') }}: </strong> {{ $order_details?->payment_gateway }} </li>
                    @php
                        $flag="";
                        if($order_details?->payment_status == 0)
                        {
                            $flag="Pending";
                        }
                        elseif($order_details?->payment_status == 1)
                        {
                            $flag="Completed";
                        }
                    @endphp
                    <li class="list"> <strong>{{ __('Payment Status') }}: </strong> {{ $flag }} </li>
                </ul>
            </div>
        </td>        
    </tr>    
   
   
</table> 







