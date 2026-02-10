<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Maintain Page Settings')); ?>

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
                <h2 class="dashboard__card__header__title mb-3"><?php echo e(__('Maintain Page Settings')); ?></h2>
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
                <form action="<?php echo e(route('admin.maintains.page.update.settings')); ?>" method="POST" class="validateForm" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="form__input__flex">
                        <div class="form__input__single">
                            <label for="title" class="form__input__single__label"><?php echo e(__('Title')); ?></label>
                            <input type="text" class="form__control radius-5" name="maintain_page_title" id="maintain_page_title" value="<?php echo e(get_static_option('maintain_page_title')); ?>" placeholder="<?php echo e(__('Title')); ?>">
                        </div>
                        <div class="form__input__single">
                            <label for="maintain_page_description" class="form__input__single__label"><?php echo e(__('Description')); ?></label>
                            <textarea class="form__control" name="maintain_page_description" id="maintain_page_description"><?php echo e(get_static_option('maintain_page_description')); ?></textarea>
                        </div>
                        <div class="form__input__single">
                            <label for="maintenance_duration" class="form__input__single__label"><?php echo e(__('Maintenance Duration')); ?></label>
                           <input type="date" class="form-control" id="maintenance_duration" value="<?php echo e(get_static_option('maintenance_duration')); ?>" name="maintenance_duration" placeholder="<?php echo e(__('Maintenance Duration')); ?>">
                        </div>

                        <div class="form__input__single">
                            <label for="og_meta_image" class="form__input__single__label"><?php echo e(__('Logo')); ?></label>
                            <div class="media-upload-btn-wrapper">
                                <div class="img-wrap">
                                    <?php
                                        $maintenance_image = get_attachment_image_by_id(get_static_option('maintain_page_logo'),null,true);
                                        $image_btn_label = __('Upload Image');
                                    ?>
                                    <?php if(!empty($maintenance_image)): ?>
                                        <div class="attachment-preview">
                                            <div class="thumbnail">
                                                <div class="centered">
                                                    <img class="avatar user-thumb" src="<?php echo e($maintenance_image['img_url']); ?>" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <input type="hidden" id="maintain_page_logo" name="maintain_page_logo" value="<?php echo e(get_static_option('maintain_page_logo')); ?>">
                                <button type="button" class="cmnBtn btn_5 btn_bg_secondary radius-5 media_upload_form_btn"
                                        data-btntitle="<?php echo e(__('Select Image')); ?>"
                                        data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                        data-bs-toggle="modal"
                                        data-bs-target="#media_upload_modal"><?php echo e(__('Change Image')); ?>

                                </button>
                            </div>
                            <small class="form-text text-muted"><?php echo e(__('allowed image format: jpg,jpeg,png, Recommended image size 150x150')); ?></small>
                        </div>


                        <!-- background img-->
                        <div class="form__input__single">
                            <label for="og_meta_image" class="form__input__single__label"><?php echo e(__('Background Image')); ?></label>
                            <div class="media-upload-btn-wrapper">
                                <div class="img-wrap">
                                    <?php
                                        $maintain_page_background_image = get_attachment_image_by_id(get_static_option('maintain_page_background_image'),null,true);
                                        $maintain_page_background_image_btn_label = __('Upload Image');
                                    ?>
                                    <?php if(!empty($maintenance_image)): ?>
                                        <div class="attachment-preview">
                                            <div class="thumbnail">
                                                <div class="centered">
                                                    <img class="avatar user-thumb" src="<?php echo e($maintain_page_background_image['img_url']); ?>" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <input type="hidden" id="maintain_page_background_image" name="maintain_page_background_image" value="<?php echo e(get_static_option('maintain_page_background_image')); ?>">
                                <button type="button" class="cmnBtn btn_5 btn_bg_secondary radius-5 media_upload_form_btn"
                                        data-btntitle="<?php echo e(__('Select Image')); ?>"
                                        data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                        data-bs-toggle="modal"
                                        data-bs-target="#media_upload_modal">
                                    <?php echo e(__('Change Image')); ?>

                                </button>
                            </div>
                            <small class="form-text text-muted"><?php echo e(__('allowed image format: jpg,jpeg,png, Recommended image size 1920x600')); ?></small>
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
        (function ($) {
            "use strict";
            $(document).ready(function () {
                $("#maintenance_duration").flatpickr({
                    dateFormat: "Y-m-d",
                });
            });
        })(jQuery)
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/maintain-page/maintain-page-index.blade.php ENDPATH**/ ?>