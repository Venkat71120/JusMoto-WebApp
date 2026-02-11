<?php

namespace App\Http\Controllers\Backend;
use Modules\SupportTicket\app\Models\Ticket;
use Modules\SupportTicket\app\Models\Department;
use App\Models\User;
use App\Models\Order;
use App\Models\Staff;
use App\Mail\BasicMail;
use App\Models\SubOrder;
use App\Helpers\FlashMsg;
use Illuminate\Http\Request;
use App\Models\RefundedOrder;
use Illuminate\Support\Carbon;
use App\Models\AfterBookingStep;
use App\Jobs\SendWhatsAppMessage;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\OrderCancellationPolicy;
use App\Jobs\SendOrderStatusChangeEmail;
use App\Models\Backend\AdminNotification;
use App\Http\Services\UpdateMainOrderStatus;
use App\Models\Backend\Admin_outlet_location;
use Modules\SMSGateway\app\Models\SmsGateway;
use App\Http\Services\ProviderEarningsService;
use App\Http\Services\OrderServiceNotification;
use Modules\SMSGateway\app\Http\Traits\OtpGlobalTrait;
use App\Models\Backend\Admin;

class AdminServiceOrderManageController extends Controller
{
    use OtpGlobalTrait;
    protected $orderServiceNotification;
    protected $updateMainOrderStatus;

    public function __construct(OrderServiceNotification $orderServiceNotification, UpdateMainOrderStatus $updateMainOrderStatus)
    {
        $this->orderServiceNotification = $orderServiceNotification;
        $this->updateMainOrderStatus = $updateMainOrderStatus;
    }

    public function orderSettings()
    {
        return view('backend.pages.orders.order-settings');
    }
    public function updateOrderSettings(Request $request)
    {
        $this->validate($request, [
            'bill_to_title' => 'nullable|string',
            'ship_to_title' => 'nullable|string',
            'invoice_title' => 'nullable|string',
            'invoice_no_title' => 'nullable|string',
            'order_invoice_notes' => 'nullable|string',
        ]);

        $fields = [
            'bill_to_title',
            'ship_to_title',
            'invoice_title',
            'invoice_no_title',
            'order_invoice_notes',
        ];

        foreach ($fields as $field) {
            if ($request->has($field)) {
                update_static_option($field, $request->$field);
            }
        }
        return redirect()->back()->with(FlashMsg::settings_update());
    }
    /**
 * Create ticket when order is allocated to franchise admin
 */
private function createTicketForAllocation($order, $franchiseAdmin)
{
    // Get default department
    $department = Department::first();
    
    if (!$department) {
        $department = Department::create([
            'name' => 'Service Orders',
            'status' => 1,
        ]);
    }

    // Build ticket title with service/item names only
$serviceNames = [];
if ($order->orderItems && $order->orderItems->count() > 0) {
    foreach ($order->orderItems as $item) {
        if ($item->service) {
            $serviceNames[] = $item->service->title;
        }
    }
}

$ticketTitle = !empty($serviceNames) 
    ? implode(', ', $serviceNames)
    : "Order #{$order->id}";

    // Build ticket description
    $ticketDescription = "ORDER DETAILS\n";
    $ticketDescription .= "Order ID: #{$order->id}\n";
    $ticketDescription .= "Customer: " . optional($order->user)->fullname . "\n";
    $ticketDescription .= "Total: " . $order->total . "\n";

    // Create the ticket
    Ticket::create([
        'department_id' => $department->id,
        'admin_id' => $franchiseAdmin->id,
        'user_id' => $order->user_id,
        'title' => $ticketTitle,
        'priority' => 'normal',
        'description' => $ticketDescription,
        'status' => 'open',
    ]);
}
public function allocateSubAdmin(Request $request)
{
    // Validate input
    $request->validate([
        'order_id' => 'required|exists:orders,id',
        'franchise_admin_id' => 'required|exists:admins,id',
    ]);

    // Find order with related data
    $order = Order::with(['user', 'orderItems'])->find($request->order_id);
    $franchiseAdmin = Admin::find($request->franchise_admin_id);

    // Save allocated admin
    $order->franchise_admin_id = $request->franchise_admin_id;
    $order->save();

    // Auto-create ticket for this allocation
    $this->createTicketForAllocation($order, $franchiseAdmin);

    return redirect()->back()->with('success', 'Order allocated successfully and ticket created.');
}
public function allocateOrderToFranchise(Request $request)
{
    $request->validate([
        'order_id' => 'required|exists:orders,id',
        'franchise_admin_id' => 'required|exists:admins,id',
    ]);

    // Find order with related data
    $order = Order::with(['user', 'orderItems'])->find($request->order_id);
    $franchiseAdmin = Admin::find($request->franchise_admin_id);
    
    $order->franchise_admin_id = $request->franchise_admin_id;
    $order->save();

    // Auto-create ticket for this allocation
    $this->createTicketForAllocation($order, $franchiseAdmin);

    return redirect()->back()->with('success', 'Order allocated successfully and ticket created.');
}

public function allAdminOrders(Request $request)
{
    $outletLocations = Admin_outlet_location::all();
    $status = $request->input('status', 'all');

    $admin = Auth::guard('admin')->user();

    /*
    |--------------------------------------------------------------------------
    | Base Query
    |--------------------------------------------------------------------------
    */

    $query = Order::with([
        'user',
        'OrderLocations',
        'staff',
        'orderItems',
        'franchiseAdmin.outletLocation'
    ]);

    /*
    |--------------------------------------------------------------------------
    | Role Based Filtering
    |--------------------------------------------------------------------------
    */

    // Franchise admin sees ONLY allocated orders
    if ($admin->is_franchise == 1) {
        $query->where('franchise_admin_id', $admin->id);
    }

    /*
    |--------------------------------------------------------------------------
    | Status Filter
    |--------------------------------------------------------------------------
    */

    if ($status !== 'all') {
        $query->where('status', (int)$status);
    }

    /*
    |--------------------------------------------------------------------------
    | Orders List
    |--------------------------------------------------------------------------
    */

    $all_orders = $query->latest()->paginate(10);

    /*
    |--------------------------------------------------------------------------
    | Total Orders Count
    |--------------------------------------------------------------------------
    */

    $total_orders = (clone $query)->count();

    /*
    |--------------------------------------------------------------------------
    | Order Status Counts (VERY IMPORTANT FIX)
    |--------------------------------------------------------------------------
    */

    $countQuery = Order::query();

    // Apply same role filter for counts
    if ($admin->is_franchise == 1) {
        $countQuery->where('franchise_admin_id', $admin->id);
    }

    $orderCounts = $countQuery->selectRaw('
        COUNT(CASE WHEN status = 0 THEN 1 END) as total_pending_order,
        COUNT(CASE WHEN status = 2 THEN 1 END) as total_completed_order
    ')->first();

    /*
    |--------------------------------------------------------------------------
    | Franchise Admin Dropdown
    |--------------------------------------------------------------------------
    */

    $franchiseAdmins = Admin::where('is_franchise', 1)
        ->with('outletLocation')
        ->get();

    /*
    |--------------------------------------------------------------------------
    | Return View
    |--------------------------------------------------------------------------
    */

    return view('backend.pages.orders.admin-orders.all_orders', [
        'all_orders' => $all_orders,
        'total_orders' => $total_orders,
        'total_pending_order' => $orderCounts->total_pending_order ?? 0,
        'total_completed_order' => $orderCounts->total_completed_order ?? 0,
        'current_status' => $status,
        'outletLocations' => $outletLocations,
        'franchiseAdmins' => $franchiseAdmins,
    ]);
}



    public function orderAdminDetails($id,$notificationId=null){
        $outlet_location="";
        $order = Order::with('user','OrderLocations', 'staff', 'service','orderItems')
            ->find($id);

        if (!$order) {
            abort(404);
        }

        AdminNotification::where('id', $notificationId)->update(['is_read' => 'read']);
        $staffs = Staff::where("status",1)->get();

        if($order->outlet_location_id)
        {
            $outlet_location=Admin_outlet_location::where("id",$order->outlet_location_id)->first();
        }
        else
        {
            $outlet_location=null;
        }


        return view('backend.pages.orders.order-details', compact('order','staffs','outlet_location'));
    }


    public function searchOrder(Request $request)
    {
        $searchString = strip_tags($request->string_search);

        $all_orders = Order::with([
                'user','OrderLocations', 'staff', 'service','orderItems'])->where(function ($query) use ($searchString) {
                // Search conditions
                $query->where('total', 'LIKE', "%{$searchString}%")
                    ->orWhere('invoice_number', 'LIKE', "%{$searchString}%");
            })
            ->latest()
            ->paginate(10);

        return $all_orders->total() >= 1 ? view('backend.pages.orders.admin-orders.search-order',
            compact('all_orders'))->render() : response()->json(['status'=>__("nothing")]);
    }

    // pagination
   public function paginate(Request $request)
    {

        if($request->ajax()){

            $query = Order::with('user','OrderLocations', 'staff', 'service','orderItems');

        $status = $request->query('status', 'all');

        if ($status == '0') {
            $query->where('status', 0);
        }elseif ($status ==  '2') {
            $query->where('status', 2);
        }elseif ($status ==  '4') {
            $query->where('status', 4);
        }

        $all_orders = $query->latest()->paginate(10);

            return view('backend.pages.orders.admin-orders.search-order', compact('all_orders'))->render();
        }
    }

    public function changeAdminStatus(Request $request){
        $order_id = $request->id;
        $status = $request->status_id;
        $order = Order::with('user','OrderLocations', 'staff', 'service','orderItems')
            ->where('id',$order_id)
            ->first();

        if (!$order) {
            abort(404);
        }

        if($status == 2)
        {
            if($order->payment_status != 1)
            {
                return redirect()->back()->with(FlashMsg::item_delete(__("Order can not be completed without payment completed")));
            }
        }

        $current_status = $order->status;
        $old_status = '';
        $pending = __("Pending");
        $active = __("Active");
        $completed = __("Completed");
        $delivered=__("Delivered");
        $cancel = __("Canceled");

        // old order status
        if ($current_status == 0){
            $old_status = $pending;
        }elseif($current_status == 1){
            $old_status = $active;
        }elseif ($current_status == 2){
            $old_status = $completed;
        }elseif ($current_status == 3){
            $old_status = $delivered;
        }
        elseif ($current_status == 4){
            $old_status = $cancel;
        }

        // new order status
        if($status==0){
            $new_status = 'Pending';
        }elseif($status==1){
            $new_status = 'Active';
        }
        elseif($status==2){
            $new_status = 'Completed';
        }
        elseif ($status == 3){
            $new_status = "delivered";
        }elseif ($status == 4){
            $new_status = 'Cancel';
        }

        $client_email = optional($order->user)->email;
        $client_firebase_token = optional($order->user)->firebase_token;
        // update
        if($status==4)
        {
            $update=$this->OrderStatusUpdate($order);
            if($update ==false)
            {
                return redirect()->back()->with(FlashMsg::item_delete(__("Order can not be canceled")));
            }

            $order = Order::with('user','OrderLocations', 'staff', 'service','orderItems')
            ->where('id',$order_id)
            ->first();

        }
        else
        {
            $order->update(['status' => $status]);
        }



        try {
            // Define the title and body based on the order status
            $statusMessages = [
                0 => [
                    'title' => __("Order #:order_id Pending"),
                    'body' => __("Your order #:order_id (Sub-order #:sub_order_id) has been created and is now pending.")
                ],
                1 => [
                    'title' => __("Order #:order_id Active"),
                    'body' => __("Your order #:order_id (Sub-order #:sub_order_id) is now active.")
                ],
                2 => [
                    'title' => __("Order #:order_id Completed"),
                    'body' => __("Your order #:order_id (Sub-order #:sub_order_id) has been successfully completed.")
                ],
                3 => [
                    'title' => __("Order #:order_id Delivered"),
                    'body' => __("Your order #:order_id (Sub-order #:sub_order_id) has been delivered.")
                ],
                4 => [
                    'title' => __("Order #:order_id Cancelled"),
                    'body' => __("Your order #:order_id (Sub-order #:sub_order_id) has been cancelled.")
                ],

            ];


            if (!empty($client_firebase_token)) {
                // Get the appropriate title and body based on the current status of the sub_order
                $title = $statusMessages[$order->status]['title'] ?? __("Order Status Changed");
                $body = $statusMessages[$order->status]['body'] ?? __("The status of your order has been updated.");

                // Replace placeholders with actual order ID and sub-order ID
                $title = str_replace([':order_id'], [$order->id], $title);
                $body = str_replace([':order_id', ], [$order->id], $body);

                if (!empty($order->user)) {
                    user_notification($order->id, $order->user?->id, 'order', $body, 'unread');
                }

                $client_notification_data = [
                    "title" => $title,
                    "detailed_title" => "-",
                    "identify" => $order->id, // identify
                    "user_id" => $order->user?->id ?? 0, // user id
                    "body" => $body,
                    "description" => "-",
                    "type" => "order",
                    "sound" => "default",
                    "screen" => "-",
                ];

                 // Pass the token as an array
                $this->orderServiceNotification->sendFirebaseNotification([$client_firebase_token], $title, $body, $client_notification_data);


            }
        }catch (\Exception $e) { }


        // if order status change mail send to client and provider
        try {
            $order_status_change_title = __("Order Status Changed.") . $order->id;
            $message_status = __("Order Status Changed."). ' ' . __("Order ID:") .$order->id;
            $message = str_replace(["@name","@old_status","@new_status","@order_id"],[$order->name,$old_status,$new_status,$order->id],$message_status);
            Mail::to($client_email)->send(new BasicMail([
                'subject' => $order_status_change_title,
                'message' => $message
            ]));

        } catch (\Exception $e) { }

        $client = User::select('id', 'phone')->where('id', $order->user->id)->first();
        $phone_client=$client->phone;
        if($phone_client)
        {
            try {
                dispatch(new SendWhatsAppMessage($phone_client,$message));
            } catch (\Exception $e) {

            }
        }


        return redirect()->back()->with(FlashMsg::item_new(__("Status Change Success")));
    }


    public function OrderStatusUpdate($order_details)
    {
        $order_id=$order_details->id;
        $refunded_amount=0;
        if($order_details)
        {
            $cancellation_policy=OrderCancellationPolicy::first();
            $available_type=$cancellation_policy->available_type;

            if($order_details->status== 4)
            {
                return false;
            }
            else if(($order_details->payment_status==1 && $order_details->status != 2) || ($order_details->payment_status==1 && $order_details->status == 2) )
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
                        $order_details->is_refunded=1;
                        $order_details->save();

                        $refunded_order=RefundedOrder::create([
                            'order_id'=>$order_details->id,
                            'user_id'=>$order_details->user_id,
                            'amount'=>$refunded_amount,
                        ]);

                    }
                    else
                    {
                        return false;
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
                    $order_details->is_refunded=1;
                    $order_details->save();
                    $refunded_order=RefundedOrder::create([
                        'order_id'=>$order_details->id,
                        'user_id'=>$order_details->user_id,
                        'amount'=>$refunded_amount,
                    ]);
                }
            }
            else if($order_details->payment_status!=1)
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
                        return true;

                    }
                    else
                    {
                        return false;
                    }

                }

                $order_details->status=4;
                $order_details->is_refunded=0;
                $order_details->save();
                return true;

            }
            else
            {
                return false;
            }


            if($refunded_order)
            {
                return true;
            }


        }
    }



    public function change_payment_status($id){

        $order= Order::with('user')->where('id',$id)->first();

        if (!$order) {
            return redirect()->back()->with(FlashMsg::item_new('Order not found.'));
        }

        $old_status = $order->payment_status;

        if($order->payment_status=='0'){
            $new_status = '1';
        }else{
            $new_status = '0';
        }

        $client_firebase_token = optional($order->user)->firebase_token;

        Order::where('id',$id)->update([
            'payment_status'=> $new_status
        ]);

        try {
            // Define the title and body based on the order status
            $statusMessages = [
                0 => [
                    'title' => __("Payment Pending"),
                    'body' => __("Your order(#:order_id) payment is now pending.")
                ],
                1 => [
                    'title' => __("Payment Completed"),
                    'body' => __("Your order(#:order_id) payment is completed.")
                ]

            ];


            if (!empty($client_firebase_token)) {
                // Get the appropriate title and body based on the current status of the order
                $title = $statusMessages[$order->status]['title'] ?? __("Order Payment Status Changed");
                $body = $statusMessages[$order->status]['body'] ?? __("The status of your order payment has been updated.");

                // Replace placeholders with actual order ID
                $body = str_replace([':order_id', ], [$order->id], $body);

                if (!empty($order->user)) {
                    user_notification($order->id, $order->user?->id, 'order', $body, 'unread');
                }

                $client_notification_data = [
                    "title" => $title,
                    "detailed_title" => "-",
                    "identify" => $order->id, // identify
                    "user_id" => $order->user?->id ?? 0, // user id
                    "body" => $body,
                    "description" => "-",
                    "type" => "order",
                    "sound" => "default",
                    "screen" => "-",
                ];

                // Pass the token as an array
                $this->orderServiceNotification->sendFirebaseNotification([$client_firebase_token], $title, $body, $client_notification_data);


            }
        }catch (\Exception $e) { }

        try {
            // mail send to client
            $message = get_static_option('admin_change_payment_status_message') ?? __("Payment Status Changed.");
            $message = str_replace(["@name","@old_status","@new_status","@order_id"],[$order->client?->fullname,$old_status,$new_status,$order->id],$message);
            Mail::to($order->client?->email)->send(new BasicMail([
                'subject' => get_static_option('admin_change_payment_status_subject') ?? __("Payment Status Changed."),
                'message' => $message
            ]));


        } catch (\Exception $e) {
            return redirect()->back()->with(FlashMsg::item_new($e->getMessage()));
        }

        $client = User::select('id', 'phone')->where('id', $order->user->id)->first();
        $phone_client=$client->phone;
        if($phone_client)
        {
            try {
                dispatch(new SendWhatsAppMessage($phone_client,$message));
            } catch (\Exception $e) {

            }
        }

        return redirect()->back()->with(FlashMsg::item_new('Status Change Success'));
    }


    public function adminStaffAdd(Request $request)
    {
        $request->validate([
            'order_id' =>'required',
            'staff_id' =>'required',
        ]);
        $oldStaff=0;
        $newStaff=0;
        $oldStaffEmail="";
        $newStaffEmail="";
        $oldStaffPhone="";
        $newStaffPhone="";
        $order = Order::find($request->order_id);

       if($order)
       {

        if($order->staff)
        {
            $oldStaff=$order->staff->id;
            $oldStaffEmail=$order->staff?->email;
            $oldStaffPhone=$order->staff?->phone;

        }

         $order->staff_id = $request->staff_id;
         $order->save();

         $order = Order::find($request->order_id);
         $newStaffEmail=$order->staff?->email;
         $newStaffPhone=$order->staff?->phone;
         $newStaff=$request->staff_id;
         $client_firebase_token = optional($order->user)->firebase_token;
         try {

            if (!empty($client_firebase_token)) {
                // Get the appropriate title and body based on the current status of the sub_order
                $title =  __("Staff Change for Your Upcoming Service");
                $body = __("#:staff will now be assisting you with your service on #:date.");

                // Replace placeholders with actual order ID and sub-order ID
                $body = str_replace([':staff',':date'], [$order->staff?->first_name,$order->date], $body);

                if (!empty($order->user)) {
                    user_notification($order->id, $order->user?->id, 'order', $body, 'unread');
                }

                $client_notification_data = [
                    "title" => $title,
                    "detailed_title" => "-",
                    "identify" => $order->id, // identify
                    "user_id" => $order->user?->id ?? 0, // user id
                    "body" => $body,
                    "description" => "-",
                    "type" => "order",
                    "sound" => "default",
                    "screen" => "-",
                ];

                 // Pass the token as an array
                $this->orderServiceNotification->sendFirebaseNotification([$client_firebase_token], $title, $body, $client_notification_data);




            }
        }catch (\Exception $e) { }

         try {
            // mail send to staff
            if($oldStaff!=0)
            {
                $message = get_static_option('admin_change_staff_message') ?? __("The new staff is assigned by altering your duties.");
                $message = str_replace(["@name","@order_id"],[$order->staff?->first_name,$order->id],$message);
                Mail::to($oldStaffEmail)->send(new BasicMail([
                    'subject' => get_static_option('admin_change_staff_subject') ?? __("New Staff Assigned."),
                    'message' => $message
                ]));
            }


            $message = get_static_option('admin_change_staff_message_for_new_staff') ?? __("You are assigned to a new work.");
            $message = str_replace(["@name","@order_id"],[$order->staff?->first_name,$order->id],$message);
            Mail::to($newStaffEmail)->send(new BasicMail([
                'subject' => get_static_option('admin_change_staff_subject_for_new_staff') ?? __("New Work Assigned."),
                'message' => $message
            ]));



        } catch (\Exception $e) {

        }

        //send sms to staff

        try {

            if($oldStaff!=0)
            {
                $sent = $this->sendSms([$oldStaffPhone, __("The new staff is assigned by altering your duties."), $order->id], 'order');

            }

            $sent = $this->sendSms([$newStaffPhone, __("You are assigned to a new work."), $order->id], 'order');



        }catch (\Exception $e) {
            // Handle any other general exceptions

        }
        try {

            if($oldStaff!=0)
            {

               $message='The new staff is assigned by altering your duties.Order Id:'. $order->id;
                dispatch(new SendWhatsAppMessage($oldStaffPhone,$message));



            }
            $message='You are assigned to a new work.Order Id: '.$order->id;
            dispatch(new SendWhatsAppMessage($newStaffPhone,$message));

        }catch (\Exception $e) {

        }
         return redirect()->back()->with(FlashMsg::item_new('Success'));
       }

    }


    public function afterBookingStepsPage()
    {
        $afterBookingSteps = AfterBookingStep::all();
        return view('backend.pages.orders.after-booking-steps', compact('afterBookingSteps'));
    }

    public function afterBookingSteps(Request $request)
    {
        $request->validate([
            'booking-steps.*' => 'required',

        ], [
            'booking-steps.*.required' => __("Can not submit empty step value"),
        ]);

        $booking_steps = $request->input("booking-steps");
        $afterBookingSteps=AfterBookingStep::all();

        if ($afterBookingSteps->isNotEmpty()) {

            AfterBookingStep::truncate();

        }

        if($request->filled('booking-steps')) {
            $includedSteps = [];
            foreach ($booking_steps as $key => $step) {
                if(!empty($step))
                {
                    $includedSteps[] = [
                        'steps_no' => $key+1,
                        'steps' => $step,
                    ];
                }


            }
            AfterBookingStep::insert($includedSteps);
        }
        return redirect()->back()->with(FlashMsg::item_new(__("After Booking Steps add Success")));

    }



}
