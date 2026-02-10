<div class="col-xl-6 col-lg-6 col-md-6 col-12 mt-4">
    <div class="customer__details__author__item p-2 radius-10">
        <div class="customer__details__author__item__header">
            <div class="customer__details__author__item__header__flex">
                <div class="customer__details__author__item__header__left">
                    <h4 class="customer__details__author__item__title"><?php echo e(__('Staff Details')); ?></h4>
                </div>
                <div class="customer__details__author__item__header__right">
                    <span >
                        <?php if($order->staff): ?>
                            <button type="button" class="cmnBtn btn_5 btn_bg_info
                            btnIcon radius-5 add_order_staff_modal">
                                Change Staff
                            </button>
                            
                        <?php else: ?>
                            <button type="button" class="cmnBtn btn_5 btn_bg_info
                            btnIcon radius-5 add_order_staff_modal">
                                Add Staff
                            </button>
                        <?php endif; ?>
                       
                    </span>
                </div>
            </div>
        </div>
        <?php if($order->staff): ?>
            <div class="customer__details__author__item__inner border_top_1 top_15">
                <div class="customer__account__details">
                    <div class="customer__account__details__item">
                        <div class="customer__account__details__item__flex">
                            <strong><?php echo e(__('Name:')); ?></strong>
                            <span><?php echo e($order->staff?->first_name); ?></span>
                        </div>
                    </div>
                    <div class="customer__account__details__item">
                        <div class="customer__account__details__item__flex">
                            <strong><?php echo e(__('Email:')); ?></strong>
                            <span><?php echo e($order->staff?->email); ?></span>
                        </div>
                    </div>
                    <div class="customer__account__details__item">
                        <div class="customer__account__details__item__flex">
                            <strong><?php echo e(__('Phone:')); ?></strong>
                            <span><?php echo e($order->staff?->phone); ?></span>
                           
                        </div>
                        
                    </div> 
                </div>
            </div>
        <?php endif; ?>    
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-details-step-04.blade.php ENDPATH**/ ?>