<div class="cart-overlay"></div>
<div class="cart-container">
    <div class="cart-header">
        <div class="cart-title-section">
            <button class="close-btn">
                <i class="icon-base ti tabler-x selected-5 icon-24px"></i>
            </button>
            <div>
                <div class="cart-title subtitle-2 fw_bold"><?php echo e(__('Your Cart')); ?></div>
                <div class="cart-subtitle">
                    <?php echo e($selectedItems->count()); ?> <?php echo e(__('Products In Your Cart')); ?>

                </div>
            </div>
        </div>
        <button class="clear-all fs-md fw_mideum">
            <i class="icon-base ti tabler-trash selected-5 icon-24px"></i>
            <?php echo e(__('Clear All')); ?>

        </button>
    </div>

    <div class="cart-items">
        <?php $__empty_1 = true; $__currentLoopData = $selectedItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <?php if($item->service): ?>
                <div class="cart-item" data-id="<?php echo e($item->id); ?>">
                    <div class="item-image">
                        <?php echo render_image_markup_by_attachment_id($item->service->image ?? '', '', 'thumb'); ?>

                    </div>
                    <div class="item-details">
                        <div class="item-name fs-md fw_mideum fw_semibold twoline">
                            <?php echo e($item->service->title ?? 'Service unavailable'); ?>

                        </div>
                        <div class="item-price subtitle-4 fw_semibold" data-base="<?php echo e($item->price); ?>">
                            $<?php echo e(number_format($item->price * $item->quantity, 2)); ?>

                        </div>
                        <div class="item-actions">
                            <div class="quantity-control">
                                <button class="qty-btn minus">
                                    <i class="icon-base ti tabler-minus icon-16px"></i>
                                </button>
                                <span class="quantity"><?php echo e($item->quantity); ?></span>
                                <button class="qty-btn plus">
                                    <i class="icon-base ti tabler-plus icon-16px"></i>
                                </button>
                            </div>
                            <button class="delete-btn">
                                <i class="icon-base ti tabler-trash icon-24px"></i>
                            </button>
                        </div>
                    </div>

                </div>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <p><?php echo e(__('Your cart is empty')); ?></p>
        <?php endif; ?>
    </div>

    <div class="cart-footer pat-60">
        <div class="total-section">
            <div class="total-label subtitle-4 fw_semibold"><?php echo e(__('Total Price')); ?></div>
            <div class="total-price subtitle-2 fw_bold"></div>
        </div>
        <div class="checkout-btn">
            <?php if(auth()->check()): ?>
                <a href="<?php echo e(route('client.booking_page')); ?>"><?php echo e(__('Proceed To Checkout')); ?></a>
            <?php else: ?>
                <a href="<?php echo e(route('auth.login', ['redirect_to' => route('client.booking_page')])); ?>">
                    <?php echo e(__('Proceed To Checkout')); ?>

                </a>
            <?php endif; ?>

        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/pages/cartItems/cart_items.blade.php ENDPATH**/ ?>