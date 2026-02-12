<?php

namespace App\Http\Controllers\Api\Franchise;

use App\Http\Controllers\Controller;
use App\Models\Backend\AdminNotification;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\SupportTicket\app\Models\Ticket;

class FranchiseNotificationController extends Controller
{
    /**
     * Get all notifications for the franchise admin
     */
    public function allNotifications(Request $request)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        // Get notifications specifically for this admin OR global admin notifications (admin_id = null)
        $query = AdminNotification::where(function ($q) use ($admin) {
            $q->where('admin_id', $admin->id)
                ->orWhereNull('admin_id');
        });

        // Filter by type if provided
        if ($request->has('type') && !empty($request->type)) {
            $query->where('type', $request->type);
        }

        // Filter by read status if provided
        if ($request->has('is_read') && in_array($request->is_read, ['read', 'unread'])) {
            $query->where('is_read', $request->is_read);
        }

        $notifications = $query->latest()->paginate($request->get('per_page', 20));

        return response()->json([
            'success' => true,
            'notifications' => $notifications->map(function ($notification) {
                return $this->formatNotification($notification);
            }),
            'pagination' => $this->getPaginationData($notifications),
            'unread_count' => $this->getUnreadCount($admin->id)
        ]);
    }

    /**
     * Get unread notifications count
     */
    public function unreadCount()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        return response()->json([
            'success' => true,
            'unread_count' => $this->getUnreadCount($admin->id)
        ]);
    }

    /**
     * Mark notification as read
     */
    public function markAsRead(Request $request, $id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $notification = AdminNotification::where('id', $id)
            ->where(function ($q) use ($admin) {
                $q->where('admin_id', $admin->id)
                    ->orWhereNull('admin_id');
            })
            ->first();

        if (!$notification) {
            return response()->json([
                'success' => false,
                'message' => __('Notification not found.')
            ], 404);
        }

        $notification->update(['is_read' => 'read']);

        return response()->json([
            'success' => true,
            'message' => __('Notification marked as read.')
        ]);
    }

    /**
     * Mark all notifications as read
     */
    public function markAllAsRead()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        AdminNotification::where(function ($q) use ($admin) {
            $q->where('admin_id', $admin->id)
                ->orWhereNull('admin_id');
        })
            ->where('is_read', 'unread')
            ->update(['is_read' => 'read']);

        return response()->json([
            'success' => true,
            'message' => __('All notifications marked as read.')
        ]);
    }

    /**
     * Get recent activity notifications (orders + tickets)
     * This provides a unified view of all recent activities
     */
    public function recentActivityNotifications()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        // Get recent orders (last 10)
        $recentOrders = Order::where('franchise_admin_id', $admin->id)
            ->latest()
            ->take(10)
            ->get()
            ->map(function ($order) {
                return [
                    'type' => 'order',
                    'id' => $order->id,
                    'title' => __('Order #:id', ['id' => $order->id]),
                    'message' => $this->getOrderNotificationMessage($order),
                    'status' => $this->getOrderStatusLabel($order->status),
                    'status_code' => $order->status,
                    'created_at' => $order->created_at?->format('Y-m-d H:i:s'),
                    'timestamp' => $order->created_at?->timestamp,
                ];
            });

        // Get recent tickets (last 10)
        $recentTickets = Ticket::where('admin_id', $admin->id)
            ->latest()
            ->take(10)
            ->get()
            ->map(function ($ticket) {
                return [
                    'type' => 'ticket',
                    'id' => $ticket->id,
                    'title' => $ticket->title,
                    'message' => $this->getTicketNotificationMessage($ticket),
                    'status' => $ticket->status,
                    'priority' => $ticket->priority,
                    'created_at' => $ticket->created_at?->format('Y-m-d H:i:s'),
                    'timestamp' => $ticket->created_at?->timestamp,
                ];
            });

        // Merge and sort by timestamp
        $combined = collect($recentOrders)->merge($recentTickets)
            ->sortByDesc('timestamp')
            ->take(20)
            ->values();

        return response()->json([
            'success' => true,
            'activity' => $combined,
            'counts' => [
                'pending_orders' => Order::where('franchise_admin_id', $admin->id)
                    ->where('status', 0)->count(),
                'open_tickets' => Ticket::where('admin_id', $admin->id)
                    ->where('status', 'open')->count(),
            ]
        ]);
    }

    /**
     * Get unread count for admin
     */
    private function getUnreadCount($adminId)
    {
        return AdminNotification::where(function ($q) use ($adminId) {
            $q->where('admin_id', $adminId)
                ->orWhereNull('admin_id');
        })
            ->where('is_read', 'unread')
            ->count();
    }

    /**
     * Format notification for response
     */
    private function formatNotification($notification)
    {
        return [
            'id' => $notification->id,
            'identity' => $notification->identity,
            'type' => $notification->type,
            'message' => $notification->message,
            'is_read' => $notification->is_read,
            'created_at' => $notification->created_at?->format('Y-m-d H:i:s'),
            'time_ago' => $notification->created_at?->diffForHumans(),
        ];
    }

    /**
     * Get order notification message
     */
    private function getOrderNotificationMessage($order)
    {
        $messages = [
            0 => __('New order received - awaiting action'),
            1 => __('Order is currently active'),
            2 => __('Order has been completed'),
            3 => __('Order has been delivered'),
            4 => __('Order was cancelled'),
        ];

        return $messages[$order->status] ?? __('Order status updated');
    }

    /**
     * Get ticket notification message
     */
    private function getTicketNotificationMessage($ticket)
    {
        if ($ticket->status === 'open') {
            return __('Support ticket requires attention');
        }
        return __('Support ticket closed');
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

    /**
     * Get pagination data array
     */
    private function getPaginationData($paginator)
    {
        return [
            'total' => $paginator->total(),
            'count' => $paginator->count(),
            'per_page' => $paginator->perPage(),
            'current_page' => $paginator->currentPage(),
            'last_page' => $paginator->lastPage(),
            'next_page_url' => $paginator->nextPageUrl(),
            'prev_page_url' => $paginator->previousPageUrl(),
        ];
    }
}
