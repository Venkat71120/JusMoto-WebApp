<div class="invoice-details-flex">
    <div class="invoice-single-details" id="invoice-single-details-company">
        <h4 class="invoice-details-title"><?php echo e(get_static_option('bill_to_title') ?? __('Bill To Title:')); ?></h4>
        <ul class="details-list">
            <li class="list"> <?php echo e(__('Name:')); ?> <?php echo e(get_static_option('site_title')); ?> </li>
            <li class="list"> <a href="#"> <?php echo e(__('Email:')); ?> <?php echo e(get_static_option('site_email')); ?> </a> </li>
            <li class="list"> <a href="#"> <?php echo e(__('Phone:')); ?> <?php echo e(get_static_option('site_phone')); ?></a> </li>
            <li class="list" id="company-address">
                <a href="#"> <?php echo e(__('Address:')); ?> <?php echo e(get_static_option('site_address')); ?></a>
            </li>
        </ul>
    </div>
    <div class="invoice-single-details" id="invoice-single-details-customer">
        <h4 class="invoice-details-title"><?php echo e(get_static_option('ship_to_title') ?? __('Ship To Title:')); ?></h4>
        <ul class="details-list">
        <?php
            $location = $order_details?->OrderLocations?->first();
        ?>
            <li class="list"> <strong><?php echo e(__('Name')); ?>: </strong> <?php echo e($order_details?->user?->first_name ?? __('N/A')); ?> </li>
            <li class="list"> <strong><?php echo e(__('Phone')); ?>: </strong> <?php echo e($location?->phone ?? __('N/A')); ?> </li>
            <li class="list"> <strong><?php echo e(__('Emergency Phone')); ?>: </strong> <?php echo e($location?->emergency_phone ?? __('N/A')); ?> </li>
            <li class="list"> <strong><?php echo e(__('Address Type')); ?>: </strong>
                <?php if($location?->type == 1): ?>
                    <?php echo e(__('Office')); ?>

                <?php else: ?>
                    <?php echo e(__('Home')); ?>

                <?php endif; ?>
            </li>
            <li class="list"> <strong><?php echo e(__('City')); ?>: </strong> <?php echo e($location?->city?->city ?? __('N/A')); ?> </li>
            <li class="list"> <strong><?php echo e(__('Area')); ?>: </strong> <?php echo e($location?->area?->area ?? __('N/A')); ?> </li>
            <li class="list"> <strong><?php echo e(__('Post Code')); ?>: </strong> <?php echo e($location?->post_code ?? __('N/A')); ?> </li>
            <li class="list" id="customer-address">
                <strong><?php echo e(__('Address')); ?>: </strong> <?php echo e($location?->address ?? __('N/A')); ?>

            </li>
        </ul>
    </div>
</div>
<div class="order-item-description">
    <div class="table-responsive">
        <h5 class="table-title"><?php echo e(__('Items')); ?></h5>
        <table class="custom--table">
            <thead class="head-bg">
            <tr>
                <th><?php echo e(__('Item ID')); ?></th>
                <th><?php echo e(__('Item Title')); ?></th>
                <th><?php echo e(__('Quantity')); ?></th>
                <th><?php echo e(__('Unit Price')); ?></th>
                <th><?php echo e(__('Total price')); ?></th>
            </tr>
            </thead>
            <tbody>
            <?php $__currentLoopData = $order_details->orderItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($item->id); ?></td>
                    <td><?php echo e($item->service?->title); ?></td>
                    <td><?php echo e($item->qty); ?></td>
                    <td><?php echo e(float_amount_with_currency_symbol($item->price)); ?></td>
                    <?php
                        $sum=$item->qty * $item->price;
                    ?>
                    <td><?php echo e(float_amount_with_currency_symbol($sum)); ?></td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>    
            </tbody>
        </table>
    </div>
</div>

<table class="table">
    <tr>
        <td>
            <div class="order-single-details">
                <h4 class="order-details-title"><?php echo e("Order Details"); ?></h4>
                <ul class="details-list">
                    <li class="list"> <?php echo e(__('Id:')); ?> <?php echo e($order_details->id); ?> </li>
                    <li class="list"> <?php echo e(__('Status:')); ?>

                        <?php if($order_details->status == 0): ?>  <span><?php echo e(__('Pending')); ?></span><?php endif; ?>
                        <?php if($order_details->status == 1): ?> <span> <?php echo e(__('Active')); ?></span><?php endif; ?>
                        <?php if($order_details->status == 2): ?> <span> <?php echo e(__('Completed')); ?></span><?php endif; ?>
                        <?php if($order_details->status == 3): ?> <span> <?php echo e(__('Delivered')); ?></span><?php endif; ?>
                        <?php if($order_details->status == 4): ?> <span> <?php echo e(__('Cancelled')); ?></span><?php endif; ?>
                    </li>
                    <li class="list"> <?php echo e(__('Delivery Mode:')); ?> <?php echo e($order_details->delivery_mode); ?> </li>
                    <li class="list"><span class="data-span"> <?php echo e(__('Delivery Charge:')); ?> </span>
                        <?php echo e(float_amount_with_currency_symbol($order_details->delivery_charge)); ?>

                    </li>
                    <li class="list"><span class="data-span"> <?php echo e(__('Sub Total:')); ?> </span>
                        <?php echo e(float_amount_with_currency_symbol($order_details->sub_total)); ?>

                    </li>
        
                    <?php if(!empty($order_details->coupon_amount)): ?>
                        <li class="list"><span class="data-span"> <?php echo e(__('Coupon Amount:')); ?> </span>
                        <strong>-</strong> <?php echo e(float_amount_with_currency_symbol($order_details->coupon_amount)); ?>

                        </li>   
                    <?php endif; ?>
        
                    <li class="list"><span class="data-span"> <?php echo e(__('Tax:')); ?> </span>
                        <strong>+</strong> <?php echo e(float_amount_with_currency_symbol($order_details->tax)); ?>

                    </li>    
                    <li class="list">
                        <span class="data-span"> <?php echo e(__('Total:')); ?> </span><?php echo e(float_amount_with_currency_symbol($order_details->total)); ?> <br>
                    </li>
                </ul>
            </div>
        </td>
        <td>
            <div class="order-single-details">
                <h5 class="order-details-title"><?php echo e("Payment Details"); ?></h5>
                <ul class="details-list">
                    <li class="list"> <strong><?php echo e(__('Payment Gateway')); ?>: </strong> <?php echo e($order_details?->payment_gateway); ?> </li>
                    <?php
                        $flag="";
                        if($order_details?->payment_status == 0)
                        {
                            $flag="Pending";
                        }
                        elseif($order_details?->payment_status == 1)
                        {
                            $flag="Completed";
                        }
                    ?>
                    <li class="list"> <strong><?php echo e(__('Payment Status')); ?>: </strong> <?php echo e($flag); ?> </li>
                </ul>
            </div>
        </td>        
    </tr>    
   
   
</table> 







<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/invoices/order-invoice-info.blade.php ENDPATH**/ ?>