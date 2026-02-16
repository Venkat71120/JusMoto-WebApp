<div class="tab-pane fade step" id="location" role="tabpanel" aria-labelledby="location-tab">
    <div class="row">
        <div class="col-12">

            <!-- What's Included Section -->
            <div class="settings-card">
                <div class="settings-header">
                    <span class="settings-icon">
                        <i class="las la-gift"></i>
                    </span>
                    <h5 class="settings-title">{{__('What\'s Included In This Package')}}</h5>
                </div>
                
                <div class="settings-body">
                    <div class="append-additional-includes">
                        @foreach($service->includes as $include)
                            <div class="include-item">
                                <div class="include-item-content">
                                    <div class="form-group">
                                        <label class="form-label">{{ __('Title') }}</label>
                                        <input class="form-control" type="text" name="include_service_title[]" 
                                               value="{{ $include->title }}" placeholder="{{__('e.g. Free Car Wash, Oil Change')}}">
                                    </div>
                                    <button type="button" class="remove-item remove-include" title="{{__('Remove')}}">
                                        <i class="las la-trash"></i>
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    
                    <div class="add-more-wrapper">
                        <a href="javascript:void(0)" class="add-more-btn add-what-includes">
                            <i class="las la-plus-circle"></i>
                            {{__('Add Another Item')}}
                        </a>
                    </div>
                </div>
            </div>

            <!-- FAQs Section -->
            <div class="settings-card">
                <div class="settings-header">
                    <span class="settings-icon">
                        <i class="las la-question-circle"></i>
                    </span>
                    <h5 class="settings-title">{{__('Frequently Asked Questions')}}</h5>
                </div>
                
                <div class="settings-body">
                    <div class="append-faqs">
                        @foreach($service->faqs as $faq)
                            <div class="faq-item">
                                <div class="faq-item-content">
                                    <div class="form-group">
                                        <label class="form-label">{{ __('Question') }}</label>
                                        <input class="form-control" type="text" name="faqs_title[]" 
                                               value="{{ $faq->title }}" placeholder="{{__('e.g. How long does the service take?')}}">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">{{ __('Answer') }}</label>
                                        <textarea class="form-control" name="faqs_description[]" rows="3" 
                                                  placeholder="{{__('Provide a detailed answer...')}}">{{ $faq->description }}</textarea>
                                    </div>
                                    <button type="button" class="remove-item remove-faqs" title="{{__('Remove')}}">
                                        <i class="las la-trash"></i>
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    
                    <div class="add-more-wrapper">
                        <a href="javascript:void(0)" class="add-more-btn add-faqs">
                            <i class="las la-plus-circle"></i>
                            {{__('Add Another FAQ')}}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Two Column Layout for Additional Info and Specification -->
            <div class="row mt-4">
                <!-- Additional Info Section -->
                <div class="col-md-6">
                    <div class="settings-card h-100">
                        <div class="settings-header">
                            <span class="settings-icon">
                                <i class="las la-info-circle"></i>
                            </span>
                            <h5 class="settings-title">{{__('Additional Information')}}</h5>
                        </div>
                        
                        <div class="settings-body">
                            <div class="append-services-info">
                                @foreach($service->serviceAdditional as $additional)
                                    @if($additional->type == 'info')
                                        <div class="info-item">
                                            <div class="info-item-content">
                                                <div class="form-group">
                                                    <label class="form-label">{{ __('Title') }}</label>
                                                    <div class="input-with-remove">
                                                        <input class="form-control" type="text" name="service_info_title[]" 
                                                               value="{{ $additional->title }}" placeholder="{{__('e.g. Warranty Information')}}">
                                                        <button type="button" class="remove-item remove-info" title="{{__('Remove')}}">
                                                            <i class="las la-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label class="form-label">{{ __('Image') }}</label>
                                                    <div class="media-upload-card">
                                                        <div class="image-preview">
                                                            {!! render_image_markup_by_attachment_id($additional->image, 'thumb', 'preview-img') !!}
                                                            @if(empty($additional->image))
                                                                <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="preview" class="preview-img">
                                                            @endif
                                                        </div>
                                                        <input type="hidden" name="service_information_image[]" value="{{ $additional->image }}">
                                                        <button type="button" class="upload-btn media_upload_form_btn"
                                                                data-btntitle="{{__('Select Image')}}"
                                                                data-modaltitle="{{__('Upload Image')}}"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#media_upload_modal">
                                                            <i class="las la-cloud-upload-alt"></i>
                                                            <span>{{__('Upload Image')}}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                                @endforeach
                            </div>
                            
                            <div class="add-more-wrapper">
                                <a href="javascript:void(0)" class="add-more-btn add-services-info w-100">
                                    <i class="las la-plus-circle"></i>
                                    {{__('Add More Information')}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Specification Section -->
                <div class="col-md-6">
                    <div class="settings-card h-100">
                        <div class="settings-header">
                            <span class="settings-icon">
                                <i class="las la-clipboard-list"></i>
                            </span>
                            <h5 class="settings-title">{{__('Service Specifications')}}</h5>
                        </div>
                        
                        <div class="settings-body">
                            <div class="append-services-specification">
                                @foreach($service->serviceAdditional as $additional)
                                    @if($additional->type == 'specification')
                                        <div class="spec-item">
                                            <div class="spec-item-content">
                                                <div class="form-group">
                                                    <label class="form-label">{{ __('Title') }}</label>
                                                    <div class="input-with-remove">
                                                        <input class="form-control" type="text" name="service_specification_title[]" 
                                                               value="{{ $additional->title }}" placeholder="{{__('e.g. Engine Type, Fuel Efficiency')}}">
                                                        <button type="button" class="remove-item remove-specification" title="{{__('Remove')}}">
                                                            <i class="las la-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label class="form-label">{{ __('Image') }}</label>
                                                    <div class="media-upload-card">
                                                        <div class="image-preview">
                                                            {!! render_image_markup_by_attachment_id($additional->image, 'thumb', 'preview-img') !!}
                                                            @if(empty($additional->image))
                                                                <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="preview" class="preview-img">
                                                            @endif
                                                        </div>
                                                        <input type="hidden" name="service_specification_image[]" value="{{ $additional->image }}">
                                                        <button type="button" class="upload-btn media_upload_form_btn"
                                                                data-btntitle="{{__('Select Image')}}"
                                                                data-modaltitle="{{__('Upload Image')}}"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#media_upload_modal">
                                                            <i class="las la-cloud-upload-alt"></i>
                                                            <span>{{__('Upload Image')}}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                                @endforeach
                            </div>
                            
                            <div class="add-more-wrapper">
                                <a href="javascript:void(0)" class="add-more-btn add-services-specification w-100">
                                    <i class="las la-plus-circle"></i>
                                    {{__('Add More Specifications')}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="navigation-wrapper">
                <button class="nav-btn prev-btn" id="prevBtn" type="button">
                    <i class="las la-arrow-left"></i>
                    {{__('Previous')}}
                </button>
                <button class="nav-btn next-btn" id="nextBtn" type="button">
                    {{__('Next')}}
                    <i class="las la-arrow-right"></i>
                </button>
            </div>

        </div>
    </div>
</div>

<style>
/* ===== ENHANCED CSS FOR EDIT SERVICE ATTRIBUTES TAB ===== */

/* Settings Cards */
.settings-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 16px;
    margin-bottom: 24px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.settings-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--red-soft);
}

.h-100 {
    height: calc(100% - 24px);
}

/* Settings Header */
.settings-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
}

.settings-icon {
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

.settings-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--dark);
    margin: 0;
}

/* Settings Body */
.settings-body {
    padding: 20px;
}

/* Form Elements */
.form-group {
    margin-bottom: 16px;
    position: relative;
}

.form-group:last-child {
    margin-bottom: 0;
}

.form-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 6px;
}

.form-control {
    width: 100%;
    padding: 10px 14px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 8px;
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

textarea.form-control {
    min-height: 80px;
    resize: vertical;
}

/* Include/FAQ/Info/Spec Items */
.include-item,
.faq-item,
.info-item,
.spec-item {
    margin-bottom: 16px;
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: 16px;
    background: var(--white);
    position: relative;
    transition: var(--transition);
}

.include-item:hover,
.faq-item:hover,
.info-item:hover,
.spec-item:hover {
    border-color: var(--red-soft);
    box-shadow: var(--shadow-sm);
}

.include-item-content,
.faq-item-content,
.info-item-content,
.spec-item-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Input with Remove Button */
.input-with-remove {
    display: flex;
    align-items: center;
    gap: 8px;
}

.input-with-remove .form-control {
    flex: 1;
}

/* Remove Button */
.remove-item {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red-light);
    border: 1px solid var(--red-soft);
    border-radius: 8px;
    color: var(--red);
    font-size: 16px;
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.remove-item:hover {
    background: var(--red);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(227, 27, 35, 0.2);
}

/* Media Upload */
.media-upload-card {
    background: var(--gray-50);
    border: 1px dashed var(--gray-300);
    border-radius: 12px;
    padding: 16px;
    transition: var(--transition);
}

.media-upload-card:hover {
    border-color: var(--red);
    background: var(--red-light);
}

.image-preview {
    width: 100%;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    background: var(--white);
    border: 1px solid var(--gray-200);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-preview img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.preview-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.upload-btn {
    background: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
    padding: 8px 16px;
    border-radius: 40px;
    font-size: 13px;
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

/* Add More Button */
.add-more-wrapper {
    margin-top: 20px;
}

.add-more-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 24px;
    background: var(--white);
    border: 1px dashed var(--gray-400);
    border-radius: 40px;
    color: var(--gray-700);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
}

.add-more-btn:hover {
    background: var(--red-light);
    border-color: var(--red);
    color: var(--red);
    transform: translateY(-2px);
}

.add-more-btn i {
    color: var(--red);
    font-size: 18px;
}

.add-more-btn.w-100 {
    width: 100%;
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

.prev-btn i {
    color: var(--gray-500);
}

.next-btn {
    background: var(--red);
    color: white;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.next-btn:hover {
    background: var(--red-dark);
    transform: translateX(2px);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
}

/* Margin Utilities */
.margin-top-20 { margin-top: 20px; }
.margin-top-40 { margin-top: 40px; }
.margin-top-15 { margin-top: 15px; }
.mt-4 { margin-top: 24px; }
.mt-5 { margin-top: 32px; }
.me-2 { margin-right: 8px; }
.g-2 { gap: 8px; }

/* Grid System */
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
}

.col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 12px;
    padding-left: 12px;
}

/* Dark Mode */
body.dark-mode .settings-card {
    background: var(--dark-soft);
    border-color: #374151;
}

body.dark-mode .settings-header {
    background: #374151;
    border-color: #4B5563;
}

body.dark-mode .settings-title {
    color: #F3F4F6;
}

body.dark-mode .form-control {
    background: #374151;
    border-color: #4B5563;
    color: #F3F4F6;
}

body.dark-mode .form-label {
    color: #E5E7EB;
}

body.dark-mode .include-item,
body.dark-mode .faq-item,
body.dark-mode .info-item,
body.dark-mode .spec-item {
    background: #1F2937;
    border-color: #374151;
}

body.dark-mode .media-upload-card {
    background: #374151;
    border-color: #4B5563;
}

body.dark-mode .image-preview {
    background: #1F2937;
    border-color: #4B5563;
}

body.dark-mode .upload-btn {
    background: #1F2937;
    border-color: #4B5563;
}

body.dark-mode .upload-btn span {
    color: #E5E7EB;
}

body.dark-mode .add-more-btn {
    background: #1F2937;
    border-color: #4B5563;
    color: #E5E7EB;
}

body.dark-mode .prev-btn {
    background: #374151;
    border-color: #4B5563;
    color: #E5E7EB;
}

/* Responsive */
@media (max-width: 992px) {
    .col-md-6 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    
    .h-100 {
        height: auto;
    }
}

@media (max-width: 768px) {
    .settings-header {
        padding: 14px 18px;
    }
    
    .settings-body {
        padding: 18px;
    }
    
    .navigation-wrapper {
        flex-direction: column;
    }
    
    .nav-btn {
        width: 100%;
        justify-content: center;
    }
}
</style>