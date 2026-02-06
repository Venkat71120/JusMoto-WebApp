<div class="compare-profile-and-identity">
    <div class="row g-4 gy-5">
        <div class="col-lg-6">
            <div class="user-profile userProfileDetails">
                <div class="userProfileDetails__header">
                    <h5 class="userProfileDetails__title"><?php echo e(__('User Profile Info')); ?></h5>
                    <input type="hidden" id="user_id_for_verified_status" value="<?php echo e($user_details->id); ?>">
                </div>
                <div class="userDetails__wrapper userProfile__details mt-3">
                    <div class="userProfile__details__thumb mb-3 h-25 w-25">
                        <?php if(!empty($user_details->image)): ?>
                            <?php echo render_image_markup_by_attachment_id($user_details->image, '', 'thumb'); ?>

                        <?php else: ?>
                            <?php if (isset($component)) { $__componentOriginalc1ff17f27b163a217d6db98cc98cfb19 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc1ff17f27b163a217d6db98cc98cfb19 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.image.user-no-image','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('image.user-no-image'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc1ff17f27b163a217d6db98cc98cfb19)): ?>
<?php $attributes = $__attributesOriginalc1ff17f27b163a217d6db98cc98cfb19; ?>
<?php unset($__attributesOriginalc1ff17f27b163a217d6db98cc98cfb19); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc1ff17f27b163a217d6db98cc98cfb19)): ?>
<?php $component = $__componentOriginalc1ff17f27b163a217d6db98cc98cfb19; ?>
<?php unset($__componentOriginalc1ff17f27b163a217d6db98cc98cfb19); ?>
<?php endif; ?>
                        <?php endif; ?>
                    </div>
                    <p class="userDetails__wrapper__item">
                        <strong><?php echo e(__('Full Name:')); ?></strong> <?php echo e($user_details->first_name.' '.$user_details->last_name); ?>

                    </p>
                    <p class="userDetails__wrapper__item">
                        <strong><?php echo e(__('Username:')); ?></strong> <?php echo e($user_details->username ?? ''); ?>

                    </p>
                    <p class="userDetails__wrapper__item">
                        <strong><?php echo e(__('Email:')); ?></strong> <?php echo e($user_details->email ?? ''); ?>

                    </p>
                    <p class="userDetails__wrapper__item">
                        <strong><?php echo e(__('Phone:')); ?></strong> <?php echo e($user_details->phone ?? ''); ?>

                    </p>

                </div>
            </div>
        </div>

        <div class="col-lg-6">
        
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/user/profile-and-identity-compare.blade.php ENDPATH**/ ?>