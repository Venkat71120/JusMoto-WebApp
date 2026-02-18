<?php

namespace App\Http\Controllers\Api\Franchise;

use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Modules\SupportTicket\app\Models\ChatMessage;
use Modules\SupportTicket\app\Models\Ticket;

class FranchiseSupportTicketController extends Controller
{
    /**
     * Get all tickets assigned to the franchise admin
     */
    public function allTickets(Request $request)
    {
        $admin = Auth::guard('sanctum')->user();

        // Ensure user is a franchise admin
        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $query = Ticket::with(['department', 'user'])
            ->where('admin_id', $admin->id);

        // Filter by status if provided
        if ($request->has('status') && in_array($request->status, ['open', 'close'])) {
            $query->where('status', $request->status);
        }

        // Filter by priority if provided
        if ($request->has('priority') && in_array($request->priority, ['low', 'normal', 'high', 'urgent'])) {
            $query->where('priority', $request->priority);
        }

        $tickets = $query->latest()->paginate($request->get('per_page', 10));

        if ($tickets->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => __('No tickets found.'),
                'tickets' => [],
                'pagination' => $this->getPaginationData($tickets)
            ]);
        }

        return response()->json([
            'success' => true,
            'tickets' => $tickets->map(function ($ticket) {
                return $this->formatTicketListItem($ticket);
            }),
            'pagination' => $this->getPaginationData($tickets)
        ]);
    }

    /**
     * Get ticket details with messages and order/service request info
     */
    public function ticketDetails($id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $ticket = Ticket::with(['department', 'user', 'message', 'order.orderItems.service', 'order.OrderLocations', 'order.outletLocation', 'order.staff', 'order.user'])
            ->where('id', $id)
            ->where('admin_id', $admin->id)
            ->first();

        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => __('Ticket not found or you do not have permission to view it.')
            ], 404);
        }

        // Get order details - first try direct relationship, then fallback to description parsing
        $orderDetails = null;

        if ($ticket->order) {
            $orderDetails = $this->formatOrderDetails($ticket->order);
        } else {
            // Fallback: Extract order ID from ticket description for old tickets
            $orderId = $this->extractOrderIdFromDescription($ticket->description);
            if ($orderId) {
                $order = Order::with([
                    'user',
                    'orderItems.service',
                    'OrderLocations',
                    'outletLocation',
                    'staff'
                ])->find($orderId);

                if ($order) {
                    $orderDetails = $this->formatOrderDetails($order);
                }
            }
        }

        // Get paginated messages
        $messages = $ticket->message()->latest()->paginate(20);

        return response()->json([
            'success' => true,
            'ticket' => $this->formatTicketDetails($ticket),
            'service_request' => $orderDetails,
            'messages' => $messages->map(function ($message) {
                return $this->formatMessage($message);
            }),
            'message_pagination' => $this->getPaginationData($messages)
        ]);
    }

    /**
     * Send a reply message to a ticket
     */
    public function sendReply(Request $request, $id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        // Validate input
        if (empty($request->message) && !$request->hasFile('attachment')) {
            return response()->json([
                'success' => false,
                'message' => __('Please provide a message or attachment.')
            ], 422);
        }

        $request->validate([
            'message' => 'nullable|string|max:10000',
            'attachment' => 'nullable|file|mimes:jpg,jpeg,png,webp,gif,pdf,svg,xlsx,xls,txt|max:5120',
        ]);

        $ticket = Ticket::where('id', $id)
            ->where('admin_id', $admin->id)
            ->first();

        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => __('Ticket not found or you do not have permission to reply.')
            ], 404);
        }

        // Handle attachment upload
        $attachmentName = null;
        if ($attachment = $request->file('attachment')) {
            $attachmentName = time() . '-' . uniqid() . '.' . $attachment->getClientOriginalExtension();
            $attachment->move('assets/uploads/ticket/chat-messages', $attachmentName);
        }

        // Create the message
        $chatMessage = ChatMessage::create([
            'ticket_id' => $ticket->id,
            'message' => $request->message ?? '',
            'attachment' => $attachmentName ?? '',
            'notify' => $request->email_notify ?? 'off',
            'type' => 'admin',
        ]);

        // Update ticket status to open if it was closed
        if ($ticket->status === 'close') {
            $ticket->update(['status' => 'open']);
        }

        // Send notification to user
        if ($ticket->user_id) {
            user_notification($ticket->id, $ticket->user_id, 'ticket', __('New reply on your support ticket'), 0);
        }

        // Send email notification if requested
        if ($request->email_notify === 'on' && $ticket->user && $ticket->user->email) {
            try {
                $subject = get_static_option('support_ticket_reply_subject') ?? __('Support Ticket Reply');
                $message = get_static_option('support_ticket_reply_message') ?? __('You have received a new reply on your support ticket.');
                $message = str_replace(
                    ["@name", "@ticket_id"],
                    [$ticket->user->fullname ?? 'Customer', $ticket->id],
                    $message
                );

                Mail::to($ticket->user->email)->send(new BasicMail([
                    'subject' => $subject,
                    'message' => $message
                ]));
            } catch (\Exception $e) {
                // Log error but don't fail the request
            }
        }

        return response()->json([
            'success' => true,
            'message' => __('Reply sent successfully.'),
            'chat_message' => $this->formatMessage($chatMessage)
        ]);
    }

    /**
     * Change ticket status (open/close)
     */
    public function changeStatus(Request $request, $id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $request->validate([
            'status' => 'required|in:open,close'
        ]);

        $ticket = Ticket::where('id', $id)
            ->where('admin_id', $admin->id)
            ->first();

        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => __('Ticket not found or you do not have permission to update it.')
            ], 404);
        }

        $oldStatus = $ticket->status;
        $ticket->update(['status' => $request->status]);

        // Send notification to user about status change
        if ($ticket->user_id) {
            $statusMessage = $request->status === 'close'
                ? __('Your support ticket has been closed.')
                : __('Your support ticket has been reopened.');

            user_notification($ticket->id, $ticket->user_id, 'ticket', $statusMessage, 0);
        }

        return response()->json([
            'success' => true,
            'message' => __('Ticket status updated successfully.'),
            'ticket' => [
                'id' => $ticket->id,
                'old_status' => $oldStatus,
                'new_status' => $ticket->status
            ]
        ]);
    }

    /**
     * Get ticket statistics for the franchise admin
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

        $baseQuery = Ticket::where('admin_id', $admin->id);

        $stats = [
            'total' => (clone $baseQuery)->count(),
            'open' => (clone $baseQuery)->where('status', 'open')->count(),
            'closed' => (clone $baseQuery)->where('status', 'close')->count(),
            'by_priority' => [
                'low' => (clone $baseQuery)->where('priority', 'low')->count(),
                'normal' => (clone $baseQuery)->where('priority', 'normal')->count(),
                'high' => (clone $baseQuery)->where('priority', 'high')->count(),
                'urgent' => (clone $baseQuery)->where('priority', 'urgent')->count(),
            ]
        ];

        return response()->json([
            'success' => true,
            'statistics' => $stats
        ]);
    }

    /**
     * Extract order ID from ticket description
     */
    private function extractOrderIdFromDescription($description)
    {
        if (preg_match('/Order ID:\s*#?(\d+)/i', $description, $matches)) {
            return (int) $matches[1];
        }
        return null;
    }

    /**
     * Format ticket for list view
     */
    private function formatTicketListItem($ticket)
    {
        return [
            'id' => $ticket->id,
            'order_id' => $ticket->order_id,
            'title' => $ticket->title,
            'priority' => $ticket->priority,
            'status' => $ticket->status,
            'department' => $ticket->department?->name,
            'customer' => [
                'id' => $ticket->user?->id,
                'name' => $ticket->user?->fullname,
                'email' => $ticket->user?->email,
                'phone' => $ticket->user?->phone,
            ],
            'last_message' => $ticket->get_ticket_latest_message?->message,
            'last_message_type' => $ticket->get_ticket_latest_message?->type,
            'created_at' => $ticket->created_at?->format('Y-m-d H:i:s'),
            'updated_at' => $ticket->updated_at?->format('Y-m-d H:i:s'),
        ];
    }

    /**
     * Format ticket for details view
     */
    private function formatTicketDetails($ticket)
    {
        return [
            'id' => $ticket->id,
            'order_id' => $ticket->order_id,
            'title' => $ticket->title,
            'subject' => $ticket->subject,
            'description' => $ticket->description,
            'priority' => $ticket->priority,
            'status' => $ticket->status,
            'department' => [
                'id' => $ticket->department?->id,
                'name' => $ticket->department?->name,
            ],
            'customer' => [
                'id' => $ticket->user?->id,
                'name' => $ticket->user?->fullname,
                'email' => $ticket->user?->email,
                'phone' => $ticket->user?->phone,
                'image' => $ticket->user?->image,
            ],
            'created_at' => $ticket->created_at?->format('Y-m-d H:i:s'),
            'updated_at' => $ticket->updated_at?->format('Y-m-d H:i:s'),
        ];
    }

    /**
     * Format order/service request details
     */
    private function formatOrderDetails($order)
    {
        return [
            'id' => $order->id,
            'invoice_number' => $order->invoice_number,
            'date' => $order->date,
            'schedule' => $order->schedule,
            'status' => $this->getOrderStatusLabel($order->status),
            'status_code' => $order->status,
            'payment_status' => $order->payment_status == 1 ? 'Paid' : 'Unpaid',
            'payment_gateway' => $order->payment_gateway,
            'sub_total' => $order->sub_total,
            'tax' => $order->tax,
            'delivery_charge' => $order->delivery_charge,
            'coupon_amount' => $order->coupon_amount,
            'total' => $order->total,
            'order_note' => $order->order_note,
            'customer' => [
                'id' => $order->user?->id,
                'name' => $order->user?->fullname,
                'email' => $order->user?->email,
                'phone' => $order->user?->phone,
            ],
            'location' => $order->OrderLocations ? [
                'address' => $order->OrderLocations->address ?? null,
                'city' => $order->OrderLocations->city ?? null,
                'state' => $order->OrderLocations->state ?? null,
                'zip' => $order->OrderLocations->zip ?? null,
                'latitude' => $order->OrderLocations->latitude ?? null,
                'longitude' => $order->OrderLocations->longitude ?? null,
            ] : null,
            'outlet' => $order->outletLocation ? [
                'id' => $order->outletLocation->id,
                'name' => $order->outletLocation->name ?? null,
                'address' => $order->outletLocation->address ?? null,
            ] : null,
            'staff' => $order->staff ? [
                'id' => $order->staff->id,
                'name' => $order->staff->first_name . ' ' . $order->staff->last_name,
                'phone' => $order->staff->phone ?? null,
            ] : null,
            'items' => $order->orderItems->map(function ($item) {
                return [
                    'id' => $item->id,
                    'service_id' => $item->service_id,
                    'type' => $item->type == 0 ? 'service' : 'product',
                    'name' => $item->service?->title,
                    'image' => $item->service?->image,
                    'quantity' => $item->qty,
                    'price' => $item->price,
                    'total' => $item->qty * $item->price,
                ];
            }),
            'created_at' => $order->created_at?->format('Y-m-d H:i:s'),
        ];
    }

    /**
     * Format chat message
     */
    private function formatMessage($message)
    {
        return [
            'id' => $message->id,
            'message' => $message->message,
            'attachment' => $message->attachment ? asset('assets/uploads/ticket/chat-messages/' . $message->attachment) : null,
            'type' => $message->type, // 'admin' or 'user'
            'created_at' => $message->created_at?->format('Y-m-d H:i:s'),
        ];
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
