<div class="col-xl-6 col-lg-6 col-md-6 col-12 mt-4">
    <div class="customer__details__author__item p-2 radius-10">
        <div class="customer__details__author__item__header">
            <div class="customer__details__author__item__header__flex">
                <div class="customer__details__author__item__header__left">
                    <h4 class="customer__details__author__item__title"><?php echo e(__('Order Details')); ?></h4>
                </div>
            </div>
        </div>
        <div class="customer__details__author__item__inner border_top_1 top_15">
            <div class="customer__account__details">
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Order ID:')); ?></strong>
                        <span><?php echo e($order->id); ?></span>
                    </div>
                </div> 
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Booking Date:')); ?></strong>
                        <span><?php echo e($order->date); ?></span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Schedule:')); ?></strong>
                        <span><?php echo e($order->schedule); ?></span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Delivery_mode:')); ?></strong>
                        <span><?php echo e($order->delivery_mode); ?></span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Status:')); ?></strong>
                        <?php if (isset($component)) { $__componentOriginal2709abd618c7f840ceb579b31ba995da = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal2709abd618c7f840ceb579b31ba995da = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.main-order-status','data' => ['status' => $order->status]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.main-order-status'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($order->status)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal2709abd618c7f840ceb579b31ba995da)): ?>
<?php $attributes = $__attributesOriginal2709abd618c7f840ceb579b31ba995da; ?>
<?php unset($__attributesOriginal2709abd618c7f840ceb579b31ba995da); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal2709abd618c7f840ceb579b31ba995da)): ?>
<?php $component = $__componentOriginal2709abd618c7f840ceb579b31ba995da; ?>
<?php unset($__componentOriginal2709abd618c7f840ceb579b31ba995da); ?>
<?php endif; ?>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Payment Gateway:')); ?></strong>
                        <span><?php echo e(ucwords(str_replace("_", " ", $order->payment_gateway))); ?></span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <?php
                            $flag="";
                            if($order->payment_status== 0) {
                                $flag="pending";
                            }
                            elseif($order->payment_status== 1) {
                                $flag="completed";
                            }    

                        ?>
                        <strong><?php echo e(__('Payment Status:')); ?></strong>
                        <span class="text-bold"><?php echo e(ucwords(str_replace("_", " ", $flag))); ?></span>
                    </div>
                </div>
                <div class="customer__account__details__item">
                    <div class="customer__account__details__item__flex">
                        <strong><?php echo e(__('Invoice No:')); ?></strong>
                        <span><?php echo e($order->invoice_number); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-details-step-01.blade.php ENDPATH**/ ?>