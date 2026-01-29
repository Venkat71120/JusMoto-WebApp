<div class="dashboard__left dashboard-left-content">
    <div class="dashboard__left__main">
        <div class="dashboard__left__close close-bars"><i class="fa-solid fa-times"></i></div>
        <div class="dashboard__top">
            <div class="dashboard__top__logo mb-4">
                <a href="<?php echo e(route('admin.dashboard')); ?>" class="dashboard-logo-style">
                    <?php if(get_static_option('site_admin_dark_mode') == 'on'): ?>
                        <?php echo render_image_markup_by_attachment_id(get_static_option('site_white_logo')); ?>

                    <?php else: ?>
                        <?php echo render_image_markup_by_attachment_id(get_static_option('site_logo')); ?>

                    <?php endif; ?>
                </a>
            </div>
        </div>

        <div class="dashboard__bottom">
            <div class="dashboard__bottom__search mb-3">
                <input class="form--control  w-100" type="text" placeholder="<?php echo e(__('Search here')); ?>" id="search_sidebarList">
            </div>
            <ul class="dashboard__bottom__list dashboard-list">

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-dashboard')): ?>
                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/dashboard')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.dashboard')); ?>"><i class="lab la-accessible-icon"></i>
                            <span class="icon_title"><?php echo e(__('Dashboard')); ?></span>
                        </a>
                    </li>
                <?php endif; ?>

                <!--Admin service manage -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-service-list','admin-product-list', 'report-reason-list', 'service-report-list'])): ?>
                    <li  class="dashboard__bottom__list__item has-children
                    <?php if(request()->is('admin/services/*')
                     || request()->is('admin/services/all') ||  request()->is('admin/products/*')
                     || request()->is('admin/products/all')): ?>  active open show
                    <?php endif; ?> ">
                        <a href="javascript:void(0)"> <i class="las la-th-list"></i> <?php echo e(__('Service Manage')); ?> </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->is('admin/services/all')
                            || request()->is('admin/services/add') ||
                             request()->is('admin/services/admin-edit-service/*')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.all.services')); ?>"> <?php echo e(__('All Services')); ?> </a>
                            </li>
                           <?php endif; ?>
                           <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-product-list')): ?>
                           <li class="dashboard__bottom__list__item <?php if(request()->is('admin/products/all')
                           || request()->is('admin/products/add') ||
                            request()->is('admin/products/admin-edit-product/*')): ?> selected <?php endif; ?>">
                               <a href="<?php echo e(route('admin.all.products')); ?>"> <?php echo e(__('All Products')); ?> </a>
                           </li>
                          <?php endif; ?>
                           <!--Admin service schedule manage -->
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                                <li class="dashboard__bottom__list__item <?php if(request()->is('admin/service/schedule/list')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.schedule.all')); ?>"> <?php echo e(__('Schedule Manage')); ?> </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!--Review List -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['review-list'])): ?>
                <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/review/*')): ?> active open <?php endif; ?>">
                    <a href="javascript:void(0)"><i class="las la-th-list"></i>
                        <span class="icon_title"><?php echo e(__('Reviews List')); ?></span>
                    </a>
                    <ul class="submenu <?php if(request()->is('admin/review/*')): ?> d-block <?php endif; ?>">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('review-list')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/review/all')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.review.all')); ?>"><?php echo e(__('All Reviews')); ?></a>
                        </li>
                        <?php endif; ?>
                    </ul>
                </li>
               <?php endif; ?>

                <!--Admin outlet address  manage -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-outletAddress-all','admin-outletAddress-add'])): ?>
                    <li  class="dashboard__bottom__list__item has-children
                    <?php if(request()->is('admin/outletAddress/*')
                     || request()->is('admin/outletAddress/all') || request()->is('admin/outletAddress/add')): ?>  active open show
                    <?php endif; ?> ">
                        <a href="javascript:void(0)"> <i class="las la-th-list"></i> <?php echo e(__('Outlet Location Manage')); ?> </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outletAddress-list')): ?>
                                <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.outletAddress.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.outletAddress.all')); ?>"> <?php echo e(__('All Outlet Address')); ?> </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outletAddress-add')): ?>
                                <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.outletAddress.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.outletAddress.add')); ?>"> <?php echo e(__('Add New Outlet Address')); ?> </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

               <!--Admin order manage -->
                <li  class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/orders/*')): ?> active open show <?php endif; ?>">
                    <a href="javascript:void(0)"> <i class="las la-bars"></i> <?php echo e(__('All Orders Manage')); ?> </a>
                    <ul class="submenu">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                        <li class="dashboard__bottom__list__item
                            <?php if(Route::currentRouteName() == 'admin.service.all.orders'
                            || request()->is('admin/orders/details/*') || request()->is('admin/orders/sub-order/details/*')  ): ?> selected
                             <?php endif; ?>
                             ">
                            <a href="<?php echo e(route('admin.service.all.orders')); ?>"> <?php echo e(__('All Admin  Orders')); ?> </a>
                        </li>
                       <?php endif; ?>
                       <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                       <li class="dashboard__bottom__list__item
                           <?php if(Route::currentRouteName() == 'admin.redunded-order.list'): ?> selected
                            <?php endif; ?>
                            ">
                           <a href="<?php echo e(route('admin.redunded-order.list')); ?>"> <?php echo e(__('All Refunded Orders')); ?> </a>
                       </li>
                      <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->is('admin/orders/settings')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.order.settings')); ?>"><?php echo e(__('Order Settings')); ?></a>
                            </li>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->is('admin/orders/order-cancellation-policy')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.order.cancellation-policy')); ?>"><?php echo e(__('Oder Cancellation Policy')); ?></a>
                            </li>
                        <?php endif; ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->is('admin/orders/after-booking-steps')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.order.after-booking-steps')); ?>"><?php echo e(__('After Booking Steps')); ?></a>
                            </li>
                    </ul>
                </li>


               <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['user-list', 'user-deactivated-list', 'user-verify-status', 'user-add'])): ?>
                <li  class="dashboard__bottom__list__item has-children
                <?php if(request()->is('admin/user*')
                    || request()->is('admin/user/profile/*')): ?>
                    active open show
                  <?php endif; ?>">
                    <a href="javascript:void(0)"> <i class="las la-user-circle"></i> <?php echo e(__('User Manage')); ?> </a>
                    <ul class="submenu">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-list')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.user.all'])): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.user.all')); ?>"> <?php echo e(__('All Users')); ?> </a>
                            </li>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-deactivated-list')): ?>
                           <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.user.restore'])): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.user.restore')); ?>"> <?php echo e(__('Trash List')); ?> </a>
                            </li>
                        <?php endif; ?>

                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-add')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.user.add'])): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.user.add')); ?>">
                                <?php echo e(__('Add New User')); ?> </a>
                        </li>
                        <?php endif; ?>
                    </ul>
                </li>
               <?php endif; ?>

               <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['user-list', 'user-deactivated-list', 'user-verify-status', 'user-add','staff-setting'])): ?>
                <li  class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/staff*')): ?> active open show <?php endif; ?>">
                    <a href="javascript:void(0)"> <i class="las la-user-circle"></i> <?php echo e(__('Admin Staffs Manage')); ?> </a>
                    <ul class="submenu">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-list')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.staff.all'])): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.staff.all')); ?>"> <?php echo e(__('Admin All Staffs')); ?> </a>
                            </li>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-add')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.staff.add'])): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.staff.add')); ?>">
                                <?php echo e(__('Add New Staff')); ?> </a>
                        </li>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('staff-setting')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.staff.select'])): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.staff.select')); ?>">
                                <?php echo e(__('Staff Selection Setting')); ?> </a>
                        </li>
                        <?php endif; ?>
                    </ul>
                </li>
               <?php endif; ?>

               <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['category-list', 'category-add'])): ?>
                <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/category/*')): ?> active open <?php endif; ?>">
                    <a href="javascript:void(0)"><i class="las la-th-list"></i>
                        <span class="icon_title"><?php echo e(__('Categories')); ?></span>
                    </a>
                    <ul class="submenu <?php if(request()->is('admin/category/*')): ?> d-block <?php endif; ?>">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('category-list')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/category/index')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.category')); ?>"><?php echo e(__('All Category')); ?></a>
                        </li>
                        <?php endif; ?>
                       <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('category-add')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/category/add-new-category')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.category.new')); ?>"><?php echo e(__('Add New Category')); ?></a>
                        </li>
                        <?php endif; ?>
                    </ul>
                </li>
               <?php endif; ?>


                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['offer-list', 'offer-add'])): ?>
                    <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/offer*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)">
                            <i class="las la-paste"></i>
                            <span class="icon_title"><?php echo e(__('Offers')); ?></span>
                        </a>
                        <ul class="submenu <?php if(request()->is('admin/offer/*')): ?> d-block <?php endif; ?>">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('offer-list')): ?>
                                <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.offer.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.offer.all')); ?>"><?php echo e(__('All Offers')); ?></a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('offer-add')): ?>
                                <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.offer.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.offer.add')); ?>"><?php echo e(__('Add New Offer')); ?></a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['blog-list', 'blog-add'])): ?>
                        <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/blog*')): ?> active open <?php endif; ?>">
                            <a href="javascript:void(0)">
                                <i class="las la-paste"></i>
                                <span class="icon_title"><?php echo e(__('Blog')); ?></span>
                            </a>
                            <ul class="submenu" style="<?php if(request()->is('admin/blog/*')): ?> display:block; <?php endif; ?>">
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('blog-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.blog.index'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.blog.index')); ?>"><?php echo e(__('All Blogs')); ?></a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('blog-add')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.blog.create'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.blog.create')); ?>"><?php echo e(__('Add New Blog')); ?></a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </li>
                    <?php endif; ?>

                      <!-- Brand Manage -->
                      <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-brand-list', 'admin-brand-add'])): ?>
                      <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/brand*')): ?> active open <?php endif; ?>">
                          <a href="javascript:void(0)">
                              <i class="las la-paste"></i>
                              <span class="icon_title"><?php echo e(__('Brands')); ?></span>
                          </a>
                          <ul class="submenu <?php if(request()->is('admin/brand/*')): ?> d-block <?php endif; ?>">
                              <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-brand-list')): ?>
                                  <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.brand.all'])): ?> selected <?php endif; ?>">
                                      <a href="<?php echo e(route('admin.brand.all')); ?>"><?php echo e(__('All Brands')); ?></a>
                                  </li>
                              <?php endif; ?>
                              <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-brand-add')): ?>
                                  <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.brand.add'])): ?> selected <?php endif; ?>">
                                      <a href="<?php echo e(route('admin.brand.add')); ?>"><?php echo e(__('Add New Brand')); ?></a>
                                  </li>
                              <?php endif; ?>
                          </ul>
                      </li>
                  <?php endif; ?>

                  <!-- Car Manage -->
                  <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-car-list', 'admin-car-add'])): ?>
                  <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/car*')): ?> active open <?php endif; ?>">
                      <a href="javascript:void(0)">
                          <i class="las la-paste"></i>
                          <span class="icon_title"><?php echo e(__('Cars')); ?></span>
                      </a>
                      <ul class="submenu <?php if(request()->is('admin/car/*')): ?> d-block <?php endif; ?>">
                          <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-car-list')): ?>
                              <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.car.all'])): ?> selected <?php endif; ?>">
                                  <a href="<?php echo e(route('admin.car.all')); ?>"><?php echo e(__('All Cars')); ?></a>
                              </li>
                          <?php endif; ?>
                          <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-car-add')): ?>
                              <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.car.add'])): ?> selected <?php endif; ?>">
                                  <a href="<?php echo e(route('admin.car.add')); ?>"><?php echo e(__('Add New Car')); ?></a>
                              </li>
                          <?php endif; ?>
                      </ul>
                  </li>
              <?php endif; ?>

              <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-engine-list','admin-engine-add'])): ?>
                  <li class="dashboard__bottom__list__item has-children   <?php if(request()->is('admin/engine*')): ?> active open  <?php endif; ?>">
                      <a href="javascript:void(0)">
                          <i class="las la-paste"></i>
                          <span class="icon_title"><?php echo e(__('Engines')); ?></span>
                      </a>
                      <ul class="submenu <?php if(request()->is('admin/engine/*')): ?> d-block <?php endif; ?>">

                          <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-engine-list')): ?>
                          <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.engine.all'])): ?> selected <?php endif; ?>">
                              <a href="<?php echo e(route('admin.engine.all')); ?>"><?php echo e(__('All Engines')); ?></a>
                          </li>
                      <?php endif; ?>
                      <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-engine-add')): ?>
                      <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.engine.add'])): ?> selected <?php endif; ?>">
                          <a href="<?php echo e(route('admin.engine.add')); ?>"><?php echo e(__('Add New Engine')); ?></a>
                      </li>
                  <?php endif; ?>

                      </ul>
                  </li>
              <?php endif; ?>

              <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-fual-list','admin-fual-add'])): ?>
                  <li class="dashboard__bottom__list__item has-children  <?php if(request()->is('admin/fual*')): ?> active open  <?php endif; ?>">
                      <a href="javascript:void(0)">
                          <i class="las la-paste"></i>
                          <span class="icon_title"><?php echo e(__('Fuels')); ?></span>
                      </a>
                      <ul class="submenu <?php if(request()->is('admin/fual/*')): ?> d-block <?php endif; ?>">

                  <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-fual-list')): ?>
                  <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.fual.all'])): ?> selected <?php endif; ?>">
                      <a href="<?php echo e(route('admin.fual.all')); ?>"><?php echo e(__('All Fuels')); ?></a>
                  </li>
              <?php endif; ?>
              <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-fual-add')): ?>
              <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.fual.add'])): ?> selected <?php endif; ?>">
                  <a href="<?php echo e(route('admin.fual.add')); ?>"><?php echo e(__('Add New Fuel')); ?></a>
              </li>
               <?php endif; ?>
            </ul>
            </li>
              <?php endif; ?>

                    <!-- Pages Manage -->
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['dynamic-page-list', 'dynamic-page-add'])): ?>
                        <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/dynamic-page*')): ?> active open <?php endif; ?>">
                            <a href="javascript:void(0)">
                                <i class="las la-paste"></i>
                                <span class="icon_title"><?php echo e(__('Pages')); ?></span>
                            </a>
                            <ul class="submenu <?php if(request()->is('admin/dynamic-page/*')): ?> d-block <?php endif; ?>">
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('dynamic-page-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/dynamic-page/all')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.page')); ?>"><?php echo e(__('All Pages')); ?></a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('dynamic-page-add')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/dynamic-page/new')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.page.new')); ?>"><?php echo e(__('Add New Page')); ?></a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </li>
                    <?php endif; ?>

                    <!-- Wallet Management -->
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-wallet-list', 'admin-wallet-settings', 'admin-transaction-list'])): ?>
                        <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/wallet/*')): ?> active open <?php endif; ?>">
                            <a href="javascript:void(0)">
                                <i class="las la-wallet"></i>
                                <span class="icon_title"><?php echo e(__('Wallet Management')); ?></span>
                            </a>
                            <ul class="submenu" style="<?php if(request()->is('admin/wallet/*')): ?> display:block; <?php endif; ?>">
                                
                                
                                
                                
                                
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-wallet-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.wallet.wallets', 'admin.wallet.wallets.show'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.wallet.wallets')); ?>"><?php echo e(__('All Wallets')); ?></a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-transaction-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.wallet.transactions', 'admin.wallet.transactions.show'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.wallet.transactions')); ?>"><?php echo e(__('All Transactions')); ?></a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </li>
                    <?php endif; ?>


                <?php echo $__env->make('backend.partials.module-list', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any('report-reason-list', 'report-reason-edit', 'report-reason-delete', 'report-reason-bulk-delete')): ?>
                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs('admin.report.reason.all')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.report.reason.all')); ?>"> <i class="las la-question-circle"></i> <?php echo e(__('Reasons')); ?> </a>
                    </li>
                <?php endif; ?>

               <!-- Refund Manage -->
               <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any('refund-payment-gateway-list', 'refund-settings-view', 'refund-payment-gateway-add', 'refund-payment-gateway-edit', 'refund-payment-status-change', 'refund-payment-gateway-delete', 'refund-list', 'refund-status-change', 'refund-fee-settings-view')): ?>
               <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/refund*')): ?> active open <?php endif; ?>">
                   <a href="javascript:void(0)">
                       <i class="las la-paste"></i>
                       <span class="icon_title"><?php echo e(__('Refund')); ?></span>
                   </a>
                   <ul class="submenu <?php if(request()->is('admin/refund/*')): ?> d-block <?php endif; ?>">
                       <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('refund-payment-gateway-add')): ?>
                       <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.refund.gateway'])): ?> selected <?php endif; ?>">
                           <a href="<?php echo e(route('admin.refund.gateway')); ?>"><?php echo e(__('Refund Payment Gateway')); ?></a>
                       </li>
                       <?php endif; ?>
                   </ul>
               </li>
               <?php endif; ?>


                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('notifications-list')): ?>
                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/notification/*')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.notification.all')); ?>"><i class="las la-bell"></i><?php echo e(__('All Notification')); ?></a>
                    </li>
                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/firebase/settings*')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.firebase.settings')); ?>"><i class="las la-bell"></i><?php echo e(__('Firebase Settings')); ?></a>
                    </li>
                <?php endif; ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('slider-settings', 'slider-list')): ?>
                <li class="dashboard__bottom__list__item <?php if(request()->is('admin/slider/*')): ?> active <?php endif; ?>">
                    <a href="<?php echo e(route('admin.slider.add')); ?>"><i class="las la-sliders-h"></i><?php echo e(__('Slider Settings')); ?></a>
                </li>
                <?php endif; ?>

              <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('google-map-settings')): ?>
                <li class="dashboard__bottom__list__item <?php if(request()->is('admin/map-settings/*')): ?> active <?php endif; ?>">
                    <a href="<?php echo e(route('admin.map.settings.page')); ?>"><i class="las la-map"></i><?php echo e(__('Google Map Settings')); ?></a>
                </li>
               <?php endif; ?>

                    <!-- Appearance Settings -->
                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any([
                       'color-settings', 'typography-settings',
                        'typography-single-settings', 'font-add-settings', 'custom-font-delete', 'custom-font-status-change',
                        'media-upload', 'media-upload-delete', '404-page-settings', 'maintains-page-settings'
                    ])): ?>
                        <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/appearance-settings/*')): ?> active open <?php endif; ?>">
                            <a href="javascript:void(0)">
                                <i class="las la-cogs"></i>
                                <span class="icon_title"><?php echo e(__('Appearance Settings')); ?></span>
                            </a>
                            <ul class="submenu <?php if(request()->is('admin/appearance-settings/*')): ?> d-block <?php endif; ?>">
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('menu-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.menu']) || request()->routeIs(['admin.menu.edit'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.menu')); ?>"> <?php echo e(__('Menu Builder')); ?> </a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('widget-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.widget'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.widget')); ?>"> <?php echo e(__('Widget Builder')); ?> </a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('widget-list')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.form'])): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.form')); ?>"> <?php echo e(__('Form Builder')); ?> </a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('media-upload')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/appearance-settings/media-upload/page')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.upload.media.images.page')); ?>"><?php echo e(__('Media Images Manage')); ?></a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('404-page-settings')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/appearance-settings/404-page-manage')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.404.page.settings')); ?>"><?php echo e(__('404 Page Manage')); ?></a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('maintains-page-settings')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/appearance-settings/maintains-page')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.maintains.page.settings')); ?>"><?php echo e(__('Maintain Page Manage')); ?></a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </li>
                    <?php endif; ?>

                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any([
                            'login-register-page-settings', 'user-public-profile-page-settings'
                        ])): ?>
                        <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/page-settings/*')): ?> active open <?php endif; ?>">
                            <a href="javascript:void(0)">
                                <i class="las la-file-alt"></i>
                                <span class="icon_title"><?php echo e(__('Page Settings')); ?></span>
                            </a>
                            <ul class="submenu <?php if(request()->is('admin/page-settings/*')): ?> d-block <?php endif; ?>">
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('service-create-page-settings')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/page-settings/service-create-page/settings')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.service.create.settings')); ?>"><?php echo e(__('Service Create Page Settings')); ?></a>
                                    </li>
                                <?php endif; ?>
                                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-public-profile-page-settings')): ?>
                                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/page-settings/admin-login-page/settings')): ?> selected <?php endif; ?>">
                                        <a href="<?php echo e(route('admin.login.page.settings')); ?>"><?php echo e(__('Admin Login Page Settings')); ?></a>
                                    </li>
                                <?php endif; ?>
                                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('login-register-page-settings')): ?>
                                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/page-settings/register-page')): ?> selected <?php endif; ?>">
                                            <a href="<?php echo e(route('admin.login.register.page.settings')); ?>"><?php echo e(__('Sign In/Sign Up Settings')); ?></a>
                                        </li>
                                    <?php endif; ?>
                            </ul>
                        </li>
                    <?php endif; ?>

                    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['smtp-settings'])): ?>
                    <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/email-settings/*')): ?> active open <?php endif; ?>">
                    <a href="javascript:void(0)"><i class="las la-envelope"></i>
                        <span class="icon_title"><?php echo e(__('Email Settings')); ?></span>
                    </a>
                        <ul class="submenu <?php if(request()->is('admin/email-settings/*')): ?> d-block <?php endif; ?>">
                            <li class="dashboard__bottom__list__item <?php if(request()->is('admin/email-settings/smtp')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.email.smtp.settings')); ?>"><?php echo e(__('SMTP Settings')); ?></a>
                            </li>
                            <li class="dashboard__bottom__list__item <?php if(request()->is('admin/email-settings/all-email-templates')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.email.template.all')); ?>"><?php echo e(__('All Email Templates')); ?></a>
                            </li>
                        </ul>
                    </li>
                    <?php endif; ?>

                 <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['site-identity-settings', 'basic-settings', 'seo-settings', 'scripts-settings',  'sitemap-settings', 'gdpr-settings', 'license-setting', 'software-update-setting', 'cache-settings', 'database-upgrade-setting'
                          ])): ?>
                <li class="dashboard__bottom__list__item has-children <?php if(request()->is('admin/general-settings/*')): ?> active open <?php endif; ?>">
                    <a href="javascript:void(0)"><i class="las la-cog"></i>
                        <span class="icon_title"><?php echo e(__('General Settings')); ?></span>
                    </a>
                    <ul class="submenu <?php if(request()->is('admin/general-settings/*')): ?> d-block <?php endif; ?>">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('reading-settings')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.general.settings.reading'])): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.general.settings.reading')); ?>"> <?php echo e(__('Reading')); ?> </a>
                            </li>
                        <?php endif; ?>
                       <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('site-identity-settings')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/general-settings/site-identity')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.general.site.identity')); ?>"><?php echo e(__('Site Identity')); ?></a>
                        </li>
                        <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('basic-settings')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/general-settings/basic-settings')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.general.basic.settings')); ?>"><?php echo e(__('Basic Settings')); ?></a>
                        </li>
                       <?php endif; ?>
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('seo-settings')): ?>
                            <li class="dashboard__bottom__list__item <?php if(request()->routeIs(['admin.general.settings.seo'])): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('general.settings.seo')); ?>"> <?php echo e(__('Seo Settings')); ?> </a>
                            </li>
                        <?php endif; ?>
                      <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('license-settings')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/general-settings/license-setting')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.general.license.settings')); ?>"><?php echo e(__('Licence Settings')); ?></a>
                        </li>
                       <?php endif; ?>
                      <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('software-update-settings')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/general-settings/software-update-setting')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.general.software.update.settings')); ?>"><?php echo e(__('Check Update')); ?></a>
                        </li>
                     <?php endif; ?>
                     <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('cache-settings')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/general-settings/cache-settings')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.general.cache.settings')); ?>"><?php echo e(__('Cache Settings')); ?></a>
                        </li>
                     <?php endif; ?>
                      <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('database-upgrade-settings')): ?>
                        <li class="dashboard__bottom__list__item <?php if(request()->is('admin/general-settings/database-upgrade')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.general.database.upgrade')); ?>"><?php echo e(__('Database Upgrade')); ?></a>
                        </li>
                     <?php endif; ?>
                    </ul>
                </li>
               <?php endif; ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('languages-list')): ?>
                    <li class="dashboard__bottom__list__item <?php if(request()->is('admin/languages/*') || request()->is('admin/languages')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.languages')); ?>"><i class="las la-language"></i> <span class="icon_title"><?php echo e(__('Languages')); ?></span></a>
                    </li>
                <?php endif; ?>

                <li class="dashboard__bottom__list__item">
                    <a href="<?php echo e(route('admin.logout')); ?>"> <i class="las la-sign-out-alt"></i> <span class="icon_title"><?php echo e(__('Log Out')); ?></span></a>
                </li>
            </ul>
        </div>
    </div>
</div>







<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/backend/partials/sidebar.blade.php ENDPATH**/ ?>