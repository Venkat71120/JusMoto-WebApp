<h4 class="dashboard__inner__item__header__title mt-4">{{ __('Client Location') }}</h4>
<!-- Table Design One -->
<div class="tableStyle_one mt-4">
    <div class="table-responsive">
        <!-- Table -->
        <table class="table orderItemTable">
            <thead>
            <tr>
                <th>{{ __('Address') }}</th>
                <th>{{ __('State') }}</th>
                <th>{{ __('City') }}</th>
                <th>{{ __('Area') }}</th>
                <th>{{ __('Post_Code') }}</th>
                <th>{{ __('Latitude') }}</th>
                <th>{{ __('Longitude') }}</th>

            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $order->OrderLocations?->address }}</td>
                    <td>{{ $order->OrderLocations?->state?->state }}</td>
                    <td>{{ $order->OrderLocations?->city?->city}}</td>
                    <td>{{ $order->OrderLocations?->area?->area }}</td>
                    <td>{{ $order->OrderLocations?->post_code}}</td>
                    <td>{{ $order->OrderLocations?->latitude}}</td>
                    <td>{{ $order->OrderLocations?->longitude}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</div>
<!-- End-of Table one -->
