@extends('backend.admin-master')
@section('site-title')
    {{__('Outlet Details')}}
@endsection
@section('style')
    <x-media.css/>
    <x-summernote.css/>
    <style>
        /* ===== CLEAN & MODERN OUTLET DETAILS PAGE ===== */

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
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .outlet-details-page {
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

        /* Content Section */
        .content-section {
            padding: 24px;
        }

        /* Info Grid */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin-bottom: 24px;
        }

        /* Info Card */
        .info-card {
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            padding: 20px;
        }

        .info-card-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0 0 16px 0;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--gray-200);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .info-card-title i {
            color: var(--red);
            font-size: 18px;
            background: var(--red-light);
            padding: 6px;
            border-radius: 8px;
        }

        /* Info Rows */
        .info-row {
            display: flex;
            margin-bottom: 12px;
            padding: 8px 0;
            border-bottom: 1px dashed var(--gray-200);
        }

        .info-row:last-child {
            border-bottom: none;
        }

        .info-label {
            width: 120px;
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-600);
        }

        .info-value {
            flex: 1;
            font-size: 14px;
            color: var(--gray-800);
            word-break: break-word;
        }

        .info-value i {
            color: var(--red);
            margin-right: 4px;
        }

        /* Status Badge */
        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 4px 12px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
        }

        .status-badge.active {
            background: #dcfce7;
            color: #166534;
        }

        .status-badge.inactive {
            background: var(--red-light);
            color: var(--red);
        }

        .status-badge i {
            font-size: 12px;
        }

        /* Seller Image */
        .customer__account__details__item__flex {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 20px;
            flex-wrap: wrap;
        }

        .seller-img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--gray-200);
            background: var(--white);
            box-shadow: var(--shadow-sm);
        }

        .seller-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        /* Dashboard Rates Card */
        .dashboard__rates__card__thumb {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            padding: 16px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            margin-top: 16px;
        }

        .dashboard__rates__card__thumb > * {
            flex: 1 1 calc(50% - 6px);
            min-width: 200px;
        }

        /* Effect Border (disabled) */
        .effectBorder {
            pointer-events: none;
            cursor: not-allowed;
            opacity: 0.7;
        }

        /* Preserve original spans */
        span {
            display: inline;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .outlet-details-page {
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
            
            .info-row {
                flex-direction: column;
                gap: 4px;
            }
            
            .info-label {
                width: 100%;
            }
            
            .customer__account__details__item__flex {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        /* Dark Mode */
        body.dark-mode .outlet-details-page {
            background: #111827;
        }

        body.dark-mode .dashboard__card {
            background: #1f2937;
            border-color: #374151;
        }

        body.dark-mode .header-wrap {
            background: #374151;
            border-color: #4b5563;
        }

        body.dark-mode .header-title {
            color: #f3f4f6;
        }

        body.dark-mode .info-card {
            background: #374151;
            border-color: #4b5563;
        }

        body.dark-mode .info-card-title {
            color: #f3f4f6;
            border-bottom-color: #4b5563;
        }

        body.dark-mode .info-label {
            color: #9ca3af;
        }

        body.dark-mode .info-value {
            color: #e5e7eb;
        }

        body.dark-mode .dashboard__rates__card__thumb {
            background: #374151;
            border-color: #4b5563;
        }

        body.dark-mode .seller-img {
            border-color: #4b5563;
        }
    </style>
@endsection

@section('content')
    <div class="outlet-details-page">
        <div class="row g-4 mt-0">
            <div class="col-xl-12 col-lg-12 mt-0">
                <div class="dashboard__card">
                    <div class="header-wrap d-flex justify-content-between">
                        <div class="left-content">
                            <h4 class="header-title">{{__('Outlet Details')}}</h4>
                        </div>
                        <div class="right-content">
                            <a class="btn_bg_info" href="{{route('admin.outletAddress.all')}}">
                                <i class="las la-arrow-left"></i>
                                {{__('All Outlets')}}
                            </a>
                        </div>
                    </div>
                    
                    <x-validation.error/>
                    
                    <div class="content-section">
                        @include('backend.pages.admin.serviceLocation.details-basic-info')
                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-media.markup/>
@endsection

@section('scripts')
    <x-media.js />
    <script src="{{asset('assets/backend/js/fontawesome-iconpicker.min.js')}}"></script>
    <link rel="stylesheet" href="{{asset('assets/backend/css/fontawesome-iconpicker.min.css')}}">
    <x-summernote.js/>
    <script>
        <x-icon.icon-picker/>
    </script>
    <script>
        (function ($) {
            "use strict";

            $(document).ready(function () {
                // Prevent keyboard events on checkbox
                $(document).on('keydown', '#checkbox', function (e) {
                    if (e.which === 32) {
                        e.preventDefault();
                    }
                });
            });
        })(jQuery);
    </script>
@endsection