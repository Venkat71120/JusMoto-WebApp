<?php

use Illuminate\Support\Facades\Route;
use Modules\Wallet\app\Http\Controllers\Frontend\ClientWalletController;
use Modules\Wallet\app\Http\Controllers\Frontend\ClientWalletIpnController;
use Modules\Wallet\app\Http\Controllers\WalletController;
use Modules\Wallet\app\Http\Controllers\AdminWalletController;
use Modules\Wallet\app\Http\Controllers\AdminTransactionController;
use Modules\Wallet\app\Http\Controllers\AdminWalletSettingsController;
use App\Http\Controllers\Backend\WalletReconciliationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([], function () {
    Route::resource('wallet', WalletController::class)->names('wallet');
});

// Admin routes with authentication and authorization
Route::group(['prefix' => 'admin', 'middleware' => ['auth:admin']], function () {

    // Wallet Settings
    Route::get('/wallet/settings', [AdminWalletSettingsController::class, 'index'])->name('admin.wallet.settings');
    Route::post('/wallet/settings', [AdminWalletSettingsController::class, 'update'])->name('admin.wallet.settings.update');
    Route::post('/wallet/settings/reset', [AdminWalletSettingsController::class, 'reset'])->name('admin.wallet.settings.reset');

    // Wallets Management
    Route::get('/wallet/wallets', [AdminWalletController::class, 'index'])->name('admin.wallet.wallets');
    Route::get('/wallet/wallets/{id}', [AdminWalletController::class, 'show'])->name('admin.wallet.wallets.show');
    Route::post('/wallet/wallets/{id}/adjust-balance', [AdminWalletController::class, 'adjustBalance'])->name('admin.wallet.wallets.adjust-balance');

    // Transactions Management
    Route::get('/wallet/transactions', [AdminTransactionController::class, 'index'])->name('admin.wallet.transactions');
    Route::get('/wallet/transactions/{id}', [AdminTransactionController::class, 'show'])->name('admin.wallet.transactions.show');
    Route::post('/wallet/transactions/{id}/status', [AdminTransactionController::class, 'updateStatus'])->name('admin.wallet.transactions.update-status');


});

Route::middleware(['login.check'])->group(function () {

    Route::group(['prefix' => 'client'], function () {
        // Transactions Management
        Route::get('/wallet/transactions', [ClientWalletController::class, 'allTransactions'])->name('client.wallet.transactions');
        Route::get('/wallet/transactions/{id}/{notificationId?}', [ClientWalletController::class, 'show'])->name('client.wallet.transactions.show');
        Route::post('/wallet/deposit', [ClientWalletController::class, 'deposit'])->name('client.wallet.deposit');
        Route::get('payment-process/success/{transaction_id}', [ClientWalletController::class,'payment_process_success'])->name('client.wallet.deposit.payment.process.success');
        Route::get('payment-process/failed', [ClientWalletController::class,'payment_process_failed'])->name('client.wallet.deposit.payment.process.failed');

        Route::controller(ClientWalletIpnController::class)->group(function(){

            Route::get('payment-process/stripe/ipn','payment_process_stripe_ipn')->name('client.wallet.deposit.payment.process.stripe.ipn');
            Route::post('payment-process/paytm-ipn','payment_process_paytm_ipn')->name('client.wallet.deposit.payment.process.paytm.ipn');
            Route::get('payment-process/paypal/ipn','payment_process_paypal_ipn')->name('client.wallet.deposit.payment.process.paypal.ipn');
            Route::get('payment-process/midtrans-ipn','payment_process_midtrans_ipn')->name('client.wallet.deposit.payment.process.midtrans.ipn');
            Route::post('payment-process/razorpay/ipn','payment_process_razorpay_ipn')->name('client.wallet.deposit.payment.process.razorpay.ipn');
            Route::get('payment-process/mollie/ipn','payment_process_mollie_ipn')->name('client.wallet.deposit.payment.process.mollie.ipn');
            Route::post('payment-process/payfast-ipn','payment_process_payfast_ipn')->name('client.wallet.deposit.payment.process.payfast.ipn');
            Route::get('payment-process/cashfree/ipn','payment_process_cashfree_ipn')->name('client.wallet.deposit.payment.process.cashfree.ipn');
            Route::get('payment-process/instamojo/ipn','payment_process_instamojo_ipn')->name('client.wallet.deposit.payment.process.instamojo.ipn');
            Route::get('payment-process/marcadopago/ipn','payment_process_marcadopago_ipn')->name('client.wallet.deposit.payment.process.marcadopago.ipn');
            Route::post('payment-process/zitopay-ipn','payment_process_zitopay_ipn')->name('client.wallet.deposit.payment.process.zitopay.ipn');
            Route::get('payment-process/squareup/ipn','payment_process_squareup_ipn')->name('client.wallet.deposit.payment.process.squareup.ipn');
            Route::post('payment-process/cinetpay-ipn','payment_process_cinetpay_ipn')->name('client.wallet.deposit.payment.process.cinetpay.ipn');
            Route::post('payment-process/paytabs-ipn','payment_process_paytabs_ipn')->name('client.wallet.deposit.payment.process.paytabs.ipn');
            Route::post('payment-process/billplz-ipn','payment_process_billplz_ipn')->name('client.wallet.deposit.payment.process.billplz.ipn');
            Route::post('payment-process/toyyibpay-ipn','payment_process_toyyibpay_ipn')->name('client.wallet.deposit.payment.process.toyyibpay.ipn');
            Route::get('payment-process/flutterwave/ipn','payment_process_flutterwave_ipn')->name('client.wallet.deposit.payment.process.flutterwave.ipn');
            Route::get('payment-process/paystack-ipn','payment_process_paystack_ipn')->name('client.wallet.deposit.payment.process.paystack.ipn');

        });
    });
});
