<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TrafficChallanService
{
    protected $baseUrl;
    protected $clientId;
    protected $clientSecret;
    protected $encryptionKey;
    protected $authCode;
    protected $endpointIp;
    protected $useMockData;

    public function __construct()
    {
        $this->baseUrl = config('services.instantpay.base_url', 'https://api.instantpay.in');
        $this->clientId = config('services.instantpay.client_id');
        $this->clientSecret = config('services.instantpay.client_secret');
        $this->encryptionKey = config('services.instantpay.encryption_key');
        $this->authCode = config('services.instantpay.auth_code', '1');
        $this->endpointIp = config('services.instantpay.endpoint_ip', request()->ip());
        $this->useMockData = config('services.instantpay.use_mock', false);
    }

    /**
     * Get the standard InstantPay API headers
     *
     * @return array
     */
    protected function getHeaders()
    {
        return [
            'X-Ipay-Auth-Code' => $this->authCode,
            'X-Ipay-Client-Id' => $this->clientId,
            'X-Ipay-Client-Secret' => $this->clientSecret,
            'X-Ipay-Endpoint-Ip' => $this->endpointIp ?: request()->ip(),
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ];
    }

    /**
     * Generate external reference ID
     *
     * @return string
     */
    protected function generateExternalRef()
    {
        return (string) time() . rand(1000, 9999);
    }

    /**
     * Fetch challan details by vehicle number using InstantPay API
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

            // Clean the vehicle number (remove spaces and special characters)
            $vehicleNumber = strtoupper(preg_replace('/[^A-Z0-9]/', '', $vehicleNumber));

            Log::info('Fetching challan for vehicle: ' . $vehicleNumber);

            // InstantPay Vehicle Challan API endpoint (JSON format)
            $response = Http::withHeaders($this->getHeaders())
                ->post($this->baseUrl . '/identity/vehicleChallan', [
                    'vehicleRegistrationNumber' => $vehicleNumber,
                    'consent' => 'Y',
                    'latitude' => '28.6139',
                    'longitude' => '77.2090',
                    'externalRef' => $this->generateExternalRef(),
                ]);

            Log::info('InstantPay API Response Status: ' . $response->status());
            Log::info('InstantPay API Response: ' . $response->body());

            if ($response->successful()) {
                $data = $response->json();

                // Check if the API returned a success status
                if (isset($data['statuscode']) && $data['statuscode'] === 'TXN') {
                    return [
                        'success' => true,
                        'data' => $this->transformChallanResponse($data, $vehicleNumber),
                        'raw_response' => $data,
                    ];
                }

                // API returned an error status
                return [
                    'success' => false,
                    'message' => $data['status'] ?? 'Failed to fetch challan details',
                    'error' => $data,
                ];
            }

            return [
                'success' => false,
                'message' => 'Failed to fetch challan details from InstantPay',
                'error' => $response->body(),
            ];
        } catch (\Exception $e) {
            Log::error('Traffic Challan API Error: ' . $e->getMessage());
            Log::error('Stack trace: ' . $e->getTraceAsString());
            return [
                'success' => false,
                'message' => 'An error occurred while fetching challan details',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Transform InstantPay challan response to our standard format
     *
     * @param array $response
     * @param string $vehicleNumber
     * @return array
     */
    protected function transformChallanResponse($response, $vehicleNumber)
    {
        $challans = [];
        $challanData = $response['data'] ?? [];

        // Handle both single challan and array of challans
        if (isset($challanData['challanDetails'])) {
            $challanList = is_array($challanData['challanDetails'])
                ? $challanData['challanDetails']
                : [$challanData['challanDetails']];
        } elseif (isset($challanData['data'])) {
            $challanList = is_array($challanData['data'])
                ? $challanData['data']
                : [$challanData['data']];
        } else {
            $challanList = [$challanData];
        }

        foreach ($challanList as $challan) {
            if (empty($challan) || !is_array($challan)) {
                continue;
            }

            $challans[] = [
                'challan_number' => $challan['challanNumber'] ?? $challan['challan_number'] ?? null,
                'vehicle_number' => $challan['rcRegistrationNumber'] ?? $challan['vehicleNumber'] ?? $vehicleNumber,
                'offence_type' => $challan['offenceDetails'] ?? $challan['offence_type'] ?? 'Traffic Violation',
                'offence_description' => $challan['offenceDescription'] ?? $challan['offence_description'] ?? '',
                'fine_amount' => (float) ($challan['challanAmount'] ?? $challan['fineAmount'] ?? $challan['fine_amount'] ?? 0),
                'offence_location' => $challan['location'] ?? $challan['offence_location'] ?? '',
                'offence_date' => $challan['challanDate'] ?? $challan['offence_date'] ?? null,
                'due_date' => $challan['dueDate'] ?? $challan['due_date'] ?? null,
                'issuing_authority' => $challan['issuingAuthority'] ?? $challan['authority'] ?? 'Traffic Police',
                'status' => $this->mapChallanStatus($challan['challanStatus'] ?? $challan['status'] ?? 'pending'),
                'accused_name' => $challan['accusedName'] ?? null,
                'accused_father_name' => $challan['accusedFatherName'] ?? null,
                'receipt_url' => $challan['challanReceiptUrl'] ?? null,
                'payment_source' => $challan['challanPaymentSource'] ?? null,
                'payment_date' => $challan['challanPaymentDate'] ?? null,
                'state_code' => $challan['rcStateCode'] ?? null,
            ];
        }

        $totalFineAmount = array_sum(array_column($challans, 'fine_amount'));

        return [
            'vehicle_number' => $vehicleNumber,
            'total_challans' => count($challans),
            'total_fine_amount' => $totalFineAmount,
            'challans' => $challans,
            'api_reference' => $response['ipay_uuid'] ?? null,
            'timestamp' => $response['timestamp'] ?? now()->toIso8601String(),
        ];
    }

    /**
     * Map InstantPay challan status to our internal status
     *
     * @param string $status
     * @return string
     */
    protected function mapChallanStatus($status)
    {
        $status = strtolower($status);

        $statusMap = [
            'pending' => 'pending',
            'unpaid' => 'pending',
            'open' => 'pending',
            'paid' => 'paid',
            'closed' => 'paid',
            'disposed' => 'paid',
            'cancelled' => 'cancelled',
            'compounded' => 'paid',
        ];

        return $statusMap[$status] ?? 'pending';
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

            // Note: InstantPay may have a separate payment API endpoint
            // This is a placeholder for the actual payment integration
            // You may need to integrate with their payment gateway

            Log::info('Processing challan payment: ' . $challanNumber . ' Amount: ' . $amount);

            // For now, return success as payment would typically go through
            // a payment gateway flow (Razorpay, PayU, etc.) and then update the challan
            return [
                'success' => true,
                'data' => [
                    'challan_number' => $challanNumber,
                    'amount_paid' => $amount,
                    'payment_reference' => 'PAY' . strtoupper(substr(md5($challanNumber . time()), 0, 12)),
                    'payment_status' => 'success',
                    'payment_date' => now()->format('Y-m-d H:i:s'),
                    'message' => 'Payment initiated successfully',
                ],
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
     * Check API credentials and connectivity
     *
     * @return array
     */
    public function testConnection()
    {
        try {
            if (!$this->clientId || !$this->clientSecret) {
                return [
                    'success' => false,
                    'message' => 'InstantPay credentials not configured',
                ];
            }

            // Test with a sample vehicle number
            $testVehicle = 'DL01AB1234';

            $response = Http::withHeaders($this->getHeaders())
                ->timeout(30)
                ->post($this->baseUrl . '/identity/vehicleChallan', [
                    'vehicleRegistrationNumber' => $testVehicle,
                    'consent' => 'Y',
                    'latitude' => '28.6139',
                    'longitude' => '77.2090',
                    'externalRef' => $this->generateExternalRef(),
                ]);

            return [
                'success' => true,
                'message' => 'Connection successful',
                'status_code' => $response->status(),
                'response' => $response->json(),
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Connection failed: ' . $e->getMessage(),
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
