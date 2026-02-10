<?php

namespace App\Http\Controllers\Api\TrafficChallan;

use App\Models\TrafficChallan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\TrafficChallanService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TrafficChallanController extends Controller
{
    protected $challanService;

    public function __construct(TrafficChallanService $challanService)
    {
        $this->challanService = $challanService;
    }

    /**
     * Fetch traffic challans by vehicle number
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchChallans(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'vehicle_number' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $vehicleNumber = strtoupper(str_replace(' ', '', $request->vehicle_number));
            $user = Auth::guard('sanctum')->user();

            // Fetch challans from API
            $apiResponse = $this->challanService->fetchChallanByVehicle($vehicleNumber);

            if (!$apiResponse['success']) {
                return response()->json([
                    'success' => false,
                    'message' => $apiResponse['message'] ?? 'Failed to fetch challans',
                ], 400);
            }

            $challans = $apiResponse['data']['challans'] ?? [];

            // Save/Update challans in database
            $savedChallans = [];
            foreach ($challans as $challanData) {
                $challan = TrafficChallan::updateOrCreate(
                    [
                        'challan_number' => $challanData['challan_number'],
                    ],
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
                $savedChallans[] = $challan;
            }

            return response()->json([
                'success' => true,
                'message' => 'Challans fetched successfully',
                'data' => [
                    'vehicle_number' => $vehicleNumber,
                    'total_challans' => count($savedChallans),
                    'total_fine_amount' => array_sum(array_column($savedChallans->toArray(), 'fine_amount')),
                    'challans' => $savedChallans,
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while fetching challans',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get user's challan history
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userChallans(Request $request)
    {
        try {
            $user = Auth::guard('sanctum')->user();
            $status = $request->input('status'); // pending, paid, cancelled

            $query = TrafficChallan::where('user_id', $user->id);

            if ($status) {
                $query->where('status', $status);
            }

            $challans = $query->orderBy('created_at', 'desc')->paginate(10);

            return response()->json([
                'success' => true,
                'message' => 'Challans retrieved successfully',
                'data' => $challans,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while retrieving challans',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get challan details by ID
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function challanDetails($id)
    {
        try {
            $user = Auth::guard('sanctum')->user();
            $challan = TrafficChallan::where('id', $id)
                ->where('user_id', $user->id)
                ->first();

            if (!$challan) {
                return response()->json([
                    'success' => false,
                    'message' => 'Challan not found',
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Challan details retrieved successfully',
                'data' => $challan,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while retrieving challan details',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Pay traffic challan
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function payChallan(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'challan_id' => 'required|exists:traffic_challans,id',
            'payment_method' => 'required|string|in:cash,card,wallet,upi,netbanking',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $user = Auth::guard('sanctum')->user();
            $challan = TrafficChallan::where('id', $request->challan_id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->first();

            if (!$challan) {
                return response()->json([
                    'success' => false,
                    'message' => 'Challan not found or already paid',
                ], 404);
            }

            // Process payment through API
            $paymentResponse = $this->challanService->payChallan(
                $challan->challan_number,
                $challan->fine_amount,
                [
                    'payment_method' => $request->payment_method,
                    'user_id' => $user->id,
                ]
            );

            if (!$paymentResponse['success']) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => $paymentResponse['message'] ?? 'Payment failed',
                ], 400);
            }

            // Update challan status
            $challan->markAsPaid(
                $request->payment_method,
                $paymentResponse['data']['payment_reference'] ?? null,
                $challan->fine_amount
            );

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Challan paid successfully',
                'data' => [
                    'challan' => $challan->fresh(),
                    'payment_details' => $paymentResponse['data'],
                ],
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing payment',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get challan statistics for user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function challanStats()
    {
        try {
            $user = Auth::guard('sanctum')->user();

            $stats = [
                'total_challans' => TrafficChallan::where('user_id', $user->id)->count(),
                'pending_challans' => TrafficChallan::where('user_id', $user->id)->where('status', 'pending')->count(),
                'paid_challans' => TrafficChallan::where('user_id', $user->id)->where('status', 'paid')->count(),
                'total_pending_amount' => TrafficChallan::where('user_id', $user->id)->where('status', 'pending')->sum('fine_amount'),
                'total_paid_amount' => TrafficChallan::where('user_id', $user->id)->where('status', 'paid')->sum('paid_amount'),
            ];

            return response()->json([
                'success' => true,
                'message' => 'Statistics retrieved successfully',
                'data' => $stats,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while retrieving statistics',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
