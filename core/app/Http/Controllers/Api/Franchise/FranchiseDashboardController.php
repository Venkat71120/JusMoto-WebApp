<?php

namespace App\Http\Controllers\Api\Franchise;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\SupportTicket\app\Models\Ticket;

class FranchiseDashboardController extends Controller
{
    /**
     * Get dashboard statistics for the franchise admin
     */
    public function statistics()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        // Order statistics
        $orderStats = $this->getOrderStatistics($admin->id);

        // Ticket statistics
        $ticketStats = $this->getTicketStatistics($admin->id);

        // Earnings statistics
        $earningsStats = $this->getEarningsStatistics($admin->id);

        return response()->json([
            'success' => true,
            'statistics' => [
                'orders' => $orderStats,
                'tickets' => $ticketStats,
                'earnings' => $earningsStats,
            ]
        ]);
    }

    /**
     * Get order counts for franchise admin
     */
    public function orderCounts()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $baseQuery = Order::where('franchise_admin_id', $admin->id);

        $counts = [
            'total' => (clone $baseQuery)->count(),
            'pending' => (clone $baseQuery)->where('status', 0)->count(),
            'active' => (clone $baseQuery)->where('status', 1)->count(),
            'completed' => (clone $baseQuery)->where('status', 2)->count(),
            'delivered' => (clone $baseQuery)->where('status', 3)->count(),
            'cancelled' => (clone $baseQuery)->where('status', 4)->count(),
            'paid' => (clone $baseQuery)->where('payment_status', 1)->count(),
            'unpaid' => (clone $baseQuery)->where('payment_status', 0)->count(),
        ];

        return response()->json([
            'success' => true,
            'order_counts' => $counts
        ]);
    }

    /**
     * Get earnings summary for franchise admin
     */
    public function earnings(Request $request)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $period = $request->get('period', 'all'); // all, today, week, month, year

        $baseQuery = Order::where('franchise_admin_id', $admin->id)
            ->whereIn('status', [2, 3]) // Completed or Delivered
            ->where('payment_status', 1); // Paid

        // Apply date filter based on period
        $baseQuery = $this->applyPeriodFilter($baseQuery, $period);

        $totalEarnings = $baseQuery->sum('total');
        $totalTax = $baseQuery->sum('tax');
        $netEarnings = $totalEarnings - $totalTax;
        $orderCount = $baseQuery->count();

        return response()->json([
            'success' => true,
            'earnings' => [
                'period' => $period,
                'total_earnings' => round($totalEarnings, 2),
                'total_tax' => round($totalTax, 2),
                'net_earnings' => round($netEarnings, 2),
                'order_count' => $orderCount,
                'average_order_value' => $orderCount > 0 ? round($totalEarnings / $orderCount, 2) : 0,
            ]
        ]);
    }

    /**
     * Get recent activity for franchise admin dashboard
     */
    public function recentActivity()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        // Recent orders (last 5)
        $recentOrders = Order::with(['user', 'orderItems.service'])
            ->where('franchise_admin_id', $admin->id)
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'invoice_number' => $order->invoice_number,
                    'customer_name' => $order->user?->fullname,
                    'total' => $order->total,
                    'status' => $this->getOrderStatusLabel($order->status),
                    'status_code' => $order->status,
                    'payment_status' => $order->payment_status == 1 ? 'Paid' : 'Unpaid',
                    'created_at' => $order->created_at?->format('Y-m-d H:i:s'),
                ];
            });

        // Recent tickets (last 5)
        $recentTickets = Ticket::with(['user', 'department'])
            ->where('admin_id', $admin->id)
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($ticket) {
                return [
                    'id' => $ticket->id,
                    'title' => $ticket->title,
                    'customer_name' => $ticket->user?->fullname,
                    'status' => $ticket->status,
                    'priority' => $ticket->priority,
                    'created_at' => $ticket->created_at?->format('Y-m-d H:i:s'),
                ];
            });

        return response()->json([
            'success' => true,
            'recent_activity' => [
                'orders' => $recentOrders,
                'tickets' => $recentTickets,
            ]
        ]);
    }

    /**
     * Get earnings chart data for visualization
     */
    public function earningsChart(Request $request)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $type = $request->get('type', 'weekly'); // weekly, monthly, yearly

        $chartData = [];

        switch ($type) {
            case 'weekly':
                $chartData = $this->getWeeklyEarningsChart($admin->id);
                break;
            case 'monthly':
                $chartData = $this->getMonthlyEarningsChart($admin->id);
                break;
            case 'yearly':
                $chartData = $this->getYearlyEarningsChart($admin->id);
                break;
        }

        return response()->json([
            'success' => true,
            'chart_type' => $type,
            'chart_data' => $chartData
        ]);
    }

    /**
     * Get order statistics for franchise
     */
    private function getOrderStatistics($adminId)
    {
        $baseQuery = Order::where('franchise_admin_id', $adminId);

        return [
            'total' => (clone $baseQuery)->count(),
            'pending' => (clone $baseQuery)->where('status', 0)->count(),
            'active' => (clone $baseQuery)->where('status', 1)->count(),
            'completed' => (clone $baseQuery)->where('status', 2)->count(),
            'delivered' => (clone $baseQuery)->where('status', 3)->count(),
            'cancelled' => (clone $baseQuery)->where('status', 4)->count(),
            'today' => (clone $baseQuery)->whereDate('created_at', Carbon::today())->count(),
            'this_week' => (clone $baseQuery)->whereBetween('created_at', [
                Carbon::now()->startOfWeek(),
                Carbon::now()->endOfWeek()
            ])->count(),
            'this_month' => (clone $baseQuery)->whereMonth('created_at', Carbon::now()->month)
                ->whereYear('created_at', Carbon::now()->year)->count(),
        ];
    }

    /**
     * Get ticket statistics for franchise
     */
    private function getTicketStatistics($adminId)
    {
        $baseQuery = Ticket::where('admin_id', $adminId);

        return [
            'total' => (clone $baseQuery)->count(),
            'open' => (clone $baseQuery)->where('status', 'open')->count(),
            'closed' => (clone $baseQuery)->where('status', 'close')->count(),
            'by_priority' => [
                'urgent' => (clone $baseQuery)->where('priority', 'urgent')->count(),
                'high' => (clone $baseQuery)->where('priority', 'high')->count(),
                'normal' => (clone $baseQuery)->where('priority', 'normal')->count(),
                'low' => (clone $baseQuery)->where('priority', 'low')->count(),
            ]
        ];
    }

    /**
     * Get earnings statistics for franchise
     */
    private function getEarningsStatistics($adminId)
    {
        $baseQuery = Order::where('franchise_admin_id', $adminId)
            ->whereIn('status', [2, 3]) // Completed or Delivered
            ->where('payment_status', 1); // Paid

        $totalEarnings = (clone $baseQuery)->sum('total');
        $totalTax = (clone $baseQuery)->sum('tax');

        $todayEarnings = (clone $baseQuery)->whereDate('created_at', Carbon::today())->sum('total');
        $weekEarnings = (clone $baseQuery)->whereBetween('created_at', [
            Carbon::now()->startOfWeek(),
            Carbon::now()->endOfWeek()
        ])->sum('total');
        $monthEarnings = (clone $baseQuery)->whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)->sum('total');

        return [
            'total' => round($totalEarnings, 2),
            'total_tax' => round($totalTax, 2),
            'net_total' => round($totalEarnings - $totalTax, 2),
            'today' => round($todayEarnings, 2),
            'this_week' => round($weekEarnings, 2),
            'this_month' => round($monthEarnings, 2),
        ];
    }

    /**
     * Apply period filter to query
     */
    private function applyPeriodFilter($query, $period)
    {
        switch ($period) {
            case 'today':
                return $query->whereDate('created_at', Carbon::today());
            case 'week':
                return $query->whereBetween('created_at', [
                    Carbon::now()->startOfWeek(),
                    Carbon::now()->endOfWeek()
                ]);
            case 'month':
                return $query->whereMonth('created_at', Carbon::now()->month)
                    ->whereYear('created_at', Carbon::now()->year);
            case 'year':
                return $query->whereYear('created_at', Carbon::now()->year);
            default:
                return $query;
        }
    }

    /**
     * Get weekly earnings chart data (last 7 days)
     */
    private function getWeeklyEarningsChart($adminId)
    {
        $data = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $earnings = Order::where('franchise_admin_id', $adminId)
                ->whereIn('status', [2, 3])
                ->where('payment_status', 1)
                ->whereDate('created_at', $date)
                ->sum('total');

            $data[] = [
                'label' => $date->format('D'),
                'date' => $date->format('Y-m-d'),
                'earnings' => round($earnings, 2),
            ];
        }
        return $data;
    }

    /**
     * Get monthly earnings chart data (last 30 days)
     */
    private function getMonthlyEarningsChart($adminId)
    {
        $data = [];
        for ($i = 29; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $earnings = Order::where('franchise_admin_id', $adminId)
                ->whereIn('status', [2, 3])
                ->where('payment_status', 1)
                ->whereDate('created_at', $date)
                ->sum('total');

            $data[] = [
                'label' => $date->format('d M'),
                'date' => $date->format('Y-m-d'),
                'earnings' => round($earnings, 2),
            ];
        }
        return $data;
    }

    /**
     * Get yearly earnings chart data (last 12 months)
     */
    private function getYearlyEarningsChart($adminId)
    {
        $data = [];
        for ($i = 11; $i >= 0; $i--) {
            $date = Carbon::today()->subMonths($i);
            $earnings = Order::where('franchise_admin_id', $adminId)
                ->whereIn('status', [2, 3])
                ->where('payment_status', 1)
                ->whereMonth('created_at', $date->month)
                ->whereYear('created_at', $date->year)
                ->sum('total');

            $data[] = [
                'label' => $date->format('M Y'),
                'month' => $date->format('Y-m'),
                'earnings' => round($earnings, 2),
            ];
        }
        return $data;
    }

    /**
     * Get order status label
     */
    private function getOrderStatusLabel($status)
    {
        $labels = [
            0 => 'Pending',
            1 => 'Active',
            2 => 'Completed',
            3 => 'Delivered',
            4 => 'Cancelled',
        ];

        return $labels[$status] ?? 'Unknown';
    }
}
