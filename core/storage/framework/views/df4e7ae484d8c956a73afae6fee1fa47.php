<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Roles')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header mb-3">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title"><?php echo e(__('All Roles')); ?></h4>
                        </div>
                        <div class="dashboard__inner__header__right">
                            <a class="cmnBtn btn_5 btn_bg_blue radius-5"
                               href="javascript:void(0)"
                               data-bs-target="#addRoleModal"
                               data-bs-toggle="modal" >
                                <?php echo e(__('Add Role')); ?>

                            </a>
                        </div>
                    </div>
                </div>
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
                <div class="tableStyle_three mt-4">
                    <div class="table_wrapper custom_Table">
                        <table class="table_activation">
                            <thead>
                            <tr>
                                <th><?php echo e(__('ID')); ?></th>
                                <th><?php echo e(__('Name')); ?></th>
                                <th><?php echo e(__('Action')); ?></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php if($roles->count() >=1): ?>
                                <?php $__currentLoopData = $roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($role->id); ?></td>
                                        <td><?php echo e($role->name); ?></td>
                                        <td>
                                            <?php if($role->name == 'Super Admin'): ?>
                                                <span class="text-secondary"><?php echo e(__('By default super admin has all permissions.')); ?></span>
                                            <?php else: ?>
                                                <a href="javascript:void(0)"
                                                   class="cmnBtn btn_5 btn_bg_warning radius-5  edit_role_modal"
                                                   data-bs-target="#editRoleModal"
                                                   data-bs-toggle="modal"
                                                   data-role-id="<?php echo e($role->id); ?>"
                                                   data-role-name="<?php echo e($role->name); ?>"
                                                ><?php echo e(__('Edit Role')); ?></a>
                                                <a class="cmnBtn btn_5 btn_bg_info radius-5" href="<?php echo e(route('admin.role.permission',$role->id)); ?>">
                                                    <?php echo e(__('Assign Permission')); ?>

                                                </a>
                                                <?php if (isset($component)) { $__componentOriginal7973b0ce98592c79f9209abd6e46a09b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.delete-popup','data' => ['url' => route('admin.role.delete',$role->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.delete-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.role.delete',$role->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal7973b0ce98592c79f9209abd6e46a09b)): ?>
<?php $attributes = $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b; ?>
<?php unset($__attributesOriginal7973b0ce98592c79f9209abd6e46a09b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal7973b0ce98592c79f9209abd6e46a09b)): ?>
<?php $component = $__componentOriginal7973b0ce98592c79f9209abd6e46a09b; ?>
<?php unset($__componentOriginal7973b0ce98592c79f9209abd6e46a09b); ?>
<?php endif; ?>
                                            <?php endif; ?>
                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php else: ?>
                                <?php if (isset($component)) { $__componentOriginal299c0410dd55ce378949b38ffa493a39 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal299c0410dd55ce378949b38ffa493a39 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.table.no-data-found','data' => ['colspan' => '7','class' => 'text-danger text-center py-5']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('table.no-data-found'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['colspan' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute('7'),'class' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute('text-danger text-center py-5')]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal299c0410dd55ce378949b38ffa493a39)): ?>
<?php $attributes = $__attributesOriginal299c0410dd55ce378949b38ffa493a39; ?>
<?php unset($__attributesOriginal299c0410dd55ce378949b38ffa493a39); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal299c0410dd55ce378949b38ffa493a39)): ?>
<?php $component = $__componentOriginal299c0410dd55ce378949b38ffa493a39; ?>
<?php unset($__componentOriginal299c0410dd55ce378949b38ffa493a39); ?>
<?php endif; ?>
                            <?php endif; ?>
                            </tbody>
                        </table>
                   </div>
                 </div>
            </div>
        </div>
    </div>
    <?php echo $__env->make('rolepermission::roles.add-role-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('rolepermission::roles.edit-role-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <?php echo $__env->make('rolepermission::roles.role-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/RolePermission\resources/views/roles/all-roles.blade.php ENDPATH**/ ?>