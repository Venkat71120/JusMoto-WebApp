<table class="dataTablesExample table-responsive">
    <thead>
    <th><?php echo e(__('ID')); ?></th>
    <th><?php echo e(__('Order ID')); ?></th>
    <th><?php echo e(__('Client Info')); ?></th>
    <th><?php echo e(__('Fine Type')); ?></th>
    <th><?php echo e(__('Fine Amount')); ?></th>
    <th><?php echo e(__('Refunded Amount')); ?></th>
    <th><?php echo e(__('Refunded Order Status')); ?></th>
    <th><?php echo e(__('Action')); ?></th>

    </thead>
    <tbody>
    <?php $__currentLoopData = $refundedOrders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($data->id); ?></td>
            <td><?php echo e($data->order_id); ?></td>
            <td>
                <div class="table_customer">
                    <div class="table_customer__flex">
                        <div class="table_customer__contents">
                            <h6 class="table_customer__title"><?php echo e(__('Name:')); ?> <?php echo e($data->user?->first_name); ?> </h6>
                            <h6 class="table_customer__title"><?php echo e(__('Email:')); ?> <?php echo e($data->user?->email); ?></h6>
                        </div>
                    </div>
                </div>
            </td>
            <td><?php echo e($data->fine_type); ?></td>
            <td><?php echo e($data->fine_amount); ?></td>
            <td>
                <div class="table_customer">
                    <div class="table_customer__flex">
                        <div class="table_customer__contents">
                            <h6 class="table_customer__title"><?php echo e(__('Refunded Amount:')); ?> <?php echo e(float_amount_with_currency_symbol($data->amount)); ?> </h6>
                        </div>
                    </div>
                </div>
            </td>
 
            <td>
                <div class="d-flex" id="refunded-order-status">
                    <span class="me-2"><?php if (isset($component)) { $__componentOriginalb965ae08d50c6aead92b7e7fe77bab8e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb965ae08d50c6aead92b7e7fe77bab8e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.refunded-order-status','data' => ['status' => $data->status]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.refunded-order-status'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($data->status)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb965ae08d50c6aead92b7e7fe77bab8e)): ?>
<?php $attributes = $__attributesOriginalb965ae08d50c6aead92b7e7fe77bab8e; ?>
<?php unset($__attributesOriginalb965ae08d50c6aead92b7e7fe77bab8e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb965ae08d50c6aead92b7e7fe77bab8e)): ?>
<?php $component = $__componentOriginalb965ae08d50c6aead92b7e7fe77bab8e; ?>
<?php unset($__componentOriginalb965ae08d50c6aead92b7e7fe77bab8e); ?>
<?php endif; ?></span>
                    <span >
                        <button type="button" class="cmnBtn btn_5 btn_bg_warning
                        btnIcon radius-5 refunded_order_status_change_modal"
                                data-order_id="<?php echo e($data->id); ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#RefundedOrderStatusChangeModal">
                            <i class="las la-pen"></i>
                        </button>
                    </span>
               </div>
            </td>
            <td>
                <div class="d-flex">

                    <a href="<?php echo e(route('admin.refunded-order.details', $data->id)); ?>" class="cmnBtn btn_5 btn_bg_info radius-5 me-2">
                        <?php echo e(__('View')); ?>

                    </a>
                    <a href="<?php echo e(route('admin.main.order.details', $data->order_id)); ?>" class="cmnBtn btn_5 btn_bg_info radius-5">
                        <?php echo e(__('Order Info')); ?>

                    </a>
                </div>
        </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </tbody>
</table>
<div class="custom_pagination mt-5 d-flex justify-content-end">
    <?php echo e($refundedOrders->links()); ?>

</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/refunded-list/search-refunded-order.blade.php ENDPATH**/ ?>