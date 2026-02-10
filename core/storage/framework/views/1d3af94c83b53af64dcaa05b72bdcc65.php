<div class="modal fade" id="car_conflict_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
     aria-labelledby="carConflictLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content p_20">
            <div class="d-flex align-items-center justify-content-between">
                <h5 class="page-heading m_0" id="carConflictLabel"><?php echo e(__("Car Conflict Detected")); ?></h5>
                <button type="button" class="btn_close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="icon-base ti tabler-x"></i>
                </button>
            </div>
            <div class="mt_12">
                <p><?php echo e(__('You have a car selected before login and another in your account. Which one do you want to keep?')); ?></p>
                <form method="POST" action="<?php echo e(route('car.merge.choice')); ?>">
                    <?php echo csrf_field(); ?>
                    <div class="d-flex justify-content-between mt_12 gap-2">
                        <button type="submit" name="choice" value="keep_user_car" class="btn_gray">
                            <?php echo e(__('Keep My Account Car')); ?>

                        </button>
                        <button type="submit" name="choice" value="use_guest_car" class="btn_primary">
                            <?php echo e(__('Use My Previously Selected Car')); ?>

                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/myCar/merge_confirm_modal.blade.php ENDPATH**/ ?>