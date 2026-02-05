<div class="table-responsive">
    <table class="table">
        <thead>
        <th><?php echo e(__('ID')); ?></th>
        <th><?php echo e(__('Client Info')); ?></th>
        <th><?php echo e(__('Amount Details')); ?></th>
        <th><?php echo e(__('Staff')); ?></th>
        <th><?php echo e(__('Payment Gateway')); ?></th>
        <th><?php echo e(__('Order Status')); ?></th>
        <th><?php echo e(__('Crate Date')); ?></th>
        <th><?php echo e(__('Action')); ?></th>
        </thead>
        <tbody>
        <?php $__currentLoopData = $all_orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td><?php echo e($data->id); ?></td>
                <td>
                    <div class="table_customer">
                        <div class="table_customer__flex">
                            <div class="table_customer__contents">
                                <h6 class="table_customer__title"><?php echo e(__('Name:')); ?> <?php echo e($data->user?->first_name); ?> </h6>
                                <h6 class="table_customer__title"><?php echo e(__('Email:')); ?> <?php echo e($data->user?->email); ?></h6>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="table_customer">
                        <div class="table_customer__flex">
                            <div class="table_customer__contents">
                                <h6 class="table_customer__title"><?php echo e(__('Sub Total:')); ?> <?php echo e(float_amount_with_currency_symbol($data->sub_total)); ?> </h6>
                                <?php if($data->coupon_amount > 0): ?>
                                    <h6 class="table_customer__title"> <?php echo e(__('Coupon Amount:')); ?>  <strong>-</strong> <?php echo e(float_amount_with_currency_symbol($data->coupon_amount)); ?> </h6>
                                <?php endif; ?>
                                <h6 class="table_customer__title"><?php echo e(__('Tax:')); ?>  <strong>+</strong> <?php echo e(float_amount_with_currency_symbol($data->tax)); ?></h6>
                                <h6 class="table_customer__title"><?php echo e(__('Total:')); ?> <?php echo e(float_amount_with_currency_symbol($data->total)); ?></h6>
                            </div>
                        </div>
                    </div>
                </td>

                <td>
                    <div class="table_customer">
                        <div class="table_customer__flex">
                            <div class="table_customer__thumb">
                                <?php echo render_image_markup_by_attachment_id($data->staff?->image); ?>

                            </div>
                            <div class="table_customer__contents">
                                <h6 class="table_customer__title"><?php echo e(__('Name:')); ?><?php echo e($data->staff?->fullname); ?></h6>
                                <h6 class="table_customer__title"><?php echo e(__('Date:')); ?> <?php echo e($data->date); ?> </h6>
                                <h6 class="table_customer__title"><?php echo e(__('Schedule:')); ?> <?php echo e($data->schedule); ?></h6>
                            </div>
                        </div>
                    </div>
                </td>
                

                <td>
                    <div class="table_customer">
                        <div class="table_customer__flex">
                            <div class="table_customer__contents">
                                <h6 class="table_customer__title"><?php echo e(__('Gateway:')); ?> <?php echo e($data->payment_gateway); ?> </h6>
                                <div class="d-flex mt-2">
                                    <span class="me-2"><?php if (isset($component)) { $__componentOriginalea75bea71273380f238b6b34c44fd6fe = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalea75bea71273380f238b6b34c44fd6fe = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.payment-status','data' => ['status' => $data->payment_status]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.payment-status'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($data->payment_status)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalea75bea71273380f238b6b34c44fd6fe)): ?>
<?php $attributes = $__attributesOriginalea75bea71273380f238b6b34c44fd6fe; ?>
<?php unset($__attributesOriginalea75bea71273380f238b6b34c44fd6fe); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalea75bea71273380f238b6b34c44fd6fe)): ?>
<?php $component = $__componentOriginalea75bea71273380f238b6b34c44fd6fe; ?>
<?php unset($__componentOriginalea75bea71273380f238b6b34c44fd6fe); ?>
<?php endif; ?></span>
                                    <span><?php if (isset($component)) { $__componentOriginal086f7010becd4d657cdb856682d3d79f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal086f7010becd4d657cdb856682d3d79f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.status-change','data' => ['url' => route('admin.order.change.status',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.status-change'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.order.change.status',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal086f7010becd4d657cdb856682d3d79f)): ?>
<?php $attributes = $__attributesOriginal086f7010becd4d657cdb856682d3d79f; ?>
<?php unset($__attributesOriginal086f7010becd4d657cdb856682d3d79f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal086f7010becd4d657cdb856682d3d79f)): ?>
<?php $component = $__componentOriginal086f7010becd4d657cdb856682d3d79f; ?>
<?php unset($__componentOriginal086f7010becd4d657cdb856682d3d79f); ?>
<?php endif; ?></span>
                                    <?php if($data->payment_gateway == 'manual_payment'): ?>
                                    
                                        <a href="#" class="open-modal"
                                        data-file-url="<?php echo e(asset('assets/uploads/manual-payment/'.$data->payment_attachment)); ?>"
                                        data-file-name="<?php echo e($data->payment_attachment); ?>">
                                        <i class="las la-file-invoice"></i>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="d-flex" id="order_status">
                        <span class="me-2"><?php if (isset($component)) { $__componentOriginala93c04c3726b4b37c5bd1e22788edd81 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginala93c04c3726b4b37c5bd1e22788edd81 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.order-status','data' => ['status' => $data->status]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.order-status'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($data->status)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginala93c04c3726b4b37c5bd1e22788edd81)): ?>
<?php $attributes = $__attributesOriginala93c04c3726b4b37c5bd1e22788edd81; ?>
<?php unset($__attributesOriginala93c04c3726b4b37c5bd1e22788edd81); ?>
<?php endif; ?>
<?php if (isset($__componentOriginala93c04c3726b4b37c5bd1e22788edd81)): ?>
<?php $component = $__componentOriginala93c04c3726b4b37c5bd1e22788edd81; ?>
<?php unset($__componentOriginala93c04c3726b4b37c5bd1e22788edd81); ?>
<?php endif; ?></span>
                        <span >
                            <button type="button" class="cmnBtn btn_5 btn_bg_warning
                            btnIcon radius-5 order_status_change_modal"
                                    data-order_id="<?php echo e($data->id); ?>"
                                    data-bs-toggle="modal"
                                    data-bs-target="#OrderStatusChangeModal">
                                <i class="las la-pen"></i>
                            </button>
                        </span>
                </div>
                </td>
                <td> <strong class="subCap"><?php echo e($data->created_at->diffForHumans()); ?></strong></td>
                <td>
                    <div class="d-flex" id="order_action">
                        <?php if (isset($component)) { $__componentOriginal768f8f40d03d4d53d956d4ea52baca68 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal768f8f40d03d4d53d956d4ea52baca68 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.view-icon','data' => ['url' => route('admin.main.order.details',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.view-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.main.order.details',$data->id))]); ?>
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
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.icon.file-icon','data' => ['url' => route('admin.order.invoice.generate',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('icon.file-icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.order.invoice.generate',$data->id))]); ?>
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
                    </div>        
                </td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
</div>

<div class="custom_pagination mt-5 d-flex justify-content-end">
    <?php echo e($all_orders->links()); ?>

</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/admin-orders/search-order.blade.php ENDPATH**/ ?>