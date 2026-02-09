<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Email Templates')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <?php if (isset($component)) { $__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.datatable.css','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('datatable.css'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d)): ?>
<?php $attributes = $__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d; ?>
<?php unset($__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d)): ?>
<?php $component = $__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d; ?>
<?php unset($__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
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
                <h2 class="dashboard__card__header__title mb-3"><?php echo e(__('All Email Templates')); ?></h2>
                <div class="tableStyle_three mt-4">
                    <div class="table_wrapper custom_dataTable">
                        <table class="dataTablesExample">
                            <thead>
                            <th><?php echo e(__('SN')); ?></th>
                            <th><?php echo e(__('Title')); ?></th>
                            <th><?php echo e(__('Action')); ?></th>
                            </thead>
                            <tbody>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('Email Global Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the any mail sent.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.global.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.global.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('User Register Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the User Register.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.user.register.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.user.register.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('User Mail Verify Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the User Verify.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.user.verify.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.user.verify.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('User Identity Verification Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the User Verification.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.user.identity.verification.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.user.identity.verification.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>


                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('New Service Order Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the New Service Order.')); ?></span>
                                </td>
                                <td>
                                 <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.new.order.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.new.order.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('New Service Approve Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the User New Service Approval.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.user.new.service.approval.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.user.new.service.approval.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('Service Publish Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the User service Publish.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.user.new.service.publish.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.user.new.service.publish.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="serial-number"></strong></td>
                                <td>
                                    <?php echo e(__('Service Unpublished Template')); ?> <br>
                                    <span class="mt-2"><b class="text-info"><?php echo e(__('Notes:')); ?></b> <?php echo e(__('For the User Service Unpublished.')); ?></span>
                                </td>
                                <td>
                                    <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.email.user.new.service.unpublished.template')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.email.user.new.service.unpublished.template'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                </td>
                            </tr>
                            <?php if(moduleExists("SupportTicket")): ?>
                                 <?php echo $__env->make('supportticket::backend.email-template.email-template-lists', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                             <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <?php if (isset($component)) { $__componentOriginal579359c93efc143f4744524389ba1039 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal579359c93efc143f4744524389ba1039 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.datatable.js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('datatable.js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal579359c93efc143f4744524389ba1039)): ?>
<?php $attributes = $__attributesOriginal579359c93efc143f4744524389ba1039; ?>
<?php unset($__attributesOriginal579359c93efc143f4744524389ba1039); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal579359c93efc143f4744524389ba1039)): ?>
<?php $component = $__componentOriginal579359c93efc143f4744524389ba1039; ?>
<?php unset($__componentOriginal579359c93efc143f4744524389ba1039); ?>
<?php endif; ?>
    <script>
        $(document).ready(function(){
            var table = $('.dataTablesExample').DataTable();
            function updateSerialNumbers() {
                var PageInfo = table.page.info();
                table.column(0, {page:'current'}).nodes().each(function(cell, i) {
                    cell.innerHTML = i + 1 + PageInfo.start;
                });
            }
            // Update serial numbers on initial load
            updateSerialNumbers();
            table.on('draw.dt', function() {
                updateSerialNumbers();
            });
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/email-template/all.blade.php ENDPATH**/ ?>