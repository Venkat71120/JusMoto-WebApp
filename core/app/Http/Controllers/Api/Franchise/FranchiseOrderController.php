<?php

namespace App\Http\Controllers\Api\Franchise;

use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\Order;
use App\Models\RefundedOrder;
use App\Models\OrderCancellationPolicy;
use App\Models\Staff;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class FranchiseOrderController extends Controller
{
    /**
     * Get all orders allocated to the franchise admin
     */
    public function allOrders(Request $request)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $query = Order::with(['user', 'orderItems.service', 'OrderLocations', 'outletLocation', 'staff'])
            ->where('franchise_admin_id', $admin->id);

        // Filter by status if provided
        if ($request->has('status') && in_array($request->status, ['0', '1', '2', '3', '4'])) {
            $query->where('status', (int) $request->status);
        }

        // Filter by payment status if provided
        if ($request->has('payment_status') && in_array($request->payment_status, ['0', '1'])) {
            $query->where('payment_status', (int) $request->payment_status);
        }

        // Filter by date range
        if ($request->has('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }
        if ($request->has('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        // Search by invoice number or customer name
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('invoice_number', 'LIKE', "%{$search}%")
                    ->orWhereHas('user', function ($userQuery) use ($search) {
                        $userQuery->where('first_name', 'LIKE', "%{$search}%")
                            ->orWhere('last_name', 'LIKE', "%{$search}%")
                            ->orWhere('email', 'LIKE', "%{$search}%")
                            ->orWhere('phone', 'LIKE', "%{$search}%");
                    });
            });
        }

        $orders = $query->latest()->paginate($request->get('per_page', 10));

        if ($orders->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => __('No orders found.'),
                'orders' => [],
                'pagination' => $this->getPaginationData($orders)
            ]);
        }

        return response()->json([
            'success' => true,
            'orders' => $orders->map(function ($order) {
                return $this->formatOrderListItem($order);
            }),
            'pagination' => $this->getPaginationData($orders)
        ]);
    }

    /**
     * Get order details
     */
    public function orderDetails($id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $order = Order::with([
            'user',
            'orderItems.service',
            'OrderLocations',
            'outletLocation',
            'staff',
            'refundedOrder'
        ])
            ->where('id', $id)
            ->where('franchise_admin_id', $admin->id)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => __('Order not found or you do not have permission to view it.')
            ], 404);
        }

        return response()->json([
            'success' => true,
            'order' => $this->formatOrderDetails($order)
        ]);
    }

    /**
     * Change order status
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
            'status' => 'required|in:0,1,2,3,4'
        ]);

        $order = Order::with('user')
            ->where('id', $id)
            ->where('franchise_admin_id', $admin->id)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => __('Order not found or you do not have permission to update it.')
            ], 404);
        }

        $newStatus = (int) $request->status;
        $oldStatus = $order->status;

        // Prevent completing unpaid orders
        if ($newStatus == 2 && $order->payment_status != 1) {
            return response()->json([
                'success' => false,
                'message' => __('Order cannot be completed without payment.')
            ], 422);
        }

        // Handle cancellation with refund logic
        if ($newStatus == 4) {
            $result = $this->handleOrderCancellation($order);
            if (!$result['success']) {
                return response()->json([
                    'success' => false,
                    'message' => $result['message']
                ], 422);
            }
        } else {
            $order->update(['status' => $newStatus]);
        }

        // Send notification to user
        if ($order->user_id) {
            $statusMessage = $this->getStatusChangeMessage($newStatus, $order->id);
            user_notification($order->id, $order->user_id, 'order', $statusMessage);
        }

        // Send email notification
        $this->sendStatusChangeEmail($order, $oldStatus, $newStatus);

        return response()->json([
            'success' => true,
            'message' => __('Order status updated successfully.'),
            'order' => [
                'id' => $order->id,
                'old_status' => $this->getOrderStatusLabel($oldStatus),
                'old_status_code' => $oldStatus,
                'new_status' => $this->getOrderStatusLabel($newStatus),
                'new_status_code' => $newStatus
            ]
        ]);
    }

    /**
     * Change payment status
     */
    public function changePaymentStatus(Request $request, $id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $request->validate([
            'payment_status' => 'required|in:0,1'
        ]);

        $order = Order::with('user')
            ->where('id', $id)
            ->where('franchise_admin_id', $admin->id)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => __('Order not found or you do not have permission to update it.')
            ], 404);
        }

        $oldPaymentStatus = $order->payment_status;
        $newPaymentStatus = (int) $request->payment_status;

        $order->update(['payment_status' => $newPaymentStatus]);

        // Send notification to user
        if ($order->user_id) {
            $message = $newPaymentStatus == 1
                ? __('Your order (#:order_id) payment is completed.', ['order_id' => $order->id])
                : __('Your order (#:order_id) payment is pending.', ['order_id' => $order->id]);
            user_notification($order->id, $order->user_id, 'order', $message);
        }

        return response()->json([
            'success' => true,
            'message' => __('Payment status updated successfully.'),
            'order' => [
                'id' => $order->id,
                'old_payment_status' => $oldPaymentStatus == 1 ? 'Paid' : 'Unpaid',
                'new_payment_status' => $newPaymentStatus == 1 ? 'Paid' : 'Unpaid'
            ]
        ]);
    }

    /**
     * Assign staff to an order
     */
    public function assignStaff(Request $request, $id)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $request->validate([
            'staff_id' => 'required|exists:staff,id'
        ]);

        $order = Order::with(['user', 'staff'])
            ->where('id', $id)
            ->where('franchise_admin_id', $admin->id)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => __('Order not found or you do not have permission to update it.')
            ], 404);
        }

        $staff = Staff::find($request->staff_id);
        if (!$staff || $staff->status != 1) {
            return response()->json([
                'success' => false,
                'message' => __('Staff member not found or is not active.')
            ], 404);
        }

        $oldStaff = $order->staff;
        $order->update(['staff_id' => $request->staff_id]);

        // Send notification to user
        if ($order->user_id) {
            $message = __(':staff will now be assisting you with your service on :date.', [
                'staff' => $staff->first_name,
                'date' => $order->date
            ]);
            user_notification($order->id, $order->user_id, 'order', $message);
        }

        return response()->json([
            'success' => true,
            'message' => __('Staff assigned successfully.'),
            'order' => [
                'id' => $order->id,
                'old_staff' => $oldStaff ? [
                    'id' => $oldStaff->id,
                    'name' => $oldStaff->first_name . ' ' . $oldStaff->last_name
                ] : null,
                'new_staff' => [
                    'id' => $staff->id,
                    'name' => $staff->first_name . ' ' . $staff->last_name,
                    'phone' => $staff->phone
                ]
            ]
        ]);
    }

    /**
     * Get available staff members
     */
    public function availableStaff()
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin || !$admin->is_franchise) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized. Only franchise admins can access this resource.')
            ], 403);
        }

        $staff = Staff::where('status', 1)->get()->map(function ($s) {
            return [
                'id' => $s->id,
                'name' => $s->first_name . ' ' . $s->last_name,
                'phone' => $s->phone,
                'email' => $s->email,
                'image' => $s->image,
            ];
        });

        return response()->json([
            'success' => true,
            'staff' => $staff
        ]);
    }

    /**
     * Handle order cancellation with refund logic
     */
    private function handleOrderCancellation($order)
    {
        if ($order->status == 4) {
            return ['success' => false, 'message' => __('Order is already cancelled.')];
        }

        $cancellationPolicy = OrderCancellationPolicy::first();
        $refundedAmount = 0;

        // If paid, check cancellation policy
        if ($order->payment_status == 1) {
            $availableType = $cancellationPolicy->available_type ?? 'always';

            if ($availableType == 'certain_time') {
                $cancelTime = $cancellationPolicy->time_in_min;
                $currentTime = Carbon::now();
                $orderCreatedTime = Carbon::parse($order->created_at);
                $diffInMinutes = $currentTime->diffInMinutes($orderCreatedTime);

                if ($diffInMinutes > $cancelTime) {
                    return ['success' => false, 'message' => __('Order cannot be cancelled. Cancellation time limit exceeded.')];
                }
            }

            // Calculate refund
            if ($cancellationPolicy->fine_type == 'flat') {
                $refundedAmount = $order->total - $cancellationPolicy->amount;
            } else if ($cancellationPolicy->fine_type == 'percentage') {
                $refundedAmount = $order->total - ($order->total * $cancellationPolicy->amount / 100);
            }

            $order->status = 4;
            $order->is_refunded = 1;
            $order->save();

            RefundedOrder::create([
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'amount' => max(0, $refundedAmount),
            ]);
        } else {
            // Unpaid order - just cancel
            if ($cancellationPolicy && $cancellationPolicy->available_type == 'certain_time') {
                $cancelTime = $cancellationPolicy->time_in_min;
                $currentTime = Carbon::now();
                $orderCreatedTime = Carbon::parse($order->created_at);
                $diffInMinutes = $currentTime->diffInMinutes($orderCreatedTime);

                if ($diffInMinutes > $cancelTime) {
                    return ['success' => false, 'message' => __('Order cannot be cancelled. Cancellation time limit exceeded.')];
                }
            }

            $order->status = 4;
            $order->is_refunded = 0;
            $order->save();
        }

        return ['success' => true, 'refunded_amount' => $refundedAmount];
    }

    /**
     * Send status change email
     */
    private function sendStatusChangeEmail($order, $oldStatus, $newStatus)
    {
        if (!$order->user || !$order->user->email) {
            return;
        }

        try {
            $statusLabels = [
                0 => 'Pending',
                1 => 'Active',
                2 => 'Completed',
                3 => 'Delivered',
                4 => 'Cancelled'
            ];

            $subject = __('Order Status Changed - Order #:id', ['id' => $order->id]);
            $message = __('Your order #:id status has changed from :old to :new.', [
                'id' => $order->id,
                'old' => $statusLabels[$oldStatus] ?? 'Unknown',
                'new' => $statusLabels[$newStatus] ?? 'Unknown'
            ]);

            Mail::to($order->user->email)->send(new BasicMail([
                'subject' => $subject,
                'message' => $message
            ]));
        } catch (\Exception $e) {
            // Log error but don't fail the request
        }
    }

    /**
     * Get status change message for notifications
     */
    private function getStatusChangeMessage($status, $orderId)
    {
        $messages = [
            0 => __('Your order #:id is now pending.', ['id' => $orderId]),
            1 => __('Your order #:id is now active.', ['id' => $orderId]),
            2 => __('Your order #:id has been completed.', ['id' => $orderId]),
            3 => __('Your order #:id has been delivered.', ['id' => $orderId]),
            4 => __('Your order #:id has been cancelled.', ['id' => $orderId]),
        ];

        return $messages[$status] ?? __('Your order #:id status has been updated.', ['id' => $orderId]);
    }

    /**
     * Format order for list view
     */
    private function formatOrderListItem($order)
    {
        return [
            'id' => $order->id,
            'invoice_number' => $order->invoice_number,
            'date' => $order->date,
            'schedule' => $order->schedule,
            'status' => $this->getOrderStatusLabel($order->status),
            'status_code' => $order->status,
            'payment_status' => $order->payment_status == 1 ? 'Paid' : 'Unpaid',
            'payment_status_code' => $order->payment_status,
            'total' => $order->total,
            'customer' => [
                'id' => $order->user?->id,
                'name' => $order->user?->fullname,
                'phone' => $order->user?->phone,
            ],
            'staff' => $order->staff ? [
                'id' => $order->staff->id,
                'name' => $order->staff->first_name . ' ' . $order->staff->last_name,
            ] : null,
            'items_count' => $order->orderItems->count(),
            'created_at' => $order->created_at?->format('Y-m-d H:i:s'),
        ];
    }

    /**
     * Format order for details view
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
            'payment_status_code' => $order->payment_status,
            'payment_gateway' => $order->payment_gateway,
            'transaction_id' => $order->transaction_id,
            'sub_total' => $order->sub_total,
            'tax' => $order->tax,
            'delivery_charge' => $order->delivery_charge,
            'coupon_code' => $order->coupon_code,
            'coupon_amount' => $order->coupon_amount,
            'total' => $order->total,
            'order_note' => $order->order_note,
            'is_refunded' => $order->is_refunded,
            'refund_amount' => $order->refundedOrder?->amount,
            'customer' => [
                'id' => $order->user?->id,
                'name' => $order->user?->fullname,
                'email' => $order->user?->email,
                'phone' => $order->user?->phone,
                'image' => $order->user?->image,
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
                'email' => $order->staff->email ?? null,
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
            'updated_at' => $order->updated_at?->format('Y-m-d H:i:s'),
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
