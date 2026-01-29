<table class="dataTablesExample">
    <thead>
    <th><?php echo e(__('ID')); ?></th>
    <th><?php echo e(__('Admin')); ?></th>
    <th><?php echo e(__('Reviwer')); ?></th>
    <th><?php echo e(__('Item')); ?></th>
    <th><?php echo e(__('Type')); ?></th>
    <th><?php echo e(__('Rating')); ?></th>
    <th><?php echo e(__('Status')); ?></th>
    <th><?php echo e(__('Action')); ?></th>
    </thead>
    <tbody>
    <?php $__currentLoopData = $all_reviews; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($data->id); ?></td>
            <td><?php echo e($data->admin?->name); ?></td>
            <td><?php echo e($data->reviewer?->first_name ?? $data->reviewer?->username); ?></td>
            <td><?php echo e($data->service?->title); ?></td>
            <?php
                $flag="";
                if($data->service?->type == 0)
                {
                    $flag = __('Service');
                }
                elseif($data->service?->type == 1)
                {
                    $flag = __('Product');
                }
            ?>
            <td><?php echo e($flag); ?></td>
            <td><?php echo e($data->rating); ?></td>
            <td>
                <span class="me-2"><?php if (isset($component)) { $__componentOriginal56088c5be3c12d921703e47bae591320 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal56088c5be3c12d921703e47bae591320 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.review-status','data' => ['status' => $data->status]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.review-status'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($data->status)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal56088c5be3c12d921703e47bae591320)): ?>
<?php $attributes = $__attributesOriginal56088c5be3c12d921703e47bae591320; ?>
<?php unset($__attributesOriginal56088c5be3c12d921703e47bae591320); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal56088c5be3c12d921703e47bae591320)): ?>
<?php $component = $__componentOriginal56088c5be3c12d921703e47bae591320; ?>
<?php unset($__componentOriginal56088c5be3c12d921703e47bae591320); ?>
<?php endif; ?></span>
                <span><?php if (isset($component)) { $__componentOriginal086f7010becd4d657cdb856682d3d79f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal086f7010becd4d657cdb856682d3d79f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.status-change','data' => ['url' => route('admin.review.status',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.status-change'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.review.status',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal086f7010becd4d657cdb856682d3d79f)): ?>
<?php $attributes = $__attributesOriginal086f7010becd4d657cdb856682d3d79f; ?>
<?php unset($__attributesOriginal086f7010becd4d657cdb856682d3d79f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal086f7010becd4d657cdb856682d3d79f)): ?>
<?php $component = $__componentOriginal086f7010becd4d657cdb856682d3d79f; ?>
<?php unset($__componentOriginal086f7010becd4d657cdb856682d3d79f); ?>
<?php endif; ?></span>
            </td>
            <!--Action -->
            <td class="p-1 text-center new_style_added">
                
               <div class="multiple_action_buttons_new d-flex gap-2 flex-wrap">
                   <?php if (isset($component)) { $__componentOriginal768f8f40d03d4d53d956d4ea52baca68 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal768f8f40d03d4d53d956d4ea52baca68 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.view-icon','data' => ['url' => route('admin.review.details',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.view-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.review.details',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal768f8f40d03d4d53d956d4ea52baca68)): ?>
<?php $attributes = $__attributesOriginal768f8f40d03d4d53d956d4ea52baca68; ?>
<?php unset($__attributesOriginal768f8f40d03d4d53d956d4ea52baca68); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal768f8f40d03d4d53d956d4ea52baca68)): ?>
<?php $component = $__componentOriginal768f8f40d03d4d53d956d4ea52baca68; ?>
<?php unset($__componentOriginal768f8f40d03d4d53d956d4ea52baca68); ?>
<?php endif; ?>
                   <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-review-delete')): ?>
                       <?php if (isset($component)) { $__componentOriginal7973b0ce98592c79f9209abd6e46a09b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.delete-popup','data' => ['url' => route('admin.review.delete',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.delete-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.review.delete',$data->id))]); ?>
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
               </div>
            </td>
        </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </tbody>
</table>
<div class="custom_pagination mt-5 d-flex justify-content-end">
    <?php echo e($all_reviews->links()); ?>

</div>
<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/backend/pages/admin/review/search-review.blade.php ENDPATH**/ ?>