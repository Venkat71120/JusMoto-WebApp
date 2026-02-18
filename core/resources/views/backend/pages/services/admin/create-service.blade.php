@extends('backend.admin-master')

@section('site-title')
{{__('Add New Service')}}
@endsection

@section('style')

<x-media.css/>

<style>

/* =========================
   MODERN RED THEME ENHANCEMENT
========================= */

:root {
    --red: #e31b23;
    --red-light: #fff5f5;
    --red-soft: #ffe3e3;
    --red-dark: #b11218;
    --dark: #111827;
    --dark-soft: #1f2937;
    --gray-700: #374151;
    --gray-400: #9CA3AF;
    --gray-300: #D1D5DB;
    --gray-200: #E5E7EB;
    --gray-100: #F3F4F6;
    --gray-50: #F9FAFB;
    --white: #FFFFFF;
    --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.08);
    --radius-md: 12px;
    --radius-lg: 16px;
}

/* Page Container */
.services-page {
    background: var(--gray-50);
    min-height: 100vh;
    padding: 24px;
}

/* Dashboard Card */
.dashboard__card {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-200);
    transition: all 0.2s ease;
    overflow: hidden;
}

.dashboard__card:hover {
    box-shadow: var(--shadow-md);
}

/* Header Section */
.header-wrap {
    padding: 24px 28px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
}

.header-title {
    font-size: 22px;
    font-weight: 600;
    color: var(--dark);
    margin: 0;
    letter-spacing: -0.02em;
}

.header-title::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background: var(--red);
    border-radius: 4px;
    margin-right: 12px;
    vertical-align: middle;
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
    transition: all 0.2s ease;
}

.btn_bg_info:hover {
    background: var(--red);
    border-color: var(--red);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(227, 27, 35, 0.15);
}

.btn_bg_info i {
    font-size: 16px;
}

/* ===== MODERN STEP TABS ===== */
#add-listing-tab {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding: 0 28px;
    margin: 24px 0 20px;
}

#add-listing-tab .nav-link {
    flex: 1;
    min-width: 160px;
    background: var(--white);
    border-radius: 40px;
    padding: 14px 20px;
    border: 1px solid var(--gray-200);
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--gray-700);
    font-weight: 500;
    font-size: 15px;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
}

#add-listing-tab .nav-link:hover {
    border-color: var(--red-soft);
    background: var(--red-light);
    transform: translateY(-2px);
}

#add-listing-tab .nav-link.active {
    background: var(--red);
    color: white;
    border-color: var(--red);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.25);
}

.new_stepForm_list__item__numb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: inherit;
    transition: all 0.2s ease;
}

.nav-link.active .new_stepForm_list__item__numb {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

/* ===== FORM CONTAINER ===== */
.add-listing-content-wrapper {
    margin: 0 28px 28px;
    background: var(--white);
    border-radius: var(--radius-lg);
    border: 1px solid var(--gray-200);
    padding: 28px;
    box-shadow: var(--shadow-sm);
}

/* ===== FORM ELEMENTS ===== */
.form__control {
    height: 46px;
    border-radius: 10px !important;
    border: 1px solid var(--gray-300) !important;
    padding: 0 16px;
    font-size: 14px;
    color: var(--dark);
    transition: all 0.2s ease;
    background: var(--white);
}

.form__control:focus {
    border-color: var(--red) !important;
    box-shadow: 0 0 0 3px var(--red-soft) !important;
    outline: none;
}

.form__control::placeholder {
    color: var(--gray-400);
    font-size: 14px;
}

textarea.form__control {
    height: auto;
    padding: 12px 16px;
    min-height: 100px;
    resize: vertical;
}

/* Form Labels */
.form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--gray-700);
    margin-bottom: 8px;
}

.form-label span.required {
    color: var(--red);
    margin-left: 2px;
}

/* ===== SELECT2 CUSTOMIZATION ===== */
.select2-container--default .select2-selection--single {
    border: 1px solid var(--gray-300) !important;
    border-radius: 10px !important;
    height: 46px !important;
    padding: 8px 0 !important;
    background: var(--white) !important;
}

.select2-container--default .select2-selection--single .select2-selection__rendered {
    color: var(--dark) !important;
    font-size: 14px !important;
    line-height: 28px !important;
    padding-left: 16px !important;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 44px !important;
    right: 12px !important;
}

.select2-container--default .select2-dropdown {
    border: 1px solid var(--gray-300) !important;
    border-radius: 10px !important;
    background: var(--white) !important;
    box-shadow: var(--shadow-lg) !important;
    z-index: 99999 !important;
}

.select2-container--default .select2-results__option {
    padding: 10px 16px !important;
    font-size: 14px !important;
    color: var(--dark) !important;
}

.select2-container--default .select2-results__option--highlighted {
    background: var(--red-light) !important;
    color: var(--red) !important;
}

.select2-container--default .select2-results__option[aria-selected="true"] {
    background: var(--red) !important;
    color: white !important;
}

/* ===== CAR CARDS ===== */
#session_service_car_card {
    width: 100%;
    border-radius: var(--radius-lg);
    border: 1px solid var(--gray-200);
    box-shadow: var(--shadow-sm);
    transition: all 0.2s ease;
    background: var(--white);
    margin-bottom: 20px;
    overflow: hidden;
}

#session_service_car_card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--red-soft);
}

#session_service_car_card .card-body {
    padding: 24px;
}

#session_service_car_card .row {
    margin-bottom: 16px;
}

#session_service_car_card .form__input__single label {
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-400);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin-bottom: 6px;
    display: block;
}

#session_service_car_card .form__input__single .form__control {
    background: var(--gray-50);
    border: 1px solid var(--gray-200) !important;
    cursor: default;
}

/* ===== BUTTONS ===== */
.cmnBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 22px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    text-decoration: none;
}

.btn_5 {
    min-width: 100px;
}

.btn_bg_blue {
    background: var(--red);
    color: white;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.btn_bg_blue:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
    color: white;
}

.btn_bg_warning {
    background: var(--gray-100);
    color: var(--gray-700);
}

.btn_bg_warning:hover {
    background: var(--red);
    color: white;
}

/* Remove Row Button */
.removeRowBtn {
    background: var(--red-light);
    border: 1px solid var(--red-soft);
    border-radius: 8px;
    padding: 8px 20px;
    color: var(--red);
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.removeRowBtn:hover {
    background: var(--red);
    color: white;
    border-color: var(--red);
}

/* ===== LOAD MORE BUTTON ===== */
#loadMoreCars,
#loadMoreCarsForServiceFilter {
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 40px;
    padding: 10px 28px;
    color: var(--gray-700);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    margin: 20px auto;
    display: inline-block;
}

#loadMoreCars:hover,
#loadMoreCarsForServiceFilter:hover {
    background: var(--red);
    border-color: var(--red);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(227, 27, 35, 0.15);
}

/* ===== PERMALINK ===== */
.permalink-wrapper {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 24px;
}

.permalink-label {
    font-size: 12px;
    color: var(--gray-400);
    margin-bottom: 8px;
    display: block;
}

.permalink-value {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.permalink-text {
    font-size: 14px;
    color: var(--red);
    font-weight: 500;
}

.permalink-edit {
    background: none;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    font-size: 14px;
    transition: color 0.2s ease;
}

.permalink-edit:hover {
    color: var(--red);
}

/* ===== MODAL ===== */
.modal-content {
    border-radius: var(--radius-lg);
    border: none;
    box-shadow: var(--shadow-lg);
}

.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
}

.modal-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark);
}

.modal-body {
    padding: 24px;
}

.modal-footer {
    padding: 20px 24px;
    border-top: 1px solid var(--gray-200);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1499px) {
    #pac-input {
        width: 100% !important;
        margin-left: 0 !important;
    }
}

@media (max-width: 992px) {
    .services-page {
        padding: 16px;
    }
    
    #add-listing-tab .nav-link {
        min-width: 100%;
    }
    
    .header-wrap {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
    }
    
    .right-content {
        width: 100%;
    }
    
    .btn_bg_info {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .add-listing-content-wrapper {
        margin: 0 16px 16px;
        padding: 20px;
    }
    
    #add-listing-tab {
        padding: 0 16px;
    }
}

/* ===== DARK MODE ===== */
body.dark-mode .dashboard__card {
    background: var(--dark-soft);
    border-color: #374151;
}

body.dark-mode .header-wrap {
    background: #1F2937;
    border-color: #374151;
}

body.dark-mode .header-title {
    color: #F3F4F6;
}

body.dark-mode #add-listing-tab .nav-link {
    background: #1F2937;
    border-color: #374151;
    color: #E5E7EB;
}

body.dark-mode .form__control {
    background: #374151;
    border-color: #4B5563 !important;
    color: #F3F4F6;
}

body.dark-mode .form__control::placeholder {
    color: #9CA3AF;
}

body.dark-mode .form-label {
    color: #E5E7EB;
}

body.dark-mode #session_service_car_card {
    background: #1F2937;
    border-color: #374151;
}

body.dark-mode #session_service_car_card .form__input__single .form__control {
    background: #374151;
    border-color: #4B5563 !important;
    color: #E5E7EB;
}

body.dark-mode .select2-container--default .select2-selection--single {
    background: #374151 !important;
    border-color: #4B5563 !important;
}

body.dark-mode .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #F3F4F6 !important;
}

body.dark-mode .select2-container--default .select2-dropdown {
    background: #1F2937 !important;
    border-color: #4B5563 !important;
}

body.dark-mode .select2-container--default .select2-results__option {
    color: #F3F4F6 !important;
}

body.dark-mode .btn_bg_info {
    background: #374151;
    border-color: #4B5563;
    color: #F3F4F6;
}

/* Preserve original styles */
.close { border: none; }
.dashboard-switch-single { font-size: 20px; }
.swal_delete_button { color: #da0000 !important; }

#pac-input {
    height: 3em;
    width: 75%;
    margin-left: 140px;
    border: 1px solid;
    top: 4px;
    font-size: 16px;
}

.form_control:focus, .form__control:focus, .form--control:focus, .form-control:focus {
    box-shadow: none;
}

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

</style>

@endsection


@section('content')

<div class="services-page">

<div class="row g-4 mt-0">
<div class="col-xl-12">

<div class="dashboard__card">

<div class="header-wrap d-flex justify-content-between align-items-center">

<div class="left-content">
<h4 class="header-title">{{__('Add New Service')}}</h4>
</div>

<div class="right-content">
<a class="cmnBtn btn_5 btn_bg_info radius-5"
href="{{route('admin.all.services')}}">
<i class="las la-arrow-left"></i>
{{__('All Services')}}
</a>
</div>

</div>

<x-validation.error/>

<div class="add-listing-wrapper">

<!-- STEP NAVIGATION -->
<div class="nav nav-pills" id="add-listing-tab" role="tablist">

<a class="nav-link active"
   id="listing-info-tab"
   data-bs-toggle="pill"
   href="#listing-info"
   role="tab">
<span class="new_stepForm_list__item__numb">1</span>
{{__('Service Details')}}
</a>

<a class="nav-link"
   id="location-tab"
   data-bs-toggle="pill"
   href="#location"
   role="tab">
<span class="new_stepForm_list__item__numb">2</span>
{{__('Service Attributes')}}
</a>

<a class="nav-link"
   id="select-car-tab"
   data-bs-toggle="pill"
   href="#car"
   role="tab">
<span class="new_stepForm_list__item__numb">3</span>
{{__('Select Car')}}
</a>

</div>

<form action="{{route('admin.add.new.service')}}" method="post" enctype="multipart/form-data">
@csrf

<div class="add-listing-content-wrapper">

<div class="tab-content" id="add-listing-tabContent">

{{-- Service General Info --}}
@include('backend.pages.services.admin.service-general-info')

{{-- Service Include --}}
@include('backend.pages.services.admin.service-include')

{{-- Select Car --}}
@include('backend.pages.services.admin.select-service-car')

</div>

<div class="text-end mt-4">
<button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5">
<i class="las la-save"></i>
{{__('Save Service')}}
</button>
</div>

</div>

</form>

</div>
</div>
</div>
</div>

</div>

<x-media.markup/>

@endsection

@section('scripts')

<x-media.js/>
<x-frontend.js.new-tag-add-js/>

<script src="{{asset('assets/frontend/js/multi-step.js')}}"></script>
@include('backend.pages.services.admin.service-add-more-option-js')
<script src="{{asset('assets/backend/js/select2.min.js')}}"></script>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    (function ($) {
        "use strict";
        
        $(document).ready(function () {
            // Initialize Select2
            // $('.select2').select2({
            //     width: '100%',
            //     placeholder: '{{__("Select option")}}',
            //     allowClear: true
            // });

            $('#category').select2({
                width: '100%',
                placeholder: '{{__("Select Category")}}',
                allowClear: true
            });

            $('.subcategory').select2({
                width: '100%',
                placeholder: '{{__("Select Sub Category")}}',
                allowClear: true
            });

            $('#car_brand_id').select2({
                dropdownParent: $('#addModal'),
                width: '100%',
                placeholder: '{{__("Select Brand")}}',
                allowClear: true
            });

            $('.car_model_id').select2({
                dropdownParent: $('#addModal'),
                width: '100%',
                placeholder: '{{__("Select Car Model")}}',
                allowClear: true
            });

            // Load More functionality
            let visible = 5;
            let visible_filter = 5;

            $('body').on('click', '#loadMoreCars', function () {
                let total = $('.car-card').length;
                $('.car-card.d-none').slice(0, 5).removeClass('d-none');
                visible += 5;
                if (visible >= total) {
                    $('#loadMoreCars').hide();
                }
            });

            $('body').on('click', '#loadMoreCarsForServiceFilter', function () {
                let total = $('.car-card-filter').length;
                $('.car-card-filter.d-none').slice(0, 5).removeClass('d-none');
                visible_filter += 5;
                if (visible_filter >= total) {
                    $('#loadMoreCarsForServiceFilter').hide();
                }
            });

            // Category change handler
            $('#category').on('change', function() {
                let category_id = $(this).val();
                if (!category_id) return;
                
                $.ajax({
                    method: 'post',
                    url: "{{route('get.subcategory')}}",
                    data: { category_id: category_id },
                    success: function(res) {
                        if (res.status == 'success') {
                            let options = "<option value=''>{{__('Select Sub Category')}}</option>";
                            $.each(res.sub_categories, function(index, value) {
                                options += "<option value='" + value.id + "'>" + value.name + "</option>";
                            });
                            $(".subcategory").html(options);
                            $(".subcategory").trigger('change.select2');
                        }
                    }
                });
            });

            // Car brand change handler
            $('#car_brand_id').on('change', function() {
                let brand_id = $(this).val();
                if (!brand_id) return;
                
                $.ajax({
                    method: 'post',
                    url: "{{route('get.car_model')}}",
                    data: { brand_id: brand_id },
                    success: function(res) {
                        if (res.status == 'success') {
                            let options = "<option value=''>{{__('Select Car Model')}}</option>";
                            $.each(res.data, function(index, value) {
                                let car_name = value.name + (value.Year ? ' - ' + value.Year : '');
                                options += "<option value='" + value.id + "'>" + car_name + "</option>";
                            });
                            $(".car_model_id").html(options);
                            $(".car_model_id").trigger('change.select2');
                        }
                    }
                });
            });

            // Car model change handler
            $('#car_model_value').on('change', function() {
                let car_id = $(this).val();
                if (!car_id) return;
                
                $.ajax({
                    method: 'post',
                    url: "{{route('get.car_variant')}}",
                    data: { car_id: car_id },
                    success: function(res) {
                        if (res.status == 'success') {
                            let options = "<option value='all'>{{__('Select All Variant')}}</option>";
                            $.each(res.data, function(index, value) {
                                let engine_name = value.engine_type ? value.engine_type.name : '';
                                let fuel_name = value.fual_type ? value.fual_type.name : '';
                                let engine_fuel = engine_name + (fuel_name ? ' - ' + fuel_name : '');
                                options += "<option value='" + value.id + "'>" + engine_fuel + "</option>";
                            });
                            $(".car_variant").html(options);
                            $(".car_variant").trigger('change.select2');
                        }
                    }
                });
            });

            // Country change handler
            $(document).on('change', '#country_id', function() {
                let country = $(this).val();
                if (!country) return;
                
                $.ajax({
                    method: 'post',
                    url: "{{ route('au.state.all') }}",
                    data: { country: country },
                    success: function(res) {
                        if (res.status == 'success') {
                            let options = "<option value=''>{{__('Select State')}}</option>";
                            $.each(res.states, function(index, value) {
                                options += "<option value='" + value.id + "'>" + value.state + "</option>";
                            });
                            $(".get_country_state").html(options);
                            $(".get_country_state").trigger('change.select2');
                        }
                    }
                });
            });

            // State change handler
            $(document).on('change', '#state_id', function() {
                let state = $(this).val();
                if (!state) return;
                
                $.ajax({
                    method: 'post',
                    url: "{{ route('au.city.all') }}",
                    data: { state: state },
                    success: function(res) {
                        if (res.status == 'success') {
                            let options = "<option value=''>{{__('Select City')}}</option>";
                            $.each(res.cities, function(index, value) {
                                options += "<option value='" + value.id + "'>" + value.city + "</option>";
                            });
                            $(".get_state_city").html(options);
                            $(".get_state_city").trigger('change.select2');
                        }
                    }
                });
            });

            // Modal handlers
            $('#addBtn').on('click', function (e) {
                e.preventDefault();
                $('#addModal').modal('show');
                $('#isModalOpen').val('true');
            });

            $(document).on('click', '.modal_close', function () {
                $('#isModalOpen').val('false');
            });

            // Add variant
            $('#addAllVariant').on('click', function () {
                $.ajax({
                    method: 'post',
                    url: "{{ route('admin.carService.add') }}",
                    data: { variant_id: 'all' },
                    success: function(res) {
                        if (res.status == 'success') {
                            toastr.success("{{__('Success')}}");
                            $("#session_data").html(res.view);
                        }
                    }
                });
            });

            // Remove all variants
            $('#removeAllVariant').on('click', function () {
                $.ajax({
                    method: 'post',
                    url: "{{ route('admin.allCarService.delete') }}",
                    success: function(res) {
                        if (res.status == 'success') {
                            toastr.success("{{__('Success')}}");
                            $("#session_data").html(res.view);
                        }
                    }
                });
            });

            // Add row
            $('#addRowBtn').on('click', function () {
                var brand = $('#car_brand_id').val();
                var car = $('.car_model_id').val();
                var price = $('#price1').val();
                var discount_price = $('#discount_price1').val();
                var unit = $('#unit1').val();
                var duration = $('#duration1').val();
                var service_car_image1 = $('#service_car_image1').val();
                var car_variant = $('#car_variant').val();
                var useDefault = $('#duration_checkbox').prop('checked') ? 1 : 0;

                $.ajax({
                    method: 'post',
                    url: "{{ route('admin.carService.add') }}",
                    data: {
                        brand_id: brand,
                        car_id: car,
                        price1: price,
                        discount_price1: discount_price,
                        unit1: unit,
                        duration1: duration,
                        use_default: useDefault,
                        service_car_image1: service_car_image1,
                        car_variant: car_variant
                    },
                    success: function(res) {
                        if (res.status == 'success') {
                            toastr.success("{{__('Success')}}");
                            $("#car_brand_id").val("").trigger("change");
                            $("#car_model_value").val("").trigger("change");
                            $('#car_variant').val('').trigger('change');
                            $("#price1").val('');
                            $("#discount_price1").val('');
                            $("#unit1").val('');
                            $("#duration1").val('');
                            $("#duration_checkbox").prop("checked", false);
                            $("#service_product_img .thumbnail img").attr("src", "{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}");
                            $('#service_car_image1').val('');
                            $('#addModal').modal('hide');
                            $("#session_data").html(res.view);
                            $('#isModalOpen').val('false');
                        } else if (res.status == 'validation_error') {
                            $.each(res.errors, function (key, value) {
                                $('.error-car').text(value[0]);
                            });
                        }
                    }
                });
            });

            // Remove row
            $(document).on('click', '.removeRowBtn', function () {
                let carId = $(this).data('id');
                $.ajax({
                    method: 'post',
                    url: `/admin/carService/delete/${carId}`,
                    success: function(res) {
                        if (res.status == 'success') {
                            $("#session_data").html(res.view);
                        }
                    }
                });
            });

            // Filter button
            $('#filterBtn').on('click', function () {
                let brand_id = $('#brand_name').val();
                let car_id = $('#car_name').val();
            
                $.ajax({
                    url: "{{ route('admin.carService.filter') }}",
                    method: 'GET',
                    data: { brand_id: brand_id, car_id: car_id },
                    success: function (res) {
                        if (res.status == 'success') {
                            if (res.cars == "all") {
                                $('.session_service_car').removeClass('d-none');
                                $('#search_service_car_result').empty();
                                $('#loadMoreCars').removeClass('d-none');
                            } else {
                                $('#search_service_car_result').empty();
                                $('.session_service_car').addClass('d-none');
                                let length = 0;
                                visible_filter = 5;
                                
                                $.each(res.cars, function (key, car) {
                                    length++;
                                    let hiddenElement = length > 5 ? 'd-none' : '';

                                    let card = `
                                        <div class="car-card car-card-filter ${hiddenElement}" data-index="${key}">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <div class="form__input__single">
                                                            <label>Brand</label>
                                                            <input class="form__control" value="${car.brand || 'N/A'}" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form__input__single">
                                                            <label>Car Model</label>
                                                            <input class="form__control" value="${car.car || 'N/A'}" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form__input__single">
                                                            <label>Variant</label>
                                                            <input class="form__control" value="${car.engineFuel || 'N/A'}" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form__input__single">
                                                            <label>Price</label>
                                                            <input class="form__control" value="${car.price || 'N/A'}" disabled>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" class="remove-btn mt-3" data-id="${key}">
                                                    <i class="las la-trash"></i> {{ __('Remove') }}
                                                </button>
                                            </div>
                                        </div>`;
                                    
                                    $('#search_service_car_result').append(card);
                                });
                                
                                $('#loadMoreCars').addClass('d-none');
                                if (length > 5) {
                                    let loadMore = `<div class="text-center mt-3">
                                        <button type="button" class="btn-outline" id="loadMoreCarsForServiceFilter">
                                            <i class="las la-plus"></i> {{ __('Load More') }}
                                        </button>
                                    </div>`;
                                    $('#search_service_car_result').append(loadMore);
                                }
                            }
                        }
                    }
                });
            });

            // Permalink functionality
            $('.permalink_label').hide();
            
            $(document).on('keyup', '#title', function (e) {
                let slug = converToSlug($(this).val());
                let url = "{{url('/service/')}}/" + slug;
                $('.permalink_label').show();
                $('#slug_show').text(url);
                $('.listing_slug').val(slug);
            });

            function converToSlug(slug) {
                return slug.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/--+/g, '-')
                    .trim();
            }

            $(document).on('click', '.slug_edit_button', function (e) {
                e.preventDefault();
                $('.listing_slug').show();
                $(this).hide();
                $('.slug_update_button').show();
            });

            $(document).on('click', '.slug_update_button', function (e) {
                e.preventDefault();
                $(this).hide();
                $('.slug_edit_button').show();
                var update_input = $('.listing_slug').val();
                var slug = converToSlug(update_input);
                var url = `{{url('/service/')}}/` + slug;
                $('#slug_show').text(url);
                $('.listing_slug').hide();
            });

            // is featured
            $(document).on('click', '.is_featured', function () {
                $('#is_featured').val($('#is_featured').is(':checked') ? '1' : '');
            });

            // Success message
            @if(session('success'))
                toastr.success('{{ session("success") }}', 'Success');
            @endif
        });
    })(jQuery);
</script>

@endsection