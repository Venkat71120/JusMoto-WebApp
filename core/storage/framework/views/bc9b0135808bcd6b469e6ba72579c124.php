<table class="modern-table">
    <thead>
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outlet-bulk-delete')): ?>
        <th class="checkbox-col">
            <div class="checkbox-wrapper">
                <input type="checkbox" class="all-checkbox" id="selectAll">
            </div>
        </th>
    <?php endif; ?>
    <th class="id-col">#</th>
    <th class="name-col"><?php echo e(__('Name')); ?></th>
    <th class="address-col"><?php echo e(__("Address")); ?></th>
    <th class="state-col"><?php echo e(__("State")); ?></th>
    <th class="status-col"><?php echo e(__("Status")); ?></th>
    <th class="actions-col"><?php echo e(__('Action')); ?></th>
    </thead>
    <tbody>
    <?php $__currentLoopData = $all_outlets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $outlet): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr class="table-row">
            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outlet-bulk-delete')): ?>
                <td class="checkbox-col">
                    <div class="checkbox-wrapper">
                        <input type="checkbox" class="bulk-checkbox" id="checkbox-<?php echo e($outlet->id); ?>" value="<?php echo e($outlet->id); ?>">
                    </div>
                </td>
            <?php endif; ?>
            <td class="id-col"><?php echo e($outlet->id); ?></td>
            <td class="name-col">
                <div class="outlet-info">
                    <span class="outlet-name"><?php echo e($outlet->name); ?></span>
                </div>
            </td>
            <td class="address-col">
                <span class="address-text"><?php echo e($outlet->address); ?></span>
            </td>
            <td class="state-col">
                <span class="state-tag"><?php echo e($outlet->state->state ?? ''); ?></span>
            </td>
            <!--status -->
            <td class="status-col">
                <div class="status-wrapper">
                    <?php if($outlet->status == 1): ?>
                        <span class="status-badge active"><?php echo e(__('Approved')); ?></span>
                    <?php else: ?>
                        <span class="status-badge pending"><?php echo e(__('Pending')); ?></span>
                    <?php endif; ?>
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('outlet-status-change')): ?>
                        <div class="status-action">
                            <?php if (isset($component)) { $__componentOriginal086f7010becd4d657cdb856682d3d79f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal086f7010becd4d657cdb856682d3d79f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.status-change','data' => ['url' => route('admin.outlet.status.change',$outlet->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.status-change'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.outlet.status.change',$outlet->id))]); ?>
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
                        </div>
                    <?php endif; ?>
                </div>
            </td>
            <!--Action -->
            <td class="actions-col">
                <div class="action-group">
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outlet-edit')): ?>
                        <a href="<?php echo e(route('admin.outlet.edit', $outlet->id)); ?>" class="action-item edit">
                            <i class="las la-pen"></i>
                        </a>
                    <?php endif; ?>
                    <a href="<?php echo e(route('admin.outlet.details', $outlet->id)); ?>" class="action-item view">
                        <i class="las la-eye"></i>
                    </a>
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-brand-delete')): ?>
                        <?php if (isset($component)) { $__componentOriginal7973b0ce98592c79f9209abd6e46a09b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.delete-popup','data' => ['url' => route('admin.outlet.delete', $outlet->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.delete-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.outlet.delete', $outlet->id))]); ?>
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

<div class="pagination-wrapper">
    <?php echo e($all_outlets->links()); ?>

</div>

<style>
/* ===== CLEAN OUTLETS TABLE ===== */

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
    --green-light: #dcfce7;
    --green-dark: #166534;
    --yellow-light: #fef9c3;
    --yellow-dark: #854d0e;
    --radius: 8px;
    --transition: all 0.2s ease;
}

/* Table Container */
.modern-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    overflow: hidden;
}

/* Table Header */
.modern-table thead th {
    text-align: left;
    padding: 14px 16px;
    background: var(--gray-50);
    color: var(--gray-600);
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid var(--gray-200);
    white-space: nowrap;
}

/* Table Cells */
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

/* Column Widths */
.checkbox-col { width: 40px; text-align: center; }
.id-col { width: 60px; color: var(--gray-500); font-weight: 500; }
.name-col { min-width: 180px; }
.address-col { min-width: 250px; }
.state-col { width: 120px; }
.status-col { width: 120px; }
.actions-col { width: 100px; text-align: right; }

/* Checkbox */
.checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.all-checkbox,
.bulk-checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid var(--gray-400);
    border-radius: 4px;
    cursor: pointer;
    accent-color: var(--red);
}

/* Outlet Info */
.outlet-info {
    display: flex;
    flex-direction: column;
}

.outlet-name {
    font-weight: 600;
    color: var(--gray-800);
    font-size: 15px;
}

/* Address */
.address-text {
    font-size: 14px;
    color: var(--gray-700);
    line-height: 1.5;
}

/* State Tag */
.state-tag {
    display: inline-block;
    padding: 4px 10px;
    background: var(--gray-100);
    border-radius: 20px;
    font-size: 12px;
    color: var(--gray-700);
    white-space: nowrap;
}

/* Status Wrapper */
.status-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* Status Badges */
.status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
}

.status-badge.active {
    background: var(--green-light);
    color: var(--green-dark);
}

.status-badge.pending {
    background: var(--yellow-light);
    color: var(--yellow-dark);
}

/* Status Action */
.status-action {
    margin-top: 4px;
}

/* Action Group */
.action-group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
}

/* Action Items */
.action-item {
    width: 32px;
    height: 32px;
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

.action-item:hover {
    background: var(--red);
    color: white;
    transform: translateY(-2px);
}

.action-item.edit:hover {
    background: #2563eb;
}

.action-item.view:hover {
    background: #10b981;
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
@media (max-width: 992px) {
    .modern-table {
        min-width: 900px;
    }
}

/* Preserve original classes */
.dataTablesExample {
    width: 100%;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/serviceLocation/search-outlet.blade.php ENDPATH**/ ?>