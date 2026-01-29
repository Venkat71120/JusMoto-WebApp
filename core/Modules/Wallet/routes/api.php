<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Wallet\app\Http\Controllers\Api\Client\ClientWalletController;

/*
    |--------------------------------------------------------------------------
    | API Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register API routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | is assigned the "api" middleware group. Enjoy building your API!
    |
*/

Route::middleware(['auth:sanctum'])->prefix('v1')->name('api.')->group(function () {
    Route::get('wallet', fn (Request $request) => $request->user())->name('wallet');
});

Route::group(['prefix'=>'v1', 'middleware' => 'setlang'],function(){
    // user Api Routes
    Route::group(['prefix' => 'client/','middleware' => 'auth:sanctum'],function (){

        // wallet deposite
        Route::group(['prefix' => 'wallet'],function (){
            Route::post('deposit/create',[ClientWalletController::class,'deposit']);
            Route::post('deposit/payment-update',[ClientWalletController::class,'paymentStatusUpdate']);
            Route::get('current-balance/info',[ClientWalletController::class,'current_balance_info']);
            Route::get('all-transactions',[ClientWalletController::class,'transactionList']);
        });

    });
});
