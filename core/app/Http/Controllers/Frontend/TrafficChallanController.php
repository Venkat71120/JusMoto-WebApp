<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\TrafficChallan;
use App\Services\TrafficChallanService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TrafficChallanController extends Controller
{
    protected $challanService;

    public function __construct(TrafficChallanService $challanService)
    {
        $this->challanService = $challanService;
    }

    /**
     * Display challan search page
     */
    public function index()
    {
        $user = Auth::user();

        // Get statistics
        $stats = [
            'total_challans' => TrafficChallan::where('user_id', $user->id)->count(),
            'pending_challans' => TrafficChallan::where('user_id', $user->id)->where('status', 'pending')->count(),
            'paid_challans' => TrafficChallan::where('user_id', $user->id)->where('status', 'paid')->count(),
            'total_pending_amount' => TrafficChallan::where('user_id', $user->id)->where('status', 'pending')->sum('fine_amount'),
        ];

        return view('frontend.user.client.traffic-challan.index', compact('stats'));
    }

    /**
     * Search/Fetch challans by vehicle number
     */
    public function fetchChallans(Request $request)
    {
        $request->validate([
            'vehicle_number' => 'required|string|max:20',
        ]);

        try {
            $vehicleNumber = strtoupper(str_replace(' ', '', $request->vehicle_number));
            $user = Auth::user();

            // Fetch challans from API
            $apiResponse = $this->challanService->fetchChallanByVehicle($vehicleNumber);

            if (!$apiResponse['success']) {
                return back()->with('error', $apiResponse['message'] ?? 'Failed to fetch challans');
            }

            $challans = $apiResponse['data']['challans'] ?? [];

            // Save/Update challans in database
            foreach ($challans as $challanData) {
                TrafficChallan::updateOrCreate(
                    ['challan_number' => $challanData['challan_number']],
                    [
                        'user_id' => $user->id,
                        'vehicle_number' => $vehicleNumber,
                        'offence_type' => $challanData['offence_type'],
                        'offence_description' => $challanData['offence_description'] ?? null,
                        'fine_amount' => $challanData['fine_amount'],
                        'offence_location' => $challanData['offence_location'] ?? null,
                        'offence_date' => $challanData['offence_date'] ?? null,
                        'due_date' => $challanData['due_date'] ?? null,
                        'issuing_authority' => $challanData['issuing_authority'] ?? null,
                        'status' => $challanData['status'] ?? 'pending',
                    ]
                );
            }

            return redirect()->route('traffic-challan.history')
                ->with('success', count($challans) . ' challan(s) found for vehicle ' . $vehicleNumber);
        } catch (\Exception $e) {
            return back()->with('error', 'An error occurred while fetching challans: ' . $e->getMessage());
        }
    }

    /**
     * Display user's challan history
     */
    public function history(Request $request)
    {
        $user = Auth::user();
        $status = $request->input('status'); // pending, paid, cancelled

        $query = TrafficChallan::where('user_id', $user->id);

        if ($status) {
            $query->where('status', $status);
        }

        $challans = $query->orderBy('created_at', 'desc')->paginate(10);

        // Statistics
        $stats = [
            'total_challans' => TrafficChallan::where('user_id', $user->id)->count(),
            'pending_challans' => TrafficChallan::where('user_id', $user->id)->where('status', 'pending')->count(),
            'paid_challans' => TrafficChallan::where('user_id', $user->id)->where('status', 'paid')->count(),
            'total_pending_amount' => TrafficChallan::where('user_id', $user->id)->where('status', 'pending')->sum('fine_amount'),
        ];

        return view('frontend.user.client.traffic-challan.history', compact('challans', 'stats', 'status'));
    }

    /**
     * Display challan details
     */
    public function details($id)
    {
        $user = Auth::user();
        $challan = TrafficChallan::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        return view('frontend.user.client.traffic-challan.details', compact('challan'));
    }

    /**
     * Display payment page
     */
    public function paymentPage($id)
    {
        $user = Auth::user();
        $challan = TrafficChallan::where('id', $id)
            ->where('user_id', $user->id)
            ->where('status', 'pending')
            ->firstOrFail();

        return view('frontend.user.client.traffic-challan.payment', compact('challan'));
    }

    /**
     * Process challan payment
     */
    public function processPayment(Request $request, $id)
    {
        $request->validate([
            'payment_method' => 'required|string|in:cash,card,wallet,upi,netbanking',
        ]);

        DB::beginTransaction();
        try {
            $user = Auth::user();
            $challan = TrafficChallan::where('id', $id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->firstOrFail();

            // Process payment through API
            $paymentResponse = $this->challanService->payChallan(
                $challan->challan_number,
                $challan->fine_amount,
                ['payment_method' => $request->payment_method, 'user_id' => $user->id]
            );

            if (!$paymentResponse['success']) {
                DB::rollBack();
                return back()->with('error', $paymentResponse['message'] ?? 'Payment failed');
            }

            // Update challan status
            $challan->markAsPaid(
                $request->payment_method,
                $paymentResponse['data']['payment_reference'] ?? null,
                $challan->fine_amount
            );

            DB::commit();

            return redirect()->route('traffic-challan.details', $challan->id)
                ->with('success', 'Challan paid successfully! Payment Reference: ' . $challan->payment_reference);
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'An error occurred while processing payment: ' . $e->getMessage());
        }
    }
}
