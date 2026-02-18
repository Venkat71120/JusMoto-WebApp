@extends('backend.admin-master')
@section('site-title')
    {{__('All Orders')}}
@endsection
@section('style')
    <style>
        /* ===== CLEAN & MODERN ALL ORDERS PAGE ===== */

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
            --green: #10b981;
            --green-light: #d1fae5;
            --green-dark: #047857;
            --yellow: #f59e0b;
            --yellow-light: #fef3c7;
            --yellow-dark: #b45309;
            --blue: #3b82f6;
            --blue-light: #dbeafe;
            --blue-dark: #1e40af;
            --purple: #8b5cf6;
            --purple-light: #ede9fe;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .orders-page {
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
        .dashboard__inner__header {
            padding: 20px 24px;
            border-bottom: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        .dashboard__inner__header__title {
            font-size: 22px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0;
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
            height: 20px;
            background: var(--red);
            border-radius: 4px;
        }

        /* Filter Section */
        .filter-section {
            padding: 20px 24px;
            background: var(--white);
            border-bottom: 1px solid var(--gray-200);
        }

        /* Tabs */
        .tabs {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .tabs li a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: 40px;
            color: var(--gray-600);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--transition);
        }

        .tabs li.active a {
            background: var(--red);
            border-color: var(--red);
            color: white;
        }

        .tabs li:not(.active) a:hover {
            background: var(--gray-100);
            border-color: var(--gray-300);
        }

        .badge_notification {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 22px;
            height: 22px;
            padding: 0 6px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 40px;
            font-size: 11px;
            font-weight: 600;
        }

        .tabs li.active .badge_notification {
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }

        /* Search Box */
        .porduct_search {
            position: relative;
            width: 280px;
        }

        .porduct_search__input {
            width: 100%;
            height: 42px;
            padding: 8px 16px 8px 44px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
        }

        .porduct_search__input:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        .porduct_search__icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--gray-400);
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }

        .porduct_search__icon:hover {
            color: var(--red);
        }

        .porduct_search__icon i {
            font-size: 18px;
        }

        /* Table Container */
        .table_wrapper {
            overflow-x: auto;
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            background: var(--white);
            margin: 20px 0;
        }

        /* Modern Table */
        .modern-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            min-width: 1200px;
        }

        .modern-table thead th {
            text-align: left;
            padding: 16px;
            background: var(--gray-50);
            color: var(--gray-600);
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            border-bottom: 1px solid var(--gray-200);
            white-space: nowrap;
        }

        .modern-table tbody td {
            padding: 16px;
            color: var(--gray-700);
            border-bottom: 1px solid var(--gray-100);
            vertical-align: middle;
        }

        .modern-table tbody tr {
            background: var(--white);
            transition: var(--transition);
        }

        .modern-table tbody tr:hover {
            background: var(--gray-50);
        }

        /* ID Column */
        .id-col {
            font-weight: 600;
            color: var(--red);
        }

        /* Client Info */
        .client-info {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .type-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 40px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            width: fit-content;
        }

        .type-badge.service {
            background: var(--green-light);
            color: var(--green-dark);
        }

        .type-badge.product {
            background: var(--blue-light);
            color: var(--blue-dark);
        }

        .type-badge.mixed {
            background: var(--purple-light);
            color: #5b21b6;
        }

        .user-details {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .user-name {
            font-weight: 600;
            color: var(--gray-800);
        }

        .user-email {
            font-size: 12px;
            color: var(--gray-500);
        }

        /* Amount Details */
        .amount-details {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .amount-row {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .amount-label {
            color: var(--gray-500);
        }

        .amount-value {
            font-weight: 500;
            color: var(--gray-800);
        }

        .amount-value.discount {
            color: var(--red);
        }

        .amount-row.total {
            margin-top: 4px;
            padding-top: 4px;
            border-top: 1px dashed var(--gray-200);
            font-weight: 600;
        }

        .amount-row.total .amount-value {
            color: var(--red);
        }

        /* Staff Info */
        .staff-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .staff-avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            overflow: hidden;
            background: var(--gray-100);
            border: 2px solid var(--gray-200);
            flex-shrink: 0;
        }

        .staff-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .avatar-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--red-light);
            color: var(--red);
            font-weight: 600;
            font-size: 18px;
        }

        .staff-details {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .staff-name {
            font-weight: 600;
            color: var(--gray-800);
        }

        .staff-schedule {
            font-size: 11px;
            color: var(--gray-500);
        }

        /* Payment Info */
        .payment-info {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .gateway-name {
            font-weight: 600;
            color: var(--gray-800);
            text-transform: capitalize;
        }

        .payment-status-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .file-link {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            color: var(--blue);
            text-decoration: none;
            font-size: 12px;
            margin-top: 4px;
        }

        .file-link:hover {
            color: var(--red);
        }

        /* Status Badges */
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
        }

        .status-badge.payment-paid {
            background: var(--green-light);
            color: var(--green-dark);
        }

        .status-badge.payment-pending {
            background: var(--yellow-light);
            color: var(--yellow-dark);
        }

        .status-badge.payment-failed {
            background: var(--red-light);
            color: var(--red-dark);
        }

        .status-badge.order-0 {
            background: var(--yellow-light);
            color: var(--yellow-dark);
        }

        .status-badge.order-2 {
            background: var(--green-light);
            color: var(--green-dark);
        }

        .status-badge.order-4 {
            background: var(--red-light);
            color: var(--red-dark);
        }

        /* Order Status */
        .order-status-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .status-edit-btn {
            width: 32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--gray-100);
            border: 1px solid var(--gray-200);
            border-radius: 6px;
            color: var(--gray-600);
            cursor: pointer;
            transition: var(--transition);
            border: none;
        }

        .status-edit-btn:hover {
            background: var(--yellow);
            color: white;
        }

        /* Created Date */
        .created-date {
            display: block;
            font-size: 13px;
            color: var(--gray-800);
            font-weight: 500;
        }

        .created-time {
            display: block;
            font-size: 11px;
            color: var(--gray-500);
            margin-top: 2px;
        }

        .subCap {
            font-size: 13px;
            color: var(--gray-600);
        }

        /* Action Group */
        .action-group {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .action-btn {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            background: var(--gray-100);
            color: var(--gray-600);
            text-decoration: none;
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition: var(--transition);
        }

        .action-btn:hover {
            background: var(--red);
            color: white;
            transform: translateY(-2px);
        }

        .action-btn.allocate-btn:hover {
            background: var(--purple);
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
            gap: 4px;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .pagination li a,
        .pagination li span {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 36px;
            height: 36px;
            padding: 0 8px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 6px;
            color: var(--gray-700);
            font-size: 14px;
            text-decoration: none;
            transition: var(--transition);
        }

        .pagination li.active span {
            background: var(--red);
            border-color: var(--red);
            color: white;
        }

        .pagination li a:hover {
            background: var(--gray-50);
            border-color: var(--gray-400);
            color: var(--red);
        }

        /* Modal Styling */
        .modal-content {
            border: none;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
        }

        .modal-header {
            padding: 16px 20px;
            background: var(--gray-50);
            border-bottom: 1px solid var(--gray-200);
        }

        .modal-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0;
        }

        .modal-body {
            padding: 20px;
        }

        .modal-footer {
            padding: 16px 20px;
            border-top: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        .form-group {
            margin-bottom: 16px;
        }

        .form-group label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 6px;
        }

        .form-control,
        .form-select {
            width: 100%;
            padding: 10px 14px;
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

        .badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 500;
            margin: 8px 0;
        }

        .badge.bg-info {
            background: var(--blue-light);
            color: var(--blue-dark);
        }

        .btn-primary {
            background: var(--red);
            border: none;
            padding: 10px 24px;
            border-radius: 40px;
            color: white;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }

        .btn-primary:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
        }

        .btn-secondary {
            background: var(--white);
            border: 1px solid var(--gray-300);
            padding: 10px 24px;
            border-radius: 40px;
            color: var(--gray-700);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }

        .btn-secondary:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
        }

        .btn-close {
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.5;
            transition: var(--transition);
        }

        .btn-close:hover {
            opacity: 1;
        }

        /* Responsive */
        @media (max-width: 993px) {
            .table-responsive {
                -webkit-overflow-scrolling: touch;
                overflow-x: auto;
            }
            
            .porduct_search {
                width: 100%;
            }
            
            .tabs {
                flex-direction: column;
                width: 100%;
            }
            
            .tabs li {
                width: 100%;
            }
            
            .tabs li a {
                width: 100%;
                justify-content: center;
            }
        }

        @media (max-width: 992px) {
            .orders-page {
                padding: 16px;
            }
            
            .dashboard__inner__header {
                padding: 16px;
            }
            
            .filter-section {
                padding: 16px;
            }
        }

        /* Preserve original classes */
        .custom_table tr td:not(:first-child) {
            min-width: 42px;
        }

        #order_status {
            align-items: center;
        }

        #order_action {
            align-items: center;
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

        .d-flex {
            display: flex;
        }

        .gap-2 {
            gap: 8px;
        }

        .gap-3 {
            gap: 16px;
        }

        .flex-wrap {
            flex-wrap: wrap;
        }

        .justify-content-end {
            justify-content: flex-end;
        }

        .mt-4 {
            margin-top: 20px;
        }

        .mt-5 {
            margin-top: 28px;
        }

        .me-2 {
            margin-right: 8px;
        }

        .mb-1 {
            margin-bottom: 4px;
        }

        .text-center {
            text-align: center;
        }

        .text-danger {
            color: var(--red);
        }
    </style>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title">{{ __('All Orders') }}</h4>
                        </div>
                    </div>
                </div>
                <x-validation.error />
                <div class="mt-4">
                    @include('backend.pages.orders.order-filter')
                    <div class="table_wrapper custom_Table">
                        <div class="search_result">
                            @include('backend.pages.orders.admin-orders.search-order')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Status Modal -->
    <div class="modal fade" id="OrderStatusChangeModal" tabindex="-1" role="dialog" aria-labelledby="editModal"
        aria-hidden="true">
        <form action="{{ route('admin.order.status.change') }}" method="post">
            @csrf
            <input type="hidden" name="id" class="order_id">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModal">{{ __('Change Order Status') }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="status_id">{{ __('Select Status') }}</label>
                            <select name="status_id" id="status_id" class="form-control">
                                <option value="">{{ __('Select Status') }}</option>
                                <option value="0">{{ __('Pending') }}</option>
                                <option value="2">{{ __('Completed') }}</option>
                                <option value="4">{{ __('Cancel') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ __('Save changes') }}</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <!-- Allocate SubAdmin Modal -->
    <div class="modal fade" id="AllocateSubAdminModal" tabindex="-1">
        <div class="modal-dialog">
            <form action="{{ route('admin.allocate.subadmin') }}" method="POST">
                @csrf
                <input type="hidden" name="order_id" id="allocate_order_id">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Allocate Subadmin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">

                        <label>Currently Allocated Admin:</label>
                        <div id="currentAdminLabel" class="badge bg-info text-white p-2"></div>

                        <label>Select Admin to Allocate</label>
                        <select name="franchise_admin_id" class="form-control" required>
                            <option value="">-- Select Admin --</option>
                            @foreach($franchiseAdmins as $admin)
                                <option value="{{ $admin->id }}">
                                    {{ $admin->name }}
                                    @if($admin->outletLocation)
                                        ({{ $admin->outletLocation->name }})
                                    @endif
                                </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-primary">Save Allocation</button>
                    </div>
                </div>
            </form>
        </div>
    </div>


    @include('backend.pages.orders.manual-payment-file-modal')
@endsection
@section('scripts')
    <script type="text/javascript">
        $(document).on('click', '.openAllocateModal', function () {
            let orderId = $(this).data('order-id');
            let currentAdminName = $(this).data('current-admin-name');

            $('#allocate_order_id').val(orderId);

            if (currentAdminName) {
                $('#currentAdminLabel').text(currentAdminName);
            } else {
                $('#currentAdminLabel').text('Not allocated yet');
            }

            var modal = new bootstrap.Modal(document.getElementById('AllocateSubAdminModal'));
            modal.show();
        });

        (function () {
            "use strict";
            $(document).ready(function () {

                $(document).on('click', '.open-modal', function (event) {
                    // Get file URL and name from data attributes
                    var fileUrl = $(this).data('file-url');
                    var fileName = $(this).data('file-name');

                    // Get modal elements
                    var filePreview = $('#filePreview');
                    var fileDownload = $('#fileDownload');

                    // Reset preview and download elements
                    filePreview.hide().attr('src', '');
                    fileDownload.hide().attr('href', '');

                    // Check file type and update modal content
                    var fileExtension = fileUrl.split('.').pop().toLowerCase();
                    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                        // Image file
                        filePreview.attr('src', fileUrl).show();
                        fileDownload.hide();
                    } else {
                        // Non-image file
                        filePreview.hide();
                        fileDownload.attr('href', fileUrl).show().text('Download ' + fileName);
                    }

                    // Show the modal
                    var modal = new bootstrap.Modal(document.getElementById('fileModal'));
                    modal.show();
                });

                //order status change
                $(document).on('click', '.order_status_change_modal', function () {
                    let el = $(this);
                    let order_id = el.data('order_id');
                    let form = $('#OrderStatusChangeModal');
                    form.find('.order_id').val(order_id);
                });

                // change status
                $(document).on('click', '.swal_status_change', function (e) {
                    e.preventDefault();
                    Swal.fire({
                        title: '{{__("Are you sure to change status complete? Once you done you can not revert this !!")}}',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: "{{ __('Yes, change it!') }}"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $(this).next().find('.swal_form_submit_btn').trigger('click');
                        }
                    });
                });

                // live search
                $(document).on('keyup', '.string_search', function () {
                    let string_search = $(this).val();
                    $.ajax({
                        url: "{{ route('admin.order.search') }}",
                        method: 'GET',
                        data: { string_search: string_search },
                        success: function (res) {
                            if (res.status == 'nothing') {
                                $('.search_result').html('<h3 class="text-center text-danger">' + "{{ __('Nothing Found') }}" + '</h3>');
                            } else {
                                $('.search_result').html(res);
                            }
                        }
                    });
                });

                // pagination
                $(document).on('click', '.pagination li a', function (e) {
                    e.preventDefault();
                    let page = $(this).attr('href').split('page=')[1];

                    // Get the currently active tab status from the URL
                    let activeTab = $('.tabs li.active a').attr('href');
                    let status = new URL(activeTab).searchParams.get('status');

                    admin_orders(page, status);
                });
                function admin_orders(page, status) {
                    $.ajax({
                        url: "{{ route('admin.order.paginate') . '?page='}}" + page + "&status=" + status,
                        success: function (res) {
                            $('.search_result').html(res);
                        }
                    });
                }
            });
        })(jQuery);
    </script>
@endsection