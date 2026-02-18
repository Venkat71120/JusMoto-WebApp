@extends('backend.admin-master')
@section('site-title')
    {{__('All Brands')}}
@endsection
@section('style')
    <style>
        /* ===== MODERN RED THEME - ALL BRANDS ===== */
        :root {
            --red: #e31b23;
            --red-light: #fff5f5;
            --red-soft: #ffe3e3;
            --red-dark: #b11218;
            --dark: #111827;
            --dark-soft: #1f2937;
            --gray-700: #374151;
            --gray-600: #4B5563;
            --gray-500: #6B7280;
            --gray-400: #9CA3AF;
            --gray-300: #D1D5DB;
            --gray-200: #E5E7EB;
            --gray-100: #F3F4F6;
            --gray-50: #F9FAFB;
            --white: #FFFFFF;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
            --shadow-md: 0 4px 12px rgba(0,0,0,0.05);
            --shadow-lg: 0 10px 25px -5px rgba(0,0,0,0.05);
            --radius-md: 8px;
            --radius-lg: 12px;
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .brands-page {
            padding: 24px;
            background: var(--gray-50);
            min-height: 100vh;
        }

        /* Dashboard Card */
        .dashboard__card {
            background: var(--white);
            border-radius: var(--radius-lg);
            border: 1px solid var(--gray-200);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            overflow: hidden;
        }

        .dashboard__card:hover {
            box-shadow: var(--shadow-md);
        }

        /* Header Section */
        .dashboard__inner__header {
            padding: 24px 28px;
            border-bottom: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        .dashboard__inner__header__flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }

        .dashboard__inner__header__left {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
        }

        .dashboard__inner__header__title {
            font-size: 22px;
            font-weight: 600;
            color: var(--dark);
            margin: 0;
            letter-spacing: -0.02em;
            position: relative;
            padding-left: 16px;
        }

        .dashboard__inner__header__title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 22px;
            background: var(--red);
            border-radius: 4px;
        }

        .dashboard__inner__header__right {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
        }

        /* Bulk Action Styling */
        .bulk-action-wrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--white);
            padding: 6px 12px;
            border-radius: 40px;
            border: 1px solid var(--gray-200);
        }

        .bulk-action-select {
            padding: 8px 16px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            font-size: 13px;
            color: var(--gray-700);
            outline: none;
            cursor: pointer;
            min-width: 140px;
        }

        .bulk-action-select:focus {
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-soft);
        }

        .apply-btn {
            padding: 8px 20px;
            background: var(--red);
            border: none;
            border-radius: 40px;
            color: white;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }

        .apply-btn:hover {
            background: var(--red-dark);
            transform: translateY(-1px);
            box-shadow: 0 4px 10px rgba(227, 27, 35, 0.2);
        }

        /* Add Brand Button */
        .btn_bg_blue {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 22px;
            background: var(--red);
            border: none;
            border-radius: 40px;
            color: white;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--transition);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.15);
        }

        .btn_bg_blue:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(227, 27, 35, 0.25);
            color: white;
        }

        .btn_bg_blue i {
            font-size: 16px;
        }

        /* Search Input */
        .search-wrapper {
            position: relative;
            min-width: 280px;
        }

        .search-input {
            width: 100%;
            padding: 10px 16px 10px 44px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            font-size: 14px;
            color: var(--dark);
            transition: var(--transition);
        }

        .search-input:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-soft);
        }

        .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray-400);
            font-size: 16px;
            pointer-events: none;
        }

        /* Table Container */
        .tableStyle_three {
            padding: 0 28px 28px;
        }

        .table-responsive {
            overflow-x: auto;
            border-radius: var(--radius-md);
            border: 1px solid var(--gray-200);
            background: var(--white);
        }

        /* Modern Table */
        .modern-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            min-width: 900px;
        }

        .modern-table thead th {
            text-align: left;
            padding: 18px 16px;
            background: var(--gray-50);
            color: var(--gray-700);
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            border-bottom: 1px solid var(--gray-200);
            white-space: nowrap;
        }

        .modern-table tbody td {
            padding: 18px 16px;
            color: var(--gray-700);
            border-bottom: 1px solid var(--gray-100);
            vertical-align: middle;
        }

        .modern-table tbody tr {
            transition: var(--transition);
        }

        .modern-table tbody tr:hover {
            background: var(--gray-50);
        }

        /* Checkbox Column */
        .checkbox-col {
            width: 40px;
            text-align: center;
        }

        .checkbox-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modern-checkbox {
            width: 18px;
            height: 18px;
            border: 2px solid var(--gray-400);
            border-radius: 4px;
            appearance: none;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
        }

        .modern-checkbox:checked {
            background: var(--red);
            border-color: var(--red);
        }

        .modern-checkbox:checked::after {
            content: '';
            position: absolute;
            left: 5px;
            top: 2px;
            width: 4px;
            height: 8px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        .modern-checkbox:hover {
            border-color: var(--red);
        }

        /* ID Column */
        .id-col {
            width: 60px;
            font-weight: 500;
            color: var(--gray-500);
        }

        /* Logo Column */
        .logo-col {
            width: 70px;
        }

        .brand-logo {
            width: 50px;
            height: 50px;
            border-radius: 8px;
            overflow: hidden;
            background: var(--gray-100);
            border: 1px solid var(--gray-200);
        }

        .brand-logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Name Column */
        .name-col {
            min-width: 200px;
        }

        .brand-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .brand-name {
            font-weight: 600;
            color: var(--dark);
            text-decoration: none;
            font-size: 15px;
        }

        .brand-name:hover {
            color: var(--red);
        }

        .brand-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            color: var(--gray-500);
        }

        .meta-item {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .meta-item i {
            font-size: 11px;
            color: var(--gray-400);
        }

        /* Slug Column */
        .slug-col {
            min-width: 180px;
            color: var(--gray-600);
            font-size: 13px;
        }

        .slug-text {
            background: var(--gray-100);
            padding: 4px 10px;
            border-radius: 20px;
            display: inline-block;
            font-family: monospace;
        }

        /* Status Column */
        .status-col {
            width: 100px;
        }

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
            background: #ECFDF3;
            color: #067647;
        }

        .status-badge.inactive {
            background: #FEF3F2;
            color: var(--red);
        }

        .status-badge i {
            font-size: 12px;
        }

        /* Date Column */
        .date-col {
            width: 100px;
            font-size: 13px;
            color: var(--gray-600);
        }

        .date-col i {
            color: var(--red);
            margin-right: 4px;
            font-size: 12px;
        }

        /* Action Column */
        .actions-col {
            width: 100px;
            text-align: right;
        }

        .action-group {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 4px;
        }

        .action-item {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: var(--gray-100);
            color: var(--gray-600);
            text-decoration: none;
            transition: var(--transition);
            font-size: 16px;
            border: none;
            cursor: pointer;
        }

        .action-item:hover {
            background: var(--red);
            color: white;
            transform: translateY(-2px);
        }

        .action-item.edit:hover {
            background: #2563EB;
        }

        .action-item.delete:hover {
            background: var(--red);
        }

        .action-item.view:hover {
            background: #10B981;
        }

        /* Pagination */
        .pagination-wrapper {
            margin-top: 24px;
            display: flex;
            justify-content: flex-end;
        }

        .pagination {
            display: flex;
            align-items: center;
            gap: 6px;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .pagination li a,
        .pagination li span {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 38px;
            height: 38px;
            padding: 0 8px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 8px;
            color: var(--gray-700);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--transition);
        }

        .pagination li.active span {
            background: var(--red);
            border-color: var(--red);
            color: white;
        }

        .pagination li a:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
            color: var(--red);
        }

        /* Empty State */
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--gray-400);
        }

        .empty-state i {
            font-size: 48px;
            color: var(--gray-300);
            margin-bottom: 16px;
        }

        /* Loading State */
        .loading-state {
            text-align: center;
            padding: 60px 20px;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid var(--gray-200);
            border-top-color: var(--red);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 16px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Preserve original classes */
        .custom_status_style {
            font-size: 14px !important;
        }

        a.cmnBtn.btn_5.btn_bg_warning.btnIcon.radius-5.swal_status_change {
            min-width: 30px !important;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .brands-page {
                padding: 16px;
            }
            
            .dashboard__inner__header {
                padding: 20px;
            }
            
            .dashboard__inner__header__flex {
                flex-direction: column;
                align-items: stretch;
            }
            
            .search-wrapper {
                width: 100%;
            }
            
            .tableStyle_three {
                padding: 0 20px 20px;
            }
        }

        @media (max-width: 768px) {
            .modern-table {
                min-width: 800px;
            }
        }

        /* Dark Mode */
        body.dark-mode .brands-page {
            background: #111827;
        }

        body.dark-mode .dashboard__card {
            background: #1F2937;
            border-color: #374151;
        }

        body.dark-mode .dashboard__inner__header {
            background: #374151;
            border-color: #4B5563;
        }

        body.dark-mode .dashboard__inner__header__title {
            color: #F3F4F6;
        }

        body.dark-mode .modern-table thead th {
            background: #374151;
            color: #E5E7EB;
            border-bottom-color: #4B5563;
        }

        body.dark-mode .modern-table tbody td {
            color: #E5E7EB;
            border-bottom-color: #374151;
        }

        body.dark-mode .modern-table tbody tr:hover {
            background: #374151;
        }

        body.dark-mode .search-input,
        body.dark-mode .bulk-action-select {
            background: #374151;
            border-color: #4B5563;
            color: #F3F4F6;
        }

        body.dark-mode .brand-logo {
            background: #374151;
            border-color: #4B5563;
        }

        body.dark-mode .brand-name {
            color: #F3F4F6;
        }

        body.dark-mode .slug-text {
            background: #374151;
            color: #9CA3AF;
        }

        body.dark-mode .action-item {
            background: #374151;
            color: #9CA3AF;
        }

        body.dark-mode .pagination li a,
        body.dark-mode .pagination li span {
            background: #374151;
            border-color: #4B5563;
            color: #E5E7EB;
        }
    </style>
@endsection

@section('content')
    <div class="brands-page">
        <div class="row g-4 mt-0">
            <div class="col-xl-12 col-lg-12">
                <div class="dashboard__card">
                    <div class="dashboard__inner__header">
                        <div class="dashboard__inner__header__flex">
                            <div class="dashboard__inner__header__left">
                                <h4 class="dashboard__inner__header__title">{{ __('All Brands') }}</h4>
                                @can('admin-brand-bulk-delete')
                                    <div class="bulk-action-wrapper">
                                        <select class="bulk-action-select" id="bulk_action">
                                            <option value="">{{ __('Bulk Actions') }}</option>
                                            <option value="delete">{{ __('Delete Selected') }}</option>
                                        </select>
                                        <button class="apply-btn" id="bulk_action_apply">{{ __('Apply') }}</button>
                                    </div>
                                @endcan
                            </div>
                            <div class="dashboard__inner__header__right">
                                <div class="btn-wrapper">
                                    <a href="{{ route('admin.brand.add') }}" class="btn_bg_blue">
                                        <i class="las la-plus"></i>
                                        {{ __('Add Brand') }}
                                    </a>
                                </div>
                                <div class="search-wrapper">
                                    <i class="las la-search search-icon"></i>
                                    <input class="search-input notice_string_search" 
                                           type="text" 
                                           id="string_search" 
                                           placeholder="{{ __('Search brands...') }}">
                                </div>
                            </div>
                        </div>
                    </div>

                    <x-validation.error/>

                    <div class="tableStyle_three">
                        <div class="table-responsive">
                            <div class="search_notice_result">
                                @include('backend.pages.admin.brand.search-brand')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    @can('admin-brand-bulk-delete')
        <x-bulk-action.bulk-action-js :url="route('admin.brand.bulk.action')"/>
    @endcan

    <script type="text/javascript">
        (function(){
            "use strict";
            
            $(document).ready(function(){
                let searchTimeout;

                // Live search with debounce
                $(document).on('keyup','.notice_string_search',function(){
                    clearTimeout(searchTimeout);
                    
                    let string_search = $(this).val();
                    
                    searchTimeout = setTimeout(function() {
                        $.ajax({
                            url: "{{ route('admin.brand.search') }}",
                            method: 'GET',
                            data: { string_search: string_search },
                            beforeSend: function() {
                                $('.search_notice_result').html(`
                                    <div class="loading-state">
                                        <div class="spinner"></div>
                                        <p style="color: var(--gray-500);">{{ __('Searching...') }}</p>
                                    </div>
                                `);
                            },
                            success: function(res){
                                if(res.status == 'nothing'){
                                    $('.search_notice_result').html(`
                                        <div class="empty-state">
                                            <i class="las la-trademark"></i>
                                            <p>{{ __('No brands found') }}</p>
                                        </div>
                                    `);
                                } else {
                                    $('.search_notice_result').html(res);
                                }
                            }
                        });
                    }, 400);
                });

                // Pagination
                $(document).on('click', '.pagination li a', function(e){
                    e.preventDefault();
                    let page = $(this).attr('href').split('page=')[1];
                    notices(page);
                });

                function notices(page){
                    $.ajax({
                        url: "{{ route('admin.car.paginate.data') }}?page=" + page,
                        beforeSend: function() {
                            $('.search_notice_result').html(`
                                <div class="loading-state">
                                    <div class="spinner"></div>
                                    <p style="color: var(--gray-500);">{{ __('Loading...') }}</p>
                                </div>
                            `);
                        },
                        success: function(res){
                            $('.search_notice_result').html(res);
                        }
                    });
                }

                // Bulk action apply
                $('#bulk_action_apply').on('click', function() {
                    let action = $('#bulk_action').val();
                    let selected = $('.bulk-checkbox:checked').length;
                    
                    if (!action || selected === 0) {
                        Swal.fire({
                            title: '{{__("No Action")}}',
                            text: '{{__("Please select items and an action.")}}',
                            icon: 'info',
                            confirmButtonColor: '#e31b23',
                            background: $('#darkModeValue').val() === 'on' ? '#1f2937' : '#ffffff'
                        });
                        return;
                    }
                    
                    if (action === 'delete') {
                        Swal.fire({
                            title: '{{__("Delete Selected?")}}',
                            text: '{{__("This action cannot be undone.")}}',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#e31b23',
                            cancelButtonColor: '#6b7280',
                            confirmButtonText: '{{__("Delete")}}',
                            cancelButtonText: '{{__("Cancel")}}'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                $('#bulk_action_form').submit();
                            }
                        });
                    }
                });

                // Select all checkbox
                $(document).on('change', '.select-all-checkbox', function() {
                    $('.bulk-checkbox').prop('checked', $(this).is(':checked'));
                });

                // Individual checkbox
                $(document).on('change', '.bulk-checkbox', function() {
                    let allChecked = $('.bulk-checkbox:checked').length === $('.bulk-checkbox').length;
                    $('.select-all-checkbox').prop('checked', allChecked);
                });

                // Keyboard shortcut for search (Ctrl + /)
                $(document).on('keydown', function(e) {
                    if (e.ctrlKey && e.key === '/') {
                        e.preventDefault();
                        $('#string_search').focus();
                    }
                });

                // Clear search on Escape
                $(document).on('keyup', '#string_search', function(e) {
                    if (e.key === 'Escape') {
                        $(this).val('');
                        $(this).trigger('keyup');
                    }
                });

                // Dark mode support
                if ($('#darkModeValue').val() === 'on') {
                    $('body').addClass('dark-mode');
                }

                // Status change confirmation (if needed)
                $(document).on('click', '.swal_status_change', function(e){
                    e.preventDefault();
                    
                    Swal.fire({
                        title: '{{__("Change Status?")}}',
                        text: '{{__("Are you sure you want to change the status?")}}',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: "{{ __('Yes, change it!') }}",
                        cancelButtonText: "{{ __('Cancel') }}",
                        background: $('#darkModeValue').val() === 'on' ? '#1f2937' : '#ffffff'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $(this).next().find('.swal_form_submit_btn').trigger('click');
                        }
                    });
                });
            });
        })(jQuery);
    </script>
@endsection