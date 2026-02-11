<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Edit Profile')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
   <link rel="stylesheet" href="<?php echo e(asset('assets/backend/css/select2.min.css')); ?>">
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
    <div class="dashboard__body">
        <div class="dashboard__inner">
         <div class="row g-4 mt-0">
            <div class="col-xxl-6 col-lg-6 mt-3">
                <div class="dashboard__card bg__white padding-20 radius-10">
                    <div class="dashboard__card__header">
                        <h4 class="dashboard__card__header__title"><?php echo e(__('Edit Profile')); ?></h4>
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
                    <div class="dashboard__card__inner mt-4">
                        <div class="form__input">
                            <form action="<?php echo e(route('admin.profile.update')); ?>" method="POST" class="validateForm" enctype="multipart/form-data">
                                <?php echo csrf_field(); ?>
                                    <div class="form__input__flex">
                                        <div class="form__input__single">
                                            <label for="text" class="form__input__single__label"><?php echo e(__('Username')); ?></label>
                                            <input type="text" id="text" class="form__control radius-5" readonly value="<?php echo e(auth()->user()->username); ?>">
                                        </div>
                                        <div class="form__input__single">
                                            <label for="name" class="form__input__single__label"><?php echo e(__('Name')); ?><span>*</span></label>
                                            <input type="text" id="name" name="name" value="<?php echo e(auth()->user()->name); ?>" class="form__control radius-5" placeholder="<?php echo e(__('Name')); ?>">
                                        </div>
                                        <div class="form__input__single">
                                            <label for="email" class="form__input__single__label"><?php echo e(__('Email')); ?><span>*</span></label>
                                            <input type="email" id="email" name="email" value="<?php echo e(auth()->user()->email); ?>" class="form__control radius-5" placeholder="<?php echo e(__('Email')); ?>">
                                        </div>

                                        <div class="form__input__single">
                                            <label for="about" class="form__input__single__label"><?php echo e(__('About')); ?></label>
                                            <textarea type="text" id="about" name="about" value="<?php echo e(auth()->user()->about); ?>"  class="form__control radius-5" cols="100" rows="3">  <?php echo e(auth()->user()->about); ?> </textarea>
                                        </div>

                                    </div>
                                    <?php if (isset($component)) { $__componentOriginal5d0a3ec8680d4e828347e37a1d8d2ab3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5d0a3ec8680d4e828347e37a1d8d2ab3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.fields.image-upload','data' => ['name' => 'image','title' => '\'Upload Image','id' => ''.e(auth()->user()->image).'','dimentions' => 'Image Size 100x100. Only Accept: jpg,png,jpeg,webp. Size less than 2MB']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('fields.image-upload'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['name' => 'image','title' => '\'Upload Image','id' => ''.e(auth()->user()->image).'','dimentions' => 'Image Size 100x100. Only Accept: jpg,png,jpeg,webp. Size less than 2MB']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal5d0a3ec8680d4e828347e37a1d8d2ab3)): ?>
<?php $attributes = $__attributesOriginal5d0a3ec8680d4e828347e37a1d8d2ab3; ?>
<?php unset($__attributesOriginal5d0a3ec8680d4e828347e37a1d8d2ab3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal5d0a3ec8680d4e828347e37a1d8d2ab3)): ?>
<?php $component = $__componentOriginal5d0a3ec8680d4e828347e37a1d8d2ab3; ?>
<?php unset($__componentOriginal5d0a3ec8680d4e828347e37a1d8d2ab3); ?>
<?php endif; ?>

                                    <div class="btn_wrapper mt-4">
                                        <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5"><?php echo e(__('Save changes')); ?></button>
                                    </div>
                                </form>
                            </div>
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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script src="<?php echo e(asset('assets/backend/js/dropzone.js')); ?>"></script>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/auth/admin/edit-profile.blade.php ENDPATH**/ ?>