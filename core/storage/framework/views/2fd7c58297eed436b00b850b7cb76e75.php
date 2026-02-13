<?php $__env->startSection('site-title','All Favourite Services'); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header">
                <h3 class="page_title mb_12"><?php echo e(__('Favourite Services List')); ?></h3>
            </div>
            <div class="table_wrapper">
                <table class="data-table-refund table w-100 br_4 overflow-hidden">
                    <thead class="table_head">
                    <tr>
                        <th><?php echo e(__('Id')); ?></th>
                        <th><?php echo e(__('Title')); ?></th>
                        <th><?php echo e(__('Category')); ?></th>
                        <th><?php echo e(__('Total Sold')); ?></th>
                        <th><?php echo e(__('Price')); ?></th>
                        <th><?php echo e(__('Action')); ?></th>
                    </tr>
                    </thead>
                    <tbody class="table_body">
                    <?php $__empty_1 = true; $__currentLoopData = $favoriteItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e($item->id); ?></td>
                            <td><?php echo e(\Illuminate\Support\Str::limit($item->title ?? "N/A", 50, '...')); ?></td>
                            <td><?php echo e($item->category_name ?? "N/A"); ?></td>
                            <td><?php echo e($item->sold ?? 0); ?></td>
                            <td><?php echo e($item->price ?? 0); ?></td>
                            <td>
                                <span  class="action_icon d-flex gap-2">
                                    <a href="#"><i class="icon-base ti tabler-eye"></i></a>
                                     <span class="fvt-icon favorite-btn <?php echo e(auth()->user()?->favoriteItems?->contains('item_id', $item->item_id) ? 'selected' : ''); ?>" data-id="<?php echo e($item->item_id); ?>">
                                            <i class="fa-solid fa-heart"></i>
                                     </span>
                                </span>
                            </td>

                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="6" class="text-center"><?php echo e(__('No Favourite Item found')); ?></td>
                        </tr>
                    <?php endif; ?>
                    </tbody>
                </table>
            </div>
            <?php if($favoriteItems->count()>0): ?>
              <div class="pagination" id="tablePaginationFavourite">
                  <?php if (isset($component)) { $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.dashboard-pagination.pagination','data' => ['paginator' => $favoriteItems]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.dashboard-pagination.pagination'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['paginator' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($favoriteItems)]); ?>
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

<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/favourite-item/all-favourite-items.blade.php ENDPATH**/ ?>