<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8 mt-2">
            <div class="table-responsive">
                <table id="after_booking_steps_table" class="table w-100">
                    <thead>
                        <tr>
                            <th><?php echo e(__('No.')); ?></th>
                            <th><?php echo e(__('Steps')); ?></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if($afterBookingSteps->isNotEmpty()): ?>
                            <?php $__currentLoopData = $afterBookingSteps; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $step): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td >
                                        <input type="number" name="booking-steps_no[]" id="booking-steps-no" value="<?php echo e($step->steps_no); ?>" disabled>
                                    </td>
                                    <td >
                                        <input type="text" name="booking-steps[]" id="booking-steps" placeholder="<?php echo e(__('Enter step')); ?>" value="<?php echo e($step->steps); ?>">
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-info add-after-booking-step-specific me-3"><i class="fas fa-plus"></i></button>
                                        <?php if(!$loop->first): ?>
                                           <button type="button" class="btn btn-sm btn-danger remove-after-booking-step"><i class="fas fa-trash"></i></button>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php else: ?>
                            <tr>
                                <td >
                                    <input type="number" name="booking-steps_no[]" id="booking-steps-no" value="<?php echo e(1); ?>" disabled>
                                </td>
                                <td >
                                    <input type="text" name="booking-steps[]" id="booking-steps" placeholder="<?php echo e(__('Enter step')); ?>">
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info add-after-booking-step-specific me-3"><i class="fas fa-plus"></i></button>
                                </td>
                            </tr>
                        <?php endif; ?>    
                                    
                    </tbody>
                </table>
            </div>
        </div>

        <!-- submit buttons -->
        <div  class="col-lg-12 mt-5">
            <div class="btn_wrapper d-flex gap-3">
                <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type"><?php echo e(__('Save Steps')); ?></button>
            </div>
        </div>
    
    </div>
</div>

<?php $__env->startSection('scripts'); ?>
    <script>
       

    (function ($) {
        "use strict";
        $(document).ready(function () {
 
            $(document).on('click', '.remove-after-booking-step', function () {
                $(this).closest('tr').remove();
                var rowCount = $("#after_booking_steps_table tr").length;
                for (var i = 0; i < rowCount; i++)
                {
                    $("#after_booking_steps_table tr:eq(" + (i + 1) + ")").find('#booking-steps-no').val(i + 1);  // Update the step number
                    
                }
                
                           
            });
            
            $(document).on('click', '.add-after-booking-step-specific', function () {
                let currentRow = $(this).closest("tr"); 
                let step_number = $(this).closest('tr').find('#booking-steps-no').val();
                step_number++;
                const row = `
                        <tr>  
                            <td >
                                <input type="number" name="booking-steps_no[]" id="booking-steps-no" value="${ step_number }" disabled>
                            </td> 
                            <td >
                                <input type="text" name="booking-steps[]" id="booking-steps" placeholder="<?php echo e(__('Enter step')); ?>">
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-info add-after-booking-step-specific me-3"><i class="fas fa-plus"></i></button>
                                <button type="button" class="btn btn-sm btn-danger remove-after-booking-step"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                `;
                currentRow.after(row);
                var rowCount = $("#after_booking_steps_table tr").length;
                for (var i = 0; i < rowCount; i++)
                {
                    $("#after_booking_steps_table tr:eq(" + (i + 1) + ")").find('#booking-steps-no').val(i + 1);  // Update the step number
                    
                }
                
            }  ); 
            
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

<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/backend/pages/orders/steps-general-info.blade.php ENDPATH**/ ?>