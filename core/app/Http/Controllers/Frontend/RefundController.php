<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\RefundedOrder;
use Modules\PaymentGateways\app\Models\PaymentGateway;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RefundController extends Controller
{
    public function index()
    {
        $refunds = RefundedOrder::with(['user', 'order', 'gateway'])
            ->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->latest()
            ->paginate(10)
            ->through(function ($refund) {
                $refund->status_label = $this->getStatusLabel($refund->status);
                $refund->status_class = $this->getStatusClass($refund->status);
                return $refund;
            });

        return view('frontend.user.client.refunds', compact('refunds'));
    }

    public function show($id)
    {
        $refund = RefundedOrder::with(['order', 'gateway'])
            ->where('user_id', Auth::id())
            ->where('id', $id)
            ->firstOrFail();

        // Parse gateway_fields if it's a JSON string
        if (is_string($refund->gateway_fields)) {
            try {
                $refund->gateway_fields = json_decode($refund->gateway_fields, true);
            } catch (\Exception $e) {
                $refund->gateway_fields = [];
            }
        }

        // Add status label and class
        $refund->status_label = $this->getStatusLabel($refund->status);
        $refund->status_class = $this->getStatusClass($refund->status);
        $refund->gateway_name = $refund->gateway ? $refund->gateway->name : 'N/A';

        // Get all active payment gateways for the update form
        $gateways = PaymentGateway::where('status', 1)->get(['id', 'name']);

        return view('frontend.user.client.refund-details', compact('refund', 'gateways'));
    }

    public function updatePaymentInfo(Request $request, $id)
    {
        $request->validate([
            'gateway_id' => 'required|exists:payment_gateways,id',
            'gateway_fields' => 'required|array',
        ]);

        $refund = RefundedOrder::where('user_id', Auth::id())
            ->where('id', $id)
            ->firstOrFail();

        $refund->update([
            'gateway_id' => $request->gateway_id,
            'gateway_fields' => json_encode($request->gateway_fields),
        ]);

        return redirect()->back()->with('success', 'Payment information updated successfully');
    }

    private function getStatusLabel($status)
    {
        switch ($status) {
            case 0:
                return 'Pending';
            case 1:
                return 'Complete';
            case 2:
                return 'Cancel';
            default:
                return 'Unknown';
        }
    }

    private function getStatusClass($status)
    {
        switch ($status) {
            case 0:
                return 'pending';
            case 1:
                return 'complete';
            case 2:
                return 'cancel';
            default:
                return 'unknown';
        }
    }
}
