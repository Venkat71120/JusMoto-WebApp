<div class="tab-pane fade step" id="location" role="tabpanel" aria-labelledby="location-tab">
    <div class="row">
        <div class="col-12">

            <!-- What's Included Section -->
            <div class="single-settings">
                <h5 class="input-title"> 
                    <i class="las la-gift"></i>
                    {{__('Whats Included This Package')}} 
                </h5>
                <div class="append-additional-includes">
                    <div class="single-dashboard-input what-include-element">
                        <div class="single-info-input margin-top-20">
                            <label>{{ __('Title') }}</label>
                            <input class="form-control" type="text" name="include_service_title[]" placeholder="{{__('Service title')}}">
                        </div>
                    </div>
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-what-includes"> 
                        <i class="las la-plus-circle"></i>
                        {{__('Add More')}} 
                    </a>
                </div>
            </div>

            <!-- FAQs Section -->
            <div class="single-settings margin-top-40 faq_show_hide">
                <h5 class="input-title">
                    <i class="las la-question-circle"></i>
                    {{__('Faqs')}} 
                </h5>
                <div class="append-faqs">
                    <div class="single-dashboard-input faqs">
                        <div class="single-info-input margin-top-20">
                            <label>{{ __('Question') }}</label>
                            <input class="form-control" type="text" name="faqs_title[]" placeholder="{{__('Faq Title')}}">
                        </div>
                        <div class="single-info-input margin-top-20">
                            <label>{{ __('Answer') }}</label>
                            <textarea class="form-control" name="faqs_description[]" cols="20" rows="5" placeholder="{{__('Faq Description')}}"></textarea>
                        </div>
                    </div>
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-faqs"> 
                        <i class="las la-plus-circle"></i>
                        {{__('Add More')}} 
                    </a>
                </div>
            </div>

            <!-- Two Column Layout for Additional Info and Specification -->
            <div class="row margin-top-40">
                <!-- Add Services Additional Info -->
                <div class="col-lg-6">
                    <div class="single-settings">
                        <h5 class="input-title">
                            <i class="las la-info-circle"></i>
                            {{__('Add Services Additional Info')}} 
                        </h5>
                        <div class="append-services-info">
                            <div class="single-dashboard-input service-info">
                                <div class="single-info-input margin-top-20">
                                    <label>{{ __('Title') }}</label>
                                    <input class="form-control" type="text" name="service_info_title[]" placeholder="{{__('Service Information title')}}">
                                </div>
                                <div class="upload-img margin-top-20">
                                    <div class="media-upload-btn-wrapper">
                                        <div class="img-wrap">
                                            <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="images">
                                        </div>
                                        <input type="hidden" name="service_information_image[]">
                                        <button type="button" class="btn btn-info media_upload_form_btn upload-btn-custom"
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
                        <div class="btn-wrapper margin-top-20">
                            <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-services-info"> 
                                <i class="las la-plus-circle"></i>
                                {{__('Add More')}} 
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Add Services Specification -->
                <div class="col-lg-6">
                    <div class="single-settings">
                        <h5 class="input-title">
                            <i class="las la-clipboard-list"></i>
                            {{__('Add Services Specification')}} 
                        </h5>
                        <div class="append-services-specification">
                            <div class="single-dashboard-input service-specification">
                                <div class="single-info-input margin-top-20">
                                    <label>{{ __('Title') }}</label>
                                    <input class="form-control" type="text" name="service_specification_title[]" placeholder="{{__('Service Specification title')}}">
                                </div>
                                <div class="upload-img margin-top-20">
                                    <div class="media-upload-btn-wrapper">
                                        <div class="img-wrap">
                                            <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="images">
                                        </div>
                                        <input type="hidden" name="service_specification_image[]">
                                        <button type="button" class="btn btn-info media_upload_form_btn upload-btn-custom"
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
                        <div class="btn-wrapper margin-top-20">
                            <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-services-specification"> 
                                <i class="las la-plus-circle"></i>
                                {{__('Add More')}} 
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex justify-content-end gap-3">
                    <button class="cmnBtn btn_5 btn_bg_info radius-5" id="prevBtn" type="button">
                        <i class="las la-arrow-left"></i>
                        {{__('Previous')}}
                    </button>
                    <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="nextBtn" type="button">
                        {{__('Next')}}
                        <i class="las la-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== ENHANCED CSS FOR SERVICE ATTRIBUTES TAB ===== */

/* Section Cards */
.single-settings {
    background: #fff;
    border: 1px solid #eef0f3;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}

.single-settings:hover {
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.05);
    border-color: #ffe3e3;
}

/* Section Title */
.input-title {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 20px 0;
    padding-bottom: 12px;
    border-bottom: 2px solid #f0f2f4;
    display: flex;
    align-items: center;
    gap: 10px;
}

.input-title i {
    color: #e31b23;
    font-size: 22px;
    background: #fff5f5;
    padding: 8px;
    border-radius: 10px;
}

/* Form Elements */
.single-info-input {
    margin-bottom: 20px;
}

.single-info-input label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
    letter-spacing: -0.01em;
}

.form-control {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #111827;
    transition: all 0.2s ease;
    background: #fff;
}
.cmnBtn.btn_5.btn_bg_blue:hover span, .cmnBtn.btn_5.btn_bg_blue:hover {
    color: white !important;
}
.form-control:focus {
    outline: none;
    border-color: #e31b23;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}

.form-control::placeholder {
    color: #9ca3af;
    font-size: 13px;
}

textarea.form-control {
    min-height: 100px;
    resize: vertical;
}

/* Media Upload */
.upload-img {
    background: #f9fafb;
    border: 1px dashed #e5e7eb;
    border-radius: 12px;
    padding: 16px;
    transition: all 0.2s ease;
}

.upload-img:hover {
    border-color: #e31b23;
    background: #fff5f5;
}

.img-wrap {
    width: 100%;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e5e7eb;
    margin-bottom: 12px;
}

.img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Upload Button Custom - Fixed hover text issue */
.upload-btn-custom {
    background: #fff !important;
    border: 1px solid #e5e7eb !important;
    color: #374151 !important;
    padding: 10px 20px !important;
    border-radius: 40px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px !important;
}
.upload-btn-custom:hover,
.upload-btn-custom:hover span {
    color: white !important;
}

.upload-btn-custom i {
    color: #e31b23 !important;
    font-size: 16px !important;
    transition: all 0.2s ease !important;
}

.upload-btn-custom span {
    color: #374151 !important;
    transition: all 0.2s ease !important;
}

.upload-btn-custom:hover {
    background: #e31b23 !important;
    border-color: #e31b23 !important;
}

.upload-btn-custom:hover i {
    color: white !important;
}
.upload-btn-custom:hover,
.upload-btn-custom:hover span {
    color: white !important;
}

.upload-btn-custom:hover span {
    color: white !important;
}

/* Hide image format info */
.media-upload-btn-wrapper small {
    display: none;
}

/* Add More Buttons */
.cmnBtn.btn_5.btn_bg_blue {
    background: #fff;
    border: 1px solid #e5e7eb;
    color: #374151;
    padding: 10px 24px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
}

.cmnBtn.btn_5.btn_bg_blue i {
    color: #e31b23;
    font-size: 18px;
    transition: all 0.2s ease;
}

.cmnBtn.btn_5.btn_bg_blue:hover {
    background: #e31b23;
    border-color: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.cmnBtn.btn_5.btn_bg_blue:hover span, .cmnBtn.btn_5.btn_bg_blue:hover {
    color: rgb(20, 20, 20) !important;
}

/* Navigation Buttons */
.cmnBtn.btn_5.btn_bg_info {
    background: #fff;
    border: 1px solid #e5e7eb;
    color: #374151;
    padding: 12px 30px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.cmnBtn.btn_5.btn_bg_info:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
    transform: translateX(-2px);
}

.cmnBtn.btn_5.btn_bg_blue.radius-5#nextBtn {
    background: #e31b23;
    border: none;
    color: white;
    padding: 12px 30px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.cmnBtn.btn_5.btn_bg_blue.radius-5#nextBtn:hover {
    background: #b11218;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
}

.cmnBtn.btn_5.btn_bg_blue.radius-5#nextBtn i {
    color: white;
}

/* Grid System */
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
}

.col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 12px;
    padding-left: 12px;
}

/* Margin Utilities */
.margin-top-20 { margin-top: 20px; }
.margin-top-40 { margin-top: 40px; }
.mt-5 { margin-top: 32px; }
.gap-3 { gap: 16px; }

/* Dark Mode */
.dark-mode .single-settings {
    background: #1f2937;
    border-color: #374151;
}

.dark-mode .input-title {
    color: #f3f4f6;
    border-bottom-color: #374151;
}

.dark-mode .input-title i {
    background: #374151;
}

.dark-mode .form-control {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
}

.dark-mode .upload-img {
    background: #374151;
    border-color: #4b5563;
}

.dark-mode .img-wrap {
    background: #1f2937;
    border-color: #4b5563;
}

.dark-mode .upload-btn-custom {
    background: #1f2937 !important;
    border-color: #4b5563 !important;
}

.dark-mode .upload-btn-custom span {
    color: #e5e7eb !important;
}

/* Responsive */
@media (max-width: 992px) {
    .col-lg-6 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .single-settings {
        padding: 20px;
    }
    
    .btn_wrapper {
        flex-direction: column;
    }
    
    .cmnBtn.btn_5 {
        width: 100%;
        justify-content: center;
    }
}

/* Remove Button Styling */
.remove-include,
.remove-faqs,
.remove-info,
.remove-specification {
    background: #fff5f5;
    border: 1px solid #ffe3e3;
    color: #e31b23;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-left: 12px;
}

.remove-include:hover,
.remove-faqs:hover,
.remove-info:hover,
.remove-specification:hover {
    background: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(227, 27, 35, 0.2);
}
</style>