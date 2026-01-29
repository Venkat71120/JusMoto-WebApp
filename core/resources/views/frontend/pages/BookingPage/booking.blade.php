@extends('frontend.layout.master')
@section('site-title')
    {{ __('Order') }}
@endsection
@section('content')
    <section class="mt-60">
        <div class="custom-container">
            <form id="orderForm" action="{{route('client.booking')}}" method="post" enctype="multipart/form-data">
                @csrf
                @php
                    $bookingOldInput = [];
                    if(request()->has('new_address_id')) {
                        parse_str(session('booking_form_data', ''), $bookingOldInput);
                    }
                @endphp

                <input type="hidden" name="user_location_id" id="location_id" value="{{ old('user_location_id', $bookingOldInput['user_location_id'] ?? '') }}">
                <input type="hidden" id="latitude" value="{{ old('latitude', $bookingOldInput['latitude'] ?? '') }}">
                <input type="hidden" id="longitude" value="{{ old('longitude', $bookingOldInput['longitude'] ?? '') }}">
                <input type="hidden" id="zipcode" value="{{ old('zipcode', $bookingOldInput['zipcode'] ?? '') }}">
                <input type="hidden" id="full_address" value="{{ old('full_address', $bookingOldInput['full_address'] ?? '') }}">
                <input type="hidden" name="map_address" id="map_address" value="{{ old('map_address', $bookingOldInput['map_address'] ?? '') }}">
                <input type="hidden" name="outlet_id" id="outlet_id" value="{{ old('outlet_id', $bookingOldInput['outlet_id'] ?? '') }}">
                <div class="row">
                        <div class="col-lg-7">
                            <div class="form-container">
                                <h1 class="form-title subtitle-4 fw_semibold">{{__('Choose Your Service Method')}}</h1>

                                <div class="service-options">
                                    <div class="service-option">
                                        <input type="radio" name="service" id="pickup" value="pickup" checked>
                                        <label for="pickup">
                                            <div class="radio-custom"></div>
                                            <span class="fs_reg fw_mideum">{{__('Pickup& Delivery')}}</span>
                                        </label>
                                    </div>
                                    <div class="service-option">
                                        <input type="radio" name="service" id="outlet" value="outlet">
                                        <label for="outlet">
                                            <div class="radio-custom"></div>
                                            <span>{{__('Visit Outlet')}}</span>
                                        </label>
                                    </div>
                                </div>
                                <div id="pickup-section">
                                    <div class="section-header">
                                        <h2 class="input-title fs_md fw_semibold">{{__('Address')}}</h2>
                                        <div class="map-toggle">

                                            <span class="map-toggle-text fs_md fw_semibold choose-map-btn">
                                                {{__('Choose Map')}}
                                            </span>
                                        </div>
                                    </div>
                                    <textarea rows="4" class="form-controls address-input" name="address" placeholder="Enter Address"></textarea>
                                    <a href="#" class="select-address-link fs_md fw_semibold select-saved-address">
                                        {{__('Select Address')}}
                                    </a>
                                </div>

                                <!-- OUTLET SECTION -->
                                <div id="outlet-section" style="display:none;">
                                    <h2 class="input-title fs_md fw_semibold">{{__('Choose Outlet')}}</h2>
                                    <div class="mb-2 mt-2">
                                        <select id="outlet-select" class="form-controls w-100">
                                            <option value="" selected disabled>{{ __('Select Outlet') }}</option>
                                            @foreach($outlet_locations as $outlet)
                                                <option value="{{ $outlet->id }}"
                                                        data-lat="{{ $outlet->latitude }}"
                                                        data-lng="{{ $outlet->longitude }}">
                                                    {{ $outlet->name }}
                                                </option>
                                            @endforeach
                                        </select>

                                        <div class="text-end mt-2">
                                            <a type="button" class="text-danger" id="openMapModalBtn">
                                                {{ __('Show Outlets on Map') }}
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div class="date-time-row">
                                    <div>
                                        <h3 class="input-title fs_md fw_semibold">{{__('Date')}}</h3>
                                        <div class="input-with-icon">
                                            <input type="text" class="form-controls selector" name="date" id="booking_date" placeholder="Select date" value="{{ old('date', $bookingOldInput['date'] ?? '') }}">
                                            <i class=" icon-base ti tabler-calendar-week input-icon"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="input-title fs_md fw_semibold">{{__('Time')}}</h3>
                                        <div class="input-with-icon">
                                            <input type="text" class="form-controls times" placeholder="Select time" id="booking_time" name="time" value="{{ old('time', $bookingOldInput['time'] ?? '') }}">
                                            <i class=" icon-base ti tabler-clock-hour-4 input-icon"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="note-section">
                                    <h3 class="input-title fs_md fw_semibold">{{__('Add Note')}}</h3>
                                    <textarea rows="5" class="form-controls note-textarea" name="note" placeholder="e.g. bring all equipment">{{ old('note', $bookingOldInput['note'] ?? '') }}</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            @include('frontend.pages.BookingPage.booking-payment-gateway')
                            @include('frontend.pages.BookingPage.booking-amount-details')
                        </div>
                </div>
            </form>
        </div>
    </section>
    @include('frontend.pages.BookingPage.map-modal')
    @include('frontend.pages.BookingPage.saved-address-modal')
    @include('frontend.pages.BookingPage.outlet-map-modal')
@endsection

@section('scripts')
    @include('frontend.pages.BookingPage.payment-gateway-js')
    <script src="https://maps.googleapis.com/maps/api/js?key={{get_static_option('google_map_api_key')}}&libraries=places&v=3.46.0"></script>
    <script>
        flatpickr("#booking_time", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "h:i K",
            time_24hr: false
        });

        $(document).ready(function() {
            document.addEventListener("visibilitychange", function() {
                if (document.visibilityState === "hidden") {
                    // Send AJAX to clear session
                    fetch("{{ route('booking.clear-session') }}", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": "{{ csrf_token() }}"
                        },
                        body: JSON.stringify({})
                    });
                }
            });


        });

        let map;
        let mainMarker;
        let geocoder;
        let selectedLocation = { lat: 0, lng: 0 };
        let selectedAddress = '';
        let selectedZip = '';
        let selectedFullAddress = '';

        let userIPLat = null;
        let userIPLng = null;

        // Get user location from IP
        fetch('https://ipwho.is/')
            .then(res => res.json())
            .then(data => {
                userIPLat = data.latitude;
                userIPLng = data.longitude;
            })
            .catch(err => console.error('Failed to fetch IP location:', err));
        function initMap() {
            const defaultLat = userIPLat ?? parseFloat("<?= $location->latitude ?? 0 ?>");
            const defaultLng = userIPLng ?? parseFloat("<?= $location->longitude ?? 0 ?>");
            const myLatLng = { lat: defaultLat, lng: defaultLng };

            map = new google.maps.Map(document.getElementById("googleMap"), {
                center: myLatLng,
                zoom: 13,
                mapTypeId: "roadmap",
            });

            mainMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                draggable: false
            });

            mainMarker.addListener("mouseout", function () {
                infoWindow.close();
            });

            geocoder = new google.maps.Geocoder();

            // Reverse-geocode default marker location
            geocoder.geocode({ location: myLatLng }, function (results, status) {
                if (status === "OK" && results[0]) {
                    selectedFullAddress = results[0].formatted_address;
                    selectedLocation = myLatLng;

                    let components = results[0].address_components;
                    components.forEach(c => {
                        if (c.types.includes("postal_code")) selectedZip = c.long_name;
                    });
                }
            });

            // Marker tooltip (shows address on hover)
            const infoWindow = new google.maps.InfoWindow();

            // Show default address when hovering marker
            mainMarker.addListener("mouseover", function () {
                if (selectedFullAddress) {
                    infoWindow.setContent(selectedFullAddress);
                    infoWindow.open(map, mainMarker);
                }
            });

            mainMarker.addListener("mouseout", function () {
                infoWindow.close();
            });



            // Add search box
            const input = document.getElementById("pac-input");
            const searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();

                if (places.length === 0) return;

                const place = places[0];

                if (place.geometry && place.geometry.location) {
                    map.panTo(place.geometry.location);
                    map.setZoom(15);
                    mainMarker.setPosition(place.geometry.location);

                    selectedLocation = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    };
                    selectedFullAddress = place.formatted_address || '';
                    selectedAddress = '';
                    selectedZip = '';

                    if (place.address_components) {
                        place.address_components.forEach(c => {
                            if (c.types.includes("postal_code")) selectedZip = c.long_name;
                            if (c.types.includes("locality") || c.types.includes("postal_town")) selectedAddress = c.long_name;
                            if (c.types.includes("country")) selectedAddress += ', ' + c.long_name;
                        });
                    }
                }
            });

            map.addListener("click", (event) => {
                const lat = event.latLng.lat();
                const lng = event.latLng.lng();

                mainMarker.setPosition(event.latLng);
                map.panTo(event.latLng);

                selectedLocation = { lat, lng };

                geocoder.geocode({ location: event.latLng }, function(results, status) {
                    if (status === "OK" && results[0]) {
                        const components = results[0].address_components;
                        let city = '';
                        let country = '';
                        let zip = '';

                        components.forEach(c => {
                            if (c.types.includes("postal_code")) zip = c.long_name;
                            if (c.types.includes("locality") || c.types.includes("postal_town")) city = c.long_name;
                            if (c.types.includes("country")) country = c.long_name;
                        });

                        selectedAddress = city + ', ' + country;
                        selectedZip = zip;
                        selectedFullAddress = results[0].formatted_address;
                    }
                });
            });
        }

        $(document).on("click", ".choose-map-btn", function () {
            $("#mapModal").modal("show");

            $('#mapModal').on('shown.bs.modal', function () {
                if (!map) {
                    initMap(); // init map if not initialized
                }

                // Give map time to render
                setTimeout(() => {
                    google.maps.event.trigger(map, "resize");

                    // If user selected a saved address, center there
                    if (selectedDropdownLocation) {
                        map.panTo(selectedDropdownLocation);
                        map.setZoom(15);
                        mainMarker.setPosition(selectedDropdownLocation);

                        selectedLocation = selectedDropdownLocation;
                        selectedFullAddress = selectedDropdownAddress;
                        selectedAddress = selectedDropdownAddress;
                        selectedZip = ""; // optional

                        $("#latitude").val(selectedDropdownLocation.lat);
                        $("#longitude").val(selectedDropdownLocation.lng);
                        $("#map_address").val(selectedDropdownAddress);
                    } else if (selectedLocation.lat && selectedLocation.lng) {
                        // fallback to last selected location
                        map.setCenter(selectedLocation);
                        mainMarker.setPosition(selectedLocation);
                    } else {
                        // fallback to default
                        const defaultLat = userIPLat ?? parseFloat("<?= $location->latitude ?? 0 ?>");
                        const defaultLng = userIPLng ?? parseFloat("<?= $location->longitude ?? 0 ?>");
                        const defaultPos = { lat: defaultLat, lng: defaultLng };

                        map.setCenter(defaultPos);
                        mainMarker.setPosition(defaultPos);
                        selectedLocation = defaultPos;
                    }
                }, 300);
            });
        });


        $(document).on("click", ".select-saved-address", function (e) {
            e.preventDefault();
            $("#savedAddressModal").modal("show");
        });

        let selectedDropdownLocation = null;
        let selectedDropdownAddress = '';

        // When user clicks a saved address
        $(document).on("click", ".choose-saved-address", function () {
            const lat = parseFloat($(this).data("lat"));
            const lng = parseFloat($(this).data("lng"));
            const address = $(this).data("address");
            const id = $(this).data("id");

            if (lat && lng) {
                selectedDropdownLocation = { lat, lng };
                selectedDropdownAddress = address;
            } else {
                selectedDropdownLocation = null;
                selectedDropdownAddress = '';
            }

            // Update form fields immediately
            $(".address-input").val(address);
            $("#location_id").val(id).trigger('change');

            $("#savedAddressModal").modal("hide");
        });

        $('#addAddressBtn').click(function(e){
            e.preventDefault();

            let bookingData = $('#orderForm').serialize();

            $.post('{{ route("booking.store-session") }}', {
                _token: '{{ csrf_token() }}',
                booking_data: bookingData
            }, function(){
                window.location = '{{ route("client.address.create") }}?return_url=' + encodeURIComponent(window.location.href);
            });
        });

        $(document).ready(function(){
            function formatCurrency(amount) {
                let symbol = "{{ site_currency_symbol('') }}";
                return symbol + amount.toFixed(2);
            }

            $('#applyCouponBtn').click(function(e){
                e.preventDefault();

                let coupon = $('#coupon_code').val();
                let subTotal = parseFloat($('#order_total').val());
                let shipping = parseFloat($('.items-wrapper .d-flex:contains("Shipping") .item-price').text().replace(/[^0-9.-]+/g,"")) || 0;
                let taxes = parseFloat($('.items-wrapper .d-flex:contains("Tax") .item-price').text().replace(/[^0-9.-]+/g,"")) || 0;
                let address = $('.address-input').val();
                let locationId = $('#location_id').val();
                let outletId = $('#outlet-select').val();
                let selectedDate = $('#booking_date').val();
                let selectedTime = $('#booking_time').val();

                if ((!address && !locationId && !outletId) || !selectedDate || !selectedTime) {
                    toastr.warning('Please select address, date, and time before applying coupon.');
                    return;
                }

                if(!coupon){
                    toastr.error('Please enter a coupon code');
                    return;
                }

                $.ajax({
                    url: '{{ route("booking.apply-coupon") }}',
                    type: 'POST',
                    data: {
                        _token: '{{ csrf_token() }}',
                        coupon: coupon,
                        total: subTotal
                    },
                    success: function(res){
                        if(res.status){
                            let discount = parseFloat(res.discount);

                            $('.items-wrapper .d-flex:contains("Discount") .item-price').text('- ' + formatCurrency(discount));
                            let finalTotal = subTotal + shipping + taxes - discount;
                            let sub_total_with_coupon =subTotal - discount;
                            $('.total-payable .selected').text(formatCurrency(finalTotal));

                            $('#sub_total_with_coupon').val(sub_total_with_coupon);

                            let currentTax = parseFloat($('.items-wrapper .d-flex:contains("Tax") .item-price')
                                .text().replace(/[^0-9.-]+/g,"")) || 0;

                            let currentDelivery = parseFloat($('.items-wrapper .d-flex:contains("Shipping") .item-price')
                                .text().replace(/[^0-9.-]+/g,"")) || 0;

                            if(currentTax > 0 || currentDelivery > 0){
                                updateTaxDeliveryCharge();
                            }
                            $('#applyCouponBtn').prop('disabled', true).text('Applied')
                            toastr.success(res.message);
                        } else {
                            toastr.error(res.message);
                        }
                    },
                    error: function(xhr){
                        toastr.error('Something went wrong!');
                    }
                });
            });


            let map, marker;

            $("input[name='service']").change(function() {
                let mode = $(this).val();

                if (mode === "pickup") {
                    // Show pickup fields
                    $("#pickup-section").show();
                    $("#outlet-section").hide();

                    // RESET outlet selection
                    $("#outlet-select").val("");
                    $("#outlet_id").val("");

                    // CLEAR outlet modal data
                    $("#modalOutletSelect").val("");

                    // CLEAR delivery & tax charges for pickup reset
                    resetCharges();


                } else if (mode === "outlet") {
                    // Show outlet section
                    $("#pickup-section").hide();
                    $("#outlet-section").show();

                    // CLEAR pickup address and hidden fields
                    $(".address-input").val("");
                    $("#location_id").val("");
                    $("#latitude").val("");
                    $("#longitude").val("");
                    $("#zipcode").val("");
                    $("#map_address").val("");

                    // CLEAR tax & delivery (because outlet mode has walk-in logic)
                    resetCharges();
                }
            });
            function resetCharges() {
                $('.items-wrapper .d-flex:contains("Shipping") .item-price').text('+'+formatCurrency(0));
                $('.items-wrapper .d-flex:contains("Tax") .item-price').text('+'+formatCurrency(0));
                $('.items-wrapper .d-flex:contains("Discount") .item-price').text('+'+formatCurrency(0));
                $('.items-wrapper .d-flex:contains("Tax") .tax-percentage').text('(0%)');

                let subtotal = parseFloat($('#order_total').val()) || 0;
                $('.total-payable .selected').text(formatCurrency(subtotal));
            }


            $("#openMapModalBtn").click(function(){
                $("#outletMapModal").modal('show');

                setTimeout(initMapOutlet, 500);
            });

            function initMapOutlet() {
                let firstOption = $("#modalOutletSelect option:first"); // first option only
                let lat = parseFloat(firstOption.data("lat"));
                let lng = parseFloat(firstOption.data("lng"));

                $("#modalOutletSelect").val(firstOption.val());

                // Initialize map
                map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 14,
                    center: { lat: lat, lng: lng }
                });

                marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: map
                });

            }

            $("#modalOutletSelect").change(function() {
                let selected = $(this).find("option:selected");
                let lat = parseFloat(selected.data("lat"));
                let lng = parseFloat(selected.data("lng"));

                map.setCenter({ lat: lat, lng: lng });
                marker.setPosition({ lat: lat, lng: lng });

            });

            $("#outlet-select").change(function() {
                let selected = $(this).find("option:selected");
                let lat = parseFloat(selected.data("lat"));
                let lng = parseFloat(selected.data("lng"));

                $("#outlet_id").val(selected.val());
                updateTaxDeliveryCharge();
            });
            $("#focusOutletBtn").click(function(){
                let selected = $("#modalOutletSelect option:selected");
                let lat = parseFloat(selected.data("lat"));
                let lng = parseFloat(selected.data("lng"));

                map.setCenter({ lat:lat, lng:lng });
                marker.setPosition({ lat:lat, lng:lng });

                $("#outlet_id").val(selected.val());
            });


            function updateTaxDeliveryCharge() {
                let subTotalWithCoupon = parseFloat($('#sub_total_with_coupon').val()) || 0;
                let locationId = $('#location_id').val() || null; // optional hidden input if user selects location
                let outletId = $('#outlet-select').val() || null;
                let address = $('#pickup-section .address-input').val() || null;

                $.ajax({
                    url: '{{ route("booking.tax-delivery-charge") }}',
                    type: 'POST',
                    data: {
                        _token: '{{ csrf_token() }}',
                        sub_total_with_coupon: subTotalWithCoupon,
                        location_id: locationId,
                        outlet_id: outletId,
                        address: address,
                        delivery_mode: $('input[name="service"]:checked').val() === 'pickup' ? 'delivery' : 'walkin'
                    },
                    success: function(res) {
                        // Update order summary fields
                        $('.items-wrapper .d-flex:contains("Shipping") .item-price').text('+ ' + formatCurrency(res.delivery_charge));
                        $('.items-wrapper .d-flex:contains("Tax") .item-price').text(
                            '+ ' + formatCurrency(res.tax));

                        // Update tax percentage beside title
                        $('.items-wrapper .d-flex:contains("Tax") .tax-percentage').text('(' + res.tax_rate + '%)');

                        $('.total-payable .selected').text(formatCurrency(res.total));
                    },
                    error: function(xhr) {
                        console.log(xhr.responseText);
                        toastr.error('Failed to calculate tax and delivery charges');
                    }
                });
            }

            $('#pickup-section .address-input').on('blur', function() {
                updateTaxDeliveryCharge();
            });

            $('#location_id').on('change', function() {
                updateTaxDeliveryCharge();
            });

            $("#confirmMapAddress").on("click", function () {
                if (!selectedFullAddress) {
                    toastr.error("Please select a location on the map.");
                    return;
                }
                $("#latitude").val(selectedLocation.lat);
                $("#longitude").val(selectedLocation.lng);
                $("#zipcode").val(selectedZip);
                $("#map_address").val(selectedFullAddress);
                $(".address-input").val(selectedFullAddress);

                $("#mapModal").modal("hide");
                updateTaxDeliveryCharge();
            });


        });


    </script>
@endsection


