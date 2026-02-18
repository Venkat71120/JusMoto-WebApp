<div class="tableStyle_three">
    <div class="table_wrapper custom_Table">
        <table class="dataTablesExample">
            <thead>
                <th><?php echo e(__('ID')); ?></th>
                <th><?php echo e(__('Image')); ?></th>
                <th><?php echo e(__('Title')); ?></th>
                <th><?php echo e(__('Category')); ?></th>
                <th><?php echo e(__('Price')); ?></th>
                <th><?php echo e(__('Create Date')); ?></th>
                <th><?php echo e(__('Action')); ?></th>
            </thead>
            <tbody>
                <?php if($all_products && $all_products->count()>0): ?>
                    <?php $__currentLoopData = $all_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td><?php echo e($data->id); ?></td>
                            <td>
                                <div class="table_customer__thumb">
                                    <?php echo render_image_markup_by_attachment_id($data->image,'','thumb'); ?>

                                </div>
                            </td>
                            <td>
                                <div class="table_customer__contents">
                                    <h6 class="table_customer__title"><?php echo e($data->title); ?></h6>
                                </div>
                            </td>
                            <td><?php echo e(optional($data->category)->name ?? __('Uncategorized')); ?></td>
                            <td>
                                <?php if($data->discount_price > 0): ?>
                                    <span class="discount-price"><?php echo e(float_amount_with_currency_symbol($data->discount_price)); ?></span>
                                    <span class="original-price"><?php echo e(float_amount_with_currency_symbol($data->price)); ?></span>
                                <?php else: ?>
                                    <?php echo e(float_amount_with_currency_symbol($data->price)); ?>

                                <?php endif; ?>
                            </td>
                            <td>
                                <strong class="subCap"><?php echo e($data->created_at->diffForHumans()); ?></strong>
                            </td>
                            <!--Action -->
                            <td class="p-1 text-center">
                                <div class="multiple_action_buttons_new d-flex gap-2 flex-wrap">
                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-product-status-change')): ?>
                                        <?php if($data->is_featured === 1): ?>
                                            <?php if (isset($component)) { $__componentOriginal86b128640ac38601cbc41eade75f6714 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal86b128640ac38601cbc41eade75f6714 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.make-features-added','data' => ['url' => route('admin.product.make.featured',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.make-features-added'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.product.make.featured',$data->id))]); ?>
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
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.make-features','data' => ['url' => route('admin.product.make.featured',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.make-features'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.product.make.featured',$data->id))]); ?>
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
                                        <?php if (isset($component)) { $__componentOriginal95a57cf8b726360d66c2d339617390c3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal95a57cf8b726360d66c2d339617390c3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.edit-icon','data' => ['url' => route('admin.edit.product',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.edit-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.edit.product',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $attributes = $__attributesOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__attributesOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal95a57cf8b726360d66c2d339617390c3)): ?>
<?php $component = $__componentOriginal95a57cf8b726360d66c2d339617390c3; ?>
<?php unset($__componentOriginal95a57cf8b726360d66c2d339617390c3); ?>
<?php endif; ?>
                                    <?php endif; ?>
                                    <?php if (isset($component)) { $__componentOriginal768f8f40d03d4d53d956d4ea52baca68 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal768f8f40d03d4d53d956d4ea52baca68 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.view-icon','data' => ['url' => route('admin.product.details',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.view-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.product.details',$data->id))]); ?>
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
                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-product-delete')): ?>
                                        <?php if (isset($component)) { $__componentOriginal7973b0ce98592c79f9209abd6e46a09b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.delete-popup','data' => ['url' => route('admin.delete.product',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.delete-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.delete.product',$data->id))]); ?>
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
                <?php else: ?>
                    <tr>
                        <td colspan="7" class="text-center"><?php echo e(__('No data found')); ?></td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>

<style>
/* ===== SEARCH PRODUCTS TABLE - STYLED LIKE SEARCH SERVICE ===== */

/* Table Container */
.tableStyle_three {
    margin-top: 20px;
}

.table_wrapper {
    overflow-x: auto;
}

/* Table Styling */
.dataTablesExample {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border: 1px solid #eef0f3;
    border-radius: 12px;
    overflow: hidden;
}

/* Table Header */
.dataTablesExample thead th {
    background: #f8fafc;
    color: #374151;
    font-weight: 600;
    font-size: 13px;
    padding: 16px 20px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

/* Table Cells */
.dataTablesExample tbody td {
    padding: 16px 20px;
    color: #4b5563;
    border-bottom: 1px solid #f1f3f6;
    vertical-align: middle;
    font-size: 14px;
}

/* Table Rows */
.dataTablesExample tbody tr {
    transition: background 0.2s ease;
}

.dataTablesExample tbody tr:hover {
    background: #f9fafb;
}

/* Last row no border */
.dataTablesExample tbody tr:last-child td {
    border-bottom: none;
}

/* Image Thumbnail */
.table_customer__thumb {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
}

.table_customer__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Product Title */
.table_customer__contents {
    display: flex;
    flex-direction: column;
}

.table_customer__title {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    margin: 0;
    line-height: 1.4;
}

/* Category */
.dataTablesExample tbody td:nth-child(4) {
    color: #374151;
}

/* Price */
.dataTablesExample tbody td:nth-child(5) {
    font-weight: 600;
    color: #111827;
}

.discount-price {
    color: #e31b23;
    font-weight: 600;
}

.original-price {
    font-size: 12px;
    color: #9ca3af;
    text-decoration: line-through;
    margin-left: 4px;
}

/* Date */
.subCap {
    font-size: 13px;
    font-weight: 400;
    color: #6b7280;
}

/* Action Buttons Container */
.multiple_action_buttons_new {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
}

/* Action Icons Styling */
.multiple_action_buttons_new a,
.multiple_action_buttons_new button,
.multiple_action_buttons_new .edit-icon,
.multiple_action_buttons_new .view-icon,
.multiple_action_buttons_new .delete-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: #f3f4f6;
    color: #4b5563;
    font-size: 16px;
    transition: all 0.2s ease;
    text-decoration: none;
    border: none;
    cursor: pointer;
}

/* Icon Hover Effects */
.multiple_action_buttons_new a:hover,
.multiple_action_buttons_new button:hover {
    background: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(227, 27, 35, 0.15);
}

/* Featured Button Specific */
.multiple_action_buttons_new .make-features,
.multiple_action_buttons_new .make-features-added {
    background: #f3f4f6;
    color: #f59e0b;
}

.multiple_action_buttons_new .make-features:hover,
.multiple_action_buttons_new .make-features-added:hover {
    background: #f59e0b;
    color: white;
}

/* Edit Icon */
.multiple_action_buttons_new .edit-icon {
    color: #3b82f6;
}

.multiple_action_buttons_new .edit-icon:hover {
    background: #3b82f6;
    color: white;
}

/* View Icon */
.multiple_action_buttons_new .view-icon {
    color: #10b981;
}

.multiple_action_buttons_new .view-icon:hover {
    background: #10b981;
    color: white;
}

/* Delete Icon */
.multiple_action_buttons_new .delete-icon {
    color: #e31b23;
}

.multiple_action_buttons_new .delete-icon:hover {
    background: #e31b23;
    color: white;
}

/* Empty State */
.text-center {
    text-align: center;
    padding: 40px !important;
    color: #9ca3af;
    font-size: 15px;
}

/* Responsive */
@media (max-width: 992px) {
    .dataTablesExample {
        min-width: 800px;
    }
    
    .dataTablesExample thead th {
        padding: 14px 16px;
        font-size: 12px;
    }
    
    .dataTablesExample tbody td {
        padding: 14px 16px;
    }
}

@media (max-width: 768px) {
    .dataTablesExample {
        min-width: 700px;
    }
    
    .multiple_action_buttons_new {
        gap: 4px;
    }
    
    .multiple_action_buttons_new a,
    .multiple_action_buttons_new button {
        width: 32px;
        height: 32px;
        font-size: 14px;
    }
}

/* Pagination Styling (if needed) */
.pagination {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    gap: 4px;
}

.pagination a,
.pagination span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    height: 38px;
    padding: 0 8px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    color: #4b5563;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.2s ease;
}

.pagination .active span {
    background: #e31b23;
    border-color: #e31b23;
    color: white;
}

.pagination a:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
    color: #e31b23;
}

/* Dark Mode Support */
body.dark-mode .dataTablesExample {
    background: #1f2937;
    border-color: #374151;
}

body.dark-mode .dataTablesExample thead th {
    background: #374151;
    color: #e5e7eb;
    border-bottom-color: #4b5563;
}

body.dark-mode .dataTablesExample tbody td {
    color: #e5e7eb;
    border-bottom-color: #374151;
}

body.dark-mode .dataTablesExample tbody tr:hover {
    background: #2d2d2d;
}

body.dark-mode .table_customer__thumb {
    background: #374151;
    border-color: #4b5563;
}

body.dark-mode .table_customer__title {
    color: #f3f4f6;
}

body.dark-mode .multiple_action_buttons_new a,
body.dark-mode .multiple_action_buttons_new button {
    background: #374151;
    color: #9ca3af;
}

body.dark-mode .pagination a,
body.dark-mode .pagination span {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/products/admin/search-product.blade.php ENDPATH**/ ?>