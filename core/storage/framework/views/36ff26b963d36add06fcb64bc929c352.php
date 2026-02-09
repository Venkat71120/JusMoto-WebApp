<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label"><?php echo e(__('Name')); ?> <span class="text-danger">*</span></label>
                <input type="text" class="form__control radius-5"  name="name" id="name" value="<?php echo e($brand->name); ?>" placeholder="<?php echo e(__('Add brand')); ?>">
            </div>

           

            <!--single image -->
            <div class="col-lg-12 mt-3">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            <?php echo render_attachment_preview_for_admin($brand->image ?? ''); ?>

                        </div>
                        <input type="hidden" name="image" value="<?php echo e($brand->image ?? ''); ?>">
                        <button type="button" class="btn btn-info media_upload_form_btn"
                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            <?php echo e(__('Upload Main Image')); ?>

                        </button>
                        <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                        <small><?php echo e(__('recommended size 810x450')); ?></small>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

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
    <?php if(!empty(get_static_option('google_map_settings_on_off'))): ?>
        <?php if (isset($component)) { $__componentOriginalf10e56622ca73536d243eb7fd71c2d29 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalf10e56622ca73536d243eb7fd71c2d29 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.map.google-map-api-key-set','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('map.google-map-api-key-set'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalf10e56622ca73536d243eb7fd71c2d29)): ?>
<?php $attributes = $__attributesOriginalf10e56622ca73536d243eb7fd71c2d29; ?>
<?php unset($__attributesOriginalf10e56622ca73536d243eb7fd71c2d29); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalf10e56622ca73536d243eb7fd71c2d29)): ?>
<?php $component = $__componentOriginalf10e56622ca73536d243eb7fd71c2d29; ?>
<?php unset($__componentOriginalf10e56622ca73536d243eb7fd71c2d29); ?>
<?php endif; ?>
        <?php if (isset($component)) { $__componentOriginal7b7c69c1002f0c5ef5d6640701b5da90 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7b7c69c1002f0c5ef5d6640701b5da90 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.map.google-map-listing-js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('map.google-map-listing-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal7b7c69c1002f0c5ef5d6640701b5da90)): ?>
<?php $attributes = $__attributesOriginal7b7c69c1002f0c5ef5d6640701b5da90; ?>
<?php unset($__attributesOriginal7b7c69c1002f0c5ef5d6640701b5da90); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal7b7c69c1002f0c5ef5d6640701b5da90)): ?>
<?php $component = $__componentOriginal7b7c69c1002f0c5ef5d6640701b5da90; ?>
<?php unset($__componentOriginal7b7c69c1002f0c5ef5d6640701b5da90); ?>
<?php endif; ?>
    <?php endif; ?>
    >
<?php $__env->stopSection(); ?>



<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/brand/edit-brand-details.blade.php ENDPATH**/ ?>