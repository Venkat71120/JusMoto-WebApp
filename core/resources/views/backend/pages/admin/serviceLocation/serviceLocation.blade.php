@extends('backend.admin-master')
@section('site-title')
    {{__('Select Outlet Location')}}
@endsection
@section('style')
    <link rel="stylesheet" href="{{asset('assets/backend/css/bootstrap-tagsinput.css')}}">
    <x-media.css/>
    <style>
        /* ===== CLEAN & MODERN SELECT OUTLET LOCATION PAGE ===== */

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
            --blue: #3b82f6;
            --blue-light: #eff6ff;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .select-location-page {
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

        /* Location Card */
        .location-card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            padding: 24px;
            margin: 16px;
        }

        /* Map Container */
        .map-wrapper {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            overflow: hidden;
            margin-bottom: 24px;
        }

        .map-container {
            position: relative;
            height: 480px;
            width: 100%;
        }

        #map_canvas {
            width: 100%;
            height: 100%;
            background: var(--gray-100);
        }

        #pac-input {
            position: absolute;
            top: 16px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 500px;
            height: 42px;
            padding: 8px 16px;
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            font-size: 14px;
            background: var(--white);
            box-shadow: var(--shadow-md);
            z-index: 10;
        }

        #pac-input:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        /* Form Grid */
        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

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

        .form-control,
        .form-select {
            width: 100%;
            padding: 10px 14px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
        }

        .form-control:focus,
        .form-select:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        .form-control::placeholder {
            color: var(--gray-400);
            font-size: 14px;
        }

        /* Coordinates Row */
        .coordinates-row {
            display: flex;
            gap: 20px;
        }

        .coordinates-row .form-group {
            flex: 1;
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

        /* Action Buttons */
        .action-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid var(--gray-200);
        }

        #outlet_submit {
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

        #outlet_submit:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
        }

        .clear_all_value {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 32px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            color: var(--gray-700);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }

        .clear_all_value:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
        }

        /* Notice Board */
        .notice-board {
            background: var(--blue-light);
            border: 1px solid var(--blue);
            border-radius: var(--radius);
            padding: 12px 16px;
            margin: 16px;
        }

        .notice-text {
            font-size: 14px;
            color: var(--gray-700);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .notice-text i {
            color: var(--blue);
            font-size: 16px;
        }

        .video-link {
            color: var(--blue);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: var(--transition);
        }

        .video-link:hover {
            color: var(--red);
        }

        .video-link i {
            color: var(--red);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .select-location-page {
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
            
            .coordinates-row {
                flex-direction: column;
                gap: 0;
            }
            
            .action-buttons {
                flex-direction: column;
            }
            
            #outlet_submit,
            .clear_all_value {
                width: 100%;
            }
            
            .map-container {
                height: 350px;
            }
        }

        @media (max-width: 768px) {
            .location-card {
                padding: 16px;
            }
            
            .map-container {
                height: 300px;
            }
            
            .notice-text {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media (max-width: 1499px) {
            #pac-input {
                width: calc(100% - 32px);
                margin: 0 16px;
            }
        }

        /* Preserve original classes */
        span {
            display: inline;
        }
        
        .bg__white {
            background: var(--white);
        }
        
        .padding-20 {
            padding: 20px;
        }
        
        .radius-10 {
            border-radius: var(--radius);
        }
        
        .mb-4 {
            margin-bottom: 20px;
        }
        
        .mt-0 {
            margin-top: 0;
        }
    </style>
@endsection

@section('content')
    <div class="select-location-page">
        <div class="row g-4 mt-0">
            <div class="col-12 mt-0">
                <div class="dashboard__card">
                    <div class="header-wrap d-flex justify-content-between">
                        <div class="left-content">
                            <h4 class="header-title">{{__('Select Outlet Location')}}</h4>
                        </div>
                        <div class="right-content">
                            <a class="btn_bg_info" href="{{route('admin.outletAddress.all')}}">
                                <i class="las la-arrow-left"></i>
                                {{__('All Outlets')}}
                            </a>
                        </div>
                    </div>
                    
                    <x-validation.error/>
                    
                    @include('backend.pages.admin.serviceLocation.location-general-info')
                </div>
            </div>
        </div>
    </div>
    
    <x-media.markup/>
@endsection