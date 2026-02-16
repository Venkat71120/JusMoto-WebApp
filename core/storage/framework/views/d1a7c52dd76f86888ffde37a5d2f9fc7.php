<div class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label"><?php echo e(__('Title')); ?> <span class="required-star">*</span></label>
                <input type="text" class="form__control radius-5" name="title" id="title" value="<?php echo e(old('title')); ?>" placeholder="<?php echo e(__('Add title')); ?>">
            </div>

            <div class="form__input__single mt-2">
                <div class="input-form input-form2 permalink_label">
                    <label for="title" class="form__input__single__label text-dark"> <?php echo e(__('Permalink')); ?>  <span class="required-star">*</span>  </label>
                    <span id="slug_show" class="display-inline"></span>
                    <span id="slug_edit" class="display-inline d-inline">
                    <button class="btn btn-warning btn-sm slug_edit_button">  <i class="las la-edit"></i> </button>
                    <input class="listing_slug form__control radius-5" name="slug" value="<?php echo e(old('slug')); ?>" id="slug" type="text">
                    <button class="btn btn-info btn-sm slug_update_button mt-2"><?php echo e(__('Update')); ?></button>
               </span>
                </div>
            </div>

            <div class="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <div class="form__input__single">
                    <label class="form__input__single__label"><?php echo e(__('Category')); ?>  <span class="required-star">*</span> </label>
                    <select name="category_id" id="category" class="select-itms select2_activation">
                        <option value=""><?php echo e(__('Select Category')); ?></option>
                        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($cat->id); ?>"><?php echo e($cat->name); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
            </div>

            <!-- Description -->
            <div class="form__input__single mt-3">
                <label class="form__input__single__label"><?php echo e(__('Description')); ?> <span class="required-star">*</span></label>
                <div class="input-form input-form2">
                    <textarea class="textarea--form" name="description" placeholder="<?php echo e(__('Type Description')); ?>" rows="8" cols="8"><?php echo e(old('description')); ?></textarea>
                </div>
            </div>

            <div class="d-flex flex-wrap gap-3">
                <!-- video url -->
                <div class="form__input__single flex-grow-1">
                    <label class="form__input__single__label"><?php echo e(__('Video Url')); ?> </label>
                    <div class="input-form input-form2">
                        <input type="text" class="form__control radius-5" name="video_url" id="video_url"  placeholder="<?php echo e(__('youtube url')); ?>">
                    </div>
                    <small class="text-danger video_url_design"><?php echo e(__('Example:')); ?> https://www.youtube.com/watch?v=IcM8_Llgxf4&t=1s </small>
                </div>

                <!-- featured services -->
                <div class="form__input__single mt-4 mx-3">
                    <div class="checkBox">
                        <label class="is_featured form__input__single__label d-flex gap-2">
                            <input class="checkBox__input effectBorder" type="checkbox" name="is_featured" id="is_featured">
                            <?php echo e(__('Is Featured')); ?>

                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!--2nd step -->
        <div class="col-lg-4">
            <!-- Price -->
            <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle"><?php echo e(__('Price')); ?> <span class="required-star">*</span></label>
                    <div class="input-form">
                        <input type="number" class="form__control radius-5" name="price" id="price" value="<?php echo e(old('price')); ?>" placeholder="<?php echo e(__('0.00')); ?>" step="0.01">
                    </div>
                </div>
            </div>

            <!-- Discount Price -->
            <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle"><?php echo e(__('Discount Price')); ?> <span class="required-star">*</span></label>
                    <div class="input-form">
                        <input type="number" class="form__control radius-5" name="discount_price" id="discount_price" value="<?php echo e(old('discount_price')); ?>" placeholder="<?php echo e(__('0.00')); ?>"  step="0.01">
                    </div>
                </div>
            </div>

            <!-- Service Duration -->
            <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle"><?php echo e(__('Duration')); ?></label>
                    <div class="input-form input-form2">
                        <input type="text" class="form__control radius-5" name="duration" id="duration" value="<?php echo e(old('duration')); ?>" placeholder="<?php echo e(__('e.g.hour,miute,second')); ?>">
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle"><?php echo e(__('Max Quantity')); ?></label>
                    <div class="input-form input-form2">
                        <input type="text" class="form__control radius-5" name="max_qty" id="max_qty" value="<?php echo e(old('max_qty')); ?>" placeholder="<?php echo e(__('Enter Max Quantity')); ?>">
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mt-3">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="images" class="w-100">
                        </div>
                        <input type="hidden" name="service_image">
                        <button type="button" class="btn btn-info media_upload_form_btn"
                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            <?php echo e(__('Upload Main Image')); ?>

                        </button>
                        <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                        <small><?php echo e(__('recommended size 810x450')); ?></small>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mt-3">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            <img src="<?php echo e(asset('assets/frontend/img/gallery/uploadeImg.png')); ?>" alt="images" class="w-100">
                        </div>
                        <input type="hidden" name="gallery_images">
                        <button type="button" class="btn btn-info media_upload_form_btn"
                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                data-mulitple="true"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            <?php echo e(__('Upload Gallery Images')); ?>

                        </button>
                        <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                        <small><?php echo e(__('recommended size 810x450')); ?></small>
                    </div>
                </div>
            </div>

            <!-- start previous / next buttons -->
            <div  class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex justify-content-end gap-3">
                    <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="nextBtn" type="button"><?php echo e(__('Next')); ?></button>
                </div>
            </div>
        </div>

    </div>
</div>

<style>
/* ===== ENHANCED CSS - PRESERVING ALL ORIGINAL FUNCTIONALITY ===== */

/* Required Star Styling */
.required-star {
    color: #e31b23;
    margin-left: 2px;
    font-size: 16px;
}

/* Form Input Styling */
.form__input__single {
    margin-bottom: 20px;
}

.form__input__single__label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
}

.form__control {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e0e0e0 !important;
    border-radius: 8px !important;
    font-size: 14px;
    transition: all 0.2s ease;
    background: #fff;
}

.form__control:focus {
    border-color: #e31b23 !important;
    outline: none;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}

.form__control::placeholder {
    color: #aaa;
    font-size: 13px;
}

/* Select2 Customization - Keeping original functionality */
.select2-container--default .select2-selection--single {
    border: 1px solid #e0e0e0 !important;
    border-radius: 8px !important;
    height: 46px !important;
    padding: 8px 0 !important;
}

.select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #333 !important;
    font-size: 14px !important;
    line-height: 28px !important;
    padding-left: 16px !important;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 44px !important;
    right: 10px !important;
}

/* Textarea Styling */
.textarea--form {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
    min-height: 150px;
    transition: all 0.2s ease;
}

.textarea--form:focus {
    border-color: #e31b23;
    outline: none;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}

/* Permalink Section */
.permalink_label {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}

#slug_show {
    color: #e31b23;
    font-weight: 500;
    font-size: 14px;
    word-break: break-all;
    background: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    display: inline-block;
    border: 1px solid #e0e0e0;
}

.slug_edit_button {
    background: #ffc107;
    border: none;
    color: #333;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-left: 8px;
}

.slug_edit_button:hover {
    background: #e0a800;
    transform: translateY(-1px);
}

.listing_slug {
    margin-top: 8px;
    width: 100%;
}

.slug_update_button {
    background: #17a2b8;
    border: none;
    color: white;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.slug_update_button:hover {
    background: #138496;
    transform: translateY(-1px);
}

/* Checkbox Styling */
.checkBox {
    background: #f8f9fa;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}

.checkBox__input {
    width: 18px;
    height: 18px;
    accent-color: #e31b23;
    margin-right: 8px;
}

/* Price Inputs */
.infoTitle {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    display: block;
}

/* Video URL Helper Text */
.video_url_design {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: #6c757d;
}

.video_url_design i {
    color: #e31b23;
    margin-right: 4px;
}

/* Media Upload Styling */
.upload-img {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    transition: all 0.2s ease;
}

.upload-img:hover {
    border-color: #e31b23;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.1);
}

.img-wrap {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e0e0e0;
    margin-bottom: 16px;
}

.img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media-upload-btn-wrapper .btn-info {
    background: #fff;
    border: 1px solid #e0e0e0;
    color: #333;
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    margin-bottom: 8px;
}

.media-upload-btn-wrapper .btn-info:hover {
    background: #e31b23;
    border-color: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.media-upload-btn-wrapper small {
    display: block;
    font-size: 11px;
    color: #6c757d;
    margin-top: 4px;
}

.media-upload-btn-wrapper small i {
    color: #e31b23;
    margin-right: 4px;
}

/* Next Button */
.cmnBtn.btn_5.btn_bg_blue {
    background: #e31b23;
    border: none;
    color: white;
    padding: 12px 30px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.cmnBtn.btn_5.btn_bg_blue:hover {
    background: #b11218;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(227, 27, 35, 0.3);
}

/* Layout Improvements */
.d-flex {
    display: flex;
    gap: 16px;
}

.flex-wrap {
    flex-wrap: wrap;
}

.gap-3 {
    gap: 16px;
}

.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 16px; }
.mt-4 { margin-top: 24px; }
.mt-5 { margin-top: 32px; }
.mx-3 { margin-left: 16px; margin-right: 16px; }

/* Responsive */
@media (max-width: 768px) {
    .d-flex {
        flex-direction: column;
    }
    
    .mx-3 {
        margin-left: 0;
        margin-right: 0;
    }
    
    .btn_wrapper {
        width: 100%;
    }
    
    .cmnBtn.btn_5.btn_bg_blue {
        width: 100%;
    }
}

/* Dark Mode Support */
.dark-mode .form__input__single__label {
    color: #e0e0e0;
}

.dark-mode .form__control {
    background: #333;
    border-color: #444 !important;
    color: #e0e0e0;
}

.dark-mode .textarea--form {
    background: #333;
    border-color: #444;
    color: #e0e0e0;
}

.dark-mode .permalink_label {
    background: #2d2d2d;
    border-color: #444;
}

.dark-mode .checkBox {
    background: #2d2d2d;
    border-color: #444;
}

.dark-mode .upload-img {
    background: #2d2d2d;
    border-color: #444;
}

.dark-mode .media-upload-btn-wrapper .btn-info {
    background: #333;
    border-color: #444;
    color: #e0e0e0;
}

.dark-mode .img-wrap {
    background: #333;
    border-color: #444;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/service-general-info.blade.php ENDPATH**/ ?>