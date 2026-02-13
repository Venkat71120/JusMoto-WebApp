<div class="dashboard__left dashboard-left-content">
    <div class="dashboard__left__main">
        <div class="dashboard__left__close close-bars"><i class="fa-solid fa-times"></i></div>
        
        <!-- Logo Section -->
        <div class="dashboard__top">
            <div class="dashboard__top__logo mb-4">
                <a href="{{route('admin.dashboard')}}" class="dashboard-logo-style">
                    @if(get_static_option('site_admin_dark_mode') == 'on')
                        {!! render_image_markup_by_attachment_id(get_static_option('site_white_logo')) !!}
                    @else
                        {!! render_image_markup_by_attachment_id(get_static_option('site_logo')) !!}
                    @endif
                </a>
            </div>
        </div>

        <!-- Sidebar Search -->
        <div class="dashboard__bottom">
            <div class="sidebar-search mb-4">
                <div class="search-wrapper">
                    <i class="las la-search search-icon"></i>
                    <input class="search-input" type="text" placeholder="{{ __('Search menu...') }}" id="search_sidebarList">
                </div>
            </div>
            
            <!-- Navigation Menu -->
            <ul class="sidebar-menu dashboard-list">
                <!-- Dashboard -->
                @can('admin-dashboard')
                    <li class="sidebar-menu-item @if(request()->is('admin/dashboard')) active @endif">
                        <a href="{{route('admin.dashboard')}}">
                            <span class="menu-icon"><i class="las la-tachometer-alt"></i></span>
                            <span class="menu-title">{{ __('Dashboard') }}</span>
                        </a>
                    </li>
                @endcan

                <!-- Service & Product Manage -->
                @canany(['admin-service-list','admin-product-list', 'report-reason-list', 'service-report-list'])
                    <li class="sidebar-menu-item has-children 
                        @if (request()->is('admin/services/*') || request()->is('admin/services/all') ||  
                             request()->is('admin/products/*') || request()->is('admin/products/all')) active open 
                        @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-tools"></i></span>
                            <span class="menu-title">{{ __('Service & Product') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('admin-service-list')
                                <li class="submenu-item @if (request()->is('admin/services/all') || request()->is('admin/services/add') || request()->is('admin/services/admin-edit-service/*')) selected @endif">
                                    <a href="{{ route('admin.all.services') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Services') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-product-list')
                                <li class="submenu-item @if (request()->is('admin/products/all') || request()->is('admin/products/add') || request()->is('admin/products/admin-edit-product/*')) selected @endif">
                                    <a href="{{ route('admin.all.products') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Products') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-service-list')
                                <li class="submenu-item @if(request()->is('admin/service/schedule/list')) selected @endif">
                                    <a href="{{ route('admin.schedule.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Schedule Manage') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Outlet Location Manage -->
                @canany(['admin-outletAddress-all','admin-outletAddress-add'])
                    <li class="sidebar-menu-item has-children 
                        @if (request()->is('admin/outletAddress/*') || request()->is('admin/outletAddress/all') || request()->is('admin/outletAddress/add')) active open 
                        @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-warehouse"></i></span>
                            <span class="menu-title">{{ __('Outlet Locations') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('admin-outletAddress-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.outletAddress.all'])) selected @endif">
                                    <a href="{{ route('admin.outletAddress.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Outlet Address') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-outletAddress-add')
                                <li class="submenu-item @if (request()->routeIs(['admin.outletAddress.add'])) selected @endif">
                                    <a href="{{ route('admin.outletAddress.add') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New Outlet') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Orders Manage -->
                <li class="sidebar-menu-item has-children @if (request()->is('admin/orders/*')) active open @endif">
                    <a href="javascript:void(0)" class="menu-toggle">
                        <span class="menu-icon"><i class="las la-clipboard-list"></i></span>
                        <span class="menu-title">{{ __('Orders') }}</span>
                        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                    </a>
                    <ul class="submenu">
                        @can('admin-service-list')
                            <li class="submenu-item @if(Route::currentRouteName() == 'admin.service.all.orders' || request()->is('admin/orders/details/*') || request()->is('admin/orders/sub-order/details/*')) selected @endif">
                                <a href="{{ route('admin.service.all.orders') }}">
                                    <span class="submenu-dot"></span>
                                    {{ __('All Orders') }}
                                </a>
                            </li>
                            <li class="submenu-item @if(Route::currentRouteName() == 'admin.redunded-order.list') selected @endif">
                                <a href="{{ route('admin.redunded-order.list') }}">
                                    <span class="submenu-dot"></span>
                                    {{ __('Refunded Orders') }}
                                </a>
                            </li>
                            <li class="submenu-item @if(request()->is('admin/orders/settings')) selected @endif">
                                <a href="{{ route('admin.order.settings') }}">
                                    <span class="submenu-dot"></span>
                                    {{ __('Order Settings') }}
                                </a>
                            </li>
                            <li class="submenu-item @if(request()->is('admin/orders/order-cancellation-policy')) selected @endif">
                                <a href="{{ route('admin.order.cancellation-policy') }}">
                                    <span class="submenu-dot"></span>
                                    {{ __('Cancellation Policy') }}
                                </a>
                            </li>
                        @endcan
                        <li class="submenu-item @if(request()->is('admin/orders/after-booking-steps')) selected @endif">
                            <a href="{{ route('admin.order.after-booking-steps') }}">
                                <span class="submenu-dot"></span>
                                {{ __('After Booking Steps') }}
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- User Manage -->
                @canany(['user-list', 'user-deactivated-list', 'user-verify-status', 'user-add'])
                    <li class="sidebar-menu-item has-children @if (request()->is('admin/user*') || request()->is('admin/user/profile/*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-users"></i></span>
                            <span class="menu-title">{{ __('Users') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('user-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.user.all'])) selected @endif">
                                    <a href="{{ route('admin.user.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Users') }}
                                    </a>
                                </li>
                            @endcan
                            @can('user-deactivated-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.user.restore'])) selected @endif">
                                    <a href="{{ route('admin.user.restore') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Trash List') }}
                                    </a>
                                </li>
                            @endcan
                            @can('user-add')
                                <li class="submenu-item @if (request()->routeIs(['admin.user.add'])) selected @endif">
                                    <a href="{{ route('admin.user.add') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New User') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Categories -->
                @canany(['category-list', 'category-add'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/category/*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-tags"></i></span>
                            <span class="menu-title">{{ __('Categories') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('category-list')
                                <li class="submenu-item @if(request()->is('admin/category/index')) selected @endif">
                                    <a href="{{ route('admin.category') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Categories') }}
                                    </a>
                                </li>
                            @endcan
                            @can('category-add')
                                <li class="submenu-item @if(request()->is('admin/category/add-new-category')) selected @endif">
                                    <a href="{{ route('admin.category.new') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New Category') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Brands -->
                @canany(['admin-brand-list', 'admin-brand-add'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/brand*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-trademark"></i></span>
                            <span class="menu-title">{{ __('Brands') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('admin-brand-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.brand.all'])) selected @endif">
                                    <a href="{{ route('admin.brand.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Brands') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-brand-add')
                                <li class="submenu-item @if (request()->routeIs(['admin.brand.add'])) selected @endif">
                                    <a href="{{ route('admin.brand.add') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New Brand') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Cars -->
                @canany(['admin-car-list', 'admin-car-add'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/car*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-car"></i></span>
                            <span class="menu-title">{{ __('Cars') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('admin-car-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.car.all'])) selected @endif">
                                    <a href="{{ route('admin.car.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Cars') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-car-add')
                                <li class="submenu-item @if (request()->routeIs(['admin.car.add'])) selected @endif">
                                    <a href="{{ route('admin.car.add') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New Car') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Engines -->
                @canany(['admin-engine-list','admin-engine-add'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/engine*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-cogs"></i></span>
                            <span class="menu-title">{{ __('Engines') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('admin-engine-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.engine.all'])) selected @endif">
                                    <a href="{{ route('admin.engine.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Engines') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-engine-add')
                                <li class="submenu-item @if (request()->routeIs(['admin.engine.add'])) selected @endif">
                                    <a href="{{ route('admin.engine.add') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New Engine') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Fuels -->
                @canany(['admin-fual-list','admin-fual-add'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/fual*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-gas-pump"></i></span>
                            <span class="menu-title">{{ __('Fuels') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('admin-fual-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.fual.all'])) selected @endif">
                                    <a href="{{ route('admin.fual.all') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('All Fuels') }}
                                    </a>
                                </li>
                            @endcan
                            @can('admin-fual-add')
                                <li class="submenu-item @if (request()->routeIs(['admin.fual.add'])) selected @endif">
                                    <a href="{{ route('admin.fual.add') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Add New Fuel') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Module Includes -->
                @include('backend.partials.module-list')

                <!-- Refund -->
                @canany('refund-payment-gateway-list', 'refund-settings-view', 'refund-payment-gateway-add', 'refund-payment-gateway-edit', 'refund-payment-status-change', 'refund-payment-gateway-delete', 'refund-list', 'refund-status-change', 'refund-fee-settings-view')
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/refund*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-undo-alt"></i></span>
                            <span class="menu-title">{{ __('Refund') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('refund-payment-gateway-add')
                                <li class="submenu-item @if(request()->routeIs(['admin.refund.gateway'])) selected @endif">
                                    <a href="{{ route('admin.refund.gateway') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Refund Gateway') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Notifications -->
                @can('notifications-list')
                    <li class="sidebar-menu-item @if(request()->is('admin/notification/*')) active @endif">
                        <a href="{{ route('admin.notification.all') }}">
                            <span class="menu-icon"><i class="las la-bell"></i></span>
                            <span class="menu-title">{{ __('Notifications') }}</span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item @if(request()->is('admin/firebase/settings*')) active @endif">
                        <a href="{{ route('admin.firebase.settings') }}">
                            <span class="menu-icon"><i class="las la-fire"></i></span>
                            <span class="menu-title">{{ __('Firebase Settings') }}</span>
                        </a>
                    </li>
                @endcan

                <!-- Slider -->
                @can('slider-settings', 'slider-list')
                    <li class="sidebar-menu-item @if(request()->is('admin/slider/*')) active @endif">
                        <a href="{{ route('admin.slider.add') }}">
                            <span class="menu-icon"><i class="las la-sliders-h"></i></span>
                            <span class="menu-title">{{ __('Slider Settings') }}</span>
                        </a>
                    </li>
                @endcan

                <!-- Google Map -->
                @can('google-map-settings')
                    <li class="sidebar-menu-item @if(request()->is('admin/map-settings/*')) active @endif">
                        <a href="{{ route('admin.map.settings.page') }}">
                            <span class="menu-icon"><i class="las la-map"></i></span>
                            <span class="menu-title">{{ __('Google Map') }}</span>
                        </a>
                    </li>
                @endcan

                <!-- Appearance Settings -->
                @canany(['color-settings', 'typography-settings', 'typography-single-settings', 'font-add-settings', 'custom-font-delete', 'custom-font-status-change', 'media-upload', 'media-upload-delete', '404-page-settings', 'maintains-page-settings'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/appearance-settings/*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-paint-roller"></i></span>
                            <span class="menu-title">{{ __('Appearance') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('menu-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.menu']) || request()->routeIs(['admin.menu.edit'])) selected @endif">
                                    <a href="{{ route('admin.menu') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Menu Builder') }}
                                    </a>
                                </li>
                            @endcan
                            @can('widget-list')
                                <li class="submenu-item @if (request()->routeIs(['admin.widget'])) selected @endif">
                                    <a href="{{ route('admin.widget') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Widget Builder') }}
                                    </a>
                                </li>
                                <li class="submenu-item @if (request()->routeIs(['admin.form'])) selected @endif">
                                    <a href="{{ route('admin.form') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Form Builder') }}
                                    </a>
                                </li>
                            @endcan
                            @can('media-upload')
                                <li class="submenu-item @if(request()->is('admin/appearance-settings/media-upload/page')) selected @endif">
                                    <a href="{{ route('admin.upload.media.images.page') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Media Images') }}
                                    </a>
                                </li>
                            @endcan
                            @can('404-page-settings')
                                <li class="submenu-item @if(request()->is('admin/appearance-settings/404-page-manage')) selected @endif">
                                    <a href="{{ route('admin.404.page.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('404 Page') }}
                                    </a>
                                </li>
                            @endcan
                            @can('maintains-page-settings')
                                <li class="submenu-item @if(request()->is('admin/appearance-settings/maintains-page')) selected @endif">
                                    <a href="{{ route('admin.maintains.page.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Maintenance Page') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Page Settings -->
                @canany(['login-register-page-settings', 'user-public-profile-page-settings'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/page-settings/*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-file-alt"></i></span>
                            <span class="menu-title">{{ __('Page Settings') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('service-create-page-settings')
                                <li class="submenu-item @if(request()->is('admin/page-settings/service-create-page/settings')) selected @endif">
                                    <a href="{{ route('admin.service.create.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Service Create Page') }}
                                    </a>
                                </li>
                            @endcan
                            @can('user-public-profile-page-settings')
                                <li class="submenu-item @if(request()->is('admin/page-settings/admin-login-page/settings')) selected @endif">
                                    <a href="{{ route('admin.login.page.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Admin Login Page') }}
                                    </a>
                                </li>
                            @endcan
                            @can('login-register-page-settings')
                                <li class="submenu-item @if(request()->is('admin/page-settings/register-page')) selected @endif">
                                    <a href="{{ route('admin.login.register.page.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Sign In/Sign Up') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Email Settings -->
                @canany(['smtp-settings'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/email-settings/*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-envelope"></i></span>
                            <span class="menu-title">{{ __('Email') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            <li class="submenu-item @if(request()->is('admin/email-settings/smtp')) selected @endif">
                                <a href="{{ route('admin.email.smtp.settings') }}">
                                    <span class="submenu-dot"></span>
                                    {{ __('SMTP Settings') }}
                                </a>
                            </li>
                            <li class="submenu-item @if(request()->is('admin/email-settings/all-email-templates')) selected @endif">
                                <a href="{{ route('admin.email.template.all') }}">
                                    <span class="submenu-dot"></span>
                                    {{ __('Email Templates') }}
                                </a>
                            </li>
                        </ul>
                    </li>
                @endcanany

                <!-- General Settings -->
                @canany(['site-identity-settings', 'basic-settings', 'seo-settings', 'scripts-settings', 'sitemap-settings', 'gdpr-settings', 'license-setting', 'software-update-setting', 'cache-settings', 'database-upgrade-setting'])
                    <li class="sidebar-menu-item has-children @if(request()->is('admin/general-settings/*')) active open @endif">
                        <a href="javascript:void(0)" class="menu-toggle">
                            <span class="menu-icon"><i class="las la-cog"></i></span>
                            <span class="menu-title">{{ __('General') }}</span>
                            <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                        </a>
                        <ul class="submenu">
                            @can('reading-settings')
                                <li class="submenu-item @if (request()->routeIs(['admin.general.settings.reading'])) selected @endif">
                                    <a href="{{ route('admin.general.settings.reading') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Reading') }}
                                    </a>
                                </li>
                            @endcan
                            @can('site-identity-settings')
                                <li class="submenu-item @if(request()->is('admin/general-settings/site-identity')) selected @endif">
                                    <a href="{{ route('admin.general.site.identity') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Site Identity') }}
                                    </a>
                                </li>
                            @endcan
                            @can('basic-settings')
                                <li class="submenu-item @if(request()->is('admin/general-settings/basic-settings')) selected @endif">
                                    <a href="{{ route('admin.general.basic.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Basic Settings') }}
                                    </a>
                                </li>
                            @endcan
                            @can('seo-settings')
                                <li class="submenu-item @if (request()->routeIs(['admin.general.settings.seo'])) selected @endif">
                                    <a href="{{ route('general.settings.seo') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('SEO Settings') }}
                                    </a>
                                </li>
                            @endcan
                            @can('license-settings')
                                <li class="submenu-item @if(request()->is('admin/general-settings/license-setting')) selected @endif">
                                    <a href="{{ route('admin.general.license.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('License Settings') }}
                                    </a>
                                </li>
                            @endcan
                            @can('software-update-settings')
                                <li class="submenu-item @if(request()->is('admin/general-settings/software-update-setting')) selected @endif">
                                    <a href="{{ route('admin.general.software.update.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Check Update') }}
                                    </a>
                                </li>
                            @endcan
                            @can('cache-settings')
                                <li class="submenu-item @if(request()->is('admin/general-settings/cache-settings')) selected @endif">
                                    <a href="{{ route('admin.general.cache.settings') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Cache Settings') }}
                                    </a>
                                </li>
                            @endcan
                            @can('database-upgrade-settings')
                                <li class="submenu-item @if(request()->is('admin/general-settings/database-upgrade')) selected @endif">
                                    <a href="{{ route('admin.general.database.upgrade') }}">
                                        <span class="submenu-dot"></span>
                                        {{ __('Database Upgrade') }}
                                    </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

                <!-- Languages -->
                @can('languages-list')
                    <li class="sidebar-menu-item @if(request()->is('admin/languages/*') || request()->is('admin/languages')) active @endif">
                        <a href="{{ route('admin.languages') }}">
                            <span class="menu-icon"><i class="las la-language"></i></span>
                            <span class="menu-title">{{ __('Languages') }}</span>
                        </a>
                    </li>
                @endcan

                <!-- Logout -->
                <li class="sidebar-menu-item logout-item">
                    <a href="{{ route('admin.logout') }}">
                        <span class="menu-icon"><i class="las la-sign-out-alt"></i></span>
                        <span class="menu-title">{{ __('Log Out') }}</span>
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
    max-height: 85px;
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
                {{-- @canany(['review-list'])
                <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/review/*')) active open @endif">
                    <a href="javascript:void(0)"><i class="las la-th-list"></i>
                        <span class="icon_title">{{ __('Reviews List') }}</span>
                    </a>
                    <ul class="submenu @if(request()->is('admin/review/*')) d-block @endif">
                        @can('review-list')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/review/all')) selected @endif">
                            <a href="{{ route('admin.review.all') }}">{{ __('All Reviews') }}</a>
                        </li>
                        @endcan
                    </ul>
                </li>
               @endcanany --}}


               {{-- @canany(['user-list', 'user-deactivated-list', 'user-verify-status', 'user-add','staff-setting'])
                <li  class="dashboard__bottom__list__item has-children @if (request()->is('admin/staff*')) active open show @endif">
                    <a href="javascript:void(0)"> <i class="las la-user-circle"></i> {{ __('Admin Staffs Manage') }} </a>
                    <ul class="submenu">
                        @can('user-list')
                            <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.staff.all'])) selected @endif">
                                <a href="{{ route('admin.staff.all') }}"> {{ __('Admin All Staffs') }} </a>
                            </li>
                        @endcan
                        @can('user-add')
                        <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.staff.add'])) selected @endif">
                            <a href="{{ route('admin.staff.add') }}">
                                {{ __('Add New Staff') }} </a>
                        </li>
                        @endcan
                        @can('staff-setting')
                        <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.staff.select'])) selected @endif">
                            <a href="{{ route('admin.staff.select') }}">
                                {{ __('Staff Selection Setting') }} </a>
                        </li>
                        @endcan
                    </ul>
                </li>
               @endcanany --}}

    

{{-- Offers --}}
                {{-- @canany(['offer-list', 'offer-add'])
                    <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/offer*')) active open @endif">
                        <a href="javascript:void(0)">
                            <i class="las la-paste"></i>
                            <span class="icon_title">{{ __('Offers') }}</span>
                        </a>
                        <ul class="submenu @if(request()->is('admin/offer/*')) d-block @endif">
                            @can('offer-list')
                                <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.offer.all'])) selected @endif">
                                    <a href="{{ route('admin.offer.all') }}">{{ __('All Offers') }}</a>
                                </li>
                            @endcan
                            @can('offer-add')
                                <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.offer.add'])) selected @endif">
                                    <a href="{{ route('admin.offer.add') }}">{{ __('Add New Offer') }}</a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany --}}

                    {{-- @canany(['blog-list', 'blog-add'])
                        <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/blog*')) active open @endif">
                            <a href="javascript:void(0)">
                                <i class="las la-paste"></i>
                                <span class="icon_title">{{ __('Blog') }}</span>
                            </a>
                            <ul class="submenu" style="@if(request()->is('admin/blog/*')) display:block; @endif">
                                @can('blog-list')
                                    <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.blog.index'])) selected @endif">
                                        <a href="{{ route('admin.blog.index') }}">{{ __('All Blogs') }}</a>
                                    </li>
                                @endcan
                                @can('blog-add')
                                    <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.blog.create'])) selected @endif">
                                        <a href="{{ route('admin.blog.create') }}">{{ __('Add New Blog') }}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcanany --}}



                    <!-- Pages Manage -->
                    {{-- @canany(['dynamic-page-list', 'dynamic-page-add'])
                        <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/dynamic-page*')) active open @endif">
                            <a href="javascript:void(0)">
                                <i class="las la-paste"></i>
                                <span class="icon_title">{{ __('Pages') }}</span>
                            </a>
                            <ul class="submenu @if(request()->is('admin/dynamic-page/*')) d-block @endif">
                                @can('dynamic-page-list')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/dynamic-page/all')) selected @endif">
                                        <a href="{{ route('admin.page') }}">{{ __('All Pages') }}</a>
                                    </li>
                                @endcan
                                @can('dynamic-page-add')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/dynamic-page/new')) selected @endif">
                                        <a href="{{ route('admin.page.new') }}">{{ __('Add New Page') }}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcanany --}}

                    <!-- Wallet Management -->
                    {{-- @canany(['admin-wallet-list', 'admin-wallet-settings', 'admin-transaction-list'])
                        <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/wallet/*')) active open @endif">
                            <a href="javascript:void(0)">
                                <i class="las la-wallet"></i>
                                <span class="icon_title">{{ __('Wallet Management') }}</span>
                            </a>
                            <ul class="submenu" style="@if(request()->is('admin/wallet/*')) display:block; @endif">
                                                   @can('admin-wallet-settings')
                                                   <li class="dashboard__bottom__list__item @if(request()->routeIs(['admin.wallet.settings'])) selected @endif">
                                                       <a href="{{ route('admin.wallet.settings') }}">{{ __('Wallet Settings') }}</a>
                                                   </li>
                                                   @endcan
                                @can('admin-wallet-list')
                                    <li class="dashboard__bottom__list__item @if(request()->routeIs(['admin.wallet.wallets', 'admin.wallet.wallets.show'])) selected @endif">
                                        <a href="{{ route('admin.wallet.wallets') }}">{{ __('All Wallets') }}</a>
                                    </li>
                                @endcan
                                @can('admin-transaction-list')
                                    <li class="dashboard__bottom__list__item @if(request()->routeIs(['admin.wallet.transactions', 'admin.wallet.transactions.show'])) selected @endif">
                                        <a href="{{ route('admin.wallet.transactions') }}">{{ __('All Transactions') }}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcanany --}}


                {{-- @canany('report-reason-list', 'report-reason-edit', 'report-reason-delete', 'report-reason-bulk-delete')
                    <li class="dashboard__bottom__list__item @if(request()->routeIs('admin.report.reason.all')) active @endif">
                        <a href="{{ route('admin.report.reason.all') }}"> <i class="las la-question-circle"></i> {{ __('Reasons') }} </a>
                    </li>
                @endcanany --}}

             