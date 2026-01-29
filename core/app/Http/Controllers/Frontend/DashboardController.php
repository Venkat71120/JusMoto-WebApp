<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Get total orders for the logged-in user
        $totalOrders = Order::where('user_id', $user->id)->count();

        // Get cancelled orders (status = 4)
        $cancelledOrders = Order::where('user_id', $user->id)
            ->where('status', 4)
            ->count();

        // Get pending orders (status = 0)
        $pendingOrders = Order::where('user_id', $user->id)
            ->where('status', 0)
            ->count();

        // Get completed orders (status = 2)
        $completedOrders = Order::where('user_id', $user->id)
            ->where('status', 2)
            ->count();

        // Get greeting based on time of day
        $hour = now()->format('H');
        if ($hour < 12) {
            $greeting = 'Good Morning';
        } elseif ($hour < 18) {
            $greeting = 'Good Afternoon';
        } else {
            $greeting = 'Good Evening';
        }

        // Get recent orders for the table with eager loading
        $orders = Order::where('user_id', $user->id)
            ->with(['orderLocations', 'outletLocation','staff', 'admin'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('frontend.user.client.dashboard', compact(
            'totalOrders',
            'cancelledOrders',
            'pendingOrders',
            'completedOrders',
            'greeting',
            'orders',
            'user'
        ));
    }

    /**
     * Get status text based on status code
     */
    private function getStatusText($status)
    {
        $statuses = [
            0 => 'Pending',
            1 => 'Active',
            2 => 'Completed',
            3 => 'Delivered',
            4 => 'Cancelled'
        ];

        return $statuses[$status] ?? 'Unknown';
    }

    /**
     * Get payment status text
     */
    private function getPaymentStatusText($paymentStatus)
    {
        return $paymentStatus == 1 ? 'Complete' : 'Pending';
    }
}
