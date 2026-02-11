
<?php if($notification->type =='order'): ?>
        <?php
        $admin_order = \App\Models\Order::find($notification->identity);

        ?>

        <?php if($admin_order): ?>
            <a href="<?php echo e(route('admin.main.order.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                <li class="dashboard__header__notification__wrap__list__item">
                    <div class="dashboard__header__notification__wrap__list__flex">
                        <div class="dashboard__header__notification__wrap__list__icon">
                            <i class="las la-bell"></i>
                        </div>
                        <div class="dashboard__header__notification__wrap__list__contents">
                            <?php echo e($notification->message ?? ''); ?>  <strong>#<?php echo e($notification->identity); ?></strong>
                            <span class="dashboard__header__notification__wrap__list__contents__sub">
                                <?php echo e($notification->created_at->toFormattedDateString()); ?>

                            </span>
                        </div>
                    </div>
                </li>
            </a>
        <?php else: ?>
            <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">
                    <li class="dashboard__header__notification__wrap__list__item">
                        <div class="dashboard__header__notification__wrap__list__flex">
                            <div class="dashboard__header__notification__wrap__list__icon">
                                <i class="las la-bell"></i>
                            </div>
                            <div class="dashboard__header__notification__wrap__list__contents">
                                <?php echo e($notification->message ?? ''); ?>  <strong>#<?php echo e($notification->identity); ?></strong>
                                <span class="dashboard__header__notification__wrap__list__contents__sub">
                                    <?php echo e($notification->created_at->toFormattedDateString()); ?>

                                </span>
                            </div>
                        </div>
                    </li>
            </a>
        <?php endif; ?>
    
<?php endif; ?>

<?php if($notification->type =='ticket' || $notification->type =='ticket-update'): ?>
    <?php
        $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
    ?>

        <?php if($ticket): ?>
            <a href="<?php echo e(route('admin.ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
                <li class="dashboard__header__notification__wrap__list__item">
                    <div class="dashboard__header__notification__wrap__list__flex">
                        <div class="dashboard__header__notification__wrap__list__icon">
                            <i class="las la-bell"></i>
                        </div>
                        <div class="dashboard__header__notification__wrap__list__contents">
                            <?php echo e($notification->message ?? ''); ?>  <strong>#<?php echo e($notification->identity); ?></strong>
                            <span class="dashboard__header__notification__wrap__list__contents__sub">
                                <?php echo e($notification->created_at->toFormattedDateString()); ?>

                            </span>
                        </div>
                    </div>
                </li>
            </a>
        <?php else: ?>
            <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">

                
                    <li class="dashboard__header__notification__wrap__list__item">
                        <div class="dashboard__header__notification__wrap__list__flex">
                            <div class="dashboard__header__notification__wrap__list__icon">
                                <i class="las la-bell"></i>
                            </div>
                            <div class="dashboard__header__notification__wrap__list__contents">
                                <?php echo e($notification->message ?? ''); ?>  <strong>#<?php echo e($notification->identity); ?></strong>
                                <span class="dashboard__header__notification__wrap__list__contents__sub">
                                    <?php echo e($notification->created_at->toFormattedDateString()); ?>

                                </span>
                            </div>
                        </div>
                    </li>
                

            </a>
        <?php endif; ?>
    
<?php endif; ?>

<?php if($notification->type =='withdraw'): ?>
    <?php
        $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
    ?>

    <?php if($ticket): ?>
        <a href="<?php echo e(route('admin.ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>" class="dashboard__notification__list__item click-notification">
            <li class="dashboard__header__notification__wrap__list__item">
                <div class="dashboard__header__notification__wrap__list__flex">
                    <div class="dashboard__header__notification__wrap__list__icon">
                        <i class="las la-bell"></i>
                    </div>
                    <div class="dashboard__header__notification__wrap__list__contents">
                        <?php echo e($notification->message ?? ''); ?>  <strong>#<?php echo e($notification->identity); ?></strong>
                        <span class="dashboard__header__notification__wrap__list__contents__sub">
                            <?php echo e($notification->created_at->toFormattedDateString()); ?>

                        </span>
                    </div>
                </div>
            </li>
        </a>
    <?php else: ?>
        <a href="javascript:void(0)" class="dashboard__notification__list__item click-notification">

                <li class="dashboard__header__notification__wrap__list__item">
                    <div class="dashboard__header__notification__wrap__list__flex">
                        <div class="dashboard__header__notification__wrap__list__icon">
                            <i class="las la-bell"></i>
                        </div>
                        <div class="dashboard__header__notification__wrap__list__contents">
                            <?php echo e($notification->message ?? ''); ?>  <strong>#<?php echo e($notification->identity); ?></strong>
                            <span class="dashboard__header__notification__wrap__list__contents__sub">
                                <?php echo e($notification->created_at->toFormattedDateString()); ?>

                            </span>
                        </div>
                    </div>
                </li> 

        </a>
    <?php endif; ?>

<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/backend/admin-notification-in-top.blade.php ENDPATH**/ ?>