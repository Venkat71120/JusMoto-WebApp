<?php $__env->startSection('title','Address List'); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header d-flex justify-content-between gap-4 flex-wrap mb-4">
                <h3 class="page_title mb_12"><?php echo e(__('Address List')); ?></h3>
                <div class="d-flex align-items-center gap-4">
                    <form action="<?php echo e(route('client.all.address')); ?>" method="GET" class="d-flex align-items-center gap-2">
                        <input type="search" name="string_search" class="custom_input py-2" placeholder="Search" value="<?php echo e(request('string_search')); ?>">
                        <button type="submit" class="btn_primary  py-2"><?php echo e(__('Search')); ?></button>
                    </form>
                    <a href="<?php echo e(route('client.address.create')); ?>" class="btn_primary text-decoration-none py-2"><i class="ti icone-base tabler-plus"></i><?php echo e(__('Add Address')); ?></a>
                </div>
            </div>
            <div class="table_wrapper">
                <table class="data-table-refund table w-100 br_4 overflow-hidden">
                    <thead class="table_head">
                    <tr>
                        <th><?php echo e(__('Address Id')); ?></th>
                        <th><?php echo e(__('Title')); ?></th>
                        <th><?php echo e(__('Type')); ?></th>
                        <th><?php echo e(__('Address')); ?></th>
                        <th><?php echo e(__('State')); ?></th>
                        <th><?php echo e(__('City')); ?></th>
                        <th><?php echo e(__('Area')); ?></th>
                        <th><?php echo e(__('Action')); ?></th>
                    </tr>
                    </thead>
                    <tbody class="table_body">
                    <?php $__empty_1 = true; $__currentLoopData = $all_locations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $location): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e($location->id); ?></td>
                            <td><?php echo e(\Illuminate\Support\Str::limit($location->title ?? 'N/A', 20, '...')); ?></td>
                            <?php
                                if($location->type === 0)
                                 {
                                     $type="Home";
                                 }else if($location->type === 1)
                                 {
                                     $type="Office";
                                 }
                            ?>
                            <td><?php echo e($type); ?></td>
                            <td><?php echo e(\Illuminate\Support\Str::limit($location->address ?? 'N/A', 20, '...')); ?></td>
                            <td><?php echo e($location->state?->state ?? 'N/A'); ?></td>
                            <td><?php echo e($location->city?->city ?? 'N/A'); ?></td>
                            <td><?php echo e($location->area?->area ?? 'N/A'); ?></td>
                            <td class="action_icon">
                                <a href="<?php echo e(route('client.address.edit',[$location->id])); ?>"><i class="icon-base ti tabler-edit"></i></a>
                                <form action="<?php echo e(route('client.address.delete',[$location->id])); ?>" method="POST" style="display:inline;">
                                    <?php echo csrf_field(); ?>
                                    <button type="submit" class="btn p-0">
                                        <i class="icon-base ti tabler-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="8" class="text-center"> <?php echo e(__("No address available yet.Add a new address to get started.")); ?></td>
                        </tr>
                    <?php endif; ?>
                    </tbody>
                </table>
            </div>
            <?php if($all_locations->count()>0): ?>
                <div class="pagination" id="tablePaginationRefund">
                    <?php if (isset($component)) { $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.dashboard-pagination.pagination','data' => ['paginator' => $all_locations]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.dashboard-pagination.pagination'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['paginator' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($all_locations)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e)): ?>
<?php $attributes = $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e; ?>
<?php unset($__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal5e64ee16cb42f0815c0860d815d8c40e)): ?>
<?php $component = $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e; ?>
<?php unset($__componentOriginal5e64ee16cb42f0815c0860d815d8c40e); ?>
<?php endif; ?>
                </div>
            <?php endif; ?>

        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/address/all-address.blade.php ENDPATH**/ ?>