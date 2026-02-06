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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
<div class="row g-4 mt-0">
    <div class="col-xl-6 col-lg-6 mt-0">
        <div class="dashboard__card bg__white padding-20 radius-10">
            <h2 class="dashboard__card__header__title mb-3"><?php echo e(__('Basic Settings')); ?></h2>
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
            <form action="<?php echo e(route('admin.general.basic.settings')); ?>" method="POST" class="validateForm" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <div class="form__input__flex">
                    <div class="form__input__single">
                        <label for="site_title" class="form__input__single__label"><?php echo e(__('Site Title')); ?></label>
                        <input type="text"  name="site_title" id="site_title" value="<?php echo e(get_static_option('site_title')); ?>"  class="form__control radius-5">
                    </div>

                    <div class="form__input__single">
                        <label for="site_tag_line" class="form__input__single__label"><?php echo e(__('Site Tag Line')); ?></label>
                        <input type="text" name="site_tag_line"  class="form__control radius-5" value="<?php echo e(get_static_option('site_tag_line')); ?>" id="site_tag_line">
                    </div>

                    <div class="form__input__single">
                        <label for="site_footer_copyright" class="form__input__single__label"><?php echo e(__('Footer Copyright')); ?></label>
                        <input type="text" name="site_footer_copyright"  class="form__control radius-5" value="<?php echo e(get_static_option('site_footer_copyright')); ?>" id="site_footer_copyright">
                        <strong class="form-text text-info"><?php echo e(__('{copy} will replace by ©; and {year} will be replaced by current year.')); ?></strong>
                    </div>

                    <div class="form__input__single">
                        <label for="site_canonical_url_type" class="form__input__single__label"><?php echo e(__('Canonical URL Type')); ?></label>
                        <select name="site_canonical_url_type" class="form__control radius-5">
                            <option <?php if(get_static_option('site_canonical_url_type') === 'self'): ?> selected <?php endif; ?> value="self"><?php echo e(__('Self')); ?></option>
                            <option <?php if(get_static_option('site_canonical_url_type') === 'alternative'): ?> selected <?php endif; ?> value="alternative"><?php echo e(__('Alternative')); ?></option>
                        </select>
                    </div>

                    <div class="form__input__single d-none">
                        <label for="language_select_option" class="form__input__single__label">
                            <strong><?php echo e(__('Language Select Show or Hide')); ?></strong>
                        </label>
                        <label class="switch_box style_1 yes">
                            <input type="checkbox" name="language_select_option"  <?php if(!empty(get_static_option('language_select_option'))): ?> checked <?php endif; ?> id="language_select_option">
                            <span class="slider onoff"></span>
                        </label>
                    </div>

                    <div class="form__input__single d-grid">
                        <label for="user_email_verify_enable_disable"><strong><?php echo e(__('User Email Verify')); ?></strong></label>
                        <div class="switch_box style_7">
                            <input type="checkbox"  name="user_email_verify_enable_disable" id="user_email_verify_enable_disable" <?php if(!empty(get_static_option('user_email_verify_enable_disable'))): ?> checked <?php endif; ?>>
                            <label></label>
                        </div>
                        <strong class="form-text text-info"><?php echo e(__('enable, means user must have to verify their email account in order to access his/her dashboard.')); ?></strong>
                    </div>

                    <div class="form__input__single mt-3 d-grid">
                        <label for="site_maintenance_mode"><strong><?php echo e(__('Maintenance Mode')); ?></strong></label>
                        <div class="switch_box style_7">
                            <input type="checkbox" name="site_maintenance_mode"  <?php if(!empty(get_static_option('site_maintenance_mode'))): ?> checked <?php endif; ?> id="site_maintenance_mode">
                            <label></label>
                        </div>
                    </div>
                    <div class="form__input__single d-grid">
                        <label for="site_google_captcha_enable"><strong><?php echo e(__('Enable/Disable Google Captcha')); ?></strong></label>
                        <div class="switch_box style_7">
                            <input type="checkbox" name="site_google_captcha_enable"  <?php if(!empty(get_static_option('site_google_captcha_enable'))): ?> checked <?php endif; ?>>
                            <label></label>
                        </div>
                    </div>
                    <div class="form__input__single d-grid">
                        <label for="site_force_ssl_redirection"><strong><?php echo e(__('Enable Force SSL Redirection')); ?></strong></label>
                         <div class="switch_box style_7">
                            <input type="checkbox" name="site_force_ssl_redirection"  <?php if(!empty(get_static_option('site_force_ssl_redirection'))): ?> checked <?php endif; ?>>
                            <label></label>
                        </div>
                    </div>


                    <div class="form__input__single">
                        <label for="site_address" class="form__input__single__label"><?php echo e(__('Site Address')); ?></label>
                        <input type="text" name="site_address"  class="form__control radius-5" value="<?php echo e(get_static_option('site_address')); ?>" id="site_address">
                    </div>

                    <div class="form__input__single">
                        <label for="site_email" class="form__input__single__label"><?php echo e(__('Site Email')); ?></label>
                        <input type="text" name="site_email"  class="form__control radius-5" value="<?php echo e(get_static_option('site_email')); ?>" id="site_email">
                    </div>

                    <div class="form__input__single">
                        <label for="site_phone" class="form__input__single__label"><?php echo e(__('Site Phone')); ?></label>
                        <input type="text" name="site_phone"  class="form__control radius-5" value="<?php echo e(get_static_option('site_phone')); ?>" id="site_phone">
                    </div>

                </div>
                <div class="btn_wrapper mt-4">
                    <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5"><?php echo e(__('Update Changes')); ?></button>
                </div>
            </form>
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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script>
        (function($){
            "use strict";
            $(document).ready(function(){
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
            });
        }(jQuery));
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/general-settings/basic.blade.php ENDPATH**/ ?>