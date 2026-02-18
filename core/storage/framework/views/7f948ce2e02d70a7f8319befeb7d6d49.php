<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Admin All Services')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        /* ===== MODERN RED THEME FOR SERVICES PAGE ===== */
        :root {
            --red-primary: #e31b23;
            --red-deep: #b11218;
            --red-light: #fff5f5;
            --red-soft: #ffe3e3;
            --dark: #0a0c0d;
            --gray-900: #17191a;
            --gray-700: #404546;
            --gray-400: #a0a6a8;
            --gray-100: #f3f5f6;
            --white: #ffffff;
            --shadow-sm: 0 4px 12px rgba(227, 27, 35, 0.04);
            --shadow-md: 0 8px 24px rgba(227, 27, 35, 0.08);
            --shadow-lg: 0 20px 32px rgba(227, 27, 35, 0.12);
            --radius-md: 16px;
            --radius-lg: 24px;
            --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Page Container */
        .services-page {
            padding: 24px;
            background: var(--red-light);
            min-height: 100vh;
        }

        /* Header Card */
        .page-header-card {
            background: var(--white);
            border-radius: var(--radius-lg);
            padding: 24px 28px;
            margin-bottom: 24px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }

        .page-header-card:hover {
            box-shadow: var(--shadow-md);
        }

        .page-title {
            font-size: 28px;
            font-weight: 700;
            color: var(--gray-900);
            margin: 0 0 4px 0;
            letter-spacing: -0.02em;
        }

        .page-title span {
            background: linear-gradient(135deg, var(--red-primary) 0%, var(--red-deep) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .page-subtitle {
            font-size: 14px;
            color: var(--gray-700);
            margin: 0;
        }

        /* Action Bar */
        .action-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
        }

        .action-left {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
        }

        .action-right {
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
            background: var(--red-light);
            padding: 8px 16px;
            border-radius: 40px;
        }

        .bulk-action-select {
            padding: 10px 16px;
            background: var(--white);
            border: none;
            border-radius: 40px;
            font-size: 13px;
            font-weight: 500;
            color: var(--gray-900);
            outline: none;
            cursor: pointer;
            min-width: 140px;
            box-shadow: var(--shadow-sm);
        }

        .bulk-action-select:focus {
            box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
        }

        .apply-btn {
            padding: 10px 24px;
            background: var(--red-primary);
            color: white;
            border: none;
            border-radius: 40px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
        }

        .apply-btn:hover {
            background: var(--red-deep);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(227, 27, 35, 0.2);
        }

        /* Add Service Button */
        .add-service-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            background: linear-gradient(135deg, var(--red-primary), var(--red-deep));
            color: white;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: var(--transition);
            border: none;
            cursor: pointer;
            box-shadow: 0 6px 16px rgba(227, 27, 35, 0.2);
        }

        .add-service-btn i {
            font-size: 18px;
            transition: transform 0.2s ease;
        }

        .add-service-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(227, 27, 35, 0.3);
        }

        .add-service-btn:hover i {
            transform: rotate(90deg);
        }

        /* Search Input */
        .search-wrapper {
            position: relative;
            min-width: 280px;
        }

        .search-input {
            width: 100%;
            padding: 12px 20px 12px 48px;
            background: var(--white);
            border: none;
            border-radius: 40px;
            font-size: 14px;
            color: var(--gray-900);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }

        .search-input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1), var(--shadow-sm);
        }

        .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray-400);
            font-size: 16px;
            transition: color 0.2s ease;
        }

        .search-input:focus + .search-icon {
            color: var(--red-primary);
        }

        /* Main Content Card */
        .content-card {
            background: var(--white);
            border-radius: var(--radius-lg);
            padding: 28px;
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }

        .content-card:hover {
            box-shadow: var(--shadow-md);
        }

        /* Error Messages */
        .error-wrapper {
            margin-bottom: 24px;
        }

        .alert-danger {
            background: #fee2e2;
            color: var(--red-deep);
            padding: 14px 18px;
            border-radius: 12px;
            font-size: 14px;
            border-left: 4px solid var(--red-primary);
        }

        /* Table Styling */
        .table-container {
            overflow-x: auto;
            border-radius: 16px;
        }

        .modern-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }

        .modern-table th {
            text-align: left;
            padding: 18px 16px;
            background: var(--red-light);
            color: var(--gray-900);
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            white-space: nowrap;
        }

        .modern-table th:first-child {
            border-top-left-radius: 16px;
        }

        .modern-table th:last-child {
            border-top-right-radius: 16px;
        }

        .modern-table td {
            padding: 20px 16px;
            border-bottom: 1px solid rgba(227, 27, 35, 0.05);
            color: var(--gray-700);
            vertical-align: middle;
        }

        .table-row {
            transition: var(--transition);
        }

        .table-row:hover td {
            background: var(--red-light);
        }

        /* Checkbox Styling */
        .checkbox-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modern-checkbox {
            width: 20px;
            height: 20px;
            border-radius: 6px;
            background: var(--white);
            border: 2px solid var(--gray-400);
            appearance: none;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
        }

        .modern-checkbox:checked {
            background: var(--red-primary);
            border-color: var(--red-primary);
        }

        .modern-checkbox:checked::after {
            content: '✓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 12px;
        }

        .modern-checkbox:hover {
            border-color: var(--red-primary);
        }

        /* Status Badges */
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 16px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.3px;
            white-space: nowrap;
        }

        .status-badge.active {
            background: #dcfce7;
            color: #166534;
        }

        .status-badge.pending {
            background: #fff3cd;
            color: #856404;
        }

        .status-badge.inactive {
            background: #fee2e2;
            color: var(--red-deep);
        }

        /* Action Buttons */
        .action-buttons {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .action-btn {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: var(--red-light);
            color: var(--red-primary);
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
        }

        .action-btn:hover {
            background: var(--red-primary);
            color: white;
            transform: translateY(-2px);
        }

        .action-btn.edit:hover {
            background: #2563eb;
        }

        .action-btn.delete:hover {
            background: #dc2626;
        }

        .action-btn.view:hover {
            background: #10b981;
        }

        /* Status Change Button */
        .status-change-btn {
            min-width: 90px;
            padding: 8px 12px;
            background: var(--red-light);
            color: var(--red-primary);
            border: none;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }

        .status-change-btn:hover {
            background: var(--red-primary);
            color: white;
            transform: translateY(-2px);
        }

        /* Pagination */
        .pagination-wrapper {
            margin-top: 28px;
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
            min-width: 40px;
            height: 40px;
            padding: 0 8px;
            background: var(--white);
            border-radius: 10px;
            color: var(--gray-700);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--transition);
            box-shadow: var(--shadow-sm);
        }

        .pagination li.active span {
            background: var(--red-primary);
            color: white;
        }

        .pagination li a:hover {
            background: var(--red-light);
            color: var(--red-primary);
            transform: translateY(-2px);
        }

        /* Loading State */
        .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid var(--red-light);
            border-top-color: var(--red-primary);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Nothing Found */
        .nothing-found {
            text-align: center;
            padding: 60px 20px;
            color: var(--gray-400);
            font-size: 16px;
        }

        .nothing-found i {
            font-size: 48px;
            color: var(--red-soft);
            margin-bottom: 16px;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .services-page {
                padding: 16px;
            }
            
            .action-bar {
                flex-direction: column;
                align-items: stretch;
            }
            
            .search-wrapper {
                width: 100%;
            }
            
            .page-header-card,
            .content-card {
                padding: 20px;
            }
        }

        @media (max-width: 768px) {
            .action-left,
            .action-right {
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
        body.dark-mode .page-header-card,
        body.dark-mode .content-card {
            background: #1f2937;
        }

        body.dark-mode .page-title {
            color: #f3f4f6;
        }

        body.dark-mode .page-subtitle {
            color: #9ca3af;
        }

        body.dark-mode .modern-table th {
            background: rgba(227, 27, 35, 0.2);
            color: #f3f4f6;
        }

        body.dark-mode .modern-table td {
            border-bottom-color: rgba(227, 27, 35, 0.1);
            color: #e5e7eb;
        }

        body.dark-mode .table-row:hover td {
            background: rgba(227, 27, 35, 0.1);
        }

        body.dark-mode .search-input,
        body.dark-mode .bulk-action-select {
            background: #374151;
            color: #f3f4f6;
        }

        body.dark-mode .action-btn {
            background: rgba(227, 27, 35, 0.2);
            color: #fecaca;
        }

        body.dark-mode .pagination li a,
        body.dark-mode .pagination li span {
            background: #374151;
            color: #e5e7eb;
        }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="services-page">
        <!-- Header Card -->
        <div class="page-header-card">
            <div>
                <h1 class="page-title">
                    <span><?php echo e(__('Admin')); ?></span> <?php echo e(__('All Services')); ?>

                </h1>
                <p class="page-subtitle"><?php echo e(__('Manage and organize all your services from one place')); ?></p>
            </div>

            <!-- Action Bar -->
            <div class="action-bar">
                <div class="action-left">
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-bulk-delete')): ?>
                        <div class="bulk-action-wrapper">
                            <select class="bulk-action-select" id="bulk_action">
                                <option value=""><?php echo e(__('Bulk Actions')); ?></option>
                                <option value="delete"><?php echo e(__('Delete Selected')); ?></option>
                            </select>
                            <button class="apply-btn" id="bulk_action_apply"><?php echo e(__('Apply')); ?></button>
                        </div>
                    <?php endif; ?>
                </div>

                <div class="action-right">
                    <!-- Search -->
                    <div class="search-wrapper">
                        <i class="las la-search search-icon"></i>
                        <input class="search-input" type="text" id="string_search" 
                               placeholder="<?php echo e(__('Search services...')); ?>" autocomplete="off">
                    </div>

                    <!-- Add Service Button -->
                    <a href="<?php echo e(route('admin.add.new.service')); ?>" class="add-service-btn">
                        <i class="las la-plus"></i>
                        <?php echo e(__('Add New Service')); ?>

                    </a>
                </div>
            </div>
        </div>

        <!-- Error Messages -->
        <?php if($errors->any()): ?>
            <div class="error-wrapper">
                <div class="alert-danger">
                    <i class="las la-exclamation-circle" style="margin-right: 8px;"></i>
                    <?php echo e($errors->first()); ?>

                </div>
            </div>
        <?php endif; ?>

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

        <!-- Main Content -->
        <div class="content-card">
            <div class="table-container">
                <div class="search_notice_result">
                    <?php echo $__env->make('backend.pages.services.admin.search-service', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-bulk-delete')): ?>
        <?php if (isset($component)) { $__componentOriginal996fed7ae655ce20bc4d8081dd84ac5f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal996fed7ae655ce20bc4d8081dd84ac5f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.bulk-action.bulk-action-js','data' => ['url' => route('admin.bulk.action.service')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('bulk-action.bulk-action-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.bulk.action.service'))]); ?>
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

    <script>
        (function($) {
            "use strict";

            $(document).ready(function() {
                let searchTimeout;

                // Status change confirmation
                $(document).on('click', '.swal_status_change', function(e) {
                    e.preventDefault();
                    
                    Swal.fire({
                        title: '<?php echo e(__("Change Status?")); ?>',
                        text: '<?php echo e(__("Are you sure you want to change the status? This action can be reversed later.")); ?>',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: '<?php echo e(__("Yes, change it!")); ?>',
                        cancelButtonText: '<?php echo e(__("Cancel")); ?>',
                        background: $('#darkModeValue').val() === 'on' ? '#1f2937' : '#ffffff',
                        customClass: {
                            popup: 'swal-popup-custom'
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $(this).next().find('.swal_form_submit_btn').trigger('click');
                            
                            // Show loading state
                            Swal.fire({
                                title: '<?php echo e(__("Processing...")); ?>',
                                text: '<?php echo e(__("Please wait while we update the status.")); ?>',
                                allowOutsideClick: false,
                                showConfirmButton: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                }
                            });
                        }
                    });
                });

                // Live search with debounce
                $(document).on('keyup', '#string_search', function() {
                    clearTimeout(searchTimeout);
                    
                    let string_search = $(this).val();
                    
                    searchTimeout = setTimeout(function() {
                        if (string_search.length > 0 || string_search === '') {
                            performSearch(string_search);
                        }
                    }, 500); // 500ms debounce
                });

                function performSearch(string_search) {
                    $.ajax({
                        url: "<?php echo e(route('admin.search.service')); ?>",
                        method: 'GET',
                        data: { string_search: string_search },
                        beforeSend: function() {
                            $('.search_notice_result').html(`
                                <div style="text-align: center; padding: 60px;">
                                    <div class="loading-spinner"></div>
                                    <p style="margin-top: 16px; color: var(--gray-400);">
                                        <?php echo e(__('Searching...')); ?>

                                    </p>
                                </div>
                            `);
                        },
                        success: function(res) {
                            if (res.status === 'nothing' || $(res).find('tbody tr').length === 0) {
                                $('.search_notice_result').html(`
                                    <div class="nothing-found">
                                        <i class="las la-frown"></i>
                                        <p><?php echo e(__('No services found matching your search')); ?></p>
                                    </div>
                                `);
                            } else {
                                $('.search_notice_result').html(res);
                            }
                            
                            // Reinitialize tooltips if needed
                            if (typeof feather !== 'undefined') {
                                feather.replace();
                            }
                        },
                        error: function() {
                            $('.search_notice_result').html(`
                                <div class="nothing-found">
                                    <i class="las la-exclamation-triangle"></i>
                                    <p><?php echo e(__('An error occurred. Please try again.')); ?></p>
                                </div>
                            `);
                        }
                    });
                }

                // Pagination
                $(document).on('click', '.pagination li a', function(e) {
                    e.preventDefault();
                    
                    let page = $(this).attr('href').split('page=')[1];
                    
                    $.ajax({
                        url: "<?php echo e(route('admin.paginate.service')); ?>?page=" + page,
                        beforeSend: function() {
                            $('.search_notice_result').html(`
                                <div style="text-align: center; padding: 60px;">
                                    <div class="loading-spinner"></div>
                                    <p style="margin-top: 16px; color: var(--gray-400);">
                                        <?php echo e(__('Loading...')); ?>

                                    </p>
                                </div>
                            `);
                        },
                        success: function(res) {
                            $('.search_notice_result').html(res);
                            
                            // Scroll to top of content
                            $('html, body').animate({
                                scrollTop: $('.content-card').offset().top - 100
                            }, 300);
                        }
                    });
                });

                // Bulk action apply with confirmation
                $('#bulk_action_apply').on('click', function() {
                    let bulkAction = $('#bulk_action').val();
                    let selectedIds = [];
                    
                    $('.bulk-checkbox:checked').each(function() {
                        selectedIds.push($(this).val());
                    });
                    
                    if (bulkAction === 'delete' && selectedIds.length > 0) {
                        Swal.fire({
                            title: '<?php echo e(__("Confirm Bulk Delete")); ?>',
                            text: '<?php echo e(__("Are you sure you want to delete the selected items? This action cannot be undone.")); ?>',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#e31b23',
                            cancelButtonColor: '#6b7280',
                            confirmButtonText: '<?php echo e(__("Yes, delete them!")); ?>',
                            cancelButtonText: '<?php echo e(__("Cancel")); ?>'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                $('#bulk_action_form').submit();
                            }
                        });
                    } else if (selectedIds.length === 0) {
                        Swal.fire({
                            title: '<?php echo e(__("No Items Selected")); ?>',
                            text: '<?php echo e(__("Please select at least one item to perform bulk action.")); ?>',
                            icon: 'info',
                            confirmButtonColor: '#e31b23'
                        });
                    }
                });

                // Select all checkbox
                $(document).on('change', '#select_all_checkbox', function() {
                    $('.bulk-checkbox').prop('checked', $(this).is(':checked'));
                });

                // Individual checkbox change
                $(document).on('change', '.bulk-checkbox', function() {
                    if ($('.bulk-checkbox:checked').length === $('.bulk-checkbox').length) {
                        $('#select_all_checkbox').prop('checked', true);
                    } else {
                        $('#select_all_checkbox').prop('checked', false);
                    }
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
                        performSearch('');
                    }
                });

                // Initialize any tooltips
                $('[data-toggle="tooltip"]').tooltip();

                // Dark mode support
                if ($('#darkModeValue').val() === 'on') {
                    $('body').addClass('dark-mode');
                }

            });
        })(jQuery);
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/admin-services.blade.php ENDPATH**/ ?>