<div class="product__details__single">
    <div class="editProduct">
        <div class="row g-4">
            <div class="col-xxl-4 col-lg-4">
                <div class="editProduct__contents__category mb-2">
                    <strong class="editProduct__contents__sku__para"><?php echo e(__('Service Image:')); ?></strong>
                </div>
                <div class="editProduct__thumb">
                    <div class="editProduct__thumb__main">
                        <?php echo render_image_markup_by_attachment_id($service->image, '', 'thumb'); ?>

                    </div>
                </div>
                <div class="editProduct__contents__category mt-3">
                    <strong class="editProduct__contents__sku__para"><?php echo e(__('Gallery Images:')); ?></strong>
                </div>
                <div class="dashboard__rates__card__thumb">
                    <?php echo render_gallery_image_attachment_preview($service->gallery_images ?? ''); ?>

                </div>

                <div class="customer__details__author__item__header mt-3">
                    <div class="customer__details__author__item__header__flex">
                        <div class="customer__details__author__item__header__left">
                            <h4 class="customer__details__author__item__title">
                                <?php if($service->admin_id != null && $service->admin_id != 0): ?>
                                <?php echo e(__('Admin Info:')); ?>

                                <?php else: ?>
                                   
                                <?php endif; ?>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="customer__details__author__item__inner border_top_1 top_15">
                    <div class="customer__account__details">
                        <?php if($service->admin_id != null && $service->admin_id != 0): ?>
                           <!-- Admin Info -->
                           <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong></strong>
                                <a href="<?php echo e(optional($service->admin)->username); ?>" target="_blank">
                                    <div class="customer__details__author__thumb">
                                        <?php echo render_image_markup_by_attachment_id($service->admin->image, '', 'thumb'); ?>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong><?php echo e(__('Name')); ?></strong>
                                <a href="<?php echo e(optional($service->admin)->username); ?>" target="_blank">
                                    <span><?php echo e(optional($service->admin)->name); ?></span>
                                </a>
                            </div>
                        </div>
                        <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong><?php echo e(__('Email')); ?></strong>
                                <span><?php echo e(optional($service->admin)->email); ?></span>
                            </div>
                        </div>
                        <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong><?php echo e(__('Phone')); ?></strong>
                                <span><?php echo e(optional($service->admin)->phone); ?></span>
                            </div>
                        </div>
                        <?php else: ?>
                           
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!--step two -->
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Service Title:')); ?></strong> <?php echo e($service->title); ?></span>
                    </div>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para">
                            <strong><?php echo e(__('Price:')); ?></strong>
                            <?php if($service->discount_price > 0): ?>
                                <span class="discount-price">
                                    <del> <?php echo e(float_amount_with_currency_symbol($service->price)); ?> </del>
                               </span>
                            <?php else: ?>
                                <?php echo e(float_amount_with_currency_symbol($service->price)); ?>

                            <?php endif; ?>
                        </span>
                    </div>
                    <?php if($service->discount_price > 0): ?>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Discount Price:')); ?></strong>
                            <?php echo e(float_amount_with_currency_symbol($service->discount_price)); ?>

                        </span>
                    </div>
                    <?php endif; ?>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Category:')); ?></strong> <?php echo e(optional($service->category)->name); ?></span>
                    </div>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Sub Category:')); ?></strong> <?php echo e(optional($service->sub_category)->name); ?></span>
                    </div>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Child Category:')); ?></strong> <?php echo e(optional($service->child_category)->name); ?></span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('View Count:')); ?></strong> <?php echo e($service->view); ?></span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                            <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Status:')); ?></strong>
                                <?php if($service->status==1): ?>
                                    <span class="status_btn completed"><?php echo e(__('Approved')); ?></span>
                                <?php else: ?>
                                    <span class="status_btn cancelled"><?php echo e(__('Pending')); ?></span>
                                <?php endif; ?>
                            </span>
                    </div>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Is Featured:')); ?></strong></span>
                        <input class="effectBorder" type="checkbox" <?php if(!empty($service->is_featured)): ?> checked <?php endif; ?>>
                        <span class="checkmark"></span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('State:')); ?></strong> <?php echo e(optional($service->state)->state); ?></span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('City:')); ?></strong> <?php echo e(optional($service->city)->city); ?></span>
                    </div>
                    <div class="product__details__description mt-3">
                        <span class="editProduct__contents__sku__para"><strong><?php echo e(__('Description:')); ?></strong></span>
                        <p class="product__details__para"><?php echo $service->description; ?></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/service-details-basic-info.blade.php ENDPATH**/ ?>