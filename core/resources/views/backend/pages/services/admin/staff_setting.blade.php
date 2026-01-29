@extends('backend.admin-master')
@section('site-title')
    {{__('Staff Selection Settings')}}
@endsection
@section('style')
    <x-media.css/>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <h2 class="dashboard__card__header__title mb-3">{{__('Staff Selection Settings')}}</h2>
                <x-validation.error/>
                <form action="{{route('admin.staff.settings')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form__input__single">
                        <label class="form__input__single__label">{{__('Select Status')}}</label>
                        <select name="staff_select_settings" id="staff_select_settings" class="form-control">
                            <option value="" disabled>{{ __('Select') }}</option>
                            <option value=0  {{ get_static_option('staff_select_settings')=='User can select' ? 'selected' : '' }}  >{{ __('User Can Select') }}</option>
                            <option value=1  {{ get_static_option('staff_select_settings')=='User can not select' ? 'selected' : '' }} >{{ __('User Can not Select ') }}</option>
                        </select>
                        <p class="mb-3 text-info">{{ __('You can set  whether user can select staff or not from here.') }}</p>
                    </div>

                    <div class="btn_wrapper mt-4">
                        <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('Update Changes') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <x-media.markup/>
@endsection
@section('scripts')
    <x-media.js />
    <script>
        (function($){
            "use strict";
            $(document).ready(function(){
                <x-btn.update/>
            });
        }(jQuery));
    </script>
@endsection
