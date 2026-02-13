<section class="pat-120">
    <div class="custom-container">
        <div class="row">
            <div class="col-lg-7">
                <div class="row">
                    <!-- Main Image -->
                    <div class="col-lg-11 col-md-12">
                        <div class="sliderContains">
                            <div class="service-position" >
                                <div class="slider-btn-wrapper"></div>
                                <div class=" global-slick-init" data-slidestoshow="1" data-slidestoscroll="1"
                                     data-arrows="true" data-infinite="true" data-appendarrows=".slider-btn-wrapper"
                                     data-prevarrow='<span class="slider-btn style3 position-left-btn"><i class="icon-base ti tabler-arrow-left icon-30px"></i></span>'
                                     data-nextarrow='<span class="slider-btn style3 position-right-btn"><i class="icon-base ti tabler-arrow-right icon-30px"></i></span>'>
                                    <?php
                                        $gallery_images = !empty($service->gallery_images) ? explode('|', $service->gallery_images) : [];
                                    ?>
                                    <?php if(!empty($gallery_images) && count($gallery_images) > 0): ?>
                                        <?php $__currentLoopData = $gallery_images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $image_id): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <?php if(!empty($image_id)): ?>
                                                <div class="imgSlide">
                                                    <?php echo render_image_markup_by_attachment_id($image_id, '', 'full'); ?>

                                                </div>
                                            <?php endif; ?>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php else: ?>
                                        <div class="imgSlide">
                                            <?php echo render_image_markup_by_attachment_id($service->image, '', 'full'); ?>

                                        </div>
                                    <?php endif; ?>
                                </div>
                                <span class="fvt-icon style2 icon-position favorite-btn <?php echo e(auth()->user()?->favoriteItems?->contains('item_id', $service->id) ? 'selected' : ''); ?>" data-id="<?php echo e($service->id); ?>">
                                    <i class="icon-base ti tabler-heart-filled"></i>
                                </span>

                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="product-thumbnail-wrapper">
                                <div class="product-thumbnail  d-flex gap-2">
                                    <?php
                                        $gallery_images = !empty($service->gallery_images)
                                            ? explode('|', $service->gallery_images)
                                            : [];
                                        $gallery_count = count($gallery_images);
                                    ?>
                                    <?php if($gallery_count > 0): ?>
                                        <?php for($i = 0; $i < min(4, $gallery_count); $i++): ?>
                                            <?php
                                                $image_id = isset($gallery_images[$i]) ? $gallery_images[$i] : null;
                                            ?>
                                            <?php if(!empty($image_id)): ?>
                                                <div class="thumbnail-container">
                                                    <div class="thumbnail-item <?php echo e($i == 0 ? 'active' : ''); ?>">
                                                            <?php echo render_image_markup_by_attachment_id($image_id, '', 'full'); ?>

                                                    </div>
                                                </div>
                                            <?php endif; ?>
                                        <?php endfor; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="d-lg-none d-block mt-4 car-detalis">
                    <h1 class="product-title title-4 fw_semibold"><?php echo e($service->title); ?></h1>
                    <div class="price-rating-row">
                        <?php
                            $new_price=0;
                            if($service->discount_price>0){
                                $new_price=$service->discount_price;
                            }else{
                                $new_price=$service->price;
                            }
                        ?>
                        <div class="product-price subtitle-1 fw_bold"><?php echo e(float_amount_with_currency_symbol($new_price)); ?></div>
                        <div class="rating-container">
                            <?php if($service->rating > 0): ?>
                                <span class="yellow-text"><i class="fas fa-star"></i></span>
                                <span class="black-text fw_semibold"><?php echo e($service->rating); ?></span>
                            <?php endif; ?>
                                <?php if($total_reviews>0): ?>
                                    <span class="review-count"><?php echo e(__('(')); ?><?php echo e($total_reviews); ?> <?php echo e(__('Reviews)')); ?></span>
                                <?php endif; ?>
                        </div>
                    </div>

                    <div class="category-pera">
                        <p class="product-description fs-reg fw_regular">
                           <?php echo e($service->description); ?>

                        </p>
                    </div>

                    <div class="category-row mt-60">
                        <span class="category-label"><?php echo e(__('Category:')); ?></span>
                        <span class="category-value"><?php echo e($service->category->name); ?></span>

                        <div class="quantity-cart-row">
                            <div class="add-btn-wraper">
                                <button type="button" class="cmn-btn primary-btn cart-btn" data-id="<?php echo e($service->id); ?>" data-price="<?php echo e($new_price); ?>" <?php echo e(in_array($service->id, $cartItemIds) ? 'disabled' : ''); ?>>
                                    <i class="icon-base ti tabler-shopping-cart"></i>
                                    <?php echo e(in_array($service->id, $cartItemIds) ? __('Added') : __('Add')); ?>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tabs">
                    <button class="tab active fw_semibold fs-md" data-target="overview"><?php echo e(__('Overview')); ?></button>
                    <button class="tab fw_semibold fs-md" data-target="reviews"><?php echo e(__('Reviews')); ?></button>
                    <button class="tab fw_semibold fs-md" data-target="faqs"><?php echo e(__('FAQs')); ?></button>
                </div>

                <!-- Overview Content -->
                <div class="tab-content active" id="overview">
                    <div class="overview-item">
                        <?php if($service->serviceAdditional): ?>
                            <?php $__currentLoopData = $service->serviceAdditional; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $additional): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="service-content">
                                    <?php echo render_image_markup_by_attachment_id_for_additional_info_image($additional->image, '', 'full'); ?>

                                    <span><?php echo e($additional->title); ?></span>
                                </div>

                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php endif; ?>
                    </div>
                    <div class="additional-service">
                        <div class="section-title">
                            <h4 class="subtitle-4 fw_semibold"><?php echo e(__('Offers')); ?></h4>
                        </div>
                        <div class="additional-child">
                            <?php if($service->includes): ?>
                                <?php $__currentLoopData = $service->includes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $include): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div class="additional-item">
                                        <span class="selected-green">
                                          <i class="icon-base ti tabler-circle-check-filled"></i>
                                        </span>
                                      <?php echo e($include->title); ?>

                                    </div>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php endif; ?>

                        </div>

                    </div>

                    <div class="additional-service section-title subtitle-4 fw_semibold"><?php echo e(__('Steps After Booking')); ?></div>
                    <div class="additional-child with-line">
                        <?php if($afterBookingSteps): ?>
                            <?php $__currentLoopData = $afterBookingSteps; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $steps): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="steps-item">
                                    <div class="steps-number"><i class="icon-base ti tabler-carambola-filled selected icon-14px"></i>
                                    </div>
                                    <span><?php echo e($steps->steps); ?></span>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php endif; ?>

                    </div>
                </div>

                <!-- Reviews Content -->
                <div class="tab-content content-width" id="reviews">
                    <div class="review-header subtitle-2 fw_semibold">
                        <?php echo e(__('Review')); ?>

                        <?php if($total_reviews > 0): ?>
                            (<?php echo e($total_reviews); ?>)
                        <?php endif; ?>
                    </div>
                    <?php if($all_reviews->count() > 0): ?>
                        <?php $__currentLoopData = $all_reviews; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $review): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="review-parent">
                                <div class="review-card">
                                    <div class="review-avatar">
                                        <?php echo render_image_markup_by_attachment_id($review->reviewer?->image, '', 'full'); ?>

                                    </div>
                                    <div class="card-text">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="review-name fs-reg fw_medium">
                                                <?php
                                                    $fullName = trim(($review->reviewer->first_name ?? '') . ' ' . ($review->reviewer->last_name ?? ''));
                                                ?>

                                                <?php echo e($fullName !== '' ? $fullName : ($review->reviewer->username ?? '')); ?>

                                            </div>
                                            <div class="star fs-md d-flex gap-2">
                                                <?php if($review->rating > 0): ?>
                                                    <span class="yellow-text"><i class="fas fa-star"></i></span>
                                                    <span class="black-text fw_semibold"><?php echo e($review->rating); ?></span>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                        <div class="time mt-1">
                                            <span>
                                                 <?php echo e($review->created_at ? \Carbon\Carbon::parse($review->created_at)->format('d F, Y') : ''); ?>

                                            </span>
                                        </div>
                                        <div class="review-text-details mt-1">
                                            <?php echo e($review->message); ?>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php if($all_reviews->hasPages()): ?>
                                <div class="pagination-container"> 
                                    
                                    <?php if($all_reviews->onFirstPage()): ?>
                                        <a href="#" class="pagination-link disabled">&lt; <?php echo e(__('Previous')); ?></a>
                                    <?php else: ?>
                                        <a href="<?php echo e($all_reviews->previousPageUrl()); ?>#reviews" class="pagination-link">&lt; <?php echo e(__('Previous')); ?> </a>
                                    <?php endif; ?>

                                    <ul class="pagination"> 
                                        <?php $__currentLoopData = $all_reviews->getUrlRange(1, $all_reviews->lastPage()); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $page => $url): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <li class="pagination-item <?php echo e($page == $all_reviews->currentPage() ? 'active' : ''); ?>">
                                                <a href="<?php echo e($url); ?>#reviews" class="pagination-link" data-page="<?php echo e($page); ?>"><?php echo e($page); ?></a>
                                            </li>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </ul>

                                    
                                    <?php if($all_reviews->hasMorePages()): ?>
                                        <a href="<?php echo e($all_reviews->nextPageUrl()); ?>#reviews" class="pagination-link"><?php echo e(__('Next')); ?> &gt;</a>
                                    <?php else: ?>
                                        <a href="#" class="pagination-link disabled"><?php echo e(__('Next')); ?> &gt;</a>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>

                    <?php else: ?>
                        <div class="alert alert-warning">
                            <?php echo e(__('There are currently no reviews for this service. Check back later for user feedback.')); ?>

                        </div>
                    <?php endif; ?>

                </div>
                <!-- Faq -->
                <div class="tab-content content-width" id="faqs">
                    <div class="faq-title title-3 fw_bold"><?php echo e(__('FAQ Questions')); ?></div>
                    <?php if($service->faqs->count()>0): ?>
                        <?php $__currentLoopData = $service->faqs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $faq): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="faq-item">
                                <div class="faq-question">
                                    <span class="subtitle-4 fw_medium"><?php echo e($faq->title); ?></span>
                                    <span><i class="faq-icon ti tabler-plus icon-30px"></i></span>
                                </div>
                                <div class="faq-answer fs-reg fw_regular">
                                  <?php echo e($faq->description); ?>

                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php else: ?>
                        <div class="alert alert-warning">
                            <?php echo e(__('No frequently asked questions have been added for this service yet. Please check back later for updates.')); ?>

                        </div>

                    <?php endif; ?>

                </div>

            </div>
            <div class="col-lg-5">
                <div class="stiky is-stuck sticky-top d-none d-lg-block ">
                    <h1 class="product-title title-4 fw_semibold"><?php echo e($service->title); ?></h1>
                    <div class="price-rating-row">
                        <?php
                            $new_price=0;
                            if($service->discount_price>0){
                                $new_price=$service->discount_price;
                            }else{
                                $new_price=$service->price;
                            }
                        ?>
                        <div class="product-price subtitle-1 fw_bold"><?php echo e(float_amount_with_currency_symbol($new_price)); ?></div>
                        <div class="rating-container">
                            <?php if($service->rating > 0): ?>
                                <span class="yellow-text"><i class="fas fa-star"></i></span>
                                <span class="black-text fw_semibold"><?php echo e($service->rating); ?></span>
                            <?php endif; ?>
                            <?php if($total_reviews>0): ?>
                               <span class="review-count"><?php echo e(__('(')); ?><?php echo e($total_reviews); ?> <?php echo e(__('Reviews)')); ?></span>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="category-pera">
                        <p class="product-description fs-reg fw_regular">
                         <?php echo e($service->description); ?>

                        </p>

                    </div>

                    <div class="category-row mt-60">
                        <span class="category-label"><?php echo e(__('Category:')); ?></span>
                        <span class="category-value"><?php echo e($service->category->name); ?></span>

                        <div class="quantity-cart-row">
                            <?php
                                $userId = auth()->id();
                                $guestToken = session('guest_token');
                                $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken){
                                    if($userId){
                                        $q->where('user_id', $userId);
                                    } else {
                                        $q->where('guest_token', $guestToken);
                                    }
                                })->pluck('item_id')->toArray();

                            ?>
                            <div class="add-btn-wraper">
                                <button type="button" class="cmn-btn primary-btn cart-btn" data-id="<?php echo e($service->id); ?>" data-price="<?php echo e($new_price); ?>" <?php echo e(in_array($service->id, $cartItemIds) ? 'disabled' : ''); ?>>
                                    <i class="icon-base ti tabler-shopping-cart"></i>
                                    <?php echo e(in_array($service->id, $cartItemIds) ? __('Added') : __('Add')); ?>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/pages/ServicePage/service-details-basic-info.blade.php ENDPATH**/ ?>