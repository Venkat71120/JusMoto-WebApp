<script>
    (function ($) {
        "use strict";
        $(document).ready(function() {

            // add what new include
            $(".add-what-includes").on('click',function(){
                let  total_element = $(".what-include-element").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-additional-includes").append(
                        '<div class="single-dashboard-input what-include-element">\
                            <div class="single-info-input margin-top-20">\
                                <label>{{ __('Title') }} </label>\
                                    <input class="form-control" type="text" name="include_service_title[]" placeholder="{{__('Service title')}}">\
                                </div>\
                                <span class="btn btn-danger remove-include margin-top-40"><i class="las la-times"></i></span>\
                        </div>'
                    );
                }
            });


            // remove include service
            $(document).on('click', ".remove-include", function() {
                $(this).closest('.what-include-element').remove();
            });

           



            // add faqs
            $(".add-faqs").on('click',function(){
                let  total_element = $(".faqs").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-faqs").append(
                        '<div class="single-dashboard-input faqs">\
                            <div class="single-info-input margin-top-20">\
                                <input class="form-control" type="text" name="faqs_title[]" placeholder="{{__('Faq Title')}}">\
                                </div>\
                                 <div class="single-info-input margin-top-20">\
                                    <textarea class="form-control" name="faqs_description[]" cols="20" rows="5" placeholder="{{__('Faq Description')}}"></textarea>\
                                </div>\
                                <span class="btn btn-danger remove-faqs margin-top-20"><i class="las la-times"></i></span>\
                            </div>');
                }
            })

            // remove faqs
            $(document).on('click', ".remove-faqs", function() {
                $(this).closest('.faqs').remove();
            })


            // add new information
            $(".add-services-info").on('click',function(){
                let  total_element = $(".service-info").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-services-info").append(
                        '<div class="single-dashboard-input service-info">\
                        <div class="row">\
                            <div class="col-lg-12">\
                                <div class="single-info-input margin-top-20" >\
                                    <label>{{ __('Title') }}</label>\
                                    <div class="d-flex align-items-center">\
                                        <input class="form-control me-2" type="text" name="service_info_title[]" placeholder="{{__('Service Information title')}}">\
                                        <span class="btn btn-danger remove-info"><i class="las la-times"></i></span>\
                                     </div>\
                                </div>\
                            </div>\
                            <div class="col-lg-12 mt-4">\
                                <div class="upload-img">\
                                    <div class="media-upload-btn-wrapper">\
                                    <div class="img-wrap">\
                                        <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="images" class="w-100">\
                                    </div>\
                                    <input type="hidden" name="service_information_image[]">\
                                    <button type="button" class="btn btn-info media_upload_form_btn"\
                                        data-btntitle="{{__('Select Image')}}"\
                                        data-modaltitle="{{__('Upload Image')}}"\
                                        data-bs-toggle="modal"\
                                        data-bs-target="#media_upload_modal">\
                                    {{__('Upload Main Image')}}\
                                    </button>\
                                    <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>\
                                    <small>{{ __('recommended size 810x450') }}</small>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                        </div>');
                }
            });

            // remove service info
            $(document).on('click', ".remove-info", function() {
                $(this).closest('.service-info').remove();
            });

             // add new specification
             $(".add-services-specification").on('click',function(){
                let  total_element = $(".service-specification").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-services-specification").append(
                        '<div class="single-dashboard-input service-specification">\
                        <div class="row">\
                            <div class="col-lg-12">\
                                <div class="single-info-input margin-top-20" >\
                                    <label>{{ __('Title') }}</label>\
                                    <div class="d-flex align-items-center">\
                                         <input class="form-control" type="text" name="service_specification_title[]" placeholder="{{__('Service Specification title')}}">\
                                        <span class="btn btn-danger remove-specification"><i class="las la-times"></i></span>\
                                     </div>\
                                </div>\
                            </div>\
                            <div class="col-lg-12 mt-4">\
                                <div class="upload-img">\
                                    <div class="media-upload-btn-wrapper">\
                                    <div class="img-wrap">\
                                        <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="images" class="w-100">\
                                    </div>\
                                    <input type="hidden" name="service_specification_image[]">\
                                    <button type="button" class="btn btn-info media_upload_form_btn"\
                                        data-btntitle="{{__('Select Image')}}"\
                                        data-modaltitle="{{__('Upload Image')}}"\
                                        data-bs-toggle="modal"\
                                        data-bs-target="#media_upload_modal">\
                                    {{__('Upload Main Image')}}\
                                    </button>\
                                    <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>\
                                    <small>{{ __('recommended size 810x450') }}</small>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                        </div>');
                }
            });

            // remove service specification
            $(document).on('click', ".remove-specification", function() {
                $(this).closest('.service-specification').remove();
            });

            //total price
            $(document).on("change", ".include-price", function() {
                var sum = 0;
                $(".include-price").each(function() {
                    if(isNaN($(this).val())){
                        alert('Please Enter Numeric Value only')
                    }else{
                        sum += +$(this).val();
                    }
                });
                $("#service_total_price").val(sum);
            });

            //include quantity
            $(document).on("change", ".numeric-value", function() {
                if(isNaN($(this).val())){
                    alert('Please Enter Numeric Value only')
                }
            });
        });
    })(jQuery)
</script>
