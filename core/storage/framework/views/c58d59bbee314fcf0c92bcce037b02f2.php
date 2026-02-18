<div class="table-responsive-wrapper">
    <table class="modern-table" id="servicesTable">
        <thead>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-bulk-delete')): ?>
            <th class="checkbox-col">
                <div class="checkbox-wrapper">
                    <input type="checkbox" class="select-all-checkbox" id="selectAll">
                    <label for="selectAll" class="checkbox-label"></label>
                </div>
            </th>
        <?php endif; ?>
        <th class="number-col">#</th>
        <th class="image-col"><?php echo e(__('Image')); ?></th>
        <th class="title-col"><?php echo e(__('Title')); ?></th>
        <th class="category-col"><?php echo e(__('Category')); ?></th>
        <th class="price-col"><?php echo e(__('Price')); ?></th>
        <th class="date-col"><?php echo e(__('Created')); ?></th>
        
        <th class="actions-col"><?php echo e(__('Actions')); ?></th>
        </thead>
        <tbody>
        <?php $__currentLoopData = $all_services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr class="table-row">
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-bulk-delete')): ?>
                    <td class="checkbox-col">
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="bulk-checkbox" id="checkbox-<?php echo e($data->id); ?>" value="<?php echo e($data->id); ?>">
                            <label for="checkbox-<?php echo e($data->id); ?>" class="checkbox-label"></label>
                        </div>
                    </td>
                <?php endif; ?>
                <td class="number-col"><?php echo e($loop->iteration); ?></td>
                <td class="image-col">
                    <div class="service-thumb">
                        <?php echo render_image_markup_by_attachment_id($data->image, 'thumb', 'service-img'); ?>

                    </div>
                </td>
                <td class="title-col">
                    <div class="service-info">
                        <span class="service-name"><?php echo e($data->title); ?></span>
                        <span class="service-meta">
                            <span class="meta-item">
                                <i class="las la-eye"></i> <?php echo e($data->views ?? 0); ?>

                            </span>
                            <span class="meta-item">
                                <i class="las la-heart"></i> <?php echo e($data->likes ?? 0); ?>

                            </span>
                        </span>
                    </div>
                </td>
                <td class="category-col">
                    <span class="category-tag"><?php echo e(optional($data->category)->name ?? __('Uncategorized')); ?></span>
                </td>
                <td class="price-col">
                    <?php if($data->discount_price > 0): ?>
                        <div class="price-wrapper">
                            <span class="current-price"><?php echo e(float_amount_with_currency_symbol($data->discount_price)); ?></span>
                            <span class="original-price"><?php echo e(float_amount_with_currency_symbol($data->price)); ?></span>
                        </div>
                    <?php else: ?>
                        <span class="current-price"><?php echo e(float_amount_with_currency_symbol($data->price)); ?></span>
                    <?php endif; ?>
                </td>
                <td class="date-col">
                    <span class="date-text">
                        <i class="las la-calendar"></i>
                        <?php echo e($data->created_at->format('M d, Y')); ?>

                    </span>
                    <span class="date-relative"><?php echo e($data->created_at->diffForHumans()); ?></span>
                </td>
                
                <!-- Publishing Status -->
                

                <!-- Status -->
                

                <!-- Actions -->
                <td class="actions-col">
                    <div class="action-group">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-edit')): ?>
                            <?php if($data->is_featured === 1): ?>
                                <?php if (isset($component)) { $__componentOriginal86b128640ac38601cbc41eade75f6714 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal86b128640ac38601cbc41eade75f6714 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.make-features-added','data' => ['url' => route('admin.service.make.featured',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.make-features-added'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.service.make.featured',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal86b128640ac38601cbc41eade75f6714)): ?>
<?php $attributes = $__attributesOriginal86b128640ac38601cbc41eade75f6714; ?>
<?php unset($__attributesOriginal86b128640ac38601cbc41eade75f6714); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal86b128640ac38601cbc41eade75f6714)): ?>
<?php $component = $__componentOriginal86b128640ac38601cbc41eade75f6714; ?>
<?php unset($__componentOriginal86b128640ac38601cbc41eade75f6714); ?>
<?php endif; ?>
                            <?php else: ?>
                                <?php if (isset($component)) { $__componentOriginale6729b33dd8f96b134ec9f27218e68e5 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginale6729b33dd8f96b134ec9f27218e68e5 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.make-features','data' => ['url' => route('admin.service.make.featured',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.make-features'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.service.make.featured',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginale6729b33dd8f96b134ec9f27218e68e5)): ?>
<?php $attributes = $__attributesOriginale6729b33dd8f96b134ec9f27218e68e5; ?>
<?php unset($__attributesOriginale6729b33dd8f96b134ec9f27218e68e5); ?>
<?php endif; ?>
<?php if (isset($__componentOriginale6729b33dd8f96b134ec9f27218e68e5)): ?>
<?php $component = $__componentOriginale6729b33dd8f96b134ec9f27218e68e5; ?>
<?php unset($__componentOriginale6729b33dd8f96b134ec9f27218e68e5); ?>
<?php endif; ?>
                            <?php endif; ?>
                        <?php endif; ?>
                        
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-edit')): ?>
                            <a href="<?php echo e(route('admin.edit.service',$data->id)); ?>" class="action-item edit" title="<?php echo e(__('Edit')); ?>">
                                <i class="las la-pen"></i>
                            </a>
                        <?php endif; ?>
                        
                        <a href="<?php echo e(route('admin.service.details',$data->id)); ?>" class="action-item view" title="<?php echo e(__('View')); ?>">
                            <i class="las la-eye"></i>
                        </a>
                        
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-delete')): ?>
                            <button type="button" class="action-item delete" onclick="deleteService(<?php echo e($data->id); ?>)" title="<?php echo e(__('Delete')); ?>">
                                <i class="las la-trash"></i>
                            </button>
                        <?php endif; ?>
                    </div>
                </td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
</div>

<!-- Pagination -->
<?php if($all_services->hasPages()): ?>
    <div class="pagination-wrapper">
        <?php echo e($all_services->links('pagination::modern')); ?>

    </div>
<?php endif; ?>

<style>
/* ===== SCROLLABLE TABLE CONTAINER ===== */
.table-responsive-wrapper {
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
    border-radius: 16px;
    border: 1px solid #F3F4F6;
    background: white;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #e31b23 #F3F4F6;
}

/* Custom Scrollbar */
.table-responsive-wrapper::-webkit-scrollbar {
    height: 8px;
    width: 8px;
}

.table-responsive-wrapper::-webkit-scrollbar-track {
    background: #F3F4F6;
    border-radius: 8px;
}

.table-responsive-wrapper::-webkit-scrollbar-thumb {
    background: #e31b23;
    border-radius: 8px;
    opacity: 0.7;
}

.table-responsive-wrapper::-webkit-scrollbar-thumb:hover {
    background: #b11218;
}

/* ===== MODERN TABLE STYLES ===== */
.modern-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    min-width: 1200px; /* Ensures horizontal scroll instead of wrapping */
    white-space: nowrap;
}

/* Table Header - Sticky */
.modern-table thead th {
    position: sticky;
    top: 0;
    background: #F9FAFB;
    z-index: 10;
    text-align: left;
    padding: 16px 12px;
    color: #374151;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid #E5E7EB;
    white-space: nowrap;
}

/* Table Rows */
.modern-table tbody tr {
    transition: all 0.2s ease;
    border-bottom: 1px solid #F3F4F6;
}

.modern-table tbody tr:hover {
    background: #F9FAFB;
}

.modern-table tbody td {
    padding: 16px 12px;
    color: #374151;
    vertical-align: middle;
    white-space: nowrap;
}

/* ===== NUMBER COLUMN ===== */
.number-col {
    width: 50px;
    font-weight: 500;
    color: #6B7280;
    font-size: 13px;
}

/* ===== CHECKBOX STYLES ===== */
.checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox-wrapper input[type="checkbox"] {
    display: none;
}

.checkbox-label {
    width: 18px;
    height: 18px;
    border: 2px solid #D1D5DB;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: all 0.15s ease;
}

.checkbox-wrapper input[type="checkbox"]:checked + .checkbox-label {
    background: #e31b23;
    border-color: #e31b23;
}

.checkbox-wrapper input[type="checkbox"]:checked + .checkbox-label::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.checkbox-label:hover {
    border-color: #e31b23;
}

/* ===== IMAGE STYLES ===== */
.service-thumb {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    overflow: hidden;
    background: #F3F4F6;
}

.service-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ===== SERVICE INFO ===== */
.service-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.service-name {
    font-weight: 500;
    color: #111827;
    text-decoration: none;
    font-size: 14px;
    white-space: normal;
    word-break: break-word;
    max-width: 250px;
}

.service-name:hover {
    color: #e31b23;
}

.service-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 11px;
    color: #9CA3AF;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
}

.meta-item i {
    font-size: 11px;
    color: #9CA3AF;
}

/* ===== CATEGORY TAG ===== */
.category-tag {
    display: inline-block;
    padding: 4px 10px;
    background: #F3F4F6;
    border-radius: 20px;
    font-size: 12px;
    color: #374151;
    white-space: nowrap;
}

/* ===== PRICE STYLES ===== */
.price-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.current-price {
    font-weight: 600;
    color: #111827;
    font-size: 14px;
}

.original-price {
    color: #9CA3AF;
    font-size: 12px;
    text-decoration: line-through;
}

/* ===== DATE STYLES ===== */
.date-text {
    display: block;
    font-size: 13px;
    color: #374151;
    margin-bottom: 2px;
}

.date-text i {
    color: #9CA3AF;
    margin-right: 4px;
    font-size: 12px;
}

.date-relative {
    display: block;
    font-size: 11px;
    color: #9CA3AF;
}

/* ===== STATUS WRAPPER ===== */
.status-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* ===== STATUS BADGES ===== */
.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    width: fit-content;
}

.status-badge i {
    font-size: 12px;
}

.status-badge.published,
.status-badge.approved {
    background: #ECFDF3;
    color: #067647;
}

.status-badge.unpublished,
.status-badge.pending {
    background: #FFFAEB;
    color: #B54708;
}

/* ===== ACTION GROUP ===== */
.action-group {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: flex-end;
}

.action-item {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: #9CA3AF;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    font-size: 16px;
}

.action-item:hover {
    background: #F3F4F6;
    color: #374151;
}

.action-item.edit:hover {
    background: #EFF6FF;
    color: #2563EB;
}

.action-item.delete:hover {
    background: #FEF3F2;
    color: #e31b23;
}

.action-item.view:hover {
    background: #ECFDF3;
    color: #067647;
}

/* ===== PAGINATION ===== */
.pagination-wrapper {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
}

/* ===== DARK MODE ===== */
body.dark-mode .table-responsive-wrapper {
    background: #1F2937;
    border-color: #374151;
}

body.dark-mode .table-responsive-wrapper::-webkit-scrollbar-track {
    background: #374151;
}

body.dark-mode .modern-table thead th {
    background: #1F2937;
    color: #E5E7EB;
    border-bottom-color: #374151;
}

body.dark-mode .modern-table tbody tr:hover {
    background: #1F2937;
}

body.dark-mode .modern-table tbody td {
    color: #E5E7EB;
}

body.dark-mode .number-col {
    color: #9CA3AF;
}

body.dark-mode .service-name {
    color: #F3F4F6;
}

body.dark-mode .category-tag {
    background: #374151;
    color: #E5E7EB;
}

body.dark-mode .current-price {
    color: #F3F4F6;
}

body.dark-mode .date-text {
    color: #E5E7EB;
}

body.dark-mode .action-item {
    color: #6B7280;
}

body.dark-mode .action-item:hover {
    background: #374151;
    color: #E5E7EB;
}
</style>

<script>
function deleteService(id) {
    Swal.fire({
        title: '<?php echo e(__("Delete service?")); ?>',
        text: '<?php echo e(__("This action cannot be undone.")); ?>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e31b23',
        cancelButtonColor: '#6b7280',
        confirmButtonText: '<?php echo e(__("Delete")); ?>',
        cancelButtonText: '<?php echo e(__("Cancel")); ?>'
    }).then((result) => {
        if (result.isConfirmed) {
            // Trigger the delete form
            $(`form[action*="delete/${id}"]`).submit();
        }
    });
}

// Select all checkbox
$(document).on('change', '.select-all-checkbox', function() {
    $('.bulk-checkbox').prop('checked', $(this).is(':checked'));
});

// Individual checkbox
$(document).on('change', '.bulk-checkbox', function() {
    let allChecked = $('.bulk-checkbox:checked').length === $('.bulk-checkbox').length;
    $('.select-all-checkbox').prop('checked', allChecked);
});
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/search-service.blade.php ENDPATH**/ ?>