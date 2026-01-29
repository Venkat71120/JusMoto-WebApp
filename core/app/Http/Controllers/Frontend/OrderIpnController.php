<?php

namespace App\Http\Controllers\Frontend;

use App\Helpers\FlashMsg;
use App\Helpers\PaymentGatewayCredential;
use App\Http\Controllers\Controller;
use App\Models\CacheOrder;
use App\Models\Order;
use App\Models\SubOrder;
use App\Models\UserCartItem;
use Illuminate\Http\Request;

class OrderIpnController extends Controller
{
    public function payment_process_cinetpay_ipn(Request $request)
    {
        $cinetpay = PaymentGatewayCredential::get_cinetpay_credential();
        $payment_data=$cinetpay->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'cinetpay';
                $order->payment_status = 1; //complete
                $order->save();
                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }

                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_squareup_ipn(Request $request)
    {
        $squareup = PaymentGatewayCredential::get_squareup_credential();

        $payment_data=$squareup->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'squareup';
                $order->payment_status = 1; //complete
                $order->save();
                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_zitopay_ipn(Request $request)
    {
        $zitopay = PaymentGatewayCredential::get_zitopay_credential();

        $payment_data=$zitopay->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'zitopay';
                $order->payment_status = 1; //complete
                $order->save();
                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_mercadopago_ipn(Request $request)
    {
        $mercadopago = PaymentGatewayCredential::get_marcadopago_credential();

        $payment_data=$mercadopago->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'mercadopago';
                $order->payment_status = 1; //complete
                $order->save();
                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_instamojo_ipn(Request $request)
    {
        $instamojo = PaymentGatewayCredential::get_instamojo_credential();

        $payment_data=$instamojo->ipn_response();

        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'cashfree';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }

                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_cashfree_ipn(Request $request)
    {
        $cashfree = PaymentGatewayCredential::get_cashfree_credential();

        $payment_data=$cashfree->ipn_response();


        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'cashfree';
                $order->payment_status = 1; //complete
                $order->save();
                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_payfast_ipn(Request $request)
    {

        $payfast = PaymentGatewayCredential::get_payfast_credential();

        $payment_data=$payfast->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'payfast';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_mollie_ipn(Request $request)
    {
        $mollie = PaymentGatewayCredential::get_mollie_credential();

        $payment_data=$mollie->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'mollie';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }

                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_razorpay_ipn(Request $request)
    {
        $razorpay = PaymentGatewayCredential::get_razorpay_credential();

        $payment_data=$razorpay->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'razorpay';
                $order->payment_status = 1;
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }


    public function payment_process_midtrans_ipn(Request $request)
    {
        $midtrans = PaymentGatewayCredential::get_midtrans_credential();

        $payment_data=$midtrans->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'midtrans';
                $order->payment_status = 1; //complete
                $order->save();
                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }


    public function payment_process_paypal_ipn(Request $request){

        $paypal = PaymentGatewayCredential::get_paypal_credential();

        $payment_data=$paypal->ipn_response();

        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'paypal';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }

                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_paytm_ipn(Request $request){

        $paytm = PaymentGatewayCredential::get_paytm_credential();

        $payment_data=$paytm->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'paytm';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }

                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_stripe_ipn(Request $request){

        $stripe = PaymentGatewayCredential::get_stripe_credential();

        $payment_data=$stripe->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'stripe';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }

                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_paytabs_ipn(Request $request)
    {
        $paytabs = PaymentGatewayCredential::get_paytabs_credential();

        $payment_data=$paytabs->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'paytabs';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_billplz_ipn(Request $request)
    {
        $billplz = PaymentGatewayCredential::get_billplz_credential();

        $payment_data=$billplz->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'billplz';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_toyyibpay_ipn(Request $request)
    {
        $toyyibpay = PaymentGatewayCredential::get_toyyibpay_credential();

        $payment_data=$toyyibpay->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'toyyibpay';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }

    public function payment_process_flutterwave_ipn(Request $request)
    {
        $flutterwave = PaymentGatewayCredential::get_flutterwave_credential();

        $payment_data=$flutterwave->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $order = Order::find($order_id);
            if ($order) {
                $order->transaction_id = $payment_data['transaction_id'];
                $order->payment_gateway = 'flutterwave';
                $order->payment_status = 1; //complete
                $order->save();

                if (session('cart_checkout')) {
                    UserCartItem::where('user_id', $order->user_id)->delete();
                    session()->forget('cart_checkout');
                }
                toastr_success(__('Order  successfully completed'));
                return redirect()->route('client.order.payment.process.success',$payment_data['order_id']);

            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }


    public function payment_process_paystack_ipn(Request $request)
    {
        $paystack = PaymentGatewayCredential::get_paystack_credential();

        $payment_data=$paystack->ipn_response();
        $order_id=$payment_data['order_id'] ?? null;
        $order = Order::find($order_id);
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete') {
            if ($payment_data['type'] === 'service-order') {

                if ($order) {
                    $order->transaction_id = $payment_data['transaction_id'];
                    $order->payment_gateway = 'paystack';
                    $order->payment_status = 1; //complete
                    $order->save();
                    if (session('cart_checkout')) {
                        UserCartItem::where('user_id', $order->user_id)->delete();
                        session()->forget('cart_checkout');
                    }
                    toastr_success(__('Order  successfully completed'));
                    return redirect()->route('client.order.payment.process.success', $payment_data['order_id']);

                }


            }
        }
        toastr_error(__('Payment failed'));
        return redirect()->route('client.order.payment.process.failed',$payment_data['order_id']);
    }
}
