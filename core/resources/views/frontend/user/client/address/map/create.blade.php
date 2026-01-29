@extends('frontend.user.layout.master')
@section('title')
    {{__('Add New Address')}}
@endsection
@section('style')
    <link rel="stylesheet" href="{{asset('assets/backend/css/bootstrap-tagsinput.css')}}">
    <style>

    </style>
@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container ">
        <div class="p_15 d-flex flex-column gap-4">
            <div class="page_header">
                <h3 class="section-heading">{{__('Add New Address')}}</h3>
            </div>
            <div class="d-flex justify-content-between flex-wrap gap-4">
                <div class="d-flex gap-3">
                    <button class="cmn-btn btn_secondary select_address_btn active"  id="btn_home">
                        <span class="icon-base ti tabler-home"></span>
                        <span>{{__('Home')}}</span>
                    </button>
                    <button class="cmn-btn btn_secondary select_address_btn"  id="btn_office">
                        <i class="icon-base ti tabler-building-skyscraper"></i>
                        <span>{{__('office')}}</span>
                    </button>
                </div>
            </div>
            <form action="{{route('client.address.create')}}" method="POST">
                @csrf
                <div class="">
                    <div class="custom_input_wrapper">
                        <input type="hidden" name="from_map" value="1">
                        <input type="hidden" name="type" id="type" value="{{__('0')}}">
                        <input type="hidden" name="return_url" value="{{ $return_url }}">
                        <label for="area_title" class="form-label">{{__('Title')}}</label>
                        <input type="text" name="title" id="area_title" class="custom_input"
                               placeholder="Enter Title" autocomplete="on" value="{{old('title')}}">
                    </div>
                </div>
                <div>
                    <div class="map_init area_select mt-4">
                        <div class="card">
                            <div class="card-body">
                                <!-- Start Map -->
                                <div class="map-warper dark-support rounded overflow-hidden">
                                    <input id="pac-input" class="controls rounded"
                                           type="text" placeholder="{{ __('Search your Zone')}}"/>
                                    <div id="map_canvas" style="height: 480px"></div>
                                </div>
                                <!-- End Map -->
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="latitude" id="latitude" class="custom_input"
                           placeholder="Enter Latitude" autocomplete="on" value="{{old('latitude')}}">
                    <input type="hidden"name="longitude" id="longitude" class="custom_input"
                           placeholder="Enter Longitude" autocomplete="on" value="{{old('longitude')}}">
                </div>
                <div class="mt-4">
                    <div class="custom_input_wrapper">
                        <label for="address" class="form-label">{{__('Street Address')}}</label>
                        <input type="text"  name="address" id="address" class="custom_input"
                               placeholder="Enter Street Address" autocomplete="on" value="{{ old('address') }}">
                    </div>
                </div>
                <div class=" d-flex flex-wrap gap-4 mt-4">
                </div>
                <div class=" d-flex flex-wrap gap-4 mt-4">
                    <div class="custom_input_wrapper">
                        <label for="zipcode" class="form-label">{{__('Zip Code')}}</label>
                        <input type="number" name="zipcode" id="zipcode" class="custom_input"
                               placeholder="Enter Zip Code" autocomplete="on" value="{{ old('zipcode') }}">
                    </div>
                    <div class="custom_input_wrapper">
                        <label for="phone" class="form-label">{{__('Phone')}}</label>
                        <input type="number" name="phone" id="phone" class="custom_input"
                               placeholder="Enter Phone" autocomplete="on" value="{{old('phone')}}">
                    </div>
                    <div class="custom_input_wrapper">
                        <label for="emergency_phone" class="form-label">{{__('Emergency Phone Number')}}</label>
                        <input type="number" name="emergency_phone" id="emergency_phone" class="custom_input"
                               placeholder="Enter Emergency Phone Number" autocomplete="on" value="{{old('emergency_phone')}}">
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn_primary">{{__('Save')}}</button>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('scripts')
    <x-frontend.js.new-tag-add-js/>
    <script src="{{asset('assets/backend/js/sweetalert2.js')}}"></script>
    <!-- google api key  -->
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
            $(document).on('keydown', '#pac-input', function (e) {
                if (e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });
            const oldState = "{{ old('state_id') }}";
            const oldCity = "{{ old('city_id') }}";
            const oldArea = "{{ old('area_id') }}";

            if (oldState) {
                $('#state').val(oldState).trigger('change');

                $.ajax({
                    method: 'GET',
                    url: '/client/location/get-cities/' + oldState,
                    success: function (data) {
                        if (data.cities) {
                            data.cities.forEach(city => {
                                const option = document.createElement('option');
                                option.value = city.id;
                                option.textContent = city.city;
                                if (String(city.id) === String(oldCity)) option.selected = true;
                                document.getElementById('city').appendChild(option);
                            });

                            if (oldCity) {
                                $.ajax({
                                    method: 'GET',
                                    url: '/client/location/get-areas/' + oldCity + '/' + oldState,
                                    success: function (data) {
                                        if (data.areas) {
                                            data.areas.forEach(area => {
                                                const option = document.createElement('option');
                                                option.value = area.id;
                                                option.textContent = area.area;
                                                if (String(area.id) === String(oldArea)) option.selected = true;
                                                document.getElementById('area').appendChild(option);
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }
            const typeInput = document.getElementById('type');
            const homeBtn = document.getElementById('btn_home');
            const officeBtn = document.getElementById('btn_office');

            homeBtn.addEventListener('click', function () {
                typeInput.value = 0;
            });

            officeBtn.addEventListener('click', function () {
                typeInput.value = 1;
            });

            $('#state').change(function () {
                const stateId = this.value;
                const citySelect = document.getElementById('city');
                const areaSelect = document.getElementById('area');

                // Clear previous city options
                citySelect.innerHTML = '<option value="">{{ __("Select City") }}</option>';

                if (stateId) {
                    // Fetch cities based on the selected state
                    $.ajax({
                        method: 'GET',
                        url: '/client/location/get-cities/'+stateId,
                        success: function (data) {
                            if (data.cities) {
                                data.cities.forEach(city => {

                                    const option = document.createElement('option');
                                    option.value = city.id;
                                    option.textContent = city.city;
                                    citySelect.appendChild(option);

                                });

                            }
                            else{

                            }

                            $('#area').val(null).trigger('change')
                        },
                        error: function (xhr, status, error) {

                        }

                    })

                }
            });
            $('#city').change(function () {
                const cityId = this.value;
                const areaSelect = document.getElementById('area');
                const stateId = document.getElementById('state').value;
                // Clear previous city options
                areaSelect.innerHTML = '<option value="">{{ __("Select area") }}</option>';


                if (cityId) {
                    // Fetch cities based on the selected state
                    $.ajax({
                        method: 'GET',
                        url: '/client/location/get-areas/'+cityId+'/'+stateId,
                        success: function (data) {

                            if (data.areas) {
                                data.areas.forEach(area => {

                                    const option = document.createElement('option');
                                    option.value = area.id;
                                    option.textContent = area.area;

                                    areaSelect.appendChild(option);
                                });
                            }
                            else{

                            }
                        },
                        error: function (xhr, status, error) {

                        }

                    })

                }
            });
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

                // new start
                google.maps.event.addListener(map, 'click', function (mapsMouseEvent) {
                    var coordinates = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);
                    var coordinates = JSON.parse(coordinates);
                    var latlng = new google.maps.LatLng(coordinates['lat'], coordinates['lng']);
                    marker.setPosition(latlng);
                    map.panTo(latlng);
                    document.getElementById('latitude').value = coordinates['lat'];
                    document.getElementById('longitude').value = coordinates['lng'];

                    // Perform reverse geocoding to get the address details
                    geocoder.geocode({ 'location': latlng }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var countryName = '';
                                var cityName = '';
                                var zipCode = '';


                                for (var i = 0; i < results[0].address_components.length; i++) {
                                    var addressComponent = results[0].address_components[i];
                                    // Extract ZIP Code
                                    if (addressComponent.types.includes('postal_code')) {
                                        zipCode = addressComponent.long_name;
                                    }
                                }
                                document.getElementById('zipcode').value = zipCode;
                                // Update #seller_address element with the complete address
                                var fullAddress = results[0].formatted_address;
                                $('#address').val(fullAddress);
                            } else {
                                console.log('No results found');
                            }
                        } else {
                            console.log('Geocoder failed due to: ' + status);
                        }
                    });

                });

                // Search box create
                const input = document.getElementById("pac-input");
                const searchBox = new google.maps.places.SearchBox(input);
                map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
                // Google map Search current view
                map.addListener("bounds_changed", () => {
                    searchBox.setBounds(map.getBounds());
                });

                let markers = [];
                // info place
                searchBox.addListener("places_changed", () => {
                    const places = searchBox.getPlaces();
                    if (places.length == 0) return;

                    const place = places[0]; // Take only the first place
                    if (!place.geometry || !place.geometry.location) return;

                    // Reuse the existing marker
                    marker.setPosition(place.geometry.location);
                    map.panTo(place.geometry.location);

                    // Update latitude and longitude inputs
                    document.getElementById('latitude').value = place.geometry.location.lat();
                    document.getElementById('longitude').value = place.geometry.location.lng();

                    // Perform reverse geocoding to update the address input
                    var latlng = place.geometry.location;
                    geocoder.geocode({ 'location': latlng }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                $('#address').val(results[0].formatted_address);
                            }
                        }
                    });
                });

            }
            initAutocomplete();

            // clear all value
            $('.clear_all_value').click(function () {
                $('#name').val(null);
                $('#pac-input').val(null);
            });
        });

    </script>
@endsection
