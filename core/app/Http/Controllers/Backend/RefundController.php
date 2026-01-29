<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Http\Services\OrderServiceNotification;
use App\Http\Services\UpdateMainOrderStatus;
use App\Mail\BasicMail;
use App\Models\Order;
use App\Models\OrderCancellationPolicy;
use App\Models\RefundedOrder;
use App\Models\RefundGateway;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Modules\SMSGateway\app\Http\Traits\OtpGlobalTrait;
use Modules\SMSGateway\app\Models\SmsGateway;
use Modules\Wallet\app\Models\Transaction;
use Modules\Wallet\app\Models\Wallet;


class RefundController extends Controller
{
    use OtpGlobalTrait;
    protected $orderServiceNotification;

    public function __construct(OrderServiceNotification $orderServiceNotification)
    {
        $this->orderServiceNotification = $orderServiceNotification;
    }

    public function refundList()
    {
        $refundedOrders = RefundedOrder::latest()->paginate(10);
        $cancellationPolicy=OrderCancellationPolicy::first();
        foreach ($refundedOrders as $order)
        {
            $order->fine_type=$cancellationPolicy->fine_type;
            $order->fine_amount=$cancellationPolicy->amount;
        }
        return view('backend.pages.orders.refunded-list.all-list', compact('refundedOrders'));
    }


    // pagination
   public function paginate(Request $request)
    {

        if($request->ajax()){

            $query = RefundedOrder::with('user');



        $refundedOrders = $query->latest()->paginate(10);

        $cancellationPolicy=OrderCancellationPolicy::first();
        foreach ($refundedOrders as $order)
        {
            $order->fine_type=$cancellationPolicy->fine_type;
            $order->fine_amount=$cancellationPolicy->amount;
        }

            return view('backend.pages.orders.refunded-list.search-refunded-order', compact('refundedOrders'))->render();
        }
    }

    public function refundDetails(Request $request, $id)
    {
        $refundedOrder = RefundedOrder::with('user','order')
            ->where('id',$id)
            ->first();

        if (!$refundedOrder) {
            abort(404);
        }
        $gateway_details=RefundGateway::where('id',$refundedOrder->gateway_id)->first();
        $cancellationPolicy=OrderCancellationPolicy::first();
        $refundedOrder->fine_type=$cancellationPolicy->fine_type;
        $refundedOrder->fine_amount=$cancellationPolicy->amount;
        $refundedOrder->gateway_name=$gateway_details->name ?? null;
        $gateway_fields = json_decode($refundedOrder->gateway_fields,true);

        $refundedOrder->gateway_field=$gateway_fields;

        return view('backend.pages.orders.refunded-list.refund-details', compact('refundedOrder'));
    }

    public function changeRefundedStatus(Request $request){
        $refund_order_id = $request->id;
        $status = $request->status_id;
        $refund_order = RefundedOrder::with('user')
            ->where('id',$refund_order_id)
            ->first();

        if (!$refund_order) {
            abort(404);
        }

        $current_status = $refund_order->status;
        $old_status = '';
        $pending = __("Pending");
        $completed = __("Completed");
        $cancel = __("Canceled");

        // old order status
        if ($current_status == 0){
            $old_status = $pending;
        }elseif($current_status == 1){
            $old_status = $completed;
        }elseif ($current_status == 2){
            $old_status = $cancel;
        }

        // new order status
        if($status==0){
            $new_status = 'Pending';
        }elseif($status==1){
            $new_status = 'Completed';
        }
        elseif($status==2){
            $new_status = 'Cancel';
        }

        $client_email = optional($refund_order->user)->email;
        $client_firebase_token = optional($refund_order->user)->firebase_token;
        // update
        $refund_order->update(['status' => $status]);
        if($current_status == 1 && $status != 1){
            $order=Order::where('id',$refund_order->order_id)->first();
            if($order){
                $order->is_refunded=0;
                $order->save();
                // Get user's wallet
                $wallet = Wallet::firstOrCreate(
                    ['user_id' => $refund_order->user_id],
                    ['available_balance' => 0]
                );

                // Update wallet balance
                $wallet->available_balance -= $refund_order->amount;
                // Ensure wallet balance doesn't go negative
                if ($wallet->available_balance < 0) {
                    $wallet->available_balance = 0;
                }

                $wallet->save();

                // Generate a new invoice number
                $invoiceNumber = generateTransactionInvoiceNumber();

                // Create deposit/refund transaction
                $transaction = Transaction::create([
                    'user_id' => $refund_order->user_id,
                    'wallet_id' => $wallet->id,
                    'transaction_type' => 'refund',
                    'amount' => $refund_order->amount,
                    'description' => 'Refund reverted from wallet due to order status change',
                    'payment_gateway' => 'wallet',
                    'status' => 'completed',
                    'reference_type' => 'refund_revert',
                    'reference_table_id' => $refund_order->id,
                    'invoice_number' => $invoiceNumber
                ]);
            }
        }

         // If status is changed to completed, process the refund
        if($status == 1) {
            $order=Order::where('id',$refund_order->order_id)->first();
            if($order){
                $order->is_refunded=1;
                $order->save();

                // Get user's wallet
                $wallet = Wallet::firstOrCreate(
                    ['user_id' => $refund_order->user_id],
                    ['available_balance' => 0]
                );

                // Update wallet balance
                $wallet->available_balance += $refund_order->amount;
                $wallet->save();

                // Generate a new invoice number
                $invoiceNumber = generateTransactionInvoiceNumber();

                // Create deposit/refund transaction
                $transaction = Transaction::create([
                    'user_id' => $refund_order->user_id,
                    'wallet_id' => $wallet->id,
                    'transaction_type' => 'refund',
                    'amount' => $refund_order->amount,
                    'description' => 'Order payment refunded to wallet',
                    'payment_gateway' => 'wallet',
                    'status' => 'completed',
                    'reference_type' => 'refund',
                    'reference_table_id' => $refund_order->id,
                    'invoice_number' => $invoiceNumber
                ]);

            }


        }

            try {
                // Define the title and body based on the order status
                $statusMessages = [
                    0 => [
                        'title' => __("Refunded Order #:order_id Pending"),
                        'body' => __("Your refunded order #:order_id has been created and is now pending.")
                    ],
                    1 => [
                       'title' => __("Refunded Order #:order_id Completed"),
                        'body' => __("Your refunded order #:order_id has been successfully completed.")
                    ],
                    2 => [

                    ],
                    3 => [
                        'title' => __("Refunded Order #:order_id Cancelled"),
                        'body' => __("Your refunded order #:order_id has been cancelled.")
                    ],


                ];


                if (!empty($client_firebase_token)) {
                    // Get the appropriate title and body based on the current status of the order
                    $title = $statusMessages[$refund_order->status]['title'] ?? __("Refunded Order Status Changed");
                    $body = $statusMessages[$refund_order->status]['body'] ?? __("The status of your refunded order has been updated.");

                    // Replace placeholders with actual order ID
                    $title = str_replace([':order_id'], [$refund_order->order_id], $title);
                    $body = str_replace([':order_id', ], [$refund_order->order_id], $body);

                    if (!empty($refund_order->user)) {
                        user_notification($refund_order->order_id, $refund_order->user_id, 'order', $body, 'unread');
                    }

                    $client_notification_data = [
                        "title" => $title,
                        "detailed_title" => "-",
                        "identify" => $refund_order->order_id, // identify
                        "user_id" => $refund_order->user_id ?? 0, // user id
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
            $order_status_change_title = __("Refunded Order Status Changed.") . $refund_order->order_id;
            $message_status = __("Refunded Order Status Changed."). ' ' . __("Order ID:") .$refund_order->order_id;
            $message = str_replace(["@name","@old_status","@new_status","@order_id"],[$refund_order->user?->fullname,$old_status,$new_status,$refund_order->order_id],$message_status);
            Mail::to($client_email)->send(new BasicMail([
                'subject' => $order_status_change_title,
                'message' => $message
            ]));

        } catch (\Exception $e) { }


        return redirect()->back()->with(FlashMsg::item_new(__("Refunded Status Change Success")));
    }

}
