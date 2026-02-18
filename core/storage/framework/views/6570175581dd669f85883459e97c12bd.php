<!-- Enhanced Refunded Orders Table -->
<div class="tableStyle_three mt-4">
    <div class="table_wrapper custom_Table">
        <table class="dataTablesExample refunded-orders-table">
            <thead>
                <tr>
                    <th><?php echo e(__('ID')); ?></th>
                    <th><?php echo e(__('Order ID')); ?></th>
                    <th><?php echo e(__('Client Info')); ?></th>
                    <th><?php echo e(__('Fine Type')); ?></th>
                    <th><?php echo e(__('Fine Amount')); ?></th>
                    <th><?php echo e(__('Refunded Amount')); ?></th>
                    <th><?php echo e(__('Status')); ?></th>
                    <th><?php echo e(__('Actions')); ?></th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $refundedOrders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr class="order-row">
                        <td>
                            <span class="order-id-badge">
                                <?php echo e($refundedOrders->firstItem() + $loop->index); ?>

                            </span>
                        </td>

                        <td>
                            <span class="order-ref">ORD-<?php echo e($data->order_id); ?></span>
                        </td>
                        <td>
                            <div class="client-info-wrapper">
                                <div class="client-avatar">
                                    <i class="las la-user-circle"></i>
                                </div>
                                <div class="client-details">
                                    <h6 class="client-name"><?php echo e($data->user?->first_name ?? 'N/A'); ?>

                                        <?php echo e($data->user?->last_name ?? ''); ?></h6>
                                    <span class="client-email"><?php echo e($data->user?->email ?? 'No email'); ?></span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="fine-type-badge <?php echo e(strtolower($data->fine_type)); ?>">
                                <?php echo e($data->fine_type); ?>

                            </span>
                        </td>
                        <td>
                            <span class="fine-amount"><?php echo e(float_amount_with_currency_symbol($data->fine_amount)); ?></span>
                        </td>
                        <td>
                            <div class="refunded-amount-wrapper">
                                <span class="refunded-amount"><?php echo e(float_amount_with_currency_symbol($data->amount)); ?></span>
                                <?php if($data->fine_amount > $data->amount): ?>
                                    <span class="refund-status partial" title="Partial refund">
                                        <i class="las la-exclamation-circle"></i>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </td>
                        <td>
                            <div class="status-wrapper">
                                <span class="status-badge refunded status-<?php echo e($data->status); ?>">
                                    <?php if($data->status == 0): ?>
                                        <i class="las la-clock"></i> <?php echo e(__('Pending')); ?>

                                    <?php elseif($data->status == 1): ?>
                                        <i class="las la-check-circle"></i> <?php echo e(__('Completed')); ?>

                                    <?php elseif($data->status == 2): ?>
                                        <i class="las la-times-circle"></i> <?php echo e(__('Cancelled')); ?>

                                    <?php endif; ?>
                                </span>
                                <button type="button" class="status-edit-btn refunded_order_status_change_modal"
                                    data-order_id="<?php echo e($data->id); ?>" data-bs-toggle="tooltip" title="<?php echo e(__('Change Status')); ?>"
                                    data-bs-toggle="modal" data-bs-target="#RefundedOrderStatusChangeModal">
                                    <i class="las la-pen"></i>
                                </button>
                            </div>
                        </td>
                        <td>
                            <div class="action-buttons">
                                <a href="<?php echo e(route('admin.refunded-order.details', $data->id)); ?>" class="action-btn view-btn"
                                    data-bs-toggle="tooltip" title="<?php echo e(__('View Refund Details')); ?>">
                                    <i class="las la-eye"></i>
                                </a>
                                <a href="<?php echo e(route('admin.main.order.details', $data->order_id)); ?>"
                                    class="action-btn order-info-btn" data-bs-toggle="tooltip"
                                    title="<?php echo e(__('View Main Order')); ?>">
                                    <i class="las la-shopping-cart"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
</div>

<!-- Enhanced Pagination -->
<div class="pagination-wrapper mt-4">
    <div class="pagination-info">
        <?php echo e(__('Showing')); ?> <?php echo e($refundedOrders->firstItem()); ?> <?php echo e(__('to')); ?> <?php echo e($refundedOrders->lastItem()); ?>

        <?php echo e(__('of')); ?> <?php echo e($refundedOrders->total()); ?> <?php echo e(__('results')); ?>

    </div>
    <div class="pagination-container">
        <?php echo e($refundedOrders->links('pagination::bootstrap-5')); ?>

    </div>
</div>

<!-- Enhanced Status Change Modal -->
<div class="modal fade" id="RefundedOrderStatusChangeModal" tabindex="-1" role="dialog"
    aria-labelledby="statusModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="statusModalLabel">
                    <i class="las la-exchange-alt"></i>
                    <?php echo e(__('Update Refund Status')); ?>

                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="<?php echo e(route('admin.redunded-order.status')); ?>" method="POST">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="id" class="order_id" value="">
                <div class="modal-body">
                    <div class="status-update-form">
                        <label for="status_id" class="form-label"><?php echo e(__('Select New Status')); ?></label>
                        <select name="status_id" id="status_id" class="form-select">
                            <option value="0" data-icon="clock"><?php echo e(__('Pending')); ?></option>
                            <option value="1" data-icon="check-circle"><?php echo e(__('Completed')); ?></option>
                            <option value="2" data-icon="times-circle"><?php echo e(__('Cancel')); ?></option>
                        </select>
                        <div class="status-preview mt-3">
                            <small class="text-muted">
                                <i class="las la-info-circle"></i>
                                <?php echo e(__('Changing the status will notify the client via email')); ?>

                            </small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="las la-times"></i> <?php echo e(__('Close')); ?>

                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="las la-save"></i> <?php echo e(__('Update Status')); ?>

                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Enhanced CSS for the table and components -->
<style>
    /* ===== ENHANCED TABLE STYLES ===== */
    .refunded-orders-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 14px;
    }

    .refunded-orders-table thead th {
        padding: 16px 20px;
        background: var(--gray-50);
        color: var(--gray-700);
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.3px;
        border-bottom: 2px solid var(--gray-200);
        white-space: nowrap;
    }

    .refunded-orders-table thead th:first-child {
        border-radius: var(--radius-lg) 0 0 0;
    }

    .refunded-orders-table thead th:last-child {
        border-radius: 0 var(--radius-lg) 0 0;
    }

    .refunded-orders-table tbody td {
        padding: 20px;
        color: var(--gray-700);
        border-bottom: 1px solid var(--gray-100);
        vertical-align: middle;
    }

    .refunded-orders-table tbody tr {
        background: var(--white);
        transition: var(--transition);
    }

    .refunded-orders-table tbody tr:hover {
        background: var(--gray-50);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        position: relative;
        z-index: 1;
    }

    .refunded-orders-table tbody tr:last-child td {
        border-bottom: none;
    }

    .refunded-orders-table tbody tr:last-child td:first-child {
        border-radius: 0 0 0 var(--radius-lg);
    }

    .refunded-orders-table tbody tr:last-child td:last-child {
        border-radius: 0 0 var(--radius-lg) 0;
    }

    /* Order ID Badge */
    .order-id-badge {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        background: var(--red-light);
        color: var(--red-dark);
        border-radius: 30px;
        font-weight: 600;
        font-size: 12px;
        border: 1px solid var(--red);
    }

    .order-ref {
        font-weight: 600;
        color: var(--gray-800);
        background: var(--gray-100);
        padding: 4px 12px;
        border-radius: 30px;
        font-size: 12px;
    }

    /* Client Info Styles */
    .client-info-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .client-avatar {
        width: 45px;
        height: 45px;
        background: linear-gradient(135deg, var(--red-light), var(--red));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        box-shadow: var(--shadow-sm);
    }

    .client-details {
        flex: 1;
    }

    .client-name {
        margin: 0 0 4px 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--gray-800);
    }

    .client-email {
        font-size: 12px;
        color: var(--gray-500);
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .client-email::before {
        content: '✉';
        font-size: 11px;
        opacity: 0.7;
    }

    /* Fine Type Badge */
    .fine-type-badge {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 500;
    }

    .fine-type-badge.penalty {
        background: var(--yellow-light);
        color: var(--yellow-dark);
    }

    .fine-type-badge.refund {
        background: var(--blue-light);
        color: var(--blue-dark);
    }

    .fine-type-badge.other {
        background: var(--gray-100);
        color: var(--gray-600);
    }

    /* Amount Styles */
    .fine-amount {
        font-weight: 600;
        color: var(--gray-800);
        background: var(--gray-100);
        padding: 4px 12px;
        border-radius: 30px;
        font-size: 13px;
    }

    .refunded-amount-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .refunded-amount {
        font-weight: 700;
        color: var(--green-dark);
        background: var(--green-light);
        padding: 4px 12px;
        border-radius: 30px;
        font-size: 13px;
    }

    .refund-status.partial {
        color: var(--yellow-dark);
        font-size: 16px;
        cursor: help;
    }

    /* Status Wrapper */
    .status-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .status-badge.refunded {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 500;
    }

    .status-badge.refunded.status-0 {
        background: var(--yellow-light);
        color: var(--yellow-dark);
    }

    .status-badge.refunded.status-1 {
        background: var(--green-light);
        color: var(--green-dark);
    }

    .status-badge.refunded.status-2 {
        background: var(--red-light);
        color: var(--red-dark);
    }

    .status-edit-btn {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--white);
        border: 1px solid var(--gray-200);
        border-radius: 8px;
        color: var(--gray-600);
        font-size: 16px;
        cursor: pointer;
        transition: var(--transition);
        padding: 0;
    }

    .status-edit-btn:hover {
        background: var(--red);
        border-color: var(--red);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
    }

    /* Action Buttons */
    .action-buttons {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .action-btn {
        width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-size: 18px;
        transition: var(--transition);
        text-decoration: none;
    }

    .action-btn.view-btn {
        background: var(--blue-light);
        color: var(--blue-dark);
        border: 1px solid var(--blue-dark);
    }

    .action-btn.view-btn:hover {
        background: var(--blue-dark);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2);
    }

    .action-btn.order-info-btn {
        background: var(--purple-light);
        color: var(--purple-dark);
        border: 1px solid var(--purple-dark);
    }

    .action-btn.order-info-btn:hover {
        background: var(--purple-dark);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(91, 33, 182, 0.2);
    }

    /* Pagination Styles */
    .pagination-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
        padding: 20px;
        background: var(--white);
        border-radius: var(--radius-lg);
        border: 1px solid var(--gray-200);
        margin-top: 20px;
    }

    .pagination-info {
        font-size: 13px;
        color: var(--gray-600);
        background: var(--gray-50);
        padding: 6px 16px;
        border-radius: 30px;
    }

    .pagination-container {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .pagination-container .pagination {
        margin: 0;
        gap: 5px;
    }

    .pagination-container .page-item .page-link {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 38px;
        height: 38px;
        padding: 0 8px;
        background: var(--white);
        border: 1px solid var(--gray-200);
        border-radius: 8px;
        color: var(--gray-700);
        font-size: 14px;
        text-decoration: none;
        transition: var(--transition);
    }

    .pagination-container .page-item.active .page-link {
        background: var(--red);
        border-color: var(--red);
        color: white;
    }

    .pagination-container .page-item .page-link:hover {
        background: var(--gray-50);
        border-color: var(--red);
        color: var(--red);
        transform: translateY(-2px);
    }

    .pagination-container .page-item.disabled .page-link {
        background: var(--gray-100);
        color: var(--gray-400);
        pointer-events: none;
    }

    /* Modal Enhancements */
    .modal-content {
        border: none;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        overflow: hidden;
    }

    .modal-header {
        padding: 18px 24px;
        background: var(--gray-50);
        border-bottom: 1px solid var(--gray-200);
    }

    .modal-header .modal-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--gray-800);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .modal-header .modal-title i {
        color: var(--red);
        font-size: 22px;
    }

    .modal-body {
        padding: 24px;
    }

    .status-update-form .form-label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: var(--gray-700);
        margin-bottom: 8px;
    }

    .status-update-form .form-select {
        width: 100%;
        padding: 12px 16px;
        background: var(--white);
        border: 1px solid var(--gray-300);
        border-radius: var(--radius);
        font-size: 14px;
        color: var(--gray-800);
        transition: var(--transition);
        cursor: pointer;
    }

    .status-update-form .form-select:focus {
        outline: none;
        border-color: var(--red);
        box-shadow: 0 0 0 3px var(--red-light);
    }

    .modal-footer {
        padding: 16px 24px;
        background: var(--gray-50);
        border-top: 1px solid var(--gray-200);
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    .modal-footer .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 500;
        transition: var(--transition);
        border: none;
    }

    .modal-footer .btn-secondary {
        background: var(--white);
        border: 1px solid var(--gray-300);
        color: var(--gray-700);
    }

    .modal-footer .btn-secondary:hover {
        background: var(--gray-100);
        border-color: var(--gray-400);
    }

    .modal-footer .btn-primary {
        background: var(--red);
        color: white;
    }

    .modal-footer .btn-primary:hover {
        background: var(--red-dark);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .pagination-wrapper {
            flex-direction: column;
            align-items: flex-start;
        }

        .action-buttons {
            flex-direction: column;
        }

        .status-wrapper {
            flex-direction: column;
            align-items: flex-start;
        }

        .client-info-wrapper {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
        }
    }

    /* Empty State */
    .refunded-orders-table tbody tr td[colspan] {
        text-align: center;
        padding: 60px 20px;
        color: var(--gray-400);
    }

    .refunded-orders-table tbody tr td[colspan]::before {
        content: '↻';
        display: block;
        font-size: 48px;
        color: var(--gray-300);
        margin-bottom: 16px;
    }

    /* Tooltips */
    [data-bs-toggle="tooltip"] {
        position: relative;
        cursor: help;
    }

    /* Animation */
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .order-row {
        animation: slideIn 0.3s ease forwards;
    }
</style>

<!-- Initialize Tooltips -->
<script>
    (function ($) {
        "use strict";
        $(document).ready(function () {
            // Initialize Bootstrap tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });
        });
    })(jQuery);
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/refunded-list/search-refunded-order.blade.php ENDPATH**/ ?>