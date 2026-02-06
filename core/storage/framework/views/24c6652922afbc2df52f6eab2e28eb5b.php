<?php $__env->startSection('site-title', __('Delivery Charge settings')); ?>
<?php $__env->startSection('content'); ?>
    <div class="dashboard__card">
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
        <div class="dashboard__card__header p-4">
            <h3 class="dashboard__card__title"><?php echo e(__('Delivery Charge settings')); ?></h3>
        </div>
        <div class="dashboard__card__body custom__form mt-4 p-4">
            <form action="<?php echo e(route('admin.delivery-charge.settings')); ?>" method="post" class="row">
                <?php echo csrf_field(); ?>

                <?php echo method_field('PUT'); ?>
                <div class="col-xxl-6">
                    <div class="form-group row">
                        <label for="delivery_charge_system" class="col-md-4"><?php echo e(__('Delivery Charge system')); ?>

                            <span id="enable-info-about-tax-system"> <i class="las la-info-circle"></i></span>
                        </label>
                    </div>

                    <div class="col-md-12 p-0 m-0 mt-3" id="advance_delivery_charge_system_settings">
                        <div class="form-group row">
                            <div class="col-md-4">
                                <select id="delivery_charge_system" name="delivery_charge_system" class="form-control">
                                    <option <?php echo e(get_static_option('delivery_charge_system') == 'flat' ? 'selected' : ''); ?> value="flat"> <?php echo e(__('Flat')); ?> </option>
                                    <option <?php echo e(get_static_option('delivery_charge_system') == 'quantity' ? 'selected' : ''); ?> value="quantity"> <?php echo e(__('Quantity')); ?> </option>
                                </select>
                            </div>
                        </div>

                        <div class="amount_section mt-4">
                            <label for="delivery_charge_round_at_subtotal" class="col-md-4"><?php echo e(__('Delivery Charge')); ?></label>
                            <div class="col-md-4">
                                <label for="delivery_charge" class="form-check-label">
                                    <input name="delivery_charge" id="delivery_charge" type="number" class="form-control" value="<?php echo e(get_static_option('delivery_charge')); ?>" placeholder="<?php echo e(__('0.00')); ?>">
                                </label>
                            </div>
                        </div>

                    </div>
                    <div class="form-group mt-4">
                        <button type="submit" class="cmnBtn btn_5 radius-5  btn_bg_blue"><?php echo e(__('Update Delivery Charge Settings')); ?></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script>
       
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/DeliveryCharge\resources/views/backend/settings.blade.php ENDPATH**/ ?>