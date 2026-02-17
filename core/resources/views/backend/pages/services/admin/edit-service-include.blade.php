<div class="tab-pane fade step" id="location" role="tabpanel" aria-labelledby="location-tab">
    <div class="row">
        <div class="col-12">

            <div class="single-settings">
                <h5 class="input-title"> {{__('Whats Included This Package')}} </h5>
                <div class="append-additional-includes">
                    @foreach($service->includes as $include)
                        <div class="single-dashboard-input what-include-element">
                            <div class="single-info-input margin-top-20">
                                <label>{{ __('Title') }}</label>
                                <input class="form-control" type="text" name="include_service_title[]" value="{{ $include->title }}" placeholder="{{__('Service title')}}">
                            </div>
                            <span class="btn btn-danger remove-include margin-top-40"><i class="las la-times"></i></span>
                        </div>
                    @endforeach
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-what-includes"> {{__('Add More')}} </a>
                </div>
            </div>



            <div class="single-settings margin-top-40 faq_show_hide">
                <h5 class="input-title"> {{__('Faqs')}} </h5>
                <div class="append-faqs">
                    @foreach($service->faqs as $faq)
                        <div class="single-dashboard-input faqs">
                            <div class="single-info-input margin-top-20">
                                <input class="form-control" type="text" name="faqs_title[]" value="{{ $faq->title }}" placeholder="{{__('Faq Title')}}">
                            </div>
                            <div class="single-info-input margin-top-20">
                                <textarea class="form-control" name="faqs_description[]" cols="20" rows="5" placeholder="{{__('Faq Description')}}">{{ $faq->description }}</textarea>
                            </div>
                            <span class="btn btn-danger remove-faqs  margin-top-15"><i class="las la-times"></i></span>
                        </div>
                    @endforeach
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-faqs"> {{__('Add More')}} </a>
                </div>
            </div>
            <div class="single-settings margin-top-40">
                <h5 class="input-title"> {{__('Add Services Additional Info')}} </h5>
                <div class="append-services-info">
                    @foreach($service->serviceAdditional as $additional)
                        @if($additional->type =='info')
                            <div class="single-dashboard-input service-info">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="d-flex g-2">

                                            <div class="single-info-input margin-top-20 me-2">
                                                <label>{{ __('Title') }}</label>
                                                <input class="form-control" type="text" name="service_info_title[]" value="{{ $additional->title }}">
                                            </div>
                                            <span class="btn btn-danger remove-info margin-top-40"><i class="las la-times"></i></span>
                                        </div>    
                                    </div>
                                    <div class="col-lg-12 mt-4">
                                        <div class="upload-img">
                                            <div class="media-upload-btn-wrapper">
                                            <div class="img-wrap">
                                                {!! render_image_markup_by_attachment_id($additional->image,'','thumb') !!}
                                            </div>
                                            <input type="hidden" name="service_information_image[]" value="{{ $additional->image }}">
                                            <button type="button" class="btn btn-info media_upload_form_btn"
                                                data-btntitle="{{__('Select Image')}}"
                                                data-modaltitle="{{__('Upload Image')}}"
                                                data-bs-toggle="modal"
                                                data-bs-target="#media_upload_modal">
                                            {{__('Upload Main Image')}}
                                            </button>
                                            <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                                            <small>{{ __('recommended size 810x450') }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        @endif      
                    @endforeach
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-services-info"> {{__('Add More')}} </a>
                </div>
            </div>

            <div class="single-settings margin-top-40">
                <h5 class="input-title"> {{__('Add Services Specification')}} </h5>
                <div class="append-services-specification">
                    @foreach($service->serviceAdditional as $additional)
                        @if($additional->type =='specification')
                            <div class="single-dashboard-input service-specification">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="d-flex g-2">
                                            <div class="single-info-input margin-top-20 me-2">
                                                <label>{{ __('Title') }}</label>
                                                <input class="form-control" type="text" name="service_specification_title[]" value="{{ $additional->title }}">
                                            </div>
                                            <span class="btn btn-danger remove-specification margin-top-40"><i class="las la-times"></i></span>
                                        </div>    

                                    </div>
                                    <div class="col-lg-12 mt-4">
                                        <div class="upload-img">
                                            <div class="media-upload-btn-wrapper">
                                            <div class="img-wrap">
                                                {!! render_image_markup_by_attachment_id($additional->image,'','thumb') !!}
                                            </div>
                                            <input type="hidden" name="service_specification_image[]" value="{{ $additional->image }}">
                                            <button type="button" class="btn btn-info media_upload_form_btn"
                                                data-btntitle="{{__('Select Image')}}"
                                                data-modaltitle="{{__('Upload Image')}}"
                                                data-bs-toggle="modal"
                                                data-bs-target="#media_upload_modal">
                                                {{__('Upload Main Image')}}
                                            </button>
                                            <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                                            <small>{{ __('recommended size 810x450') }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        @endif
                    @endforeach        
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-services-specification"> {{__('Add More')}} </a>
                </div>
            </div>


            <!-- start previous / next buttons -->
            <div  class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex justify-content-end gap-3">
                    <button class="cmnBtn btn_5 btn_bg_info radius-5" id="prevBtn" type="button">{{__('Previous')}}</button>
                    <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="nextBtn" type="button">{{__('Next')}}</button>
                </div>
            </div>

        </div>
    </div>
</div>
