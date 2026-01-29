<?php

use App\Http\Controllers\Api\Client\ClientCartController;
use App\Http\Controllers\Api\Client\ClientController;
use App\Http\Controllers\Api\Client\ClientDashboardController;
use App\Http\Controllers\Api\Client\ClientOrderController;
use App\Http\Controllers\Api\DeliveryCharge\DeliveryChargeController;
use App\Http\Controllers\Api\InvoiceApiController;
use App\Http\Controllers\Api\Orders\CartItemController;
use App\Http\Controllers\Api\Orders\OrderCancelPolicyController;
use App\Http\Controllers\Api\Orders\OrderController;
use App\Http\Controllers\Api\Refund\RefundController;
use App\Http\Controllers\Api\UserLocationController;
use Illuminate\Support\Facades\Route;





Route::group(['prefix'=>'v1', 'middleware' => 'setlang'],function(){
    // user Api Routes
    Route::group(['prefix' => 'client/','middleware' => 'auth:sanctum'],function (){
        // service order
        Route::group(['prefix' => 'service'],function (){
            Route::post('order-create',[OrderController::class,'serviceOrderCreate']);
            Route::post('order-payment-status-update',[OrderController::class,'paymentStatusUpdate']);
            Route::post('order-cancel',[OrderController::class,'cancelOrder']);
            Route::post('refund-info-update',[OrderController::class,'updatePaymentInfo']);

        });

        //all caert item
        Route::group(['prefix'=>'cart'],function(){

            Route::controller(ClientCartController::class)->group(function()
            {
                //add
                Route::post('/add','addCart');
                //increase quantity
                Route::post('/item-increase','increaseCartItem');
                //decrease quantity
                Route::post('/item-decrease','decreaseCartItem');
                //remove item
                Route::post('/item-remove','removeCartItem');
                //clear all
                Route::post('/clear-all','clearCart');
            });
        });
        // client multiple address
        Route::group(['prefix' => 'location/'],function (){
            Route::post('create',[UserLocationController::class,'user_multiple_location_create']);
            Route::post('edit/{id}',[UserLocationController::class,'user_multiple_location_edit']);
            Route::post('delete/{id}',[UserLocationController::class,'user_multiple_location_delete']);
            Route::get('all',[UserLocationController::class,'user_all_multiple_location']);
       });
        // client all orders
        Route::group(['prefix' => 'orders'],function(){
            Route::controller(ClientOrderController::class)->group(function (){
                Route::get('all','clientAllOrders');
                Route::get('all-refund-list','refundList');
                Route::get('details/{id}','clientOrderDetails');
                Route::get('refund-details/{id}','clientRefundDetails');
                Route::post('/complete-request/status-approve','orderCompleteRequestApprove');
                Route::post('/complete-request/status-decline','orderCompleteRequestDecline');
                Route::get('/complete-request/history','orderCompleteRequestHistory');
            });


        });

        Route::group(['prefix' => 'refund'],function(){
            Route::controller(RefundController::class)->group(function (){
                Route::get('/all','refund_gateway_list');
            });
        });


        // provider reviews
        Route::group(['prefix' => 'reviews'],function(){
            Route::controller(ClientOrderController::class)->group(function (){
                Route::get('/all','clientAllReviews');
            });
        });
        // user account settings
        Route::group(['prefix' => 'dashboard/'],function(){
            Route::controller(ClientDashboardController::class)->group(function (){
                Route::get('/info','dashboardInfo');
            });
        });

        // tax info
        Route::post('/tax-info',[ClientController::class, 'taxInfo']);
        Route::post('/delivery-charge-info',[ClientController::class, 'deliveryChargeInfo']);
        Route::post('/tax-delivery-charge-info',[ClientController::class, 'tax_deliveryChargeInfo']);
        Route::get('/coupon-info/{coupon_code}',[ClientController::class, 'couponInfo']);

   });
});


