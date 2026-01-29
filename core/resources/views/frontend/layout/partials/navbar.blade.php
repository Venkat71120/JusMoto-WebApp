<header id="headPopup" class="header asbolute-header">
    <nav class="navbar sticky-nav navbar-area navbar-expand-lg">
        <div class="custom-container container nav-container">
            <div class="responsive-mobile-menu">
                <a href="{{url('/')}}" class="navbar-brand">
                    {!! render_image_markup_by_attachment_id(get_static_option('site_logo')) !!}
                </a>
            </div>
            <div class="d-flex align-items-center gap-2">
                <div class="logo-wrapper">
                    <div class="nav-top-wrapper d-lg-none">
{{--                        <div class="navbar-right-item">--}}
{{--                            <a href="#/" class="search-header-open">--}}
{{--                                <i class="fas fa-search"></i>--}}
{{--                            </a>--}}
{{--                            <div class="header-global-search ">--}}
{{--                                <div class="header-global-search-header">--}}
{{--                                    <h5 class="header-global-search-title">Search</h5>--}}
{{--                                    <div class="header-global-search-close search-close">--}}
{{--                                        <i class="fa-solid fa-times"></i>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="header-global-search-input d-flex align-items-center">--}}
{{--                                    <div class="header-global-search-input-inner">--}}
{{--                                        <div class="header-global-search-input-inner-icon"--}}
{{--                                             id="header_search_load_spinner">--}}
{{--                                            <i class="fa-solid fa-magnifying-glass"></i>--}}
{{--                                        </div>--}}
{{--                                        <input type="text" id="search_your_desired_job" class="form-control"--}}
{{--                                               placeholder="Search" autocomplete="off">--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="display_search_result"></div>--}}
{{--                            </div>--}}
{{--                            <div class="search-overlay"></div>--}}
{{--                        </div>--}}
                        <div class="navbar-right-item">
                            <a>
                                <i class="fas fa-car openPop"></i>
                            </a>
                        </div>
                        <div class="navbar-right-item">
                            <div class="cart-logo openCartBtn">
                                <i class="fas fa-cart-shopping white-text"></i>
                                @php
                                    if(auth()->check()) {
                                         $cartCount = \App\Models\UserCartItem::where('user_id', auth()->id())->count();
                                     } else {
                                         // Guest user
                                         $guestToken = Cookie::get('guest_token');
                                         $cartCount = $guestToken
                                             ? \App\Models\UserCartItem::where('guest_token', $guestToken)->count()
                                             : 0;
                                    }
                                @endphp
                                <div id="itemProduct" class=" cart-add d-flex align-items-center justify-center">
                                    {{$cartCount}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="responsive-mobile-menu logo-icon-wrapper d-lg-block">
                    <button class="navbar-toggler shadow-none collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#gocarNav">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <div class="navbar-collapse nav-responsive justify-content-end gap-4 collapse" id="gocarNav">
                <ul class="navbar-nav">
                    {!! render_frontend_menu($primary_menu) !!}
                </ul>
                <div class="navbar-right-content show-nav-content ">
                    <div class="single-right-content">
                        <div class="navbar-right-flex">
{{--                            <div class="navbar-right-item d-none d-sm-none d-md-none d-lg-block">--}}
{{--                                <a href="#/" class="search-header-open">--}}
{{--                                    <i class="fas fa-search"></i>--}}
{{--                                </a>--}}
{{--                                <div class="header-global-search ">--}}
{{--                                    <div class="header-global-search-header">--}}
{{--                                        <h5 class="header-global-search-title">{{__('Search')}}</h5>--}}
{{--                                        <div class="header-global-search-close search-close">--}}
{{--                                            <i class="fa-solid fa-times"></i>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                    <div class="header-global-search-input d-flex align-items-center">--}}
{{--                                        <div class="header-global-search-input-inner">--}}
{{--                                            <div class="header-global-search-input-inner-icon"--}}
{{--                                                 id="header_search_load_spinner">--}}
{{--                                                <i class="fa-solid fa-magnifying-glass"></i>--}}
{{--                                            </div>--}}
{{--                                            <input type="text" id="search_your_desired_job" class="form-control"--}}
{{--                                                   placeholder="Search" autocomplete="off">--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                    <div class="display_search_result"></div>--}}
{{--                                </div>--}}
{{--                                <div class="search-overlay"></div>--}}
{{--                            </div>--}}
                            <div class="navbar-right-item d-none d-sm-none d-md-none d-lg-block">
                                <a  class="edit_my_car">
                                    <i class="fas fa-car openPop"></i>
                                </a>
                            </div>
                            <div class="navbar-right-item d-none d-sm-none d-md-none d-lg-block">
                                <div class="cart-logo openCartBtn">
                                    <i class="fas fa-cart-shopping white-text"></i>
                                    @php
                                        if(auth()->check()) {
                                             $cartCount = \App\Models\UserCartItem::where('user_id', auth()->id())->count();
                                         } else {
                                             // Guest user
                                             $guestToken = Cookie::get('guest_token');
                                             $cartCount = $guestToken
                                                 ? \App\Models\UserCartItem::where('guest_token', $guestToken)->count()
                                                 : 0;
                                        }
                                    @endphp
                                    <div id="itemProduct" class="cart-add d-flex align-items-center justify-center">
                                        {{ $cartCount }}
                                    </div>
                                </div>
                            </div>
                            <div class="navbar-right-item">
                                @if(auth()->check())
                                    <span class="dropdown">
                                    <button class="client-after-login-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {!! render_image_markup_by_attachment_id(auth()->user()->image,'','thumb') !!}
                                    </button>
{{--                                    <a type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">--}}
                                        {{--                                        <i class="icon-base ti tabler-dots-vertical"></i>--}}
                                        {{--                                    </a>--}}
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="{{route('user.dashboard')}}">{{__('Dashboard')}}</a></li>
                                        <li><a class="dropdown-item" href="{{route('settings.index')}}">{{__('Profile Setting')}}</a></li>
                                        <li><a class="dropdown-item" href="{{route('auth.logout')}}">{{__('Log Out')}}</a></li>
                                    </ul>
                                </span>
                                @else
                                    <a href="{{route('auth.login')}}" class="cmn-btn md-btn primary-btn">
                                        {{__('Log In')}}
                                    </a>
                                @endif

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </nav>
</header>
<div id="popupContainer" data-popup-url="{{ route('client.car.select.popup') }}">
</div>
<div id="loadAddcart" data-popup-url="{{ route('client.cart.items.all') }}"></div>
