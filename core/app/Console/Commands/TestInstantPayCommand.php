<?php

namespace App\Console\Commands;

use App\Services\TrafficChallanService;
use Illuminate\Console\Command;

class TestInstantPayCommand extends Command
{
    protected $signature = 'instantpay:test {vehicle? : Vehicle registration number to test}';

    protected $description = 'Test InstantPay Traffic Challan API connection';

    public function handle()
    {
        $this->info('Testing InstantPay API Connection...');
        $this->newLine();

        $service = new TrafficChallanService();

        // First test basic connection
        $this->info('1. Testing API Credentials...');
        $connectionResult = $service->testConnection();

        if ($connectionResult['success']) {
            $this->info('   Status: Connected successfully');
            $this->info('   HTTP Status: ' . ($connectionResult['status_code'] ?? 'N/A'));
        } else {
            $this->error('   Status: Connection failed');
            $this->error('   Error: ' . ($connectionResult['message'] ?? 'Unknown error'));
        }

        $this->newLine();

        // Test with a vehicle number if provided
        $vehicleNumber = $this->argument('vehicle') ?? 'DL01AB1234';

        $this->info('2. Testing Challan Fetch for: ' . $vehicleNumber);

        $result = $service->fetchChallanByVehicle($vehicleNumber);

        if ($result['success']) {
            $this->info('   Status: Success');
            $data = $result['data'];
            $this->info('   Total Challans: ' . ($data['total_challans'] ?? 0));
            $this->info('   Total Fine Amount: Rs. ' . ($data['total_fine_amount'] ?? 0));

            if (!empty($data['challans'])) {
                $this->newLine();
                $this->info('   Challans Found:');
                foreach ($data['challans'] as $index => $challan) {
                    $this->info('   ' . ($index + 1) . '. ' . ($challan['challan_number'] ?? 'N/A'));
                    $this->info('      Offence: ' . ($challan['offence_type'] ?? 'N/A'));
                    $this->info('      Amount: Rs. ' . ($challan['fine_amount'] ?? 0));
                    $this->info('      Status: ' . ($challan['status'] ?? 'N/A'));
                }
            }
        } else {
            $this->error('   Status: Failed');
            $this->error('   Message: ' . ($result['message'] ?? 'Unknown error'));
            if (isset($result['error'])) {
                $this->error('   Error: ' . (is_array($result['error']) ? json_encode($result['error']) : $result['error']));
            }
        }

        $this->newLine();

        // Show configuration
        $this->info('3. Current Configuration:');
        $this->info('   Base URL: ' . config('services.instantpay.base_url'));
        $this->info('   Client ID: ' . (config('services.instantpay.client_id') ? 'Set (hidden)' : 'Not set'));
        $this->info('   Client Secret: ' . (config('services.instantpay.client_secret') ? 'Set (hidden)' : 'Not set'));
        $this->info('   Auth Code: ' . config('services.instantpay.auth_code'));
        $this->info('   Mock Mode: ' . (config('services.instantpay.use_mock') ? 'Enabled' : 'Disabled'));

        $this->newLine();

        return $result['success'] ? Command::SUCCESS : Command::FAILURE;
    }
}
