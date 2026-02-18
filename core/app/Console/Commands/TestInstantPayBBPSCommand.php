<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class TestInstantPayBBPSCommand extends Command
{
    protected $signature = 'instantpay:bbps-categories {--outlet-id= : Outlet ID for BBPS} {--search= : Search for specific category}';
    protected $description = 'Test InstantPay BBPS API - Get all categories and check for Traffic Challan';

    private string $baseUrl;
    private array $headers;

    public function handle()
    {
        $this->info('===========================================');
        $this->info('  InstantPay BBPS Categories Test');
        $this->info('===========================================');
        $this->newLine();

        // Setup configuration
        $this->baseUrl = config('services.instantpay.base_url', 'https://api.instantpay.in');
        $clientId = config('services.instantpay.client_id');
        $clientSecret = config('services.instantpay.client_secret');
        $authCode = config('services.instantpay.auth_code', '1');
        $endpointIp = config('services.instantpay.endpoint_ip');
        $outletId = $this->option('outlet-id') ?? env('INSTANTPAY_OUTLET_ID', '');

        // Validate credentials
        if (empty($clientId) || empty($clientSecret)) {
            $this->error('Missing InstantPay credentials in .env file');
            return 1;
        }

        // Show configuration
        $this->info('Configuration:');
        $this->table(['Setting', 'Value'], [
            ['Base URL', $this->baseUrl],
            ['Client ID', substr($clientId, 0, 20) . '...'],
            ['Auth Code', $authCode],
            ['Endpoint IP', $endpointIp ?: '(not set)'],
            ['Outlet ID', $outletId ?: '(not set)'],
        ]);
        $this->newLine();

        // Setup headers
        $this->headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'X-Ipay-Auth-Code' => $authCode,
            'X-Ipay-Client-Id' => $clientId,
            'X-Ipay-Client-Secret' => $clientSecret,
        ];

        if (!empty($endpointIp)) {
            $this->headers['X-Ipay-Endpoint-Ip'] = $endpointIp;
        }

        if (!empty($outletId)) {
            $this->headers['X-Ipay-Outlet-Id'] = $outletId;
        }

        // Step 1: Get Categories
        $this->info('Step 1: Fetching BBPS Categories...');
        $this->newLine();

        $categories = $this->getCategories();

        if ($categories === null) {
            return 1;
        }

        // Display categories
        $this->displayCategories($categories);

        // Search for traffic challan related categories
        $this->newLine();
        $this->info('Step 2: Searching for Traffic Challan related categories...');
        $this->newLine();

        $searchTerms = ['traffic', 'challan', 'e-challan', 'echallan', 'police', 'transport', 'rto', 'vehicle', 'fine', 'government'];
        $searchQuery = $this->option('search');

        if ($searchQuery) {
            $searchTerms = [$searchQuery];
        }

        $found = $this->searchCategories($categories, $searchTerms);

        if (empty($found)) {
            $this->warn('No traffic challan related categories found in BBPS.');
            $this->newLine();
            $this->info('Possible reasons:');
            $this->line('  1. Traffic Challan may not be available as a BBPS category yet');
            $this->line('  2. It might be under a different name (check "Government" or "Others")');
            $this->line('  3. Your account may not have access to all categories');
            $this->newLine();
            $this->info('Recommendation: Contact InstantPay support to confirm traffic challan availability.');
        } else {
            $this->info('Found potential traffic challan categories! Fetching billers...');
            $this->newLine();

            foreach ($found as $category) {
                $this->getBillersForCategory($category);
            }
        }

        return 0;
    }

    private function getCategories(): ?array
    {
        try {
            $response = Http::withHeaders($this->headers)
                ->timeout(30)
                ->get("{$this->baseUrl}/marketplace/utilityPayments/category");

            $data = $response->json();

            $this->info('API Response Status: ' . ($response->status()));

            if ($response->failed()) {
                $this->error('API request failed!');
                $this->line('Response: ' . json_encode($data, JSON_PRETTY_PRINT));
                return null;
            }

            if (isset($data['statuscode']) && $data['statuscode'] !== 'TXN') {
                $this->warn('API returned non-success status:');
                $this->line('Status Code: ' . ($data['statuscode'] ?? 'N/A'));
                $this->line('Status: ' . ($data['status'] ?? 'N/A'));
                $this->line('Message: ' . ($data['message'] ?? $data['data'] ?? 'N/A'));

                // Still try to get categories if available
                if (!isset($data['data']) || !is_array($data['data'])) {
                    return null;
                }
            }

            return $data['data'] ?? $data['categories'] ?? $data;

        } catch (\Exception $e) {
            $this->error('Exception occurred: ' . $e->getMessage());
            return null;
        }
    }

    private function displayCategories(array $categories): void
    {
        $this->info('Available BBPS Categories:');
        $this->newLine();

        if (empty($categories)) {
            $this->warn('No categories returned from API');
            return;
        }

        // Check if it's a simple array or array of objects
        $tableData = [];
        $index = 1;

        foreach ($categories as $category) {
            if (is_array($category)) {
                $tableData[] = [
                    $index++,
                    $category['categoryKey'] ?? $category['key'] ?? $category['id'] ?? 'N/A',
                    $category['categoryName'] ?? $category['name'] ?? $category['category'] ?? 'N/A',
                    $category['categoryDesc'] ?? $category['description'] ?? '-',
                ];
            } else {
                // Simple string
                $tableData[] = [$index++, $category, $category, '-'];
            }
        }

        $this->table(['#', 'Category Key', 'Category Name', 'Description'], $tableData);
        $this->info('Total categories: ' . count($categories));
    }

    private function searchCategories(array $categories, array $searchTerms): array
    {
        $found = [];

        foreach ($categories as $category) {
            $searchString = '';

            if (is_array($category)) {
                $searchString = strtolower(implode(' ', array_values($category)));
            } else {
                $searchString = strtolower($category);
            }

            foreach ($searchTerms as $term) {
                if (str_contains($searchString, strtolower($term))) {
                    $found[] = $category;

                    $categoryName = is_array($category)
                        ? ($category['categoryName'] ?? $category['name'] ?? json_encode($category))
                        : $category;

                    $this->info("  ✓ Found match for '{$term}': {$categoryName}");
                    break;
                }
            }
        }

        return $found;
    }

    private function getBillersForCategory(array|string $category): void
    {
        $categoryKey = is_array($category)
            ? ($category['categoryKey'] ?? $category['key'] ?? $category['id'] ?? '')
            : $category;

        $categoryName = is_array($category)
            ? ($category['categoryName'] ?? $category['name'] ?? $categoryKey)
            : $category;

        $this->info("Fetching billers for category: {$categoryName} ({$categoryKey})");
        $this->newLine();

        try {
            $response = Http::withHeaders($this->headers)
                ->timeout(30)
                ->post("{$this->baseUrl}/marketplace/utilityPayments/billers", [
                    'pagination' => [
                        'pageNumber' => 1,
                        'recordsPerPage' => 50,
                    ],
                    'filters' => [
                        'categoryKey' => $categoryKey,
                        'updatedAfterDate' => '',
                    ],
                ]);

            $data = $response->json();

            if ($response->failed() || (isset($data['statuscode']) && $data['statuscode'] !== 'TXN')) {
                $this->warn("Could not fetch billers for {$categoryName}");
                $this->line('Response: ' . json_encode($data, JSON_PRETTY_PRINT));
                return;
            }

            $billers = $data['data']['records'] ?? $data['data'] ?? $data['billers'] ?? [];

            if (empty($billers)) {
                $this->warn("No billers found for category: {$categoryName}");
                return;
            }

            $this->info("Billers in {$categoryName}:");

            $tableData = [];
            foreach (array_slice($billers, 0, 20) as $biller) {
                $tableData[] = [
                    $biller['billerId'] ?? $biller['id'] ?? 'N/A',
                    substr($biller['billerName'] ?? $biller['name'] ?? 'N/A', 0, 40),
                    $biller['billerState'] ?? $biller['state'] ?? 'All India',
                ];
            }

            $this->table(['Biller ID', 'Biller Name', 'State'], $tableData);

            if (count($billers) > 20) {
                $this->info('... and ' . (count($billers) - 20) . ' more billers');
            }

        } catch (\Exception $e) {
            $this->error('Exception: ' . $e->getMessage());
        }
    }
}
