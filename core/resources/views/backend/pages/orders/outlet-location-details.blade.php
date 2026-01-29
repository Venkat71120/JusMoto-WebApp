<h4 class="dashboard__inner__item__header__title mt-4">{{ __('Outlet Location') }}</h4>
<!-- Table Design One -->
<div class="tableStyle_one mt-4">
    <div class="table-responsive">
        <!-- Table -->
        <table class="table orderItemTable">
            <thead>
            <tr>
                <th>{{ __('Name') }}</th>
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
                    <td>{{ $outlet_location?->name }}</td>
                    <td>{{ $outlet_location?->address }}</td>
                    <td>{{ $outlet_location?->state?->state }}</td>
                    <td>{{ $outlet_location?->city?->city}}</td>
                    <td>{{ $outlet_location?->area?->area }}</td>
                    <td>{{ $outlet_location?->post_code}}</td>
                    <td>{{ $outlet_location?->latitude}}</td>
                    <td>{{ $outlet_location?->longitude}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</div>
<!-- End-of Table one -->
