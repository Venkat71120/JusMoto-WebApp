@extends('backend.admin-master')
@section('site-title')
    {{ __('State Delivery Charge') }}
@endsection
@section('style')
    <x-datatable.css/>
@endsection
@section('content')
    <div class="col-lg-12 col-ml-12">
        <div class="row">
            <div class="col-lg-12">
                <x-validation.error/>
                <div class="dashboard__card p-4">
                    <div class="dashboard__card__header">
                        <h4 class="dashboard__card__title">{{ __('All States Delivery Charge') }}</h4>
                        <div class="dashboard__card__header__right">
                            <div class="btn-wrapper mt-3">
                                <a href="#1" data-bs-toggle="modal" data-bs-target="#country_delivery_charge_new_modal"
                                    class="cmnBtn btn_5 radius-5  btn_bg_blue ">{{ __('Add new state delivery charge') }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard__card__body mt-4">
                        <div class="table_wrapper custom_dataTable">
                            <table class="dataTablesExample">
                                <thead>
                                    <th>{{ __('ID') }}</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Delivery Charge') }}</th>
                                    <th>{{ __('Action') }}</th>
                                </thead>
                                <tbody>
                                    @foreach ($all_states_delivery_charge as $charge)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ optional($charge->state)->state }}</td>
                                            <td>{{ float_amount_with_currency_symbol($charge->delivery_charge) }}</td>
                                            <td>
                                                <x-popup.delete-popup :url="route('admin.delivery-charge.state.delete', $charge->id)"/>
                                                <a href="#1" data-bs-toggle="modal"
                                                    data-bs-target="#state_delivery_charge_edit_modal"
                                                    class="btn btn-sm btn-primary btn-xs mb-2 me-1 country_delivery_charge_edit_btn"
                                                    data-id="{{ $charge->id }}"
                                                     data-state_id="{{ $charge->state_id }}"
                                                    data-delivery_charge_rate="{{ $charge->delivery_charge }}">
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
                <div class="modal-content custom__form">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ __('Update State Delivery Charge') }}</h5>
                        <button type="button" class="close" data-bs-dismiss="modal"><span>×</span></button>
                    </div>

                    <form action="{{ route('admin.delivery-charge.state.update') }}" method="post">
                        <input type="hidden" name="id" id="country_delivery_charge_id">
                        <div class="modal-body">
                            @csrf
                            <div class="form-group">
                                <label for="edit_state_id">{{ __('State') }}</label>
                                <select name="state_id" class="form-control" id="edit_state_id">
                                    @foreach ($all_states as $state)
                                        <option value="{{ $state->id }}">{{ $state->state }}</option>
                                    @endforeach
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
                            <button type="submit" class="cmnBtn btn_5 radius-5  btn_bg_blue btn-sm">{{ __('Save Change') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="modal fade" id="country_delivery_charge_new_modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ __('Update State Delivery Charge') }}</h5>
                        <button type="button" class="close" data-bs-dismiss="modal"><span>×</span></button>
                    </div>
                    <form action="{{ route('admin.delivery-charge.state.new') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="state_id">{{ __('State') }}</label>
                                <select name="state_id" class="form-control" id="state_id">
                                    @foreach ($all_states as $state)
                                        <option value="{{ $state->id }}">{{ $state->state }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="delivery_charge">{{ __('Delivery Charge') }}</label>
                                <input type="number" class="form-control" id="delivery_charge" name="delivery_charge"
                                    placeholder="{{ __('Delivery Charge') }}" step="0.01">
                            </div>
                            <button type="submit" class="cmnBtn btn_5 radius-5  btn_bg_blue mt-4 pr-4 pl-4">{{ __('Add New') }}</button>
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
            $(document).on('click', '.country_delivery_charge_edit_btn', function() {
                let el = $(this);
                let id = el.data('id');
                let state_id = el.data('state_id');
                let delivery_charge_rate = el.data('delivery_charge_rate');
                let modal = $('#state_delivery_charge_edit_modal');

                // make select option
                $("#state_delivery_charge_edit_modal select option[value=" + state_id + "]").attr("selected",
                    "true");
                $("#state_delivery_charge_edit_modal .list li[data-value=" + state_id + "]").trigger("click");
                $("#state_delivery_charge_edit_modal .modal-footer").trigger("click");
                modal.find('#country_delivery_charge_id').val(id);
                modal.find('#edit_state_id').val(state_id);
                modal.find('#edit_delivery_charge_rate').val(delivery_charge_rate);
            });
        });
    </script>
@endsection
