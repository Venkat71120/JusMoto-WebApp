<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Import States')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        #field_name
        {
          width: 200px;
        }
    </style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="dashboard__body">
        <div class="row">
            <div class="col-lg-8">
                <?php if (isset($component)) { $__componentOriginal4bb59b834d778ff0cb72af5a473e2885 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.validation.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('validation.error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $attributes = $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $component = $__componentOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
                <div class="customMarkup__single">
                    <div class="customMarkup__single__item">
                        <h4 class="customMarkup__single__title"><?php echo e(__('Import State (only csv file)')); ?></h4>
                        <div class="customMarkup__single__inner mt-4">
                            <?php if(empty($import_data)): ?>
                                <form action="<?php echo e(route('admin.state.import.csv.update.settings')); ?>" method="post" enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>
                                    <div class="form-group">
                                        <label for="#" class="label-title"><?php echo e(__('File')); ?></label>
                                        <input type="file" name="csv_file" accept=".csv" class="form-control" required>
                                        <small class="text-info"><?php echo e(__('only csv file are allowed with separate by (,) comma.')); ?></small>
                                    </div>
                                    <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 loading-btn"><?php echo e(__('Submit')); ?></button>
                                </form>
                            <?php else: ?>
                                <?php
                                    $option_markup = '';
                                        foreach(current($import_data) as $map_item ){
                                            $option_markup .= '<option value="'.trim($map_item).'">'.$map_item.'</option>';
                                        }
                                ?>
                                <form action="<?php echo e(route('admin.state.import.database')); ?>" method="post" enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>
                                    <table class="table table-striped">
                                        <thead>
                                        <th id="field_name"><?php echo e(__('Field Name')); ?></th>
                                        <th><?php echo e(__('Set Field')); ?></th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><h6><?php echo e(__('Title')); ?></h6></td>
                                            <td>
                                                <div class="form__input__single">
                                                    <select class="form__control select2_activation mapping_select">
                                                        <option value=""><?php echo e(__('Select Field')); ?></option>
                                                        <?php echo $option_markup; ?>

                                                    </select>
                                                    <input type="hidden" name="state">
                                                </div>
                                                <p class="text-info"><?php echo e(__('Select state and only unique states added automatically')); ?></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h6><?php echo e(__('Status')); ?></h6></td>
                                            <td>
                                                <div class="form__input__single">
                                                    <select class="form__control">
                                                        <option value="1"><?php echo e(__('Publish')); ?></option>
                                                        <option value="0"><?php echo e(__('Draft')); ?></option>
                                                    </select>
                                                    <input type="hidden" name="status" value="1">
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 loading-btn"><?php echo e(__('Import')); ?></button>
                                </form>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script>
        (function($){
            "use strict";
            $(document).ready(function(){
                $(document).on('click','.loading-btn',function (){
                    $(this).append('<i class="ml-2 fas fa-spinner fa-spin"></i>')
                });

                $(document).on('change','.mapping_select',function (){
                    $('.mapping_select option').attr('disabled',false);
                    $(this).next('input').val($(this).val());
                    let allValue = $('.mapping_select');
                    $.each(allValue,function (index,item){
                        $('.mapping_select option[value="'+$(this).val()+'"]').attr('disabled',true);
                    });

                })
            });
        }(jQuery));
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/CountryManage\resources/views/state/import-state.blade.php ENDPATH**/ ?>