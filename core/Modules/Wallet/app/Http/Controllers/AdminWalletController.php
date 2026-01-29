<?php

namespace Modules\Wallet\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Wallet\app\Models\Wallet;
use Modules\Wallet\app\Models\Transaction;
use Illuminate\Http\Request;

class AdminWalletController extends Controller
{
    public function index(Request $request)
    {
        $query = Wallet::with(['user', 'transactions']);

        // Apply filters

        if ($request->filled('min_balance')) {
            $query->where('available_balance', '>=', $request->min_balance);
        }

        if ($request->filled('max_balance')) {
            $query->where('available_balance', '<=', $request->max_balance);
        }

        $wallets = $query->orderBy('available_balance', 'desc')->paginate(10);

        // Calculate totals
        $totals = [
            'total_wallets' => Wallet::count(),
            'total_balance' => Wallet::sum('available_balance')
        ];

        // Get recent transactions summary
        $recentTransactions = Transaction::with(['user', 'wallet'])
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        // Transaction statistics
        $transactionStats = [
            'total_transactions' => Transaction::count(),
            'pending_transactions' => Transaction::where('status', 'pending')->count(),
            'completed_transactions' => Transaction::where('status', 'completed')->count(),
            'failed_transactions' => Transaction::where('status', 'failed')->count(),
            'total_transaction_amount' => Transaction::where('status', 'completed')->sum('amount'),
        ];


        return view('wallet::admin.wallets.index', compact(
            'wallets',
            'totals',
            'recentTransactions',
            'transactionStats'
        ));
    }

    public function show($id)
    {
        $wallet = Wallet::with(['user', 'transactions' => function($query) {
            $query->orderBy('created_at', 'desc');
        }])->findOrFail($id);

        $transactionStats = [
            'total_transactions' => $wallet->transactions->count(),
            'pending_transactions' => $wallet->transactions->where('status', 'pending')->count(),
            'completed_transactions' => $wallet->transactions->where('status', 'completed')->count(),
            'failed_transactions' => $wallet->transactions->where('status', 'failed')->count(),
            'total_deposits' => $wallet->transactions->where('transaction_type', 'deposit')->where('status', 'completed')->sum('amount'),
            'total_payments' => $wallet->transactions->where('transaction_type', 'payment')->where('status', 'completed')->sum('amount'),
        ];

        return view('wallet::admin.wallets.show', compact('wallet', 'transactionStats'));
    }

    public function adjustBalance(Request $request, $id)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'description' => 'required|string|max:255',
            'adjustment_type' => 'required|in:add,subtract'
        ]);

        $wallet = Wallet::findOrFail($id);
        $amount = abs($request->amount);

        if ($request->adjustment_type === 'add') {
            $wallet->addBalance($amount);
            $transactionType = 'deposit';
            $description = 'Admin Balance Adjustment (Added): ' . $request->description;
        } else {
            if ($wallet->balance < $amount) {
                return redirect()->back()->with('error', 'Insufficient balance for this adjustment.');
            }
            $wallet->deductBalance($amount);
            $transactionType = 'withdrawal';
            $description = 'Admin Balance Adjustment (Deducted): ' . $request->description;
        }

        // Create transaction record
        Transaction::create([
            'user_id' => $wallet->user_id,
            'wallet_id' => $wallet->id,
            'transaction_type' => $transactionType,
            'amount' => $amount,
            'description' => $description,
            'status' => 'completed',
            'reference_id' => 'ADJ-' . time() . '-' . $wallet->id
        ]);

        return redirect()->route('admin.wallet.wallets.show', $id)
                        ->with('success', 'Wallet balance adjusted successfully.');
    }
}
