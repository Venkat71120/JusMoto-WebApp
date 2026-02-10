<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TrafficChallanService
{
    protected $apiUrl;
    protected $apiKey;
    protected $apiSecret;
    protected $useMockData;

    public function __construct()
    {
        // You can configure these in your .env file
        $this->apiUrl = env('TRAFFIC_CHALLAN_API_URL', 'https://api.instantpay.in');
        $this->apiKey = env('TRAFFIC_CHALLAN_API_KEY', '');
        $this->apiSecret = env('TRAFFIC_CHALLAN_API_SECRET', '');
        $this->useMockData = env('TRAFFIC_CHALLAN_USE_MOCK', true);
    }

    /**
     * Fetch challan details by vehicle number
     *
     * @param string $vehicleNumber
     * @return array
     */
    public function fetchChallanByVehicle($vehicleNumber)
    {
        try {
            if ($this->useMockData) {
                return $this->getMockChallanData($vehicleNumber);
            }

            // Real API implementation
            $response = Http::withHeaders([
                'X-Api-Key' => $this->apiKey,
                'X-Api-Secret' => $this->apiSecret,
                'Content-Type' => 'application/json',
            ])->post($this->apiUrl . '/identity/v2/vehicle/challan', [
                'vehicle_number' => $vehicleNumber,
            ]);

            if ($response->successful()) {
                return [
                    'success' => true,
                    'data' => $response->json(),
                ];
            }

            return [
                'success' => false,
                'message' => 'Failed to fetch challan details',
                'error' => $response->body(),
            ];
        } catch (\Exception $e) {
            Log::error('Traffic Challan API Error: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'An error occurred while fetching challan details',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Pay challan through API
     *
     * @param string $challanNumber
     * @param float $amount
     * @param array $paymentDetails
     * @return array
     */
    public function payChallan($challanNumber, $amount, $paymentDetails = [])
    {
        try {
            if ($this->useMockData) {
                return $this->getMockPaymentResponse($challanNumber, $amount);
            }

            // Real API implementation for payment
            $response = Http::withHeaders([
                'X-Api-Key' => $this->apiKey,
                'X-Api-Secret' => $this->apiSecret,
                'Content-Type' => 'application/json',
            ])->post($this->apiUrl . '/payment/v1/challan/pay', [
                'challan_number' => $challanNumber,
                'amount' => $amount,
                'payment_details' => $paymentDetails,
            ]);

            if ($response->successful()) {
                return [
                    'success' => true,
                    'data' => $response->json(),
                ];
            }

            return [
                'success' => false,
                'message' => 'Payment failed',
                'error' => $response->body(),
            ];
        } catch (\Exception $e) {
            Log::error('Traffic Challan Payment Error: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'An error occurred while processing payment',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Get mock challan data for testing
     *
     * @param string $vehicleNumber
     * @return array
     */
    protected function getMockChallanData($vehicleNumber)
    {
        // Simulate API response with mock data
        $mockChallans = [
            [
                'challan_number' => 'CH' . strtoupper(substr(md5($vehicleNumber . '1'), 0, 10)),
                'vehicle_number' => $vehicleNumber,
                'offence_type' => 'Over Speeding',
                'offence_description' => 'Driving at 80 km/h in 60 km/h zone',
                'fine_amount' => 1000.00,
                'offence_location' => 'MG Road, Bangalore',
                'offence_date' => now()->subDays(5)->format('Y-m-d H:i:s'),
                'due_date' => now()->addDays(25)->format('Y-m-d H:i:s'),
                'issuing_authority' => 'Bangalore Traffic Police',
                'status' => 'pending',
            ],
            [
                'challan_number' => 'CH' . strtoupper(substr(md5($vehicleNumber . '2'), 0, 10)),
                'vehicle_number' => $vehicleNumber,
                'offence_type' => 'Red Light Violation',
                'offence_description' => 'Jumped red light at traffic signal',
                'fine_amount' => 1500.00,
                'offence_location' => 'Koramangala Signal, Bangalore',
                'offence_date' => now()->subDays(10)->format('Y-m-d H:i:s'),
                'due_date' => now()->addDays(20)->format('Y-m-d H:i:s'),
                'issuing_authority' => 'Bangalore Traffic Police',
                'status' => 'pending',
            ],
            [
                'challan_number' => 'CH' . strtoupper(substr(md5($vehicleNumber . '3'), 0, 10)),
                'vehicle_number' => $vehicleNumber,
                'offence_type' => 'No Helmet',
                'offence_description' => 'Riding without helmet',
                'fine_amount' => 500.00,
                'offence_location' => 'Whitefield, Bangalore',
                'offence_date' => now()->subDays(15)->format('Y-m-d H:i:s'),
                'due_date' => now()->addDays(15)->format('Y-m-d H:i:s'),
                'issuing_authority' => 'Bangalore Traffic Police',
                'status' => 'pending',
            ],
        ];

        return [
            'success' => true,
            'data' => [
                'vehicle_number' => $vehicleNumber,
                'total_challans' => count($mockChallans),
                'total_fine_amount' => array_sum(array_column($mockChallans, 'fine_amount')),
                'challans' => $mockChallans,
            ],
        ];
    }

    /**
     * Get mock payment response for testing
     *
     * @param string $challanNumber
     * @param float $amount
     * @return array
     */
    protected function getMockPaymentResponse($challanNumber, $amount)
    {
        return [
            'success' => true,
            'data' => [
                'challan_number' => $challanNumber,
                'amount_paid' => $amount,
                'payment_reference' => 'PAY' . strtoupper(substr(md5($challanNumber . time()), 0, 12)),
                'payment_status' => 'success',
                'payment_date' => now()->format('Y-m-d H:i:s'),
                'message' => 'Challan paid successfully',
            ],
        ];
    }
}
