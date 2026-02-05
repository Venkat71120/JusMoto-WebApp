<table class="dataTablesExample">
    <thead>
    <tr>
        <th><?php echo e(__('ID')); ?></th>
        <th><?php echo e(__('Message')); ?></th>
        <th><?php echo e(__('Notification Type')); ?></th>
        <th><?php echo e(__('Read/Unread')); ?></th>
        <th><?php echo e(__('Action')); ?></th>
    </tr>
    </thead>
    <tbody>
    <?php $__currentLoopData = $all_notifications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $notification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($notification->id); ?></td>
            <td>
               
                <?php if($notification->type =='order'): ?>
                      <?php
                        $admin_order = \App\Models\Order::find($notification->identity);

                       ?>

                       <?php if($admin_order): ?>
                            <a href="<?php echo e(route('admin.main.order.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                                <?php echo e($notification->message); ?>

                            </a>
                        <?php else: ?>
                            <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                                <?php echo e($notification->message); ?>

                            </a>
                        <?php endif; ?>
                <?php endif; ?>

                <?php if($notification->type =='ticket' || $notification->type =='ticket-update'): ?>
                
                        <?php
                            $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
                        ?>

                         <?php if($ticket): ?>
                            <a href="<?php echo e(route('admin.ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                                <?php echo e($notification->message); ?>

                            </a>
                         <?php else: ?>
                            <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                    
                                <?php echo e($notification->message); ?>

                    
                            </a>
                          <?php endif; ?>
                <?php endif; ?>

                <?php if($notification->type =='withdraw'): ?>
                    <?php
                       $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
                    ?>

                    <?php if($ticket): ?>
                        <a href="<?php echo e(route('admin.ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                           <?php echo e($notification->message); ?>

                        </a>
                    <?php else: ?>
                        <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                        
                           <?php echo e($notification->message); ?>

                        
                        </a>
                    <?php endif; ?>
                    
                <?php endif; ?>
            </td>
            <td><?php echo e($notification->type); ?></td>
            <td>
                <?php if($notification->is_read == 'unread'): ?>
                    <span class="badge bg-danger"><?php echo e(__('Unread')); ?></span>
                <?php else: ?>
                    <span class="badge bg-success"><?php echo e(__('Read')); ?></span>
                <?php endif; ?>
            </td>
            <td>              

                <?php if($notification->type =='order'): ?>
                  <?php
                    $admin_order = \App\Models\Order::find($notification->identity);

                  ?>

                    <?php if($admin_order): ?>
                        <a href="<?php echo e(route('admin.main.order.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                        <button type="button" class="btn btn-primary">
                          View
                        </button>
                        </a>
                    <?php else: ?>
                        <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                            <button type="button" class="btn btn-primary">
                                View
                            </button>
                        </a>
                    <?php endif; ?>
                
                   
                <?php endif; ?>

                <?php if($notification->type =='ticket' || $notification->type =='ticket-update'): ?>
                <?php
                    $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
                ?>

                <?php if($ticket): ?>
                <a href="<?php echo e(route('admin.ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                    <button type="button" class="btn btn-primary">
                        View
                    </button>
                </a>
                <?php else: ?>
                    <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                        <button type="button" class="btn btn-primary">
                            View
                        </button>
                    </a>
                <?php endif; ?>
                    
                <?php endif; ?>

                <?php if($notification->type =='withdraw'): ?>
                <?php
                $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
            ?>

            <?php if($ticket): ?>
            <a href="<?php echo e(route('admin.ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                <button type="button" class="btn btn-primary">
                    View
                </button>
            </a>
            <?php else: ?>
                <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                    <button type="button" class="btn btn-primary">
                        View
                    </button>
                </a>
            <?php endif; ?>
                <?php endif; ?>

            </td>
        </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </tbody>
</table>
<?php if (isset($component)) { $__componentOriginal0143df8887fb9686c5dbf1f1b0d7027f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0143df8887fb9686c5dbf1f1b0d7027f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.pagination.laravel-paginate','data' => ['allData' => $all_notifications]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('pagination.laravel-paginate'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['allData' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($all_notifications)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0143df8887fb9686c5dbf1f1b0d7027f)): ?>
<?php $attributes = $__attributesOriginal0143df8887fb9686c5dbf1f1b0d7027f; ?>
<?php unset($__attributesOriginal0143df8887fb9686c5dbf1f1b0d7027f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0143df8887fb9686c5dbf1f1b0d7027f)): ?>
<?php $component = $__componentOriginal0143df8887fb9686c5dbf1f1b0d7027f; ?>
<?php unset($__componentOriginal0143df8887fb9686c5dbf1f1b0d7027f); ?>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/notification/search-result.blade.php ENDPATH**/ ?>