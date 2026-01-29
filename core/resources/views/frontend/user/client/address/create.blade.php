@extends('frontend.user.layout.master')
@section('title')
    {{ __('Add New Location') }}
@endsection
@section('style')

@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
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
                <div>
                    <a href="{{ route('client.address.map', ['return_url' => $return_url]) }}"
                        id="map_switcher"
                        class="d-flex align-items-center gap-2 border-0 bg-transparent text_red text-decoration-none">
                        <i class="icon-base ti tabler-map-2"></i><span>{{__('Select map')}}</span>
                    </a>
                </div>
            </div>
            <form action="{{route('client.address.create')}}" method="POST">
                @csrf
                <div class="">
                    <div class="custom_input_wrapper">
                        <input type="hidden" name="from_map" value="0">
                        <input type="hidden" name="return_url" value="{{ $return_url }}">
                        <input type="hidden" name="type" id="type" value="{{__('0')}}">
                        <label for="area_title" class="form-label">{{__('Title')}}</label>
                        <input type="text" name="title" id="area_title" class="custom_input"
                               placeholder="Enter Title" autocomplete="on" value="{{old('title')}}">
                    </div>
                </div>
                <div>
                    <div class="d-flex gap-4 area_select mt-2">
                        <div class="custom_select flex_220 z-120">
                            <label for="state" class="select_label mb_6">{{__('State')}}</label>
                            <select name="state_id" id="state" class="custom_input">
                                <option value="">{{__('Select State')}}</option>
                                @foreach($states as $state)
                                    <option value="{{ $state->id }}" {{ old('state_id') == $state->id ? 'selected' : '' }}>{{ $state->state}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="custom_select flex_220 z-120">
                            <label for="city" class="select_label mb_6">{{__('City')}}</label>
                            <select name="city_id" id="city" class="custom_input">
                                <option value="">{{__('Select City')}}</option>
                            </select>
                        </div>
                        <div class="custom_select flex_220 z-120">
                            <label for="area" class="select_label mb_6">{{__('Area')}}</label>
                            <select name="area_id" id="area" class="custom_input">
                                <option value="">{{__('Select Area')}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="custom_input_wrapper">
                        <label for="address" class="form-label">{{__('Street Address')}}</label>
                        <input type="text"  name="address" id="address" class="custom_input"
                               placeholder="Enter Street Address" autocomplete="on" value="{{ old('address') }}">
                    </div>
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
    <script>
        $(document).ready(function(){

            const typeInput = document.getElementById('type');
            const homeBtn = document.getElementById('btn_home');
            const officeBtn = document.getElementById('btn_office');

            homeBtn.addEventListener('click', function () {
                typeInput.value = 0;
            });

            officeBtn.addEventListener('click', function () {
                typeInput.value = 1;
            });

            const oldState = "{{ old('state_id') }}";
            const oldCity = "{{ old('city_id') }}";
            const oldArea = "{{ old('area_id') }}";

            if (oldState) {
                $('#state').val(oldState).trigger('change');

                $.ajax({
                    method: 'GET',
                    url: '/client/address/get-cities/' + oldState,
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
                                    url: '/client/address/get-areas/' + oldCity + '/' + oldState,
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
                        url: '/client/address/get-cities/'+stateId,
                        success: function (data) {
                            console.log(data);
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
                        url: '/client/address/get-areas/'+cityId+'/'+stateId,
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
                        error: function (xhr, status, error) {

                        }

                    })

                }
            });
        });


    </script>
@endsection
