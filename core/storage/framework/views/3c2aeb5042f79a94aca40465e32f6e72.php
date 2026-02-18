<div class="table-responsive">
    <table class="modern-table">
        <thead>
            <th><?php echo e(__('ID')); ?></th>
            <th><?php echo e(__('Client Info')); ?></th>
            <th><?php echo e(__('Amount Details')); ?></th>
            
            <th><?php echo e(__('Payment Gateway')); ?></th>
            <th><?php echo e(__('Order Status')); ?></th>
            <th><?php echo e(__('Created Date')); ?></th>
            <th><?php echo e(__('Action')); ?></th>
        </thead>
     <tbody>
    <?php $__currentLoopData = $all_orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <!-- ✅ FIX 1: ID as Sequential Number (not database ID) -->
            <td class="id-col"><?php echo e($all_orders->firstItem() + $index); ?></td>
            
            <!-- Client Info -->
            <td>
                <div class="client-info">
                    <?php
                        $hasService = false;
                        $hasProduct = false;

                        if($data->orderItems && $data->orderItems->count()){
                            foreach($data->orderItems as $item){
                                if(optional($item->service)->type == 0){
                                    $hasService = true;
                                }
                                if(optional($item->service)->type == 1){
                                    $hasProduct = true;
                                }
                            }
                        }
                    ?>

                    
                    <?php if($hasService && $hasProduct): ?>
                        <span class="type-badge mixed">Service & Product</span>
                    <?php elseif($hasService): ?>
                        <span class="type-badge service">Service</span>
                    <?php elseif($hasProduct): ?>
                        <span class="type-badge product">Product</span>
                    <?php endif; ?>

                    
                    <div class="user-details">
                        <span class="user-name"><?php echo e($data->user?->first_name ?? 'N/A'); ?></span>
                        <span class="user-email"><?php echo e($data->user?->email ?? 'N/A'); ?></span>
                    </div>
                </div>
            </td>

            <!-- Amount Details -->
            <td>
                <div class="amount-details">
                    <div class="amount-row">
                        <span class="amount-label">Sub Total:</span>
                        <span class="amount-value"><?php echo e(float_amount_with_currency_symbol($data->sub_total)); ?></span>
                    </div>
                    <?php if($data->coupon_amount > 0): ?>
                        <div class="amount-row">
                            <span class="amount-label">Coupon:</span>
                            <span class="amount-value discount">-<?php echo e(float_amount_with_currency_symbol($data->coupon_amount)); ?></span>
                        </div>
                    <?php endif; ?>
                    <div class="amount-row">
                        <span class="amount-label">Tax:</span>
                        <span class="amount-value">+<?php echo e(float_amount_with_currency_symbol($data->tax)); ?></span>
                    </div>
                    <div class="amount-row total">
                        <span class="amount-label">Total:</span>
                        <span class="amount-value"><?php echo e(float_amount_with_currency_symbol($data->total)); ?></span>
                    </div>
                </div>
            </td>

            <!-- ✅ FIX 2 & 3: Payment Gateway with Proper Names -->
            <td>
                <div class="payment-info">
                    <?php
                        // Convert gateway slug to proper name
                        $gatewayName = str_replace('_', ' ', $data->payment_gateway ?? 'N/A');
                        $gatewayName = ucwords($gatewayName);
                        
                        // Payment status text (not 0/1)
                        $paymentStatusText = $data->payment_status == 1 ? 'Paid' : 'Pending';
                        $paymentStatusClass = $data->payment_status == 1 ? 'paid' : 'pending';
                    ?>
                    
                    <span class="gateway-name"><?php echo e($gatewayName); ?></span>
                    <div class="payment-status-wrapper">
                        <span class="status-badge payment-<?php echo e($paymentStatusClass); ?>">
                            <?php echo e($paymentStatusText); ?>

                        </span>
                        <span class="status-change">
                            <?php if (isset($component)) { $__componentOriginal086f7010becd4d657cdb856682d3d79f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal086f7010becd4d657cdb856682d3d79f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.status-change','data' => ['url' => route('admin.order.change.status', $data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.status-change'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.order.change.status', $data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal086f7010becd4d657cdb856682d3d79f)): ?>
<?php $attributes = $__attributesOriginal086f7010becd4d657cdb856682d3d79f; ?>
<?php unset($__attributesOriginal086f7010becd4d657cdb856682d3d79f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal086f7010becd4d657cdb856682d3d79f)): ?>
<?php $component = $__componentOriginal086f7010becd4d657cdb856682d3d79f; ?>
<?php unset($__componentOriginal086f7010becd4d657cdb856682d3d79f); ?>
<?php endif; ?>
                        </span>
                    </div>
                    <?php if($data->payment_gateway == 'manual_payment' && $data->payment_attachment): ?>
                        <a href="#" class="file-link open-modal"
                           data-file-url="<?php echo e(asset('assets/uploads/manual-payment/' . $data->payment_attachment)); ?>"
                           data-file-name="<?php echo e($data->payment_attachment); ?>">
                            <i class="las la-file-invoice"></i>
                            View File
                        </a>
                    <?php endif; ?>
                </div>
            </td>

            <!-- Order Status -->
            <td>
                <div class="order-status-wrapper">
                    <span class="status-badge order-<?php echo e($data->status); ?>">
                        <?php switch($data->status):
                            case (0): ?> Pending <?php break; ?>
                            <?php case (1): ?> Processing <?php break; ?>
                            <?php case (2): ?> Completed <?php break; ?>
                            <?php case (3): ?> In Progress <?php break; ?>
                            <?php case (4): ?> Cancelled <?php break; ?>
                            <?php default: ?> Unknown
                        <?php endswitch; ?>
                    </span>
                    <button type="button" class="status-edit-btn order_status_change_modal" 
                            data-order_id="<?php echo e($data->id); ?>"
                            data-bs-toggle="modal" 
                            data-bs-target="#OrderStatusChangeModal"
                            title="Edit Status">
                        <i class="las la-pen"></i>
                    </button>
                </div>
            </td>

            <!-- Created Date -->
            <td>
                <span class="created-date"><?php echo e($data->created_at->format('M d, Y')); ?></span>
                <span class="created-time"><?php echo e($data->created_at->format('h:i A')); ?></span>
            </td>

            <!-- Actions -->
            <td>
                <div class="action-group">
                    <?php if (isset($component)) { $__componentOriginal768f8f40d03d4d53d956d4ea52baca68 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal768f8f40d03d4d53d956d4ea52baca68 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.view-icon','data' => ['url' => route('admin.main.order.details', $data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.view-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.main.order.details', $data->id))]); ?>
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
                    <?php if (isset($component)) { $__componentOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.file-icon','data' => ['url' => route('admin.order.invoice.generate', $data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.file-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.order.invoice.generate', $data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde)): ?>
<?php $attributes = $__attributesOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde; ?>
<?php unset($__attributesOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde)): ?>
<?php $component = $__componentOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde; ?>
<?php unset($__componentOriginalcfe74fef1e01e8d4a7dcb56a2fb67fde); ?>
<?php endif; ?>

                    <?php if(Auth::guard('admin')->user()->is_franchise != 1): ?>
                        <button type="button" class="action-btn allocate-btn openAllocateModal"
                            data-order-id="<?php echo e($data->id); ?>"
                            data-current-admin-name="<?php echo e(optional($data->franchiseAdmin)->name ?? ''); ?>"
                            title="Allocate Admin">
                            <i class="las la-user-cog"></i>
                        </button>
                    <?php endif; ?>
                </div>
            </td>
        </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</tbody>
    </table>
</div>

<div class="pagination-wrapper">
    <?php echo e($all_orders->links()); ?>

</div>

<style>
/* ===== CLEAN ORDERS TABLE STYLES ===== */

:root {
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --red: #e31b23;
    --red-light: #fee2e2;
    --red-dark: #b91c1c;
    --green: #10b981;
    --green-light: #d1fae5;
    --green-dark: #047857;
    --yellow: #f59e0b;
    --yellow-light: #fef3c7;
    --yellow-dark: #b45309;
    --blue: #3b82f6;
    --blue-light: #dbeafe;
    --blue-dark: #1e40af;
    --purple: #8b5cf6;
    --purple-light: #ede9fe;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --transition: all 0.2s ease;
}

/* Table Container */
.table-responsive {
    overflow-x: auto;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    background: var(--white);
    margin: 20px 0;
}

/* Modern Table */
.modern-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    min-width: 1200px;
}

.modern-table thead th {
    text-align: left;
    padding: 16px;
    background: var(--gray-50);
    color: var(--gray-600);
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid var(--gray-200);
    white-space: nowrap;
}

.modern-table tbody td {
    padding: 16px;
    color: var(--gray-700);
    border-bottom: 1px solid var(--gray-100);
    vertical-align: middle;
}

.modern-table tbody tr {
    background: var(--white);
    transition: var(--transition);
}

.modern-table tbody tr:hover {
    background: var(--gray-50);
}

/* ID Column */
.id-col {
    font-weight: 600;
    color: var(--red);
}

/* Client Info */
.client-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.type-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 40px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    width: fit-content;
}

.type-badge.service {
    background: var(--green-light);
    color: var(--green-dark);
}

.type-badge.product {
    background: var(--blue-light);
    color: var(--blue-dark);
}

.type-badge.mixed {
    background: var(--purple-light);
    color: #5b21b6;
}

.user-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.user-name {
    font-weight: 600;
    color: var(--gray-800);
}

.user-email {
    font-size: 12px;
    color: var(--gray-500);
}

/* Amount Details */
.amount-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.amount-row {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

.amount-label {
    color: var(--gray-500);
}

.amount-value {
    font-weight: 500;
    color: var(--gray-800);
}

.amount-value.discount {
    color: var(--red);
}

.amount-row.total {
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px dashed var(--gray-200);
    font-weight: 600;
}

.amount-row.total .amount-value {
    color: var(--red);
}

/* Staff Info */
.staff-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.staff-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    background: var(--gray-100);
    border: 2px solid var(--gray-200);
    flex-shrink: 0;
}

.staff-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red-light);
    color: var(--red);
    font-weight: 600;
    font-size: 18px;
}

.staff-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.staff-name {
    font-weight: 600;
    color: var(--gray-800);
}

.staff-schedule {
    font-size: 11px;
    color: var(--gray-500);
}

/* Payment Info */
.payment-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.gateway-name {
    font-weight: 600;
    color: var(--gray-800);
    text-transform: capitalize;
}

.payment-status-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.file-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--blue);
    text-decoration: none;
    font-size: 12px;
    margin-top: 4px;
}

.file-link:hover {
    color: var(--red);
}

/* Status Badges */
.status-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 40px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
}

.status-badge.payment-paid {
    background: var(--green-light);
    color: var(--green-dark);
}

.status-badge.payment-pending {
    background: var(--yellow-light);
    color: var(--yellow-dark);
}

.status-badge.payment-failed {
    background: var(--red-light);
    color: var(--red-dark);
}

.status-badge.order-0 { /* Pending */
    background: var(--yellow-light);
    color: var(--yellow-dark);
}

.status-badge.order-1 { /* Processing */
    background: var(--blue-light);
    color: var(--blue-dark);
}

.status-badge.order-2 { /* Completed */
    background: var(--green-light);
    color: var(--green-dark);
}

.status-badge.order-3 { /* In Progress */
    background: var(--purple-light);
    color: #5b21b6;
}

.status-badge.order-4 { /* Cancelled */
    background: var(--red-light);
    color: var(--red-dark);
}

/* Order Status */
.order-status-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.status-edit-btn {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-100);
    border: 1px solid var(--gray-200);
    border-radius: 6px;
    color: var(--gray-600);
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.status-edit-btn:hover {
    background: var(--yellow);
    color: white;
}

/* Created Date */
.created-date {
    display: block;
    font-size: 13px;
    color: var(--gray-800);
    font-weight: 500;
}

.created-time {
    display: block;
    font-size: 11px;
    color: var(--gray-500);
    margin-top: 2px;
}

/* Action Group */
.action-group {
    display: flex;
    align-items: center;
    gap: 4px;
}

.action-btn {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--gray-100);
    color: var(--gray-600);
    text-decoration: none;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: var(--transition);
}

.action-btn:hover {
    background: var(--red);
    color: white;
    transform: translateY(-2px);
}

.action-btn.allocate-btn:hover {
    background: var(--purple);
}

/* Pagination */
.pagination-wrapper {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 4px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.pagination li a,
.pagination li span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 6px;
    color: var(--gray-700);
    font-size: 14px;
    text-decoration: none;
    transition: var(--transition);
}

.pagination li.active span {
    background: var(--red);
    border-color: var(--red);
    color: white;
}

.pagination li a:hover {
    background: var(--gray-50);
    border-color: var(--gray-400);
    color: var(--red);
}

/* Responsive */
@media (max-width: 1200px) {
    .modern-table {
        min-width: 1200px;
    }
}

/* Preserve original classes */
.table_customer,
.table_customer__flex,
.table_customer__contents,
.table_customer__thumb {
    /* Preserved for compatibility */
}

.d-flex {
    display: flex;
}

.gap-2 {
    gap: 8px;
}

.mt-5 {
    margin-top: 28px;
}

.justify-content-end {
    justify-content: flex-end;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/admin-orders/search-order.blade.php ENDPATH**/ ?>