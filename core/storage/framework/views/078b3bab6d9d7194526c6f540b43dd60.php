<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Notification')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <h4 class="page-heading mb-4"><?php echo e(__('Notificattions')); ?></h4>
            <div>
                <!-- notification container -->
                <div class="d-flex justify-content-between pt_3 mb_6 border_bottom_1">
                    <ul class="nav nav-pills notifications_tabs">
                        <li class="nav-item">
                            <a class="nav-link notifications <?php echo e($filter === 'all' ? 'active' : ''); ?>"
                               href="<?php echo e(route('client.notification.all', ['filter' => 'all'])); ?>">
                                <?php echo e(__('All')); ?>

                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link notifications <?php echo e($filter === 'unread' ? 'active' : ''); ?>"
                               href="<?php echo e(route('client.notification.all', ['filter' => 'unread'])); ?>">
                                <?php echo e(__('Unread')); ?> <?php echo e($unread_message); ?>

                            </a>
                        </li>
                    </ul>

                    <a href="<?php echo e(route('client.notification.read')); ?>" class="mark_all_as_read text-decoration-none" id="mark_all_as_read">
                        <i class="icon-base ti tabler-checks"></i>
                        <span><?php echo e(__('Mark all as read')); ?></span>
                    </a>
                </div>
                <div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="all_notify_info" role="tabpanel"
                             aria-labelledby="all_notification" tabindex="0">
                            <h6 class="page-heading-2 mt-3"><?php echo e(__('Today')); ?></h6>
                            <div class="all_notification_wrapper">
                                <?php $__empty_1 = true; $__currentLoopData = $todayNotifications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $notification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <?php echo $__env->make('frontend.user.client.notification.notification-list',[$notification], array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                    <p><?php echo e(__('No notifications today.')); ?></p>
                                <?php endif; ?>
                            </div>
                            <h6 class=" page-heading-2 mt-3"><?php echo e(__('Previous Days')); ?></h6>
                            <div class="all_notification_wrapper">
                                <?php $__empty_1 = true; $__currentLoopData = $previousNotifications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $notification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                    <?php echo $__env->make('frontend.user.client.notification.notification-list',[$notification], array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                    <p><?php echo e(__('No notifications found.')); ?></p>
                                <?php endif; ?>
                            </div>
                            <?php if($notifications->count()>0): ?>
                                <!-- Pagination -->
                                <div class="pagination mt-3 d-flex justify-content-end">
                                    <?php if (isset($component)) { $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.dashboard-pagination.pagination','data' => ['paginator' => $notifications]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.dashboard-pagination.pagination'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['paginator' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($notifications)]); ?>
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
                </div>
            </div>
        </div>
    </div>

    <?php if (isset($component)) { $__componentOriginal80e305c74df3fdc49e64220f2b928bf3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal80e305c74df3fdc49e64220f2b928bf3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.flash-msg','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.flash-msg'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal80e305c74df3fdc49e64220f2b928bf3)): ?>
<?php $attributes = $__attributesOriginal80e305c74df3fdc49e64220f2b928bf3; ?>
<?php unset($__attributesOriginal80e305c74df3fdc49e64220f2b928bf3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal80e305c74df3fdc49e64220f2b928bf3)): ?>
<?php $component = $__componentOriginal80e305c74df3fdc49e64220f2b928bf3; ?>
<?php unset($__componentOriginal80e305c74df3fdc49e64220f2b928bf3); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginalc9692a4e4f266b622edf3104a05a2ca4 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.response-message','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.response-message'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4)): ?>
<?php $attributes = $__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4; ?>
<?php unset($__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc9692a4e4f266b622edf3104a05a2ca4)): ?>
<?php $component = $__componentOriginalc9692a4e4f266b622edf3104a05a2ca4; ?>
<?php unset($__componentOriginalc9692a4e4f266b622edf3104a05a2ca4); ?>
<?php endif; ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script>
        $(document).ready(function () {

        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/notification/all-notification.blade.php ENDPATH**/ ?>