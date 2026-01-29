<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\UserNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class NotificationController extends Controller
{
    public function all_notification(Request $request)
    {

        $client_id=Auth::user()->id;
        // Paginate all notifications
        $filter = $request->get('filter', 'all');

        // Base query
        $query = UserNotification::where('user_id',$client_id)->orderBy('created_at', 'desc');

        if ($filter === 'unread') {
            $query->where('is_read','unread');
        }

        // Paginate
        $notifications = $query->paginate(10);

        $todayNotifications = $notifications->filter(function ($notification) {
            return $notification->created_at->isToday();
        });

        $previousNotifications = $notifications->filter(function ($notification) {
            return !$notification->created_at->isToday();
        });

        //unread message count
        $unread_message=UserNotification::where('user_id',$client_id)->where('is_read','unread')->count();

        return view('frontend.user.client.notification.all-notification', compact(
            'notifications',
            'todayNotifications',
            'previousNotifications',
            'filter',
            'unread_message'
        ));

    }



    // read notification
    public function read_notification()
    {
        $client_id=Auth::user()->id;
        UserNotification::where('user_id',$client_id)->where('is_read','unread')
            ->update(['is_read' => 'read']);
        toastr_success('All notifications marked as read.!!');
        return redirect()->back();
    }
}
