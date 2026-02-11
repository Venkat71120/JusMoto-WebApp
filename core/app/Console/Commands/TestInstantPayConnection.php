<?php

namespace App\Console\Commands;

use App\Services\TrafficChallanService;
use Illuminate\Console\Command;

class TestInstantPayConnection extends Command
{
    protected $signature = 'instantpay:test {vehicle? : Vehicle number to test with}';
    protected $description = 'Test the InstantPay API connection for Traffic Challan';

    public function handle()
    {
        $this->info('Testing InstantPay API Connection...');
        $this->newLine();

        $service = app(TrafficChallanService::class);

        // Display configuration
        $this->info('Configuration:');
        $this->table(
            ['Setting', 'Value'],
            [
                ['Base URL', config('services.instantpay.base_url')],
                ['Client ID', config('services.instantpay.client_id') ? 'Set (' . strlen(config('services.instantpay.client_id')) . ' chars)' : 'NOT SET'],
                ['Client Secret', config('services.instantpay.client_secret') ? 'Set (' . strlen(config('services.instantpay.client_secret')) . ' chars)' : 'NOT SET'],
                ['Encryption Key', config('services.instantpay.encryption_key') ? 'Set' : 'NOT SET'],
                ['Auth Code', config('services.instantpay.auth_code')],
                ['Use Mock', config('services.instantpay.use_mock') ? 'Yes' : 'No'],
            ]
        );
        $this->newLine();

        // Test connection
        $this->info('Testing API connection...');
        $result = $service->testConnection();

        if ($result['success']) {
            $this->info('Connection successful!');
            $this->info('Status Code: ' . ($result['status_code'] ?? 'N/A'));
            if (isset($result['response'])) {
                $this->newLine();
                $this->info('API Response:');
                $this->line(json_encode($result['response'], JSON_PRETTY_PRINT));
            }
        } else {
            $this->error('Connection failed: ' . ($result['message'] ?? 'Unknown error'));
        }

        // If vehicle number provided, test fetching challans
        $vehicle = $this->argument('vehicle');
        if ($vehicle) {
            $this->newLine();
            $this->info("Testing challan fetch for vehicle: {$vehicle}");

            $challanResult = $service->fetchChallanByVehicle($vehicle);

            if ($challanResult['success']) {
                $this->info('Challan fetch successful!');
                $data = $challanResult['data'];
                $this->info("Vehicle: {$data['vehicle_number']}");
                $this->info("Total Challans: {$data['total_challans']}");
                $this->info("Total Fine Amount: ₹{$data['total_fine_amount']}");

                if (!empty($data['challans'])) {
                    $this->newLine();
                    $this->info('Challans:');
                    foreach ($data['challans'] as $challan) {
                        $this->line("  - {$challan['challan_number']}: {$challan['offence_type']} - ₹{$challan['fine_amount']} ({$challan['status']})");
                    }
                }
            } else {
                $this->error('Challan fetch failed: ' . ($challanResult['message'] ?? 'Unknown error'));
                if (isset($challanResult['error'])) {
                    $this->line('Error details: ' . (is_array($challanResult['error']) ? json_encode($challanResult['error']) : $challanResult['error']));
                }
            }
        }

        $this->newLine();
        return Command::SUCCESS;
    }
}
