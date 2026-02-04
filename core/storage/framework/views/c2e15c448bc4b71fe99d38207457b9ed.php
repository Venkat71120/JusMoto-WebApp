<div class="modal fade" id="delete_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
     aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content p_20">
            <div class="d-flex align-items-center justify-content-between">
                <h5 class="page-heading m_0" id="staticBackdropLabel"><?php echo e(__("Delete Account")); ?></h5>
                <button type="button" class="btn_close" data-bs-dismiss="modal" aria-label="Close"> <i
                        class="icon-base ti tabler-x"></i> </button>
            </div>
            <form  action="<?php echo e(route('client.account.delete')); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <div class="mt_12">
                    <div class="amount-details">
                        <div class="custom_input_wrapper delete-account">
                            <?php
                                $all_reasons=App\Models\Backend\Reason::all();
                            ?>
                            <label for="input_5" class="custom-label mb-10"><?php echo e(__('Select a Reason')); ?></label>
                            <select name="reason_id" id="input_5" class="custom_input">
                                <option value=""><?php echo e(__("Select Reason")); ?></option>
                                <?php if($all_reasons?->count() > 0): ?>
                                    <?php $__currentLoopData = $all_reasons; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $reason): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($reason->id); ?>" <?php echo e(old('reason_id') == $reason->id ? 'selected' : ''); ?>>
                                            <?php echo e($reason->title); ?>

                                        </option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>
                            </select>

                        </div>
                        <div class="custom_input_wrapper">
                            <label for="des" class="form-label"><?php echo e(__('Description')); ?></label>
                            <textarea name="description" id="des"
                                      class="custom_input w-100 h-25"
                                      placeholder="Enter your Description"
                                      rows="3"><?php echo e(old('description')); ?></textarea>
                        </div>
                        <div class="custom_input_wrapper">
                            <label for="password" class="form-label"><?php echo e(__('Current Password')); ?></label>
                            <div class="relative_wrapper">
                                <input type="password" name="password" id="password" class="custom_input w-100" value="<?php echo e(old('password')); ?>" placeholder="Enter your Current Password">
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt_12 d-flex justify-content-end">
                    <button class="btn_primary"><?php echo e(__('Delete')); ?></button>
                </div>
            </form>
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/delete-account-modal.blade.php ENDPATH**/ ?>