<div class="tab-pane fade step" id="car" role="tabpanel" aria-labelledby="select-car-tab">
    
    <!-- Action Bar -->
    <div class="action-bar">
        <div class="action-left">
            <button type="button" class="btn-outline-danger" id="editRemoveAllVariant">
                <i class="las la-trash"></i>
                <?php echo e(__('Remove All')); ?>

            </button>
            <button type="button" class="btn-outline-warning" id="addEditAllVariant">
                <i class="las la-plus-circle"></i>
                <?php echo e(__('Add All Variant')); ?>

            </button>
            <button type="button" class="btn-primary" id="addEditBtn" data-toggle="modal" data-target="#addModal">
                <i class="las la-plus"></i>
                <?php echo e(__('Add Custom')); ?>

            </button>
            <input type="hidden" id="session_service_id" value="<?php echo e($service->id); ?>">
        </div>

        <!-- Filter Form -->
        <form id="filter_select_car" class="filter-form">
            <div class="filter-group">
                <select class="filter-select" name="edit_brand_name" id="edit_brand_name">
                    <option value="0" selected><?php echo e(__('All Brands')); ?></option>
                    <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($brand->id); ?>"><?php echo e($brand->name); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>

                <select class="filter-select" name="edit_car_name" id="edit_car_name">
                    <option value="0" selected><?php echo e(__('All Cars')); ?></option>
                    <?php $__currentLoopData = $cars; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $car): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($car->id); ?>"><?php echo e($car->name); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>

                <button type="button" class="filter-btn" id="edit_filterBtn">
                    <i class="las la-search"></i>
                    <?php echo e(__('Search')); ?>

                </button>
            </div>
        </form>
    </div>

    <input type="hidden" name="isModalOpen" id="isModalOpen">

    <!-- Modal for Adding Data -->
    <div class="modal" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog_custom" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="las la-car modal-title-icon"></i>
                        <?php echo e(__('Add Car Service')); ?>

                    </h5>
                    <button type="button" class="btn-close modal_close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <form class="addCarServiceForm">
                        <span class="text-danger error-car"></span>
                        
                        <div class="row">
                            <!-- Left Column - Image Upload -->
                            <div class="col-lg-3 mt-3">
                                <div class="upload-card" id="service_product_edit_img">
                                    <div class="media-upload-btn-wrapper">
                                        <div class="img-wrap">
                                            <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" 
                                                 id="service_car_demo_image" alt="images" class="w-100">
                                        </div>
                                        <input type="hidden" name="service_car_image1" id="service_car_image1">
                                        <button type="button" class="upload-btn media_upload_form_btn"
                                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                                data-bs-toggle="modal"
                                                data-bs-target="#media_upload_modal">
                                            <i class="las la-cloud-upload-alt"></i>
                                            <span><?php echo e(__('Upload Car Image')); ?></span>
                                        </button>
                                        <div class="image-info">
                                            <small><i class="las la-info-circle"></i> <?php echo e(__('jpg, jpeg, png, gif, webp')); ?></small>
                                            <small><i class="las la-image"></i> <?php echo e(__('810x450px recommended')); ?></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Right Column - Form Fields -->
                            <div class="col-lg-9">    
                                <div class="form__input__single">
                                    <label class="form__input__single__label brand"><?php echo e(__('Brand')); ?> <span class="required-star">*</span></label>
                                    <select name="brand_id[]" id="car_brand" class="form-select">
                                        <option value=""><?php echo e(__('Select Brand')); ?></option>
                                        <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <option value="<?php echo e($brand->id); ?>"><?php echo e($brand->name); ?></option>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </select>
                                </div>
                                
                                <div class="form__input__single mt-2" id="car_model">
                                    <label for="car" class="form__input__single__label"><?php echo e(__('Car Model')); ?></label>
                                    <select name="car_id[]" id="car_model_value" class="form-select car_model">
                                        <option value=""><?php echo e(__('Select Car Model')); ?></option>
                                    </select>
                                </div>
                                
                                <div class="form__input__single mt-2" id="variant">
                                    <label for="car_variant" class="form__input__single__label"><?php echo e(__('Car Variant')); ?></label>
                                    <select name="variant_id[]" id="car_variant" class="form-select car_variant">
                                        <option value=""><?php echo e(__('Select Car Variant')); ?></option>
                                    </select>
                                </div>
                                
                                <div class="form__input__single mt-2 position-relative">
                                    <label for="price1" class="form__input__single__label"><?php echo e(__('Price')); ?> <span class="required-star">*</span></label>
                                    <div class="input-form input-form2">
                                        <input type="number" class="form__control radius-5" name="price1[]" id="price1" placeholder="<?php echo e(__('0.00')); ?>">
                                    </div>
                                </div>
                                
                                <div class="form__input__single mt-2 position-relative">
                                    <label for="discount_price1" class="form__input__single__label"><?php echo e(__('Discount Price')); ?></label>
                                    <div class="input-form input-form2">
                                        <input type="number" class="form__control radius-5" name="discount_price1[]" id="discount_price1" placeholder="<?php echo e(__('0.00')); ?>">
                                    </div>
                                </div>
                                
                                <div class="form__input__single mt-2 position-relative">
                                    <label for="duration1" class="form__input__single__label"><?php echo e(__('Duration')); ?></label>
                                    <div class="input-form input-form2">
                                        <input type="text" class="form__control radius-5" name="duration1[]" id="duration1" placeholder="<?php echo e(__('e.g. 2 hours, 30 minutes')); ?>">
                                    </div>
                                </div>
                                
                                <div class="form__input__single mt-2 position-relative">
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="duration_checkbox[]" id="duration_checkbox">
                                        <span class="checkbox-custom"></span>
                                        <span class="checkbox-text"><?php echo e(__('Use Default Service Price')); ?></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn-secondary modal_close" data-bs-dismiss="modal">
                        <?php echo e(__('Cancel')); ?>

                    </button>
                    <button type="button" class="btn-primary" id="addRowBtn">
                        <i class="las la-save"></i>
                        <?php echo e(__('Add to List')); ?>

                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Session Data Container -->
    <div id="edit_session_data" class="session-data-container">
        <?php echo $__env->make("backend.pages.services.admin.edit_session_data", array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    </div>

    <!-- Navigation Buttons -->
    <div class="navigation-wrapper">
        <button class="nav-btn prev-btn" id="prevBtn" type="button">
            <i class="las la-arrow-left"></i>
            <?php echo e(__('Previous')); ?>

        </button>
        <button type="submit" class="nav-btn submit-btn validate_subscription_type">
            <i class="las la-check-circle"></i>
            <?php echo e(__('Update Service')); ?>

        </button>
    </div>
</div>

<style>
/* ===== ENHANCED CSS FOR EDIT SERVICE - SELECT CAR TAB ===== */
/* PURE CSS - NO JS CHANGES */

:root {
    --red: #e31b23;
    --red-light: #fff5f5;
    --red-soft: #ffe3e3;
    --red-dark: #b11218;
    --dark: #111827;
    --dark-soft: #1f2937;
    --gray-700: #374151;
    --gray-400: #9CA3AF;
    --gray-300: #D1D5DB;
    --gray-200: #E5E7EB;
    --gray-100: #F3F4F6;
    --gray-50: #F9FAFB;
    --white: #FFFFFF;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.05);
    --shadow-lg: 0 10px 25px -5px rgba(0,0,0,0.05);
    --radius-md: 8px;
    --radius-lg: 12px;
    --transition: all 0.2s ease;
}

/* Action Bar */
.action-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 24px;
    padding: 16px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
}

.action-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

/* Button Styles - Keeping original button classes */
.btn-outline-danger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: var(--red-light);
    border: 1px solid var(--red-soft);
    border-radius: 40px;
    color: var(--red);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-outline-danger:hover {
    background: var(--red);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.btn-outline-danger i {
    font-size: 16px;
}

.btn-outline-warning {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: #fffaeb;
    border: 1px solid #fed7aa;
    border-radius: 40px;
    color: #b54708;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-outline-warning:hover {
    background: #f59e0b;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
}

.btn-outline-warning i {
    font-size: 16px;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: var(--red);
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.3);
}

.btn-primary i {
    font-size: 16px;
}

/* Filter Form */
.filter-form {
    flex: 1;
    max-width: 500px;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 8px;
}

.filter-select {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
    color: var(--dark);
    background: var(--white);
    cursor: pointer;
    transition: var(--transition);
}

.filter-select:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-soft);
}

.filter-btn {
    background: var(--red);
    border: none;
    color: white;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.filter-btn:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

/* Modal Styling - Keeping original modal structure */
.modal-content {
    border: none;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
}

.modal-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark);
    display: flex;
    align-items: center;
}

.modal-title-icon {
    color: var(--red);
    margin-right: 8px;
    font-size: 22px;
}

.modal-body {
    padding: 24px;
}

.modal-footer {
    padding: 20px 24px;
    border-top: 1px solid var(--gray-200);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

/* Upload Card - Keeping original structure */
.upload-card {
    background: var(--gray-50);
    border: 1px dashed var(--gray-300);
    border-radius: 12px;
    padding: 16px;
    transition: var(--transition);
}

.upload-card:hover {
    border-color: var(--red);
    background: var(--red-light);
}

.media-upload-btn-wrapper .img-wrap {
    width: 100%;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
    background: var(--white);
    border: 1px solid var(--gray-200);
    margin-bottom: 12px;
}

.media-upload-btn-wrapper .img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Upload Button - Fixed hover text visibility */
.media-upload-btn-wrapper .upload-btn {
    background: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
    padding: 10px 16px;
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

.media-upload-btn-wrapper .upload-btn i {
    color: var(--red);
    font-size: 16px;
    transition: var(--transition);
}

.media-upload-btn-wrapper .upload-btn span {
    color: var(--gray-700);
    transition: var(--transition);
}

.media-upload-btn-wrapper .upload-btn:hover {
    background: var(--red);
    border-color: var(--red);
}

.media-upload-btn-wrapper .upload-btn:hover i {
    color: white;
}

.media-upload-btn-wrapper .upload-btn:hover span {
    color: white;
}

/* Image Info */
.image-info {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
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

/* Form Elements - Keeping original classes */
.form__input__single__label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 6px;
}

.required-star {
    color: var(--red);
    margin-left: 2px;
}

.form-select,
.form__control {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
    color: var(--dark);
    background: var(--white);
    transition: var(--transition);
}

.form-select:focus,
.form__control:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-soft);
}

/* Custom Checkbox - Keeping original functionality */
.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: var(--red);
    margin: 0;
}

.checkbox-text {
    font-size: 14px;
    color: var(--gray-700);
}

/* Secondary Button */
.btn-secondary {
    background: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
    padding: 10px 24px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-secondary:hover {
    background: var(--gray-100);
    border-color: var(--gray-400);
}

/* Session Data Container */
.session-data-container {
    margin-top: 24px;
}

/* Navigation Buttons */
.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid var(--gray-200);
}

.nav-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.prev-btn {
    background: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
}

.prev-btn:hover {
    background: var(--gray-100);
    border-color: var(--gray-400);
    transform: translateX(-2px);
}

.submit-btn {
    background: var(--red);
    color: white;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.submit-btn:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
}

/* Modal Close Button */
.modal_close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s ease;
}

.modal_close:hover {
    opacity: 1;
}

/* Dark Mode */
body.dark-mode .action-bar {
    background: var(--dark-soft);
    border-color: #374151;
}

body.dark-mode .filter-select {
    background: #374151;
    border-color: #4B5563;
    color: #F3F4F6;
}

body.dark-mode .modal-content {
    background: var(--dark-soft);
}

body.dark-mode .modal-header {
    background: #374151;
    border-color: #4B5563;
}

body.dark-mode .modal-title {
    color: #F3F4F6;
}

body.dark-mode .upload-card {
    background: #374151;
    border-color: #4B5563;
}

body.dark-mode .media-upload-btn-wrapper .img-wrap {
    background: var(--dark-soft);
    border-color: #4B5563;
}

body.dark-mode .media-upload-btn-wrapper .upload-btn {
    background: var(--dark-soft);
    border-color: #4B5563;
}

body.dark-mode .media-upload-btn-wrapper .upload-btn span {
    color: #E5E7EB;
}

body.dark-mode .form-select,
body.dark-mode .form__control {
    background: #374151;
    border-color: #4B5563;
    color: #F3F4F6;
}

body.dark-mode .form__input__single__label {
    color: #E5E7EB;
}

body.dark-mode .checkbox-text {
    color: #E5E7EB;
}

body.dark-mode .prev-btn {
    background: #374151;
    border-color: #4B5563;
    color: #E5E7EB;
}

/* Responsive */
@media (max-width: 992px) {
    .action-bar {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-form {
        max-width: 100%;
    }
    
    .filter-group {
        flex-wrap: wrap;
    }
    
    .filter-select {
        flex: 1 1 calc(50% - 4px);
    }
    
    .filter-btn {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .action-left {
        width: 100%;
        justify-content: space-between;
    }
    
    .btn-outline-danger,
    .btn-outline-warning,
    .btn-primary {
        flex: 1;
        justify-content: center;
    }
    
    .filter-select {
        flex: 1 1 100%;
    }
    
    .navigation-wrapper {
        flex-direction: column;
    }
    
    .nav-btn {
        width: 100%;
        justify-content: center;
    }
}

/* Preserve original classes */
.modal-dialog_custom {
    max-width: 800px !important;
    width: 100%;
}

#edit_select_brand_name,
#edit_select_car_name {
    width: 210px;
}

.position-relative {
    position: relative;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/edit-service-car.blade.php ENDPATH**/ ?>