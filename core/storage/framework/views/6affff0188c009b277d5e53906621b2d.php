<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Login Register Settings')); ?>

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
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <h2 class="dashboard__card__header__title mb-3"><?php echo e(__('Login Register Settings')); ?></h2>
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
                <form action="<?php echo e(route('admin.login.register.page.settings')); ?>" method="POST" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <!--register page start -->
                    <!--register page start -->
                    <div class="form__input__single">
                        <label for="register_page_title" class="form__input__single__label"><?php echo e(__('Register Page Title')); ?></label>
                        <input type="text" name="register_page_title"  class="form-control" value="<?php echo e(get_static_option('register_page_title')); ?>" id="register_page_title">
                    </div>
                    <div class="form__input__single mb-3">
                        <label for="register_page_button" class="form__input__single__label"><?php echo e(__('Register Button ')); ?></label>
                        <input type="text" name="register_page_button"  class="form-control" value="<?php echo e(get_static_option('register_page_button')); ?>" id="register_page_description">
                    </div>

                    <div class="upload-img mt-4">
                        <div class="media-upload-btn-wrapper">
                            <div class="img-wrap">
                                <?php echo render_attachment_preview_for_admin(get_static_option('register_page_image') ?? ''); ?>

                            </div>
                            <input type="hidden" name="register_page_image">
                            <button type="button" class="btn btn-info media_upload_form_btn"
                                    data-btntitle="<?php echo e(__('Select Image')); ?>"
                                    data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                    data-bs-toggle="modal"
                                    data-bs-target="#media_upload_modal">
                                <?php echo e(__('Upload Register Image')); ?>

                            </button>
                            <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                            <small><?php echo e(__('recommended size 810x450')); ?></small>
                        </div>
                    </div>
                    <!--register page end -->

                    <div class="form__input__single">
                        <label for="login_form_title" class="form__input__single__label"><?php echo e(__('Login Form Title')); ?></label>
                        <input type="text" name="login_form_title"  class="form-control" value="<?php echo e(get_static_option('login_form_title')); ?>" id="login_form_title">
                    </div>

                    <div class="form__input__single">
                        <label for="login_form_button" class="form__input__single__label"><?php echo e(__('Login Form Button')); ?></label>
                        <input type="text" name="login_form_button"  class="form-control" value="<?php echo e(get_static_option('login_form_button')); ?>" id="login_form_button">
                    </div>
                    <div class="upload-img mt-4">
                        <div class="media-upload-btn-wrapper">
                            <div class="img-wrap">
                                <?php echo render_attachment_preview_for_admin(get_static_option('login_page_image') ?? ''); ?>

                            </div>
                            <input type="hidden" name="login_page_image">
                            <button type="button" class="btn btn-info media_upload_form_btn"
                                    data-btntitle="<?php echo e(__('Select Image')); ?>"
                                    data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                    data-bs-toggle="modal"
                                    data-bs-target="#media_upload_modal">
                                <?php echo e(__('Upload Login Image')); ?>

                            </button>
                            <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                            <small><?php echo e(__('recommended size 810x450')); ?></small>
                        </div>
                    </div>

                    <?php
                        $all_pages = \App\Models\Backend\Page::select('id','title','slug')->latest()->get();
                    ?>

                    <div class="form__input__single">
                        <label for="register_buyer_title" class="form__input__single__label"><?php echo e(__('Set Terms & Condition')); ?></label>
                        <select name="select_terms_condition_page" id="select_terms_condition_page" class="form-control select2_activation">
                            <option value=""><?php echo e(__('Select Page')); ?></option>
                            <?php $__currentLoopData = $all_pages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $page): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option <?php if(get_static_option('select_terms_condition_page') == $page->slug ): ?> selected <?php endif; ?> value="<?php echo e($page->slug); ?>"><?php echo e($page->title); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>

                    <div class="form__input__single d-grid mt-3">
                        <label for="register_page_social_login_show_hide"><strong><?php echo e(__('Social Login register page show/hide')); ?></strong></label>
                        <div class="switch_box style_7">
                            <input type="checkbox" name="register_page_social_login_show_hide"  <?php if(!empty(get_static_option('register_page_social_login_show_hide'))): ?> checked <?php endif; ?>>
                            <label></label>
                        </div>
                        <small class="form-text text-muted">  <?php echo e(__('Enable, means Frontend register page show social login')); ?> </small>
                    </div>

                    <div class="form__input__single">
                        <label for="recaptcha_2_site_key" class="form__input__single__label"><?php echo e(__('Google Recaptcha 2 (Site Key)')); ?> </label>
                        <input type="text" name="recaptcha_2_site_key"  class="form-control" value="<?php echo e(get_static_option('recaptcha_2_site_key')); ?>">
                    </div>
                    <?php if(isset($isDemoMiddlewareIsEnabled)): ?>
                        <div class="form__input__single">
                            <label for="recaptcha_2_secret_key" class="form__input__single__label"><?php echo e(__('Google Recaptcha 2 (Secret Key)')); ?> </label>
                            <input type="text" name="recaptcha_2_secret_key"  class="form-control" value="Your secret key is hidden in demo" readonly>
                        </div>
                    <?php else: ?>
                        <div class="form__input__single">
                            <label for="recaptcha_2_secret_key" class="form__input__single__label"><?php echo e(__('Google Recaptcha 2 (Secret Key)')); ?> </label>
                            <input type="text" name="recaptcha_2_secret_key"  class="form-control" value="<?php echo e(get_static_option('recaptcha_2_secret_key')); ?>">
                        </div>
                    <?php endif; ?>


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
    <?php if (isset($component)) { $__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e)): ?>
<?php $attributes = $__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e; ?>
<?php unset($__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e)): ?>
<?php $component = $__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e; ?>
<?php unset($__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e); ?>
<?php endif; ?>
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
            });
        }(jQuery));
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/page-settings/login-register-settings.blade.php ENDPATH**/ ?>