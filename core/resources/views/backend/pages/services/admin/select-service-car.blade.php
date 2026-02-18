<div class="tab-pane fade step" id="car" role="tabpanel" aria-labelledby="select-car-tab">
    
    <!-- Action Bar -->
    <div class="action-bar">
        <div class="action-left">
            <button type="button" class="btn btn-outline-danger" id="removeAllVariant">
                <i class="las la-trash"></i>
                {{ __('Remove All') }}
            </button>
            <button type="button" class="btn btn-outline-warning" id="addAllVariant">
                <i class="las la-plus-circle"></i>
                {{ __('Add All Variant') }}
            </button>
            <button type="button" class="btn btn-primary" id="addBtn" data-toggle="modal" data-target="#addModal">
                <i class="las la-plus"></i>
                {{ __('Add Custom') }}
            </button>
        </div>

        <!-- Filter Dropdowns -->
        <form id="filter_select_car" class="filter-form">
            <div class="filter-group">
                <select class="form-select filter-select" name="brand_name" id="brand_name">
                    <option value="0" selected>{{ __('All Brands') }}</option>
                    @foreach($brands as $brand)
                        <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                    @endforeach
                </select>

                <select class="form-select filter-select" name="car_name" id="car_name">
                    <option value="0" selected>{{ __('All Cars') }}</option>
                    @foreach($cars as $car)
                        <option value="{{ $car->id }}">{{ $car->name }}</option>
                    @endforeach
                </select>

                <button type="button" class="btn btn-info filter-btn" id="filterBtn">
                    <i class="las la-search"></i>
                    {{ __('Search') }}
                </button>
            </div>
        </form>
    </div>

    <input type="hidden" name="isModalOpen" id="isModalOpen">

    <!-- Modal for Adding Data -->
    <div class="modal fade" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="las la-car" style="color: #e31b23; margin-right: 8px;"></i>
                        {{ __('Add Car Service') }}
                    </h5>
                    <button type="button" class="btn-close modal_close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <form class="addCarServiceForm">
                        <span class="text-danger error-car"></span>
                        
                        <div class="row">
                            <!-- Left Column - Image Upload -->
                            <div class="col-lg-4">
                                <div class="upload-card">
                                    <div class="img-wrap">
                                        <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" 
                                             id="service_car_demo_image" alt="preview">
                                    </div>
                                    <input type="hidden" name="service_car_image1" id="service_car_image1">
                                    <button type="button" class="upload-btn media_upload_form_btn w-100"
                                            data-btntitle="{{__('Select Image')}}"
                                            data-modaltitle="{{__('Upload Image')}}"
                                            data-bs-toggle="modal"
                                            data-bs-target="#media_upload_modal">
                                        <i class="las la-cloud-upload-alt"></i>
                                        <span>{{__('Upload Car Image')}}</span>
                                    </button>
                                    <div class="image-info">
                                        <small><i class="las la-info-circle"></i> {{ __('jpg, jpeg, png, gif, webp') }}</small>
                                        <small><i class="las la-image"></i> {{ __('810x450px recommended') }}</small>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Right Column - Form Fields -->
                            <div class="col-lg-8">
                                <!-- Brand Select -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Brand') }} <span class="required-star">*</span></label>
                                    <select name="brand_id[]" id="car_brand_id" class="form-select">
                                        <option value="">{{__('Select Brand')}}</option>
                                        @foreach($brands as $brand)
                                            <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                
                                <!-- Car Model Select -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Car Model') }}</label>
                                    <select name="car_id[]" id="car_model_value" class="form-select car_model_id">
                                        <option value="">{{__('Select Car Model')}}</option>
                                    </select>
                                </div>
                                
                                <!-- Car Variant Select -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Car Variant') }}</label>
                                    <select name="variant_id[]" id="car_variant" class="form-select car_variant">
                                        <option value="">{{__('Select Car Variant')}}</option>
                                    </select>
                                </div>
                                
                                <!-- Price -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Price') }} <span class="required-star">*</span></label>
                                    <input type="number" class="form-control" name="price1[]" 
                                           id="price1" placeholder="0.00" step="0.01">
                                </div>
                                
                                <!-- Discount Price -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Discount Price') }}</label>
                                    <input type="number" class="form-control" name="discount_price1[]" 
                                           id="discount_price1" placeholder="0.00" step="0.01">
                                </div>
                                
                                <!-- Duration -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Duration') }}</label>
                                    <input type="text" class="form-control" name="duration1[]" id="duration1" 
                                           placeholder="{{ __('e.g. 2 hours, 30 minutes') }}">
                                </div>
                                
                                <!-- Default Price Checkbox -->
                                <div class="form-group">
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="duration_checkbox[]" id="duration_checkbox">
                                        <span class="checkbox-custom"></span>
                                        <span class="checkbox-text">{{ __('Use Default Service Price') }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        {{ __('Cancel') }}
                    </button>
                    <button type="button" class="btn btn-primary" id="addRowBtn">
                        <i class="las la-save"></i>
                        {{ __('Add to List') }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Session Data Container -->
    <div id="session_data" class="session-data-container">
        @include("backend.pages.services.admin.session_data")
    </div>

    <!-- Navigation Buttons -->
    <div class="navigation-wrapper">
        <button class="btn btn-outline-secondary prev-btn" id="prevBtn" type="button">
            <i class="las la-arrow-left"></i>
            {{ __('Previous') }}
        </button>
        <button type="submit" class="btn btn-primary submit-btn validate_subscription_type">
            {{ __('Add Service') }}
            <i class="las la-check-circle"></i>
        </button>
    </div>
</div>

<style>
/* ===== ENHANCED CSS FOR SELECT CAR TAB ===== */

/* Action Bar */
.action-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 24px;
    padding: 16px;
    background: #fff;
    border: 1px solid #eef0f3;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}

.action-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

/* Button Styles */
.btn-outline-danger {
    background: #fff5f5;
    border: 1px solid #ffe3e3;
    color: #e31b23;
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-outline-danger:hover {
    background: #e31b23;
    border-color: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.btn-outline-danger i {
    font-size: 16px;
}

.btn-outline-warning {
    background: #fffaeb;
    border: 1px solid #fed7aa;
    color: #b54708;
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-outline-warning:hover {
    background: #f59e0b;
    border-color: #f59e0b;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
}

.btn-outline-warning i {
    font-size: 16px;
}

.btn-primary {
    background: #e31b23;
    border: none;
    color: white;
    padding: 10px 24px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary:hover {
    background: #b11218;
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
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #111827;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
}

.filter-select:focus {
    outline: none;
    border-color: #e31b23;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}

.filter-btn {
    background: #e31b23;
    border: none;
    color: white;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
}

.filter-btn:hover {
    background: #b11218;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.filter-btn i {
    font-size: 16px;
}

/* Modal Styling */
.modal-content {
    border: none;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid #eef0f3;
    background: #f9fafb;
}

.modal-title {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    display: flex;
    align-items: center;
}

.modal-body {
    padding: 24px;
}

.modal-footer {
    padding: 20px 24px;
    border-top: 1px solid #eef0f3;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

/* Upload Card */
.upload-card {
    background: #f9fafb;
    border: 1px dashed #e5e7eb;
    border-radius: 12px;
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.upload-card .img-wrap {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e5e7eb;
    margin-bottom: 16px;
}

.upload-card .img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.upload-btn {
    background: #fff;
    border: 1px solid #e5e7eb;
    color: #374151;
    padding: 10px 16px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 12px;
}

.upload-btn i {
    color: #e31b23;
    font-size: 16px;
    transition: all 0.2s ease;
}

.upload-btn span {
    transition: all 0.2s ease;
}

.upload-btn:hover {
    background: #e31b23;
    border-color: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.upload-btn:hover i {
    color: white;
}

.image-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.image-info small {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: #6b7280;
}

.image-info small i {
    color: #e31b23;
    font-size: 12px;
}

/* Form Elements */
.form-group {
    margin-bottom: 16px;
}

.form-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
}

.required-star {
    color: #e31b23;
    margin-left: 2px;
}

.form-select,
.form-control {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #111827;
    background: #fff;
    transition: all 0.2s ease;
}

.form-select:focus,
.form-control:focus {
    outline: none;
    border-color: #e31b23;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}

/* Custom Checkbox */
.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    display: none;
}

.checkbox-custom {
    width: 18px;
    height: 18px;
    border: 2px solid #d1d5db;
    border-radius: 4px;
    position: relative;
    transition: all 0.2s ease;
}

.checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
    background: #e31b23;
    border-color: #e31b23;
}

.checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
}

.checkbox-text {
    font-size: 14px;
    color: #374151;
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
    border-top: 1px solid #eef0f3;
}

.btn-outline-secondary {
    background: #fff;
    border: 1px solid #e5e7eb;
    color: #374151;
    padding: 12px 28px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-outline-secondary:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
    transform: translateX(-2px);
}

.submit-btn {
    background: #e31b23;
    border: none;
    color: white;
    padding: 12px 32px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.submit-btn:hover {
    background: #b11218;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
}

.submit-btn i {
    font-size: 18px;
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
.dark-mode .action-bar {
    background: #1f2937;
    border-color: #374151;
}

.dark-mode .filter-select {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
}

.dark-mode .modal-content {
    background: #1f2937;
}

.dark-mode .modal-header {
    background: #374151;
    border-color: #4b5563;
}

.dark-mode .modal-title {
    color: #f3f4f6;
}

.dark-mode .upload-card {
    background: #374151;
    border-color: #4b5563;
}

.dark-mode .form-select,
.dark-mode .form-control {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
}

.dark-mode .form-label {
    color: #e5e7eb;
}

.dark-mode .checkbox-text {
    color: #e5e7eb;
}

.dark-mode .btn-outline-secondary {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
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
        padding: 10px 12px;
    }
    
    .filter-select {
        flex: 1 1 100%;
    }
    
    .navigation-wrapper {
        flex-direction: column;
    }
    
    .btn-outline-secondary,
    .submit-btn {
        width: 100%;
        justify-content: center;
    }
}
</style>