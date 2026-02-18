<div class="tab-pane fade step" id="location" role="tabpanel" aria-labelledby="location-tab">
    <div class="row">
        <div class="col-12">

            <!-- What's Included Section -->
            <div class="settings-section">
                <h5 class="section-title">
                    <i class="las la-gift section-icon"></i>
                    {{__('What\'s Included In This Package')}}
                </h5>
                
                <div class="append-additional-includes">
                    @foreach($service->includes as $include)
                        <div class="item-card what-include-element">
                            <div class="item-content">
                                <div class="input-group">
                                    <label class="input-label">{{ __('Title') }}</label>
                                    <input class="form-input" type="text" name="include_service_title[]" value="{{ $include->title }}" placeholder="{{__('Service title')}}">
                                </div>
                                <button type="button" class="remove-btn remove-include" title="{{__('Remove')}}">
                                    <i class="las la-times"></i>
                                </button>
                            </div>
                        </div>
                    @endforeach
                </div>
                
                <div class="add-more-wrapper">
                    <a href="javascript:void(0)" class="add-more-btn add-what-includes">
                        <i class="las la-plus-circle"></i>
                        {{__('Add More')}}
                    </a>
                </div>
            </div>

            <!-- FAQs Section -->
            <div class="settings-section">
                <h5 class="section-title">
                    <i class="las la-question-circle section-icon"></i>
                    {{__('Frequently Asked Questions')}}
                </h5>
                
                <div class="append-faqs">
                    @foreach($service->faqs as $faq)
                        <div class="item-card faqs">
                            <div class="item-content">
                                <div class="input-group">
                                    <label class="input-label">{{ __('Question') }}</label>
                                    <input class="form-input" type="text" name="faqs_title[]" value="{{ $faq->title }}" placeholder="{{__('Faq Title')}}">
                                </div>
                                <div class="input-group">
                                    <label class="input-label">{{ __('Answer') }}</label>
                                    <textarea class="form-input textarea" name="faqs_description[]" rows="3" placeholder="{{__('Faq Description')}}">{{ $faq->description }}</textarea>
                                </div>
                                <button type="button" class="remove-btn remove-faqs" title="{{__('Remove')}}">
                                    <i class="las la-times"></i>
                                </button>
                            </div>
                        </div>
                    @endforeach
                </div>
                
                <div class="add-more-wrapper">
                    <a href="javascript:void(0)" class="add-more-btn add-faqs">
                        <i class="las la-plus-circle"></i>
                        {{__('Add More')}}
                    </a>
                </div>
            </div>

            <!-- Two Column Layout for Additional Info and Specification -->
            <div class="row mt-4">
                <!-- Additional Info Section -->
                <div class="col-md-6">
                    <div class="settings-section h-100">
                        <h5 class="section-title">
                            <i class="las la-info-circle section-icon"></i>
                            {{__('Additional Information')}}
                        </h5>
                        
                        <div class="append-services-info">
                            @foreach($service->serviceAdditional as $additional)
                                @if($additional->type == 'info')
                                    <div class="item-card service-info">
                                        <div class="item-content">
                                            <div class="input-group">
                                                <label class="input-label">{{ __('Title') }}</label>
                                                <div class="input-with-remove">
                                                    <input class="form-input" type="text" name="service_info_title[]" value="{{ $additional->title }}" placeholder="{{__('Service Information title')}}">
                                                    <button type="button" class="remove-btn remove-info" title="{{__('Remove')}}">
                                                        <i class="las la-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="upload-container">
                                                <label class="input-label">{{ __('Image') }}</label>
                                                <div class="upload-box">
                                                    <div class="image-preview">
                                                        @if($additional->image)
                                                            @php
                                                                $image = \App\Models\MediaUpload::find($additional->image);
                                                            @endphp
                                                            @if($image)
                                                                <img src="{{ asset('assets/uploads/media-uploader/' . $image->path) }}" alt="preview" class="preview-img">
                                                            @else
                                                                <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="preview" class="preview-img">
                                                            @endif
                                                        @else
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
                                                        {{__('Choose Image')}}
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

                <!-- Specification Section -->
                <div class="col-md-6">
                    <div class="settings-section h-100">
                        <h5 class="section-title">
                            <i class="las la-clipboard-list section-icon"></i>
                            {{__('Service Specifications')}}
                        </h5>
                        
                        <div class="append-services-specification">
                            @foreach($service->serviceAdditional as $additional)
                                @if($additional->type == 'specification')
                                    <div class="item-card service-specification">
                                        <div class="item-content">
                                            <div class="input-group">
                                                <label class="input-label">{{ __('Title') }}</label>
                                                <div class="input-with-remove">
                                                    <input class="form-input" type="text" name="service_specification_title[]" value="{{ $additional->title }}" placeholder="{{__('Service Specification title')}}">
                                                    <button type="button" class="remove-btn remove-specification" title="{{__('Remove')}}">
                                                        <i class="las la-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="upload-container">
                                                <label class="input-label">{{ __('Image') }}</label>
                                                <div class="upload-box">
                                                    <div class="image-preview">
                                                        @if($additional->image)
                                                            @php
                                                                $image = \App\Models\MediaUpload::find($additional->image);
                                                            @endphp
                                                            @if($image)
                                                                <img src="{{ asset('assets/uploads/media-uploader/' . $image->path) }}" alt="preview" class="preview-img">
                                                            @else
                                                                <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="preview" class="preview-img">
                                                            @endif
                                                        @else
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
                                                        {{__('Choose Image')}}
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

