@if($notification->type === 'order')
    @php
        $order = \App\Models\Order::find($notification->identity);
    @endphp

    @if($order)
        <a href="{{ route('order.details', ['id' => $notification->identity, 'notificationId' => $notification->id]) }}"  class="notification_content">
            <span class="action-btn hw_40">
               <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message ?? '' }} </p>
                <span class="notification_date"> {{ $notification->created_at->toFormattedDateString() }}</span>
            </div>
        </a>
    @else

        <a href="javascript:void(0)" class="notification_content">
           <span class="action-btn hw_40">
              <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message ?? '' }} </p>
                <span class="notification_date"> {{ $notification->created_at->toFormattedDateString() }}</span>
            </div>
        </a>
    @endif

@endif

@if($notification->type === 'offer')
    @php
        $offer = \App\Models\Offer::find($notification->identity);
    @endphp

    @if($offer)
        <a href="{{ route('offer.show', ['offer_id' => $notification->identity, 'notificationId' => $notification->id]) }}"  class="notification_content">
            <span class="action-btn hw_40">
               <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message ?? '' }} </p>
                <span class="notification_date"> {{ $notification->created_at->toFormattedDateString() }}</span>
            </div>
        </a>
    @else

        <a href="javascript:void(0)" class="notification_content">
           <span class="action-btn hw_40">
              <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message ?? '' }} </p>
                <span class="notification_date"> {{ $notification->created_at->toFormattedDateString() }}</span>
            </div>
        </a>
    @endif

@endif

@if($notification->type === 'transaction')
    @php
        $transaction = \Modules\Wallet\app\Models\Transaction::find($notification->identity);
    @endphp

    @if($transaction)
        <a class="notification_content {{($notification->is_read === 'unread') ? 'active' : ''}}" href="{{ route('client.wallet.transactions.show',  ['id' => $notification->identity, 'notificationId' => $notification->id]) }}">
            <span class="action-btn hw_40">
              <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message }}</p>
                <span class="notification_date">{{ $notification->created_at->diffForHumans() }}</span>
            </div>
        </a>
    @else
        <a class="notification_content {{($notification->is_read === 'unread') ? 'active' : ''}}" href="javascript:void(0)">
            <span class="action-btn hw_40">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message }}</p>
                <span class="notification_date">{{ $notification->created_at->diffForHumans() }}</span>
            </div>
        </a>
    @endif
@endif


@if($notification->type === 'ticket' || $notification->type === 'ticket-update')
    @php
        $ticket = \Modules\SupportTicket\app\Models\Ticket::find($notification->identity);
    @endphp

    @if($ticket)
        <a href="{{ route('ticket.details',  ['id' => $notification->identity, 'notificationId' => $notification->id]) }}" class="notification_content">

            <span class="action-btn hw_40">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message ?? '' }} </p>
                <span class="notification_date"> {{ $notification->created_at->toFormattedDateString() }}</span>
            </div>

        </a>
    @else
        <a href="javascript:void(0)" class="notification_content">
            <span class="action-btn hw_40">
                <i class="icon-24px ti tabler-bell"></i>
            </span>
            <div>
                <p class="notification_title"> {{ $notification->message ?? '' }} </p>
                <span class="notification_date"> {{ $notification->created_at->toFormattedDateString() }}</span>
            </div>
        </a>
    @endif

@endif




