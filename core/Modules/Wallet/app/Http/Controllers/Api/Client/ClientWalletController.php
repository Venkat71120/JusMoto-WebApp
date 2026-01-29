<?php

namespace Modules\Wallet\app\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use Modules\Wallet\app\Http\Resources\WalletDepositDetailsResource;
use Modules\Wallet\app\Http\Resources\WalletTransactionResource;
use Modules\Wallet\app\Http\Services\WalletDepositNotification;
use Modules\Wallet\app\Jobs\SendWalletDepositEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Modules\Wallet\app\Models\Transaction;
use Modules\Wallet\app\Models\Wallet;

class ClientWalletController extends Controller
{
    protected $walletDepositNotification;


    public function __construct(WalletDepositNotification $walletDepositNotification)
    {
        $this->walletDepositNotification = $walletDepositNotification;
    }
    public function deposit(Request $request)
    {

        if (!Auth::guard('sanctum')->check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $request->validate([
            'amount' => 'required|numeric|gt:0',
            'selected_payment_gateway' => 'required|string',
            'manual_payment_image' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

//        $client_min_deposit = StaticOption::where('option_name', 'wallet_client_min_deposit')->value('option_value');
//        if ($request->amount < $client_min_deposit) {
//            return response()->json([
//                'error' => true,
//                'message' => __('The deposit amount must be at least :amount.', ['amount' => float_amount_with_currency_symbol($client_min_deposit)]),
//            ], 422);
//        }

        $user=auth('sanctum')->user();
        $wallet=Wallet::where('user_id',$user->id)->first();
        if(!$wallet)
        {
            $wallet=Wallet::create([
                'user_id' => $user->id,
                'available_balance' => 0
            ]);
        }

        $imageName = null;

        // if manual payment
        if ($request->selected_payment_gateway === 'manual_payment') {
            if ($image = $request->file('manual_payment_image')) {
                // Define upload path
                $uploadPath = 'assets/uploads/manual-payment/deposit/';
                // Create directory if it doesn't exist
                if (!file_exists($uploadPath)) {
                    mkdir($uploadPath, 0755, true);
                }
                $imageName = 'manual_attachment_' . time() . '-' . uniqid() . '.' . $image->getClientOriginalExtension();

                $image->move($uploadPath, $imageName);
            }
        }

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
            // Deposite notifications
            $this->walletDepositNotification->depositNotification($transaction);
        }catch(\Exception $e)
        {

        }

        return response()->json([
            'deposit_details' => new WalletDepositDetailsResource( $transaction),
        ]);


    }

    public function paymentStatusUpdate(Request $request)
    {
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
        $secretKey = config('app.hmac_secret');
        // Generate the HMAC on the server side using the client's email
        $calculatedHmac = hash_hmac('sha256', $clientEmail, $secretKey);

        // Verify if the HMAC matches
        if ($receivedHmac !== $calculatedHmac) {
            return response()->json([
                'message' => __('Unauthorized access')
            ], 403); // Forbidden
        }

        $request->validate([
            'transaction_id' => 'required|integer'
        ]);

        $transaction=Transaction::where('id',$request->transaction_id)->first();
        if (empty($transaction)) {
            return response()->json([
                'message' => __('Transaction not found')
            ], 404);
        }
        $user=auth('sanctum')->user();
        $wallet=Wallet::where('user_id',$user->id)->first();

        $transaction->status='completed';
        $transaction->save();

        $wallet->available_balance = $wallet->available_balance + $transaction->amount;
        $wallet->save();

        try {
            // Deposite notifications
            $this->walletDepositNotification->completeDepositNotification($transaction);
            // Dispatch job to send email in the background
            dispatch(new SendWalletDepositEmail($transaction));
        }catch(\Exception $e)
        {

        }

        return response()->json([
            'success' => true,
            'message' => __('payment status update success')
        ]);

    }

    public function current_balance_info()
    {

        $userId = auth('sanctum')->user()->id;
        $wallet = Wallet::where('user_id', $userId)->first();

        if(!$wallet)
        {
            $wallet=Wallet::create([
                'user_id' => $userId,
                'available_balance' => 0
            ]);
        }

        if($wallet){
            return response()->json([
                'available_balance' => $wallet ? $wallet->available_balance : 0
            ]);
        }

        return response()->json([
            'msg' => __('balance not found.')
        ], 404);
    }

    public function transactionList(Request $request)
    {
        $user_id=Auth::guard('sanctum')->user()->id;
        $query = Transaction::with(['user', 'wallet'])
            ->where('user_id', $user_id)
            ->orderBy('created_at', 'desc');


        if ($request->filled('transaction_type')) {
            $query->where('transaction_type', $request->transaction_type);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $transactions = $query->paginate(10);

        if ($transactions->isNotEmpty()) {
            return response()->json([
                'all_transactions' => WalletTransactionResource::collection($transactions->items()),
                'pagination' => [
                    'total' => $transactions->total(),
                    'count' => $transactions->count(),
                    'per_page' => $transactions->perPage(),
                    'current_page' => $transactions->currentPage(),
                    'last_page' => $transactions->lastPage(),
                    'next_page_url' => $transactions->nextPageUrl(),
                    'prev_page_url' => $transactions->previousPageUrl(),
                ]
            ]);
        }

        return response()->json([
            'message' => __('Transaction not yet'),
        ],404);


    }
}
