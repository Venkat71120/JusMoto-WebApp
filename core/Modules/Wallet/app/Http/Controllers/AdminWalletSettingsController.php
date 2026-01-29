<?php

namespace Modules\Wallet\app\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Backend\StaticOption;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class AdminWalletSettingsController extends Controller
{
    public function index()
    {
        $walletSettings = [
            'transaction_fee_percentage' => StaticOption::where('option_name', 'wallet_transaction_fee_percentage')->value('option_value') ?? '0.00',
            'client_min_deposit' => StaticOption::where('option_name', 'wallet_client_min_deposit')->value('option_value') ?? '1.00',
        ];

        return view('wallet::admin.settings.index', compact('walletSettings'));
    }

    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'transaction_fee_percentage' => 'required|numeric|min:0|max:100',
            'client_min_deposit' => 'required|numeric|min:0',
        ]);

        // Update or create wallet settings in static_options table
        $settings = [
            'wallet_transaction_fee_percentage' => $request->transaction_fee_percentage,
            'wallet_client_min_deposit' => $request->client_min_deposit,
        ];

        foreach ($settings as $optionName => $optionValue) {
            StaticOption::updateOrCreate(
                ['option_name' => $optionName],
                ['option_value' => $optionValue]
            );
        }

        return redirect()->route('admin.wallet.settings')
                        ->with('success', 'Wallet settings updated successfully.');
    }

    public function reset(): RedirectResponse
    {
        $defaultSettings = [
            'wallet_transaction_fee_percentage' => '0.00',
            'wallet_client_min_deposit' => '1.00',
        ];

        foreach ($defaultSettings as $optionName => $optionValue) {
            StaticOption::updateOrCreate(
                ['option_name' => $optionName],
                ['option_value' => $optionValue]
            );
        }

        return redirect()->route('admin.wallet.settings')
                        ->with('success', 'Wallet settings reset to default values.');
    }
}
