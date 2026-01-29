@extends('frontend.user.layout.master')
@section('site-title')
    {{__('All Notification')}}
@endsection
@section('style')

@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <h4 class="page-heading mb-4">{{__('Notificattions')}}</h4>
            <div>
                <!-- notification container -->
                <div class="d-flex justify-content-between pt_3 mb_6 border_bottom_1">
                    <ul class="nav nav-pills notifications_tabs">
                        <li class="nav-item">
                            <a class="nav-link notifications {{ $filter === 'all' ? 'active' : '' }}"
                               href="{{ route('client.notification.all', ['filter' => 'all']) }}">
                                {{ __('All') }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link notifications {{ $filter === 'unread' ? 'active' : '' }}"
                               href="{{ route('client.notification.all', ['filter' => 'unread']) }}">
                                {{ __('Unread') }} {{ $unread_message }}
                            </a>
                        </li>
                    </ul>

                    <a href="{{route('client.notification.read')}}" class="mark_all_as_read text-decoration-none" id="mark_all_as_read">
                        <i class="icon-base ti tabler-checks"></i>
                        <span>{{__('Mark all as read')}}</span>
                    </a>
                </div>
                <div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="all_notify_info" role="tabpanel"
                             aria-labelledby="all_notification" tabindex="0">
                            <h6 class="page-heading-2 mt-3">{{ __('Today') }}</h6>
                            <div class="all_notification_wrapper">
                                @forelse($todayNotifications as $notification)
                                    @include('frontend.user.client.notification.notification-list',[$notification])
                                @empty
                                    <p>{{ __('No notifications today.') }}</p>
                                @endforelse
                            </div>
                            <h6 class=" page-heading-2 mt-3">{{__('Previous Days')}}</h6>
                            <div class="all_notification_wrapper">
                                @forelse($previousNotifications as $notification)
                                    @include('frontend.user.client.notification.notification-list',[$notification])
                                @empty
                                    <p>{{ __('No notifications found.') }}</p>
                                @endforelse
                            </div>
                            @if($notifications->count()>0)
                                <!-- Pagination -->
                                <div class="pagination mt-3 d-flex justify-content-end">
                                    <x-frontend.dashboard-pagination.pagination :paginator="$notifications" />
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-msg.flash-msg />
    <x-msg.response-message />

@endsection
@section('scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection
