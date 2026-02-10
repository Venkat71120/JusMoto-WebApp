@extends('backend.admin-master')
@section('site-title')
    {{__('All Orders')}}
@endsection
@section('style')
    <style>
        @media (max-width: 993px) {
            .table-responsive {
                -webkit-overflow-scrolling: touch;
                overflow-y: auto;
            }
        }

        .custom_table tr td:not(:first-child) {
            min-width: 42px;
        }

        #order_status {
            align-items: center;
        }

        #order_action {
            align-items: center;
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
    <div class="modal fade" id="AllocateSubAdminModal">
        <div class="modal-dialog">
            <form action="{{ route('admin.allocate.subadmin') }}" method="POST">
                @csrf

                <input type="hidden" name="admin_id" id="allocate_admin_id">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Allocate Subadmin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
    @php
        // Get currently allocated admin for the order if exists
        $currentAdmin = null;
        if(isset($order)) {
            $currentAdmin = $order->franchise_admin_id
                ? $franchiseAdmins->firstWhere('id', $order->franchise_admin_id)
                : null;
        }
    @endphp

    @if($currentAdmin)
        <div class="mb-3">
            <label class="form-label">Currently Allocated Admin:</label>
            <div class="badge bg-info text-white p-2">
                {{ $currentAdmin->name }}
                @if($currentAdmin->outletLocation)
                    ({{ $currentAdmin->outletLocation->name }})
                @endif
            </div>
        </div>
    @endif

    <label class="form-label">Select Admin to Allocate</label>
    <select name="franchise_admin_id" class="form-control">
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

            let adminId = $(this).data('admin-id');
            let outletId = $(this).data('outlet-id');

            $('#allocate_admin_id').val(adminId);

            if (outletId) {
                $('#AllocateSubAdminModal select[name="outlet_location_id"]').val(outletId);
            }

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