<div class="tab-pane fade step" id="car" role="tabpanel" aria-labelledby="select-car-tab">
    
    <!-- Action Bar -->
    <div class="action-bar">
        <div class="action-left">
            <button type="button" class="btn-outline-danger" id="editRemoveAllVariant">
                <i class="las la-trash"></i>
                {{ __('Remove All') }}
            </button>
            <button type="button" class="btn-outline-warning" id="addEditAllVariant">
                <i class="las la-plus-circle"></i>
                {{ __('Add All Variant') }}
            </button>
            <button type="button" class="btn-primary" id="addEditBtn" data-toggle="modal" data-target="#addModal">
                <i class="las la-plus"></i>
                {{ __('Add Custom') }}
            </button>
            <input type="hidden" id="session_service_id" value="{{ $service->id }}">
        </div>

        <!-- Filter Form -->
        <form id="filter_select_car" class="filter-form">
            <div class="filter-group">
                <select class="filter-select" name="edit_brand_name" id="edit_brand_name">
                    <option value="0" selected>{{ __('All Brands') }}</option>
                    @foreach($brands as $brand)
                        <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                    @endforeach
                </select>

                <select class="filter-select" name="edit_car_name" id="edit_car_name">
                    <option value="0" selected>{{ __('All Cars') }}</option>
                    @foreach($cars as $car)
                        <option value="{{ $car->id }}">{{ $car->name }}</option>
                    @endforeach
                </select>

                <button type="button" class="filter-btn" id="edit_filterBtn">
                    <i class="las la-search"></i>
                    {{ __('Search') }}
                </button>
            </div>
        </form>
    </div>

    <input type="hidden" name="isModalOpen" id="isModalOpen">

    <!-- Modal for Adding Data -->
    <div class="modal" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="las la-car modal-icon"></i>
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
                                    <div class="media-upload-wrapper">
                                        <div class="image-preview">
                                            <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="preview" class="preview-img">
                                        </div>
                                        <input type="hidden" name="service_car_image1" id="service_car_image1">
                                        <button type="button" class="upload-btn media_upload_form_btn"
                                                data-btntitle="{{__('Select Image')}}"
                                                data-modaltitle="{{__('Upload Image')}}"
                                                data-bs-toggle="modal"
                                                data-bs-target="#media_upload_modal">
                                            <i class="las la-cloud-upload-alt"></i>
                                            {{__('Upload Image')}}
                                        </button>
                                        <div class="upload-info">
                                            <small><i class="las la-info-circle"></i> {{ __('jpg, jpeg, png, gif, webp') }}</small>
                                            <small><i class="las la-image"></i> {{ __('810x450px recommended') }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Right Column - Form Fields -->
                            <div class="col-lg-8">
                                <!-- Brand Select -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Brand') }} <span class="required">*</span></label>
                                    <select name="brand_id[]" id="car_brand" class="form-select">
                                        <option value="">{{__('Select Brand')}}</option>
                                        @foreach($brands as $brand)
                                            <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                
                                <!-- Car Model Select -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Car Model') }}</label>
                                    <select name="car_id[]" id="car_model_value" class="form-select car_model">
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
                                    <label class="form-label">{{ __('Price') }} <span class="required">*</span></label>
                                    <input type="number" class="form-control" name="price1[]" id="price1" placeholder="0.00" step="0.01">
                                </div>
                                
                                <!-- Discount Price -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Discount Price') }}</label>
                                    <input type="number" class="form-control" name="discount_price1[]" id="discount_price1" placeholder="0.00" step="0.01">
                                </div>
                                
                                <!-- Duration -->
                                <div class="form-group">
                                    <label class="form-label">{{ __('Duration') }}</label>
                                    <input type="text" class="form-control" name="duration1[]" id="duration1" placeholder="{{ __('e.g. 2 hours, 30 minutes') }}">
                                </div>
                                
                                <!-- Default Price Checkbox -->
                                <div class="form-group">
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="duration_checkbox[]" id="duration_checkbox">
                                        <span class="checkbox-custom"></span>
                                        {{ __('Use Default Service Price') }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-bs-dismiss="modal">
                        {{ __('Cancel') }}
                    </button>
                    <button type="button" class="btn-primary" id="addRowBtn">
                        <i class="las la-save"></i>
                        {{ __('Add to List') }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Session Data Container -->
    <div id="edit_session_data" class="session-container">
        @include("backend.pages.services.admin.edit_session_data")
    </div>

    <!-- Navigation Buttons -->
    <div class="navigation-wrapper">
        <button class="nav-btn prev-btn" id="prevBtn" type="button">
            <i class="las la-arrow-left"></i>
            {{ __('Previous') }}
        </button>
        <button type="submit" class="nav-btn submit-btn validate_subscription_type">
            <i class="las la-check-circle"></i>
            {{ __('Update Service') }}
        </button>
    </div>
</div>

<style>
/* ===== CLEAN CSS FOR EDIT SERVICE - SELECT CAR TAB ===== */
/* No hover effects - just clean, modern styling */

:root {
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --red: #e31b23;
    --red-light: #fee2e2;
    --orange-light: #ffedd5;
    --orange: #f97316;
    --radius: 8px;
    --radius-lg: 12px;
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
    border-radius: var(--radius-lg);
}

.action-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

/* Buttons */
.btn-outline-danger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--red-light);
    border: 1px solid var(--red);
    border-radius: 40px;
    color: var(--red);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
}

.btn-outline-warning {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--orange-light);
    border: 1px solid var(--orange);
    border-radius: 40px;
    color: var(--orange);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: var(--red);
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
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
    padding: 8px 12px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: var(--radius);
    font-size: 14px;
    color: var(--gray-800);
    cursor: pointer;
}

.filter-btn {
    padding: 8px 20px;
    background: var(--red);
    border: none;
    border-radius: var(--radius);
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
}

/* Modal */
.modal-dialog.modal-lg {
    max-width: 800px;
    margin: 30px auto;
}

.modal-content {
    border: none;
    border-radius: var(--radius-lg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.modal-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
}

.modal-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-800);
    display: flex;
    align-items: center;
}

.modal-icon {
    color: var(--red);
    margin-right: 8px;
    font-size: 20px;
}

.modal-body {
    padding: 20px;
}

.modal-footer {
    padding: 16px 20px;
    border-top: 1px solid var(--gray-200);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

/* Upload Card */
.upload-card {
    background: var(--gray-50);
    border: 1px dashed var(--gray-300);
    border-radius: var(--radius);
    padding: 16px;
    height: 100%;
}

.media-upload-wrapper {
    display: flex;
    flex-direction: column;
}

.image-preview {
    width: 100%;
    height: 140px;
    border-radius: 6px;
    overflow: hidden;
    background: var(--white);
    border: 1px solid var(--gray-200);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-preview img {
    max-width: 100%;
    max-height: 140px;
    object-fit: contain;
}

.upload-btn {
    width: 100%;
    padding: 8px 12px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 40px;
    color: var(--gray-700);
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
}

.upload-btn i {
    color: var(--red);
}

.upload-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.upload-info small {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: var(--gray-500);
}

.upload-info small i {
    color: var(--red);
}

/* Form Elements */
.form-group {
    margin-bottom: 16px;
}

.form-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 4px;
}

.required {
    color: var(--red);
    margin-left: 2px;
}

.form-select,
.form-control {
    width: 100%;
    padding: 8px 12px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: var(--radius);
    font-size: 14px;
    color: var(--gray-800);
}

/* Checkbox */
.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--red);
}

/* Session Container */
.session-container {
    margin-top: 24px;
}

/* Navigation Buttons */
.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 32px;
    padding-top: 20px;
    border-top: 1px solid var(--gray-200);
}

.nav-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
}

.prev-btn {
    background: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
}

.submit-btn {
    background: var(--red);
    color: white;
}

/* No hover effects - explicitly set */
.btn-outline-danger:hover,
.btn-outline-warning:hover,
.btn-primary:hover,
.filter-btn:hover,
.upload-btn:hover,
.nav-btn:hover,
.submit-btn:hover,
.prev-btn:hover {
    background: var(--red);
    color: white;
}

/* Secondary button */
.btn-secondary {
    padding: 8px 20px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 40px;
    color: var(--gray-700);
    font-size: 14px;
    cursor: pointer;
}

/* Modal Close */
.modal_close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.5;
}

/* Preserve original classes */
.d-none { display: none; }
.d-flex { display: flex; }
.me-2 { margin-right: 8px; }
.me-3 { margin-right: 12px; }
.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 12px; }
.mt-4 { margin-top: 20px; }
.gap-3 { gap: 12px; }
.w-100 { width: 100%; }

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

/* Column widths */
#edit_select_brand_name,
#edit_select_car_name {
    width: 210px;
}

@media (max-width: 992px) {
    #edit_select_brand_name,
    #edit_select_car_name {
        width: 100%;
    }
}
</style>