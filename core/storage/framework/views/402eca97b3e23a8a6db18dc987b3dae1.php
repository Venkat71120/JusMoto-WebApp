
<?php 
$id = isset($id) ? $id : null; 
$name = 'image'; 
$title = __('Signature Image');
$dimentions = '200x200';
?>

<div class="form__input__single mt-2">
    <?php $image_upload_btn_label = __('Upload Image'); ?>
    <div class="media-upload-btn-wrapper">
        <div class="img-wrap">
            <?php
                $profile_img = get_attachment_image_by_id($id,null,true);
            ?>
            <?php if(!empty($profile_img)): ?>
                <div class="attachment-preview">
                    <div class="thumbnail">
                        <div class="centered">
                            <img class="avatar user-thumb" src="<?php echo e($profile_img['img_url']); ?>" >
                        </div>
                    </div>
                </div>
                <?php $image_upload_btn_label = __('Change Image'); ?>
            <?php endif; ?>
        </div>
        <input type="hidden" name="<?php echo e($name); ?>" value="<?php echo e($id); ?>">
        <button type="button" class="cmnBtn btn_5 btn_bg_secondary radius-5 media_upload_form_btn"
                data-btntitle="<?php echo e(__('Select Image')); ?>"
                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                data-imgid="<?php echo e(auth()->user()->image); ?>"
                data-bs-toggle="modal"
                data-bs-target="#media_upload_modal">
            <?php echo e(__($image_upload_btn_label)); ?>

        </button>
    </div>
    <small class="info-text"><?php echo e(__("Recommended Image Size $dimentions")); ?></small>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/fields/image-upload.blade.php ENDPATH**/ ?>