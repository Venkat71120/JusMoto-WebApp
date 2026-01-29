<h4 class="dashboard__inner__item__header__title mt-4">{{ __('Orders items') }}</h4>
<!-- Table Design One -->
<div class="tableStyle_one mt-4">
    <div class="table-responsive">
        <!-- Table -->
        <table class="table orderItemTable">
            <thead>
            <tr>
                <th>{{ __('Item Id') }}</th>
                <th>{{ __('Title') }}</th>
                <th>{{ __('Type') }}</th>
                <th>{{ __('Quantity') }}</th>
                <th>{{ __('Price') }}</th>
                <th>{{ __('Total Price') }}</th>
                <th>{{ __('Action') }}</th>
            </tr>
            </thead>
            <tbody>
            @foreach($order->orderItems as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->service?->title }}</td>
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
                    <td>{{ $flag }}</td>
                    <td>{{ $item->qty }}</td>
                    <td>{{ $item->price }}</td>
                    <td>{{ $item->price* $item->qty}}</td>
                    <td>   
                        @if($item->type == 0)
                            
                            <a href="{{ route('admin.service.details', $item->service_id) }}" class="cmnBtn btn_5 btn_bg_info radius-5">
                               {{ __('View Info') }}
                            </a>
                            
                        @endif
                        @if($item->type == 1)
                           
                            <a href="{{ route('admin.product.details', $item->service_id) }}" class="cmnBtn btn_5 btn_bg_info radius-5">
                               {{ __('View Info') }}
                            </a>
                           
                        @endif              
                    </td>

                    
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>
<!-- End-of Table one -->
