<!--Status Modal -->
<div class="modal fade" id="OrderStaffAddModal" tabindex="-1" role="dialog"
     aria-labelledby="editModal"
     aria-hidden="true">
    <form action="<?php echo e(route('admin.order.add-staff')); ?>" method="post">
        <?php echo csrf_field(); ?>
        <input type="hidden" name="id" id="order_id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModal"><?php echo e(__('Change Order Staff')); ?></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="staff_id"><?php echo e(__('Select Staff')); ?></label>
                        <input type="hidden" name="order_id" id="order_id1" value="<?php echo e($order->id); ?>" />
                        <select name="staff_id" id="staff_id">
                            <option value=""><?php echo e(__('Select Staff')); ?></option>
                            <?php $__currentLoopData = $staffs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $staff): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($staff->id); ?>"><?php echo e($staff->first_name." ".$staff->second_name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                       
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?php echo e(__('Close')); ?></button>
                    <button type="submit" class="btn btn-primary"><?php echo e(__('Save changes')); ?></button>
                </div>
            </div>
        </div>
    </form>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/add_order_staff_modal.blade.php ENDPATH**/ ?>