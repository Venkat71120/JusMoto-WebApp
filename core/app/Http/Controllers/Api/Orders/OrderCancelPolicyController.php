<?php

namespace App\Http\Controllers\Api\Orders;

use App\Http\Controllers\Controller;
use App\Http\Resources\Orders\OrderCancelPolicyResource;
use App\Models\Order;
use App\Models\OrderCancellationPolicy;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderCancelPolicyController extends Controller
{
    public function cancelPolicyDetails()
    {
        $cancelPolicy = OrderCancellationPolicy::first();
        if ($cancelPolicy)
        {
            return response()->json([
                'cancel_policy' => new OrderCancelPolicyResource($cancelPolicy),
            ]);
        }
        return response()->json([
            'cancel_policy' => [],
        ]);
    }

    /**
     * Preview cancellation details for a specific order
     * Shows user what their refund would be before they confirm cancellation
     */
    public function previewCancellation(Request $request)
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $request->validate([
            'order_id' => 'required|integer|exists:orders,id'
        ]);

        $userId = Auth::guard('sanctum')->user()->id;
        $order = Order::where('id', $request->order_id)
            ->where('user_id', $userId)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => __('Order not found or you do not have permission to access it.')
            ], 404);
        }

        // Check if order is already cancelled
        if ($order->status == 4) {
            return response()->json([
                'success' => false,
                'message' => __('Order is already cancelled.'),
                'can_cancel' => false
            ], 400);
        }

        // Check if order is completed or delivered
        if (in_array($order->status, [2, 3])) {
            return response()->json([
                'success' => false,
                'message' => __('Completed or delivered orders cannot be cancelled.'),
                'can_cancel' => false
            ], 400);
        }

        $cancellationPolicy = OrderCancellationPolicy::first();
        $canCancel = true;
        $refundAmount = 0;
        $cancellationFee = 0;
        $reason = '';
        $timeRemaining = null;

        if (!$cancellationPolicy) {
            // No policy - allow cancellation without fee
            $canCancel = true;
            $refundAmount = $order->payment_status == 1 ? $order->total : 0;
        } else {
            $availableType = $cancellationPolicy->available_type;

            // Check time limit if applicable
            if ($availableType == 'certain_time') {
                $cancelTime = $cancellationPolicy->time_in_min;
                $currentTime = Carbon::now();
                $orderCreatedTime = Carbon::parse($order->created_at);
                $diffInMinutes = $currentTime->diffInMinutes($orderCreatedTime);

                $timeRemaining = max(0, $cancelTime - $diffInMinutes);

                if ($diffInMinutes > $cancelTime) {
                    return response()->json([
                        'success' => true,
                        'can_cancel' => false,
                        'message' => __('Cancellation time limit has expired.'),
                        'order' => [
                            'id' => $order->id,
                            'total' => $order->total,
                            'payment_status' => $order->payment_status == 1 ? 'Paid' : 'Unpaid',
                            'status' => $this->getOrderStatusLabel($order->status),
                        ],
                        'policy' => [
                            'time_limit_minutes' => $cancelTime,
                            'time_elapsed_minutes' => round($diffInMinutes),
                            'time_remaining_minutes' => 0,
                        ]
                    ]);
                }
            }

            // Calculate refund if paid
            if ($order->payment_status == 1) {
                if ($cancellationPolicy->fine_type == 'flat') {
                    $cancellationFee = $cancellationPolicy->amount;
                    $refundAmount = max(0, $order->total - $cancellationFee);
                } else if ($cancellationPolicy->fine_type == 'percentage') {
                    $cancellationFee = ($order->total * $cancellationPolicy->amount) / 100;
                    $refundAmount = max(0, $order->total - $cancellationFee);
                }
            }
        }

        return response()->json([
            'success' => true,
            'can_cancel' => $canCancel,
            'message' => $canCancel ? __('Order can be cancelled.') : $reason,
            'order' => [
                'id' => $order->id,
                'invoice_number' => $order->invoice_number,
                'total' => round($order->total, 2),
                'payment_status' => $order->payment_status == 1 ? 'Paid' : 'Unpaid',
                'status' => $this->getOrderStatusLabel($order->status),
                'status_code' => $order->status,
                'created_at' => $order->created_at?->format('Y-m-d H:i:s'),
            ],
            'cancellation' => [
                'cancellation_fee' => round($cancellationFee, 2),
                'refund_amount' => round($refundAmount, 2),
                'fee_type' => $cancellationPolicy->fine_type ?? null,
                'fee_value' => $cancellationPolicy->amount ?? 0,
            ],
            'policy' => $cancellationPolicy ? [
                'available_type' => $cancellationPolicy->available_type,
                'time_limit_minutes' => $cancellationPolicy->available_type == 'certain_time' ? $cancellationPolicy->time_in_min : null,
                'time_remaining_minutes' => $timeRemaining,
                'fine_type' => $cancellationPolicy->fine_type,
                'fine_amount' => $cancellationPolicy->amount,
            ] : null
        ]);
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
