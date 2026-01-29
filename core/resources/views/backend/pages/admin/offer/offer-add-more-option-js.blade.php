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
                    <select name="offer_service_id[]" id="service" class="form-select service-select">\
                        <option value="">{{__('Select Service')}}</option>\
                        @foreach($services as $service)\
                        @if($service->status== 1 && $service->is_published == 1 && $service->type==0)\
                        <option value="{{ $service->id }}" data-price="{{ $service->price }}">{{ $service->title }}</option>\
                        @endif\
                        @endforeach\
                    </select>\
                    </div>\
                    <span class="btn btn-danger remove-include mt-2"><i class="las la-times"></i></span>\
                </div>'
                    );
                    $('.service-select').last().select2({
                        placeholder: '{{ __("Select Service") }}',  // Placeholder text
                        allowClear: true, // Allow clearing the selection
                    });
                }
            });
            // remove include service
            $(document).on('click', ".remove-include", function() {
                $(this).closest('.what-include-element').remove();
            });

             // add what new include
             $(".add-what-products").on('click',function(){
                let  total_element = $(".what-include-product").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-additional-products").append(
                        '<div class="single-dashboard-input what-include-product">\
                        <div class="single-info-input margin-top-20">\
                    <select name="offer_product_id[]" id="product" class="form-select service-select">\
                        <option value="">{{__('Select Product')}}</option>\
                        @foreach($services as $service)\
                        @if($service->status== 1 && $service->is_published == 1 && $service->type==1)\
                        <option value="{{ $service->id }}" data-price="{{ $service->price }}">{{ $service->title }}</option>\
                        @endif\
                        @endforeach\
                    </select>\
                    </div>\
                    <span class="btn btn-danger remove-product mt-2"><i class="las la-times"></i></span>\
                </div>'
                    );
                    $('.service-select').last().select2({
                        placeholder: '{{ __("Select Service") }}',  // Placeholder text
                        allowClear: true, // Allow clearing the selection
                    });
                }
            });
            // remove include service
            $(document).on('click', ".remove-product", function() {
                $(this).closest('.what-include-product').remove();
            });







        });
    })(jQuery)
</script>

