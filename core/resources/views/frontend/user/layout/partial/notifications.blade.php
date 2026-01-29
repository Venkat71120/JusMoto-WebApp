<div class="notification_wrapper">
    <i class="fa-regular fa-bell"></i>
    @if(\App\Models\UserNotification::unread_notification_count() > 0)
        <span class="notification_number">
            {{ \App\Models\UserNotification::unread_notification_count() }}
        </span>
    @endif

    <ul class="notification_dropdown_menu">
        @foreach(\App\Models\UserNotification::notification() as $notification)
            <li>
                <x-frontend.client-notification-in-top :notification="$notification"/>
            </li>
        @endforeach

    </ul>
</div>
