@extends('backend.admin-master')
@section('site-title', __('Delivery Charge settings'))
@section('content')
    <div class="dashboard__card">
        <x-validation.error/>
        <div class="dashboard__card__header p-4">
            <h3 class="dashboard__card__title">{{ __('Delivery Charge settings') }}</h3>
        </div>
        <div class="dashboard__card__body custom__form mt-4 p-4">
            <form action="{{ route('admin.delivery-charge.settings') }}" method="post" class="row">
                @csrf

                @method('PUT')
                <div class="col-xxl-6">
                    <div class="form-group row">
                        <label for="delivery_charge_system" class="col-md-4">{{ __('Delivery Charge system') }}
                            <span id="enable-info-about-tax-system"> <i class="las la-info-circle"></i></span>
                        </label>
                    </div>

                    <div class="col-md-12 p-0 m-0 mt-3" id="advance_delivery_charge_system_settings">
                        <div class="form-group row">
                            <div class="col-md-4">
                                <select id="delivery_charge_system" name="delivery_charge_system" class="form-control">
                                    <option {{ get_static_option('delivery_charge_system') == 'flat' ? 'selected' : '' }} value="flat"> {{ __('Flat') }} </option>
                                    <option {{ get_static_option('delivery_charge_system') == 'quantity' ? 'selected' : '' }} value="quantity"> {{ __('Quantity') }} </option>
                                </select>
                            </div>
                        </div>

                        <div class="amount_section mt-4">
                            <label for="delivery_charge_round_at_subtotal" class="col-md-4">{{ __('Delivery Charge') }}</label>
                            <div class="col-md-4">
                                <label for="delivery_charge" class="form-check-label">
                                    <input name="delivery_charge" id="delivery_charge" type="number" class="form-control" value="{{get_static_option('delivery_charge')  }}" placeholder="{{ __('0.00') }}">
                                </label>
                            </div>
                        </div>

                    </div>
                    <div class="form-group mt-4">
                        <button type="submit" class="cmnBtn btn_5 radius-5  btn_bg_blue">{{ __('Update Delivery Charge Settings') }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
       
    </script>
@endsection
