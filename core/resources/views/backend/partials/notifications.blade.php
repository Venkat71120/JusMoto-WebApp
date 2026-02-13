<div class="dashboard__header__right__item">
    <div class="notification-dropdown">
        <a href="javascript:void(0)" class="notification-trigger" id="notificationTrigger">
            <i class="las la-bell"></i>
            @php $unreadCount = \App\Models\Backend\AdminNotification::unread_notification_count(); @endphp
            @if($unreadCount > 0)
                <span class="notification-badge">{{ $unreadCount > 9 ? '9+' : $unreadCount }}</span>
            @endif
        </a>

        <div class="notification-menu">
            <div class="notification-header">
                <h6 class="notification-title">{{ __('Notifications') }}</h6>
                @if($unreadCount > 0)
                    <span class="notification-unread-badge">{{ $unreadCount }} {{ __('new') }}</span>
                @endif
            </div>
            
            <div class="notification-list">
                @php $notifications = \App\Models\Backend\AdminNotification::unread_notification(); @endphp
                @forelse($notifications as $notification)
                    <div class="notification-item">
                        <x-backend.admin-notification-in-top :notification="$notification"/>
                    </div>
                @empty
                    <div class="notification-empty">
                        <i class="las la-bell-slash"></i>
                        <p>{{ __('No new notifications') }}</p>
                    </div>
                @endforelse
            </div>
            
            <div class="notification-footer">
                <a href="{{ route('admin.notification.all') }}" class="notification-view-all">
                    {{ __('View All Notifications') }}
                    <i class="las la-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== MODERN RED NOTIFICATION DROPDOWN ===== */
.notification-dropdown {
    position: relative;
}

.notification-trigger {
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
    position: relative;
}

.notification-trigger:hover {
    background: #e31b23;
    color: white;
    transform: scale(0.95);
}

.notification-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: #e31b23;
    color: white;
    font-size: 11px;
    font-weight: 700;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(227, 27, 35, 0.2);
    transition: all 0.2s ease;
}

.notification-trigger:hover .notification-badge {
    background: white;
    color: #e31b23;
    border-color: #e31b23;
}

/* ===== NOTIFICATION MENU ===== */
.notification-menu {
    position: absolute;
    top: calc(100% + 12px);
    right: -20px;
    width: 380px;
    background: white;
    border-radius: 24px;
    box-shadow: 0 15px 40px rgba(227, 27, 35, 0.12);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    overflow: hidden;
}

.notification-dropdown:hover .notification-menu,
.notification-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* ===== NOTIFICATION HEADER ===== */
.notification-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(227, 27, 35, 0.08);
}

.notification-title {
    font-size: 16px;
    font-weight: 700;
    color: #1f2937;
    margin: 0;
    letter-spacing: -0.02em;
}

.notification-unread-badge {
    background: #fef2f2;
    color: #e31b23;
    padding: 6px 12px;
    border-radius: 40px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
}

/* ===== NOTIFICATION LIST ===== */
.notification-list {
    max-height: 360px;
    overflow-y: auto;
    padding: 8px;
}

.notification-item {
    padding: 8px;
    border-radius: 16px;
    transition: all 0.2s ease;
}

.notification-item:hover {
    background: #fef2f2;
}

/* Custom scrollbar */
.notification-list::-webkit-scrollbar {
    width: 4px;
}

.notification-list::-webkit-scrollbar-track {
    background: #fef2f2;
    border-radius: 4px;
}

.notification-list::-webkit-scrollbar-thumb {
    background: #e31b23;
    border-radius: 4px;
    opacity: 0.5;
}

.notification-list::-webkit-scrollbar-thumb:hover {
    background: #b11218;
}

/* ===== EMPTY STATE ===== */
.notification-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    text-align: center;
}

.notification-empty i {
    font-size: 48px;
    color: #fecaca;
    margin-bottom: 16px;
}

.notification-empty p {
    color: #9ca3af;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
}

/* ===== NOTIFICATION FOOTER ===== */
.notification-footer {
    padding: 16px 20px;
    border-top: 1px solid rgba(227, 27, 35, 0.08);
    background: linear-gradient(to bottom, white, #fff8f8);
}

.notification-view-all {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px;
    background: #fef2f2;
    color: #e31b23;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 40px;
    transition: all 0.2s ease;
}

.notification-view-all i {
    font-size: 16px;
    transition: transform 0.2s ease;
}

.notification-view-all:hover {
    background: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(227, 27, 35, 0.2);
}

.notification-view-all:hover i {
    transform: translateX(4px);
}

/* ===== ANIMATIONS ===== */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(227, 27, 35, 0.4);
    }
    70% {
        box-shadow: 0 0 0 8px rgba(227, 27, 35, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(227, 27, 35, 0);
    }
}

.notification-badge:not(:empty) {
    animation: pulse 2s infinite;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.notification-item {
    animation: slideIn 0.3s ease;
    animation-fill-mode: both;
}

.notification-item:nth-child(1) { animation-delay: 0.05s; }
.notification-item:nth-child(2) { animation-delay: 0.1s; }
.notification-item:nth-child(3) { animation-delay: 0.15s; }
.notification-item:nth-child(4) { animation-delay: 0.2s; }
.notification-item:nth-child(5) { animation-delay: 0.25s; }

/* ===== DARK MODE ===== */
body.dark-mode .notification-trigger {
    background: rgba(255, 255, 255, 0.05);
    color: #fecaca;
}

body.dark-mode .notification-trigger:hover {
    background: #e31b23;
    color: white;
}

body.dark-mode .notification-menu {
    background: #1f2937;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

body.dark-mode .notification-header {
    border-bottom-color: rgba(227, 27, 35, 0.2);
}

body.dark-mode .notification-title {
    color: #f3f4f6;
}

body.dark-mode .notification-unread-badge {
    background: rgba(227, 27, 35, 0.2);
    color: #fecaca;
}

body.dark-mode .notification-item:hover {
    background: rgba(227, 27, 35, 0.1);
}

body.dark-mode .notification-empty i {
    color: rgba(227, 27, 35, 0.3);
}

body.dark-mode .notification-empty p {
    color: #9ca3af;
}

body.dark-mode .notification-footer {
    background: #1f2937;
    border-top-color: rgba(227, 27, 35, 0.2);
}

body.dark-mode .notification-view-all {
    background: rgba(227, 27, 35, 0.2);
    color: #fecaca;
}

body.dark-mode .notification-view-all:hover {
    background: #e31b23;
    color: white;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .notification-trigger {
        width: 38px;
        height: 38px;
        font-size: 20px;
    }
    
    .notification-menu {
        width: 340px;
        right: -80px;
    }
}

@media (max-width: 576px) {
    .notification-menu {
        position: fixed;
        top: 70px;
        left: 16px;
        right: 16px;
        width: auto;
        max-width: none;
    }
    
    .notification-list {
        max-height: 300px;
    }
}

/* ===== ACTIVE STATE FOR MOBILE ===== */
@media (max-width: 992px) {
    .notification-menu.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
}

/* ===== NOTIFICATION ITEM CUSTOMIZATION ===== */
.notification-item .admin-notification-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    text-decoration: none;
    color: inherit;
    border-radius: 12px;
    transition: all 0.2s ease;
}

.notification-item .notification-content {
    flex: 1;
}

.notification-item .notification-message {
    font-size: 13px;
    font-weight: 500;
    color: #1f2937;
    margin-bottom: 4px;
    line-height: 1.4;
}

.notification-item .notification-time {
    font-size: 11px;
    color: #9ca3af;
    display: flex;
    align-items: center;
    gap: 4px;
}

.notification-item .notification-time i {
    font-size: 10px;
    color: #e31b23;
}

.notification-item .notification-icon {
    width: 36px;
    height: 36px;
    background: #fef2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e31b23;
    font-size: 18px;
    flex-shrink: 0;
}

body.dark-mode .notification-item .notification-message {
    color: #f3f4f6;
}

body.dark-mode .notification-item .notification-icon {
    background: rgba(227, 27, 35, 0.2);
    color: #fecaca;
}
</style>

{{-- <script>
(function($) {
    "use strict";

    $(document).ready(function() {
        // Toggle notification dropdown on click for mobile
        $('#notificationTrigger').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if ($(window).width() <= 992) {
                $(this).siblings('.notification-menu').toggleClass('active');
            }
        });

        // Close notification menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.notification-dropdown').length) {
                $('.notification-menu').removeClass('active');
            }
        });

        // Prevent click inside menu from closing it
        $('.notification-menu').on('click', function(e) {
            e.stopPropagation();
        });

        // Mark notification as read when clicked
        $(document).on('click', '.notification-item a', function() {
            let notificationItem = $(this).closest('.notification-item');
            let badge = $('.notification-badge');
            let currentCount = parseInt(badge.text()) || 0;
            
            // Add read class for visual feedback
            notificationItem.addClass('read');
            
            // Fade out and remove after a short delay
            setTimeout(function() {
                notificationItem.fadeOut(300, function() {
                    $(this).remove();
                    
                    // Update badge count
                    if (currentCount > 0) {
                        let newCount = currentCount - 1;
                        if (newCount > 0) {
                            badge.text(newCount > 9 ? '9+' : newCount);
                            
                            // Update unread badge in header
                            $('.notification-unread-badge').text(newCount + ' {{ __("new") }}');
                        } else {
                            badge.remove();
                            $('.notification-unread-badge').remove();
                            
                            // Check if no notifications left
                            if ($('.notification-list .notification-item').length === 0) {
                                $('.notification-list').html(`
                                    <div class="notification-empty">
                                        <i class="las la-bell-slash"></i>
                                        <p>{{ __('No new notifications') }}</p>
                                    </div>
                                `);
                            }
                        }
                    }
                });
            }, 300);
        });

        // Keyboard shortcut: Alt + N to open notifications
        $(document).on('keydown', function(e) {
            if (e.altKey && e.key === 'n') {
                e.preventDefault();
                
                if ($(window).width() <= 992) {
                    $('.notification-trigger').trigger('click');
                } else {
                    $('.notification-dropdown').toggleClass('hover');
                }
            }
        });

        // Auto refresh the page when viewing all notifications
        $('.notification-view-all').on('click', function() {
            // No AJAX needed, just follow the link
        });

        // Update notification count from server (if you have this route, otherwise comment out)
        /*
        function updateNotificationCount() {
            $.ajax({
                url: '{{ route("admin.notification.unread.count") }}',
                method: 'GET',
                success: function(count) {
                    // Handle success
                },
                error: function() {
                    console.log('Notification count update skipped - route not available');
                }
            });
        }
        */

        // Initialize tooltips if needed
        $('.notification-trigger').attr('title', '{{ __("Notifications") }}');
        
        // Handle responsive behavior on resize
        $(window).on('resize', function() {
            if ($(window).width() > 992) {
                $('.notification-menu').removeClass('active');
            }
        });

    });
})(jQuery);
</script> --}}