<div class="dashboard__left dashboard-left-content">
    <div class="dashboard__left__main">
        <div class="dashboard__left__close close-bars"><i class="fa-solid fa-times"></i></div>
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

        <div class="dashboard__bottom">
            <div class="dashboard__bottom__search mb-3">
                <input class="form--control  w-100" type="text" placeholder="{{ __('Search here') }}" id="search_sidebarList">
            </div>
            <ul class="dashboard__bottom__list dashboard-list">

                @can('admin-dashboard')
                    <li class="dashboard__bottom__list__item @if(request()->is('admin/dashboard')) active @endif">
                        <a href="{{route('admin.dashboard')}}"><i class="lab la-accessible-icon"></i>
                            <span class="icon_title">{{ __('Dashboard') }}</span>
                        </a>
                    </li>
                @endcan

                <!--Admin service manage -->
                @canany(['admin-service-list','admin-product-list', 'report-reason-list', 'service-report-list'])
                    <li  class="dashboard__bottom__list__item has-children
                    @if (request()->is('admin/services/*')
                     || request()->is('admin/services/all') ||  request()->is('admin/products/*')
                     || request()->is('admin/products/all'))  active open show
                    @endif ">
                        <a href="javascript:void(0)"> <i class="las la-th-list"></i> {{ __('Service Manage') }} </a>
                        <ul class="submenu">
                            @can('admin-service-list')
                            <li class="dashboard__bottom__list__item @if (request()->is('admin/services/all')
                            || request()->is('admin/services/add') ||
                             request()->is('admin/services/admin-edit-service/*')) selected @endif">
                                <a href="{{ route('admin.all.services') }}"> {{ __('All Services') }} </a>
                            </li>
                           @endcan
                           @can('admin-product-list')
                           <li class="dashboard__bottom__list__item @if (request()->is('admin/products/all')
                           || request()->is('admin/products/add') ||
                            request()->is('admin/products/admin-edit-product/*')) selected @endif">
                               <a href="{{ route('admin.all.products') }}"> {{ __('All Products') }} </a>
                           </li>
                          @endcan
                           <!--Admin service schedule manage -->
                            @can('admin-service-list')
                                <li class="dashboard__bottom__list__item @if(request()->is('admin/service/schedule/list')) selected @endif">
                                    <a href="{{ route('admin.schedule.all') }}"> {{ __('Schedule Manage') }} </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

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

                <!--Admin outlet address  manage -->
                @canany(['admin-outletAddress-all','admin-outletAddress-add'])
                    <li  class="dashboard__bottom__list__item has-children
                    @if (request()->is('admin/outletAddress/*')
                     || request()->is('admin/outletAddress/all') || request()->is('admin/outletAddress/add'))  active open show
                    @endif ">
                        <a href="javascript:void(0)"> <i class="las la-th-list"></i> {{ __('Outlet Location Manage') }} </a>
                        <ul class="submenu">
                            @can('admin-outletAddress-list')
                                <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.outletAddress.all'])) selected @endif">
                                    <a href="{{ route('admin.outletAddress.all') }}"> {{ __('All Outlet Address') }} </a>
                                </li>
                            @endcan
                            @can('admin-outletAddress-add')
                                <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.outletAddress.add'])) selected @endif">
                                    <a href="{{ route('admin.outletAddress.add') }}"> {{ __('Add New Outlet Address') }} </a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcanany

               <!--Admin order manage -->
                <li  class="dashboard__bottom__list__item has-children @if (request()->is('admin/orders/*')) active open show @endif">
                    <a href="javascript:void(0)"> <i class="las la-bars"></i> {{ __('All Orders Manage') }} </a>
                    <ul class="submenu">
                        @can('admin-service-list')
                        <li class="dashboard__bottom__list__item
                            @if(Route::currentRouteName() == 'admin.service.all.orders'
                            || request()->is('admin/orders/details/*') || request()->is('admin/orders/sub-order/details/*')  ) selected
                             @endif
                             ">
                            <a href="{{ route('admin.service.all.orders') }}"> {{ __('All Admin  Orders') }} </a>
                        </li>
                       @endcan
                       @can('admin-service-list')
                       <li class="dashboard__bottom__list__item
                           @if(Route::currentRouteName() == 'admin.redunded-order.list') selected
                            @endif
                            ">
                           <a href="{{ route('admin.redunded-order.list') }}"> {{ __('All Refunded Orders') }} </a>
                       </li>
                      @endcan
                        @can('admin-service-list')
                            <li class="dashboard__bottom__list__item @if(request()->is('admin/orders/settings')) selected @endif">
                                <a href="{{ route('admin.order.settings') }}">{{ __('Order Settings') }}</a>
                            </li>
                        @endcan
                        @can('admin-service-list')
                            <li class="dashboard__bottom__list__item @if(request()->is('admin/orders/order-cancellation-policy')) selected @endif">
                                <a href="{{ route('admin.order.cancellation-policy') }}">{{ __('Oder Cancellation Policy') }}</a>
                            </li>
                        @endcan
                            <li class="dashboard__bottom__list__item @if(request()->is('admin/orders/after-booking-steps')) selected @endif">
                                <a href="{{ route('admin.order.after-booking-steps') }}">{{ __('After Booking Steps') }}</a>
                            </li>
                    </ul>
                </li>


               @canany(['user-list', 'user-deactivated-list', 'user-verify-status', 'user-add'])
                <li  class="dashboard__bottom__list__item has-children
                @if (request()->is('admin/user*')
                    || request()->is('admin/user/profile/*'))
                    active open show
                  @endif">
                    <a href="javascript:void(0)"> <i class="las la-user-circle"></i> {{ __('User Manage') }} </a>
                    <ul class="submenu">
                        @can('user-list')
                            <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.user.all'])) selected @endif">
                                <a href="{{ route('admin.user.all') }}"> {{ __('All Users') }} </a>
                            </li>
                        @endcan
                        @can('user-deactivated-list')
                           <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.user.restore'])) selected @endif">
                                <a href="{{ route('admin.user.restore') }}"> {{ __('Trash List') }} </a>
                            </li>
                        @endcan

                        @can('user-add')
                        <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.user.add'])) selected @endif">
                            <a href="{{ route('admin.user.add') }}">
                                {{ __('Add New User') }} </a>
                        </li>
                        @endcan
                    </ul>
                </li>
               @endcanany

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

               @canany(['category-list', 'category-add'])
                <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/category/*')) active open @endif">
                    <a href="javascript:void(0)"><i class="las la-th-list"></i>
                        <span class="icon_title">{{ __('Categories') }}</span>
                    </a>
                    <ul class="submenu @if(request()->is('admin/category/*')) d-block @endif">
                        @can('category-list')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/category/index')) selected @endif">
                            <a href="{{ route('admin.category') }}">{{ __('All Category') }}</a>
                        </li>
                        @endcan
                       @can('category-add')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/category/add-new-category')) selected @endif">
                            <a href="{{ route('admin.category.new') }}">{{ __('Add New Category') }}</a>
                        </li>
                        @endcan
                    </ul>
                </li>
               @endcanany

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

                      <!-- Brand Manage -->
                      @canany(['admin-brand-list', 'admin-brand-add'])
                      <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/brand*')) active open @endif">
                          <a href="javascript:void(0)">
                              <i class="las la-paste"></i>
                              <span class="icon_title">{{ __('Brands') }}</span>
                          </a>
                          <ul class="submenu @if(request()->is('admin/brand/*')) d-block @endif">
                              @can('admin-brand-list')
                                  <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.brand.all'])) selected @endif">
                                      <a href="{{ route('admin.brand.all') }}">{{ __('All Brands') }}</a>
                                  </li>
                              @endcan
                              @can('admin-brand-add')
                                  <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.brand.add'])) selected @endif">
                                      <a href="{{ route('admin.brand.add') }}">{{ __('Add New Brand') }}</a>
                                  </li>
                              @endcan
                          </ul>
                      </li>
                  @endcanany

                  <!-- Car Manage -->
                  @canany(['admin-car-list', 'admin-car-add'])
                  <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/car*')) active open @endif">
                      <a href="javascript:void(0)">
                          <i class="las la-paste"></i>
                          <span class="icon_title">{{ __('Cars') }}</span>
                      </a>
                      <ul class="submenu @if(request()->is('admin/car/*')) d-block @endif">
                          @can('admin-car-list')
                              <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.car.all'])) selected @endif">
                                  <a href="{{ route('admin.car.all') }}">{{ __('All Cars') }}</a>
                              </li>
                          @endcan
                          @can('admin-car-add')
                              <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.car.add'])) selected @endif">
                                  <a href="{{ route('admin.car.add') }}">{{ __('Add New Car') }}</a>
                              </li>
                          @endcan
                      </ul>
                  </li>
              @endcanany

              @canany(['admin-engine-list','admin-engine-add'])
                  <li class="dashboard__bottom__list__item has-children   @if(request()->is('admin/engine*')) active open  @endif">
                      <a href="javascript:void(0)">
                          <i class="las la-paste"></i>
                          <span class="icon_title">{{ __('Engines') }}</span>
                      </a>
                      <ul class="submenu @if(request()->is('admin/engine/*')) d-block @endif">

                          @can('admin-engine-list')
                          <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.engine.all'])) selected @endif">
                              <a href="{{ route('admin.engine.all') }}">{{ __('All Engines') }}</a>
                          </li>
                      @endcan
                      @can('admin-engine-add')
                      <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.engine.add'])) selected @endif">
                          <a href="{{ route('admin.engine.add') }}">{{ __('Add New Engine') }}</a>
                      </li>
                  @endcan

                      </ul>
                  </li>
              @endcanany

              @canany(['admin-fual-list','admin-fual-add'])
                  <li class="dashboard__bottom__list__item has-children  @if(request()->is('admin/fual*')) active open  @endif">
                      <a href="javascript:void(0)">
                          <i class="las la-paste"></i>
                          <span class="icon_title">{{ __('Fuels') }}</span>
                      </a>
                      <ul class="submenu @if(request()->is('admin/fual/*')) d-block @endif">

                  @can('admin-fual-list')
                  <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.fual.all'])) selected @endif">
                      <a href="{{ route('admin.fual.all') }}">{{ __('All Fuels') }}</a>
                  </li>
              @endcan
              @can('admin-fual-add')
              <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.fual.add'])) selected @endif">
                  <a href="{{ route('admin.fual.add') }}">{{ __('Add New Fuel') }}</a>
              </li>
               @endcan
            </ul>
            </li>
              @endcanany

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


                @include('backend.partials.module-list')

                {{-- @canany('report-reason-list', 'report-reason-edit', 'report-reason-delete', 'report-reason-bulk-delete')
                    <li class="dashboard__bottom__list__item @if(request()->routeIs('admin.report.reason.all')) active @endif">
                        <a href="{{ route('admin.report.reason.all') }}"> <i class="las la-question-circle"></i> {{ __('Reasons') }} </a>
                    </li>
                @endcanany --}}

               <!-- Refund Manage -->
               @canany('refund-payment-gateway-list', 'refund-settings-view', 'refund-payment-gateway-add', 'refund-payment-gateway-edit', 'refund-payment-status-change', 'refund-payment-gateway-delete', 'refund-list', 'refund-status-change', 'refund-fee-settings-view')
               <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/refund*')) active open @endif">
                   <a href="javascript:void(0)">
                       <i class="las la-paste"></i>
                       <span class="icon_title">{{ __('Refund') }}</span>
                   </a>
                   <ul class="submenu @if(request()->is('admin/refund/*')) d-block @endif">
                       @can('refund-payment-gateway-add')
                       <li class="dashboard__bottom__list__item @if(request()->routeIs(['admin.refund.gateway'])) selected @endif">
                           <a href="{{ route('admin.refund.gateway') }}">{{ __('Refund Payment Gateway') }}</a>
                       </li>
                       @endcan
                   </ul>
               </li>
               @endcanany


                @can('notifications-list')
                    <li class="dashboard__bottom__list__item @if(request()->is('admin/notification/*')) active @endif">
                        <a href="{{ route('admin.notification.all') }}"><i class="las la-bell"></i>{{ __('All Notification') }}</a>
                    </li>
                    <li class="dashboard__bottom__list__item @if(request()->is('admin/firebase/settings*')) active @endif">
                        <a href="{{ route('admin.firebase.settings') }}"><i class="las la-bell"></i>{{ __('Firebase Settings') }}</a>
                    </li>
                @endcan

                @can('slider-settings', 'slider-list')
                <li class="dashboard__bottom__list__item @if(request()->is('admin/slider/*')) active @endif">
                    <a href="{{ route('admin.slider.add') }}"><i class="las la-sliders-h"></i>{{ __('Slider Settings') }}</a>
                </li>
                @endcan

              @can('google-map-settings')
                <li class="dashboard__bottom__list__item @if(request()->is('admin/map-settings/*')) active @endif">
                    <a href="{{ route('admin.map.settings.page') }}"><i class="las la-map"></i>{{ __('Google Map Settings') }}</a>
                </li>
               @endcan

                    <!-- Appearance Settings -->
                    @canany([
                       'color-settings', 'typography-settings',
                        'typography-single-settings', 'font-add-settings', 'custom-font-delete', 'custom-font-status-change',
                        'media-upload', 'media-upload-delete', '404-page-settings', 'maintains-page-settings'
                    ])
                        <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/appearance-settings/*')) active open @endif">
                            <a href="javascript:void(0)">
                                <i class="las la-cogs"></i>
                                <span class="icon_title">{{ __('Appearance Settings') }}</span>
                            </a>
                            <ul class="submenu @if(request()->is('admin/appearance-settings/*')) d-block @endif">
                                @can('menu-list')
                                    <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.menu']) || request()->routeIs(['admin.menu.edit'])) selected @endif">
                                        <a href="{{ route('admin.menu') }}"> {{ __('Menu Builder') }} </a>
                                    </li>
                                @endcan
                                @can('widget-list')
                                    <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.widget'])) selected @endif">
                                        <a href="{{ route('admin.widget') }}"> {{ __('Widget Builder') }} </a>
                                    </li>
                                @endcan
                                @can('widget-list')
                                    <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.form'])) selected @endif">
                                        <a href="{{ route('admin.form') }}"> {{ __('Form Builder') }} </a>
                                    </li>
                                @endcan
                                @can('media-upload')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/appearance-settings/media-upload/page')) selected @endif">
                                        <a href="{{ route('admin.upload.media.images.page') }}">{{ __('Media Images Manage') }}</a>
                                    </li>
                                @endcan
                                @can('404-page-settings')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/appearance-settings/404-page-manage')) selected @endif">
                                        <a href="{{ route('admin.404.page.settings') }}">{{ __('404 Page Manage') }}</a>
                                    </li>
                                @endcan
                                @can('maintains-page-settings')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/appearance-settings/maintains-page')) selected @endif">
                                        <a href="{{ route('admin.maintains.page.settings') }}">{{ __('Maintain Page Manage') }}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcanany

                    @canany([
                            'login-register-page-settings', 'user-public-profile-page-settings'
                        ])
                        <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/page-settings/*')) active open @endif">
                            <a href="javascript:void(0)">
                                <i class="las la-file-alt"></i>
                                <span class="icon_title">{{ __('Page Settings') }}</span>
                            </a>
                            <ul class="submenu @if(request()->is('admin/page-settings/*')) d-block @endif">
                                @can('service-create-page-settings')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/page-settings/service-create-page/settings')) selected @endif">
                                        <a href="{{ route('admin.service.create.settings') }}">{{ __('Service Create Page Settings') }}</a>
                                    </li>
                                @endcan
                                @can('user-public-profile-page-settings')
                                    <li class="dashboard__bottom__list__item @if(request()->is('admin/page-settings/admin-login-page/settings')) selected @endif">
                                        <a href="{{ route('admin.login.page.settings') }}">{{ __('Admin Login Page Settings') }}</a>
                                    </li>
                                @endcan
                                    @can('login-register-page-settings')
                                        <li class="dashboard__bottom__list__item @if(request()->is('admin/page-settings/register-page')) selected @endif">
                                            <a href="{{ route('admin.login.register.page.settings') }}">{{ __('Sign In/Sign Up Settings') }}</a>
                                        </li>
                                    @endcan
                            </ul>
                        </li>
                    @endcanany

                    @canany(['smtp-settings'])
                    <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/email-settings/*')) active open @endif">
                    <a href="javascript:void(0)"><i class="las la-envelope"></i>
                        <span class="icon_title">{{ __('Email Settings') }}</span>
                    </a>
                        <ul class="submenu @if(request()->is('admin/email-settings/*')) d-block @endif">
                            <li class="dashboard__bottom__list__item @if(request()->is('admin/email-settings/smtp')) selected @endif">
                                <a href="{{ route('admin.email.smtp.settings') }}">{{ __('SMTP Settings') }}</a>
                            </li>
                            <li class="dashboard__bottom__list__item @if(request()->is('admin/email-settings/all-email-templates')) selected @endif">
                                <a href="{{ route('admin.email.template.all') }}">{{ __('All Email Templates') }}</a>
                            </li>
                        </ul>
                    </li>
                    @endcanany

                 @canany(['site-identity-settings', 'basic-settings', 'seo-settings', 'scripts-settings',  'sitemap-settings', 'gdpr-settings', 'license-setting', 'software-update-setting', 'cache-settings', 'database-upgrade-setting'
                          ])
                <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/general-settings/*')) active open @endif">
                    <a href="javascript:void(0)"><i class="las la-cog"></i>
                        <span class="icon_title">{{ __('General Settings') }}</span>
                    </a>
                    <ul class="submenu @if(request()->is('admin/general-settings/*')) d-block @endif">
                        @can('reading-settings')
                            <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.general.settings.reading'])) selected @endif">
                                <a href="{{ route('admin.general.settings.reading') }}"> {{ __('Reading') }} </a>
                            </li>
                        @endcan
                       @can('site-identity-settings')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/general-settings/site-identity')) selected @endif">
                            <a href="{{ route('admin.general.site.identity') }}">{{ __('Site Identity') }}</a>
                        </li>
                        @endcan
                        @can('basic-settings')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/general-settings/basic-settings')) selected @endif">
                            <a href="{{ route('admin.general.basic.settings') }}">{{ __('Basic Settings') }}</a>
                        </li>
                       @endcan
                        @can('seo-settings')
                            <li class="dashboard__bottom__list__item @if (request()->routeIs(['admin.general.settings.seo'])) selected @endif">
                                <a href="{{ route('general.settings.seo') }}"> {{ __('Seo Settings') }} </a>
                            </li>
                        @endcan
                      @can('license-settings')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/general-settings/license-setting')) selected @endif">
                            <a href="{{ route('admin.general.license.settings') }}">{{ __('Licence Settings') }}</a>
                        </li>
                       @endcan
                      @can('software-update-settings')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/general-settings/software-update-setting')) selected @endif">
                            <a href="{{ route('admin.general.software.update.settings') }}">{{ __('Check Update') }}</a>
                        </li>
                     @endcan
                     @can('cache-settings')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/general-settings/cache-settings')) selected @endif">
                            <a href="{{ route('admin.general.cache.settings') }}">{{ __('Cache Settings') }}</a>
                        </li>
                     @endcan
                      @can('database-upgrade-settings')
                        <li class="dashboard__bottom__list__item @if(request()->is('admin/general-settings/database-upgrade')) selected @endif">
                            <a href="{{ route('admin.general.database.upgrade') }}">{{ __('Database Upgrade') }}</a>
                        </li>
                     @endcan
                    </ul>
                </li>
               @endcanany

                @can('languages-list')
                    <li class="dashboard__bottom__list__item @if(request()->is('admin/languages/*') || request()->is('admin/languages')) active @endif">
                        <a href="{{ route('admin.languages') }}"><i class="las la-language"></i> <span class="icon_title">{{ __('Languages') }}</span></a>
                    </li>
                @endcan

                <li class="dashboard__bottom__list__item">
                    <a href="{{ route('admin.logout') }}"> <i class="las la-sign-out-alt"></i> <span class="icon_title">{{ __('Log Out') }}</span></a>
                </li>
            </ul>
        </div>
    </div>
</div>







