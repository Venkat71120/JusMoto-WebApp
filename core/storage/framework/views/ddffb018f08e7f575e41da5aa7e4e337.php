<h4 class="dashboard__inner__item__header__title mt-4"><?php echo e(__('Orders items')); ?></h4>
<!-- Table Design One -->
<div class="tableStyle_one mt-4">
    <div class="table-responsive">
        <!-- Table -->
        <table class="table orderItemTable">
            <thead>
            <tr>
                <th><?php echo e(__('Item Id')); ?></th>
                <th><?php echo e(__('Title')); ?></th>
                <th><?php echo e(__('Type')); ?></th>
                <th><?php echo e(__('Quantity')); ?></th>
                <th><?php echo e(__('Price')); ?></th>
                <th><?php echo e(__('Total Price')); ?></th>
                <th><?php echo e(__('Action')); ?></th>
            </tr>
            </thead>
            <tbody>
            <?php $__currentLoopData = $order->orderItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($item->id); ?></td>
                    <td><?php echo e($item->service?->title); ?></td>
                    <?php
                         $flag = "";
                         if($item->type == 0)
                         {
                             $flag = __('Service');
                         }
                         else if($item->type == 1)
                         {
                             $flag = __('Product');
                         }
                    ?>
                    <td><?php echo e($flag); ?></td>
                    <td><?php echo e($item->qty); ?></td>
                    <td><?php echo e($item->price); ?></td>
                    <td><?php echo e($item->price* $item->qty); ?></td>
                    <td>   
                        <?php if($item->type == 0): ?>
                            
                            <a href="<?php echo e(route('admin.service.details', $item->service_id)); ?>" class="cmnBtn btn_5 btn_bg_info radius-5">
                               <?php echo e(__('View Info')); ?>

                            </a>
                            
                        <?php endif; ?>
                        <?php if($item->type == 1): ?>
                           
                            <a href="<?php echo e(route('admin.product.details', $item->service_id)); ?>" class="cmnBtn btn_5 btn_bg_info radius-5">
                               <?php echo e(__('View Info')); ?>

                            </a>
                           
                        <?php endif; ?>              
                    </td>

                    
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
</div>
<!-- End-of Table one -->
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-items-details.blade.php ENDPATH**/ ?>