<header id="headPopup" class="header asbolute-header">
    <nav class="navbar sticky-nav navbar-area navbar-expand-lg">
        <div class="custom-container container nav-container">
            <div class="responsive-mobile-menu">
                <a href="<?php echo e(url('/')); ?>" class="navbar-brand">
                    <?php echo render_image_markup_by_attachment_id(get_static_option('site_logo')); ?>

                </a>
            </div>
            <div class="d-flex align-items-center gap-2">
                <div class="logo-wrapper">
                    <div class="nav-top-wrapper d-lg-none">

























                        <div class="navbar-right-item">
                            <a>
                                <i class="fas fa-car openPop"></i>
                            </a>
                        </div>
                        <div class="navbar-right-item">
                            <div class="cart-logo openCartBtn">
                                <i class="fas fa-cart-shopping white-text"></i>
                                <?php
                                    if(auth()->check()) {
                                         $cartCount = \App\Models\UserCartItem::where('user_id', auth()->id())->count();
                                     } else {
                                         // Guest user
                                         $guestToken = Cookie::get('guest_token');
                                         $cartCount = $guestToken
                                             ? \App\Models\UserCartItem::where('guest_token', $guestToken)->count()
                                             : 0;
                                    }
                                ?>
                                <div id="itemProduct" class=" cart-add d-flex align-items-center justify-center">
                                    <?php echo e($cartCount); ?>

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
                    <?php echo render_frontend_menu($primary_menu); ?>

                </ul>
                <div class="navbar-right-content show-nav-content ">
                    <div class="single-right-content">
                        <div class="navbar-right-flex">

























                            <div class="navbar-right-item d-none d-sm-none d-md-none d-lg-block">
                                <a  class="edit_my_car">
                                    <i class="fas fa-car openPop"></i>
                                </a>
                            </div>
                            <div class="navbar-right-item d-none d-sm-none d-md-none d-lg-block">
                                <div class="cart-logo openCartBtn">
                                    <i class="fas fa-cart-shopping white-text"></i>
                                    <?php
                                        if(auth()->check()) {
                                             $cartCount = \App\Models\UserCartItem::where('user_id', auth()->id())->count();
                                         } else {
                                             // Guest user
                                             $guestToken = Cookie::get('guest_token');
                                             $cartCount = $guestToken
                                                 ? \App\Models\UserCartItem::where('guest_token', $guestToken)->count()
                                                 : 0;
                                        }
                                    ?>
                                    <div id="itemProduct" class="cart-add d-flex align-items-center justify-center">
                                        <?php echo e($cartCount); ?>

                                    </div>
                                </div>
                            </div>
                            <div class="navbar-right-item">
                                <?php if(auth()->check()): ?>
                                    <span class="dropdown">
                                    <button class="client-after-login-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <?php echo render_image_markup_by_attachment_id(auth()->user()->image,'','thumb'); ?>

                                    </button>

                                        
                                        
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="<?php echo e(route('user.dashboard')); ?>"><?php echo e(__('Dashboard')); ?></a></li>
                                        <li><a class="dropdown-item" href="<?php echo e(route('settings.index')); ?>"><?php echo e(__('Profile Setting')); ?></a></li>
                                        <li><a class="dropdown-item" href="<?php echo e(route('auth.logout')); ?>"><?php echo e(__('Log Out')); ?></a></li>
                                    </ul>
                                </span>
                                <?php else: ?>
                                    <a href="<?php echo e(route('auth.login')); ?>" class="cmn-btn md-btn primary-btn">
                                        <?php echo e(__('Log In')); ?>

                                    </a>
                                <?php endif; ?>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </nav>
</header>
<div id="popupContainer" data-popup-url="<?php echo e(route('client.car.select.popup')); ?>">
</div>
<div id="loadAddcart" data-popup-url="<?php echo e(route('client.cart.items.all')); ?>"></div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/layout/partials/navbar.blade.php ENDPATH**/ ?>