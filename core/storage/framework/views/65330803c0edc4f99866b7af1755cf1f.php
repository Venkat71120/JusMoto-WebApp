<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Add New Plugin')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        .padding-30{
            padding: 30px;
        }
        .form-group.plugin-upload-field {
            margin-top: 60px;
        }

        .form-group.plugin-upload-field label {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 35px;
        }

        .form-group.plugin-upload-field small {
            font-size: 12px;
            margin-top: 11px;
        }

    </style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header mb-4 mt-4">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title"><?php echo e(__('Add New Plugin')); ?></h4>
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
                            <p><?php echo e(__('upload new plugin from here. if you have a plugin already but you have uploaded that plugin file again, it will override existing plugins files')); ?></p>
                        </div>
                    </div>
                </div>
                <form action="<?php echo e(route("admin.plugin.manage.new")); ?>" method="POST" class="validateForm" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="form__input__flex">
                        <div class="form__input__single plugin-upload-field">
                            <label for="file" class="form__input__single__label"><?php echo e(__('Upload Plugin File')); ?></label>
                            <input type="file" class="form__control radius-5" name="plugin_file" accept=".zip" placeholder="<?php echo e(__('upload zip file')); ?>">
                            <small class="d-block"><?php echo e(__("only zip file accepted")); ?></small>
                        </div>
                    </div>
                    <div class="btn_wrapper mt-4">
                        <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5"><?php echo e(__('Submit')); ?></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/PluginManage\Resources/views/plugin-manage/add_new.blade.php ENDPATH**/ ?>