<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Orders')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title"><?php echo e(__('All Orders')); ?></h4>
                        </div>
                    </div>
                </div>
                <?php if (isset($component)) { $__componentOriginal4bb59b834d778ff0cb72af5a473e2885 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.validation.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('validation.error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $attributes = $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $component = $__componentOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
                <div class="mt-4">
                    <?php echo $__env->make('backend.pages.orders.order-filter', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                    <div class="table_wrapper custom_Table">
                        <div class="search_result">
                            <?php echo $__env->make('backend.pages.orders.admin-orders.search-order', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Status Modal -->
    <div class="modal fade" id="OrderStatusChangeModal" tabindex="-1" role="dialog" aria-labelledby="editModal"
        aria-hidden="true">
        <form action="<?php echo e(route('admin.order.status.change')); ?>" method="post">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="id" class="order_id">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModal"><?php echo e(__('Change Order Status')); ?></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="status_id"><?php echo e(__('Select Status')); ?></label>
                            <select name="status_id" id="status_id" class="form-control">
                                <option value=""><?php echo e(__('Select Status')); ?></option>
                                <option value="0"><?php echo e(__('Pending')); ?></option>
                                <option value="2"><?php echo e(__('Completed')); ?></option>
                                <option value="4"><?php echo e(__('Cancel')); ?></option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?php echo e(__('Close')); ?></button>
                        <button type="submit" class="btn btn-primary"><?php echo e(__('Save changes')); ?></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
   <!-- Allocate SubAdmin Modal -->
<div class="modal fade" id="AllocateSubAdminModal" tabindex="-1">
    <div class="modal-dialog">
        <form action="<?php echo e(route('admin.allocate.subadmin')); ?>" method="POST">
            <?php echo csrf_field(); ?>
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
                        <?php $__currentLoopData = $franchiseAdmins; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $admin): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($admin->id); ?>">
                                <?php echo e($admin->name); ?>

                                <?php if($admin->outletLocation): ?>
                                    (<?php echo e($admin->outletLocation->name); ?>)
                                <?php endif; ?>
                            </option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary">Save Allocation</button>
                </div>
            </div>
        </form>
    </div>
</div>


    <?php echo $__env->make('backend.pages.orders.manual-payment-file-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script type="text/javascript">
       $(document).on('click', '.openAllocateModal', function () {
    let orderId = $(this).data('order-id');
    let currentAdminName = $(this).data('current-admin-name');

    $('#allocate_order_id').val(orderId);

    if(currentAdminName){
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
                        title: '<?php echo e(__("Are you sure to change status complete? Once you done you can not revert this !!")); ?>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: "<?php echo e(__('Yes, change it!')); ?>"
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
                        url: "<?php echo e(route('admin.order.search')); ?>",
                        method: 'GET',
                        data: { string_search: string_search },
                        success: function (res) {
                            if (res.status == 'nothing') {
                                $('.search_result').html('<h3 class="text-center text-danger">' + "<?php echo e(__('Nothing Found')); ?>" + '</h3>');
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
                        url: "<?php echo e(route('admin.order.paginate') . '?page='); ?>" + page + "&status=" + status,
                        success: function (res) {
                            $('.search_result').html(res);
                        }
                    });
                }
            });
        })(jQuery);
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/admin-orders/all_orders.blade.php ENDPATH**/ ?>