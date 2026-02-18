<?php
/**
 * Standalone script to test InstantPay BBPS Categories API
 * Run: php test_bbps_categories.php
 */

// Load environment variables from .env
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Configuration
$config = [
    'base_url' => $_ENV['INSTANTPAY_BASE_URL'] ?? 'https://api.instantpay.in',
    'client_id' => $_ENV['INSTANTPAY_CLIENT_ID'] ?? '',
    'client_secret' => $_ENV['INSTANTPAY_CLIENT_SECRET'] ?? '',
    'auth_code' => $_ENV['INSTANTPAY_AUTH_CODE'] ?? '1',
    'endpoint_ip' => $_ENV['INSTANTPAY_ENDPOINT_IP'] ?: '106.51.172.80',
    'outlet_id' => $_ENV['INSTANTPAY_OUTLET_ID'] ?? '',
];

echo "===========================================\n";
echo "  InstantPay BBPS Categories Test\n";
echo "===========================================\n\n";

echo "Configuration:\n";
echo "  Base URL: {$config['base_url']}\n";
echo "  Client ID: " . substr($config['client_id'], 0, 20) . "...\n";
echo "  Auth Code: {$config['auth_code']}\n";
echo "  Endpoint IP: " . ($config['endpoint_ip'] ?: '(not set)') . "\n";
echo "  Outlet ID: " . ($config['outlet_id'] ?: '(not set)') . "\n\n";

// Validate credentials
if (empty($config['client_id']) || empty($config['client_secret'])) {
    echo "ERROR: Missing InstantPay credentials in .env file\n";
    exit(1);
}

// Build headers
$headers = [
    'Accept: application/json',
    'Content-Type: application/json',
    'X-Ipay-Auth-Code: ' . $config['auth_code'],
    'X-Ipay-Client-Id: ' . $config['client_id'],
    'X-Ipay-Client-Secret: ' . $config['client_secret'],
];

if (!empty($config['endpoint_ip'])) {
    $headers[] = 'X-Ipay-Endpoint-Ip: ' . $config['endpoint_ip'];
}

if (!empty($config['outlet_id'])) {
    $headers[] = 'X-Ipay-Outlet-Id: ' . $config['outlet_id'];
}

// Function to make API call
function makeApiCall($url, $headers, $method = 'GET', $data = null) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        if ($data) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        }
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    return [
        'http_code' => $httpCode,
        'response' => $response,
        'error' => $error,
    ];
}

// Step 1: Get Categories
echo "Step 1: Fetching BBPS Categories...\n";
echo "URL: {$config['base_url']}/marketplace/utilityPayments/category\n\n";

$result = makeApiCall(
    $config['base_url'] . '/marketplace/utilityPayments/category',
    $headers
);

echo "HTTP Status: {$result['http_code']}\n";

if ($result['error']) {
    echo "CURL Error: {$result['error']}\n";
    exit(1);
}

$data = json_decode($result['response'], true);

echo "API Response:\n";
echo str_repeat('-', 50) . "\n";
echo json_encode($data, JSON_PRETTY_PRINT) . "\n";
echo str_repeat('-', 50) . "\n\n";

// Check for success
if (isset($data['statuscode']) && $data['statuscode'] !== 'TXN') {
    echo "WARNING: API returned non-success status\n";
    echo "Status Code: " . ($data['statuscode'] ?? 'N/A') . "\n";
    echo "Message: " . ($data['message'] ?? $data['data'] ?? 'N/A') . "\n\n";
}

// Extract categories
$categories = $data['data'] ?? $data['categories'] ?? [];

if (is_array($categories) && !empty($categories)) {
    echo "Available BBPS Categories:\n";
    echo str_repeat('=', 80) . "\n";
    printf("%-5s %-25s %-40s\n", "#", "Category Key", "Category Name");
    echo str_repeat('-', 80) . "\n";

    $index = 1;
    foreach ($categories as $category) {
        if (is_array($category)) {
            $key = $category['categoryKey'] ?? $category['key'] ?? $category['id'] ?? 'N/A';
            $name = $category['categoryName'] ?? $category['name'] ?? $category['category'] ?? 'N/A';
        } else {
            $key = $category;
            $name = $category;
        }
        printf("%-5d %-25s %-40s\n", $index++, $key, $name);
    }
    echo str_repeat('=', 80) . "\n";
    echo "Total categories: " . count($categories) . "\n\n";

    // Search for traffic challan
    echo "Step 2: Searching for Traffic Challan related categories...\n\n";

    $searchTerms = ['traffic', 'challan', 'e-challan', 'echallan', 'police', 'transport', 'rto', 'vehicle', 'fine', 'government', 'govt'];
    $found = [];

    foreach ($categories as $category) {
        $searchString = '';
        if (is_array($category)) {
            $searchString = strtolower(implode(' ', array_values(array_filter($category, 'is_string'))));
        } else {
            $searchString = strtolower($category);
        }

        foreach ($searchTerms as $term) {
            if (strpos($searchString, strtolower($term)) !== false) {
                $found[] = $category;
                $categoryName = is_array($category)
                    ? ($category['categoryName'] ?? $category['name'] ?? json_encode($category))
                    : $category;
                echo "  ✓ Found match for '$term': $categoryName\n";
                break;
            }
        }
    }

    if (empty($found)) {
        echo "\n⚠ No traffic challan related categories found in BBPS.\n\n";
        echo "Possible reasons:\n";
        echo "  1. Traffic Challan may not be available as a BBPS category yet\n";
        echo "  2. It might be under a different category name\n";
        echo "  3. Your account may not have access to all categories\n\n";
        echo "Recommendation: Contact InstantPay support to confirm traffic challan availability.\n";
    } else {
        echo "\n✓ Found " . count($found) . " potential categories!\n\n";

        // Try to get billers for found categories
        foreach ($found as $category) {
            $categoryKey = is_array($category)
                ? ($category['categoryKey'] ?? $category['key'] ?? '')
                : $category;
            $categoryName = is_array($category)
                ? ($category['categoryName'] ?? $category['name'] ?? $categoryKey)
                : $category;

            echo "Fetching billers for: $categoryName ($categoryKey)\n";

            $billerResult = makeApiCall(
                $config['base_url'] . '/marketplace/utilityPayments/billers',
                $headers,
                'POST',
                [
                    'pagination' => ['pageNumber' => 1, 'recordsPerPage' => 50],
                    'filters' => ['categoryKey' => $categoryKey, 'updatedAfterDate' => '']
                ]
            );

            $billerData = json_decode($billerResult['response'], true);
            $billers = $billerData['data']['records'] ?? $billerData['data'] ?? [];

            if (!empty($billers)) {
                echo "Billers found:\n";
                foreach (array_slice($billers, 0, 10) as $biller) {
                    $billerId = $biller['billerId'] ?? $biller['id'] ?? 'N/A';
                    $billerName = $biller['billerName'] ?? $biller['name'] ?? 'N/A';
                    echo "  - $billerId: $billerName\n";
                }
                if (count($billers) > 10) {
                    echo "  ... and " . (count($billers) - 10) . " more\n";
                }
            } else {
                echo "  No billers found for this category\n";
            }
            echo "\n";
        }
    }
} else {
    echo "No categories data in response\n";
}

echo "\n=== Test Complete ===\n";
