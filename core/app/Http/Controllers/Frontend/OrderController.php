<?php

namespace App\Http\Controllers\Frontend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Http\Services\OrderServiceNotification;
use App\Jobs\SendOrderCancelEmail;
use App\Jobs\SendWhatsAppMessage;
use App\Models\Backend\Admin_outlet_location;
use App\Models\Order;
use App\Models\OrderCancellationPolicy;
use App\Models\OrderItem;
use App\Models\RefundedOrder;
use App\Models\RefundGateway;
use App\Models\Review;
use App\Models\User;
use App\Models\UserCartItem;
use App\Models\UserLocation;
use App\Models\UserNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Modules\Coupon\app\Models\Coupon;

class OrderController extends Controller
{
    protected $orderServiceNotification;

    public function __construct(OrderServiceNotification $orderServiceNotification)
    {
        $this->orderServiceNotification = $orderServiceNotification;
    }
    /**
     * Display a listing of orders
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        // Build query
        $query = Order::where('user_id', $user->id)
            ->with(['orderLocations','outletLocation', 'staff', 'admin']);

        // Filter by status if provided
        if ($request->has('status') && $request->status != '') {
            $query->where('status', $request->status);
        }

        // Filter by payment status if provided
        if ($request->has('payment_status') && $request->payment_status != '') {
            $query->where('payment_status', $request->payment_status);
        }

        // Filter by date range if provided
        if ($request->has('from_date') && $request->from_date != '') {
            $query->whereDate('created_at', '>=', $request->from_date);
        }

        if ($request->has('to_date') && $request->to_date != '') {
            $query->whereDate('created_at', '<=', $request->to_date);
        }

        // Search functionality
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('invoice_number', 'like', "%{$search}%")
                    ->orWhere('id', 'like', "%{$search}%")
                    ->orWhere('transaction_id', 'like', "%{$search}%");
            });
        }

        // Get orders with pagination
        $orders = $query->orderBy('created_at', 'desc')->paginate(10);

        // Get counts for different statuses
        $totalOrders = Order::where('user_id', $user->id)->count();
        $pendingOrders = Order::where('user_id', $user->id)->where('status', 0)->count();
        $completedOrders = Order::where('user_id', $user->id)->where('status', 2)->count();
        $cancelledOrders = Order::where('user_id', $user->id)->where('status', 4)->count();

        return view('frontend.user.client.orders.order', compact(
            'orders',
            'totalOrders',
            'pendingOrders',
            'completedOrders',
            'cancelledOrders'
        ));
    }

    /**
     * Display the specified order
     */
    public function show($id,$notificationId = null)
    {
        $user = Auth::user();

        $order = Order::where('user_id', $user->id)
            ->where('id', $id)
            ->with(['orderLocations', 'staff', 'admin', 'orderItems'])
            ->firstOrFail();

        $cancellation_policy = OrderCancellationPolicy::first();
        $gateway_methods=RefundGateway::all();
        UserNotification::where('id', $notificationId)->update(['is_read' => 'read']);

        $order_items=OrderItem::where('order_id',$order->id)->get();
        foreach($order_items as $item)
        {
            $review_existing=Review::where('reviewer_id',$user->id)->where('service_id',$item->service_id)->first();
            $item->review_existing = $review_existing ? true : false;
        }

        return view('frontend.user.client.orders.order-details', compact('order','cancellation_policy','gateway_methods','order_items'));
    }

    /**
     * Cancel an order
     */
    public function cancel(Request $request,$order_id)
    {
        $cancel_reason = $request->cancel_reason;
        $refunded_amount = 0;
        if (!$order_id) {
            toastr_error('Order id required.');
            return redirect()->back();
        }

        $order_details = Order::where("id", $order_id)->first();
        if ($order_details) {
            $cancellation_policy = OrderCancellationPolicy::first();
            $available_type = $cancellation_policy->available_type;
            if ($order_details->status == 4) {

                toastr_error('Order already canceled.');
                return redirect()->back();

            } else if ($order_details->payment_status == 1) {
                if ($available_type == 'certain_time') {
                    $cancel_time = $cancellation_policy->time_in_min;
                    $current_time = Carbon::now();
                    $order_created_time = Carbon::parse($order_details->created_at);
                    $diff_in_minutes = $current_time->diffInMinutes($order_created_time);
                    if ($diff_in_minutes <= $cancel_time) {
                        if ($cancellation_policy->fine_type == "flat") {
                            $refunded_amount = $order_details->total - $cancellation_policy->amount;
                        } else if ($cancellation_policy->fine_type == "percentage") {
                            $refunded_amount = $order_details->total - ($order_details->total * $cancellation_policy->amount / 100);
                        }
                        $order_details->status = 4;
                        $order_details->is_refunded = 0;
                        $order_details->save();

                        $refunded_order = RefundedOrder::create([
                            'order_id' => $order_details->id,
                            'user_id' => $order_details->user_id,
                            'amount' => $refunded_amount,
                            'cancel_reason' => $cancel_reason ?? ""
                        ]);

                    } else {
                        toastr_error('Time is over.You can not cancel the order now.');
                        return redirect()->back();
                    }

                } else {

                    if ($cancellation_policy->fine_type == "flat") {

                        $refunded_amount = $order_details->total - $cancellation_policy->amount;

                    } else if ($cancellation_policy->fine_type == "percentage") {

                        $refunded_amount = $order_details->total - ($order_details->total * $cancellation_policy->amount / 100);

                    }
                    $order_details->status = 4;
                    $order_details->is_refunded = 0;
                    $order_details->save();
                    $refunded_order = RefundedOrder::create([
                        'order_id' => $order_details->id,
                        'user_id' => $order_details->user_id,
                        'amount' => $refunded_amount,
                        'cancel_reason' => $cancel_reason ?? ""
                    ]);
                }
            } else if ($order_details->payment_status != 1 && $order_details->status != 2 && $order_details->status != 3) {
                if ($available_type == 'certain_time') {
                    $cancel_time = $cancellation_policy->time_in_min;
                    $current_time = Carbon::now();
                    $order_created_time = Carbon::parse($order_details->created_at);
                    $diff_in_minutes = $current_time->diffInMinutes($order_created_time);
                    if ($diff_in_minutes <= $cancel_time) {
                        $order_details->status = 4;
                        $order_details->is_refunded = 0;
                        $order_details->save();
                        try {
                            // Cancel order notifications
                            $this->orderServiceNotification->cancelOrderNotification($order_details->id, $request);
                            // Dispatch job to send email in the background
                            dispatch(new SendOrderCancelEmail($order_details));
                        } catch (\Exception $exception) {
                        }

                        $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
                        $phone_client = $client->phone;
                        $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');
                        $message_for_client = str_replace('#', $order_details->id, $message_for_client);
                        if ($phone_client) {
                            try {
                                dispatch(new SendWhatsAppMessage($phone_client, $message_for_client));
                            } catch (\Exception $e) {

                            }
                        }

                        toastr_success('Order Cancel successfully.');
                        return redirect()->back();
                    } else {
                        toastr_error('Time is over.You can not cancel the order now.');
                        return redirect()->back();
                    }

                }

                $order_details->status = 4;
                $order_details->is_refunded = 0;
                $order_details->save();
                try {
                    // Cancel order notifications
                    $this->orderServiceNotification->cancelOrderNotification($order_details->id, $request);
                    // Dispatch job to send email in the background
                    dispatch(new SendOrderCancelEmail($order_details));
                } catch (\Exception $exception) {


                }
                $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
                $phone_client = $client->phone;
                $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');
                $message_for_client = str_replace('#', $order_details->id, $message_for_client);
                if ($phone_client) {
                    try {
                        dispatch(new SendWhatsAppMessage($phone_client, $message_for_client));
                    } catch (\Exception $e) {

                    }
                }

                toastr_success('Order Cancel successfully.');
                return redirect()->back();

            } else {
                toastr_error('You can not cancel the order now.');
                return redirect()->back();
            }

            if ($refunded_order) {
                try {
                    // Cancel order notifications
                    $this->orderServiceNotification->cancelOrderNotification($order_details->id, $request);
                    // Dispatch job to send email in the background
                    dispatch(new SendOrderCancelEmail($order_details));
                } catch (\Exception $exception) {


                }
                $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
                $phone_client = $client->phone;
                $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');
                $message_for_client = str_replace('#', $order_details->id, $message_for_client);
                if ($phone_client) {
                    try {
                        dispatch(new SendWhatsAppMessage($phone_client, $message_for_client));
                    } catch (\Exception $e) {

                    }
                }
                toastr_success('Order Cancel successfully.');
                return redirect()->back();

            }

        }
    }

    public function booking_page()
    {
        $userId = auth()->id();
        $selectedItems = collect();

        if ($userId) {
            $query = UserCartItem::with(['user', 'service'])
                ->where('user_id', $userId);

            $selectedItems = $query->get();
        }
        $sub_total = $selectedItems->sum(function ($item) {
            return $item->price * $item->quantity;
        });

        $user_location=UserLocation::where('user_id',$userId)->get();
        $outlet_locations=Admin_outlet_location::where('status',1)->get();

        return view('frontend.pages.BookingPage.booking', compact('selectedItems', 'sub_total','user_location','outlet_locations'));

    }

    public function applyCoupon(Request $request)
    {
        $request->validate([
            'coupon' => 'required|string',
            'total' => 'required|numeric|min:1',
        ]);

        $code = $request->coupon;
        $total = $request->total;

        $coupon = Coupon::where('code', $code)->first();
        if (!$coupon) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid coupon code.'
            ]);
        }

        if ($coupon->status != 1) {
            return response()->json([
                'status' => false,
                'message' => 'This coupon is inactive.'
            ]);
        }

        if ($coupon->expire_date < now()->toDateString()) {
            return response()->json([
                'status' => false,
                'message' => 'Coupon has expired.'
            ]);
        }

        $discount = 0;
        if ($coupon->discount_type == 'percentage') {

            $discount = ($total * $coupon->discount) / 100;
        } else {

            $discount = $coupon->discount;
        }


        return response()->json([
            'status' => true,
            'message' => 'Coupon applied successfully',
            'discount' => round($discount, 2),
        ]);
    }

    public function storeSession(Request $request){
        session(['booking_form_data' => $request->booking_data]);
        return response()->json(['success' => true]);
    }

    public function findTaxDeliveryCharge(Request $request)
    {
        $request->validate([
            'sub_total_with_coupon' => 'required|numeric|min:0',
            'location_id' => 'sometimes|nullable|integer|exists:user_locations,id|required_without_all:outlet_id,address',
            'outlet_id'   => 'sometimes|nullable|integer|exists:admin_outlet_locations,id|required_without_all:location_id,address',
            'address'     => 'sometimes|nullable|string|required_without_all:location_id,outlet_id',
        ]);

        $location = null;
        $outlet = null;

        if($request->has('location_id')){
            $location = UserLocation::find($request->location_id);
        } elseif($request->has('outlet_id')){
            $outlet = Admin_outlet_location::find($request->outlet_id);
        }
        $userId = auth()->id();
        $selectedItems = collect();

        if ($userId) {
            $query = UserCartItem::with(['user', 'service'])
                ->where('user_id', $userId);

            $selectedItems = $query->get();
        }
        $total_qty = $selectedItems->sum(function ($item) {
            return $item->quantity;
        });


        $sub_total_with_coupon = $request->sub_total_with_coupon;
        // order tax calculate
        if(!empty($location)){
            $state_tax_rate = calculateTaxBasedOnCoordinates($request->outlet_id,$location->address,$location->state_id,$location->city_id,$location->latitude,$location->longitude);
            $state_delivery_charge_rate=calculateDeliveryChargeBasedOnCoordinates($request->outlet_id,$location->address,$location->state_id,$location->city_id,$location->latitude,$location->longitude);
            if(get_static_option('delivery_charge_system') == "quantity")
            {
                $state_delivery_charge_rate = $state_delivery_charge_rate * $total_qty;
            }
        }
        else if(!empty($outlet))
        {

            $state_tax_rate = calculateTaxBasedOnCoordinates($request->outlet_id,$outlet->address,$outlet->state_id,$outlet->city_id,$outlet->latitude,$outlet->longitude);
            $state_delivery_charge_rate=calculateDeliveryChargeBasedOnCoordinates($request->outlet_id,$outlet->address,$outlet->state_id,$outlet->city_id,$outlet->latitude,$outlet->longitude);
            if(get_static_option('delivery_charge_system') == "quantity")
            {
                $state_delivery_charge_rate = $state_delivery_charge_rate * $total_qty;
            }
        }else{
            $state_tax_rate = get_static_option('tax_rate_by_country') ?? 0;

            $state_delivery_charge_rate=get_static_option('delivery_charge') ?? 0;

            if(get_static_option('delivery_charge_system') == "quantity")
            {
                $state_delivery_charge_rate = $state_delivery_charge_rate * $total_qty;
            }
        }

        if($request->delivery_mode =="walkin")
        {
            $state_delivery_charge_rate = 0;
        }

        $tax_amount = ($sub_total_with_coupon  * $state_tax_rate) / 100;
        $total=$sub_total_with_coupon + $tax_amount + $state_delivery_charge_rate;

        return response()->json([
            'tax' => $tax_amount,
            'tax_rate' => $state_tax_rate,
            'delivery_charge' => $state_delivery_charge_rate,
            'total' => $total,
        ]);
    }



}
