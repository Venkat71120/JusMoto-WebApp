<?php

namespace App\Http\Controllers\Api\Orders;

use App\Models\User;
use App\Models\Offer;
use App\Models\Order;
use App\Models\Staff;
use App\Models\Service;
use App\Models\SubOrder;
use App\Models\OrderItem;
use App\Models\Service_Car;
use App\Models\OfferService;
use App\Models\ServiceAddon;
use App\Models\UserBalance;
use App\Models\UserLocation;
use Illuminate\Http\Request;
use App\Models\Backend\Admin;
use App\Models\OrderLocation;
use App\Models\RefundedOrder;
use Illuminate\Support\Carbon;
use App\Jobs\SendWhatsAppMessage;
use App\Jobs\SendOrderCancelEmail;
use App\Jobs\SendOrderCreateEmail;
use Illuminate\Support\Facades\DB;
use Modules\Tax\app\Models\CityTax;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Modules\Tax\app\Models\StateTax;
use App\Models\Backend\AdminCommission;
use App\Models\OrderCancellationPolicy;
use Modules\JobPost\app\Models\JobPost;
use App\Notifications\OrderNotification;
use App\Http\Requests\OrderCreateRequest;
use Illuminate\Support\Facades\Validator;
use Modules\JobPost\app\Models\JobPostOffer;
use App\Models\Backend\Admin_outlet_location;
use App\Http\Services\OrderServiceNotification;
use App\Http\Resources\Orders\OrderDetailsResource;
use Modules\Wallet\app\Models\Transaction;
use Modules\Wallet\app\Models\Wallet;

class OrderController extends Controller
{

    protected $orderServiceNotification;

    public function __construct(OrderServiceNotification $orderServiceNotification)
    {
        $this->orderServiceNotification = $orderServiceNotification;
    }

    public function serviceOrderCreate(Request $request)
    {
        // Extract the data
        $data = $request->all();
        // Convert JSON strings to arrays if needed
        if (isset($data['items']) && is_string($data['items'])) {
            $data['items'] = json_decode($data['items'], true);
        }

        // Convert JSON strings to arrays if needed
        if (isset($data['location']) && is_string($data['location'])) {
            $data['location'] = json_decode($data['location'], true);
        }


        // Validate the transformed data using OrderCreateRequest
        $orderCreateRequest = new OrderCreateRequest();
        $validator = Validator::make($data, $orderCreateRequest->rules());

        // Apply conditional validation
        $orderCreateRequest->withValidator($validator);

        if ($validator->fails()) {
            return response()->json([
                'message' => __('Validation failed'),
                'errors' => $validator->errors()
            ], 422);
        }

        $payment_status = 0;

        $user_id = Auth::guard('sanctum')->user()->id;


        // Generate a new invoice number
        $invoiceNumber = generateInvoiceNumber();

        // if order price 0 not create order
        $total_service_amount_check = 0;
        if (isset($request->items)) {
            $all_services = !empty($request->items) ? json_decode($request->items, true) : (object)[];
            foreach ($all_services as $single_service) {
                $service = Service::find($single_service['id']);
                if ($service) {
                    $total_service_amount_check += $service->price;
                }
            }
        }


        if ($total_service_amount_check == 0) {
            return response()->json([
                    'message' => __('Service price is 0, order cannot be created. Please try other services.'),
                ], 400);
        }



        $calculate=0;
        $sub_total = [];
        $admin_id=[];
        $tax_amount =0;
        $total = 0;
        $items=[];
        $calculate_total=0;
        $items_json="";
        $admin_json="";
        $total_qty=0;
        $price=0;
        $image=0;


         // Create  Orders
         if (isset($request->items)) {
            $all_services = !empty($request->items) ? json_decode($request->items, true) : (object)[];
                 foreach ($all_services as $single_service) {
                    $service = Service::find($single_service['id']);

                    if (!empty($service))
                    {
                        $offer_services=OfferService::where('service_id',$single_service['id'])->get();
                        $variant=Service_Car::where("varient_id",$request->car_variant)->where("service_id",$single_service['id'])->first();
                        if($variant)
                        {
                            if($variant?->image)
                            {
                                $image=$variant->image;
                            }
                            else
                            {
                                $image=$service->image;
                            }
                            $admin_id[] = $service->admin_id;
                            $id= $single_service['id'];
                            $type=$service->type;

                            $total_qty+=$single_service['qty'];
                            if($offer_services->isNotEmpty())
                            {
                               foreach($offer_services as $offer_service)
                               {

                                   $offer=Offer::where('id',$offer_service->offer_id)->first();
                                   if($offer){
                                        if($offer->status==1 && strtotime($offer->expires_at)>time())
                                        {
                                            $calculate = $variant?->price - ($variant?->price * ($offer->offerPercentage / 100));
                                            $price=$calculate;
                                            $sub_total[]=$calculate*$single_service['qty'];
                                        }
                                        else{
                                            // base price calculate
                                            if ($variant?->discount_price > 0)
                                            {
                                                // discount price if it is greater than 0
                                                $price=$variant?->discount_price;
                                                $sub_total[] = $variant?->discount_price*$single_service['qty'];

                                            }
                                            else{
                                                // Otherwise regular price
                                                $price=$variant?->price;

                                                $sub_total[] = $variant?->price * $single_service['qty'];
                                            }
                                        }
                                     }
                                    else{

                                     // base price calculate
                                        if ($variant?->discount_price > 0)
                                        {
                                            // discount price if it is greater than 0
                                            $price=$variant?->discount_price;
                                            $sub_total[] = $variant?->discount_price * $single_service['qty'];
                                        }
                                            // Otherwise regular price

                                        $price=$variant?->price;
                                        $sub_total[] = $variant?->price * $single_service['qty'];
                                    }

                                }

                            }

                            else{

                                 // base price calculate
                                 if ($variant?->discount_price > 0)
                                 {
                                     // discount price if it is greater than 0
                                     $price=$variant?->discount_price;

                                     $sub_total[] = $variant?->discount_price * $single_service['qty'];
                                 }else{
                                    // Otherwise regular price
                                     $price=$variant?->price;

                                    $sub_total[] = $variant?->price * $single_service['qty'];
                                }

                            }

                            $items[]=[
                                'id'=>$id,
                                'type'=>$type,
                                'qty'=>$single_service['qty'],
                                'price'=>$price,
                                'image'=>$image,

                            ];
                        }

                    }

                 }

                 foreach($sub_total as $key=>$total)
                 {
                    $calculate_total=$calculate_total+$total;
                 }

                 if($calculate_total==0)
                 {
                    return response()->json([
                        'message' => __("Service/products you're trying to order is not available for your car."),
                    ], 400);
                 }


                $admin_json=json_encode($admin_id);

                $order = Order::create([
                    'user_id' => $user_id,
                    'admin_id' => $admin_json,
                    'staff_id' => $request->staff_id ?? null,
                    'date' => $request->date,
                    'schedule' => $request->time,
                    'outlet_location_id' => $request->outlet_id,
                    'delivery_mode' => $request->delivery_mode ?? 'pickup',
                    'sub_total' => $calculate_total,
                    'tax' => 0,
                    'total' => 0,
                    'payment_gateway'=>$request->selected_payment_gateway,
                    'payment_status' => $payment_status,
                    'coupon_code' => $request->coupon_code ?? null,
                    'order_note' => $request->order_note ?? null,
                ]);

                $last_order_id = $order->id;

                if($order)
                {
                    foreach($items as $key=>$item)
                    {
                        OrderItem::create([
                            'order_id' => $last_order_id,
                           'service_id' => $item["id"],
                            'type' => $item["type"],
                            'qty' => $item["qty"],
                            'price' => $item["price"],
                            'image' => $item["image"],

                        ]);
                    }

                }


               // sub order location create
            if (isset($data["location"])){
                if($data["location"]["address"])
                {
                    OrderLocation::create([
                        'order_id' => $last_order_id,
                        'state_id' => $data["location"]["state_id"] ?? null,
                        'city_id' => $data["location"]["city_id"] ?? null,
                        'area_id' => $data["location"]["area_id"] ?? null,
                        'title' => $data["location"]["title"] ?? null,
                        'post_code' => $data["location"]["post_code"] ?? null,
                        'address' => $data["location"]["address"] ?? null,
                        'phone' => $data["location"]["phone"] ?? null,
                        'emergency_phone' => $data["location"]["emergency_phone"] ?? null,
                        'latitude' => $data["location"]["latitude"] ?? null,
                        'longitude' =>$data["location"]["longitude"] ?? null,
                        'type' => $data["location"]["type"] ?? "0"
                    ]);
                }

            }

            // send OrderNotification
            foreach($items as $key=>$item)
            {

                $admin = Admin::where('id', $admin_id[$key])->first();
                $order_message = __('You have a new order');
                if (!empty($admin)){
                     $admin->notify(new OrderNotification($last_order_id, $item["id"], $admin->id, $user_id, $order_message));
                 }

               // incrementer service sold_count
                Service::where('id', $item["id"])->increment('sold_count',$item['qty'] );
            }


        }


        $location = OrderLocation::where('order_id', $order->id)->first();
        // order tax calculate
        if(!empty($location)){
            $state_tax_rate = calculateTaxBasedOnCoordinates($request->outlet_id,$location->address,$location->state_id,$location->city_id,$location->latitude,$location->longitude);
            $state_delivery_charge_rate=calculateDeliveryChargeBasedOnCoordinates($request->outlet_id,$location->address,$location->state_id,$location->city_id,$location->latitude,$location->longitude);
            if(get_static_option('delivery_charge_system') == "quantity")
            {
                $state_delivery_charge_rate = $state_delivery_charge_rate * $total_qty;
            }
        }
        else if($request->outlet_id)
        {
            $outlet=Admin_outlet_location::where('id',$request->outlet_id)->first();
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

        // apply for suborder coupons
        $coupon_details = subOrderCalculateCouponAmount($request->coupon_code, $calculate_total);

        // Calculate tax amount and  Calculate total price including tax
        $tax_amount = ($coupon_details['total'] * $state_tax_rate) / 100;
        $total = $coupon_details['total'] + $tax_amount + $state_delivery_charge_rate;


        if (!empty($order)){
            // Update suborder
            Order::where('id', $last_order_id)->update([
                'delivery_charge'=>$state_delivery_charge_rate,
                'sub_total' => $calculate_total,
                'coupon_code' => $coupon_details['coupon_code'] ?? null,
                'coupon_type' => $coupon_details['coupon_type'] ?? null,
                'coupon_amount' => $coupon_details['coupon_amount'],
                'tax' => $tax_amount,
                'total' => $total,
                'invoice_number'=> $invoiceNumber,
            ]);

        }


        // if manual payment
        if($request->selected_payment_gateway === 'manual_payment') {
            if ($image = $request->file('image')) {
                $imageName = 'manual_attachment_'.time().'-'.uniqid().'.'.$image->getClientOriginalExtension();
                $image->move('assets/uploads/manual-payment', $imageName);
                Order::where('id',$last_order_id)->update([
                    'payment_attachment' =>$imageName
                ]);
            }
        }

        $order_details = Order::with('user','OrderLocations', 'staff', 'service','orderItems')->find($last_order_id);

        try {
            // Create order notifications
            $this->orderServiceNotification->createOrderNotification($last_order_id, $request);
            // Dispatch job to send email in the background
            dispatch(new SendOrderCreateEmail($order_details));
        }catch (\Exception $exception){


        }

        //send whatsapp message

        // Get unique admin IDs
        $service_admin_ids = $order_details->admin_id;

        $service_admin_ids=json_decode($service_admin_ids);
        $service_admin_ids = array_unique($service_admin_ids);

        // Get unique admin phone
        $admins = Admin::whereIn('id', $service_admin_ids)->get();
        $message_for_admin = get_static_option('new_order_admin_message') ?? __('You have a new order #');
        $message_for_admin = str_replace('#', $order_details->id, $message_for_admin);
        if ($admins->isNotEmpty()) {
            foreach ($admins as $admin) {
                $phone=$admin->phone;
                if($phone)
                {
                    try {
                        dispatch(new SendWhatsAppMessage($phone,$message_for_admin));
                    } catch (\Exception $e) {

                    }
                }

            }
        }

        $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
        $phone_client=$client->phone;
        $message_for_client = get_static_option('new_order_client_message') ?? __('You have successfully placed an order #');
        $message_for_client = str_replace('#', $order_details->id, $message_for_client);
        if($phone_client)
        {
            try {
                dispatch(new SendWhatsAppMessage($phone_client,$message_for_client));
            } catch (\Exception $e) {

            }
        }

        if($request->selected_payment_gateway === 'wallet')
        {
            $wallet = Wallet::where('user_id',$user_id)->first();
            if(!$wallet)
            {
                $wallet=Wallet::create([
                    'user_id' => $user_id,
                    'available_balance' => 0
                ]);
            }

            if($wallet->available_balance < $order_details->total)
            {
                return response()->json([
                    'success' => false,
                    'message' => __('Insufficient wallet balance')
                ], 400);
            }

            // Generate a new invoice number
            $invoiceNumber = generateTransactionInvoiceNumber();

            // Create deposit transaction
            $transaction = Transaction::create([
                'user_id' => $user_id,
                'wallet_id' => $wallet->id,
                'transaction_type' => 'payment',
                'amount' => $order_details->total,
                'description' => 'Order payment using wallet balance',
                'payment_gateway' => 'wallet',
                'status' => 'completed',
                'reference_type' => 'order_payment',
                'reference_table_id' => $last_order_id,
                'invoice_number' => $invoiceNumber
            ]);

            $wallet->available_balance = $wallet->available_balance - $order_details?->total;
            $wallet->save();

            $order_details->payment_status = 1;
            $order_details->save();


        }



        return response()->json([
            'order_details'=> new OrderDetailsResource($order_details),
        ]);
    }

    public function paymentStatusUpdate(Request $request){

        // Ensure the user is authenticated
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        // Retrieve the authenticated user's email
        $clientEmail = Auth::guard('sanctum')->user()->email;
        $receivedHmac = $request->header('X-HMAC');
        // Define the secret key (must match the one used by the client)
        $secretKey = 'e2b8c14a6f8b6d4f9c5f6e8b0d4c1a6e0b9c7f5a2e6b4d8c7a1e3f4d6b8c5f9';
        // Generate the HMAC on the server side using the client's email
        $calculatedHmac = hash_hmac('sha256', $clientEmail, $secretKey);
        // Verify if the HMAC matches
        if ($receivedHmac !== $calculatedHmac) {
            return response()->json([
                'message' => __('Unauthorized access')
            ], 403); // Forbidden
        }

        $request->validate([
            'order_id' => 'required|integer'
        ]);

        // payment status update after order create
        $order_details = Order::find($request->order_id);

        if (empty($order_details)) {
            return response()->json([
                'message' => __('Order not found')
            ], 404);
        }

        $order_details->payment_status = 1;
        $order_details->save();




        return response()->json([
            'success' => true,
            'message' => __('payment status update success')
        ]);

    }

    public function cancelOrder(Request $request){
        // Ensure the user is authenticated
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $order_id=$request->order_id;
        $cancel_reason=$request->cancel_reason;
        $gateway_id=$request->gateway_id;
        $gateway_fields=$request->gateway_fields;
        $refunded_amount=0;
        if(!$order_id)
        {
            return response()->json([
               'success' => false,
               'message' => __('Order id required')
            ], 400);
        }

        $order_details=Order::where("id",$order_id)->first();
        if($order_details)
        {
            $cancellation_policy=OrderCancellationPolicy::first();
            $available_type=$cancellation_policy->available_type;

            if($order_details->status== 4)
            {
                return response()->json([
                    'success' => false,
                    'message' => __('Order already canceled')
                ], 400);
            }
            else if($order_details->payment_status==1)
            {
                if($available_type=='certain_time')
                {
                    $cancel_time=$cancellation_policy->time_in_min;
                    $current_time=Carbon::now();
                    $order_created_time=Carbon::parse($order_details->created_at);
                    $diff_in_minutes=$current_time->diffInMinutes($order_created_time);
                    if($diff_in_minutes<=$cancel_time)
                    {
                        if( $cancellation_policy->fine_type =="flat")
                        {
                            $refunded_amount=$order_details->total - $cancellation_policy->amount;
                        }
                        else if( $cancellation_policy->fine_type =="percentage")
                        {
                            $refunded_amount=$order_details->total - ($order_details->total * $cancellation_policy->amount/100);
                        }
                        $order_details->status=4;
                        $order_details->is_refunded=0;
                        $order_details->save();

                        $refunded_order=RefundedOrder::create([
                            'order_id'=>$order_details->id,
                            'user_id'=>$order_details->user_id,
                            'amount'=>$refunded_amount,
                            'gateway_id'=>$gateway_id,
                            'gateway_fields'=>$gateway_fields,
                            'cancel_reason'=>$cancel_reason ?? ""
                        ]);

                    }
                    else
                    {
                        return response()->json([
                            'success' => false,
                            'message' => __('Time is over.You can not cancel the order now')
                        ], 400);
                    }

                }
                else
                {

                    if( $cancellation_policy->fine_type =="flat")
                    {
                        $refunded_amount=$order_details->total - $cancellation_policy->amount;
                    }
                    else if( $cancellation_policy->fine_type =="percentage")
                    {
                        $refunded_amount=$order_details->total - ($order_details->total * $cancellation_policy->amount/100);
                    }
                    $order_details->status=4;
                    $order_details->is_refunded=0;
                    $order_details->save();
                    $refunded_order=RefundedOrder::create([
                        'order_id'=>$order_details->id,
                        'user_id'=>$order_details->user_id,
                        'amount'=>$refunded_amount,
                        'gateway_id'=>$gateway_id,
                        'gateway_fields'=>$gateway_fields,
                        'cancel_reason'=>$cancel_reason ?? ""
                    ]);
                }
            }
            else if($order_details->payment_status!=1 && $order_details->status != 2 && $order_details->status != 3)
            {
                if($available_type=='certain_time')
                {
                    $cancel_time=$cancellation_policy->time_in_min;
                    $current_time=Carbon::now();
                    $order_created_time=Carbon::parse($order_details->created_at);
                    $diff_in_minutes=$current_time->diffInMinutes($order_created_time);
                    if($diff_in_minutes<=$cancel_time)
                    {
                        $order_details->status=4;
                        $order_details->is_refunded=0;
                        $order_details->save();
                        try {
                            // Cancel order notifications
                            $this->orderServiceNotification->cancelOrderNotification($order_details->id, $request);
                            // Dispatch job to send email in the background
                            dispatch(new SendOrderCancelEmail($order_details));
                        }catch (\Exception $exception){


                        }

                        $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
                        $phone_client=$client->phone;
                        $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');
                        $message_for_client = str_replace('#', $order_details->id, $message_for_client);
                        if($phone_client)
                        {
                            try {
                                dispatch(new SendWhatsAppMessage($phone_client,$message_for_client));
                            } catch (\Exception $e) {

                            }
                        }
                        return response()->json([
                            'success' => true,
                            'message' => __('Order Cancel successfully')
                         ], 200);

                    }
                    else
                    {
                        return response()->json([
                            'success' => false,
                            'message' => __('Time is over.You can not cancel the order now')
                        ], 400);
                    }

                }

                $order_details->status=4;
                $order_details->is_refunded=0;
                $order_details->save();
                try {
                    // Cancel order notifications
                    $this->orderServiceNotification->cancelOrderNotification($order_details->id, $request);
                    // Dispatch job to send email in the background
                    dispatch(new SendOrderCancelEmail($order_details));
                }catch (\Exception $exception){


                }
                $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
                $phone_client=$client->phone;
                $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');
                $message_for_client = str_replace('#', $order_details->id, $message_for_client);
                if($phone_client)
                {
                    try {
                        dispatch(new SendWhatsAppMessage($phone_client,$message_for_client));
                    } catch (\Exception $e) {

                    }
                }
                return response()->json([
                    'success' => true,
                    'message' => __('Order Cancel successfully')
                ], 200);

            }
            else
            {
                return response()->json([
                    'success' => false,
                    'message' => __('You can not cancel the order now')
                ], 400);
            }


            if($refunded_order)
            {
                try {
                    // Cancel order notifications
                    $this->orderServiceNotification->cancelOrderNotification($order_details->id, $request);
                    // Dispatch job to send email in the background
                    dispatch(new SendOrderCancelEmail($order_details));
                }catch (\Exception $exception){


                }
                $client = User::select('id', 'phone')->where('id', $order_details->user_id)->first();
                $phone_client=$client->phone;
                $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');
                $message_for_client = str_replace('#', $order_details->id, $message_for_client);
                if($phone_client)
                {
                    try {
                        dispatch(new SendWhatsAppMessage($phone_client,$message_for_client));
                    } catch (\Exception $e) {

                    }
                }
                return response()->json([
                    'success' => true,
                    'message' => __('Order Cancel successfully')
                ], 200);
            }


        }

    }


    public function updatePaymentInfo(Request $request)
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $refund_id=$request->refund_id;
        $gateway_id=$request->gateway_id;
        $gateway_fields=$request->gateway_fields;

        $refunded_order=RefundedOrder::where('id',$refund_id)->first();
        if($refunded_order)
        {
            $refunded_order->gateway_id=$gateway_id;
            $refunded_order->gateway_fields=$gateway_fields;
            $refunded_order->save();

            return response()->json([
               'success' => true,
               'message' => __('Payment information updated successfully')
            ], 200);
        }
        else
        {
            return response()->json([
                'success' => false,
                'message' => __('Refunded order not found')
            ], 400);
        }
    }


}



