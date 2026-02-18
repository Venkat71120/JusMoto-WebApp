<style>
    /* ===== CLEAN STATUS BADGES - NO BORDERS ===== */

    :root {
        --yellow-light: #fef3c7;
        --yellow-dark: #b45309;
        --green-light: #d1fae5;
        --green-dark: #047857;
        --cyan-light: #cffafe;
        --cyan-dark: #0e7490;
        --red-light: #fee2e2;
        --red-dark: #b91c1c;
        --orange-light: #ffedd5;
        --orange-dark: #b45309;
        --purple-light: #ede9fe;
        --purple-dark: #5b21b6;
        --gray-700: #374151;
        --radius: 20px;
    }

    .status-badge {
        display: inline-flex;
        align-items: center;
        padding: 6px 16px;
        border-radius: var(--radius);
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.3px;
        white-space: nowrap;
    }

    /* Pending Status */
    .queue-order,
    .status-badge.pending {
        background: var(--yellow-light);
        color: var(--yellow-dark);
    }

    /* Complete Status */
    .active-order,
    .complete-order,
    .status-badge.complete {
        background: var(--green-light);
        color: var(--green-dark);
    }

    /* Delivered Status */
    .deliver-order,
    .status-badge.delivered {
        background: var(--cyan-light);
        color: var(--cyan-dark);
    }

    /* Cancel Status */
    .cancel-order,
    .status-badge.cancel {
        background: var(--red-light);
        color: var(--red-dark);
    }

    /* Declined Status */
    .decline-order,
    .status-badge.declined {
        background: var(--orange-light);
        color: var(--orange-dark);
    }

    /* Fallback for any other status */
    .status-badge.default {
        background: #f3f4f6;
        color: var(--gray-700);
    }
</style>

<?php if($status === 0): ?>
    <span class="status-badge pending"><?php echo e(__('Pending')); ?></span>
<?php elseif($status === 1): ?>
    <span class="status-badge complete"><?php echo e(__('Complete')); ?></span>
<?php elseif($status === 2): ?>
    <span class="status-badge complete"><?php echo e(__('Complete')); ?></span>
<?php elseif($status === 3): ?>
    <span class="status-badge delivered"><?php echo e(__('Delivered')); ?></span>
<?php elseif($status === 4): ?>
    <span class="status-badge cancel"><?php echo e(__('Cancel')); ?></span>
<?php elseif($status === 5): ?>
    <span class="status-badge declined"><?php echo e(__('Declined')); ?></span>
<?php endif; ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/status/main-order-status.blade.php ENDPATH**/ ?>