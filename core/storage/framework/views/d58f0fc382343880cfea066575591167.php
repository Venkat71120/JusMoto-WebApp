<div class="tab-pane fade step" id="car" role="tabpanel" aria-labelledby="select-car-tab" >
    <div class="btn-wrapper me-3 d-flex justify-content-between">
        <div class="d-flex">
            <button type="button" class="btn btn-danger me-3" id="editRemoveAllVariant">Remove All Variant</button>
            <button type="button" class="btn btn-warning me-3" id="addEditAllVariant">Add All Variant</button>
            <button type="button" class="btn btn-primary me-3" data-toggle="modal" data-target="#addModal" id="addEditBtn">Add</button>
            
           
            <input type="hidden" id="session_product_id" value="<?php echo e($product->id); ?>">
        </div>    
        <form id="filter_select_car" class="ms-5">
            <div class="d-flex">
                <div class="me-2 mt-1 mb-1" id="edit_select_brand_name" >
                    <select class="form-select type" name="edit_brand_name" id="edit_brand_name" aria-label="Brand Type">
                        <option value="0" selected><?php echo e(__('All Brand')); ?></option>
                            <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($brand->id); ?>"><?php echo e($brand->name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <!-- Filter Dropdowns -->
                <div class="me-2 mt-1 mb-1" id="edit_select_car_name">
                    <select class="form-select type" name="edit_car_name" id="edit_car_name" aria-label="Car Type">
                        <option value="0" selected><?php echo e(__('All Car')); ?></option>
                            <?php $__currentLoopData = $all_cars; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $car): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($car->id); ?>"><?php echo e($car->name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <button type="button" class="btn btn-primary "  id="edit_filterBtn">Search</button>
            </div>
        </form>    
    </div>
    <input type="hidden" name="isModalOpen" id="isModalOpen" >

   <!-- Modal for Adding Data -->
   <div class="modal" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog_custom " role="document" >
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Data</h5>
                <button type="button" class="btn-close modal_close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="addCarServiceForm">
                    <span class="text-danger error-car"></span>
                    <div class="row">
                        <div class="col-lg-3 mt-3">
                            <div class="upload-img" id="service_product_edit_img">
                                <div class="media-upload-btn-wrapper">
                                    <div class="img-wrap">
                                        <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="images" class="w-100">
                                    </div>
                                    <input type="hidden" name="service_car_image1" id="service_car_image1">
                                    <button type="button" class="btn btn-info media_upload_form_btn"
                                            data-btntitle="<?php echo e(__('Select Image')); ?>"
                                            data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                            data-bs-toggle="modal"
                                            data-bs-target="#media_upload_modal">
                                        <?php echo e(__('Upload Car Image')); ?>

                                    </button>
                                    <small><?php echo e(__('image format: jpg,jpeg,png,gif,webp')); ?></small> <br>
                                    <small><?php echo e(__('recommended size 810x450')); ?></small>
                                </div>
                            </div>
                        </div>
                          
                        <div class="col-lg-9">    
                            <div class="form__input__single">
                                <label class="form__input__single__label brand"><?php echo e(__('Brand')); ?>  <span class="text-danger">*</span> </label>
                                <select name="brand_id[]" id="car_brand" class="form-select">
                                    <option value=""><?php echo e(__('Select Brand')); ?></option>
                                    <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($brand->id); ?>"><?php echo e($brand->name); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                            <div class="form__input__single mt-2" id="car_model">
                                <label for="car" class="form__input__single__label"> <?php echo e(__('Car Model')); ?> </label>
                                <select  name="car_id[]" id="car_model_value" class="form-select car_model">
                                    <option value=""><?php echo e(__('Select Car Model')); ?></option>
                                </select>
                               
                            </div>
                            <div class="form__input__single mt-2" id="variant">
                                <label for="car_variant" class="form__input__single__label"> <?php echo e(__('Car Variant')); ?> </label>
                                <select  name="variant_id[]" id="car_variant" class="form-select car_variant">
                                    <option value=""><?php echo e(__('Select Car Variant')); ?></option>
                                </select>
                               
                            </div>
                           
                            <div class="form__input__single mt-2 position-relative">
                                <label for="price1" class="form__input__single__label"><?php echo e(__('Price')); ?> <span class="text-danger">*</span></label>
                                <div class="input-form input-form2">
                                    <input type="number" class="form__control radius-5" name="price1[]" id="price1"  placeholder="<?php echo e(__('0.00')); ?>">
                                </div>
                                
                            </div>
                                
                    
                            <!-- Discount Price -->
                               
                            <div class="form__input__single mt-2 position-relative">
                                <label for="discount_price1" class="form__input__single__label"><?php echo e(__('Discount Price')); ?> <span class="text-danger">*</span></label>
                                <div class="input-form input-form2">
                                    <input type="number" class="form__control radius-5" name="discount_price1[]" id="discount_price1"  placeholder="<?php echo e(__('0.00')); ?>">
                                </div>
                                
                            </div>
                               
                    
                          
                               
                            <!-- Service Duration -->
                               
                            <div class="form__input__single mt-2 position-relative">
                                <label for="duration1" class="form__input__single__label"><?php echo e(__('Duration')); ?></label>
                                <div class="input-form input-form2">
                                    <input type="text" class="form__control radius-5" name="duration1[]" id="duration1"  placeholder="<?php echo e(__('e.g.hour,miute,second')); ?>">
                                </div>
                            </div>
                              
                               
                            <div class="form__input__single mt-2 position-relative">
                            
                                <label for="duration_checkbox" class="form__input__single__label">
                                    <input type="checkbox" name="duration_checkbox[]" id="duration_checkbox">
                                    <?php echo e(__('Use Default Service Price')); ?>

                                </label>
                                <!-- Hidden input to send 0 when unchecked -->
                                
                            </div>
                                
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary modal_close" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="addEditRowBtn">Add</button>
            </div>
        </div>
    </div>
   </div>

    <div id="edit_session_data">
        <?php echo $__env->make("backend.pages.products.admin.edit_session_data", array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    </div>
    <div class="btn_wrapper d-flex justify-content-end gap-3 mt-4">
        <button class="cmnBtn btn_5 btn_bg_info radius-5" id="prevBtn" type="button"><?php echo e(__('Previous')); ?></button>
        <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type"><?php echo e(__('Edit Product')); ?></button>
    </div>

</div>



<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/products/admin/edit-product-car.blade.php ENDPATH**/ ?>