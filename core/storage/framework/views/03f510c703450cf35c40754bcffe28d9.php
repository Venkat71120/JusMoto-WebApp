<?php if($notification->type =='order'): ?>
    <?php
        $order = \App\Models\Order::find($notification->identity);
    ?>

    <?php if($order): ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="<?php echo e(route('order.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php else: ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="javascript:void(0)">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php endif; ?>
<?php endif; ?>

<?php if($notification->type =='offer'): ?>
    <?php
        $offer = \App\Models\Offer::find($notification->identity);
    ?>

    <?php if($offer): ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="<?php echo e(route('offer.show',  ['offer_id' => $notification->identity, 'notificationId' => $notification->id])); ?>">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php else: ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="javascript:void(0)">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php endif; ?>
<?php endif; ?>

<?php if($notification->type === 'transaction'): ?>
    <?php
        $transaction = \Modules\Wallet\app\Models\Transaction::find($notification->identity);
    ?>

    <?php if($transaction): ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="<?php echo e(route('client.wallet.transactions.show',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php else: ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="javascript:void(0)">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php endif; ?>
<?php endif; ?>


<?php if($notification->type =='ticket' || $notification->type =='ticket-update'): ?>

    <?php
        $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
    ?>

    <?php if($ticket): ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="<?php echo e(route('ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id])); ?>">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php else: ?>
        <a class="notification_content <?php echo e(($notification->is_read === 'unread') ? 'active' : ''); ?>" href="javascript:void(0)">
            <span class="action-btn hw_40 bg_gray color_primary">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> <?php echo e($notification->message); ?></p>
                <span class="notification_date"><?php echo e($notification->created_at->diffForHumans()); ?></span>
            </div>
        </a>
    <?php endif; ?>
<?php endif; ?>

<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/notification/notification-list.blade.php ENDPATH**/ ?>