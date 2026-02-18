<div class="col-xl-12 col-md-12 mt-5">
    <div class="notes-card">
        <div class="card-header">
            <h4 class="card-title">
                <i class="las la-sticky-note"></i>
                <?php echo e(__('Order Notes')); ?>

            </h4>
        </div>
        
        <div class="card-body">
            <div class="note-content">
                <?php if($order->order_note): ?>
                    <p class="note-text"><?php echo e($order->order_note); ?></p>
                <?php else: ?>
                    <div class="empty-note">
                        <i class="las la-info-circle"></i>
                        <p><?php echo e(__('No order note found')); ?></p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== ORDER NOTES CARD - NO BORDERS ===== */

:root {
    --white: #ffffff;
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --red: #e31b23;
    --red-light: #fee2e2;
    --radius: 8px;
}

/* Notes Card */
.notes-card {
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    height: 100%;
}

/* Card Header */
.card-header {
    padding: 16px 20px;
    background: transparent;
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-800);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.card-title i {
    color: var(--red);
    font-size: 20px;
    background: var(--red-light);
    padding: 6px;
    border-radius: 8px;
}

/* Card Body */
.card-body {
    padding: 0 20px 20px 20px;
}

/* Note Content */
.note-content {
    min-height: 80px;
}

.note-text {
    font-size: 15px;
    line-height: 1.6;
    color: var(--gray-700);
    margin: 0;
    padding: 16px;
    background: var(--gray-50);
    border-radius: var(--radius);
}

/* Empty Note */
.empty-note {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 20px;
    background: var(--gray-50);
    border-radius: var(--radius);
    color: var(--gray-600);
    text-align: center;
}

.empty-note i {
    font-size: 48px;
    color: #cbd5e1;
    margin-bottom: 12px;
}

.empty-note p {
    font-size: 15px;
    color: var(--gray-600);
    margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
    .card-header {
        padding: 14px 16px;
    }
    
    .card-body {
        padding: 0 16px 16px 16px;
    }
    
    .note-text {
        font-size: 14px;
        padding: 14px;
    }
    
    .empty-note {
        padding: 24px 16px;
    }
    
    .empty-note i {
        font-size: 40px;
    }
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-notes-details.blade.php ENDPATH**/ ?>