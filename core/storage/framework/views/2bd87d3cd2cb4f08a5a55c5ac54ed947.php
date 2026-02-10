<div class="notification_wrapper">
    <i class="fa-regular fa-bell"></i>
    <?php if(\App\Models\UserNotification::unread_notification_count() > 0): ?>
        <span class="notification_number">
            <?php echo e(\App\Models\UserNotification::unread_notification_count()); ?>

        </span>
    <?php endif; ?>

    <ul class="notification_dropdown_menu">
        <?php $__currentLoopData = \App\Models\UserNotification::notification(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $notification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <li>
                <?php if (isset($component)) { $__componentOriginal68bc59fa5b677b8a0bbae20c54cb7f29 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal68bc59fa5b677b8a0bbae20c54cb7f29 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.client-notification-in-top','data' => ['notification' => $notification]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.client-notification-in-top'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['notification' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($notification)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal68bc59fa5b677b8a0bbae20c54cb7f29)): ?>
<?php $attributes = $__attributesOriginal68bc59fa5b677b8a0bbae20c54cb7f29; ?>
<?php unset($__attributesOriginal68bc59fa5b677b8a0bbae20c54cb7f29); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal68bc59fa5b677b8a0bbae20c54cb7f29)): ?>
<?php $component = $__componentOriginal68bc59fa5b677b8a0bbae20c54cb7f29; ?>
<?php unset($__componentOriginal68bc59fa5b677b8a0bbae20c54cb7f29); ?>
<?php endif; ?>
            </li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </ul>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/layout/partial/notifications.blade.php ENDPATH**/ ?>