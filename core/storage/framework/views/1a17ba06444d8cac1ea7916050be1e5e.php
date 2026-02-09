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
                                <label><?php echo e(__('Title')); ?> <span class="text-danger">*</span> </label>\
                                    <input class="form-control" type="text" name="include_product_title[]" placeholder="<?php echo e(__('Product title')); ?>">\
                                </div>\
                                <span class="btn btn-danger remove-include margin-top-40"><i class="las la-times"></i></span>\
                        </div>'
                    );
                }
            });


            // remove include product
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
                                <input class="form-control" type="text" name="faqs_title[]" placeholder="<?php echo e(__('Faq Title')); ?>">\
                                </div>\
                                 <div class="single-info-input margin-top-20">\
                                    <textarea class="form-control" name="faqs_description[]" cols="20" rows="5" placeholder="<?php echo e(__('Faq Description')); ?>"></textarea>\
                                </div>\
                                <span class="btn btn-danger remove-faqs margin-top-15"><i class="las la-times"></i></span>\
                            </div>');
                }
            })

            // remove faqs
            $(document).on('click', ".remove-faqs", function() {
                $(this).closest('.faqs').remove();
            })


            // add new information
            $(".add-product-info").on('click',function(){
                let  total_element = $(".product-info").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-product-info").append(
                        '<div class="single-dashboard-input product-info">\
                        <div class="row">\
                            <div class="col-lg-12">\
                                <div class="single-info-input margin-top-20" >\
                                    <label><?php echo e(__('Title')); ?></label>\
                                    <div class="d-flex align-items-center">\
                                        <input class="form-control me-2" type="text" name="product_info_title[]" placeholder="<?php echo e(__('Product Information title')); ?>">\
                                        <span class="btn btn-danger remove-info"><i class="las la-times"></i></span>\
                                     </div>\
                                </div>\
                            </div>\
                            <div class="col-lg-12 mt-4">\
                                <div class="upload-img">\
                                    <div class="media-upload-btn-wrapper">\
                                    <div class="img-wrap">\
                                        <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="images" class="w-100">\
                                    </div>\
                                    <input type="hidden" name="product_information_image[]">\
                                    <button type="button" class="btn btn-info media_upload_form_btn"\
                                        data-btntitle="<?php echo e(__('Select Image')); ?>"\
                                        data-modaltitle="<?php echo e(__('Upload Image')); ?>"\
                                        data-bs-toggle="modal"\
                                        data-bs-target="#media_upload_modal">\
                                    <?php echo e(__('Upload Main Image')); ?>\
                                    </button>\
                                    <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>\
                                    <small><?php echo e(__('recommended size 810x450')); ?></small>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                        </div>');
                }
            });

            // remove product info
            $(document).on('click', ".remove-info", function() {
                $(this).closest('.product-info').remove();
            });

             // add new specification
             $(".add-product-specification").on('click',function(){
                let  total_element = $(".product-specification").length;
                let max = 15;
                if(total_element < max ){
                    $(".append-product-specification").append(
                        '<div class="single-dashboard-input product-specification">\
                        <div class="row">\
                            <div class="col-lg-12">\
                                <div class="single-info-input margin-top-20" >\
                                    <label><?php echo e(__('Title')); ?></label>\
                                    <div class="d-flex align-items-center">\
                                         <input class="form-control" type="text" name="product_specification_title[]" placeholder="<?php echo e(__('product Specification title')); ?>">\
                                        <span class="btn btn-danger remove-specification"><i class="las la-times"></i></span>\
                                     </div>\
                                </div>\
                            </div>\
                            <div class="col-lg-12 mt-4">\
                                <div class="upload-img">\
                                    <div class="media-upload-btn-wrapper">\
                                    <div class="img-wrap">\
                                        <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="images" class="w-100">\
                                    </div>\
                                    <input type="hidden" name="product_specification_image[]">\
                                    <button type="button" class="btn btn-info media_upload_form_btn"\
                                        data-btntitle="<?php echo e(__('Select Image')); ?>"\
                                        data-modaltitle="<?php echo e(__('Upload Image')); ?>"\
                                        data-bs-toggle="modal"\
                                        data-bs-target="#media_upload_modal">\
                                    <?php echo e(__('Upload Main Image')); ?>\
                                    </button>\
                                    <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>\
                                    <small><?php echo e(__('recommended size 810x450')); ?></small>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                        </div>');
                }
            });

            // remove product specification
            $(document).on('click', ".remove-specification", function() {
                $(this).closest('.product-specification').remove();
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
                $("#product_total_price").val(sum);
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
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/products/admin/product-add-more-option-js.blade.php ENDPATH**/ ?>