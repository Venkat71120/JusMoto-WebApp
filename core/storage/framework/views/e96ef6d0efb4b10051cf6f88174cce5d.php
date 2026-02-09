<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-2 mt-3">
            <div class="upload-img">
                <div class="media-upload-btn-wrapper">
                    <div class="img-wrap">
                        <?php echo render_attachment_preview_for_admin($car->image ?? ''); ?>

                    </div>
                    <input type="hidden" name="image" value="<?php echo e($car->image ?? ''); ?>">
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
        <div class="col-lg-10 mt-3">
   
            <div class="row">
                <div class="col-lg-10">
                    <!-- Title -->
                    <div class="form__input__single">
                        <label class="form__input__single__label"><?php echo e(__('Name')); ?> <span class="text-danger">*</span></label>
                        <input type="text" class="form__control radius-5"  name="name" id="name" value="<?php echo e($car->name); ?>" placeholder="<?php echo e(__('Add Car Name')); ?>">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10">
                    <!-- Title -->
                    <div class="form__input__single">
                        <label class="form__input__single__label"><?php echo e(__('Year')); ?> <span class="text-danger">*</span></label>
                        <input type="number" class="form__control radius-5" name="year" id="year" value="<?php echo e($car->Year); ?>" placeholder="<?php echo e(__('Add Year')); ?>" min="1900" max="2100">
                    </div>
                </div>
            </div>
            
            
            
            <div class="row mt-4">
                <div class="col-lg-10">
                
                        <div class="form__input__single">
                            <label class="form__input__single__label"><?php echo e(__('Brand')); ?>  <span class="text-danger">*</span> </label>
                            <select name="brand_id" id="brand" class="select-itms select2_activation">
                                <option value=""><?php echo e(__('Select Brand')); ?></option>
                                <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($brand->id); ?>" <?php if($brand->id == $car->brand_id): ?> selected <?php endif; ?>><?php echo e($brand->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </div>
                </div> 
            </div>
            <div class="row mt-4">    
                <div class="col-lg-10">       
                    <div class="table-responsive">
                        <table id="fuel_type_table" class="table w-100">
                            <thead>
                                <tr>
                                    <th><?php echo e(__('Engine Type')); ?></th>
                                    <th><?php echo e(__('Fuel Type')); ?></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <?php $__currentLoopData = $varients; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$varient): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td>
                                            <select name="engine_type_id[]" id="engine_type_id">
                                                <option value=""><?php echo e(__('Select Engine Type')); ?></option>
                                            
                                                <?php $__currentLoopData = $engines; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $engine): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($engine->id); ?>"  <?php if($engine->id == $varient->engine_type_id): ?> selected <?php endif; ?>><?php echo e($engine->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            
                                                
                                            </select>
                                        </td>
                                        <td>
                                            <select name="fual_type_id[]" id="fual_type_id" >
                                                <option value=""><?php echo e(__('Select Fual Type')); ?></option>
                                            
                                                <?php $__currentLoopData = $fuals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $fual): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($fual->id); ?>"   <?php if($fual->id==$varient->fual_type_id): ?> selected <?php endif; ?>><?php echo e($fual->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            
                                            </select>
                                        </td>
                                        <?php if($key != 0): ?>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger remove-fuel-type"><i class="fas fa-trash"></i></button>
                                            </td>
                                        <?php endif; ?>    
                                    
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>        
                            </tbody>
                        </table>
                    </div> 
                    <div class="btn_wrapper d-flex gap-3">
                        <button type="button" class="btn btn-sm btn-info add-fuel-type"><i class="fas fa-plus"></i></button>
                    </div>     
                    
                </div>
                <div  class="col-lg-12 mt-5">
                    <div class="btn_wrapper gap-3">
                        <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="submitBtn" type="submit"><?php echo e(__('Edit car')); ?></button>
                    </div>
                </div>
            </div>    
        </div>    
            
    </div>
            
</div>

<?php $__env->startSection('scripts'); ?>
    <?php if (isset($component)) { $__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e)): ?>
<?php $attributes = $__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e; ?>
<?php unset($__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e)): ?>
<?php $component = $__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e; ?>
<?php unset($__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e); ?>
<?php endif; ?>
   
    <script>

const row = `
            <tr>
                <td>
                    <select name="engine_type_id[]" id="engine_type_id"  >
                        <option value=""><?php echo e(__('Select Engine Type')); ?></option>
                        <?php $__currentLoopData = $engines; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $engine): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($engine->id); ?>"><?php echo e($engine->name); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        
                    </select>
                </td>
                <td>
                    <select name="fual_type_id[]" id="fual_type_id" >
                        <option value=""><?php echo e(__('Select Fual Type')); ?></option>
                        
                        <?php $__currentLoopData = $fuals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $fual): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($fual->id); ?>"><?php echo e($fual->name); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-danger remove-fuel-type"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
    `;

    
    function add_table_row(){

        $('#fuel_type_table tbody').append(row);
    }

    (function ($) {
        "use strict";
        $(document).ready(function () {

            $(document).on('click', '.add-fuel-type', function () {
                add_table_row();
                
            });
            $(document).on('click', '.remove-fuel-type', function () {
              
                $(this).closest('tr').remove();
              
                
            });
            
        });

    })(jQuery);
       
    </script>
<?php $__env->stopSection(); ?>


<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/car/edit-car-details.blade.php ENDPATH**/ ?>