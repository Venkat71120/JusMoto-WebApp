<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Outlets Location')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        /* ===== CLEAN & MODERN ALL OUTLETS PAGE ===== */

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
            --green-light: #dcfce7;
            --green-dark: #166534;
            --yellow-light: #fef9c3;
            --yellow-dark: #854d0e;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --transition: all 0.2s ease;
        }

        /* Page Container */
        .outlets-page {
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

        /* Header Section */
        .dashboard__inner__header {
            padding: 20px 24px;
            border-bottom: 1px solid var(--gray-200);
            background: var(--gray-50);
        }

        .dashboard__inner__header__flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
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
            color: var(--gray-800);
            margin: 0;
            padding-left: 16px;
            position: relative;
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

        .dashboard__inner__header__right {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
        }

        /* Bulk Action */
        .bulk-action-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--white);
            padding: 4px 8px;
            border: 1px solid var(--gray-200);
            border-radius: 40px;
        }

        .bulk-action-select {
            padding: 8px 16px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: 40px;
            font-size: 13px;
            color: var(--gray-700);
            cursor: pointer;
            min-width: 140px;
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
        }

        /* Add Outlet Button */
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

        /* Search */
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
            color: var(--gray-800);
            transition: var(--transition);
        }

        .search-input:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
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
            padding: 0 24px 24px;
        }

        .table-responsive {
            overflow-x: auto;
            border: 1px solid var(--gray-200);
            border-radius: var(--radius);
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

        /* Column Widths */
        .checkbox-col { width: 40px; text-align: center; }
        .id-col { width: 60px; color: var(--gray-500); font-weight: 500; }
        .name-col { min-width: 200px; }
        .address-col { min-width: 250px; }
        .phone-col { width: 120px; }
        .status-col { width: 100px; }
        .actions-col { width: 100px; text-align: right; }

        /* Checkbox */
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
            cursor: pointer;
            accent-color: var(--red);
        }

        /* Outlet Info */
        .outlet-name {
            font-weight: 600;
            color: var(--gray-800);
            font-size: 15px;
            margin-bottom: 4px;
        }

        .outlet-meta {
            font-size: 12px;
            color: var(--gray-500);
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .outlet-meta i {
            color: var(--red);
            font-size: 12px;
        }

        /* Address */
        .address-text {
            font-size: 14px;
            color: var(--gray-700);
            line-height: 1.5;
        }

        .address-text i {
            color: var(--red);
            margin-right: 4px;
            font-size: 12px;
        }

        /* Phone */
        .phone-text {
            font-size: 14px;
            color: var(--gray-700);
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .phone-text i {
            color: var(--red);
            font-size: 12px;
        }

        /* Status Badges */
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
            background: var(--green-light);
            color: var(--green-dark);
        }

        .status-badge.inactive {
            background: var(--red-light);
            color: var(--red);
        }

        .status-badge i {
            font-size: 12px;
        }

        /* Action Group */
        .action-group {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 4px;
        }

        .action-item {
            width: 32px;
            height: 32px;
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

        .action-item:hover {
            background: var(--red);
            color: white;
            transform: translateY(-2px);
        }

        .action-item.edit:hover {
            background: #2563eb;
        }

        .action-item.delete:hover {
            background: var(--red);
        }

        .action-item.view:hover {
            background: #10b981;
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

        /* Spinner */
        .spinner-border {
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
            .outlets-page {
                padding: 16px;
            }
            
            .dashboard__inner__header {
                padding: 16px;
            }
            
            .dashboard__inner__header__flex {
                flex-direction: column;
                align-items: stretch;
            }
            
            .search-wrapper {
                width: 100%;
            }
            
            .tableStyle_three {
                padding: 0 16px 16px;
            }
        }

        @media (max-width: 768px) {
            .dashboard__inner__header__left {
                width: 100%;
            }
            
            .bulk-action-wrapper {
                width: 100%;
                justify-content: space-between;
            }
            
            .bulk-action-select {
                flex: 1;
            }
        }

        /* Dark Mode */
        body.dark-mode .outlets-page {
            background: #111827;
        }

        body.dark-mode .dashboard__card {
            background: #1f2937;
            border-color: #374151;
        }

        body.dark-mode .dashboard__inner__header {
            background: #374151;
            border-color: #4b5563;
        }

        body.dark-mode .dashboard__inner__header__title {
            color: #f3f4f6;
        }

        body.dark-mode .modern-table thead th {
            background: #374151;
            color: #e5e7eb;
            border-bottom-color: #4b5563;
        }

        body.dark-mode .modern-table tbody td {
            color: #e5e7eb;
            border-bottom-color: #374151;
        }

        body.dark-mode .modern-table tbody tr:hover {
            background: #2d2d2d;
        }

        body.dark-mode .search-input {
            background: #374151;
            border-color: #4b5563;
            color: #f3f4f6;
        }

        body.dark-mode .outlet-name {
            color: #f3f4f6;
        }

        body.dark-mode .address-text,
        body.dark-mode .phone-text {
            color: #e5e7eb;
        }

        body.dark-mode .action-item {
            background: #374151;
            color: #9ca3af;
        }

        body.dark-mode .pagination li a,
        body.dark-mode .pagination li span {
            background: #374151;
            border-color: #4b5563;
            color: #e5e7eb;
        }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="outlets-page">
        <div class="row g-4 mt-0">
            <div class="col-xl-12 col-lg-12">
                <div class="dashboard__card">
                    <div class="dashboard__inner__header">
                        <div class="dashboard__inner__header__flex">
                            <div class="dashboard__inner__header__left">
                                <h4 class="dashboard__inner__header__title"><?php echo e(__('All Outlets')); ?></h4>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outlet-bulk-delete')): ?>
                                    <div class="bulk-action-wrapper">
                                        <select class="bulk-action-select" id="bulk_action">
                                            <option value=""><?php echo e(__('Bulk Actions')); ?></option>
                                            <option value="delete"><?php echo e(__('Delete Selected')); ?></option>
                                        </select>
                                        <button class="apply-btn" id="bulk_action_apply"><?php echo e(__('Apply')); ?></button>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="dashboard__inner__header__right">
                                <div class="btn-wrapper">
                                    <a href="<?php echo e(route('admin.outletAddress.add')); ?>" class="btn_bg_blue">
                                        <i class="las la-plus"></i>
                                        <?php echo e(__('Add Outlet')); ?>

                                    </a>
                                </div>
                                <div class="search-wrapper">
                                    <i class="las la-search search-icon"></i>
                                    <input class="search-input notice_string_search" 
                                           type="text" 
                                           id="string_search" 
                                           placeholder="<?php echo e(__('Search outlets...')); ?>">
                                </div>
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
                        <div class="table-responsive">
                            <div class="search_notice_result">
                                <?php echo $__env->make('backend.pages.admin.serviceLocation.search-outlet', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outlet-bulk-delete')): ?>
        <?php if (isset($component)) { $__componentOriginal996fed7ae655ce20bc4d8081dd84ac5f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal996fed7ae655ce20bc4d8081dd84ac5f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.bulk-action.bulk-action-js','data' => ['url' => route('admin.outlet.bulk.action')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('bulk-action.bulk-action-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.outlet.bulk.action'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal996fed7ae655ce20bc4d8081dd84ac5f)): ?>
<?php $attributes = $__attributesOriginal996fed7ae655ce20bc4d8081dd84ac5f; ?>
<?php unset($__attributesOriginal996fed7ae655ce20bc4d8081dd84ac5f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal996fed7ae655ce20bc4d8081dd84ac5f)): ?>
<?php $component = $__componentOriginal996fed7ae655ce20bc4d8081dd84ac5f; ?>
<?php unset($__componentOriginal996fed7ae655ce20bc4d8081dd84ac5f); ?>
<?php endif; ?>
    <?php endif; ?>
    <script type="text/javascript">
        (function(){
            "use strict";
            
            $(document).ready(function(){
                let searchTimeout;

                // Status change confirmation
                $(document).on('click','.swal_status_change',function(e){
                    e.preventDefault();
                    
                    Swal.fire({
                        title: '<?php echo e(__("Change Status?")); ?>',
                        text: '<?php echo e(__("Are you sure you want to change the status?")); ?>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: "<?php echo e(__('Yes, change it!')); ?>",
                        cancelButtonText: "<?php echo e(__('Cancel')); ?>",
                        background: $('#darkModeValue').val() === 'on' ? '#1f2937' : '#ffffff'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $(this).next().find('.swal_form_submit_btn').trigger('click');
                        }
                    });
                });

                // Live search with debounce
                $(document).on('keyup','.notice_string_search',function(){
                    clearTimeout(searchTimeout);
                    
                    let string_search = $(this).val();
                    
                    searchTimeout = setTimeout(function() {
                        $.ajax({
                            url: "<?php echo e(route('admin.outlet.search')); ?>",
                            method: 'GET',
                            data: { string_search: string_search },
                            beforeSend: function() {
                                $('.search_notice_result').html(`
                                    <div class="empty-state">
                                        <div class="spinner-border"></div>
                                        <p style="margin-top: 16px;"><?php echo e(__('Searching...')); ?></p>
                                    </div>
                                `);
                            },
                            success: function(res){
                                if(res.status == 'nothing'){
                                    $('.search_notice_result').html(`
                                        <div class="empty-state">
                                            <i class="las la-map-marker"></i>
                                            <p><?php echo e(__('No outlets found')); ?></p>
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
                        url: "<?php echo e(route('admin.outlet.paginate.data')); ?>?page=" + page,
                        beforeSend: function() {
                            $('.search_notice_result').html(`
                                <div class="empty-state">
                                    <div class="spinner-border"></div>
                                    <p style="margin-top: 16px;"><?php echo e(__('Loading...')); ?></p>
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
                            title: '<?php echo e(__("No Action")); ?>',
                            text: '<?php echo e(__("Please select items and an action.")); ?>',
                            icon: 'info',
                            confirmButtonColor: '#e31b23'
                        });
                        return;
                    }
                    
                    if (action === 'delete') {
                        Swal.fire({
                            title: '<?php echo e(__("Delete Selected?")); ?>',
                            text: '<?php echo e(__("This action cannot be undone.")); ?>',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#e31b23',
                            cancelButtonColor: '#6b7280',
                            confirmButtonText: '<?php echo e(__("Delete")); ?>'
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
            });
        })(jQuery);
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/serviceLocation/outletAddressList.blade.php ENDPATH**/ ?>