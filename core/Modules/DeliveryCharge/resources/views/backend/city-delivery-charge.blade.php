@extends('backend.admin-master')
@section('site-title')
    {{ __('City Delivery Charge') }}
@endsection
@section('style')
    <x-datatable.css/>
@endsection
@section('content')
    <div class="col-lg-12 col-ml-12">
        <div class="row">
            <div class="col-lg-12 mt-2">
                <x-validation.error/>
                <div class="card p-3">
                    <div class="card-body">
                        <h4 class="header-title mt-3">{{ __('All Cities Delivery Charge') }}</h4>
                        <div class="btn-wrapper mt-3 mb-4">
                            <a href="#1" data-bs-toggle="modal" data-bs-target="#state_delivery_charge_new_modal"
                               class="cmnBtn btn_5 radius-5  btn_bg_blue ">{{ __('Add new city Delivery Charge') }}
                            </a>
                        </div>
                        <div class="table_wrapper custom_dataTable">
                            <table class="dataTablesExample">
                                <thead>
                                    <th>{{ __('ID') }}</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Delivery Charge') }}</th>
                                    <th>{{ __('Action') }}</th>
                                </thead>
                                <tbody>
                                    @foreach ($all_city_delivery_charge as $charge)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ optional($charge->city)->city }}</td>
                                            <td>{{ float_amount_with_currency_symbol($charge->delivery_charge) }}</td>
                                            <td>
                                                <x-popup.delete-popup :url="route('admin.delivery-charge.city.delete', $charge->id)"/>
                                                <a href="#1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#state_delivery_charge_edit_modal"
                                                    class="btn btn-primary btn-sm btn-xs mb-2 me-1 state_delivery_charge_edit_btn"
                                                    data-id="{{ $charge->id }}"
                                                    data-state_id="{{ $charge->state_id }}"
                                                    data-city_id="{{ $charge->city_id }}"
                                                    data-delivery_charge_rate="{{ $charge->charge_rate }}">
                                                    <i class="ti-pencil"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        <div class="modal fade" id="state_delivery_charge_edit_modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ __('Update City Delivery Charge') }}</h5>
                        <button type="button" class="close" data-bs-dismiss="modal"><span>×</span></button>
                    </div>
                    <form action="{{ route('admin.delivery-charge.city.update') }}" method="post">
                        <input type="hidden" name="id" id="state_delivery_charge_id">
                        <div class="modal-body">
                            @csrf
                            <div class="form-group country-wrapper">
                                <label for="state_id">{{ __('State') }}</label>
                                <select name="state_id" class="form-control" id="edit_state_id">
                                    <option value="">{{ __('Select State') }}</option>
                                    @foreach ($all_states as $state)
                                        <option value="{{ $state->id }}">{{ $state->state }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group state-wrapper">
                                <label for="edit_city_id">{{ __('city') }}</label>
                                <select name="city_id" class="form-control" id="edit_city_id">
                                    <option value="">{{ __('select city') }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="edit_delivery_charge_rate">{{ __('Delivery Charge') }}</label>
                                <input type="number" class="form-control" id="edit_delivery_charge_rate" name="delivery_charge_rate"
                                    placeholder="{{ __('Delivery Charge') }}" step="0.01">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-secondary"
                                data-bs-dismiss="modal">{{ __('Close') }}</button>
                            <button type="submit" class="btn btn-sm btn-primary">{{ __('Save Change') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="modal fade" id="state_delivery_charge_new_modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ __('Add New City Delivery Charge') }}</h5>
                        <button type="button" class="close" data-bs-dismiss="modal"><span>×</span></button>
                    </div>
                    <form action="{{ route('admin.delivery-charge.city.new') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="state_id">{{ __('State') }}</label>
                                <select name="state_id" class="form-control" id="create_state_id">
                                    <option value="">{{ __('Select State') }}</option>
                                    @foreach ($all_states as $state)
                                        <option value="{{ $state->id }}">{{ $state->state }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group create-state-wrapper">
                                <label for="city_id">{{ __('State') }}</label>
                                <select name="city_id" class="form-control" id="create_city_id">
                                    <option value="">{{ __('Select State first') }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="delivery_charge_rate">{{ __('Delivery Charge') }}</label>
                                <input type="number" class="form-control" id="tax_rate" name="delivery_charge"
                                    placeholder="{{ __('Delivery Charge') }}" step="0.01">
                            </div>
                            <button type="submit" class="btn btn-primary mt-4 pr-4 pl-4">{{ __('Add New') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

@endsection
@section('scripts')
  <x-datatable.js/>
    <script>
        $(document).ready(function() {
            $(document).on('click', '.state_delivery_charge_edit_btn', function() {
                let el = $(this);
                let id = el.data('id');
                let state_id = el.data('state_id');
                let city_id = el.data('city_id');
                let delivery_charge_rate = el.data('delivery_charge_rate');

                let modal = $('#state_delivery_charge_edit_modal');
                //ajax call to get country related state and set select the current value
                $.get('{{ route('admin.city.by.state') }}', {
                    id: el.data('state_id')
                }).then(function(data) {
                    $('#edit_city_id').html('');
                    let option = "";
                    let list = "";
                    for (const city of data) {
                        let selected = city.id == city_id ? 'selected' : '';
                        option += `<option value="` + city.id + `">` + city.city + `</option>`;
                        list += `<li data-value="` + city.id + `" class="option">` + city.city +
                            `</li>`;
                    }

                    $('#edit_city_id').html(option);
                    $(".state-wrapper .list").html(list);
                    $(".state-wrapper .list li[data-value=" + city_id + "]").trigger("click");
                    modal.find('.modal-footer').trigger("click");
                });

                modal.find('#state_delivery_charge_id').val(id);
                modal.find('#edit_city_id').val(city_id);
                modal.find('#edit_state_id option[value="' + el.data('state_id') + '"]').attr(
                    'selected', true);

                $("#state_id option[value=" + state_id + "]").select();
                $(".country-wrapper .list li[data-value=" + state_id + "]").trigger("click");
                $('#edit_city_id option[value=' + city_id + ']').attr("selected", "true");
                modal.find('#edit_delivery_charge_rate').val(delivery_charge_rate);
                modal.find('.modal-footer').trigger("click");
            });

            $('#state_id').on('change', function() {
                let id = $(this).val();
                $.get('{{ route('admin.city.by.state') }}', {
                    id: id
                }).then(function(data) {
                    $('#city_id').html('');
                    for (const city of data) {
                        $('#city_id').append('<option value="' + city.id + '">' + city.city +
                            '</option>');
                    }
                });
            });

            $('#create_state_id').on('change', function() {
                let id = $(this).val();
                $.get('{{ route('admin.city.by.state') }}', {
                    id: id
                }).then(function(data) {
                    $('#create_city_id').html('');
                    let option = "";
                    let list = "";
                    for (const city of data) {
                        option += '<option value="' + city.id + '">' + city.city + '</option>';
                        list += `<li data-value="` + city.id + `" class="option">` + city.city +
                            `</li>`;
                    }

                    $('#create_city_id').html(option);
                    $(".create-state-wrapper .list").html(list);
                });
            });

            $('#edit_state_id').on('change', function() {
                let id = $(this).val();
                $.get('{{ route('admin.city.by.state') }}', {
                    id: id
                }).then(function(data) {
                    $('#edit_city_id').html('');
                    let ed_option = "";
                    let ed_list = `<li data-value="" class="option">Select State</li>`;

                    for (const city of data) {
                        ed_option += '<option value="' + city.id + '">' + city.city + '</option>';
                        ed_list += `<li data-value="` + city.id + `" class="option">` + city.city + `</li>`;
                    }

                    $('#edit_city_id').html(ed_option);
                    $(".state-wrapper .list").html(ed_list);
                });
            });
        });
    </script>
@endsection
