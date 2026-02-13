<!--Status Modal -->
<div class="modal fade" id="OrderStatusChangeModal" tabindex="-1" role="dialog"
     aria-labelledby="editModal"
     aria-hidden="true">
    <form action="<?php echo e(route('admin.order.status.change')); ?>" method="post">
        <?php echo csrf_field(); ?>
        <input type="hidden" name="id" id="order_id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModal"><?php echo e(__('Change Order Status')); ?></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="status_id"><?php echo e(__('Select Status')); ?></label>
                        <select name="status_id" id="status_id" class="form-control">
                            <option value=""><?php echo e(__('Select Status')); ?></option>
                            <option value="0"><?php echo e(__('Pending')); ?></option>
                            <option value="1"><?php echo e(__('Accepted')); ?></option>
                            <option value="2"><?php echo e(__('Completed')); ?></option>
                            <option value="4"><?php echo e(__('Cancel')); ?></option>
                            <option value="5"><?php echo e(__('Declined')); ?></option>
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
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/sub-order-status-modal.blade.php ENDPATH**/ ?>