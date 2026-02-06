<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-2 mt-2">
            <div class="upload-img">
                <div class="media-upload-btn-wrapper">
                    <div class="img-wrap">
                       
                        
                        <img src="<?php echo e(asset('assets/frontend/img/gallery/upload_image.png')); ?>" id="car_image" alt="images">
                       
                    </div>
                    <input type="hidden" name="image" id="image" value="<?php echo e(old('image')); ?>">
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
        <div class="col-lg-10 mt-2"> 
                <div class="row">
                    <div class="col-lg-8">
                        <!-- Title -->
                        <div class="form__input__single">
                            <label class="form__input__single__label"><?php echo e(__('Model')); ?> <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="name" id="name" value="<?php echo e(old('name')); ?>" placeholder="<?php echo e(__('Add Model')); ?>">
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label"><?php echo e(__('Year')); ?> <span class="text-danger">*</span></label>
                            <input type="number" class="form__control radius-5" name="year" id="year" value="<?php echo e(old('year')); ?>" placeholder="<?php echo e(__('Add Year')); ?>" min="1900" max="2100">
                        </div>

                    

                        <div class="d-flex justify-content-between gap-3 flex-wrap mt-3">
                            <div class="form__input__single">
                                <label class="form__input__single__label"><?php echo e(__('Brand')); ?>  <span class="text-danger">*</span> </label>
                                <select name="brand_id" id="brand" value="<?php echo e(old('brand_id')); ?>" class="select-itms select2_activation">
                                    <option value=""><?php echo e(__('Select Brand')); ?></option>
                                    <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($brand->id); ?>" <?php if($brand->id== old('brand_id')): ?> selected <?php endif; ?>><?php echo e($brand->name); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                        
                    </div>
                </div>
                <div class="row">    

                    <div class="col-lg-8 mt-2">
                        <div class="table-responsive">
                            <table id="fuel_type_table" class="table w-100">
                                <thead>
                                    <tr>
                                        <th><?php echo e(__('Engine Type')); ?></th>
                                        <th ><?php echo e(__('Fual Type')); ?></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >
                                            <select name="engine_type_id[]" id="engine_type_id">
                                                <option value=""><?php echo e(__('Select Engine Type')); ?></option>
                                                <?php $__currentLoopData = $engines; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $engine): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($engine->id); ?>"  <?php if(is_array(old('engine_type_id')) && in_array($engine->id, old('engine_type_id'))): ?> selected <?php endif; ?>><?php echo e($engine->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                
                                            </select>
                                        </td>
                                        <td>
                                            <select name="fual_type_id[]" id="fual_type_id" >
                                                <option value=""><?php echo e(__('Select Fual Type')); ?></option>
                                                
                                                <?php $__currentLoopData = $fuals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $fual): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($fual->id); ?>"   <?php if(is_array(old('fual_type_id')) && in_array($fual->id, old('fual_type_id'))): ?> selected <?php endif; ?>><?php echo e($fual->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                        </td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="btn_wrapper d-flex gap-3">
                            <button type="button" class="btn btn-sm btn-info add-fuel-type"><i class="fas fa-plus"></i></button>
                        </div>  
                    </div>

                    <!-- submit buttons -->
                    <div  class="col-lg-12 mt-5">
                        <div class="btn_wrapper d-flex gap-3">
                            <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type"><?php echo e(__('Add Car')); ?></button>
                        </div>
                    </div>
                </div>
            </div>        

    </div>
</div>

<?php $__env->startSection('scripts'); ?>
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
                <td >
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
        var count=0;
        $(document).ready(function () {
 
           
               let image_id=$('#image').val();
               
                // Store image ID in Laravel session via AJAX
                if(image_id)
                {
                    $.ajax({
                        url: "<?php echo e(route('store.image.session')); ?>", // Create a route to handle session storage
                        method: "POST",
                        data: {
                            _token: "<?php echo e(csrf_token()); ?>",
                            car_image: image_id
                        },
                        success: function(response) {
                           
                              let data=response.data;
                              let updatedUrl = data.substring(data.indexOf("/assets"));;

                              let updated=`<?php echo e(asset('` +updatedUrl+ `')); ?>`;
                          
                            // Update the image source
                            $('#car_image').attr('src', updated);
                                
                            
                        }
                    });
                }
               
      

           
            $(document).on('click', '.add-fuel-type', function () {
                add_table_row();
                count++;
            });
            $(document).on('click', '.remove-fuel-type', function () {
               let count_value=count;
               if(count_value>0)
               {
                count--;
                $(this).closest('tr').remove();
               }
               else
               {
                 alert("<?php echo e(__('You can not delete the last row.')); ?>");
                 
               }
                
            });
        });

    })(jQuery);

    </script>

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
    <?php if (isset($component)) { $__componentOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.js.new-tag-add-js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.js.new-tag-add-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a)): ?>
<?php $attributes = $__attributesOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a; ?>
<?php unset($__attributesOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a)): ?>
<?php $component = $__componentOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a; ?>
<?php unset($__componentOriginal0d851ffbab1e1fe1ae11dfa476c2ee2a); ?>
<?php endif; ?>
    
    <?php if(session('success')): ?>
        <script>
            toastr.success('<?php echo e(session('success')); ?>', 'Success');
        </script>
    <?php endif; ?>
<?php $__env->stopSection(); ?>

<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/car/car-general-info.blade.php ENDPATH**/ ?>