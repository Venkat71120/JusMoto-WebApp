<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Orders\OrderCompleteRequestResource;
use App\Http\Resources\Orders\OrderDetailsResource;
use App\Http\Resources\Orders\OrderListForClientResource;
use App\Http\Resources\Orders\RefundDetailsResource;
use App\Http\Resources\Orders\RefundedOrderResource;
use App\Http\Resources\Reviews\ReviewResource;
use App\Http\Services\OrderServiceNotification;
use App\Http\Services\ProviderEarningsService;
use App\Jobs\SendOrderStatusChangeEmail;
use App\Mail\BasicMail;
use App\Models\Order;
use App\Models\OrderCompleteRequest;
use App\Models\RefundedOrder;
use App\Models\Review;
use App\Models\SubOrder;
use App\Models\UserBalance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class ClientOrderController extends Controller
{

    protected $providerEarningsService;
    protected $orderServiceNotification;

    public function __construct(ProviderEarningsService $providerEarningsService, OrderServiceNotification $orderServiceNotification)
    {
        $this->providerEarningsService = $providerEarningsService;
        $this->orderServiceNotification = $orderServiceNotification;
    }

    public function clientAllOrders(Request $request)
    {
        $status = $request->input('status');
        $order_type = $request->input('order_type');
        $client_id = Auth::guard('sanctum')->user()->id;
        $query = Order::with('OrderLocations', 'staff')
                        ->where('user_id', $client_id);

        if ($status !== null) {
            $query->where('status', intval($status));
        }

        // Filter orders based on order type (service or product)
        if ($order_type === 'service') {
            $query->whereColumn('orderItems', function ($q) {
                $q->whereNotNull('service_id');
            });
        
        }

        $all_orders = $query->latest()->paginate(10);

        if ($all_orders->isNotEmpty()) {
            return response()->json([
                'all_orders' => OrderListForClientResource::collection($all_orders->items()),
                'pagination' => [
                    'total' => $all_orders->total(),
                    'count' => $all_orders->count(),
                    'per_page' => $all_orders->perPage(),
                    'current_page' => $all_orders->currentPage(),
                    'last_page' => $all_orders->lastPage(),
                    'next_page_url' => $all_orders->nextPageUrl(),
                    'prev_page_url' => $all_orders->previousPageUrl(),
                ]
            ]);
        }

        return response()->json([
            'message' => __('Order not yet'),
        ],404);

    }

    public function clientOrderDetails($id=null)
    {
        $client_id = Auth::guard('sanctum')->user()->id;
        $order_details = Order::with('user','OrderLocations', 'service','orderItems')
            ->where('id', $id)
            ->where('user_id', $client_id)
            ->first();

        if ($order_details) {
            return response()->json([
                'order_details' => new OrderDetailsResource($order_details),
            ]);
        }

        return response()->json([
            'message' => __('Order not yet'),
        ], 404);

    }

  

    public function clientAllReviews(){

        $client_id = Auth::guard('sanctum')->user()->id;

        $client_all_reviews = Review::with('reviewer')->where('reviewer_id', $client_id)
            ->latest()
            ->paginate(10);

        if ($client_all_reviews->count() > 0){
            return response()->json([
                'client_all_reviews' => $client_all_reviews ? ReviewResource::collection($client_all_reviews) : null,
                'pagination' => [
                    'total' => $client_all_reviews->total(),
                    'count' => $client_all_reviews->count(),
                    'per_page' => $client_all_reviews->perPage(),
                    'current_page' => $client_all_reviews->currentPage(),
                    'last_page' => $client_all_reviews->lastPage(),
                    'next_page_url' => $client_all_reviews->nextPageUrl(),
                    'prev_page_url' => $client_all_reviews->previousPageUrl(),
                ]
            ]);
        }else{
            return response()->json([
                'message' => __('Review Not Found.')
            ]);
        }

    }

    public function refundList()
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
               'success' => false,
               'message' => __('Unauthorized access')
            ], 401);
        }

        $user_id=Auth::guard('sanctum')->user()->id;
        $refunded_orders=RefundedOrder::where('user_id',$user_id) ->latest()->paginate(10);

        if($refunded_orders->isNotEmpty())
        {
            return response()->json([
                'client_all_refund_list' =>  $refunded_orders ? RefundedOrderResource::collection( $refunded_orders) : null,
                'pagination' => [
                    'total' =>  $refunded_orders->total(),
                    'count' =>  $refunded_orders->count(),
                    'per_page' =>  $refunded_orders->perPage(),
                    'current_page' =>  $refunded_orders->currentPage(),
                    'last_page' =>  $refunded_orders->lastPage(),
                    'next_page_url' => $refunded_orders->nextPageUrl(),
                    'prev_page_url' =>  $refunded_orders->previousPageUrl(),
                ]
            ]);
        }
        else
        {
            return response()->json([
                'message' => __('Refund not found.')
            ]);
        }

    }

    public function clientRefundDetails($id=null)
    {
        $user_id = Auth::guard('sanctum')->user()->id;
        $refund_details = RefundedOrder::with("order","user")->where('user_id',$user_id)
            ->where('id', $id)
            ->first();

        if ($refund_details) {
            return response()->json([
                'refund_details' => new RefundDetailsResource($refund_details),
            ]);
        }

        return response()->json([
            'message' => __('Refund not yet'),
        ], 404);

    }

}
