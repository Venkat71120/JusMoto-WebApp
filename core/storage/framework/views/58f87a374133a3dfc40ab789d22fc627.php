<?php $__env->startSection('title', __('All Menus')); ?>
<?php $__env->startSection('style'); ?>
    <?php if (isset($component)) { $__componentOriginal01cc5c14ee36f86d527b39a5e5a925ec = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal01cc5c14ee36f86d527b39a5e5a925ec = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.data-table.data-table-css','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('data-table.data-table-css'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal01cc5c14ee36f86d527b39a5e5a925ec)): ?>
<?php $attributes = $__attributesOriginal01cc5c14ee36f86d527b39a5e5a925ec; ?>
<?php unset($__attributesOriginal01cc5c14ee36f86d527b39a5e5a925ec); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal01cc5c14ee36f86d527b39a5e5a925ec)): ?>
<?php $component = $__componentOriginal01cc5c14ee36f86d527b39a5e5a925ec; ?>
<?php unset($__componentOriginal01cc5c14ee36f86d527b39a5e5a925ec); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="dashboard__body">
        <div class="row">
            <div class="col-lg-7">
                <div class="customMarkup__single">
                    <div class="customMarkup__single__item">
                        <h4 class="customMarkup__single__title"><?php echo e(__('All Menus')); ?></h4>
                        <div class="customMarkup__single__inner mt-4">
                            <!-- Table Start -->
                            <div class="custom_table style-04">
                                <table class="DataTable_activation">
                                    <thead>
                                        <tr>
                                            <th><?php echo e(__('ID')); ?></th>
                                            <th><?php echo e(__('Title')); ?></th>
                                            <th><?php echo e(__('Status')); ?></th>
                                            <th><?php echo e(__('Created At')); ?></th>
                                            <th><?php echo e(__('Action')); ?></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $__currentLoopData = $all_menus; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $menu): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <tr>
                                                <td><?php echo e($menu->id); ?></td>
                                                <td><?php echo e($menu->title); ?></td>
                                                <td><?php if (isset($component)) { $__componentOriginalb8f171097e4688e1b6d45270c4757025 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb8f171097e4688e1b6d45270c4757025 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.table.menu','data' => ['status' => $menu->status,'menuID' => $menu->id]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.table.menu'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($menu->status),'menuID' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($menu->id)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb8f171097e4688e1b6d45270c4757025)): ?>
<?php $attributes = $__attributesOriginalb8f171097e4688e1b6d45270c4757025; ?>
<?php unset($__attributesOriginalb8f171097e4688e1b6d45270c4757025); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb8f171097e4688e1b6d45270c4757025)): ?>
<?php $component = $__componentOriginalb8f171097e4688e1b6d45270c4757025; ?>
<?php unset($__componentOriginalb8f171097e4688e1b6d45270c4757025); ?>
<?php endif; ?></td>
                                               <td><?php echo e(optional($menu->created_at)->diffForHumans()); ?></td>
                                                <td>
                                                    <?php if (isset($component)) { $__componentOriginal8f171b7aec972ecdf8c21b4ace25e397 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal8f171b7aec972ecdf8c21b4ace25e397 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.table.select-action','data' => ['title' => __('Select Action')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.table.select-action'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(__('Select Action'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal8f171b7aec972ecdf8c21b4ace25e397)): ?>
<?php $attributes = $__attributesOriginal8f171b7aec972ecdf8c21b4ace25e397; ?>
<?php unset($__attributesOriginal8f171b7aec972ecdf8c21b4ace25e397); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8f171b7aec972ecdf8c21b4ace25e397)): ?>
<?php $component = $__componentOriginal8f171b7aec972ecdf8c21b4ace25e397; ?>
<?php unset($__componentOriginal8f171b7aec972ecdf8c21b4ace25e397); ?>
<?php endif; ?>
                                                    <ul class="dropdown-menu status_dropdown__list">
                                                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('menu-edit')): ?>
                                                            <li class="status_dropdown__item"><?php if (isset($component)) { $__componentOriginalafff3ec7080c879e2a19819877781dfa = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalafff3ec7080c879e2a19819877781dfa = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.btn.edit','data' => ['title' => __('Edit Menu'),'url' => route('admin.menu.edit', $menu->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('btn.edit'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(__('Edit Menu')),'url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.menu.edit', $menu->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalafff3ec7080c879e2a19819877781dfa)): ?>
<?php $attributes = $__attributesOriginalafff3ec7080c879e2a19819877781dfa; ?>
<?php unset($__attributesOriginalafff3ec7080c879e2a19819877781dfa); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalafff3ec7080c879e2a19819877781dfa)): ?>
<?php $component = $__componentOriginalafff3ec7080c879e2a19819877781dfa; ?>
<?php unset($__componentOriginalafff3ec7080c879e2a19819877781dfa); ?>
<?php endif; ?></li>
                                                        <?php endif; ?>
                                                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('menu-delete')): ?>
                                                            <li class="status_dropdown__item"><?php if (isset($component)) { $__componentOriginal7973b0ce98592c79f9209abd6e46a09b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.delete-popup','data' => ['title' => __('Delete Menu'),'url' => route('admin.menu.delete', $menu->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.delete-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(__('Delete Menu')),'url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.menu.delete', $menu->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal7973b0ce98592c79f9209abd6e46a09b)): ?>
<?php $attributes = $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b; ?>
<?php unset($__attributesOriginal7973b0ce98592c79f9209abd6e46a09b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal7973b0ce98592c79f9209abd6e46a09b)): ?>
<?php $component = $__componentOriginal7973b0ce98592c79f9209abd6e46a09b; ?>
<?php unset($__componentOriginal7973b0ce98592c79f9209abd6e46a09b); ?>
<?php endif; ?></li>
                                                        <?php endif; ?>
                                                    </ul>
                                                </td>
                                            </tr>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </tbody>
                                </table>
                            </div>
                            <!-- Table End -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
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
                        <h4 class="customMarkup__single__title"><?php echo e(__('Add New Menu')); ?></h4>
                        <div class="customMarkup__single__inner mt-4">
                            <form action="<?php echo e(route('admin.menu')); ?>" method="POST" enctype="multipart/form-data">
                                <?php echo csrf_field(); ?>
                                <div class="single-input mb-3">
                                    <label for="title" class="label-title"><?php echo e(__('Title')); ?></label>
                                    <input type="text" name="title" id="title"
                                        placeholder="<?php echo e(__('Enter menu title')); ?>" class="form-control">
                                </div>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('menu-add')): ?>
                                    <?php if (isset($component)) { $__componentOriginal632b1038db5541c1a915a7b91a4b9d06 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal632b1038db5541c1a915a7b91a4b9d06 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.btn.submit-btn','data' => ['class' => 'btn btn-primary','title' => __('Add Menu')]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('btn.submit-btn'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'btn btn-primary','title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(__('Add Menu'))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal632b1038db5541c1a915a7b91a4b9d06)): ?>
<?php $attributes = $__attributesOriginal632b1038db5541c1a915a7b91a4b9d06; ?>
<?php unset($__attributesOriginal632b1038db5541c1a915a7b91a4b9d06); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal632b1038db5541c1a915a7b91a4b9d06)): ?>
<?php $component = $__componentOriginal632b1038db5541c1a915a7b91a4b9d06; ?>
<?php unset($__componentOriginal632b1038db5541c1a915a7b91a4b9d06); ?>
<?php endif; ?>
                                <?php endif; ?>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <?php if (isset($component)) { $__componentOriginal359cb93822e64e6be6de443fd191c585 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal359cb93822e64e6be6de443fd191c585 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.data-table.data-table-js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('data-table.data-table-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal359cb93822e64e6be6de443fd191c585)): ?>
<?php $attributes = $__attributesOriginal359cb93822e64e6be6de443fd191c585; ?>
<?php unset($__attributesOriginal359cb93822e64e6be6de443fd191c585); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal359cb93822e64e6be6de443fd191c585)): ?>
<?php $component = $__componentOriginal359cb93822e64e6be6de443fd191c585; ?>
<?php unset($__componentOriginal359cb93822e64e6be6de443fd191c585); ?>
<?php endif; ?>
    <script src="<?php echo e(asset('assets/common/js//sweetalert2.js')); ?>"></script>

    <script>
        (function($) {
            "use strict";
            $(document).ready(function() {
                $('.DataTable_activation').DataTable();
            });
        }(jQuery));
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/menus/all-menus.blade.php ENDPATH**/ ?>