<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Refunded Orders')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        /* ===== CLEAN REFUNDED ORDERS PAGE ===== */

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
            --green-light: #d1fae5;
            --green-dark: #047857;
            --yellow-light: #fef3c7;
            --yellow-dark: #b45309;
            --blue-light: #dbeafe;
            --blue-dark: #1e40af;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .refunded-orders-page {
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

        /* Table Container */
        .tableStyle_three {
            padding: 0 24px 24px;
        }

        .table_wrapper {
            overflow-x: auto;
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            background: var(--white);
        }

        /* Modern Table */
        .modern-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            min-width: 1000px;
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

        .modern-table tbody tr:last-child td {
            border-bottom: none;
        }

        /* Order ID */
        .order-id {
            font-weight: 600;
            color: var(--red);
        }

        /* Customer Info */
        .customer-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .customer-name {
            font-weight: 600;
            color: var(--gray-800);
        }

        .customer-email {
            font-size: 12px;
            color: var(--gray-500);
        }

        /* Amount */
        .order-amount {
            font-weight: 600;
            color: var(--gray-800);
        }

        .refund-amount {
            color: var(--red);
            font-weight: 600;
        }

        /* Date */
        .order-date {
            font-size: 13px;
            color: var(--gray-600);
        }

        .order-date i {
            color: var(--red);
            margin-right: 4px;
            font-size: 12px;
        }

        /* Status Badges */
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 16px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
        }

        .status-badge.pending {
            background: var(--yellow-light);
            color: var(--yellow-dark);
        }

        .status-badge.completed {
            background: var(--green-light);
            color: var(--green-dark);
        }

        .status-badge.cancelled {
            background: var(--red-light);
            color: var(--red-dark);
        }

        .status-badge i {
            font-size: 12px;
            margin-right: 4px;
        }

        /* Refunded Order Status */
        .refunded-status-wrapper {
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

        /* Action Buttons */
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

        .action-btn.view-btn:hover {
            background: var(--green-dark);
        }

        .action-btn.invoice-btn:hover {
            background: var(--blue-dark);
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
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
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
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .modal-title i {
            color: var(--red);
            font-size: 20px;
        }

        .modal-body {
            padding: 20px;
        }

        .modal-footer {
            padding: 16px 20px;
            border-top: 1px solid var(--gray-200);
            background: var(--gray-50);
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }

        /* Form Elements */
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

        .form-control {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        /* Buttons */
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
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            color: var(--gray-500);
            cursor: pointer;
            transition: var(--transition);
            font-size: 18px;
        }

        .btn-close:hover {
            background: var(--gray-200);
            color: var(--gray-700);
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

        .empty-state p {
            font-size: 15px;
            margin: 0;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .refunded-orders-page {
                padding: 16px;
            }
            
            .dashboard__inner__header {
                padding: 16px;
            }
            
            .tableStyle_three {
                padding: 0 16px 16px;
            }
            
            .modern-table {
                min-width: 900px;
            }
        }

        /* Preserve original classes */
        .custom_table tr td:not(:first-child) {
            min-width: 42px;
        }

        #refunded-order-status {
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

        .mt-0 {
            margin-top: 0;
        }

        .mt-4 {
            margin-top: 20px;
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
                            <h4 class="dashboard__inner__header__title"><?php echo e(__('All Refunded Orders')); ?></h4>
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
                <div class="tableStyle_three mt-4">
                    <div class="table_wrapper custom_Table">
                        <div class="search_result">
                            <?php echo $__env->make('backend.pages.orders.refunded-list.search-refunded-order', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Status Modal -->
    <div class="modal fade" id="RefundedOrderStatusChangeModal" tabindex="-1" role="dialog"
         aria-labelledby="editModal"
         aria-hidden="true">
        <form action="<?php echo e(route('admin.redunded-order.status')); ?>" method="post">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="id" class="order_id">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModal"><?php echo e(__('Change Refunded Order Status')); ?></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="status_id"><?php echo e(__('Select Status')); ?></label>
                            <select name="status_id" id="status_id" class="form-control">
                                <option value="0"><?php echo e(__('Pending')); ?></option>
                                <option value="1"><?php echo e(__('Completed')); ?></option>
                                <option value="2"><?php echo e(__('Cancel')); ?></option>
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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){

                //refunded order status change
                $(document).on('click', '.refunded_order_status_change_modal', function () {
                    let el = $(this);
                    let order_id = el.data('order_id');
                    let form = $('#RefundedOrderStatusChangeModal');
                    form.find('.order_id').val(order_id);
                });


               

                // pagination
                $(document).on('click', '.pagination li a', function(e){
                    e.preventDefault();
                    let page = $(this).attr('href').split('page=')[1];
                  
                    admin_orders(page);
                });
                function admin_orders(page){
                    $.ajax({
                        url:"<?php echo e(route('admin.refunded-order.paginate').'?page='); ?>" + page ,
                        success:function(res){
                            $('.search_result').html(res);
                        }
                    });
                }
            });
        })(jQuery);
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/refunded-list/all-list.blade.php ENDPATH**/ ?>