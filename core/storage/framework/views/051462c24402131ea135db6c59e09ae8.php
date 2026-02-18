<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Order Details')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
   <style>
        /* ===== CLEAN ORDER DETAILS PAGE WITH RED THEME ===== */

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
            --red-soft: #fff5f5;
            --red-dark: #b91c1c;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .order-details-page {
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

        /* Content Sections */
        .content-section {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            padding: 24px;
            margin-bottom: 24px;
        }

        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0 0 20px 0;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--gray-200);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-title i {
            color: var(--red);
            font-size: 20px;
            background: var(--red-light);
            padding: 6px;
            border-radius: 8px;
        }

        /* Info Grid */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .info-card {
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius);
            padding: 16px;
        }

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
        }

        .info-value i {
            color: var(--red);
            margin-right: 4px;
        }

        /* Customer/Provider Wrapper */
        .table_customer.provider_wrapper {
            border-bottom: 1px solid var(--gray-200);
            padding: 16px 0;
        }

        .customer-info {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px;
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius);
        }

        .customer-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--red);
            background: var(--white);
        }

        .customer-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .customer-details {
            flex: 1;
        }

        .customer-name {
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 4px;
        }

        .customer-email {
            font-size: 14px;
            color: var(--gray-600);
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .customer-email i {
            color: var(--red);
        }

        /* Status Badges */
        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 6px 16px;
            border-radius: 40px;
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
        }

        .status-badge.pending {
            background: var(--yellow-light);
            color: #b45309;
        }

        .status-badge.completed {
            background: #d1fae5;
            color: #047857;
        }

        .status-badge.cancelled {
            background: var(--red-light);
            color: var(--red-dark);
        }

        .status-badge i {
            font-size: 14px;
        }

        /* Order Items Table */
        .items-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }

        .items-table thead th {
            text-align: left;
            padding: 12px;
            background: var(--gray-50);
            color: var(--gray-600);
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            border-bottom: 1px solid var(--gray-200);
        }

        .items-table tbody td {
            padding: 12px;
            color: var(--gray-700);
            border-bottom: 1px solid var(--gray-100);
        }

        .items-table tbody tr:hover {
            background: var(--gray-50);
        }

        .item-thumb {
            width: 50px;
            height: 50px;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid var(--gray-200);
        }

        .item-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Location Cards */
        .location-card {
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius);
            padding: 16px;
            margin-bottom: 12px;
        }

        .location-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .location-title i {
            color: var(--red);
        }

        .location-address {
            font-size: 14px;
            color: var(--gray-700);
            line-height: 1.6;
            margin-bottom: 8px;
        }

        .location-coords {
            font-size: 12px;
            color: var(--gray-500);
            display: flex;
            gap: 16px;
        }

        /* Notes Section */
        .notes-section {
            background: var(--gray-50);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius);
            padding: 20px;
        }

        .note-item {
            padding: 12px;
            border-bottom: 1px dashed var(--gray-200);
        }

        .note-item:last-child {
            border-bottom: none;
        }

        .note-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
        }

        .note-author {
            font-weight: 600;
            color: var(--gray-800);
        }

        .note-date {
            font-size: 12px;
            color: var(--gray-500);
        }

        .note-content {
            font-size: 14px;
            color: var(--gray-700);
        }

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            text-decoration: none;
        }

        .btn-primary {
            background: var(--red);
            color: white;
        }

        .btn-primary:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
        }

        .btn-secondary {
            background: var(--white);
            border: 1px solid var(--gray-300);
            color: var(--gray-700);
        }

        .btn-secondary:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
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
        }

        .modal-body {
            padding: 20px;
        }

        .modal-footer {
            padding: 16px 20px;
            border-top: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        /* Form Elements */
        .form-group {
            margin-bottom: 16px;
        }

        .form-label {
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

        /* Select2 Customization */
        .select2-container--default .select2-selection--single {
            border: 1px solid var(--gray-300) !important;
            border-radius: var(--radius) !important;
            height: 42px !important;
            padding: 8px 0 !important;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            color: var(--gray-800) !important;
            font-size: 14px !important;
            line-height: 24px !important;
        }

        .select2-dropdown {
            border: 1px solid var(--gray-300) !important;
            border-radius: var(--radius) !important;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .order-details-page {
                padding: 16px;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
            }
            
            .info-row {
                flex-direction: column;
                gap: 4px;
            }
            
            .info-label {
                width: 100%;
            }
        }

        @media (max-width: 768px) {
            .dashboard__inner__header {
                padding: 16px;
            }
            
            .content-section {
                padding: 16px;
            }
            
            .customer-info {
                flex-direction: column;
                text-align: center;
            }
        }

        /* Preserve original classes */
        .table_customer.provider_wrapper {
            border-bottom: 1px solid var(--gray-200);
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

        .mt-2 {
            margin-top: 8px;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -12px;
        }

        [class*="col-"] {
            padding: 0 12px;
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
                            <h4 class="dashboard__inner__header__title"><?php echo e(__('Order Details')); ?></h4>
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
                <div class="tableStyle_three">
                    <div class="table_wrapper custom_Table">
                      <div class="dashboard__body">
                        <div class="dashboard__inner">
                            <div class="customer__details mt-2">
                                <div class="customer__details__author">
                                    <div class="row">
                                      <?php echo $__env->make('backend.pages.orders.order-details-step-01', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                      <?php echo $__env->make('backend.pages.orders.order-details-step-02', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                      <?php echo $__env->make('backend.pages.orders.order-details-step-03', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                      <?php echo $__env->make('backend.pages.orders.order-details-step-04', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                    </div>
                                </div>
                            </div>
                               
                                <?php echo $__env->make('backend.pages.orders.order-items-details', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                <?php if($order->OrderLocations): ?>
                                   <?php echo $__env->make('backend.pages.orders.order-location-details', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                <?php endif; ?>
                                <?php if($outlet_location): ?>
                                   <?php echo $__env->make('backend.pages.orders.outlet-location-details', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                <?php endif; ?>
                                <?php echo $__env->make('backend.pages.orders.order-notes-details', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                        </div>
                       </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
    <?php echo $__env->make('backend.pages.orders.sub-order-status-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('backend.pages.orders.add_order_staff_modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script src="<?php echo e(asset('assets/backend/js/select2.min.js')); ?>"></script>    
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){
                    //sub order status change
                    $('#staff_id').select2( {
                    dropdownParent: $('#OrderStaffAddModal'),
                });
                    $(document).on('click', '.order_status_change_modal', function () {
                        let el = $(this);
                        let order_id = el.data('order_id');
                        let form = $('#OrderStatusChangeModal');
                        form.find('#order_id').val(order_id);
                    });

                    $(document).on('click', '.add_order_staff_modal', function () {
                        
                        $('#OrderStaffAddModal').modal('show');
                        
                    });    


            });
         })(jQuery);
    </script>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-details.blade.php ENDPATH**/ ?>