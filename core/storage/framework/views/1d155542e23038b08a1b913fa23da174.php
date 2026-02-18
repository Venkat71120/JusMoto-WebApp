<div class="tab-pane fade step" id="location" role="tabpanel" aria-labelledby="location-tab">
    <div class="row">
        <div class="col-12">

            <div class="single-settings">
                <h5 class="input-title"> <?php echo e(__('Whats Included This Package')); ?> </h5>
                <div class="append-additional-includes">
                    <?php $__currentLoopData = $product->includes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $include): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="single-dashboard-input what-include-element">
                            <div class="single-info-input margin-top-20">
                                <label><?php echo e(__('Title')); ?> </label>
                                <input class="form-control" type="text" name="include_product_title[]" value="<?php echo e($include->title); ?>" placeholder="<?php echo e(__('Product title')); ?>">
                            </div>
                            <span class="btn btn-danger remove-include  margin-top-40"><i class="las la-times"></i></span>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-what-includes"> <?php echo e(__('Add More')); ?> </a>
                </div>
            </div>



            <div class="single-settings margin-top-40 faq_show_hide">
                <h5 class="input-title"> <?php echo e(__('Faqs')); ?> </h5>
                <div class="append-faqs">
                    <?php $__currentLoopData = $product->faqs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $faq): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="single-dashboard-input faqs">
                            <div class="single-info-input margin-top-20">
                                <input class="form-control" type="text" name="faqs_title[]" value="<?php echo e($faq->title); ?>" placeholder="<?php echo e(__('Faq Title')); ?>">
                            </div>
                            <div class="single-info-input margin-top-20">
                                <textarea class="form-control" name="faqs_description[]" cols="20" rows="5" placeholder="<?php echo e(__('Faq Description')); ?>"><?php echo e($faq->description); ?></textarea>
                            </div>
                            <span class="btn btn-danger remove-faqs  margin-top-15"><i class="las la-times"></i></span>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-faqs"> <?php echo e(__('Add More')); ?> </a>
                </div>
            </div>
            <div class="single-settings margin-top-40">
                <h5 class="input-title"> <?php echo e(__('Add Products Additional Info')); ?> </h5>
                <div class="append-product-info">
                    <?php $__currentLoopData = $product->serviceAdditional; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $additional): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php if($additional->type =='info'): ?>
                            <div class="single-dashboard-input product-info">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="d-flex g-2">
                                            <div class="single-info-input margin-top-20 me-2">
                                                <label><?php echo e(__('Title')); ?></label>
                                                <input class="form-control" type="text" name="product_info_title[]" value="<?php echo e($additional->title); ?>">
                                            </div>
                                            <span class="btn btn-danger remove-info  margin-top-40"><i class="las la-times"></i></span>
                                        </div>    
                                    </div>
                                    <div class="col-lg-12 mt-4">
                                        <div class="upload-img">
                                            <div class="media-upload-btn-wrapper">
                                            <div class="img-wrap">
                                                <?php echo render_image_markup_by_attachment_id($additional->image,'','thumb'); ?>

                                            </div>
                                            <input type="hidden" name="product_information_image[]" value="<?php echo e($additional->image); ?>">
                                            <button type="button" class="btn btn-info media_upload_form_btn"
                                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                                data-bs-toggle="modal"
                                                data-bs-target="#media_upload_modal">
                                            <?php echo e(__('Upload Main Image')); ?>

                                            </button>
                                            <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                                            <small><?php echo e(__('recommended size 810x450')); ?></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        <?php endif; ?>      
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-product-info"> <?php echo e(__('Add More')); ?> </a>
                </div>
            </div>

            <div class="single-settings margin-top-40">
                <h5 class="input-title"> <?php echo e(__('Add Products Specification')); ?> </h5>
                <div class="append-product-specification">
                    <?php $__currentLoopData = $product->serviceAdditional; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $additional): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php if($additional->type =='specification'): ?>
                            <div class="single-dashboard-input product-specification">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="d-flex g-2">
                                            <div class="single-info-input margin-top-20 me-2">
                                                <label><?php echo e(__('Title')); ?></label>
                                                <input class="form-control" type="text" name="product_specification_title[]" value="<?php echo e($additional->title); ?>">
                                            </div>
                                            <span class="btn btn-danger remove-specification margin-top-40"><i class="las la-times"></i></span>
                                        </div>    
                                    </div>
                                    <div class="col-lg-12 mt-4">
                                        <div class="upload-img">
                                            <div class="media-upload-btn-wrapper">
                                            <div class="img-wrap">
                                                <?php echo render_image_markup_by_attachment_id($additional->image,'','thumb'); ?>

                                            </div>
                                            <input type="hidden" name="product_specification_image[]" value="<?php echo e($additional->image); ?>">
                                            <button type="button" class="btn btn-info media_upload_form_btn"
                                                data-btntitle="<?php echo e(__('Select Image')); ?>"
                                                data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                                data-bs-toggle="modal"
                                                data-bs-target="#media_upload_modal">
                                                <?php echo e(__('Upload Main Image')); ?>

                                            </button>
                                            <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                                            <small><?php echo e(__('recommended size 810x450')); ?></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>        
                </div>
                <div class="btn-wrapper margin-top-20">
                    <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-product-specification"> <?php echo e(__('Add More')); ?> </a>
                </div>
            </div>


            <!-- start previous / next buttons -->
            <div  class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex justify-content-end gap-3">
                    <button class="cmnBtn btn_5 btn_bg_info radius-5" id="prevBtn" type="button"><?php echo e(__('Previous')); ?></button>
                    <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="nextBtn" type="button"><?php echo e(__('Next')); ?></button>
                </div>
            </div>

        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/products/admin/edit-product-include.blade.php ENDPATH**/ ?>