<div class="dashboard__left dashboard-left-content">
    <div class="dashboard__left__main">
        <div class="dashboard__left__close close-bars"><i class="fa-solid fa-times"></i></div>
        
        <!-- Logo Section -->
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

        <!-- Sidebar Search -->
        <div class="dashboard__bottom">
            <div class="sidebar-search mb-4">
                <div class="search-wrapper">
                    <i class="las la-search search-icon"></i>
                    <input class="search-input" type="text" placeholder="<?php echo e(__('Search menu...')); ?>" id="search_sidebarList">
                </div>
            </div>
            
            <!-- Navigation Menu -->
            <ul class="sidebar-menu dashboard-list">
                <!-- Dashboard -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-dashboard')): ?>
                    <li class="sidebar-menu-item <?php if(request()->is('admin/dashboard')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.dashboard')); ?>">
                            <span class="menu-icon"><i class="las la-tachometer-alt"></i></span>
                            <span class="menu-title"><?php echo e(__('Dashboard')); ?></span>
                        </a>
                    </li>
                <?php endif; ?>

                <!-- Service & Product Manage -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-service-list','admin-product-list', 'report-reason-list', 'service-report-list'])): ?>
                    <li class="sidebar-menu-item has-children 
                        <?php if(request()->is('admin/services/*') || request()->is('admin/services/all') ||  
                             request()->is('admin/products/*') || request()->is('admin/products/all')): ?> active open 
                        <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-tools"></i></span>
                            <span class="menu-title"><?php echo e(__('Service & Product')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/services/all') || request()->is('admin/services/add') || request()->is('admin/services/admin-edit-service/*')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.all.services')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Services')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-product-list')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/products/all') || request()->is('admin/products/add') || request()->is('admin/products/admin-edit-product/*')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.all.products')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Products')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/service/schedule/list')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.schedule.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Schedule Manage')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Outlet Location Manage -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-outletAddress-all','admin-outletAddress-add'])): ?>
                    <li class="sidebar-menu-item has-children 
                        <?php if(request()->is('admin/outletAddress/*') || request()->is('admin/outletAddress/all') || request()->is('admin/outletAddress/add')): ?> active open 
                        <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-warehouse"></i></span>
                            <span class="menu-title"><?php echo e(__('Outlet Locations')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outletAddress-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.outletAddress.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.outletAddress.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Outlet Address')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-outletAddress-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.outletAddress.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.outletAddress.add')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New Outlet')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Orders Manage -->
                <li class="sidebar-menu-item has-children <?php if(request()->is('admin/orders/*')): ?> active open <?php endif; ?>">
                    <a href="javascript:void(0)" class="menu-toggle">
                        <span class="menu-icon"><i class="las la-clipboard-list"></i></span>
                        <span class="menu-title"><?php echo e(__('Orders')); ?></span>
                        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                    </a>
                    <ul class="submenu">
                        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-service-list')): ?>
                            <li class="submenu-item <?php if(Route::currentRouteName() == 'admin.service.all.orders' || request()->is('admin/orders/details/*') || request()->is('admin/orders/sub-order/details/*')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.service.all.orders')); ?>">
                                    <span class="submenu-dot"></span>
                                    <?php echo e(__('All Orders')); ?>

                                </a>
                            </li>
                            <li class="submenu-item <?php if(Route::currentRouteName() == 'admin.redunded-order.list'): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.redunded-order.list')); ?>">
                                    <span class="submenu-dot"></span>
                                    <?php echo e(__('Refunded Orders')); ?>

                                </a>
                            </li>
                            <li class="submenu-item <?php if(request()->is('admin/orders/settings')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.order.settings')); ?>">
                                    <span class="submenu-dot"></span>
                                    <?php echo e(__('Order Settings')); ?>

                                </a>
                            </li>
                            <li class="submenu-item <?php if(request()->is('admin/orders/order-cancellation-policy')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.order.cancellation-policy')); ?>">
                                    <span class="submenu-dot"></span>
                                    <?php echo e(__('Cancellation Policy')); ?>

                                </a>
                            </li>
                        <?php endif; ?>
                        <li class="submenu-item <?php if(request()->is('admin/orders/after-booking-steps')): ?> selected <?php endif; ?>">
                            <a href="<?php echo e(route('admin.order.after-booking-steps')); ?>">
                                <span class="submenu-dot"></span>
                                <?php echo e(__('After Booking Steps')); ?>

                            </a>
                        </li>
                    </ul>
                </li>

                <!-- User Manage -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['user-list', 'user-deactivated-list', 'user-verify-status', 'user-add'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/user*') || request()->is('admin/user/profile/*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-users"></i></span>
                            <span class="menu-title"><?php echo e(__('Users')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.user.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.user.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Users')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-deactivated-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.user.restore'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.user.restore')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Trash List')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.user.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.user.add')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New User')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Categories -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['category-list', 'category-add'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/category/*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-tags"></i></span>
                            <span class="menu-title"><?php echo e(__('Categories')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('category-list')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/category/index')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.category')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Categories')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('category-add')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/category/add-new-category')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.category.new')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New Category')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Brands -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-brand-list', 'admin-brand-add'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/brand*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-trademark"></i></span>
                            <span class="menu-title"><?php echo e(__('Brands')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-brand-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.brand.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.brand.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Brands')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-brand-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.brand.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.brand.add')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New Brand')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Cars -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-car-list', 'admin-car-add'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/car*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-car"></i></span>
                            <span class="menu-title"><?php echo e(__('Cars')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-car-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.car.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.car.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Cars')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-car-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.car.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.car.add')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New Car')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Engines -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-engine-list','admin-engine-add'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/engine*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-cogs"></i></span>
                            <span class="menu-title"><?php echo e(__('Engines')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-engine-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.engine.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.engine.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Engines')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-engine-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.engine.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.engine.add')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New Engine')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Fuels -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin-fual-list','admin-fual-add'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/fual*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-gas-pump"></i></span>
                            <span class="menu-title"><?php echo e(__('Fuels')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-fual-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.fual.all'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.fual.all')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('All Fuels')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-fual-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.fual.add'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.fual.add')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Add New Fuel')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Module Includes -->
                <?php echo $__env->make('backend.partials.module-list', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

                <!-- Refund -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any('refund-payment-gateway-list', 'refund-settings-view', 'refund-payment-gateway-add', 'refund-payment-gateway-edit', 'refund-payment-status-change', 'refund-payment-gateway-delete', 'refund-list', 'refund-status-change', 'refund-fee-settings-view')): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/refund*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-undo-alt"></i></span>
                            <span class="menu-title"><?php echo e(__('Refund')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('refund-payment-gateway-add')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.refund.gateway'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.refund.gateway')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Refund Gateway')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Notifications -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('notifications-list')): ?>
                    <li class="sidebar-menu-item <?php if(request()->is('admin/notification/*')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.notification.all')); ?>">
                            <span class="menu-icon"><i class="las la-bell"></i></span>
                            <span class="menu-title"><?php echo e(__('Notifications')); ?></span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item <?php if(request()->is('admin/firebase/settings*')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.firebase.settings')); ?>">
                            <span class="menu-icon"><i class="las la-fire"></i></span>
                            <span class="menu-title"><?php echo e(__('Firebase Settings')); ?></span>
                        </a>
                    </li>
                <?php endif; ?>

                <!-- Slider -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('slider-settings', 'slider-list')): ?>
                    <li class="sidebar-menu-item <?php if(request()->is('admin/slider/*')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.slider.add')); ?>">
                            <span class="menu-icon"><i class="las la-sliders-h"></i></span>
                            <span class="menu-title"><?php echo e(__('Slider Settings')); ?></span>
                        </a>
                    </li>
                <?php endif; ?>

                <!-- Google Map -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('google-map-settings')): ?>
                    <li class="sidebar-menu-item <?php if(request()->is('admin/map-settings/*')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.map.settings.page')); ?>">
                            <span class="menu-icon"><i class="las la-map"></i></span>
                            <span class="menu-title"><?php echo e(__('Google Map')); ?></span>
                        </a>
                    </li>
                <?php endif; ?>

                <!-- Appearance Settings -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['color-settings', 'typography-settings', 'typography-single-settings', 'font-add-settings', 'custom-font-delete', 'custom-font-status-change', 'media-upload', 'media-upload-delete', '404-page-settings', 'maintains-page-settings'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/appearance-settings/*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-paint-roller"></i></span>
                            <span class="menu-title"><?php echo e(__('Appearance')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('menu-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.menu']) || request()->routeIs(['admin.menu.edit'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.menu')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Menu Builder')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('widget-list')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.widget'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.widget')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Widget Builder')); ?>

                                    </a>
                                </li>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.form'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.form')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Form Builder')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('media-upload')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/appearance-settings/media-upload/page')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.upload.media.images.page')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Media Images')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('404-page-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/appearance-settings/404-page-manage')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.404.page.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('404 Page')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('maintains-page-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/appearance-settings/maintains-page')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.maintains.page.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Maintenance Page')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Page Settings -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['login-register-page-settings', 'user-public-profile-page-settings'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/page-settings/*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-file-alt"></i></span>
                            <span class="menu-title"><?php echo e(__('Page Settings')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('service-create-page-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/page-settings/service-create-page/settings')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.service.create.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Service Create Page')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('user-public-profile-page-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/page-settings/admin-login-page/settings')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.login.page.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Admin Login Page')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('login-register-page-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/page-settings/register-page')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.login.register.page.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Sign In/Sign Up')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Email Settings -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['smtp-settings'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/email-settings/*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-envelope"></i></span>
                            <span class="menu-title"><?php echo e(__('Email')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <li class="submenu-item <?php if(request()->is('admin/email-settings/smtp')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.email.smtp.settings')); ?>">
                                    <span class="submenu-dot"></span>
                                    <?php echo e(__('SMTP Settings')); ?>

                                </a>
                            </li>
                            <li class="submenu-item <?php if(request()->is('admin/email-settings/all-email-templates')): ?> selected <?php endif; ?>">
                                <a href="<?php echo e(route('admin.email.template.all')); ?>">
                                    <span class="submenu-dot"></span>
                                    <?php echo e(__('Email Templates')); ?>

                                </a>
                            </li>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- General Settings -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['site-identity-settings', 'basic-settings', 'seo-settings', 'scripts-settings', 'sitemap-settings', 'gdpr-settings', 'license-setting', 'software-update-setting', 'cache-settings', 'database-upgrade-setting'])): ?>
                    <li class="sidebar-menu-item has-children <?php if(request()->is('admin/general-settings/*')): ?> active open <?php endif; ?>">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-cog"></i></span>
                            <span class="menu-title"><?php echo e(__('General')); ?></span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('reading-settings')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.general.settings.reading'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.settings.reading')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Reading')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('site-identity-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/general-settings/site-identity')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.site.identity')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Site Identity')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('basic-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/general-settings/basic-settings')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.basic.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Basic Settings')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('seo-settings')): ?>
                                <li class="submenu-item <?php if(request()->routeIs(['admin.general.settings.seo'])): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('general.settings.seo')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('SEO Settings')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('license-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/general-settings/license-setting')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.license.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('License Settings')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('software-update-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/general-settings/software-update-setting')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.software.update.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Check Update')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('cache-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/general-settings/cache-settings')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.cache.settings')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Cache Settings')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('database-upgrade-settings')): ?>
                                <li class="submenu-item <?php if(request()->is('admin/general-settings/database-upgrade')): ?> selected <?php endif; ?>">
                                    <a href="<?php echo e(route('admin.general.database.upgrade')); ?>">
                                        <span class="submenu-dot"></span>
                                        <?php echo e(__('Database Upgrade')); ?>

                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </li>
                <?php endif; ?>

                <!-- Languages -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('languages-list')): ?>
                    <li class="sidebar-menu-item <?php if(request()->is('admin/languages/*') || request()->is('admin/languages')): ?> active <?php endif; ?>">
                        <a href="<?php echo e(route('admin.languages')); ?>">
                            <span class="menu-icon"><i class="las la-language"></i></span>
                            <span class="menu-title"><?php echo e(__('Languages')); ?></span>
                        </a>
                    </li>
                <?php endif; ?>

                <!-- Logout -->
                <li class="sidebar-menu-item logout-item">
                    <a href="<?php echo e(route('admin.logout')); ?>">
                        <span class="menu-icon"><i class="las la-sign-out-alt"></i></span>
                        <span class="menu-title"><?php echo e(__('Log Out')); ?></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<style>
/* ===== MODERN RED SIDEBAR ===== */
.dashboard-left-content {
    width: 280px;
    background: linear-gradient(145deg, #ffffff 0%, #fff8f8 100%);
    border-right: 1px solid rgba(227, 27, 35, 0.06);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 4px 0 20px rgba(227, 27, 35, 0.03);
}

/* ===== Scrollbar ===== */
.dashboard-left-content::-webkit-scrollbar {
    width: 4px;
}

.dashboard-left-content::-webkit-scrollbar-track {
    background: #fef2f2;
}

.dashboard-left-content::-webkit-scrollbar-thumb {
    background: #e31b23;
    border-radius: 4px;
    opacity: 0.5;
}

.dashboard-left-content::-webkit-scrollbar-thumb:hover {
    background: #b11218;
}

/* ===== Logo Section ===== */
.dashboard__top {
    padding: 24px 24px 8px;
}

.dashboard__top__logo img {
    max-height: 45px;
    width: auto;
    object-fit: contain;
}

/* ===== Search ===== */
.sidebar-search {
    padding: 0 20px;
    margin-bottom: 24px;
}

.search-wrapper {
    position: relative;
    width: 100%;
}

.search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #a0a6a8;
    font-size: 16px;
    transition: color 0.2s ease;
}

.search-input {
    width: 100%;
    padding: 12px 16px 12px 44px;
    background: #fef2f2;
    border: none;
    border-radius: 40px;
    font-size: 14px;
    color: #17191a;
    transition: all 0.2s ease;
}

.search-input:focus {
    outline: none;
    background: #ffe3e3;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}

.search-input:focus + .search-icon {
    color: #e31b23;
}

.search-input::placeholder {
    color: #9ca3af;
    font-size: 13px;
}

/* ===== Sidebar Menu ===== */
.sidebar-menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-menu-item {
    margin: 4px 12px;
    border-radius: 12px;
    transition: all 0.2s ease;
}

.sidebar-menu-item > a {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    color: #4b5563;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.2s ease;
    position: relative;
}

.sidebar-menu-item > a .menu-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    color: #6b7280;
    font-size: 18px;
    transition: all 0.2s ease;
}

.sidebar-menu-item > a .menu-title {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sidebar-menu-item > a .menu-arrow {
    margin-left: 8px;
    font-size: 14px;
    color: #9ca3af;
    transition: transform 0.3s ease;
}

/* ===== Hover State ===== */
.sidebar-menu-item:not(.active):hover > a {
    background: #fef2f2;
    color: #e31b23;
}

.sidebar-menu-item:not(.active):hover > a .menu-icon,
.sidebar-menu-item:not(.active):hover > a .menu-arrow {
    color: #e31b23;
}

/* ===== Active State ===== */
.sidebar-menu-item.active > a {
    background: linear-gradient(145deg, #e31b23, #c41e24);
    color: white;
    box-shadow: 0 6px 12px rgba(227, 27, 35, 0.2);
}

.sidebar-menu-item.active > a .menu-icon,
.sidebar-menu-item.active > a .menu-arrow {
    color: white;
}

/* ===== Submenu ===== */
.sidebar-menu-item.has-children.open .menu-arrow i {
    transform: rotate(180deg);
}

.submenu {
    list-style: none;
    padding: 0;
    margin: 4px 0 8px 32px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.sidebar-menu-item.open .submenu {
    max-height: 500px;
}

.submenu-item {
    margin: 2px 0;
}

.submenu-item a {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    color: #6b7280;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    border-radius: 10px;
    transition: all 0.2s ease;
}

.submenu-dot {
    width: 6px;
    height: 6px;
    background: #d1d5db;
    border-radius: 50%;
    margin-right: 12px;
    transition: all 0.2s ease;
}

.submenu-item:hover a {
    color: #e31b23;
    background: #fef2f2;
}

.submenu-item:hover .submenu-dot {
    background: #e31b23;
    transform: scale(1.2);
}

.submenu-item.selected a {
    color: #e31b23;
    font-weight: 500;
    background: #ffe3e3;
}

.submenu-item.selected .submenu-dot {
    background: #e31b23;
    box-shadow: 0 0 0 2px rgba(227, 27, 35, 0.2);
}

/* ===== Module Items ===== */
.sidebar-menu-item:has(> a[href*="module"]) > a .menu-icon {
    color: #e31b23;
}

/* ===== Logout Item ===== */
.logout-item {
    margin-top: 20px;
    border-top: 1px solid rgba(227, 27, 35, 0.08);
    padding-top: 12px;
}

.logout-item > a {
    color: #e31b23;
}

.logout-item > a .menu-icon {
    color: #e31b23;
}

.logout-item:hover > a {
    background: #fee2e2;
}

/* ===== Close Button ===== */
.dashboard__left__close {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: #fef2f2;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #e31b23;
    transition: all 0.2s ease;
}

.dashboard__left__close:hover {
    background: #e31b23;
    color: white;
}

/* ===== Responsive ===== */
@media (max-width: 1200px) {
    .dashboard-left-content {
        width: 260px;
    }
}

@media (max-width: 992px) {
    .dashboard-left-content {
        left: -280px;
        box-shadow: none;
    }
    
    .dashboard-left-content.show {
        left: 0;
        box-shadow: 4px 0 30px rgba(0,0,0,0.1);
    }
    
    .dashboard__left__close {
        display: flex;
    }
}

@media (max-width: 768px) {
    .dashboard__top {
        padding: 20px 16px;
    }
    
    .sidebar-search {
        padding: 0 16px;
    }
    
    .sidebar-menu-item > a {
        padding: 10px 12px;
    }
    
    .submenu {
        margin-left: 24px;
    }
}

/* ===== Animation ===== */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.sidebar-menu-item {
    animation: slideIn 0.3s ease;
}

/* ===== Search Highlight ===== */
.search-highlight {
    background: rgba(227, 27, 35, 0.1);
    color: #e31b23;
    font-weight: 600;
}

/* ===== Compact Mode ===== */
.sidebar-compact .dashboard-left-content {
    width: 80px;
}

.sidebar-compact .dashboard-left-content .menu-title,
.sidebar-compact .dashboard-left-content .menu-arrow,
.sidebar-compact .dashboard-left-content .submenu,
.sidebar-compact .dashboard-left-content .search-input,
.sidebar-compact .dashboard-left-content .dashboard__top__logo span {
    display: none;
}

.sidebar-compact .dashboard-left-content .sidebar-menu-item > a {
    justify-content: center;
    padding: 14px;
}

.sidebar-compact .dashboard-left-content .menu-icon {
    margin-right: 0;
    font-size: 20px;
}

.sidebar-compact .dashboard-left-content:hover {
    width: 280px;
}

.sidebar-compact .dashboard-left-content:hover .menu-title,
.sidebar-compact .dashboard-left-content:hover .menu-arrow,
.sidebar-compact .dashboard-left-content:hover .search-input {
    display: block;
}

.sidebar-compact .dashboard-left-content:hover .sidebar-menu-item > a {
    justify-content: flex-start;
    padding: 12px 16px;
}

.sidebar-compact .dashboard-left-content:hover .menu-icon {
    margin-right: 12px;
    font-size: 18px;
}
</style>

<script>
(function($) {
    "use strict";

    $(document).ready(function() {
        // Toggle submenu
        $('.menu-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.sidebar-menu-item').toggleClass('open');
        });

        // Sidebar search
        $('#search_sidebarList').on('keyup', function() {
            let value = $(this).val().toLowerCase();
            
            $('.sidebar-menu > .sidebar-menu-item').each(function() {
                let menuText = $(this).find('> a .menu-title').text().toLowerCase();
                let submenuText = $(this).find('.submenu-item').text().toLowerCase();
                
                if (menuText.includes(value) || submenuText.includes(value) || value === '') {
                    $(this).show();
                    
                    // Highlight matching text
                    if (value !== '') {
                        let title = $(this).find('> a .menu-title');
                        let text = title.text();
                        let regex = new RegExp(value, 'gi');
                        title.html(text.replace(regex, '<span class="search-highlight">$&</span>'));
                    }
                } else {
                    $(this).hide();
                }
            });
        });

        // Open active menu items by default
        $('.sidebar-menu-item.active').each(function() {
            $(this).addClass('open');
            
            // Open parent if any
            let parent = $(this).closest('.has-children');
            if (parent.length) {
                parent.addClass('open');
            }
        });

        // Close sidebar on mobile when clicking outside
        $(document).on('click', function(e) {
            if ($(window).width() <= 992) {
                if (!$(e.target).closest('.dashboard-left-content').length && !$(e.target).closest('.bars').length) {
                    $('.dashboard-left-content').removeClass('show');
                }
            }
        });

        // Toggle sidebar on mobile
        $('.bars').on('click', function() {
            $('.dashboard-left-content').toggleClass('show');
        });

        // Close sidebar close button
        $('.close-bars').on('click', function() {
            $('.dashboard-left-content').removeClass('show');
        });

        // Prevent click inside sidebar from closing it
        $('.dashboard-left-content').on('click', function(e) {
            e.stopPropagation();
        });

        // Compact mode toggle (optional)
        $('#toggleSidebarCompact').on('click', function() {
            $('body').toggleClass('sidebar-compact');
        });
    });

})(jQuery);
</script>

                <!--Review List -->
                


               

    


                

                    



                    <!-- Pages Manage -->
                    

                    <!-- Wallet Management -->
                    


                

             <?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/partials/sidebar.blade.php ENDPATH**/ ?>