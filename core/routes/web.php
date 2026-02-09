<?php

use App\Http\Controllers\Frontend\Auth\SocialLoginController;
use App\Http\Controllers\Frontend\CarController;
use App\Http\Controllers\Frontend\CarSelectionController;
use App\Http\Controllers\Frontend\CartItemController;
use App\Http\Controllers\Frontend\FavouriteItemController;
use App\Http\Controllers\Frontend\ReviewController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Frontend\OfferController;
use App\Http\Controllers\Frontend\OrderController;
use App\Http\Controllers\Frontend\RefundController;
use App\Http\Controllers\Common\AdminUserController;
use App\Http\Controllers\Frontend\AddressController;
use App\Http\Controllers\Frontend\LanguageController;
use App\Http\Controllers\Frontend\OrderIpnController;
use App\Http\Controllers\Frontend\SettingsController;
use App\Http\Controllers\Common\GetCategoryController;
use App\Http\Controllers\Frontend\DashboardController;
use App\Http\Controllers\Frontend\Auth\SigninController;
use App\Http\Controllers\Frontend\Auth\SignupController;


use App\Http\Controllers\Frontend\MediaUploadController;
use App\Http\Controllers\Frontend\NotificationController;
use App\Http\Controllers\Frontend\OrderPaymentController;



require_once __DIR__ . '/admin.php';


//guest route
Route::middleware(['guest.token'])->group(function () {
    //all caert item
    Route::group(['prefix'=>'cart'],function(){

        Route::controller(CartItemController::class)->group(function()
        {
            Route::get('/all-items','cartPopUpOpen')->name('client.cart.items.all');
            //add
            Route::post('/add-item','addCart')->name('client.cart.item.add');
            //remove
            Route::post('/remove-item','removeCartItem')->name('client.cart.item.remove');
            //decrease
            Route::post('/decrease-quantity','decreaseCartItem')->name('client.cart.item.quantity.decrease');
            //increase
            //add
            Route::post('/increase-quantity','increaseCartItem')->name('client.cart.item.quantity.increase');
            Route::post('/clear', [CartItemController::class, 'clearCart'])->name('client.cart.item.clear');
        });
    });
    //car select
    Route::get('/client/car/popup',[CarSelectionController::class,'popUpOpen'])->name('client.car.select.popup');
    Route::post('/client/car',[CarSelectionController::class,'selectCar'])->name('client.car.select');
    // my Car
    Route::get('/brands', [CarController::class,'getBrands']);
    Route::post('/cars', [CarController::class,'getCarsByBrand']);
    Route::post('/engine-types', [CarController::class,'getEngineTypesByCar']);
    Route::post('/fuel-by-car-engine', [CarController::class,'getFuelByCarAndEngine']);

});

//Client Routes

Route::middleware(['login.check', 'globalVariable','setlangforuser'])->group(function () {
// Dashboard
    Route::get('/client/dashboard', [DashboardController::class, 'index'])->name('user.dashboard');
    Route::get('/car/merge-confirm', [CarSelectionController::class, 'showMergeConfirm'])->name('car.merge.confirm');
    Route::post('/car/merge-confirm', [CarSelectionController::class, 'handleMergeChoice'])->name('car.merge.choice');

// user registration
    Route::controller(SignupController::class)->group(function(){
        Route::post('user-name-availability','userNameAvailability')->name('user.name.availability');
        Route::post('phone-number-availability','phoneNumberAvailability')->name('user.phone.number.availability');
        Route::match(['get', 'post'], 'email-verify', 'emailVerify')->name('email.verify')->middleware('auth:web');
        Route::get('resend-verify-code-again', 'resendCode')->name('resend.verify.code')->middleware('auth:web');
        Route::match(['get', 'post'], 'phone-verify', 'phoneVerify')->name('phone.verify')->middleware('auth:web');
        Route::get('resend-phone-verify-code-again', 'resendPhoneCode')->name('resend.phone.verify.code')->middleware('auth:web');
    });

    Route::get('/client/order', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/client/order/details/{id}/{notificationId?}', [OrderController::class, 'show'])->name('order.details');
    Route::post('/client/order/cancel/{id}', [OrderController::class, 'cancel'])->name('order.cancel');

    //booking  page
    Route::get('/client/booking-page', [OrderController::class, 'booking_page'])->name('client.booking_page');
    Route::post('/booking/store-session', [OrderController::class, 'storeSession'])->name('booking.store-session');
    Route::post('/booking/apply-coupon', [OrderController::class, 'applyCoupon'])->name('booking.apply-coupon');
    Route::post('/booking/tax-delivery-charge', [OrderController::class, 'findTaxDeliveryCharge'])->name('booking.tax-delivery-charge');

    Route::controller(OrderPaymentController::class)->group(function(){

        Route::post('/client/booking','orderCreate')->name('client.booking');
        Route::post('payment-process','order_payment_update')->name('client.order.payment.process');
        Route::get('payment-process/success/{order_id}','payment_process_success')->name('client.order.payment.process.success');
        Route::get('payment-process/failed/{order_id}','payment_process_failed')->name('client.order.payment.process.failed');
    });
    Route::post('/booking/clear-session', function() {
        session()->forget([
            'booking_delivery_charge',
            'booking_tax',
            'booking_discount',
            'booking_sub_total',
            'booking_total',
            'booking_coupon',
        ]);
        return response()->noContent();
    })->name('booking.clear-session');


    //Payment Gateway IPN
    Route::controller(OrderIpnController::class)->group(function(){

        Route::get('payment-process/stripe/ipn','payment_process_stripe_ipn')->name('client.order.payment.process.stripe.ipn');
        Route::post('payment-process/paytm-ipn','payment_process_paytm_ipn')->name('client.order.payment.process.paytm.ipn');
        Route::get('payment-process/paypal/ipn','payment_process_paypal_ipn')->name('client.order.payment.process.paypal.ipn');
        Route::get('payment-process/midtrans-ipn','payment_process_midtrans_ipn')->name('client.order.payment.process.midtrans.ipn');
        Route::post('payment-process/razorpay/ipn','payment_process_razorpay_ipn')->name('client.order.payment.process.razorpay.ipn');
        Route::get('payment-process/mollie/ipn','payment_process_mollie_ipn')->name('client.order.payment.process.mollie.ipn');
        Route::post('payment-process/payfast-ipn','payment_process_payfast_ipn')->name('client.order.payment.process.payfast.ipn');
        Route::get('payment-process/cashfree/ipn','payment_process_cashfree_ipn')->name('client.order.payment.process.cashfree.ipn');
        Route::get('payment-process/instamojo/ipn','payment_process_instamojo_ipn')->name('client.order.payment.process.instamojo.ipn');
        Route::get('payment-process/marcadopago/ipn','payment_process_marcadopago_ipn')->name('client.order.payment.process.marcadopago.ipn');
        Route::post('payment-process/zitopay-ipn','payment_process_zitopay_ipn')->name('client.order.payment.process.zitopay.ipn');
        Route::get('payment-process/squareup/ipn','payment_process_squareup_ipn')->name('client.order.payment.process.squareup.ipn');
        Route::post('payment-process/cinetpay-ipn','payment_process_cinetpay_ipn')->name('client.order.payment.process.cinetpay.ipn');
        Route::post('payment-process/paytabs-ipn','payment_process_paytabs_ipn')->name('client.order.payment.process.paytabs.ipn');
        Route::post('payment-process/billplz-ipn','payment_process_billplz_ipn')->name('client.order.payment.process.billplz.ipn');
        Route::post('payment-process/toyyibpay-ipn','payment_process_toyyibpay_ipn')->name('client.order.payment.process.toyyibpay.ipn');
        Route::get('payment-process/flutterwave/ipn','payment_process_flutterwave_ipn')->name('client.order.payment.process.flutterwave.ipn');
        Route::get('payment-process/paystack-ipn','payment_process_paystack_ipn')->name('client.order.payment.process.paystack.ipn');

    });

    //all favourite Service
    Route::group(['prefix'=>'favourite-service'],function(){

        Route::controller(FavouriteItemController::class)->group(function()
        {
            Route::get('/all-favourite-service','favoriteLists')->name('client.favourite.services.all');
            //add
            Route::post('/add-remove-favourite-services','toggleFavorite')->name('client.favourite.services.toggle');
        });
    });

    //review
    Route::group(['prefix'=>'client/order/review'],function(){

        Route::controller(ReviewController::class)->group(function()
        {
            //add
            Route::post('/add','addReview')->name('client.review.add');
        });
    });

    Route::get('/client/my-car/edit', function () {

    })->name('my-car.edit');


//Support
    Route::get('/client/support', function () {
        return view('frontend.user.client.support');
    })->name('support');

// Refunds
    Route::get('/client/refunds', [RefundController::class, 'index'])->name('refunds.index');
    Route::get('/client/refunds/{id}', [RefundController::class, 'show'])->name('refunds.show');
    Route::post('/client/refunds/{id}/update-payment', [RefundController::class, 'updatePaymentInfo'])->name('refunds.update-payment');

    //all notification
    Route::group(['prefix'=>'notificaton'],function(){

        Route::controller(NotificationController::class)->group(function()
        {
            Route::get('/all-notification','all_notification')->name('client.notification.all');
            Route::get('all/read','read_notification')->name('client.notification.read');

        });
    });

    //offer
    Route::group(['prefix'=>'offer'],function(){

        Route::controller(OfferController::class)->group(function()
        {
            Route::get('/details/{offer_id}/{notificationId?}', 'details')->name('offer.show');

        });
    });

    Route::prefix('language')->group(function()
    {
        Route::controller(LanguageController::class)->group(function () {
            Route::post('change-language','makeDefault')->name('client.change.language');
        });
    });



// Address
    Route::get('/client/address', [AddressController::class, 'user_all_multiple_location'])->name('client.all.address');
    Route::match(['get','post'],'/client/address/create', [AddressController::class, 'user_multiple_location_create'])->name('client.address.create');
    Route::match(['get','post'],'/client/address/edit/{id}', [AddressController::class, 'user_multiple_location_edit'])->name('client.address.edit');
    Route::get('/client/address-map', [AddressController::class, 'user_multiple_location_map_page'])->name('client.address.map');
    Route::get('/client/edit-address-map/{id}', [AddressController::class, 'user_multiple_location_map_edit_page'])->name('client.address.map.edit');
    Route::get('/client/address/get-cities/{stateId}', [AddressController::class, 'getCities'])->name('client.getCity');
    Route::get('/client/address/get-areas/{cityId}/{stateId}', [AddressController::class, 'getAreas'])->name('client.getArea');
    Route::post('/client/address/delete/{id}',[AddressController::class,'user_multiple_location_delete'])->name('client.address.delete');

// Profile
    Route::get('/client/profile', function () {
        return view('frontend.user.client.settings');
    })->name('profile');

    Route::get('/client/change-password', function () {
        return view('frontend.user.client.settings');
    })->name('change-password');

// Settings
    Route::get('/client/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::post('/client/settings/profile', [SettingsController::class, 'userProfileUpdate'])->name('settings.update.profile');
    Route::post('/client/settings/password', [SettingsController::class, 'userPasswordChange'])->name('settings.update.password');
    Route::post('/user-account-delete',[SettingsController::class, 'accountDelete'])->name('client.account.delete');

// Pages
    Route::get('/client/privacy-policy', function () {
        return view('frontend.user.client.privacy-policy');
    })->name('privacy-policy');

    Route::get('/client/contact', function () {
        return view('frontend.user.client.contact');
    })->name('contact');



// Account delete (POST route)
    Route::delete('/account/delete', function () {
        return "Account deleted";
    })->name('account.delete');

// Redirect root to dashboard
    Route::redirect('/', '/dashboard');

// media upload routes end
    Route::post('/client/media-upload/all', [MediaUploadController::class,'allUploadMediaFile'])->name('client.upload.media.file.all');
    Route::post('/client/media-upload', [MediaUploadController::class,'uploadMediaFile'])->name('client.upload.media.file');
    Route::post('/client/media-upload/alt', [MediaUploadController::class,'altChangeUploadMediaFile'])->name('client.upload.media.file.alt.change');
    Route::post('/client/media-upload/delete',[MediaUploadController::class, 'deleteUploadMediaFile'])->name('client.upload.media.file.delete');
    // media upload routes for restrict user in demo mode
    Route::post('/client/media-upload/loadmore',  [MediaUploadController::class,'getImageForLoadmore'])->name('client.upload.media.file.loadmore');
});

//...


Route::group(['middleware' => ['globalVariable','setlang']], function () {

    Route::controller(App\Http\Controllers\Frontend\Website\ContactController::class)->group(function(){
        Route::post('/contact-us', 'contactMessageSend')->name('frontend.contact.message.send');
    });
    Route::controller(LoginController::class)->group(function(){
        Route::get('/admin', 'showLoginForm')->name('admin.login');
        Route::post('/admin',  'adminLogin');
        Route::get('/admin/forget-password', 'showAdminForgetPasswordForm')->name('admin.forget.password');
        Route::get('/admin/reset-password/{user}/{token}', 'showAdminResetPasswordForm')->name('admin.reset.password');
        Route::post('/admin/reset-password', 'AdminResetPassword')->name('admin.reset.password.change');
        Route::post('/admin/forget-password', 'sendAdminForgetPasswordMail');
    });

    Route::controller(SigninController::class)->group(function(){
        //client
        Route::get('/social/login', 'showSocialLoginForm')->name('auth.social.login');
        Route::get('/login', 'showLoginForm')->name('auth.login');
        Route::post('/login','login')->name('auth.login.submit');
        Route::get('/client/logout', 'logout')->name('auth.logout');
        Route::get('/client/forget-password', action: 'showUserForgetPasswordForm')->name('user.forget.password');
        Route::get('/client/reset-password/{user}/{token}', 'showUserResetPasswordForm')->name('user.reset.password');
        Route::post('/client/reset-password', 'UserResetPassword')->name('user.reset.password.change');
        Route::post('/client/forget-password', 'sendUserForgetPasswordMail');
    });


    Route::controller(SignupController::class)->group(function(){
        Route::post('email-availability','emailAvailability')->name('user.email.availability');
        Route::match(['get', 'post'], 'email-verify', 'emailVerify')->name('email.verify')->middleware('auth:web');
        Route::get('/signup', 'showSignupForm')->name('auth.signup');
        Route::post('/client/signup', 'signup')->name('auth.signup.submit');

    });

    //service list page
    //service
    Route::controller(App\Http\Controllers\Frontend\Website\ServiceController::class)->group(function() {

        Route::get('services', 'allServiceList')->name('frontend.all.services');
        Route::get('services/filter', 'filterServiceList')->name('frontend.all.filter.services');
        Route::get('service/{slug}/{notificationId?}', 'serviceDetails')->name('frontend.service.details');
//        Route::get('services', 'searchByCategory')->name('frontend.service.search-by-category');

    });
    //service
    Route::controller(App\Http\Controllers\Frontend\Website\ProductController::class)->group(function() {

        Route::get('products', 'allProductList')->name('frontend.all.products');
        Route::get('products/filter', 'filterProductList')->name('frontend.all.filter.products');
        Route::get('product/{slug}/{notificationId?}', 'productDetails')->name('frontend.product.details');


    });

    // user social login
    Route::controller(SocialLoginController::class)->group(function(){
        Route::get('facebook/callback', 'facebook_callback')->name('facebook.callback');
        Route::get('facebook/redirect', 'facebook_redirect')->name('login.facebook.redirect');
        Route::get('google/callback', 'google_callback')->name('google.callback');
        Route::get('google/redirect', 'google_redirect')->name('login.google.redirect');
    });

});

Route::group(['middleware' => ['globalVariable', 'maintains_mode','setlang']], function () {
    // public routes for user and admin
    Route::controller(AdminUserController::class)->group(function(){
        Route::post('get-state','get_state_city')->name('au.state.all');
        Route::post('get-city','get_city_area')->name('au.city.all');
        Route::post('get-subcategory','get_subcategory')->name('au.subcategory.all');
    });

    // get category, subcategory, child category for select
    Route::post('get-subcategory',[GetCategoryController::class, 'get_sub_category'])->name('get.subcategory');
    Route::post('get-child-category',[GetCategoryController::class, 'get_child_category'])->name('get.subcategory.with.child.category');

    //dynamic single page
    Route::controller(App\Http\Controllers\Frontend\FrontendController::class)->group(function(){
    Route::get('/', function () {
    return view('frontend.pages.index');
})->name('homepage');

        Route::get('/{slug}', 'dynamic_single_page')->name('frontend.dynamic.page');
    });


});


