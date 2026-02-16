<div class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <!-- Left Column - Main Content -->
        <div class="col-lg-8">
            
            <!-- Title Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-heading"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Basic Information')); ?></h5>
                </div>
                <div class="form-card-body">
                    <!-- Title -->
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Title')); ?> <span class="required-star">*</span></label>
                        <input type="text" class="form-control" name="title" id="title" 
                               value="<?php echo e($service->title); ?>" 
                               placeholder="<?php echo e(__('e.g. Premium Car Wash Service')); ?>">
                    </div>

                    <!-- Permalink -->
                    <div class="permalink-wrapper">
                        <div class="permalink-label"><?php echo e(__('Permalink')); ?> <span class="required-star">*</span></div>
                        <div class="permalink-content">
                            <span id="slug_show" class="permalink-url"><?php echo e(url('/service/')); ?>/<?php echo e($service->slug); ?></span>
                            <button class="btn-icon edit-slug-btn slug_edit_button" title="<?php echo e(__('Edit')); ?>">
                                <i class="las la-pen"></i>
                            </button>
                        </div>
                        <div class="permalink-edit-wrapper" style="display: none;">
                            <input class="form-control permalink-input listing_slug" name="slug" 
                                   value="<?php echo e($service->slug); ?>" id="slug" type="text">
                            <button class="btn-primary btn-sm slug_update_button mt-2"><?php echo e(__('Update')); ?></button>
                        </div>
                    </div>

                    <!-- Category -->
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Category')); ?> <span class="required-star">*</span></label>
                        <select name="category_id" id="category" class="form-select select2">
                            <option value=""><?php echo e(__('Select Category')); ?></option>
                            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($cat->id); ?>" <?php if($cat->id == $service->category_id): ?> selected <?php endif; ?>><?php echo e($cat->name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Description Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-align-left"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Description')); ?></h5>
                </div>
                <div class="form-card-body">
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Detailed Description')); ?> <span class="required-star">*</span></label>
                        <textarea class="form-control textarea" name="description" 
                                  placeholder="<?php echo e(__('Describe your service in detail...')); ?>" 
                                  rows="8"><?php echo e($service->description); ?></textarea>
                    </div>
                </div>
            </div>

            <!-- Additional Info Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-video"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Additional Information')); ?></h5>
                </div>
                <div class="form-card-body">
                    <div class="row">
                        <!-- Video URL -->
                        <div class="col-md-8">
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('Video URL')); ?></label>
                                <input type="text" class="form-control" name="video_url" id="video_url" 
                                       value="<?php echo e($service->video_url); ?>" 
                                       placeholder="<?php echo e(__('https://www.youtube.com/watch?v=...')); ?>">
                                <small class="form-hint">
                                    <i class="las la-info-circle"></i>
                                    <?php echo e(__('Example: https://www.youtube.com/watch?v=IcM8_Llgxf4&t=1s')); ?>

                                </small>
                            </div>
                        </div>
                        
                        <!-- Featured Checkbox -->
                        <div class="col-md-4">
                            <div class="featured-wrapper">
                                <label class="featured-checkbox">
                                    <input type="checkbox" name="is_featured" id="is_featured" 
                                           value="1" <?php if($service->is_featured == 1): ?> checked <?php endif; ?>>
                                    <span class="checkbox-custom"></span>
                                    <span class="checkbox-label"><?php echo e(__('Featured Service')); ?></span>
                                </label>
                                <small class="form-hint"><?php echo e(__('Mark as featured to highlight')); ?></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Right Column - Pricing & Media -->
        <div class="col-lg-4">
            
            <!-- Pricing Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-tag"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Pricing')); ?></h5>
                </div>
                <div class="form-card-body">
                    <!-- Price -->
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Regular Price')); ?> <span class="required-star">*</span></label>
                        <div class="input-with-icon">
                            <span class="input-icon"><i class="las la-dollar-sign"></i></span>
                            <input type="number" class="form-control with-icon" name="price" id="price" 
                                   value="<?php echo e($service->price); ?>" placeholder="0.00" step="0.01">
                        </div>
                    </div>

                    <!-- Discount Price -->
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Discount Price')); ?></label>
                        <div class="input-with-icon">
                            <span class="input-icon"><i class="las la-dollar-sign"></i></span>
                            <input type="number" class="form-control with-icon" name="discount_price" id="discount_price" 
                                   value="<?php echo e($service->discount_price); ?>" placeholder="0.00" step="0.01">
                        </div>
                        <small class="form-hint"><?php echo e(__('Leave empty if no discount')); ?></small>
                    </div>
                </div>
            </div>

            <!-- Service Details Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-clock"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Service Details')); ?></h5>
                </div>
                <div class="form-card-body">
                    <!-- Duration -->
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Duration')); ?></label>
                        <input type="text" class="form-control" name="duration" id="duration" 
                               value="<?php echo e($service->duration); ?>" placeholder="<?php echo e(__('e.g. 2 hours, 30 minutes')); ?>">
                    </div>

                    <!-- Max Quantity -->
                    <div class="form-group">
                        <label class="form-label"><?php echo e(__('Max Quantity')); ?></label>
                        <input type="number" class="form-control" name="max_qty" id="max_qty" 
                               value="<?php echo e($service->max_qty); ?>" placeholder="<?php echo e(__('e.g. 10')); ?>" min="1">
                    </div>
                </div>
            </div>

            <!-- Main Image Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-image"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Main Image')); ?></h5>
                </div>
                <div class="form-card-body">
                    <div class="media-upload-card">
                        <div class="image-preview" id="mainImagePreview">
                            <?php echo render_attachment_preview_for_admin($service->image ?? ''); ?>

                            <?php if(empty($service->image)): ?>
                                <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="preview" class="preview-img">
                            <?php endif; ?>
                        </div>
                        <input type="hidden" name="image" id="service_image" value="<?php echo e($service->image ?? ''); ?>">
                        <button type="button" class="upload-btn media_upload_form_btn"
                                data-target="mainImagePreview"
                                data-input="service_image"
                                data-preview="mainImagePreview"
                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            <i class="las la-cloud-upload-alt"></i>
                            <span><?php echo e(__('Choose Image')); ?></span>
                        </button>
                        <div class="image-info">
                            <small><i class="las la-info-circle"></i> <?php echo e(__('Format: jpg, jpeg, png, gif, webp')); ?></small>
                            <small><i class="las la-image"></i> <?php echo e(__('Recommended: 810x450px')); ?></small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gallery Images Section -->
            <div class="form-card">
                <div class="form-card-header">
                    <span class="header-icon">
                        <i class="las la-images"></i>
                    </span>
                    <h5 class="header-title"><?php echo e(__('Gallery Images')); ?></h5>
                </div>
                <div class="form-card-body">
                    <div class="media-upload-card">
                        <div class="gallery-preview" id="galleryPreview">
                            <?php echo render_gallery_image_attachment_preview($service->gallery_images ?? ''); ?>

                            <?php if(empty($service->gallery_images)): ?>
                                <img src="<?php echo e(asset('assets/frontend/img/gallery/uploadeImg.png')); ?>" alt="preview" class="preview-img">
                            <?php endif; ?>
                        </div>
                        <input type="hidden" name="gallery_images" id="gallery_images" value="<?php echo e($service->gallery_images); ?>">
                        <button type="button" class="upload-btn media_upload_form_btn"
                                data-target="galleryPreview"
                                data-input="gallery_images"
                                data-preview="galleryPreview"
                                data-multiple="true"
                                data-btntitle="<?php echo e(__('Select Images')); ?>"
                                data-modaltitle="<?php echo e(__('Upload Images')); ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            <i class="las la-cloud-upload-alt"></i>
                            <span><?php echo e(__('Choose Images')); ?></span>
                        </button>
                        <div class="image-info">
                            <small><i class="las la-info-circle"></i> <?php echo e(__('Format: jpg, jpeg, png, gif, webp')); ?></small>
                            <small><i class="las la-image"></i> <?php echo e(__('Recommended: 810x450px')); ?></small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="navigation-wrapper">
                <button class="nav-btn next-btn w-100" id="nextBtn" type="button">
                    <?php echo e(__('Continue to Next Step')); ?>

                    <i class="las la-arrow-right"></i>
                </button>
            </div>

        </div>
    </div>
</div>

<style>
/* ===== ENHANCED CSS FOR EDIT SERVICE DETAILS TAB ===== */

/* Form Cards */
.form-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 16px;
    margin-bottom: 24px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.form-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--red-soft);
}

.form-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
}

.header-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red-light);
    border-radius: 10px;
    color: var(--red);
    font-size: 18px;
}

.header-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--dark);
    margin: 0;
}

.form-card-body {
    padding: 20px;
}

/* Form Elements */
.form-group {
    margin-bottom: 20px;
}

.form-group:last-child {
    margin-bottom: 0;
}

.form-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 8px;
}

.required-star {
    color: var(--red);
    margin-left: 2px;
}

.form-control {
    width: 100%;
    padding: 12px 16px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 10px;
    font-size: 14px;
    color: var(--dark);
    transition: var(--transition);
}

.form-control:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-soft);
}

.form-control::placeholder {
    color: var(--gray-400);
    font-size: 13px;
}

.form-select {
    width: 100%;
    padding: 11px 16px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 10px;
    font-size: 14px;
    color: var(--dark);
    cursor: pointer;
}

.form-select:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-soft);
}

.textarea {
    min-height: 150px;
    resize: vertical;
}

/* Input with Icon */
.input-with-icon {
    position: relative;
}

.input-with-icon .form-control.with-icon {
    padding-left: 40px;
}

.input-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-400);
    font-size: 16px;
    pointer-events: none;
}

/* Permalink */
.permalink-wrapper {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 20px;
}

.permalink-label {
    font-size: 12px;
    color: var(--gray-500);
    margin-bottom: 8px;
    font-weight: 500;
}

.permalink-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.permalink-url {
    font-size: 14px;
    color: var(--red);
    font-weight: 500;
    word-break: break-all;
}

.btn-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    color: var(--gray-600);
    cursor: pointer;
    transition: var(--transition);
}

.btn-icon:hover {
    background: var(--red);
    border-color: var(--red);
    color: white;
}

.permalink-edit-wrapper {
    margin-top: 12px;
}

.permalink-input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
}

.btn-primary {
    background: var(--red);
    border: none;
    color: white;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

/* Featured Checkbox */
.featured-wrapper {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 10px;
    padding: 16px;
}

.featured-checkbox {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    margin-bottom: 8px;
}

.featured-checkbox input[type="checkbox"] {
    display: none;
}

.checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid var(--gray-400);
    border-radius: 5px;
    position: relative;
    transition: var(--transition);
}

.featured-checkbox input[type="checkbox"]:checked + .checkbox-custom {
    background: var(--red);
    border-color: var(--red);
}

.featured-checkbox input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
}

.checkbox-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-700);
}

/* Media Upload */
.media-upload-card {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
}

.image-preview,
.gallery-preview {
    width: 100%;
    min-height: 120px;
    border-radius: 10px;
    overflow: hidden;
    background: var(--white);
    border: 1px solid var(--gray-200);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preview-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-preview img,
.gallery-preview img {
    max-width: 100%;
    max-height: 120px;
    object-fit: contain;
}

.upload-btn {
    background: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.upload-btn i {
    color: var(--red);
    font-size: 16px;
    transition: var(--transition);
}

.upload-btn span {
    color: var(--gray-700);
    transition: var(--transition);
}

.upload-btn:hover {
    background: var(--red);
    border-color: var(--red);
}

.upload-btn:hover i,
.upload-btn:hover span {
    color: white;
}

.image-info {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.image-info small {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: var(--gray-500);
}

.image-info small i {
    color: var(--red);
    font-size: 12px;
}

/* Form Hints */
.form-hint {
    display: block;
    font-size: 11px;
    color: var(--gray-500);
    margin-top: 6px;
}

.form-hint i {
    color: var(--red);
    margin-right: 4px;
    font-size: 12px;
}

/* Navigation */
.navigation-wrapper {
    margin-top: 24px;
}

.nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.next-btn {
    background: var(--red);
    color: white;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.next-btn:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
}

/* Dark Mode */
body.dark-mode .form-card {
    background: var(--dark-soft);
    border-color: #374151;
}

body.dark-mode .form-card-header {
    background: #374151;
    border-color: #4B5563;
}

body.dark-mode .header-title {
    color: #F3F4F6;
}

body.dark-mode .form-control,
body.dark-mode .form-select {
    background: #374151;
    border-color: #4B5563;
    color: #F3F4F6;
}

body.dark-mode .form-label {
    color: #E5E7EB;
}

body.dark-mode .permalink-wrapper,
body.dark-mode .featured-wrapper,
body.dark-mode .media-upload-card {
    background: #374151;
    border-color: #4B5563;
}

body.dark-mode .btn-icon {
    background: #1F2937;
    border-color: #4B5563;
    color: #9CA3AF;
}

body.dark-mode .upload-btn {
    background: #1F2937;
    border-color: #4B5563;
}

body.dark-mode .upload-btn span {
    color: #E5E7EB;
}

body.dark-mode .image-preview,
body.dark-mode .gallery-preview {
    background: #1F2937;
    border-color: #4B5563;
}

/* Responsive */
@media (max-width: 768px) {
    .form-card-header {
        padding: 14px 18px;
    }
    
    .form-card-body {
        padding: 18px;
    }
    
    .col-lg-8,
    .col-lg-4 {
        width: 100%;
    }
    
    .navigation-wrapper {
        margin-bottom: 24px;
    }
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/edit-service-details.blade.php ENDPATH**/ ?>