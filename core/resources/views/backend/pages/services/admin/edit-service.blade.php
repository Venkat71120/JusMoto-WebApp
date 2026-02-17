@extends('backend.admin-master')
@section('site-title')
    {{__('Edit Service')}}
@endsection
@section('style')
    <x-media.css/>
    <style>
        /* ===== MODERN RED THEME - EDIT SERVICE PAGE ===== */
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
            --transition: all 0.2s ease;
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
            transition: var(--transition);
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
            transition: var(--transition);
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
            transition: var(--transition);
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
            transition: var(--transition);
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
            transition: var(--transition);
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
        .form__input__single__label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 8px;
        }

        .form__input__single__label span.text-danger {
            color: var(--red);
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

        /* ===== PRICE INPUT WITH LABEL ===== */
        .position-relative {
            position: relative;
        }

        .infoTitle.position-absolute {
            position: absolute;
            top: 8px;
            left: 12px;
            background: var(--gray-100);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            color: var(--gray-700);
            z-index: 1;
        }

        input#price, input#discount_price, input#duration, input#max_qty {
            padding-left: 100px;
        }

        /* ===== CHECKBOX STYLING ===== */
        .checkBox {
            margin-top: 10px;
            border: 1px solid var(--gray-200);
            border-radius: 8px;
            padding: 12px 16px;
            display: inline-block;
            background: var(--white);
        }

        .checkBox__input {
            width: 18px;
            height: 18px;
            accent-color: var(--red);
            margin-right: 8px;
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

        #slug_show {
            font-size: 14px;
            color: var(--red);
            font-weight: 500;
            word-break: break-all;
        }

        .slug_edit_button {
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 6px;
            padding: 6px 12px;
            color: var(--gray-700);
            cursor: pointer;
            transition: var(--transition);
        }

        .slug_edit_button:hover {
            background: var(--red);
            border-color: var(--red);
            color: white;
        }

        .listing_slug {
            margin-top: 12px;
            width: 100%;
        }

        .slug_update_button {
            background: var(--red);
            border: none;
            color: white;
            padding: 8px 20px;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            transition: var(--transition);
            margin-top: 8px;
        }

        .slug_update_button:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
        }

        /* ===== MEDIA UPLOAD ===== */
        .upload-img {
            background: var(--gray-50);
            border: 1px dashed var(--gray-300);
            border-radius: 12px;
            padding: 20px;
            transition: var(--transition);
        }

        .upload-img:hover {
            border-color: var(--red);
            background: var(--red-light);
        }

        .img-wrap {
            width: 100%;
            height: 140px;
            border-radius: 10px;
            overflow: hidden;
            background: var(--white);
            border: 1px solid var(--gray-200);
            margin-bottom: 16px;
        }

        .img-wrap img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .media-upload-btn-wrapper .btn-info {
            background: var(--white);
            border: 1px solid var(--gray-300);
            color: var(--gray-700);
            padding: 10px 20px;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .media-upload-btn-wrapper .btn-info i {
            color: var(--red);
            transition: var(--transition);
        }

        .media-upload-btn-wrapper .btn-info:hover {
            background: var(--red);
            border-color: var(--red);
            color: white;
        }

        .media-upload-btn-wrapper .btn-info:hover i {
            color: white;
        }

        .media-upload-btn-wrapper small {
            display: block;
            font-size: 11px;
            color: var(--gray-500);
            margin-top: 8px;
        }

        .media-upload-btn-wrapper small i {
            color: var(--red);
            margin-right: 4px;
        }

        /* ===== CAR CARDS ===== */
        #session_edit_service_car_card {
            width: 100%;
            border-radius: var(--radius-lg);
            border: 1px solid var(--gray-200);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            background: var(--white);
            margin-bottom: 20px;
            overflow: hidden;
        }

        #session_edit_service_car_card:hover {
            box-shadow: var(--shadow-md);
            border-color: var(--red-soft);
        }

        #session_edit_service_car_card .card-body {
            padding: 24px;
        }

        #session_edit_service_car_card .form__input__single label {
            font-size: 12px;
            font-weight: 500;
            color: var(--gray-400);
            text-transform: uppercase;
            letter-spacing: 0.03em;
            margin-bottom: 6px;
            display: block;
        }

        #session_edit_service_car_card .form__input__single .form__control {
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
            transition: var(--transition);
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
            transition: var(--transition);
        }

        .removeRowBtn:hover {
            background: var(--red);
            color: white;
            border-color: var(--red);
        }

        /* ===== FILTER DROPDOWNS ===== */
        #edit_select_brand_name,
        #edit_select_car_name {
            width: 210px;
        }

        .filter-select {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid var(--gray-300);
            border-radius: 8px;
            font-size: 14px;
            color: var(--dark);
            background: var(--white);
            cursor: pointer;
            transition: var(--transition);
        }

        .filter-select:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-soft);
        }

        /* ===== MODAL ===== */
        .modal-content {
            border: none;
            border-radius: var(--radius-lg);
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
            display: flex;
            align-items: center;
        }

        .modal-title i {
            color: var(--red);
            margin-right: 8px;
        }

        .modal-body {
            padding: 24px;
        }

        .modal-footer {
            padding: 20px 24px;
            border-top: 1px solid var(--gray-200);
            display: flex;
            justify-content: flex-end;
            gap: 12px;
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
            
            #edit_select_brand_name,
            #edit_select_car_name {
                width: 100%;
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
        body.dark-mode .services-page {
            background: #111827;
        }

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

        body.dark-mode .form__input__single__label {
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

        body.dark-mode .upload-img {
            background: #374151;
            border-color: #4B5563;
        }

        body.dark-mode .img-wrap {
            background: #1F2937;
            border-color: #4B5563;
        }

        body.dark-mode .media-upload-btn-wrapper .btn-info {
            background: #1F2937;
            border-color: #4B5563;
            color: #E5E7EB;
        }

        body.dark-mode .btn_bg_info {
            background: #374151;
            border-color: #4B5563;
            color: #F3F4F6;
        }

        body.dark-mode #session_edit_service_car_card {
            background: #1F2937;
            border-color: #374151;
        }

        /* Preserve original styles */
        .close { border: none; }
        .dashboard-switch-single { font-size: 20px; }
        .swal_delete_button { color: #da0000 !important; }
        .condition { padding: 13px; border: 2px solid #e9e9e9; border-radius: 6px; }
        .radio input { height: 20px; width: 20px; }
        .flex_0 { flex-shrink: 0; }
    </style>
@endsection

@section('content')
    <div class="services-page">
        <div class="row g-4 mt-0">
            <div class="col-xl-12 col-lg-12 mt-0">
                <div class="dashboard__card">
                    <div class="header-wrap d-flex justify-content-between align-items-center">
                        <div class="left-content">
                            <h4 class="header-title">{{__('Edit Service')}}</h4>
                        </div>
                        <div class="right-content">
                            <a class="cmnBtn btn_5 btn_bg_info radius-5" href="{{route('admin.all.services')}}">
                                <i class="las la-arrow-left"></i>
                                {{__('All Services')}}
                            </a>
                        </div>
                    </div>

                    <x-validation.error/>

                    <div class="add-listing-wrapper">
                        <!-- STEP NAVIGATION -->
                        <div class="nav nav-pills" id="add-listing-tab" role="tablist">
                            <a class="nav-link active" id="listing-info-tab" data-bs-toggle="pill" href="#listing-info" role="tab">
                                <span class="new_stepForm_list__item__numb">1</span>
                                {{__('Service Details')}}
                            </a>
                            <a class="nav-link" id="location-tab" data-bs-toggle="pill" href="#location" role="tab">
                                <span class="new_stepForm_list__item__numb">2</span>
                                {{__('Service Attributes')}}
                            </a>
                            <a class="nav-link" id="select-car-tab" data-bs-toggle="pill" href="#car" role="tab">
                                <span class="new_stepForm_list__item__numb">3</span>
                                {{__('Select Car')}}
                            </a>
                        </div>

                        <form action="{{route('admin.edit.service', $service->id)}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="add-listing-content-wrapper">
                                <div class="tab-content" id="add-listing-tabContent">
                                    <!-- service Info start-->
                                    @include('backend.pages.services.admin.edit-service-details')
                                    <!-- service Info end-->
                                    <!-- Include start-->
                                    @include('backend.pages.services.admin.edit-service-include')
                                    <!-- Include end-->
                                    <!-- Car Select start-->
                                    @include('backend.pages.services.admin.edit-service-car')
                                    <!-- Car select end-->
                                </div>

                                <div class="text-end mt-4">
                                    <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5">
                                        <i class="las la-save"></i>
                                        {{__('Update Service')}}
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
@section('style')
    <x-media.css/>
    <style>
        /* ===== CLEAN & MODERN EDIT SERVICE PAGE ===== */
        /* Pure CSS - No JS changes, no dark mode, no hover effects */

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
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --radius-sm: 6px;
            --radius-md: 8px;
            --radius-lg: 12px;
        }

        /* Page Container */
        .row.g-4.mt-0 {
            padding: 24px;
            background: var(--gray-50);
            min-height: 100vh;
        }

        /* Main Card */
        .dashboard__card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            padding: 24px;
        }

        /* Header */
        .header-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--gray-200);
        }

        .header-title {
            font-size: 22px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0;
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
        }

        /* No hover effects */
        .btn_bg_info:hover,
        .btn_bg_info:focus,
        .btn_bg_info:active {
            background: var(--white);
            border-color: var(--gray-300);
            color: var(--gray-700);
            transform: none;
            box-shadow: none;
        }

        /* Step Tabs */
        #add-listing-tab {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 24px;
        }

        #add-listing-tab .nav-link {
            flex: 1;
            min-width: 140px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 40px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--gray-600);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
        }

        #add-listing-tab .nav-link.active {
            background: var(--red);
            border-color: var(--red);
            color: var(--white);
        }

        .new_stepForm_list__item__numb {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: var(--gray-100);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 600;
            color: var(--gray-600);
        }

        .nav-link.active .new_stepForm_list__item__numb {
            background: rgba(255, 255, 255, 0.2);
            color: var(--white);
        }

        /* Form Container */
        .add-listing-content-wrapper {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            padding: 24px;
        }

        /* Form Elements */
        .form__input__single {
            margin-bottom: 20px;
        }

        .form__input__single__label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 6px;
        }

        .form__control,
        input[type="text"],
        input[type="number"],
        textarea,
        select {
            width: 100%;
            padding: 10px 14px;
            background: var(--white);
            border: 1px solid var(--gray-300) !important;
            border-radius: var(--radius-md) !important;
            font-size: 14px;
            color: var(--gray-800);
            font-family: inherit;
        }

        /* No focus effects */
        .form__control:focus,
        input:focus,
        textarea:focus,
        select:focus {
            outline: none;
            border-color: var(--gray-300) !important;
            box-shadow: none;
        }

        textarea {
            min-height: 100px;
            resize: vertical;
        }

        /* Select2 Customization - Keep functionality, just style */
        .select2-container--default .select2-selection--single {
            border: 1px solid var(--gray-300) !important;
            border-radius: var(--radius-md) !important;
            height: 42px !important;
            padding: 8px 0 !important;
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
            border-radius: var(--radius-md) !important;
        }

        .select2-results__option {
            padding: 8px 14px !important;
            font-size: 14px !important;
            color: var(--gray-800) !important;
        }

        /* Price Input with Label */
        .position-relative {
            position: relative;
        }

        .infoTitle {
            position: absolute;
            top: 8px;
            left: 12px;
            background: var(--gray-100);
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 500;
            color: var(--gray-600);
            z-index: 1;
        }

        input#price,
        input#discount_price,
        input#duration,
        input#max_qty {
            padding-left: 85px !important;
        }

        /* Checkbox */
        .checkBox {
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-md);
            padding: 10px 16px;
            display: inline-block;
        }

        .checkBox__input {
            width: 18px;
            height: 18px;
            margin-right: 8px;
            accent-color: var(--red);
        }

        /* Permalink */
        .permalink_label {
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-md);
            padding: 16px;
        }

        #slug_show {
            color: var(--red);
            font-size: 14px;
            font-weight: 500;
        }

        .slug_edit_button,
        .slug_update_button {
            padding: 6px 12px;
            border-radius: var(--radius-sm);
            font-size: 13px;
            border: 1px solid var(--gray-300);
            background: var(--white);
            color: var(--gray-700);
            cursor: pointer;
        }

        /* No hover effects on buttons */
        .slug_edit_button:hover,
        .slug_update_button:hover {
            background: var(--white);
            border-color: var(--gray-300);
            color: var(--gray-700);
        }

        .listing_slug {
            margin-top: 8px;
        }

        /* Media Upload */
        .upload-img {
            background: var(--gray-50);
            border: 1px dashed var(--gray-300);
            border-radius: var(--radius-md);
            padding: 16px;
        }

        .img-wrap {
            width: 100%;
            height: 120px;
            border-radius: var(--radius-sm);
            overflow: hidden;
            background: var(--white);
            border: 1px solid var(--gray-200);
            margin-bottom: 12px;
        }

        .img-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .media-upload-btn-wrapper .btn-info {
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            padding: 8px 16px;
            font-size: 13px;
            color: var(--gray-700);
            cursor: pointer;
            width: 100%;
        }

        /* No hover effects on upload button */
        .media-upload-btn-wrapper .btn-info:hover {
            background: var(--white);
            border-color: var(--gray-300);
            color: var(--gray-700);
        }

        .media-upload-btn-wrapper small {
            display: block;
            font-size: 11px;
            color: var(--gray-500);
            margin-top: 4px;
        }

        /* Car Cards */
        #session_edit_service_car_card {
            width: 100%;
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            background: var(--white);
            margin-bottom: 16px;
        }

        #session_edit_service_car_card .card-body {
            padding: 20px;
        }

        /* Filter Dropdowns */
        #edit_select_brand_name,
        #edit_select_car_name {
            width: 210px;
        }

        /* Buttons */
        .cmnBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 22px;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            text-decoration: none;
        }

        .btn_bg_blue {
            background: var(--red);
            color: var(--white);
        }

        /* No hover effects */
        .btn_bg_blue:hover,
        .btn_bg_blue:focus,
        .btn_bg_blue:active {
            background: var(--red);
            color: var(--white);
            transform: none;
            box-shadow: none;
        }

        .btn-danger {
            background: var(--red-light);
            border: 1px solid var(--red);
            color: var(--red);
            padding: 8px 16px;
            border-radius: var(--radius-sm);
            cursor: pointer;
        }

        .btn-danger:hover {
            background: var(--red-light);
            color: var(--red);
        }

        /* Modal */
        .modal-content {
            border: none;
            border-radius: var(--radius-lg);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
            padding: 16px 20px;
            border-bottom: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        .modal-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-800);
        }

        .modal-body {
            padding: 20px;
        }

        .modal-footer {
            padding: 16px 20px;
            border-top: 1px solid var(--gray-200);
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }

        /* Remove Row Button */
        .removeRowBtn {
            background: var(--red-light);
            border: 1px solid var(--red);
            color: var(--red);
            padding: 6px 16px;
            border-radius: var(--radius-sm);
            font-size: 13px;
            cursor: pointer;
        }

        .removeRowBtn:hover {
            background: var(--red-light);
            color: var(--red);
        }

        /* Load More Button */
        #loadMoreCars,
        #loadMoreCarsForServiceFilter {
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            padding: 8px 24px;
            color: var(--gray-700);
            font-size: 14px;
            cursor: pointer;
            margin: 16px auto;
            display: inline-block;
        }

        #loadMoreCars:hover,
        #loadMoreCarsForServiceFilter:hover {
            background: var(--white);
            border-color: var(--gray-300);
            color: var(--gray-700);
        }

        /* Navigation Buttons */
        .btn_wrapper.d-flex {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid var(--gray-200);
        }

        /* Margin Utilities */
        .margin-top-20 { margin-top: 20px; }
        .margin-top-40 { margin-top: 40px; }
        .mt-2 { margin-top: 8px; }
        .mt-3 { margin-top: 12px; }
        .mt-4 { margin-top: 20px; }
        .mt-5 { margin-top: 28px; }
        .mb-4 { margin-bottom: 20px; }
        .me-2 { margin-right: 8px; }
        .me-3 { margin-right: 12px; }
        .gap-3 { gap: 12px; }

        /* Remove any transitions */
        * {
            transition: none !important;
        }

        /* Responsive */
        @media (max-width: 992px) {
            #add-listing-tab .nav-link {
                min-width: 100%;
            }
            
            .header-wrap {
                flex-direction: column;
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

        @media (max-width: 1499px) {
            #pac-input {
                width: 100%;
                margin-left: 0;
            }
        }

        /* Preserve original functionality classes */
        .d-none { display: none; }
        .d-flex { display: flex; }
        .flex-wrap { flex-wrap: wrap; }
        .justify-content-between { justify-content: space-between; }
        .align-items-center { align-items: center; }
        .text-danger { color: var(--red); }
        .radius-5 { border-radius: var(--radius-sm); }
        .w-100 { width: 100%; }
    </style>
@endsection
@section('scripts')
    <x-media.js />
    <script src="{{asset('assets/frontend/js/multi-step.js')}}"></script>
    @include('backend.pages.services.admin.service-add-more-option-js')
    <script src="{{asset('assets/backend/js/select2.min.js')}}"></script>  
    @include('backend.pages.services.admin.edit-service-js')
@endsection