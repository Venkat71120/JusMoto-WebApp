<header class="header style2 login-page-header">
    <nav class="navbar sticky-nav navbar-area navbar-expand-lg">
        <div class="custom-container container nav-container">
            <!-- Mobile Menu -->
            <div class="responsive-mobile-menu">
                <a href="<?php echo e(url('/')); ?>" class="navbar-brand">
                    <?php echo render_image_markup_by_attachment_id(get_static_option('site_logo')); ?>

                </a>
            </div>
            
            <div class="d-flex align-items-center gap-2">
                <div class="logo-wrapper">
                    <div class="nav-top-wrapper d-lg-none">
                        <!-- Removed cart and car icons from mobile view on login page -->
                        <?php if(isset($showBackButton) && $showBackButton): ?>
                        <div class="navbar-right-item">
                            <a href="<?php echo e(url()->previous()); ?>" class="back-button">
                                <i class="fas fa-arrow-left"></i>
                            </a>
                        </div>
                        <?php endif; ?>
                        
                        <!-- Social Icons - Mobile Only -->
                        <div class="navbar-right-item d-lg-none social-icons-mobile">
                            <a href="https://www.facebook.com/jusmotoofficial" target="_blank" class="social-icon fb">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com/jusmoto1" target="_blank" class="social-icon tw">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/p/B9G1oVgppYh/" target="_blank" class="social-icon ig">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        
                        <!-- Only show login/signup actions if not already on auth pages -->
                     <?php if(!request()->is('login*')): ?>

                        <div class="navbar-right-item">
                            <?php if(auth()->check()): ?>
                                <!-- User is logged in - show minimal user icon -->
                                <a href="<?php echo e(route('user.dashboard')); ?>" class="user-icon">
                                    <i class="fas fa-user"></i>
                                </a>
                            <?php else: ?>
                                <!-- User is not logged in - show login icon -->
                                <a href="<?php echo e(route('auth.login')); ?>" class="login-icon">
                                    <i class="fas fa-sign-in-alt"></i>
                                </a>
                            <?php endif; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
                
                <!-- Mobile menu toggle -->
                <div class="responsive-mobile-menu logo-icon-wrapper d-lg-block">
                    <?php if(!request()->is('login*', 'register*', 'forgot-password*')): ?>
                    <button class="navbar-toggler shadow-none collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#gocarNav">
                        <i class="fas fa-bars"></i>
                    </button>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="navbar-collapse nav-responsive justify-content-end gap-4 collapse" id="gocarNav">
                <ul class="navbar-nav">
                    <!-- Only show essential navigation items on login page -->
                    <?php if(!request()->is('login*', 'register*', 'forgot-password*')): ?>
                        <?php echo render_frontend_menu($primary_menu); ?>

                        
                      <!-- Additional Help and Contact Links -->
<li class="nav-item">
    <a class="nav-link" href="https://jusmoto.com/" target="_blank">
        <i class="fas fa-question-circle me-1"></i> Help
    </a>
</li>

<li class="nav-item">
    <a class="nav-link" href="https://jusmoto.com/" target="_blank">
        <i class="fas fa-envelope me-1"></i> Contact
    </a>
</li>

                    <?php endif; ?>
                </ul>
                
                <div class="navbar-right-content show-nav-content">
                    <div class="single-right-content">
                        <div class="navbar-right-flex">
                            <!-- Social Icons - Desktop -->
                            <div class="navbar-right-item social-icons-desktop">
                                <a href="https://www.facebook.com/jusmotoofficial" target="_blank" class="social-icon fb" title="Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://x.com/jusmoto1" target="_blank" class="social-icon tw" title="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/p/B9G1oVgppYh/" target="_blank" class="social-icon ig" title="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                            
                            <?php if(isset($showBackButton) && $showBackButton): ?>
                            <div class="navbar-right-item d-none d-sm-none d-md-none d-lg-block">
                                <a href="<?php echo e(url()->previous()); ?>" class="back-button">
                                    <i class="fas fa-arrow-left"></i>
                                    <span class="back-text">Back</span>
                                </a>
                            </div>
                            <?php endif; ?>
                            
                            
                            
                            <?php if(auth()->check()): ?>
                            <div class="navbar-right-item">
                                <span class="dropdown">
                                    <button class="client-after-login-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <?php if(auth()->user()->image): ?>
                                            <?php echo render_image_markup_by_attachment_id(auth()->user()->image,'','thumb'); ?>

                                        <?php else: ?>
                                            <i class="fas fa-user-circle"></i>
                                        <?php endif; ?>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="<?php echo e(route('user.dashboard')); ?>"><?php echo e(__('Dashboard')); ?></a></li>
                                        <li><a class="dropdown-item" href="<?php echo e(route('settings.index')); ?>"><?php echo e(__('Profile Setting')); ?></a></li>
                                        <li><a class="dropdown-item" href="<?php echo e(route('auth.logout')); ?>"><?php echo e(__('Log Out')); ?></a></li>
                                    </ul>
                                </span>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>

<style>
:root {
    /* ===== Palette ===== */
    --primary: #00b799;   /* main growth / totals */
    --danger: #ff4240;    /* alerts / hover */
    --dark: #252726;      /* text */
    --bg: #e9edee;        /* background */
    --border: #d3dcdb;    /* borders / grid */
    --highlight: #fbc423; /* emphasis */
    --success-soft: #2dca73;
    --chart-fill: rgba(0, 183, 153, 0.15);
}

/* Custom styles for login page header */
.login-page-header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    border-bottom: 1px solid var(--border);
}


.login-page-header .navbar-brand {
    display: flex;
    align-items: center;
    padding: 0;
}


.login-page-header .back-button {
    color: var(--dark);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 6px;
    transition: all 0.2s ease;
    background: var(--bg);
    border: 1px solid var(--border);
}

.login-page-header .back-button:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.login-page-header .login-link {
    color: var(--primary);
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    border: 2px solid var(--primary);
    font-weight: 600;
    transition: all 0.2s ease;
    background: white;
}

.login-page-header .login-link:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 183, 153, 0.2);
}

.login-page-header .user-icon,
.login-page-header .login-icon {
    color: var(--dark);
    font-size: 1.2rem;
    text-decoration: none;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    background: var(--bg);
}

.login-page-header .user-icon:hover,
.login-page-header .login-icon:hover {
    background: var(--primary);
    color: white;
}

/* Social Icons Styles */
.social-icons-desktop,
.social-icons-mobile {
    display: flex;
    align-items: center;
    gap: 12px;
}
.social-icon i {
    color: #fff !important;
}

.social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-decoration: none;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
}

.social-icon:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-icon.fb {
    background: #1877f2; /* Facebook blue */
}

.social-icon.tw {
    background: #1da1f2; /* Twitter blue */
}

.social-icon.ig {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-icon.fb:hover {
    background: #166fe5;
}

.social-icon.tw:hover {
    background: #1a8cd8;
}

.social-icon.ig:hover {
    opacity: 0.9;
}

/* Navigation Links with Custom Colors */
.login-page-header .nav-link {
    color: var(--dark) !important;
    font-weight: 500;
    padding: 10px 15px !important;
    border-radius: 6px;
    transition: all 0.2s ease;
    margin: 0 2px;
}

.login-page-header .nav-link:hover {
    color: var(--primary) !important;
    background: var(--bg);
}

.login-page-header .nav-link i {
    color: var(--primary);
    margin-right: 8px;
}

/* Dropdown Menu Styling */
.login-page-header .dropdown-menu {
    border: 1px solid var(--border);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.login-page-header .dropdown-item {
    color: var(--dark);
    padding: 10px 20px;
    transition: all 0.2s ease;
}

.login-page-header .dropdown-item:hover {
    background: var(--primary);
    color: white;
}

/* User Avatar Styling */
.client-after-login-button {
    background: var(--bg) !important;
    border: 1px solid var(--border) !important;
    color: var(--dark) !important;
    padding: 8px 12px !important;
    border-radius: 8px !important;
    transition: all 0.2s ease;
}

.client-after-login-button:hover {
    background: var(--primary) !important;
    border-color: var(--primary) !important;
    color: white !important;
}

.client-after-login-button img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}

/* Hide unnecessary elements on login/register pages */
body.login-page .navbar-right-item .cart-logo,
body.login-page .navbar-right-item .openPop,
body.login-page .header-global-search,
body.login-page .search-header-open {
    display: none !important;
}

/* Mobile responsive */
@media (max-width: 991px) {
    .login-page-header .back-text {
        display: none;
    }
    
    .login-page-header #gocarNav {
        background: white;
        padding: 15px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .social-icons-mobile {
        gap: 8px;
    }
    
    .social-icon {
        width: 28px;
        height: 28px;
        font-size: 12px;
    }
}

@media (max-width: 768px) {
    .social-icons-desktop {
        display: none;
    }
}

@media (min-width: 769px) {
    .social-icons-mobile {
        display: none;
    }
}
</style>

<script>
// Remove cart and car functionality from login pages
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/login') || 
        window.location.pathname.includes('/register') ||
        window.location.pathname.includes('/forgot-password') ||
        window.location.pathname.includes('/reset-password')) {
        
        // Remove any existing event listeners for cart/car
        const cartButtons = document.querySelectorAll('.openCartBtn, .openPop');
        cartButtons.forEach(button => {
            button.style.display = 'none';
        });
        
        // Remove popup containers if they exist
        const popupContainer = document.getElementById('popupContainer');
        const loadAddcart = document.getElementById('loadAddcart');
        
        if (popupContainer) popupContainer.remove();
        if (loadAddcart) loadAddcart.remove();
    }
    
    // Add active state to social icons on hover
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/layout/partials/navbar-other.blade.php ENDPATH**/ ?>