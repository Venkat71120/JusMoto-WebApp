<?php

namespace Modules\Wallet\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Wallet\app\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class AdminTransactionController extends Controller
{
    public function index(Request $request)
    {
        $query = Transaction::with(['user', 'wallet'])
                    ->orderBy('created_at', 'desc');

        // Apply filters
        if ($request->filled('user_id')) {
            $query->where('user_id', $request->user_id);
        }

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

        $transactions = $query->paginate(20);

        // Get filter options
        $users = User::select('id', 'first_name','last_name', 'email')->orderByDesc('id')->get();
        $transactionTypes = ['deposit', 'payment', 'earning', 'withdrawal', 'refund', 'fee'];
        $statuses = ['pending', 'completed', 'failed'];

        // Calculate totals for current filter
        $totals = [
            'total_amount' => $query->sum('amount'),
            'pending_amount' => $query->where('status', 'pending')->sum('amount'),
            'completed_amount' => $query->where('status', 'completed')->sum('amount'),
            'failed_amount' => $query->where('status', 'failed')->sum('amount'),
        ];

        return view('wallet::admin.transactions.index', compact(
            'transactions',
            'users',
            'transactionTypes',
            'statuses',
            'totals'
        ));
    }

    public function show($id)
    {
        $transaction = Transaction::with(['user', 'wallet'])->findOrFail($id);

        return view('wallet::admin.transactions.show', compact('transaction'));
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,completed,failed'
        ]);

        $transaction = Transaction::findOrFail($id);
        $oldStatus = $transaction->status;

        $transaction->update(['status' => $request->status]);

        // Handle wallet balance updates based on status change
        if ($oldStatus !== $request->status) {
            $this->handleBalanceUpdate($transaction, $oldStatus, $request->status);
        }

        return redirect()->route('admin.wallet.transactions.show', $id)
                        ->with('success', 'Transaction status updated successfully.');
    }

    private function handleBalanceUpdate($transaction, $oldStatus, $newStatus)
    {
        $wallet = $transaction->wallet;

        // If transaction was completed and now being changed to failed/pending
        if ($oldStatus === 'completed' && in_array($newStatus, ['failed', 'pending'])) {
            if ($transaction->transaction_type === 'deposit') {
                $wallet->available_balance = $wallet->available_balance - $transaction->amount;
                $wallet->save();
            }
        }

        // If transaction is being completed from failed/pending
        if (in_array($oldStatus, ['failed', 'pending']) && $newStatus === 'completed') {
            if ($transaction->transaction_type === 'deposit') {
                $wallet->available_balance = $wallet->available_balance + $transaction->amount;
                $wallet->save();
            }
        }
    }
}
