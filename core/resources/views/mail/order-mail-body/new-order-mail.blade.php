@php
   
    if($order_details->delivery_mode == "pickup")
    {
        $order_location =  \App\Models\OrderLocation::with('state', 'city', 'area')->where('order_id', $order_details->id)->first();
    }
    else if($order_details->delivery_mode == "walkin")
    {
        $order_location =  \App\Models\Backend\Admin_outlet_location::with('state', 'city', 'area')->where('id', $order_details->outlet_location_id)->first();
    }
    
   
@endphp
<style>
    h3{
        color: #111d5c;
        text-align: center;
        margin: 20px 0;
    }
    table{
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 30px;
        border: 1px solid #ddd;
    }
    table tr{

        background-color: #111d5c;
        color: #fff;
    }
    table th{
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }
    table td{
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .item_details{
        overflow-x: auto;
    }
    .table-container{
        overflow-x: auto;
    }

</style>    

<div class="inner-wrap-contents">
    <p class="wrap-para">{{ __('Hello, Order Created By:') }} {{ optional($order_details->user)->first_name }} <br>
        {{ __('Order has been created successfully at:') .' ' .optional($order_details->created_at)->toFormattedDateString().',  '. ucwords(str_replace("_", " ", $order_details->payment_gateway)) }}
    </p>
    <h4 class="earning-order-title">{{ __('Order ID') }} #{{ $order_details->id }}<br>
        {{ __('Delivery Charge:') }} {{ float_amount_with_currency_symbol($order_details->delivery_charge) }}<br>
        {{ __('Delivery Mode:') }} {{ ($order_details->delivery_mode ?? 'pickup') }}<br>
        {{ __('Sub Total Amount:') }} {{ float_amount_with_currency_symbol($order_details->sub_total) }}<br>
        {{ __('Tax Amount:') }} {{ float_amount_with_currency_symbol($order_details->tax) }} <br>
        {{ __('Total Amount:') }} {{ float_amount_with_currency_symbol($order_details->total) }}<br>
        {{ __('Invoice Number:') }} {{ $order_details->invoice_number }} <br>
       @if(!empty($order_details->transaction_id))
            {{ __('Your Transaction Id:') }} {{ $order_details->transaction_id }} <br>
        @endif
       <strong>{{ __('Order Create Date:') }} {{ optional($order_details->created_at)->toFormattedDateString() }} </strong>
    </h4>
</div>


@if($order_details->coupon_code != '')
    <h3>{{ __('Coupon Details') }}</h3>
    <div class="table-container">
        <table>
            <thead>
            <tr>
                <th>{{ __('Coupon Code') }}</th>
                <th >{{ __('Coupon Type') }}</th>
                <th>{{ __('Coupon Amount') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ $order_details->coupon_code }}</td>
                <td>{{ $order_details->coupon_type }}</td>
                <td>
                    @if($order_details->coupon_amount > 0)
                        {{ float_amount_with_currency_symbol($order_details->coupon_amount) }}
                    @endif
                </td>
            </tr>
            </tbody>
        </table>
    </div>
@endif


<h3> @if($user_type == 0) {{ __('Order Details') }} @else {{ __('Order Items Details') }} @endif </h3>
<div class="item_details">
    <table>
        <thead>
        <tr >
            <th>{{ __('Title') }}</th>
            <th >{{ __('Type') }}</th>
            <th >{{ __('Quantity') }}</th>
            <th>{{ __('Price') }}</th>
            <th>{{ __('Total Price') }}</th>
        </tr>
        </thead>
        <tbody>
        @foreach($order_details->orderItems as $item)
            <tr>
                <td>{{  $item->service?->title }}</td>
                @php
                    $flag = "";
                    if($item->type == 0)
                    {
                        $flag = __('Service');
                    }
                    else if($item->type == 1)
                    {
                        $flag = __('Product');
                    }
                @endphp
                <td >{{ $flag }}</td>
                <td >{{ $item->qty }}</td>
                <td >{{ $item->price }}</td>
                <td >{{ $item->price* $item->qty}}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>




@if(!empty($order_location))

    <div class="earning-wrapper">
        <h3 >
          {{ __('Order Location Details') }} 
        </h3>
        <hr>
        <p class="wrap-para"><strong>{{ __('State:') }}</strong> {{ optional($order_location->state)->state }}</p>
        <p class="wrap-para"><strong>{{ __('City:') }}</strong> {{ optional($order_location->city)->city }}</p>
        <p class="wrap-para"><strong>{{ __('Area:') }}</strong> {{ optional($order_location->area)->area }}</p>
        <p class="wrap-para"><strong>{{ __('Title:') }}</strong> {{ $order_location->name ?? null }}</p>
        <p class="wrap-para"><strong>{{ __('Post Code:') }}</strong> {{ $order_location->post_code }}</p>
        <p class="wrap-para"><strong>{{ __('Address:') }}</strong> {{ $order_location->address }}</p>
        <p class="wrap-para"><strong>{{ __('Phone:') }}</strong> {{ $order_location->phone }}</p>
        <p class="wrap-para"><strong>{{ __('Emergency Phone:') }}</strong> {{ $order_location->emergency_phone }}</p>
       
    </div>
      
  
@endif
