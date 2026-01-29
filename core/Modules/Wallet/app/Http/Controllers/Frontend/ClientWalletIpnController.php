<?php

namespace Modules\Wallet\app\Http\Controllers\Frontend;

use App\Helpers\FlashMsg;
use App\Helpers\PaymentGatewayCredential;
use App\Http\Controllers\Controller;
use App\Models\CacheOrder;
use App\Models\Order;
use App\Models\SubOrder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\Wallet\app\Models\Transaction;
use Modules\Wallet\app\Models\Wallet;

class ClientWalletIpnController extends Controller
{
    public function payment_process_cinetpay_ipn(Request $request)
    {
        $cinetpay = PaymentGatewayCredential::get_cinetpay_credential();

        $payment_data=$cinetpay->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'cinetpay';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_squareup_ipn(Request $request)
    {
        $squareup = PaymentGatewayCredential::get_squareup_credential();

        $payment_data=$squareup->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'squareup';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_zitopay_ipn(Request $request)
    {
        $zitopay = PaymentGatewayCredential::get_zitopay_credential();

        $payment_data=$zitopay->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'zitopay';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_mercadopago_ipn(Request $request)
    {
        $mercadopago = PaymentGatewayCredential::get_marcadopago_credential();

        $payment_data=$mercadopago->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'mercadopago';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_instamojo_ipn(Request $request)
    {
        $instamojo = PaymentGatewayCredential::get_instamojo_credential();

        $payment_data=$instamojo->ipn_response();

        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'instamojo';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_cashfree_ipn(Request $request)
    {
        $cashfree = PaymentGatewayCredential::get_cashfree_credential();

        $payment_data=$cashfree->ipn_response();


        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'cashfree';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_payfast_ipn(Request $request)
    {

        $payfast = PaymentGatewayCredential::get_payfast_credential();

        $payment_data=$payfast->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'payfast';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_mollie_ipn(Request $request)
    {
        $mollie = PaymentGatewayCredential::get_mollie_credential();

        $payment_data=$mollie->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'mollie';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_razorpay_ipn(Request $request)
    {
        $razorpay = PaymentGatewayCredential::get_razorpay_credential();

        $payment_data=$razorpay->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'razorpay';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }


    public function payment_process_midtrans_ipn(Request $request)
    {
        $midtrans = PaymentGatewayCredential::get_midtrans_credential();

        $payment_data=$midtrans->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'midtrans';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }


    public function payment_process_paypal_ipn(Request $request){

        $paypal = PaymentGatewayCredential::get_paypal_credential();

        $payment_data=$paypal->ipn_response();

        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'paypal';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_paytm_ipn(Request $request){

        $paytm = PaymentGatewayCredential::get_paytm_credential();

        $payment_data=$paytm->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'paytm';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_stripe_ipn(Request $request){

        $stripe = PaymentGatewayCredential::get_stripe_credential();

        $payment_data=$stripe->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'stripe';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_paytabs_ipn(Request $request)
    {
        $paytabs = PaymentGatewayCredential::get_paytabs_credential();

        $payment_data=$paytabs->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'paytabs';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_billplz_ipn(Request $request)
    {
        $billplz = PaymentGatewayCredential::get_billplz_credential();

        $payment_data=$billplz->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'billplz';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_toyyibpay_ipn(Request $request)
    {
        $toyyibpay = PaymentGatewayCredential::get_toyyibpay_credential();

        $payment_data=$toyyibpay->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'toyyibpay';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }

    public function payment_process_flutterwave_ipn(Request $request)
    {
        $flutterwave = PaymentGatewayCredential::get_flutterwave_credential();

        $payment_data=$flutterwave->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete'){
            $transaction = Transaction::find($transaction_id);
            if ($transaction) {
                $transaction->payment_gateway = 'flutterwave';
                $transaction->status = 'completed';
                $transaction->save();

                $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                if ($wallet) {
                    $wallet->available_balance += $transaction->amount;
                    $wallet->save();
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $transaction->user_id;
                    $wallet->available_balance = $transaction->amount;
                    $wallet->save();
                }

                toastr_success('Deposit successfully completed');
                return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

            }
        }
        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }


    public function payment_process_paystack_ipn(Request $request)
    {
        $paystack = PaymentGatewayCredential::get_paystack_credential();

        $payment_data=$paystack->ipn_response();
        $transaction_id=$payment_data['order_id'] ?? null;
        if (isset($payment_data['status']) && $payment_data['status'] === 'complete') {
            if ($payment_data['type'] === 'wallet_deposit') {

                $transaction = Transaction::find($transaction_id);
                if ($transaction) {
                    $transaction->payment_gateway = 'paystack';
                    $transaction->status = 'completed';
                    $transaction->save();

                    $wallet = Wallet::where('user_id', $transaction->user_id)->first();
                    if ($wallet) {
                        $wallet->available_balance += $transaction->amount;
                        $wallet->save();
                    } else {
                        $wallet = new Wallet();
                        $wallet->user_id = $transaction->user_id;
                        $wallet->available_balance = $transaction->amount;
                        $wallet->save();
                    }

                    toastr_success('Deposit successfully completed');
                    return redirect()->route('client.wallet.deposit.payment.process.success',$payment_data['order_id'])->with(FlashMsg::item_update(__('Deposit successful')));

                }


            }
        }


        return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Deposit failed')));
    }
}
