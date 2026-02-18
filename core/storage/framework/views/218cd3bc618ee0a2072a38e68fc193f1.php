<div class="tab-pane fade step" id="location" role="tabpanel" aria-labelledby="location-tab">
    <div class="row">
        <div class="col-12">

            <!-- What's Included Section -->
            <div class="settings-section">
                <h5 class="section-title">
                    <i class="las la-gift section-icon"></i>
                    <?php echo e(__('What\'s Included In This Package')); ?>

                </h5>
                
                <div class="append-additional-includes">
                    <?php $__currentLoopData = $service->includes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $include): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="item-card what-include-element">
                            <div class="item-content">
                                <div class="input-group">
                                    <label class="input-label"><?php echo e(__('Title')); ?></label>
                                    <input class="form-input" type="text" name="include_service_title[]" value="<?php echo e($include->title); ?>" placeholder="<?php echo e(__('Service title')); ?>">
                                </div>
                                <button type="button" class="remove-btn remove-include" title="<?php echo e(__('Remove')); ?>">
                                    <i class="las la-times"></i>
                                </button>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                
                <div class="add-more-wrapper">
                    <a href="javascript:void(0)" class="add-more-btn add-what-includes">
                        <i class="las la-plus-circle"></i>
                        <?php echo e(__('Add More')); ?>

                    </a>
                </div>
            </div>

            <!-- FAQs Section -->
            <div class="settings-section">
                <h5 class="section-title">
                    <i class="las la-question-circle section-icon"></i>
                    <?php echo e(__('Frequently Asked Questions')); ?>

                </h5>
                
                <div class="append-faqs">
                    <?php $__currentLoopData = $service->faqs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $faq): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="item-card faqs">
                            <div class="item-content">
                                <div class="input-group">
                                    <label class="input-label"><?php echo e(__('Question')); ?></label>
                                    <input class="form-input" type="text" name="faqs_title[]" value="<?php echo e($faq->title); ?>" placeholder="<?php echo e(__('Faq Title')); ?>">
                                </div>
                                <div class="input-group">
                                    <label class="input-label"><?php echo e(__('Answer')); ?></label>
                                    <textarea class="form-input textarea" name="faqs_description[]" rows="3" placeholder="<?php echo e(__('Faq Description')); ?>"><?php echo e($faq->description); ?></textarea>
                                </div>
                                <button type="button" class="remove-btn remove-faqs" title="<?php echo e(__('Remove')); ?>">
                                    <i class="las la-times"></i>
                                </button>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                
                <div class="add-more-wrapper">
                    <a href="javascript:void(0)" class="add-more-btn add-faqs">
                        <i class="las la-plus-circle"></i>
                        <?php echo e(__('Add More')); ?>

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
                            <?php echo e(__('Additional Information')); ?>

                        </h5>
                        
                        <div class="append-services-info">
                            <?php $__currentLoopData = $service->serviceAdditional; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $additional): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if($additional->type == 'info'): ?>
                                    <div class="item-card service-info">
                                        <div class="item-content">
                                            <div class="input-group">
                                                <label class="input-label"><?php echo e(__('Title')); ?></label>
                                                <div class="input-with-remove">
                                                    <input class="form-input" type="text" name="service_info_title[]" value="<?php echo e($additional->title); ?>" placeholder="<?php echo e(__('Service Information title')); ?>">
                                                    <button type="button" class="remove-btn remove-info" title="<?php echo e(__('Remove')); ?>">
                                                        <i class="las la-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="upload-container">
                                                <label class="input-label"><?php echo e(__('Image')); ?></label>
                                                <div class="upload-box">
                                                    <div class="image-preview">
                                                        <?php if($additional->image): ?>
                                                            <?php
                                                                $image = \App\Models\MediaUpload::find($additional->image);
                                                            ?>
                                                            <?php if($image): ?>
                                                                <img src="<?php echo e(asset('assets/uploads/media-uploader/' . $image->path)); ?>" alt="preview" class="preview-img">
                                                            <?php else: ?>
                                                                <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="preview" class="preview-img">
                                                            <?php endif; ?>
                                                        <?php else: ?>
                                                            <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="preview" class="preview-img">
                                                        <?php endif; ?>
                                                    </div>
                                                    <input type="hidden" name="service_information_image[]" value="<?php echo e($additional->image); ?>">
                                                    <button type="button" class="upload-btn media_upload_form_btn"
                                                            data-btntitle="<?php echo e(__('Select Image')); ?>"
                                                            data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#media_upload_modal">
                                                        <i class="las la-cloud-upload-alt"></i>
                                                        <?php echo e(__('Choose Image')); ?>

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                        
                        <div class="add-more-wrapper">
                            <a href="javascript:void(0)" class="add-more-btn add-services-info w-100">
                                <i class="las la-plus-circle"></i>
                                <?php echo e(__('Add More Information')); ?>

                            </a>
                        </div>
                    </div>
                </div>

                <!-- Specification Section -->
                <div class="col-md-6">
                    <div class="settings-section h-100">
                        <h5 class="section-title">
                            <i class="las la-clipboard-list section-icon"></i>
                            <?php echo e(__('Service Specifications')); ?>

                        </h5>
                        
                        <div class="append-services-specification">
                            <?php $__currentLoopData = $service->serviceAdditional; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $additional): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if($additional->type == 'specification'): ?>
                                    <div class="item-card service-specification">
                                        <div class="item-content">
                                            <div class="input-group">
                                                <label class="input-label"><?php echo e(__('Title')); ?></label>
                                                <div class="input-with-remove">
                                                    <input class="form-input" type="text" name="service_specification_title[]" value="<?php echo e($additional->title); ?>" placeholder="<?php echo e(__('Service Specification title')); ?>">
                                                    <button type="button" class="remove-btn remove-specification" title="<?php echo e(__('Remove')); ?>">
                                                        <i class="las la-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="upload-container">
                                                <label class="input-label"><?php echo e(__('Image')); ?></label>
                                                <div class="upload-box">
                                                    <div class="image-preview">
                                                        <?php if($additional->image): ?>
                                                            <?php
                                                                $image = \App\Models\MediaUpload::find($additional->image);
                                                            ?>
                                                            <?php if($image): ?>
                                                                <img src="<?php echo e(asset('assets/uploads/media-uploader/' . $image->path)); ?>" alt="preview" class="preview-img">
                                                            <?php else: ?>
                                                                <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="preview" class="preview-img">
                                                            <?php endif; ?>
                                                        <?php else: ?>
                                                            <img src="<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>" alt="preview" class="preview-img">
                                                        <?php endif; ?>
                                                    </div>
                                                    <input type="hidden" name="service_specification_image[]" value="<?php echo e($additional->image); ?>">
                                                    <button type="button" class="upload-btn media_upload_form_btn"
                                                            data-btntitle="<?php echo e(__('Select Image')); ?>"
                                                            data-modaltitle="<?php echo e(__('Upload Image')); ?>"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#media_upload_modal">
                                                        <i class="las la-cloud-upload-alt"></i>
                                                        <?php echo e(__('Choose Image')); ?>

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                        
                        <div class="add-more-wrapper">
                            <a href="javascript:void(0)" class="add-more-btn add-services-specification w-100">
                                <i class="las la-plus-circle"></i>
                                <?php echo e(__('Add More Specifications')); ?>

                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="navigation-wrapper">
                <button class="nav-btn prev-btn" id="prevBtn" type="button">
                    <i class="las la-arrow-left"></i>
                    <?php echo e(__('Previous')); ?>

                </button>
                <button class="nav-btn next-btn" id="nextBtn" type="button">
                    <?php echo e(__('Next')); ?>

                    <i class="las la-arrow-right"></i>
                </button>
            </div>

        </div>
    </div>
</div>

<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/edit-service-include.blade.php ENDPATH**/ ?>