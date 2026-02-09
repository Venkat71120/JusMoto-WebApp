<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label"><?php echo e(__('Name')); ?> <span class="text-danger">*</span></label>
                <input type="text" class="form__control radius-5"  name="name" id="name" value="<?php echo e($fual->name); ?>" placeholder="<?php echo e(__('Add Fuel Name')); ?>">
            </div>
        </div>
        <div class="col-lg-4">
        </div>
           
                <!--single image -->
        <div class="col-lg-2 mt-3">
           <div class="upload-img">
               <div class="media-upload-btn-wrapper">
                   <div class="img-wrap">
                       <?php echo render_attachment_preview_for_admin($fual->image ?? ''); ?>

                   </div>
                   <input type="hidden" name="image" value="<?php echo e($fual->image ?? ''); ?>">
                   <button type="button" class="btn btn-info media_upload_form_btn"
                           data-btntitle="<?php echo e(__('Select Image')); ?>"
                           data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                           data-bs-toggle="modal"
                           data-bs-target="#media_upload_modal">
                       <?php echo e(__('Upload Fual Image')); ?>

                   </button>
                   <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                   <small><?php echo e(__('recommended size 810x450')); ?></small>
               </div>
           </div>
        </div>

           
    </div>
  
            
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/fual/edit-fual-details.blade.php ENDPATH**/ ?>