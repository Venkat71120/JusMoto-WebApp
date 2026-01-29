<?php

use Illuminate\Support\Facades\Route;
use Modules\DeliveryCharge\app\Http\Controllers\DeliveryChargeController;
use Modules\DeliveryCharge\app\Http\Controllers\DeliveryChargeManageController;


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

Route::group(['prefix' => 'admin/delivery-charge', 'as' => 'admin.delivery-charge.', 'middleware' => ['auth:admin', 'setlang']], function () {
    Route::controller(DeliveryChargeManageController::class)->group(function () {
        Route::get("settings", "settings")->name("settings")->permission('delivery-charge-settings');
        Route::put("settings", "handleSettings");
    });
    
    Route::group(['prefix' => 'city'], function () {
        Route::controller("CityDeliveryChargeController")->group(function (){
            Route::get('/', 'index')->name('city.all');
            Route::post('new', 'store')->name('city.new');
            Route::post('update', 'update')->name('city.update');
            Route::post('delete/{item}', 'destroy')->name('city.delete');
            Route::post('bulk-action', 'bulk_action')->name('city.bulk.action');
        });
    });    
   

   Route::group(['prefix' => 'state'], function () {
        Route::get('/', 'StateDeliveryChargeController@index')->name('state.all');
        Route::post('new', 'StateDeliveryChargeController@store')->name('state.new');
        Route::post('update', 'StateDeliveryChargeController@update')->name('state.update');
        Route::post('delete/{item}', 'StateDeliveryChargeController@destroy')->name('state.delete');
        Route::post('bulk-action', 'StateDeliveryChargeController@bulk_action')->name('state.bulk.action');
    });

});
