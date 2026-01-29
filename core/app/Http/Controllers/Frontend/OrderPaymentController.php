<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Services\OrderServiceNotification;
use App\Jobs\SendOrderCreateEmail;
use App\Jobs\SendWhatsAppMessage;
use App\Models\Backend\Admin;
use App\Models\Backend\Admin_outlet_location;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderLocation;
use App\Models\Service;
use App\Models\Service_Car;
use App\Models\SubOrder;
use App\Helpers\FlashMsg;
use App\Models\User;
use App\Models\UserCartItem;
use App\Models\UserLocation;
use App\Models\UserSelectedCar;
use App\Models\Varient;
use App\Notifications\OrderNotification;
use Illuminate\Http\Request;
use App\Http\Services\OrderService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Modules\Wallet\app\Models\Wallet;
use App\Helpers\PaymentGatewayCredential;
use Modules\Wallet\app\Models\Transaction;

class OrderPaymentController extends Controller
{

    protected $orderServiceNotification;

    public function __construct(OrderServiceNotification $orderServiceNotification)
    {
        $this->orderServiceNotification = $orderServiceNotification;
    }
    public function order_payment_update(Request $request)
    {

        $request->validate([
            'order_id'=>'required|exists:orders,id',

        ],[
            'order_id.required'=>'Order id is required'
        ]);


        $order= Order::find($request->order_id);
        if($order->payment_status === 1){
            toastr_error(__('Payment is already done.'));
            return redirect()->back();
        }

        $user_id= Auth::user()->id;

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

            if ($wallet->available_balance < $order->total) {
                toastr_error(__('Insufficient wallet balance.'));
                return redirect()->back()->withErrors(['wallet' => __('Insufficient wallet balance.')]);
            }


            // Generate a new invoice number
            $invoiceNumber = generateTransactionInvoiceNumber();

            // Create deposit transaction
            $transaction = Transaction::create([
                'user_id' => $user_id,
                'wallet_id' => $wallet->id,
                'transaction_type' => 'payment',
                'amount' => $order->total,
                'description' => 'Order payment using wallet balance',
                'payment_gateway' => 'wallet',
                'status' => 'completed',
                'reference_type' => 'order_payment',
                'reference_table_id' => $order->id,
                'invoice_number' => $invoiceNumber
            ]);

            $wallet->available_balance = $wallet->available_balance - $order->total;
            $wallet->save();

            $order->payment_gateway = 'wallet';
            $order->payment_status = 1;
            $order->save();

            toastr_success(__('Order successfully completed'));
            return redirect()->route('client.order.payment.process.success',$order->id);


        }else{

            $response=$this->payment_process($request->selected_payment_gateway, $order->id);
            return $response;
        }



    }

    public function payment_process($payment_gateway, $order_id){

        if($payment_gateway === 'stripe'){
            $stripe = PaymentGatewayCredential::get_stripe_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'stripe';
            $order->save();

            $response =  $stripe->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.stripe.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);


            return $response;
        }
        else if($payment_gateway === 'paytm')
        {
            $paytm = PaymentGatewayCredential::get_paytm_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'paytm';
            $order->save();
            $response =  $paytm->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.paytm.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'paypal')
        {
            $paypal = PaymentGatewayCredential::get_paypal_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'paypal';
            $order->save();
            $response =  $paypal->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.paypal.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'midtrans')
        {
            $midtrans = PaymentGatewayCredential::get_midtrans_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'midtrans';
            $order->save();
            $response =  $midtrans->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.midtrans.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);


            return $response;
        }
        else if($payment_gateway === 'razorpay')
        {
            $razorpay = PaymentGatewayCredential::get_razorpay_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'razorpay';
            $order->save();
            $response =  $razorpay->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.razorpay.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'mollie')
        {
            $mollie = PaymentGatewayCredential::get_mollie_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'mollie';
            $order->save();
            $response =  $mollie->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.mollie.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'payfast')
        {
            $payfast = PaymentGatewayCredential::get_payfast_credential();

            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'payfast';
            $order->save();
            $response =  $payfast->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.payfast.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
//                'success_url' =>route('client.order.payment.process.payfast.ipn'),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);
            return $response;
        }

        else if($payment_gateway === 'cashfree')
        {

            $cashfree = PaymentGatewayCredential::get_cashfree_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'cashfree';
            $order->save();
            $response =  $cashfree->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.cashfree.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'instamojo')
        {
            $instamojo = PaymentGatewayCredential::get_instamojo_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'instamojo';
            $order->save();
            $response =  $instamojo->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.instamojo.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'marcadopago')
        {
            $marcadopago = PaymentGatewayCredential::get_marcadopago_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'marcadopago';
            $order->save();
            $response =  $marcadopago->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.marcadopago.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'zitopay')
        {
            $zitopay = PaymentGatewayCredential::get_zitopay_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'zitopay';
            $order->save();
            $response =  $zitopay->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.zitopay.ipn'), //post route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }

        else if ($payment_gateway === 'squareup')
        {
            $squareup = PaymentGatewayCredential::get_squareup_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'squareup';
            $order->save();

            $response =  $squareup->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.squareup.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'cinetpay')
        {
            $cinetpay = PaymentGatewayCredential::get_cinetpay_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'cinetpay';
            $order->save();
            $response =  $cinetpay->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.cinetpay.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'paytabs')
        {
            $paytabs = PaymentGatewayCredential::get_paytabs_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'paytabs';
            $order->save();
            $response =  $paytabs->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.paytabs.ipn'), //post route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'billplz')
        {
            $billplz = PaymentGatewayCredential::get_billplz_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'billplz';
            $order->save();
            $response =  $billplz->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.billplz.ipn'), //post route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'toyyibpay')
        {
            $toyyibpay = PaymentGatewayCredential::get_toyyibpay_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'toyyibpay';
            $order->save();
            $response =  $toyyibpay->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.toyyibpay.ipn'), //post route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }
        else if($payment_gateway === 'flutterwave')
        {
            $flutterwave = PaymentGatewayCredential::get_flutterwave_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'flutterwave';
            $order->save();
            $response =  $flutterwave->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.flutterwave.ipn'), //post route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }

        else if($payment_gateway === 'paystack')
        {
            $paystack = PaymentGatewayCredential::get_paystack_credential();
            $order=Order::where('id', $order_id)->first();
            $order->payment_gateway = 'paystack';
            $order->save();
            $response =  $paystack->charge_customer([
                'amount' => $order->total,
                'title' => 'Order',
                'description' => 'Order #'. $order_id.' Email: '.$order->user?->email.' Name: '.$order->user?->fullName,
                'ipn_url' => route('client.order.payment.process.paystack.ipn'), //get route
                'order_id' => $order_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.order.payment.process.failed',$order_id),
                'success_url' => route('client.order.payment.process.success',$order_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'service-order',
            ]);

            return $response;
        }

        else if($payment_gateway === 'manual_payment')
        {
            $allowedSize = get_static_option('max_upload_size') ?? '5120';
            $allowedExtensions = json_decode(get_static_option('file_extensions'), true);
            $client_id = Auth::user()->id;

            if($allowedExtensions){
                $allowed_extensions = implode(',', $allowedExtensions);
                request()->validate([
                    'manual_payment_image' => 'required|mimes:' . $allowed_extensions . '|max:' . $allowedSize,
                ]);
            }else{
                request()->validate(['manual_payment_image' => 'required|mimes:jpg,jpeg,png,pdf']);
            }
            return (new OrderService())->manual_order(request(), $client_id, $order_id);
        }
        else if($payment_gateway === 'cash_on_delivery') {
            $order = Order::where('id', $order_id)->first();
            $order->payment_gateway = 'cash_on_delivery';
            $order->save();

            toastr_success(__('Order placed successfully.'));
            return redirect()->route('client.order.payment.process.success', $order_id);


        }else{
            toastr_error(__('Payment gateway not found.'));
            return redirect()->route('client.order.payment.process.failed',[$order_id]);
        }



    }

    public function payment_process_success($order_id)
    {
        $order_details = Order::findOrFail($order_id);

        session()->forget([
            'booking_delivery_charge',
            'booking_tax',
            'booking_discount',
            'booking_sub_total',
            'booking_total',
            'booking_coupon',
        ]);


        // redirect to the order details page and trigger modal
        return redirect()
            ->route('order.details', $order_id)
            ->with('payment_success', true)
            ->with('order_success_details', $order_details);
    }

    public function payment_process_failed($order_id)
    {
        session()->forget([
            'booking_delivery_charge',
            'booking_tax',
            'booking_discount',
            'booking_sub_total',
            'booking_total',
            'booking_coupon',
        ]);

        return redirect()
            ->route('order.details', $order_id)
            ->with('payment_failed', true);
    }

    public function orderCreate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'coupon' => 'nullable|string',
            'service' => 'required|string|in:pickup,outlet',
            'date' => 'required|date',
            'time' => 'required|string',
            'selected_payment_gateway' => 'required|string',
            // Only required when service = outlet
            'outlet_id'   => 'required_if:service,outlet|nullable|integer|exists:admin_outlet_locations,id',
            'user_location_id' => 'sometimes|nullable|integer|exists:user_locations,id|required_without_all:outlet_id,address',
            'address'     => 'sometimes|nullable|string|required_without_all:outlet_id',

        ], [
            'service.required' => 'Please select a service type (Pickup & Delivery or Visit Outlet).',
            'service.in' => 'Invalid service type selected.',
            'date.required' => 'Please select a booking date.',
            'date.date' => 'Please select a valid date.',
            'time.required' => 'Please select a booking time.',
            'selected_payment_gateway.required' => 'Please select a payment method.',
            'user_location_id.required_without_all' => 'Please select a saved address or enter an address.',
            'user_location_id.exists' => 'The selected address is invalid.',
            'outlet_id.required_if' => 'Please select an outlet location.',
            'outlet_id.exists' => 'The selected outlet is invalid.',
            'address.required_without_all' => 'Please enter your address.',
            'address.string' => 'Address must be a valid text.',
        ]);

        if ($validator->fails()) {
            $firstError = $validator->errors()->first();
            toastr_error($firstError);
            return redirect()->back()
                ->withInput();
        }

        $userId = auth()->id();
        $selectedItems=null;
        $serviceType = $request->input('service'); // 'pickup' OR 'outlet'

        $delivery_mode = $serviceType === 'pickup' ? 'pickup' : 'walkin';


        if ($userId) {
            $selectedItems = UserCartItem::with(['user', 'service'])
                ->where('user_id', $userId)->get();
        }
        if ($selectedItems->isEmpty()) {
            toastr_error('No items in the cart to place an order.');
            return redirect()->back();
        }

        // Generate a new invoice number
        $invoiceNumber = generateInvoiceNumber();

        // if order price 0 not create order
        $sub_total = $selectedItems->sum(function ($item) {
            return $item->price * $item->quantity;
        });

        if ($sub_total == 0) {
            toastr_error(__('Service price is 0, order cannot be created. Please try other services.'));
            return redirect()->back();
        }
        $total_qty = $selectedItems->sum(function ($item) {
            return $item->quantity;
        });

        $location = null;
        $outlet = null;

        if($request->has('user_location_id')){
            $location = UserLocation::find($request->user_location_id);
        } elseif($request->has('outlet_id')){
            $outlet = Admin_outlet_location::find($request->outlet_id);
        }

        $selectedCar=UserSelectedCar::where('user_id',$userId)->first();
        $variant=Varient::where('car_id',$selectedCar->car_id)->where('engine_type_id',$selectedCar->engine_type_id)->where('fual_type_id',$selectedCar->fual_type_id)->first();

        $items=[];
        $admin_id=[];
        $image=0;
        foreach ($selectedItems as $single_service) {
            $service = Service::find($single_service->item_id);
            if (!empty($service))
            {
                $service_car=Service_Car::where("varient_id",$variant->id)->where("service_id",$single_service->item_id)->first();
                if($service_car)
                {
                    if($service_car?->image)
                    {
                        $image=$service_car->image;
                    }
                    else
                    {
                        $image=$service->image;
                    }
                    $admin_id[] = $service->admin_id;
                    $id= $single_service->item_id;
                    $type=$service->type;

                    $items[]=[
                        'id'=>$id,
                        'type'=>$type,
                        'qty'=>$single_service->quantity,
                        'price'=>$single_service->price,
                        'image'=>$image,

                    ];
                }

            }

        }

        $admin_json=json_encode($admin_id);

        $order = Order::create([
            'user_id' => $userId,
            'admin_id' => $admin_json,
            'staff_id' => $request->staff_id ?? null,
            'date' => $request->date,
            'schedule' => $request->time,
            'outlet_location_id' => $request->outlet_id,
            'delivery_mode' => $delivery_mode ?? 'pickup',
            'sub_total' => $sub_total,
            'tax' => 0,
            'total' => 0,
            'payment_gateway'=>$request->selected_payment_gateway,
            'payment_status' => 0,
            'coupon_code' => $request->coupon ?? null,
            'order_note' => $request->note ?? null,
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

        // order location create
        if (!$request->outlet_id && ($request->location_id || $request->address)){
            OrderLocation::create([
                'order_id' => $last_order_id,
                'state_id' => $location?->state_id ?? null,
                'city_id' => $location?->city_id ?? null,
                'area_id' => $location?->area_id ?? null,
                'title' => $location?->title ?? null,
                'post_code' => $location?->post_code ?? null,
                'address' => $request->address,
                'phone' => $location?->phone ?? null,
                'emergency_phone' => $location?->emergency_phone ?? null,
                'latitude' => $location?->latitude ?? null,
                'longitude' =>$location?->longitude ?? null,
                'type' => $location?->type ?? "0"
            ]);
        }

        // send OrderNotification
        foreach($items as $key=>$item)
        {

            $admin = Admin::where('id', $admin_id[$key])->first();
            $order_message = __('You have a new order');
            if (!empty($admin)){
                $admin->notify(new OrderNotification($last_order_id, $item["id"], $admin->id, $userId, $order_message));
            }

            // incrementer service sold_count
            Service::where('id', $item["id"])->increment('sold_count',$item['qty'] );
        }

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

        if($delivery_mode =="walkin")
        {
            $state_delivery_charge_rate = 0;
        }

        // apply for suborder coupons
        $coupon_details = subOrderCalculateCouponAmount($request->coupon, $sub_total);

        // Calculate tax amount and  Calculate total price including tax
        $tax_amount = ($coupon_details['total'] * $state_tax_rate) / 100;
        $total = $coupon_details['total'] + $tax_amount + $state_delivery_charge_rate;


        if (!empty($order)){
            // Update suborder
            Order::where('id', $last_order_id)->update([
                'delivery_charge'=>$state_delivery_charge_rate,
                'sub_total' => $sub_total,
                'coupon_code' => $coupon_details['coupon_code'] ?? null,
                'coupon_type' => $coupon_details['coupon_type'] ?? null,
                'coupon_amount' => $coupon_details['coupon_amount'],
                'tax' => $tax_amount,
                'total' => $total,
                'invoice_number'=> $invoiceNumber,
            ]);

        }

        session([
            'booking_delivery_charge' => $state_delivery_charge_rate,
            'booking_tax' => $tax_amount,
            'booking_discount' =>  $coupon_details['coupon_amount'],
            'booking_sub_total' => $sub_total,
            'booking_total' => $total,
            'booking_coupon' => $coupon_details['coupon_code'] ?? null,
        ]);



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
        $service_admin_ids = $order_details?->admin_id;

        $service_admin_ids=json_decode($service_admin_ids);
        $service_admin_ids = array_unique($service_admin_ids);

        // Get unique admin phone
        $admins = Admin::whereIn('id', $service_admin_ids)->get();
        $message_for_admin = get_static_option('new_order_admin_message') ?? __('You have a new order #');
        $message_for_admin = str_replace('#', $order_details?->id, $message_for_admin);
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

        $client = User::select('id', 'phone')->where('id', $order_details?->user_id)->first();
        $phone_client=$client->phone;
        $message_for_client = get_static_option('new_order_client_message') ?? __('You have successfully placed an order #');
        $message_for_client = str_replace('#', $order_details?->id, $message_for_client);
        if($phone_client)
        {
            try {
                dispatch(new SendWhatsAppMessage($phone_client,$message_for_client));
            } catch (\Exception $e) {

            }
        }

        if($request->selected_payment_gateway === 'wallet')
        {
            $wallet = Wallet::where('user_id',$userId)->first();
            if(!$wallet)
            {
                $wallet=Wallet::create([
                    'user_id' => $userId,
                    'available_balance' => 0
                ]);
            }

            if($wallet->available_balance < $order_details?->total)
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
                'user_id' => $userId,
                'wallet_id' => $wallet->id,
                'transaction_type' => 'payment',
                'amount' => $order_details?->total,
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

            UserCartItem::where('user_id', $order_details->user_id)->delete();

            toastr_success(__('Order placed successfully.'));
            return redirect()->route('client.order.payment.process.success', $last_order_id);

        }
        else{
            session(['cart_checkout' => true]);
            return $this->payment_process($request->selected_payment_gateway,$last_order_id);

        }

    }
}
