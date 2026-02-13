<div class="dashboard__header">
    <div class="header-container">
        <!-- Left Side - Sidebar Toggle & Breadcrumb -->
        <div class="header-left">
            <div class="sidebar-toggle-wrapper">
                <span class="sidebar-toggle-icon bars">
                    <i class="las la-bars"></i>
                </span>
            </div>
        </div>

        <!-- Right Side - User Menu -->
        <div class="header-right">
            <!-- Global Search -->
            <?php echo $__env->make('backend.partials.global-search', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

            <!-- Dark/Light Mode Toggle -->
            <div class="header-action-item">
                <span class="mode-toggle <?php if(get_static_option('site_admin_dark_mode') == 'on'): ?> light-mode <?php else: ?> dark-mode <?php endif; ?>" id="mode_change">
                    <i class="las la-moon"></i>
                    <i class="las la-sun"></i>
                </span>
                <input type="hidden" value="<?php echo e(get_static_option('site_admin_dark_mode') ?? 'lightMode'); ?>" id="darkModeValue">
            </div>

            <!-- Notifications -->
            <?php echo $__env->make('backend.partials.notifications', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

            <!-- Admin Profile -->
            <div class="header-action-item">
                <div class="profile-dropdown">
                    <a href="javascript:void(0)" class="profile-trigger">
                        <div class="profile-avatar">
                            <?php if(!empty(auth()->guard('admin')->user()->image)): ?>
                                <?php echo render_image_markup_by_attachment_id(auth()->guard('admin')->user()->image,'avatar'); ?>

                            <?php else: ?>
                                <div class="avatar-placeholder">
                                    <span><?php echo e(substr(auth()->guard('admin')->user()->name, 0, 1)); ?></span>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="profile-info">
                            <span class="profile-name"><?php echo e(auth()->guard('admin')->user()->name); ?></span>
                            <span class="profile-role"><?php echo e(__('Admin')); ?></span>
                        </div>
                        <i class="las la-chevron-down profile-arrow"></i>
                    </a>
                    
                    <div class="profile-menu">
                        <a href="<?php echo e(url('/')); ?>" class="profile-menu-item">
                            <i class="las la-home"></i>
                            <span><?php echo e(__('Home')); ?></span>
                        </a>
                        <a href="<?php echo e(route('admin.profile.update')); ?>" class="profile-menu-item">
                            <i class="las la-user-edit"></i>
                            <span><?php echo e(__('Edit Profile')); ?></span>
                        </a>
                        <a href="<?php echo e(route('admin.profile.password.change')); ?>" class="profile-menu-item">
                            <i class="las la-lock"></i>
                            <span><?php echo e(__('Password Change')); ?></span>
                        </a>
                        <div class="profile-divider"></div>
                        <a href="<?php echo e(route('admin.logout')); ?>" class="profile-menu-item logout">
                            <i class="las la-sign-out-alt"></i>
                            <span><?php echo e(__('Log Out')); ?></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== MODERN RED HEADER ===== */
.dashboard__header {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 12px 32px;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(227, 27, 35, 0.06);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

/* Dark mode support */
body.dark-mode .dashboard__header {
    background: rgba(23, 25, 26, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(227, 27, 35, 0.1);
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
}

/* ===== Left Side ===== */
.header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.sidebar-toggle-wrapper {
    display: flex;
    align-items: center;
}

.sidebar-toggle-icon {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fef2f2;
    border-radius: 12px;
    color: #e31b23;
    font-size: 22px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.sidebar-toggle-icon:hover {
    background: #e31b23;
    color: white;
    transform: scale(0.95);
}

/* ===== Right Side ===== */
.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.header-action-item {
    display: flex;
    align-items: center;
}

/* ===== Mode Toggle ===== */
.mode-toggle {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fef2f2;
    border-radius: 12px;
    color: #e31b23;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
}

.mode-toggle:hover {
    background: #e31b23;
    color: white;
    transform: scale(0.95);
}

.mode-toggle i {
    position: absolute;
    transition: all 0.3s ease;
}

.mode-toggle.dark-mode i.la-sun {
    opacity: 0;
    transform: rotate(90deg);
}

.mode-toggle.light-mode i.la-moon {
    opacity: 0;
    transform: rotate(90deg);
}

.mode-toggle.dark-mode i.la-moon {
    opacity: 1;
    transform: rotate(0);
}

.mode-toggle.light-mode i.la-sun {
    opacity: 1;
    transform: rotate(0);
}

/* ===== Profile Dropdown ===== */
.profile-dropdown {
    position: relative;
}

.profile-trigger {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 6px 6px 12px;
    background: #fef2f2;
    border-radius: 40px;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
}

.profile-trigger:hover {
    background: #ffe3e3;
    transform: translateY(-1px);
}

.profile-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(145deg, #e31b23, #c41e24);
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #e31b23, #c41e24);
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
}

.profile-info {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
}

.profile-name {
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
}

.profile-role {
    font-size: 11px;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.profile-arrow {
    color: #9ca3af;
    font-size: 14px;
    margin: 0 4px;
    transition: transform 0.3s ease;
}

.profile-dropdown:hover .profile-arrow {
    transform: rotate(180deg);
    color: #e31b23;
}

/* ===== Profile Menu ===== */
.profile-menu {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    width: 240px;
    background: white;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(227, 27, 35, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000;
}

.profile-dropdown:hover .profile-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.profile-menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    color: #4b5563;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    transition: all 0.2s ease;
}

.profile-menu-item i {
    width: 20px;
    color: #9ca3af;
    font-size: 16px;
    transition: all 0.2s ease;
}

.profile-menu-item:hover {
    background: #fef2f2;
    color: #e31b23;
}

.profile-menu-item:hover i {
    color: #e31b23;
}

.profile-menu-item.logout:hover {
    background: #fee2e2;
    color: #dc2626;
}

.profile-menu-item.logout:hover i {
    color: #dc2626;
}

.profile-divider {
    height: 1px;
    background: #f0f0f0;
    margin: 8px;
}

/* ===== Dark Mode Styles ===== */
body.dark-mode .profile-trigger {
    background: rgba(255, 255, 255, 0.05);
}

body.dark-mode .profile-trigger:hover {
    background: rgba(255, 255, 255, 0.1);
}

body.dark-mode .profile-name {
    color: #f3f4f6;
}

body.dark-mode .profile-role {
    color: #9ca3af;
}

body.dark-mode .profile-menu {
    background: #1f2937;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

body.dark-mode .profile-menu-item {
    color: #e5e7eb;
}

body.dark-mode .profile-menu-item:hover {
    background: rgba(227, 27, 35, 0.2);
}

body.dark-mode .profile-divider {
    background: #374151;
}

/* ===== Notification Badge ===== */
.notification-badge {
    position: relative;
}

.notification-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #e31b23;
    color: white;
    font-size: 10px;
    font-weight: 600;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

/* ===== Responsive ===== */
@media (max-width: 1200px) {
    .dashboard__header {
        padding: 12px 24px;
    }
}

@media (max-width: 992px) {
    .dashboard__header {
        padding: 12px 20px;
    }
    
    .profile-info {
        display: none;
    }
    
    .profile-arrow {
        display: none;
    }
    
    .profile-trigger {
        padding: 6px;
    }
}

@media (max-width: 768px) {
    .dashboard__header {
        padding: 10px 16px;
    }
    
    .header-right {
        gap: 12px;
    }
    
    .mode-toggle,
    .sidebar-toggle-icon {
        width: 38px;
        height: 38px;
        font-size: 18px;
    }
}

@media (max-width: 576px) {
    .profile-name {
        display: none;
    }
    
    .profile-role {
        display: none;
    }
}

/* ===== Animations ===== */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.profile-menu {
    animation: slideDown 0.3s ease;
}

/* ===== Global Search Styling ===== */
.global-search {
    position: relative;
}

.global-search-input {
    width: 280px;
    padding: 10px 16px 10px 44px;
    background: #fef2f2;
    border: none;
    border-radius: 40px;
    font-size: 14px;
    transition: all 0.2s ease;
}

.global-search-input:focus {
    outline: none;
    background: #ffe3e3;
    box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
    width: 320px;
}

.global-search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 16px;
    transition: color 0.2s ease;
}

.global-search-input:focus + .global-search-icon {
    color: #e31b23;
}

@media (max-width: 992px) {
    .global-search-input {
        width: 200px;
    }
    
    .global-search-input:focus {
        width: 240px;
    }
}

@media (max-width: 768px) {
    .global-search {
        display: none;
    }
}

/* ===== Notification Icon ===== */
.notification-icon {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fef2f2;
    border-radius: 12px;
    color: #e31b23;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
}

.notification-icon:hover {
    background: #e31b23;
    color: white;
    transform: scale(0.95);
}

.notification-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    background: #e31b23;
    color: white;
    font-size: 10px;
    font-weight: 600;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

.notification-icon:hover .notification-badge {
    background: white;
    color: #e31b23;
    border-color: #e31b23;
}
</style>

<script>
(function($) {
    "use strict";

    $(document).ready(function() {
        // Profile dropdown click handler for mobile
        $('.profile-trigger').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if ($(window).width() <= 992) {
                $(this).siblings('.profile-menu').toggleClass('show');
            }
        });

        // Close profile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.profile-dropdown').length) {
                $('.profile-menu').removeClass('show');
            }
        });

        // Dark/Light mode toggle
        $('#mode_change').on('click', function() {
            let mode = $('#darkModeValue').val();
            let newMode = mode === 'lightMode' ? 'on' : 'lightMode';
            
            $('#darkModeValue').val(newMode);
            $(this).toggleClass('dark-mode light-mode');
            
            // Toggle body dark mode class
            $('body').toggleClass('dark-mode');
            
            // Update mode text
            if (newMode === 'on') {
                $(this).attr('title', '<?php echo e(__("Switch to Light Mode")); ?>');
            } else {
                $(this).attr('title', '<?php echo e(__("Switch to Dark Mode")); ?>');
            }
            
            // AJAX call to save preference
            $.ajax({
                url: "<?php echo e(route('admin.dark.mode.toggle')); ?>",
                type: "POST",
                data: {
                    _token: "<?php echo e(csrf_token()); ?>",
                    mode: newMode
                }
            });
        });

        // Sidebar toggle for mobile
        $('.sidebar-toggle-icon').on('click', function() {
            $('.dashboard-left-content').toggleClass('show');
        });

        // Initialize mode icon
        let currentMode = $('#darkModeValue').val();
        if (currentMode === 'on') {
            $('#mode_change').removeClass('dark-mode').addClass('light-mode');
            $('body').addClass('dark-mode');
        } else {
            $('#mode_change').removeClass('light-mode').addClass('dark-mode');
            $('body').removeClass('dark-mode');
        }

        // Global search with keyboard shortcut
        $(document).on('keydown', function(e) {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                $('.global-search-input').focus();
            }
        });

        // Notification click handler
        $('.notification-icon').on('click', function() {
            // Add your notification logic here
            console.log('Notifications clicked');
        });

        // Sticky header on scroll
        let lastScroll = 0;
        $(window).on('scroll', function() {
            let currentScroll = $(this).scrollTop();
            
            if (currentScroll > 100) {
                $('.dashboard__header').addClass('header-sticky');
            } else {
                $('.dashboard__header').removeClass('header-sticky');
            }
            
            lastScroll = currentScroll;
        });
    });

})(jQuery);
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/partials/top-header.blade.php ENDPATH**/ ?>