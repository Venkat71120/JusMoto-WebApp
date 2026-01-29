<?php

namespace Modules\Wallet\app\Http\Controllers\Frontend;

use App\Helpers\FlashMsg;
use App\Helpers\PaymentGatewayCredential;
use App\Http\Controllers\Controller;
use App\Http\Services\OrderService;
use App\Models\Order;
use App\Models\SubOrder;
use App\Models\User;
use App\Models\UserNotification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Modules\Wallet\app\Http\Resources\WalletDepositDetailsResource;
use Modules\Wallet\app\Http\Services\WalletDepositNotification;
use Modules\Wallet\app\Http\Services\WalletDepositService;
use Modules\Wallet\app\Models\Transaction;
use Modules\Wallet\app\Models\Wallet;

class ClientWalletController extends Controller
{
    protected $walletDepositNotification;


    public function __construct(WalletDepositNotification $walletDepositNotification)
    {
        $this->walletDepositNotification = $walletDepositNotification;
    }

    public function allTransactions(Request $request)
    {
        $client=auth()->user();
        $query = Transaction::with(['user', 'wallet'])->where('user_id', $client->id)->orderBy('created_at', 'desc');

        // Apply filters

        if ($request->filled('transaction_type')) {
            $query->where('transaction_type', $request->transaction_type);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('date')) {
            $query->whereDate('created_at', '=', $request->date);
        }


        $transactions = $query->paginate(10);
        // Get filter options
        $transactionTypes = ['deposit', 'payment','refund', 'fee'];
        $statuses = ['pending', 'completed', 'failed'];

        // Calculate totals for current filter
        $totals = [
            'wallet_balance'   => $client->wallet?->available_balance ?? 0,
            'total_amount'     => (clone $query)->sum('amount'),
            'pending_amount'   => (clone $query)->where('status', 'pending')->sum('amount'),
            'completed_amount' => (clone $query)->where('status', 'completed')->sum('amount'),
            'failed_amount'    => (clone $query)->where('status', 'failed')->sum('amount'),
        ];
        return view('wallet::frontend.transactions.index', compact(
            'transactions',
            'transactionTypes',
            'statuses',
            'totals'
        ));
    }

    public function show($id,$notificationId = null)
    {
        $transaction = Transaction::with(['user', 'wallet'])->findOrFail($id);
        UserNotification::where('id', $notificationId)->update(['is_read' => 'read']);

        return view('wallet::frontend.transactions.show', compact('transaction'));
    }

    public function deposit(Request $request)
    {

        $validator=Validator::make($request->all(),[
            'amount' => 'required|numeric|gt:0',
            'selected_payment_gateway' => 'required|string',
            'manual_payment_image' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);
        if ($validator->fails()) {
            toastr_error( $validator->errors()->first());
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $payment_gateway_name = $request->selected_payment_gateway;
        $user=auth()->user();
        $wallet=Wallet::where('user_id',$user->id)->first();
        if(!$wallet)
        {
            $wallet=Wallet::create([
                'user_id' => $user->id,
                'available_balance' => 0
            ]);
        }

        $imageName = null;

        // Generate a new invoice number
        $invoiceNumber = generateTransactionInvoiceNumber();

        // Create deposit transactionN
        $transaction = Transaction::create([
            'user_id' => $user->id,
            'wallet_id' => $wallet->id,
            'transaction_type' => 'deposit',
            'amount' => $request->amount,
            'description' => 'Wallet deposit via ' . ucfirst($request->selected_payment_gateway),
            'payment_gateway' => $request->selected_payment_gateway,
            'payment_attachment' => $imageName,
            'status' => 'pending',
            'reference_type' => 'wallet_deposit',
            'invoice_number' => $invoiceNumber
        ]);

        try {
            // Deposit notifications
            $this->walletDepositNotification->depositNotification($transaction);
        }catch(\Exception $e)
        {

        }

    if($request->selected_payment_gateway === 'manual_payment')
    {
        $allowedSize = get_static_option('max_upload_size') ?? '5120';
        $allowedExtensions = json_decode(get_static_option('file_extensions'), true);
        $client_id = Auth::user()->id;

        $rules = [
            'manual_payment_image' => 'required|file|max:' . $allowedSize,
        ];

        if($allowedExtensions){
            $rules['manual_payment_image'] .= '|mimes:' . implode(',', $allowedExtensions);
        } else {
            $rules['manual_payment_image'] .= '|mimes:jpg,jpeg,png,pdf';
        }

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            toastr_error($validator->errors()->first());
            return redirect()->back()->withErrors($validator)->withInput();
        }
        return (new WalletDepositService())->manual_order(request(), $client_id, $transaction->id);
    }

        return $this->payment_process($payment_gateway_name,$transaction->id);
    }

    public function payment_process($payment_gateway, $transaction_id){

        if($payment_gateway === 'stripe'){
            $stripe = PaymentGatewayCredential::get_stripe_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'stripe';
            $transaction->save();

            $response =  $stripe->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.stripe.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);


            return $response;
        }
        else if($payment_gateway === 'paytm')
        {
            $paytm = PaymentGatewayCredential::get_paytm_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'paytm';
            $transaction->save();

            $response =  $paytm->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.paytm.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'paypal')
        {
            $paypal = PaymentGatewayCredential::get_paypal_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'paypal';
            $transaction->save();
            $response =  $paypal->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.paypal.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'midtrans')
        {
            $midtrans = PaymentGatewayCredential::get_midtrans_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'midtrans';
            $transaction->save();
            $response =  $midtrans->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.midtrans.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);


            return $response;
        }
        else if($payment_gateway === 'razorpay')
        {
            $razorpay = PaymentGatewayCredential::get_razorpay_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'razorpay';
            $transaction->save();

            $response =  $razorpay->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.razorpay.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'mollie')
        {
            $mollie = PaymentGatewayCredential::get_mollie_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'mollie';
            $transaction->save();

            $response =  $mollie->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.mollie.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'payfast')
        {
            $payfast = PaymentGatewayCredential::get_payfast_credential();

            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'payfast';
            $transaction->save();

            $response =  $payfast->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.payfast.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
//                'success_url' =>route('client.order.payment.process.payfast.ipn'),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);
            return $response;
        }

        else if($payment_gateway === 'cashfree')
        {
            $cashfree = PaymentGatewayCredential::get_cashfree_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'cashfree';
            $transaction->save();
            $response =  $cashfree->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.cashfree.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'instamojo')
        {
            $instamojo = PaymentGatewayCredential::get_instamojo_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'instamojo';
            $transaction->save();

            $response =  $instamojo->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.instamojo.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'marcadopago')
        {
            $marcadopago = PaymentGatewayCredential::get_marcadopago_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'marcadopago';
            $transaction->save();
            $response =  $marcadopago->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.marcadopago.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'zitopay')
        {
            $zitopay = PaymentGatewayCredential::get_zitopay_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'zitopay';
            $transaction->save();
            $response =  $zitopay->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.zitopay.ipn'), //post route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }

        else if ($payment_gateway === 'squareup')
        {
            $squareup = PaymentGatewayCredential::get_squareup_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'squareup';
            $transaction->save();

            $response =  $squareup->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.squareup.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'cinetpay')
        {
            $cinetpay = PaymentGatewayCredential::get_cinetpay_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'cinetpay';
            $transaction->save();

            $response =  $cinetpay->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.cinetpay.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'paytabs')
        {
            $paytabs = PaymentGatewayCredential::get_paytabs_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'paytabs';
            $transaction->save();

            $response =  $paytabs->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.paytabs.ipn'), //post route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'billplz')
        {
            $billplz = PaymentGatewayCredential::get_billplz_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'billplz';
            $transaction->save();
            $response =  $billplz->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.billplz.ipn'), //post route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'toyyibpay')
        {
            $toyyibpay = PaymentGatewayCredential::get_toyyibpay_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'toyyibpay';
            $transaction->save();

            $response =  $toyyibpay->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.toyyibpay.ipn'), //post route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }
        else if($payment_gateway === 'flutterwave')
        {
            $flutterwave = PaymentGatewayCredential::get_flutterwave_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'flutterwave';
            $transaction->save();
            $response =  $flutterwave->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.flutterwave.ipn'), //post route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }

        else if($payment_gateway === 'paystack')
        {
            $paystack = PaymentGatewayCredential::get_paystack_credential();
            $transaction=Transaction::where('id', $transaction_id)->first();
            $transaction->payment_gateway = 'paystack';
            $transaction->save();
            $response =  $paystack->charge_customer([
                'amount' => $transaction->amount,
                'title' => 'Wallet Deposit',
                'description' => 'Transaction #'. $transaction_id.' Email: '.$transaction->user?->email.' Name: '.$transaction->user?->fullName,
                'ipn_url' => route('client.wallet.deposit.payment.process.paystack.ipn'), //get route
                'order_id' => $transaction_id,
                'track' => \Str::random(36),
                'cancel_url' => route('client.wallet.deposit.payment.process.failed'),
                'success_url' => route('client.wallet.deposit.payment.process.success',$transaction_id),
                'email' => Auth::user()->email,
                'name' => Auth::user()->fullName,
                'payment_type' => 'wallet-deposit',
            ]);

            return $response;
        }


       else{
            return redirect()->route('client.wallet.deposit.payment.process.failed')->with(FlashMsg::item_update(__('Payment gateway not found')));
        }



    }

    public function payment_process_success($transaction_id)
    {
       toastr_success(__('Deposit completed successfully'));
       return redirect()->route('client.wallet.transactions');
    }
    public function payment_process_failed()
    {
        toastr_success(__('Your deposit attempt was unsuccessful. Please try again later.'));
        return redirect()->route('client.wallet.transactions');

    }

}
