<script>
    (function ($) {
        "use strict";
        
        $(document).ready(function() {
            
            // ===== WHAT'S INCLUDED SECTION =====
            // Add new include item
            $(".add-what-includes").on('click', function() {
                let total_element = $(".what-include-element").length;
                let max = 15;
                
                if (total_element < max) {
                    $(".append-additional-includes").append(
                        '<div class="single-dashboard-input what-include-element">\
                            <div class="single-info-input margin-top-20">\
                                <label><?php echo e(__('Title')); ?> </label>\
                                <div class="d-flex align-items-center">\
                                    <input class="form-control me-2" type="text" name="include_service_title[]" placeholder="<?php echo e(__('Service title')); ?>">\
                                    <button type="button" class="btn btn-danger remove-include" style="min-width: 40px;">\
                                        <i class="las la-trash"></i>\
                                    </button>\
                                </div>\
                            </div>\
                        </div>'
                    );
                    
                    // Show success message
                    if (typeof toastr !== 'undefined') {
                        toastr.success("<?php echo e(__('New item added')); ?>", "<?php echo e(__('Success')); ?>");
                    }
                } else {
                    if (typeof toastr !== 'undefined') {
                        toastr.warning("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('items allowed')); ?>", "<?php echo e(__('Limit reached')); ?>");
                    } else {
                        alert("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('items allowed')); ?>");
                    }
                }
            });

            // Remove include service with confirmation
            $(document).on('click', ".remove-include", function(e) {
                e.preventDefault();
                let item = $(this).closest('.what-include-element');
                
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: '<?php echo e(__("Remove item?")); ?>',
                        text: '<?php echo e(__("Are you sure you want to remove this item?")); ?>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: '<?php echo e(__("Yes, remove")); ?>',
                        cancelButtonText: '<?php echo e(__("Cancel")); ?>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            item.fadeOut(300, function() {
                                $(this).remove();
                                if (typeof toastr !== 'undefined') {
                                    toastr.success("<?php echo e(__('Item removed')); ?>", "<?php echo e(__('Success')); ?>");
                                }
                            });
                        }
                    });
                } else {
                    if (confirm('<?php echo e(__("Are you sure you want to remove this item?")); ?>')) {
                        item.remove();
                    }
                }
            });

            // ===== FAQS SECTION =====
            // Add new FAQ
            $(".add-faqs").on('click', function() {
                let total_element = $(".faqs").length;
                let max = 15;
                
                if (total_element < max) {
                    $(".append-faqs").append(
                        '<div class="single-dashboard-input faqs">\
                            <div class="single-info-input margin-top-20">\
                                <label><?php echo e(__('Question')); ?></label>\
                                <div class="d-flex align-items-center">\
                                    <input class="form-control me-2" type="text" name="faqs_title[]" placeholder="<?php echo e(__('Faq Title')); ?>">\
                                    <button type="button" class="btn btn-danger remove-faqs" style="min-width: 40px;">\
                                        <i class="las la-trash"></i>\
                                    </button>\
                                </div>\
                            </div>\
                            <div class="single-info-input margin-top-20">\
                                <label><?php echo e(__('Answer')); ?></label>\
                                <textarea class="form-control" name="faqs_description[]" cols="20" rows="5" placeholder="<?php echo e(__('Faq Description')); ?>"></textarea>\
                            </div>\
                        </div>'
                    );
                    
                    if (typeof toastr !== 'undefined') {
                        toastr.success("<?php echo e(__('New FAQ added')); ?>", "<?php echo e(__('Success')); ?>");
                    }
                } else {
                    if (typeof toastr !== 'undefined') {
                        toastr.warning("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('FAQs allowed')); ?>", "<?php echo e(__('Limit reached')); ?>");
                    } else {
                        alert("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('FAQs allowed')); ?>");
                    }
                }
            });

            // Remove FAQ with confirmation
            $(document).on('click', ".remove-faqs", function(e) {
                e.preventDefault();
                let item = $(this).closest('.faqs');
                
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: '<?php echo e(__("Remove FAQ?")); ?>',
                        text: '<?php echo e(__("Are you sure you want to remove this FAQ?")); ?>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: '<?php echo e(__("Yes, remove")); ?>',
                        cancelButtonText: '<?php echo e(__("Cancel")); ?>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            item.fadeOut(300, function() {
                                $(this).remove();
                                if (typeof toastr !== 'undefined') {
                                    toastr.success("<?php echo e(__('FAQ removed')); ?>", "<?php echo e(__('Success')); ?>");
                                }
                            });
                        }
                    });
                } else {
                    if (confirm('<?php echo e(__("Are you sure you want to remove this FAQ?")); ?>')) {
                        item.remove();
                    }
                }
            });

            // ===== ADDITIONAL INFO SECTION =====
            // Add new information
            $(".add-services-info").on('click', function() {
                let total_element = $(".service-info").length;
                let max = 15;
                
                if (total_element < max) {
                    $(".append-services-info").append(
                        '<div class="single-dashboard-input service-info">\
                            <div class="row">\
                                <div class="col-lg-12">\
                                    <div class="single-info-input margin-top-20">\
                                        <label><?php echo e(__('Title')); ?></label>\
                                        <div class="d-flex align-items-center">\
                                            <input class="form-control me-2" type="text" name="service_info_title[]" placeholder="<?php echo e(__('Service Information title')); ?>">\
                                            <button type="button" class="btn btn-danger remove-info" style="min-width: 40px;">\
                                                <i class="las la-trash"></i>\
                                            </button>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-lg-12 mt-4">\
                                    <div class="upload-img">\
                                        <div class="media-upload-btn-wrapper">\
                                            <div class="img-wrap">\
                                                <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="images" class="w-100 preview-img">\
                                            </div>\
                                            <input type="hidden" name="service_information_image[]" class="image-input">\
                                            <button type="button" class="btn btn-info media_upload_form_btn"\
                                                data-btntitle="<?php echo e(__('Select Image')); ?>"\
                                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"\
                                                data-bs-toggle="modal"\
                                                data-bs-target="#media_upload_modal">\
                                                <i class="las la-cloud-upload-alt"></i>\
                                                <?php echo e(__('Upload Image')); ?>\
                                            </button>\
                                            <div class="image-info mt-2">\
                                                <small><i class="las la-info-circle"></i> <?php echo e(__('Format: jpg,jpeg,png,gif,webp')); ?></small><br>\
                                                <small><i class="las la-image"></i> <?php echo e(__('Recommended: 810x450')); ?></small>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>'
                    );
                    
                    if (typeof toastr !== 'undefined') {
                        toastr.success("<?php echo e(__('New information added')); ?>", "<?php echo e(__('Success')); ?>");
                    }
                } else {
                    if (typeof toastr !== 'undefined') {
                        toastr.warning("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('items allowed')); ?>", "<?php echo e(__('Limit reached')); ?>");
                    } else {
                        alert("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('items allowed')); ?>");
                    }
                }
            });

            // Remove service info with confirmation
            $(document).on('click', ".remove-info", function(e) {
                e.preventDefault();
                let item = $(this).closest('.service-info');
                
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: '<?php echo e(__("Remove information?")); ?>',
                        text: '<?php echo e(__("Are you sure you want to remove this information?")); ?>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: '<?php echo e(__("Yes, remove")); ?>',
                        cancelButtonText: '<?php echo e(__("Cancel")); ?>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            item.fadeOut(300, function() {
                                $(this).remove();
                                if (typeof toastr !== 'undefined') {
                                    toastr.success("<?php echo e(__('Information removed')); ?>", "<?php echo e(__('Success')); ?>");
                                }
                            });
                        }
                    });
                } else {
                    if (confirm('<?php echo e(__("Are you sure you want to remove this information?")); ?>')) {
                        item.remove();
                    }
                }
            });

            // ===== SPECIFICATIONS SECTION =====
            // Add new specification
            $(".add-services-specification").on('click', function() {
                let total_element = $(".service-specification").length;
                let max = 15;
                
                if (total_element < max) {
                    $(".append-services-specification").append(
                        '<div class="single-dashboard-input service-specification">\
                            <div class="row">\
                                <div class="col-lg-12">\
                                    <div class="single-info-input margin-top-20">\
                                        <label><?php echo e(__('Title')); ?></label>\
                                        <div class="d-flex align-items-center">\
                                            <input class="form-control me-2" type="text" name="service_specification_title[]" placeholder="<?php echo e(__('Service Specification title')); ?>">\
                                            <button type="button" class="btn btn-danger remove-specification" style="min-width: 40px;">\
                                                <i class="las la-trash"></i>\
                                            </button>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-lg-12 mt-4">\
                                    <div class="upload-img">\
                                        <div class="media-upload-btn-wrapper">\
                                            <div class="img-wrap">\
                                                <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="images" class="w-100 preview-img">\
                                            </div>\
                                            <input type="hidden" name="service_specification_image[]" class="image-input">\
                                            <button type="button" class="btn btn-info media_upload_form_btn"\
                                                data-btntitle="<?php echo e(__('Select Image')); ?>"\
                                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"\
                                                data-bs-toggle="modal"\
                                                data-bs-target="#media_upload_modal">\
                                                <i class="las la-cloud-upload-alt"></i>\
                                                <?php echo e(__('Upload Image')); ?>\
                                            </button>\
                                            <div class="image-info mt-2">\
                                                <small><i class="las la-info-circle"></i> <?php echo e(__('Format: jpg,jpeg,png,gif,webp')); ?></small><br>\
                                                <small><i class="las la-image"></i> <?php echo e(__('Recommended: 810x450')); ?></small>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>'
                    );
                    
                    if (typeof toastr !== 'undefined') {
                        toastr.success("<?php echo e(__('New specification added')); ?>", "<?php echo e(__('Success')); ?>");
                    }
                } else {
                    if (typeof toastr !== 'undefined') {
                        toastr.warning("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('items allowed')); ?>", "<?php echo e(__('Limit reached')); ?>");
                    } else {
                        alert("<?php echo e(__('Maximum')); ?> " + max + " <?php echo e(__('items allowed')); ?>");
                    }
                }
            });

            // Remove service specification with confirmation
            $(document).on('click', ".remove-specification", function(e) {
                e.preventDefault();
                let item = $(this).closest('.service-specification');
                
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: '<?php echo e(__("Remove specification?")); ?>',
                        text: '<?php echo e(__("Are you sure you want to remove this specification?")); ?>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#e31b23',
                        cancelButtonColor: '#6b7280',
                        confirmButtonText: '<?php echo e(__("Yes, remove")); ?>',
                        cancelButtonText: '<?php echo e(__("Cancel")); ?>'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            item.fadeOut(300, function() {
                                $(this).remove();
                                if (typeof toastr !== 'undefined') {
                                    toastr.success("<?php echo e(__('Specification removed')); ?>", "<?php echo e(__('Success')); ?>");
                                }
                            });
                        }
                    });
                } else {
                    if (confirm('<?php echo e(__("Are you sure you want to remove this specification?")); ?>')) {
                        item.remove();
                    }
                }
            });

            // ===== MEDIA UPLOAD HANDLER =====
            // Handle media upload for dynamically added items
            $(document).on('click', '.media_upload_form_btn', function(e) {
                e.preventDefault();
                
                let parent = $(this).closest('.media-upload-btn-wrapper');
                let inputField = parent.find('.image-input');
                let previewImg = parent.find('.preview-img');
                
                // Store reference for callback
                window.mediaUploadCallback = function(imageData) {
                    if (imageData && imageData.image_id) {
                        inputField.val(imageData.image_id);
                        previewImg.attr('src', imageData.img_url);
                        
                        if (typeof toastr !== 'undefined') {
                            toastr.success("<?php echo e(__('Image uploaded successfully')); ?>", "<?php echo e(__('Success')); ?>");
                        }
                    }
                };
            });

            // ===== PRICE CALCULATION =====
            // Calculate total price
            $(document).on("change", ".include-price", function() {
                let sum = 0;
                let isValid = true;
                
                $(".include-price").each(function() {
                    let value = $(this).val();
                    
                    if (value && isNaN(value)) {
                        isValid = false;
                        if (typeof toastr !== 'undefined') {
                            toastr.error("<?php echo e(__('Please enter numeric value only')); ?>", "<?php echo e(__('Invalid input')); ?>");
                        } else {
                            alert('<?php echo e(__("Please Enter Numeric Value only")); ?>');
                        }
                        $(this).addClass('is-invalid');
                        return false;
                    } else {
                        $(this).removeClass('is-invalid');
                        sum += parseFloat(value) || 0;
                    }
                });
                
                if (isValid) {
                    $("#service_total_price").val(sum.toFixed(2));
                }
            });

            // Validate numeric values
            $(document).on("change", ".numeric-value", function() {
                let value = $(this).val();
                
                if (value && isNaN(value)) {
                    if (typeof toastr !== 'undefined') {
                        toastr.error("<?php echo e(__('Please enter numeric value only')); ?>", "<?php echo e(__('Invalid input')); ?>");
                    } else {
                        alert('<?php echo e(__("Please Enter Numeric Value only")); ?>');
                    }
                    $(this).addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid');
                }
            });

            // Real-time numeric validation
            $(document).on("keyup", ".numeric-value, .include-price", function() {
                let value = $(this).val();
                
                if (value && isNaN(value)) {
                    $(this).addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid');
                }
            });

            // Add some CSS for validation
            $('<style>')
                .prop('type', 'text/css')
                .html(`
                    .is-invalid {
                        border-color: #e31b23 !important;
                        background-color: #fff5f5 !important;
                    }
                    .btn-danger {
                        background: #e31b23;
                        border-color: #e31b23;
                        color: white;
                        transition: all 0.2s ease;
                    }
                    .btn-danger:hover {
                        background: #b11218;
                        border-color: #b11218;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 10px rgba(227, 27, 35, 0.2);
                    }
                    .image-info {
                        font-size: 11px;
                        color: #6b7280;
                        margin-top: 8px;
                    }
                    .image-info i {
                        color: #e31b23;
                        margin-right: 4px;
                    }
                `)
                .appendTo('head');

            // Set up CSRF token for all AJAX requests
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

        });
    })(jQuery)
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/service-details-basic-info.blade.php ENDPATH**/ ?>