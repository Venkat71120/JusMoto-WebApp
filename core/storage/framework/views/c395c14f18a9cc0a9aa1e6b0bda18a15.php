<h4 class="dashboard__inner__item__header__title mt-4"><?php echo e(__('Client Location')); ?></h4>
<!-- Table Design One -->
<div class="tableStyle_one mt-4">
    <div class="table-responsive">
        <!-- Table -->
        <table class="table orderItemTable">
            <thead>
            <tr>
                <th><?php echo e(__('Address')); ?></th>
                <th><?php echo e(__('State')); ?></th>
                <th><?php echo e(__('City')); ?></th>
                <th><?php echo e(__('Area')); ?></th>
                <th><?php echo e(__('Post_Code')); ?></th>
                <th><?php echo e(__('Latitude')); ?></th>
                <th><?php echo e(__('Longitude')); ?></th>

            </tr>
            </thead>
            <tbody>
                <tr>
                    <td><?php echo e($order->OrderLocations?->address); ?></td>
                    <td><?php echo e($order->OrderLocations?->state?->state); ?></td>
                    <td><?php echo e($order->OrderLocations?->city?->city); ?></td>
                    <td><?php echo e($order->OrderLocations?->area?->area); ?></td>
                    <td><?php echo e($order->OrderLocations?->post_code); ?></td>
                    <td><?php echo e($order->OrderLocations?->latitude); ?></td>
                    <td><?php echo e($order->OrderLocations?->longitude); ?></td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</div>
<!-- End-of Table one -->
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-location-details.blade.php ENDPATH**/ ?>