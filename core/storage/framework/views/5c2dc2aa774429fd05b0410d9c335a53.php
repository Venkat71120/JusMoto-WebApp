<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-6">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label"><?php echo e(__('Name')); ?> <span class="text-danger">*</span></label>
                <input type="text" class="form__control radius-5" name="name" id="name" value="<?php echo e(old('name')); ?>" placeholder="<?php echo e(__('Add name')); ?>">
            </div>
            <div class="col-lg-2 mt-2">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            <img src="<?php echo e(asset('assets/frontend/img/gallery/upload_image.png')); ?>" alt="images" class="w-100">
                        </div>
                        <input type="hidden" name="image">
                        <button type="button" class="btn btn-info media_upload_form_btn"
                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            <?php echo e(__('Upload Fuel Type Image')); ?>

                        </button>
                        <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                        <small><?php echo e(__('recommended size 810x450')); ?></small>
                    </div>
                </div>
            </div>
           
            <!-- submit buttons -->
            <div  class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex gap-3">
                    <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type"><?php echo e(__('Add Fuel')); ?></button>
                </div>
            </div>
        </div>

    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/fual/fual-general-info.blade.php ENDPATH**/ ?>