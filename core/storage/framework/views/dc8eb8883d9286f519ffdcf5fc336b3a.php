<!-- Country Edit Modal -->
<div class="modal fade" id="editCountryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"><?php echo e(__('Edit Department')); ?></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="<?php echo e(route('admin.department.edit')); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="department_id" id="department_id" value="">
                <div class="modal-body">
                    <div class="single-input mb-3">
                        <label for="title" class="label-title"><?php echo e(__('Department')); ?></label>
                        <input type="text" name="edit_name" id="edit_name" value="<?php echo e(old('name')); ?>" placeholder="<?php echo e(__('Enter a department name')); ?>" class="form-control" >
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cmnBtn btn_5 btn_bg_danger radius-5" data-bs-dismiss="modal"><?php echo e(__('Close')); ?></button>
                    <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5"><?php echo e(__('update')); ?></button>
                </div>
            </form>
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/SupportTicket\resources/views/backend/department/edit-modal.blade.php ENDPATH**/ ?>