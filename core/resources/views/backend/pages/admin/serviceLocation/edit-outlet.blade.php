@extends('backend.admin-master')
@section('site-title')
    {{__('Edit Outlet')}}
@endsection
@section('style')
    <x-media.css/>
    <style>
        /* ===== CLEAN & MODERN EDIT OUTLET PAGE ===== */

        :root {
            --white: #ffffff;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --red: #e31b23;
            --red-light: #fee2e2;
            --red-dark: #b91c1c;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .edit-outlet-page {
            padding: 24px;
            background: var(--gray-50);
            min-height: 100vh;
        }

        /* Dashboard Card */
        .dashboard__card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
        }

        /* Header */
        .header-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            padding: 20px 24px;
            border-bottom: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        .header-title {
            font-size: 22px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0;
            position: relative;
            padding-left: 16px;
        }

        .header-title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 20px;
            background: var(--red);
            border-radius: 4px;
        }

        /* Back Button */
        .btn_bg_info {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 22px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            color: var(--gray-700);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--transition);
        }

        .btn_bg_info:hover {
            background: var(--red);
            border-color: var(--red);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.15);
        }

        .btn_bg_info i {
            font-size: 16px;
        }

        /* Form Container */
        .add-listing-content-wrapper {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            padding: 24px;
            margin-top: 16px;
        }

        /* Form Elements */
        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 6px;
        }

        .required-star {
            color: var(--red);
            margin-left: 2px;
        }

        .form-control {
            width: 100%;
            padding: 10px 14px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        .form-control::placeholder {
            color: var(--gray-400);
            font-size: 14px;
        }

        textarea.form-control {
            min-height: 100px;
            resize: vertical;
        }

        /* Select2 Customization */
        .select2-container--default .select2-selection--single {
            border: 1px solid var(--gray-300) !important;
            border-radius: var(--radius) !important;
            height: 42px !important;
            padding: 8px 0 !important;
            background: var(--white) !important;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            color: var(--gray-800) !important;
            font-size: 14px !important;
            line-height: 24px !important;
            padding-left: 14px !important;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 40px !important;
            right: 8px !important;
        }

        .select2-dropdown {
            border: 1px solid var(--gray-300) !important;
            border-radius: var(--radius) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }

        .select2-results__option {
            padding: 8px 14px !important;
            font-size: 14px !important;
            color: var(--gray-800) !important;
        }

        .select2-results__option--highlighted {
            background: var(--red-light) !important;
            color: var(--red) !important;
        }

        .select2-results__option[aria-selected="true"] {
            background: var(--red) !important;
            color: white !important;
        }

        /* Map */
        #map_canvas {
            height: 400px;
            border: 1px solid var(--gray-200);
            border-radius: var(--radius);
            margin-bottom: 16px;
        }

        /* Search Input for Map */
        #pac-input {
            height: 42px;
            width: 100%;
            max-width: 400px;
            margin: 10px;
            padding: 8px 16px;
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            font-size: 14px;
            background: var(--white);
            box-shadow: var(--shadow-sm);
        }

        #pac-input:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        /* Grid Layout */
        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .full-width {
            grid-column: span 2;
        }

        /* Coordinates Row */
        .coordinates-row {
            display: flex;
            gap: 20px;
        }

        .coordinates-row .form-group {
            flex: 1;
        }

        /* Submit Button */
        .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 32px;
            background: var(--red);
            border: none;
            border-radius: 40px;
            color: white;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
        }

        .btn-primary:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
        }

        .btn-primary i {
            font-size: 16px;
        }

        /* Button Wrapper */
        .btn-wrapper {
            margin-top: 24px;
            text-align: right;
        }

        /* Clear Button */
        .clear_all_value {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 22px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            color: var(--gray-700);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            margin-right: 12px;
        }

        .clear_all_value:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .edit-outlet-page {
                padding: 16px;
            }
            
            .header-wrap {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .btn_bg_info {
                width: 100%;
                justify-content: center;
            }
            
            .form-grid {
                grid-template-columns: 1fr;
            }
            
            .full-width {
                grid-column: span 1;
            }
            
            .coordinates-row {
                flex-direction: column;
                gap: 0;
            }
        }

        @media (max-width: 1499px) {
            #pac-input {
                width: calc(100% - 20px);
                margin: 10px;
            }
        }

        /* Preserve original classes */
        .single-dashboard-input {
            display: flex;
            flex-wrap: wrap;
            gap: 22px;
            align-items: center;
        }
        
        .single-info-input {
            flex: 1;
        }
        
        .btn-wrapper.margin-top-20 {
            text-align: end;
        }
        
        .close {
            border: none;
        }
        
        .dashboard-switch-single {
            font-size: 20px;
        }
        
        .swal_delete_button {
            color: #da0000 !important;
        }
        
        .condition {
            padding: 13px;
            border: 2px solid #e9e9e9;
            border-radius: 6px;
        }
        
        .radio input {
            height: 20px;
            width: 20px;
        }
        
        .form__input__single {
            flex: 1;
        }
        
        .flex_0 {
            flex-shrink: 0;
        }
    </style>
@endsection

@section('content')
    <div class="edit-outlet-page">
        <div class="row g-4 mt-0">
            <div class="col-xl-12 col-lg-12 mt-0">
                <div class="dashboard__card">
                    <div class="header-wrap d-flex justify-content-between">
                        <div class="left-content">
                            <h4 class="header-title">{{__('Edit Outlet Details')}}</h4>
                        </div>
                        <div class="right-content">
                            <a class="btn_bg_info" href="{{route('admin.outletAddress.all')}}">
                                <i class="las la-arrow-left"></i>
                                {{__('All Outlets')}}
                            </a>
                        </div>
                    </div>

                    <x-validation.error/>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="add-listing-wrapper">
                                <form action="{{route('admin.outlet.edit', $outlet->id)}}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    <div class="add-listing-content-wrapper">
                                        <div class="tab-content" id="add-listing-tabContent">
                                            @include('backend.pages.admin.serviceLocation.edit-outlet-details')
                                        </div>
                                        
                                        <div class="btn-wrapper">
                                            <button type="button" class="clear_all_value">
                                                <i class="las la-undo"></i>
                                                {{__('Clear All')}}
                                            </button>
                                            <button type="submit" class="btn-primary" id="outlet_submit">
                                                <i class="las la-save"></i>
                                                {{__('Update Outlet')}}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-media.markup/>
@endsection

@section('scripts')
    <x-media.js />
    <x-frontend.js.new-tag-add-js/>
    <script src="{{asset('assets/backend/js/sweetalert2.js')}}"></script>
    
    <!-- Google Maps API -->
    <script src="https://maps.googleapis.com/maps/api/js?key={{get_static_option('google_map_api_key')}}&libraries=places&v=3.46.0"></script>
    
    <script>
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#viewer').attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#customFileEg1").change(function () {
            readURL(this);
        });

        $(document).ready(function () {
            // Initialize Select2
            $('#state').select2({
                placeholder: '{{ __('Select State') }}', 
                allowClear: true,
            });
            
            $('#city').select2({
                placeholder: '{{ __('Select City') }}',
                allowClear: true, 
            });
            
            $('#area').select2({
                placeholder: '{{ __('Select Area') }}',  
                allowClear: true, 
            });

            // State change handler
            $('#state').change(function () {
                const stateId = this.value;
                const citySelect = document.getElementById('city');
                const areaSelect = document.getElementById('area');
               
                citySelect.innerHTML = '<option value="">{{ __("Select City") }}</option>';
                
                if (stateId) {
                    $.ajax({
                        method: 'GET',
                        url: '/admin/outletAddress/get-cities/' + stateId,
                        success: function (data) {
                            if (data.cities) {
                                data.cities.forEach(city => {
                                    const option = document.createElement('option');
                                    option.value = city.id;
                                    option.textContent = city.city;
                                    citySelect.appendChild(option);
                                });
                            }
                            $('#area').val(null).trigger('change');
                        },
                        error: function (xhr) {
                            console.error('Error fetching cities:', error);
                        }    
                    });
                }
            });

            // City change handler
            $('#city').change(function () {
                const cityId = this.value;
                const areaSelect = document.getElementById('area');
                const stateId = document.getElementById('state').value;
                
                areaSelect.innerHTML = '<option value="">{{ __("Select area") }}</option>';
               
                if (cityId) {
                    $.ajax({
                        method: 'GET',
                        url: '/admin/outletAddress/get-areas/' + cityId + '/' + stateId,
                        success: function (data) {
                            if (data.areas) {
                                data.areas.forEach(area => {
                                    const option = document.createElement('option');
                                    option.value = area.id;
                                    option.textContent = area.area;
                                    areaSelect.appendChild(option);
                                });
                            }
                        },
                        error: function (xhr) {
                            console.error('Error fetching areas:', error);
                        }    
                    });
                }
            });

            // Clear all button
            $('.clear_all_value').on('click', function () {
                $('#name').val(null);
                $('#pac-input').val(null);
            });

            // Google Maps initialization
            function initAutocomplete() {
                var myLatLng = {
                    lat: <?= $location->latitude ?? 0 ?>,
                    lng: <?= $location->longitude ?? 0 ?>
                };

                const map = new google.maps.Map(document.getElementById("map_canvas"), {
                    center: myLatLng,
                    zoom: 13,
                    mapTypeId: "roadmap",
                });

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                });

                marker.setMap(map);
                var geocoder = new google.maps.Geocoder();

                google.maps.event.addListener(map, 'click', function (mapsMouseEvent) {
                    var coordinates = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);
                    var coordinates = JSON.parse(coordinates);
                    var latlng = new google.maps.LatLng(coordinates['lat'], coordinates['lng']);
                    marker.setPosition(latlng);
                    map.panTo(latlng);
                    document.getElementById('latitude').value = coordinates['lat'];
                    document.getElementById('longitude').value = coordinates['lng'];

                    geocoder.geocode({ 'location': latlng }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var countryName = '';
                                var cityName = '';
                                var zipCode = '';

                                for (var i = 0; i < results[0].address_components.length; i++) {
                                    var addressComponent = results[0].address_components[i];

                                    if (addressComponent.types.includes('country')) {
                                        countryName = addressComponent.long_name;
                                    }
                                    if (addressComponent.types.includes('locality') || addressComponent.types.includes('postal_town')) {
                                        cityName = addressComponent.long_name;
                                    }
                                    if (addressComponent.types.includes('postal_code')) {
                                        zipCode = addressComponent.long_name;
                                    }
                                }
                                document.getElementById('zipcode').value = zipCode;
                                var final_address = cityName + ', ' + countryName;
                                $('#outlet_address').val(final_address);
                            }
                        }
                    });
                });

                const input = document.getElementById("pac-input");
                const searchBox = new google.maps.places.SearchBox(input);
                map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
                
                map.addListener("bounds_changed", () => {
                    searchBox.setBounds(map.getBounds());
                });

                let markers = [];
                
                searchBox.addListener("places_changed", () => {
                    const places = searchBox.getPlaces();
                    if (places.length == 0) { return; }
                    
                    markers.forEach((marker) => {
                        marker.setMap(null);
                    });
                    markers = [];
                    
                    const bounds = new google.maps.LatLngBounds();
                    places.forEach((place) => {
                        if (!place.geometry || !place.geometry.location) {
                            return;
                        }
                        var mrkr = new google.maps.Marker({
                            map,
                            title: place.name,
                            position: place.geometry.location,
                        });
                        
                        google.maps.event.addListener(mrkr, "click", function (event) {
                            var coordinates = JSON.stringify(event.latLng.toJSON(), null, 2);
                            var coordinates = JSON.parse(coordinates);
                            var latlng = new google.maps.LatLng(coordinates['lat'], coordinates['lng']);
                            marker.setPosition(latlng);
                            map.panTo(latlng);
                            
                            document.getElementById('latitude').value = this.position.lat();
                            document.getElementById('longitude').value = this.position.lng();

                            geocoder.geocode({ 'location': latlng }, function (results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {
                                    if (results[0]) {
                                        var countryName = '';
                                        var cityName = '';

                                        for (var i = 0; i < results[0].address_components.length; i++) {
                                            var addressComponent = results[0].address_components[i];

                                            if (addressComponent.types.includes('country')) {
                                                countryName = addressComponent.long_name;
                                            }
                                            if (addressComponent.types.includes('locality') || addressComponent.types.includes('postal_town') || addressComponent.types.includes('administrative_area_level_1') || addressComponent.types.includes('administrative_area_level_2')) {
                                                cityName = addressComponent.long_name;
                                            }
                                        }
                                        var final_address = cityName + ', ' + countryName;
                                        $('#outlet_address').val(final_address);
                                    }
                                }
                            });
                        });
                        
                        markers.push(mrkr);
                        if (place.geometry.viewport) { 
                            bounds.union(place.geometry.viewport); 
                        } else { 
                            bounds.extend(place.geometry.location); 
                        }
                    });
                    map.fitBounds(bounds);
                });
            }
            
            initAutocomplete();
        });
    </script>
@endsection