<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Basic Settings')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <?php if (isset($component)) { $__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.css','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.css'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa)): ?>
<?php $attributes = $__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa; ?>
<?php unset($__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa)): ?>
<?php $component = $__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa; ?>
<?php unset($__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa); ?>
<?php endif; ?>
    <style>
        /* Red Theme Integration */
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
            --blue-light: #dbeafe;
            --blue-dark: #1e40af;
            --radius-sm: 4px;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Card Enhancement */
        .dashboard__card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            overflow: hidden;
            animation: slideIn 0.3s ease;
        }

        .dashboard__card:hover {
            box-shadow: var(--shadow-md);
            border-color: var(--gray-300);
        }

        .dashboard__card__header__title {
            font-size: 22px;
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            padding-left: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--gray-200);
        }

        .dashboard__card__header__title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 30px;
            background: var(--red);
            border-radius: 4px;
        }

        .dashboard__card__header__title i {
            color: var(--red);
            font-size: 24px;
        }

        /* Info Message */
        .text-info {
            color: var(--blue-dark) !important;
            background: var(--blue-light);
            padding: 12px 16px;
            border-radius: var(--radius);
            font-size: 14px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            border-left: 3px solid var(--blue-dark);
        }

        .text-info::before {
            content: 'ℹ️';
            font-size: 16px;
        }

        /* Form Groups */
        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }

        .form-group label i {
            color: var(--red);
            margin-right: 6px;
            font-size: 16px;
        }

        /* Form Controls */
        .form-control {
            width: 100%;
            padding: 12px 16px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
            box-shadow: var(--shadow-sm);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        .form-control:hover {
            border-color: var(--gray-400);
        }

        /* Textarea Enhancement */
        #order_invoice_notes {
            min-height: 120px !important;
            line-height: 1.6 !important;
            resize: vertical;
            font-family: inherit;
        }

        /* Col-6 Container */
        .col-6 {
            padding: 0 15px;
        }

        @media (max-width: 992px) {
            .col-6 {
                width: 100%;
                padding: 0;
            }
        }

        /* Button Wrapper */
        .btn_wrapper {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid var(--gray-200);
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .cmnBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 32px;
            border-radius: 40px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            text-decoration: none;
            letter-spacing: 0.3px;
        }

        .cmnBtn.btn_5.btn_bg_blue {
            background: var(--red);
            color: white;
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
        }

        .cmnBtn.btn_5.btn_bg_blue:hover {
            background: var(--red-dark);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
        }

        .cmnBtn.btn_5.btn_bg_blue:active {
            transform: translateY(-1px);
        }

        .cmnBtn i {
            font-size: 18px;
            transition: var(--transition);
        }

        .cmnBtn:hover i {
            transform: translateX(3px);
        }

        .radius-5 {
            border-radius: var(--radius);
        }

        /* Margin Utilities */
        .mt-2 {
            margin-top: 0.75rem;
        }

        .mt-4 {
            margin-top: 2rem;
        }

        .mt-5 {
            margin-top: 2.5rem;
        }

        .mb-2 {
            margin-bottom: 0.75rem;
        }

        .mb-3 {
            margin-bottom: 1.5rem;
        }

        /* Animation */
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Loading State */
        .cmnBtn.loading {
            position: relative;
            pointer-events: none;
            opacity: 0.7;
        }

        .cmnBtn.loading::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-right-color: currentColor;
            border-radius: 50%;
            animation: button-loading 0.6s linear infinite;
        }

        @keyframes button-loading {
            to { transform: translateY(-50%) rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .dashboard__card {
                padding: 15px;
            }
            
            .dashboard__card__header__title {
                font-size: 20px;
            }
            
            .cmnBtn {
                width: 100%;
            }
        }

        /* Input Groups */
        .input-group {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-group .form-control {
            flex: 1;
        }

        .input-group-text {
            background: var(--gray-100);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            padding: 0 15px;
            color: var(--gray-600);
            font-weight: 500;
            margin-left: -1px;
        }

        /* Placeholder */
        ::placeholder {
            color: var(--gray-400);
            font-size: 13px;
            opacity: 1;
        }

        /* Focus Visible */
        *:focus-visible {
            outline: 2px solid var(--red);
            outline-offset: 2px;
        }

        /* Print Styles */
        @media print {
            .cmnBtn {
                display: none !important;
            }
            
            .dashboard__card {
                box-shadow: none;
                border: 1px solid #ddd;
            }
        }

        /* Success Message */
        .alert-success {
            background: #d1fae5;
            color: #047857;
            padding: 12px 16px;
            border-radius: var(--radius);
            border-left: 3px solid #047857;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Field Icons */
        .field-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray-400);
            pointer-events: none;
        }

        /* Hover Effects */
        .form-group:hover label {
            color: var(--red);
        }

        /* Custom Checkbox Styles (for the JS functionality) */
        .checkbox-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 15px 0;
        }

        .checkbox-wrapper input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: var(--red);
            cursor: pointer;
        }

        .checkbox-wrapper label {
            margin-bottom: 0;
            cursor: pointer;
        }

        /* OTP Time Settings (referenced in JS) */
        .otp_time_settings_show_hide {
            background: var(--gray-50);
            padding: 20px;
            border-radius: var(--radius);
            border: 1px solid var(--gray-200);
            margin-top: 15px;
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="row g-4 mt-0 justify-content-center">
    <div class="col-xl-8 col-lg-10 mt-0">
        <div class="dashboard__card bg__white padding-20 radius-10">
            <h2 class="dashboard__card__header__title">
                <i class="las la-sliders-h"></i>
                <?php echo e(__('Order Settings')); ?>

            </h2>
            
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
            
            <form action="<?php echo e(route('admin.order.settings')); ?>" method="POST" class="validateForm" enctype="multipart/form-data" id="orderSettingsForm">
                <?php echo csrf_field(); ?>
                
                <!-- Info Message -->
                <div class="text-info mb-4">
                    <i class="las la-info-circle"></i>
                    <?php echo e(__('Customize the invoice page text and appearance below.')); ?>

                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <!-- Bill To Title -->
                        <div class="form-group">
                            <label for="bill_to_title">
                                <i class="las la-user-tie"></i>
                                <?php echo e(__('Bill To Title')); ?>

                            </label>
                            <input type="text" 
                                   name="bill_to_title"  
                                   class="form-control" 
                                   value="<?php echo e(get_static_option('bill_to_title')); ?>" 
                                   id="bill_to_title"
                                   placeholder="<?php echo e(__('e.g., Billing Address')); ?>">
                            <small class="form-text text-muted"><?php echo e(__('Title for the billing section')); ?></small>
                        </div>

                        <!-- Ship To Title -->
                        <div class="form-group">
                            <label for="ship_to_title">
                                <i class="las la-truck"></i>
                                <?php echo e(__('Ship To Title')); ?>

                            </label>
                            <input type="text" 
                                   name="ship_to_title"  
                                   class="form-control" 
                                   value="<?php echo e(get_static_option('ship_to_title')); ?>" 
                                   id="ship_to_title"
                                   placeholder="<?php echo e(__('e.g., Shipping Address')); ?>">
                            <small class="form-text text-muted"><?php echo e(__('Title for the shipping section')); ?></small>
                        </div>

                        <!-- Invoice Title -->
                        <div class="form-group">
                            <label for="invoice_title">
                                <i class="las la-file-invoice"></i>
                                <?php echo e(__('INVOICE Title')); ?>

                            </label>
                            <input type="text" 
                                   name="invoice_title"  
                                   class="form-control" 
                                   value="<?php echo e(get_static_option('invoice_title')); ?>" 
                                   id="invoice_title"
                                   placeholder="<?php echo e(__('e.g., INVOICE')); ?>">
                            <small class="form-text text-muted"><?php echo e(__('Main invoice title')); ?></small>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <!-- Invoice No Title -->
                        <div class="form-group">
                            <label for="invoice_no_title">
                                <i class="las la-hashtag"></i>
                                <?php echo e(__('Invoice No Title')); ?>

                            </label>
                            <input type="text" 
                                   name="invoice_no_title"  
                                   class="form-control" 
                                   value="<?php echo e(get_static_option('invoice_no_title')); ?>" 
                                   id="invoice_no_title"
                                   placeholder="<?php echo e(__('e.g., Invoice Number')); ?>">
                            <small class="form-text text-muted"><?php echo e(__('Title for the invoice number field')); ?></small>
                        </div>

                        <!-- Invoice Notes -->
                        <div class="form-group">
                            <label for="order_invoice_notes">
                                <i class="las la-sticky-note"></i>
                                <?php echo e(__('Invoice Notes for Admin')); ?>

                            </label>
                            <textarea name="order_invoice_notes" 
                                      id="order_invoice_notes" 
                                      class="form-control"
                                      placeholder="<?php echo e(__('Add any additional notes or instructions for the admin...')); ?>"><?php echo e(get_static_option('order_invoice_notes')); ?></textarea>
                            <small class="form-text text-muted"><?php echo e(__('These notes will appear on the invoice')); ?></small>
                        </div>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="btn_wrapper mt-4">
                    <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5">
                        <i class="las la-save"></i>
                        <?php echo e(__('Update Order Settings')); ?>

                    </button>
                    <button type="reset" class="cmnBtn btn_5 btn_bg_secondary radius-5" onclick="resetForm()">
                        <i class="las la-undo-alt"></i>
                        <?php echo e(__('Reset Changes')); ?>

                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Preview Card (Optional Enhancement) -->
<div class="row g-4 mt-2 justify-content-center">
    <div class="col-xl-8 col-lg-10">
        <div class="dashboard__card bg__white padding-20 radius-10">
            <h2 class="dashboard__card__header__title mb-3">
                <i class="las la-eye"></i>
                <?php echo e(__('Invoice Preview')); ?>

            </h2>
            <div class="invoice-preview">
                <div class="preview-header">
                    <span class="preview-badge"><?php echo e(get_static_option('invoice_title') ?? 'INVOICE'); ?></span>
                </div>
                <div class="preview-body">
                    <div class="row">
                        <div class="col-6">
                            <strong><?php echo e(get_static_option('bill_to_title') ?? 'Bill To'); ?>:</strong>
                            <p class="text-muted">John Doe<br>123 Main St<br>New York, NY 10001</p>
                        </div>
                        <div class="col-6">
                            <strong><?php echo e(get_static_option('ship_to_title') ?? 'Ship To'); ?>:</strong>
                            <p class="text-muted">Jane Smith<br>456 Oak Ave<br>Los Angeles, CA 90001</p>
                        </div>
                    </div>
                    <div class="preview-footer mt-3">
                        <small class="text-muted">
                            <i class="las la-info-circle"></i>
                            <?php echo e(get_static_option('order_invoice_notes') ?? 'Preview of how your invoice will appear'); ?>

                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php if (isset($component)) { $__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.markup','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.markup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75)): ?>
<?php $attributes = $__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75; ?>
<?php unset($__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75)): ?>
<?php $component = $__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75; ?>
<?php unset($__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75); ?>
<?php endif; ?>

<!-- Success Message Template -->
<?php if(session('success')): ?>
    <div class="alert alert-success alert-dismissible fade show position-fixed" style="top: 20px; right: 20px; z-index: 9999;" role="alert">
        <i class="las la-check-circle"></i>
        <?php echo e(session('success')); ?>

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
        (function($){
            "use strict";
            
            $(document).ready(function(){
                // Update button handler
                <?php if (isset($component)) { $__componentOriginal26b641e1adcfef4e774221a3ed7c52ce = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal26b641e1adcfef4e774221a3ed7c52ce = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.btn.update','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('btn.update'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal26b641e1adcfef4e774221a3ed7c52ce)): ?>
<?php $attributes = $__attributesOriginal26b641e1adcfef4e774221a3ed7c52ce; ?>
<?php unset($__attributesOriginal26b641e1adcfef4e774221a3ed7c52ce); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal26b641e1adcfef4e774221a3ed7c52ce)): ?>
<?php $component = $__componentOriginal26b641e1adcfef4e774221a3ed7c52ce; ?>
<?php unset($__componentOriginal26b641e1adcfef4e774221a3ed7c52ce); ?>
<?php endif; ?>

                // Form submission with loading state
                $('#orderSettingsForm').on('submit', function() {
                    let btn = $('#update');
                    btn.addClass('loading').prop('disabled', true);
                    btn.html('<i class="las la-spinner la-spin"></i> <?php echo e(__("Updating...")); ?>');
                });

                // Auto-dismiss alerts
                setTimeout(function() {
                    $('.alert').fadeOut(500);
                }, 5000);

                // Real-time preview update
                $('#bill_to_title, #ship_to_title, #invoice_title, #invoice_no_title, #order_invoice_notes').on('input', function() {
                    updatePreview();
                });

                // Character counter for textarea
                $('#order_invoice_notes').on('input', function() {
                    let length = $(this).val().length;
                    let maxLength = 500;
                    if (length > maxLength) {
                        $(this).val($(this).val().substring(0, maxLength));
                    }
                });

                // Email/OTP verification handlers (from original JS)
                $(document).on("change","#user_email_verify_enable_disable",function (){
                    let current_value = $("#user_email_verify_enable_disable").is(':checked');
                    if(current_value == true){
                        $("#user_otp_verify_enable_disable").prop("checked", false)
                    }
                    if (!$(this).is(':checked')) {
                        $(".otp_time_settings_show_hide").hide();
                    }
                    if ($(this).is(':checked')) {
                        $(".otp_time_settings_show_hide").hide();
                    }
                });

                $(document).on("change","#user_otp_verify_enable_disable",function (){
                    let current_value = $("#user_otp_verify_enable_disable").is(':checked');
                    if(current_value == true){
                        $("#user_email_verify_enable_disable").prop("checked", false)
                    }
                    if ($(this).is(':checked')) {
                        $(".otp_time_settings_show_hide").show();
                    } else {
                        $(".otp_time_settings_show_hide").hide();
                    }
                });

                // Add focus effects
                $('.form-control').on('focus', function() {
                    $(this).closest('.form-group').addClass('focused');
                }).on('blur', function() {
                    $(this).closest('.form-group').removeClass('focused');
                });

                // Preview update function
                function updatePreview() {
                    let billTo = $('#bill_to_title').val() || 'Bill To';
                    let shipTo = $('#ship_to_title').val() || 'Ship To';
                    let invoiceTitle = $('#invoice_title').val() || 'INVOICE';
                    
                    $('.preview-badge').text(invoiceTitle);
                    $('.preview-body .row .col-6:first strong').text(billTo + ':');
                    $('.preview-body .row .col-6:last strong').text(shipTo + ':');
                }
            });

            // Reset form function
            window.resetForm = function() {
                if (confirm('<?php echo e(__("Are you sure you want to reset all changes?")); ?>')) {
                    $('#orderSettingsForm')[0].reset();
                    updatePreview();
                }
            };

        })(jQuery);
    </script>

    <style>
        /* Additional dynamic styles */
        .form-text.text-muted {
            font-size: 12px;
            color: var(--gray-500);
            margin-top: 4px;
            display: block;
        }

        .invoice-preview {
            background: var(--gray-50);
            border-radius: var(--radius);
            padding: 20px;
            border: 1px solid var(--gray-200);
        }

        .preview-header {
            border-bottom: 2px solid var(--red);
            padding-bottom: 15px;
            margin-bottom: 15px;
        }

        .preview-badge {
            font-size: 20px;
            font-weight: 700;
            color: var(--red);
            text-transform: uppercase;
        }

        .preview-body {
            padding: 15px 0;
        }

        .preview-footer {
            border-top: 1px dashed var(--gray-300);
            padding-top: 15px;
        }

        .btn_bg_secondary {
            background: var(--white);
            border: 1px solid var(--gray-300);
            color: var(--gray-700);
        }

        .btn_bg_secondary:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
            transform: translateY(-2px);
        }

        .form-group.focused label {
            color: var(--red);
        }

        .position-fixed {
            position: fixed;
        }

        /* Tooltip */
        [data-bs-toggle="tooltip"] {
            cursor: help;
        }
    </style>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-settings.blade.php ENDPATH**/ ?>