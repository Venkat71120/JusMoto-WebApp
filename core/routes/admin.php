<?php

use App\Http\Controllers\Backend\AdminCommissionController;
use App\Http\Controllers\Backend\AdminDashboardController;
use App\Http\Controllers\Backend\AdminNotificationController;
use App\Http\Controllers\Backend\AdminOrderManageController;
use App\Http\Controllers\Backend\AdminOutletLocationController;
use App\Http\Controllers\Backend\AdminProductController;
use App\Http\Controllers\Backend\AdminProfileController;
use App\Http\Controllers\Backend\AdminProviderController;
use App\Http\Controllers\Backend\AdminScheduleManageController;
use App\Http\Controllers\Backend\AdminServiceController;
use App\Http\Controllers\Backend\AdminServiceOrderManageController;
use App\Http\Controllers\Backend\AdminStaffManageController;
use App\Http\Controllers\Backend\CacheController;
use App\Http\Controllers\Backend\CarController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\ChildCategoryController;
use App\Http\Controllers\Backend\ClientOfferController;
use App\Http\Controllers\Backend\EmailSettingsController;
use App\Http\Controllers\Backend\EmailTemplateController;
use App\Http\Controllers\Backend\EngineTypeController;
use App\Http\Controllers\Backend\FormBuilderController;
use App\Http\Controllers\Backend\FualTypeController;
use App\Http\Controllers\Backend\GeneralSettingsController;
use App\Http\Controllers\Backend\LanguageController;
use App\Http\Controllers\Backend\MaintainsPageController;
use App\Http\Controllers\Backend\Manage404PageController;
use App\Http\Controllers\Backend\MapSettings;
use App\Http\Controllers\Backend\MediaUploadController;
use App\Http\Controllers\Backend\MenuController;
use App\Http\Controllers\Backend\NoticeController;
use App\Http\Controllers\Backend\OfferController;
use App\Http\Controllers\Backend\OrderCancellationPolicyController;
use App\Http\Controllers\Backend\PageBuilderController;
use App\Http\Controllers\Backend\PagesController;
use App\Http\Controllers\Backend\PageSettingsController;
use App\Http\Controllers\Backend\RefundController;
use App\Http\Controllers\Backend\ReportReasonController;
use App\Http\Controllers\Backend\SliderController;
use App\Http\Controllers\Backend\StaffController;
use App\Http\Controllers\Backend\SubCategoryController;
use App\Http\Controllers\Backend\SuspendActiveController;
use App\Http\Controllers\Backend\UserManageController;
use App\Http\Controllers\Backend\UserServiceManageController;
use App\Http\Controllers\Backend\WidgetBuilderController;
use App\Http\Controllers\Backend\WithdrawGatewayController;
use App\Http\Controllers\Backend\RefundGatewayController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\FireBaseSettingsController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\Backend\ReviewController;
use Illuminate\Support\Facades\Route;







Route::middleware(['setlang','clear.service.session','clear.editService.session','clear.product.session','clear.editProduct.session'])->group(function () {

    //language
    Route::get('languages',[LanguageController::class, 'index'])->name('admin.languages')->permission('languages-list');
    Route::get('/languages/words/all/{id}',[LanguageController::class, 'allEditWords'])->name('admin.languages.words.all')->permission('languages-words-edit');
    Route::post('/languages/words/update/{id}',[LanguageController::class, 'updateWords'])->name('admin.languages.words.update');
    Route::post('/languages/new',[LanguageController::class, 'store'])->name('admin.languages.new')->permission('languages-add');
    Route::post('/languages/update',[LanguageController::class, 'update'])->name('admin.languages.update');
    Route::post('/languages/delete/{id}',[LanguageController::class, 'delete'])->name('admin.languages.delete')->permission('languages-delete');
    Route::post('/languages/default/{id}',[LanguageController::class, 'makeDefault'])->name('admin.languages.default');
    Route::post('/languages/clone',[LanguageController::class, 'cloneLanguages'])->name('admin.languages.clone')->permission('languages-clone');
    Route::post('/languages/add-new-word',[LanguageController::class, 'addNewWords'])->name('admin.languages.add.new.word');
    Route::post('/languages/regenerate-source-text',[LanguageController::class, 'regenerateSourceText'])->name('admin.languages.regenerate.source.texts');

    // admin commission
    Route::get('admin-commission/all',[AdminCommissionController::class, 'admin_commission_all'])->name('admin.commission.all');
    Route::post('admin-commission/update/{id?}', [AdminCommissionController::class, 'admin_commission_update'])->name('admin.commission.update');

    // Dashboard
    Route::prefix('dashboard')->group(function () {
        Route::get('/', [AdminDashboardController::class, 'adminDashboard'])->name('admin.dashboard');
        Route::get('/get-user-data', [AdminDashboardController::class, 'getUserData'])->name('admin.get.user.graph.data');
        Route::get('/get-services-data', [AdminDashboardController::class, 'getServiceData'])->name('admin.get.service.graph.data');
        Route::get('/get-products-data', [AdminDashboardController::class, 'getProductData'])->name('admin.get.product.graph.data');
        Route::get('/get-total-income-data', [AdminDashboardController::class, 'getTotalIncomeData'])->name('admin.get.total.income.graph.data');
    });

    //brand

    Route::group(['prefix' => 'brand'],function(){
        Route::controller(BrandController::class)->group(function () {
            Route::match(['get','post'],'add','add_brand')->name('admin.brand.add')->permission('admin-brand-add');
            Route::get('/list','allBrands')->name('admin.brand.all')->permission('admin-brand-list');
            Route::match(['get','post'],'/edit-brand/{id}','editBrand')->name('admin.brand.edit')->permission('admin-brand-edit');
           // Route::post('/edit-brand/{id}','editBrand')->name('admin.brand.edit');
            Route::get('/details/{id}','brandDetails')->name('admin.brand.details');
            Route::post('/delete/{id}','brandDelete')->name('admin.brand.delete')->permission('admin-brand-delete');
            Route::get('/search','searchBrand')->name('admin.brand.search');
            Route::get('/paginate','brandPaginate')->name('admin.brand.paginate.data');
            Route::post('/bulk-action','bulkAction')->name('admin.brand.bulk.action')->permission('admin-brand-bulk-delete');
            Route::post('/get-model-by-brand',[CarController::class,'getCarListByBrandId'])->name('get.car_model');
            Route::post('/get-variant-by-car',[CarController::class,'getVariantListByCarId'])->name('get.car_variant');
        });
    });

    Route::group(['prefix' => 'engine'],function(){
        Route::controller(EngineTypeController::class)->group(function () {
            Route::match(['get','post'],'add','addEngine')->name('admin.engine.add')->permission('admin-engine-add');
            Route::get('/list','allEngines')->name('admin.engine.all')->permission('admin-engine-list');
            Route::match(['get','post'],'/edit-engine/{id}','editEngine')->name('admin.engine.edit')->permission('admin-engine-edit');
           // Route::post('/edit-brand/{id}','editBrand')->name('admin.brand.edit');
            Route::get('/details/{id}','engineDetails')->name('admin.engine.details');
            Route::post('/delete/{id}','engineDelete')->name('admin.engine.delete')->permission('admin-engine-delete');
            Route::get('/search','engineSearch')->name('admin.engine.search');
            Route::get('/paginate','enginePaginate')->name('admin.engine.paginate.data');
            Route::post('/bulk-action','bulkAction')->name('admin.engine.bulk.action')->permission('admin-engine-bulk-delete');
        });
    });

    Route::group(['prefix' => 'fual'],function(){
        Route::controller(FualTypeController::class)->group(function () {
            Route::match(['get','post'],'add','addFual')->name('admin.fual.add')->permission('admin-fual-add');
            Route::get('/list','allFuals')->name('admin.fual.all')->permission('admin-fual-list');
            Route::match(['get','post'],'/edit-fual/{id}','editFual')->name('admin.fual.edit')->permission('admin-fual-edit');
           // Route::post('/edit-brand/{id}','editBrand')->name('admin.brand.edit');
            Route::get('/details/{id}','fualDetails')->name('admin.fual.details');
            Route::post('/delete/{id}','fualDelete')->name('admin.fual.delete')->permission('admin-fual-delete');
            Route::get('/search','fualSearch')->name('admin.fual.search');
            Route::get('/paginate','fualPaginate')->name('admin.fual.paginate.data');
            Route::post('/bulk-action','bulkAction')->name('admin.fual.bulk.action')->permission('admin-fual-bulk-delete');
        });
    });


     //brand

     Route::group(['prefix' => 'car'],function(){
        Route::controller(CarController::class)->group(function () {
            Route::post('/add-image','storeImage')->name("store.image.session");
            Route::match(['get','post'],'add','addCar')->name('admin.car.add')->permission('admin-car-add');
            Route::get('/list','allCars')->name('admin.car.all')->permission('admin-car-list');
            Route::match(['get','post'],'/edit-car/{id}','editCar')->name('admin.car.edit')->permission('admin-car-edit');
           // Route::post('/edit-brand/{id}','editBrand')->name('admin.brand.edit');
            Route::get('/details/{id}','carDetails')->name('admin.car.details');
            Route::post('/delete/{id}','carDelete')->name('admin.car.delete')->permission('admin-car-delete');
            Route::get('/search','carSearch')->name('admin.car.search');
            Route::get('/filter','getModelByBrandId')->name('admin.car.filter');
            Route::get('/paginate','carPaginate')->name('admin.car.paginate.data');
            Route::post('/bulk-action','bulkAction')->name('admin.car.bulk.action')->permission('admin-car-bulk-delete');
        });
    });


    Route::group(['prefix' => 'carService'],function(){
        Route::controller(CacheController::class)->group(function () {
            Route::post('/add','addServiceCar')->name('admin.carService.add')->permission('admin.carService.add');
           Route::post('/delete/{id}','carServiceDelete')->name('admin.carService.delete')->permission('admin.carService.delete');
           Route::post('/all-delete','allCarServiceDelete')->name('admin.allCarService.delete')->permission('admin.allCarService.delete');
            Route::get('/filter','searchCar')->name('admin.carService.filter')->permission('admin.carService.filter');
            Route::post('/add_editCar','editServiceCar')->name('admin.editCarService.add')->permission('admin.editCarService.add');
            Route::get('/filter_editCar','editSearchCar')->name('admin.editCarService.filter')->permission('admin.editCarService.filter');
            Route::post('/delete_editCar/{id}','carEditServiceDelete')->name('admin.editCarService.delete')->permission('admin.editCarService.delete');
        });
    });
    Route::group(['prefix' => 'carProduct'],function(){
        Route::controller(CacheController::class)->group(function () {
            Route::post('/add','addProductCar')->name('admin.carProduct.add')->permission('admin.carProduct.add');
            Route::post('/delete/{id}','carProductDelete')->name('admin.carProduct.delete')->permission('admin.carProduct.delete');
            Route::post('/all-delete','allCarProductDelete')->name('admin.allCarProduct.delete')->permission('admin.allCarProduct.delete');
            Route::get('/filter','productSearchCar')->name('admin.carProduct.filter')->permission('admin.carProduct.filter');
            Route::post('/add_editCar','editProductCar')->name('admin.editCarProduct.add')->permission('admin.editCarProduct.add');
            Route::get('/filter_editCar','editProductSearchCar')->name('admin.editCarProduct.filter')->permission('admin.editCarProduct.filter');
            Route::post('/delete_editCar/{id}','carEditProductDelete')->name('admin.editCarProduct.delete')->permission('admin.editCarProduct.delete');
        });
    });

    //oulet location manage
    Route::group(['prefix' => 'outletAddress'],function(){
        Route::controller(AdminOutletLocationController::class)->group(function () {
        Route::match(['get','post'],'add','addOutletAddress')->name('admin.outletAddress.add')->permission('admin.outletAddress.add');
        Route::get('/all','outletAddressList')->name('admin.outletAddress.all')->permission('admin.outletAddress.all');
        Route::get('/get-cities/{stateId}','getCity')->name('getCity');
        Route::get('/get-areas/{cityId}/{stateId}','getArea')->name('getArea');
        Route::match(['get','post'],'/edit-outlet/{id}','editOutlet')->name('admin.outlet.edit')->permission('admin.outletAddress.edit');
        Route::get('/details/{id}','outletDetails')->name('admin.outlet.details');
        Route::post('/delete/{id}','outletDelete')->name('admin.outlet.delete')->permission('admin.outletAddress.delete');
        Route::get('/search','outletSearch')->name('admin.outlet.search');
        Route::get('/paginate','outletPaginate')->name('admin.outlet.paginate.data');
        Route::post('/bulk-action','bulkAction')->name('admin.outlet.bulk.action')->permission('admin-outlet-bulk-delete');
        Route::post('/status/{id}','changeStatus')->name('admin.outlet.status.change');


        });
    });

    // General Settings
    Route::get('/dark-mode-toggle', 'AdminDashboardController@dark_mode_toggle')->name('admin.dark.mode.toggle');
    Route::get('/settings', [AdminDashboardController::class, 'adminSettings'])->name('admin.profile.settings');
    Route::get('/dark-mode-toggle',  [AdminDashboardController::class, 'darkModeToggle'])->name('admin.dark.mode.toggle');

    // admin profile settings
    Route::get('/logout', [AdminProfileController::class, 'adminLogout'])->name('admin.logout');
    Route::get('/profile-update', [AdminProfileController::class, 'adminProfile'])->name('admin.profile.update');
    Route::post('/profile-update', [AdminProfileController::class, 'adminProfileUpdate']);
    Route::get('/password-change',[AdminProfileController::class, 'adminPassword'])->name('admin.profile.password.change');
    Route::post('/password-change',[AdminProfileController::class, 'adminPasswordChange']);

    //account suspend active
    Route::group(['prefix' => 'account'],function(){
        Route::controller(\App\Http\Controllers\Backend\SuspendActiveController::class)->group(function () {
            Route::match(['get','post'],'suspend/{id}','suspend')->name('admin.account.suspend');
            Route::post('unsuspend/{id}','unsuspend')->name('admin.account.unsuspend');
        });
    });

    // all orders manage
    Route::group(['prefix' => 'orders/user'],function(){
        Route::controller(AdminOrderManageController::class)->group(function () {
            Route::get('/all-orders','allUserOrders')->name('admin.user.all.order');
            Route::get('/details/{id}','orderDetails')->name('admin.order.details');
            Route::get('/sub-order-addon/details/{id}','subOrderAddonDetails')->name('admin.sub.order.addon.details');
            Route::post('/status','changeStatus')->name('admin.user.order.status.change');
            Route::get('/search','searchOrder')->name('admin.user.order.search');
            Route::get('/paginate','paginate')->name('admin.user.order.paginate');
        });
    });

    // admin personal orders manage
    Route::group(['prefix' => 'orders/'],function(){
        Route::controller(AdminServiceOrderManageController::class)->group(function () {
            Route::get('/all-orders','allAdminOrders')->name('admin.service.all.orders');
            Route::get('/details/{id}/{notificationId?}','orderAdminDetails')->name('admin.main.order.details');
            Route::get('/sub-order-addon/details/{id}','adminSubOrderAddonDetails')->name('admin.main.sub.order.addon.details');
            Route::post('/status','changeAdminStatus')->name('admin.order.status.change');
            Route::get('/search','searchOrder')->name('admin.order.search');
            Route::get('/paginate','paginate')->name('admin.order.paginate');
            // payment status change
            Route::post('/change-manual-payment-status/{id}','change_payment_status')->name('admin.order.change.status');
            // order settings
            Route::get('settings', [AdminServiceOrderManageController::class, 'orderSettings'])->name('admin.order.settings');
            Route::post('settings', [AdminServiceOrderManageController::class, 'updateOrderSettings']);
            // order invoice generate
            Route::get('invoice-details/{id?}', [InvoiceController::class, 'orderInvoiceGenerate'])->name('admin.order.invoice.generate');
            // admin sub order manage
            Route::post('/sub-order-status','changeAdminSubOrderStatus')->name('admin.sub.order.status.change');

            //add staff by admin
            Route::post('/add-staff','adminStaffAdd')->name('admin.order.add-staff');
            //  // after order/booking steps
            Route::get('after-booking-steps', [AdminServiceOrderManageController::class, 'afterBookingStepsPage'])->name('admin.order.after-booking-steps');
            Route::post('after-booking-steps', [AdminServiceOrderManageController::class, 'afterBookingSteps']);
             //  // order cancellation policy
             Route::get('order-cancellation-policy', [OrderCancellationPolicyController::class, 'cancellationPolicyPage'])->name('admin.order.cancellation-policy');
             Route::post('order-cancellation-policy', [OrderCancellationPolicyController::class, 'cancellationPolicy']);
        });

        Route::get('refunded-order-list', [RefundController::class, 'refundList'])->name('admin.redunded-order.list');
        Route::get('/refund-details/{id}',[RefundController::class, 'refundDetails'])->name('admin.refunded-order.details');
        Route::post('refunded-order-status', [RefundController::class, 'changeRefundedStatus'])->name('admin.redunded-order.status');
       Route::get('/refunded-order-paginate',[RefundController::class, 'paginate'])->name('admin.refunded-order.paginate');
    });


    // services manage
    Route::group(['prefix' => 'services'],function(){

        // all admin services
        Route::controller(AdminServiceController::class)->group(function () {
            Route::get('all','adminAllServices')->name('admin.all.services')->permission('admin-service-list');
            Route::match(['get','post'],'add','adminAddService')->name('admin.add.new.service')->permission('admin-service-add');
            Route::get('/details/{id}','serviceDetails')->name('admin.service.details');
            Route::post('/make-featured/{id}','makeFeatured')->name('admin.service.make.featured')->permission('admin-service-status-change');
            Route::match(['get','post'],'/admin-edit-service/{id?}','adminEditService')->name('admin.edit.service')->permission('admin-service-edit');
            Route::get('/admin-search','adminSearchService')->name('admin.search.service');
            Route::get('/admin-paginate','adminPaginate')->name('admin.paginate.service');
            Route::post('/admin-delete/{id}','adminServiceDelete')->name('admin.delete.service')->permission('admin-service-delete');
            Route::post('/admin-bulk-action','bulkAction')->name('admin.bulk.action.service')->permission('admin-service-bulk-delete');
            Route::post('/admin-published/{id}','adminServicePublishedStatus')->name('admin.service.published.status.change.by')->permission('admin-service-published-status-change');
            Route::post('/admin-status/{id}','adminChangeStatus')->name('admin.service.status.change.by')->permission('admin-service-status-change');
        });

    });

    //all admin products
    Route::group(['prefix' => 'products'],function(){

        // all admin products
        Route::controller(AdminProductController::class)->group(function () {
            Route::get('all','adminAllProducts')->name('admin.all.products')->permission('admin-product-list');
            Route::match(['get','post'],'add','adminAddProduct')->name('admin.add.new.product')->permission('admin-product-add');
            Route::get('/details/{id}','productDetails')->name('admin.product.details');
            Route::post('/make-featured/{id}','makeFeatured')->name('admin.product.make.featured')->permission('admin-product-make-featured');
            Route::match(['get','post'],'/admin-edit-product/{id?}','adminEditProduct')->name('admin.edit.product')->permission('admin-product-edit');
            Route::get('/admin-search','adminSearchProduct')->name('admin.search.product');
            Route::get('/admin-paginate','adminPaginate')->name('admin.paginate.product');
            Route::post('/admin-delete/{id}','adminProductDelete')->name('admin.delete.product')->permission('admin-product-delete');
            Route::post('/admin-bulk-action','bulkAction')->name('admin.bulk.action.product')->permission('admin-product-bulk-delete');
            Route::post('/admin-published/{id}','adminProductPublishedStatus')->name('admin.product.published.status.change')->permission('admin-product-published-status-change');
            Route::post('/admin-status/{id}','adminChangeStatus')->name('admin.product.status.change')->permission('admin-product-status-change');
        });

    });

   // admin service staff manage
    Route::group(['prefix' => 'staff'],function(){
        Route::controller(StaffController::class)->group(function () {
            Route::match(['get','post'],'add-staff','add_staff')->name('admin.staff.add');
            Route::get('/all-staff','all_staffs')->name('admin.staff.all');
            Route::match(['get','post'],'edit-user-info/{id}','edit_info')->name('admin.staff.info.edit');
            Route::post('/status/{id}','changeStatus')->name('admin.staff.status');
            Route::post('/delete/{id}','staffDelete')->name('admin.staff.delete');
            Route::get('/search','search_staff')->name('admin.staff.search');
            Route::get('/paginate','staff_paginate')->name('admin.staff.paginate.data');
            Route::get('/staff-select-page','staffSelectPage')->name('admin.staff.select');
            Route::post('/staff-select','staffSetting')->name('admin.staff.settings');
        });
    });

    // admin service schedule manage
    Route::group(['prefix' => 'service/schedule'],function(){
        Route::controller(AdminScheduleManageController::class)->group(function () {
            Route::match(['get','post'],'add-schedule','add_schedule')->name('admin.schedule.add');
            Route::get('/list','all_schedules')->name('admin.schedule.all');
            Route::post('/edit-schedule','edit_schedule')->name('admin.schedule.info.edit');
            Route::post('/delete/{id}','scheduleDelete')->name('admin.schedule.delete');
            Route::get('/search','search_schedule')->name('admin.schedule.search');
            Route::get('/paginate','schedule_paginate')->name('admin.schedule.paginate.data');
        });
    });


    //all client  manage
    Route::group(['prefix' => 'user'],function(){
        Route::controller(\App\Http\Controllers\Backend\UserManageController::class)->group(function () {
            // add client or provider
            Route::match(['get','post'],'add-user','add_user')->name('admin.user.add')->permission('user-add');
            Route::get('all-users','all_users')->name('admin.user.all')->permission('user-list');
            Route::get('paginate/data/user', 'user_pagination')->name('admin.user.paginate.data');
            Route::get('search/user', 'search_user')->name('admin.user.search');
            Route::post('edit-user-info','edit_info')->name('admin.user.info.edit')->permission('user-edit');
            Route::post('change-user-password','change_password')->name('admin.user.password.change')->permission('user-password-change');
           Route::post('identity-details','identity_details')->name('admin.user.identity.details');


            Route::post('change-user-active-inactive-status/{id}','change_status')->name('admin.user.status')->permission('user-status-change');
            Route::post('delete/{id}','delete_user')->name('admin.user.delete')->permission('user-delete');
            Route::post('permanent-delete/{user_id}','permanent_delete')->name('admin.user.permanent.delete')->permission('user-permanent-delete');
            Route::match(['get','post'],'user-restore/{id?}','user_restore')->name('admin.user.restore');
            Route::get('paginate/delete/data', 'pagination_delete_user')->name('admin.user.paginate.delete.data');
            Route::get('delete/search-user', 'search_delete_user')->name('admin.user.delete.search');


            Route::post('disable-2-factor-authentication/{id}','disable_2fa')->name('admin.user.disable._2fa');
            Route::post('verify-user-email/{id}','verify_user_email')->name('admin.user.verify.email');

            Route::get('deactivated/users-all', 'user_deactivated_all')->name('admin.user.deactivated.all')->permission('user-deactivated-list');
            Route::get('paginate/deactivated-user', 'user_deactivated_pagination')->name('admin.user.paginate.deactivated');
            Route::get('search/deactivated-user', 'search_deactivated_user')->name('admin.user.search.deactivated');
        });
    });



    /*------------------ ADMIN CATEGORY MANAGE --------------*/
        Route::prefix('category')->group(function (){
            Route::get('/index',[CategoryController::class, 'index'])->name('admin.category')->permission('category-list');
            Route::match(['get','post'],'/add-new-category',[CategoryController::class, 'addNewCategory'])->name('admin.category.new')->permission('category-add');
            Route::match(['get','post'],'/edit-category/{id?}',[CategoryController::class, 'editCategory'])->name('admin.category.edit')->permission('category-edit');
            Route::post('/change-status/{id}',[CategoryController::class, 'changeStatus'])->name('admin.category.status')->permission('category-status-change');
            Route::post('/delete/{id}',[CategoryController::class, 'deleteCategory'])->name('admin.category.delete')->permission('category-delete');
            Route::post('/bulk-action', [CategoryController::class, 'bulkAction'])->name('admin.category.bulk.action')->permission('category-bulk-delete');
            Route::get('/search',[CategoryController::class, 'searchCategory'])->name('admin.category.search');
            Route::get('/paginate',[CategoryController::class, 'paginate'])->name('admin.category.paginate');
        });

        /*------------------ ADMIN SUBCATEGORY MANAGE --------------*/
        Route::prefix('subcategory')->group(function (){
            Route::get('/index',[SubCategoryController::class, 'index'])->name('admin.subcategory')->permission('subcategory-list');
            Route::match(['get','post'],'/add-new-subcategory',[SubcategoryController::class, 'addNewSubcategory'])->name('admin.subcategory.new')->permission('subcategory-add');
            Route::match(['get','post'],'/edit-subcategory/{id?}',[SubcategoryController::class, 'editSubcategory'])->name('admin.subcategory.edit')->permission('subcategory-edit');
            Route::post('/change-status/{id}',[SubcategoryController::class, 'changeStatus'])->name('admin.subcategory.status')->permission('subcategory-status-change');
            Route::post('/delete/{id}',[SubcategoryController::class, 'deleteSubcategory'])->name('admin.subcategory.delete')->permission('subcategory-delete');
            Route::post('/bulk-action', [SubcategoryController::class, 'bulkAction'])->name('admin.subcategory.bulk.action')->permission('subcategory-bulk-delete');
            Route::get('/search',[SubcategoryController::class, 'searchSubCategory'])->name('admin.subcategory.search');
            Route::get('/paginate',[SubcategoryController::class, 'paginate'])->name('admin.subcategory.paginate');
        });

        /*------------------ ADMIN SUBCATEGORY MANAGE --------------*/
        Route::prefix('child-category')->group(function (){
            Route::get('/index',[ChildCategoryController::class, 'index'])->name('admin.child.category')->permission('child-category-list');
            Route::match(['get','post'],'/add-new-child-category',[ChildCategoryController::class, 'addNewChildCategory'])->name('admin.child.category.new')->permission('child-category-add');
            Route::match(['get','post'],'/edit-child-category/{id?}',[ChildCategoryController::class, 'editChildCategory'])->name('admin.child.category.edit')->permission('child-category-edit');
            Route::post('/change-status/{id}',[ChildCategoryController::class, 'changeStatus'])->name('admin.child.category.status')->permission('child-category-status-change');
            Route::post('/delete/{id}',[ChildCategoryController::class, 'deleteChildCategory'])->name('admin.child.category.delete')->permission('child-category-delete');
            Route::post('/bulk-action', [ChildCategoryController::class, 'bulkAction'])->name('admin.child.category.bulk.action')->permission('child-category-bulk-delete');
            Route::get('/search',[ChildCategoryController::class, 'searchChildCategory'])->name('admin.child.category.search');
            Route::get('/paginate',[ChildCategoryController::class, 'paginate'])->name('admin.child.category.paginate');

            // get sub category for select
            Route::post('/admin-get-dependent-subcategory',[ChildCategoryController::class,'getSubcategory'])->name('admin.select.subcategory');
            Route::get('/get-subcategory-by-category',[ChildCategoryController::class,'getSubCategoryByCategoryId'])->name('admin.get.subcategory.by.category');
        });

        /*------------------ ADMIN PAGE MANAGE --------------*/
        Route::prefix('page-builder')->group(function (){
            Route::post('/update', [PageBuilderController::class, 'updateAddonContent'])->name('admin.page.builder.update');
            Route::post('/new', [PageBuilderController::class, 'storeNewAddonContent'])->name('admin.page.builder.new');
            Route::post('/delete', [PageBuilderController::class, 'delete'])->name('admin.page.builder.delete');
            Route::post('/update-order', [PageBuilderController::class, 'updateAddonOrder'])->name('admin.page.builder.update.addon.order');
            Route::post('/get-admin-markup', [PageBuilderController::class, 'getAdminPanelAddonMarkup'])->name('admin.page.builder.get.addon.markup');
        });

        /*------------------ ADMIN DYNAMIC Dynamic PAGE ROUTES --------------*/
        Route::prefix('dynamic-page')->group(function (){
            Route::get('/all',[PagesController::class, 'index'])->name('admin.page')->permission('dynamic-page-list');
            Route::get('/new',[PagesController::class, 'newPage'])->name('admin.page.new')->permission('dynamic-page-add');
            Route::post('/new',[PagesController::class, 'storeNewPage']);
            Route::get('/edit/{id}',[PagesController::class, 'editPage'])->name('admin.page.edit')->permission('dynamic-page-edit');
            Route::post('/update/{id}',[PagesController::class, 'updatePage'])->name('admin.page.update');
            Route::post('/delete/{id}',[PagesController::class, 'deletePage'])->name('admin.page.delete')->permission('dynamic-page-delete');
            Route::post('/delete/lang/all/{id}',[PagesController::class, 'deletePageLangAll'])->name('admin.page.delete.lang.all');
            Route::post('/bulk-action',[PagesController::class, 'bulkAction'])->name('admin.page.bulk.action')->permission('dynamic-page-bulk-delete');

            Route::get('/search',[PagesController::class, 'searchPage'])->name('admin.page.search');
            Route::get('/paginate',[PagesController::class, 'paginate'])->name('admin.page.paginate');
        });

         /*------------------ ADMIN Offer ROUTES --------------*/
         Route::group(['prefix' => 'offer'],function(){
            Route::controller(OfferController::class)->group(function () {
                Route::match(['get','post'],'add','addOffer')->name('admin.offer.add')->permission('offer-add');
                Route::get('/list','allOffers')->name('admin.offer.all')->permission('offer-list');
                Route::match(['get','post'],'/edit-offer/{id}/{serviceId?}','adminEditOffer')->name('admin.offer.edit')->permission('offer-edit');
               // Route::post('/edit-brand/{id}','editBrand')->name('admin.brand.edit');
                Route::get('/details/{id}','offerDetails')->name('admin.offer.details');
                Route::post('/delete/{id}','offerDelete')->name('admin.offer.delete')->permission('offer-delete');
               Route::get('/search','offerSearch')->name('admin.offer.search');
               Route::get('/paginate','offerPaginate')->name('admin.offer.paginate');
               Route::post('/admin-status/{id}','adminChangeStatus')->name('admin.offer.status.change')->permission('offer-status-change');
               Route::post('/admin-primary/{id}','adminChangePrimaryOption')->name('admin.offer.primaryOption.change')->permission('offer-primaryOption-change');
               Route::post('/bulk-action','bulkAction')->name('admin.offer.bulk.action')->permission('admin-offer-bulk-delete');
            });
        });



        /*------------------ ADMIN PAGE BUILDER ROUTES --------------*/
        Route::group(['prefix' => 'page-builder','middleware' => 'auth:admin','setlang'],function () {
            Route::get('/home-page', [PageBuilderController::class, 'homePageBuilder'])->name('admin.home.page.builder');
            Route::post('/home-page', [PageBuilderController::class, 'updateHomePageBuilder']);
            Route::get('/about-page', [PageBuilderController::class, 'aboutPageBuilder'])->name('admin.about.page.builder');
            Route::post('/about-page', [PageBuilderController::class, 'updateAboutPageBuilder']);
            Route::get('/contact-page', [PageBuilderController::class, 'contactPageBuilder'])->name('admin.contact.page.builder');
            Route::post('/contact-page', [PageBuilderController::class, 'updateContactPageBuilder']);
            Route::get('/dynamic-page/{type}/{id}', [PageBuilderController::class, 'dynamicPageBuilder'])->name('admin.dynamic.page.builder');
            Route::post('/dynamic-page', [PageBuilderController::class, 'updateDynamicPageBuilder'])->name('admin.dynamic.page.builder.store');
        });


        /*------------------ ADMIN Google Map SETTINGS  --------------*/
        Route::prefix('map-settings')->group(function (){
            Route::get('/add-page', [MapSettings::class, 'addMapSettings'])->name('admin.map.settings.page')->permission('google-map-settings');
            Route::post('/add-page', [MapSettings::class, 'UpdateMapSettings']);
        });

       /*------------------ ADMIN Appearance SETTINGS  --------------*/
        Route::prefix('appearance-settings')->group(function (){
            // Color Settings
            Route::get('/color-settings',[GeneralSettingsController::class, 'colorSettings'])->name('admin.general.color.settings')->permission('color-settings');
            Route::post('/color-settings',[GeneralSettingsController::class, 'updateColorSettings']);

            // media upload
            Route::get('/media-upload/page',[MediaUploadController::class, 'allUploadMediaImagesForPage'])->name('admin.upload.media.images.page')->permission('media-upload');
            Route::post('/media-upload/delete',[MediaUploadController::class, 'deleteUploadMediaFile'])->name('admin.upload.media.file.delete')->permission('media-upload-delete');

            //404 page manage
            Route::get('404-page-manage',[Manage404PageController::class, 'error404pageSettings'])->name('admin.404.page.settings')->permission('404-page-settings');
            Route::post('404-page-manage',[Manage404PageController::class, 'update404PageSettings']);

            // maintains page
            Route::get('/maintains-page',[MaintainsPageController::class, 'maintainsPageSettings'])->name('admin.maintains.page.settings')->permission('maintains-page-settings');
            Route::post('/maintains-page-update',[MaintainsPageController::class, 'updateMaintainsPageSettings'])->name('admin.maintains.page.update.settings');

            //menu builder
            Route::group(['prefix' => 'menu'],function(){
                Route::controller(MenuController::class)->group(function () {
                    Route::match(['get','post'],'/all','menu')->name('admin.menu')->permission('menu-list');
                    Route::get('/menu-edit/{id}','edit_menu')->name('admin.menu.edit')->permission('menu-edit');
                    Route::post('/menu-update/{id}','update_menu')->name('admin.menu.update')->permission('menu-edit');
                    Route::post('/menu-delete/{id}','delete_menu')->name('admin.menu.delete')->permission('menu-delete');
                    Route::post('/menu-default/{id}','set_default_menu')->name('admin.menu.default');
                    Route::post('/mega-menu', 'mega_menu_item_select_markup')->name('admin.mega.menu.item.select.markup');
                });
            });

            // widget builder
            Route::controller(WidgetBuilderController::class)->group(function () {
                Route::group(['prefix' => 'widgets'],function(){
                    Route::get('/all','widgets')->name('admin.widget')->permission('widget-list');
                    Route::post('/create','new_widget')->name('admin.widgets.new')->permission('widget-add');
                    Route::post('/markup','widget_markup')->name('admin.widgets.markup');
                    Route::post('/update','update_widget')->name('admin.widgets.update')->permission('widget-update');
                    Route::post('/update/order','update_order_widget')->name('admin.widgets.update.order')->permission('widget-update');
                    Route::post('/delete','delete_widget')->name('admin.widgets.delete')->permission('widget-delete');
                });
            });

            // form builder
            Route::controller(FormBuilderController::class)->group(function () {
                Route::group(['prefix' => 'form'],function(){
                    Route::match(['get','post'],'/all','form')->name('admin.form')->permission('form-list');
                    Route::get('/form-edit/{id}','edit_form')->name('admin.form.edit')->permission('form-edit');
                    Route::post('/form-update/{id?}','update_form')->name('admin.form.update')->permission('form-edit');
                    Route::post('/form-delete/{id}','delete_form')->name('admin.form.delete')->permission('form-delete');
                    Route::post('/bulk-action', 'bulk_action')->name('admin.delete.bulk.action.form')->permission('form-bulk-delete');
                });
            });

        });

        /*------------------ ADMIN NOTICE SETTINGS  --------------*/
         Route::controller(AdminNotificationController::class)->group(function () {
            Route::prefix('notification')->group(function (){
                Route::get('/all','all_notification')->name('admin.notification.all')->permission('notifications-list');
                Route::post('all/read','read_notification')->name('admin.notification.read');
                Route::get('search-notification', 'search_notification')->name('admin.notification.search');
                Route::get('paginate/data', 'pagination')->name('admin.notification.paginate.data');
            });
        });

        Route::post('/notification/send/client',[ClientOfferController::class,'sendOfferNotification'])->name("Client.sendNotification");

        /*------------------ ADMIN NOTICE SETTINGS  --------------*/
        Route::prefix('notice')->group(function (){
            Route::get('/all',[NoticeController::class, 'allNotice'])->name('admin.all.notice')->permission('notice-list');
            Route::get('/add/page',[NoticeController::class, 'addNoticePage'])->name('admin.add.notice.page')->permission('notice-add');
            Route::post('/add',[NoticeController::class, 'addNotice'])->name('admin.add.notice');
            Route::get('/edit/{id}',[NoticeController::class, 'noticeEdit'])->name('admin.notice.edit')->permission('notice-edit');
            Route::post('/update',[NoticeController::class, 'noticeUpdate'])->name('admin.notice.update');
            Route::post('/delete-user/{id}',[NoticeController::class, 'newNoticeDelete'])->name('admin.delete.notice')->permission('notice-delete');
            Route::post('/status/{id}',[NoticeController::class, 'changeStatus'])->name('admin.notice.status')->permission('notice-status-change');
            Route::get('/search',[NoticeController::class, 'searchNotice'])->name('admin.notice.search');
            Route::get('/paginate',[NoticeController::class, 'paginate'])->name('admin.notice.paginate');
        });

        /*------------------ ADMIN ALL PAGE SETTINGS  --------------*/
        Route::prefix('page-settings')->group(function (){
            Route::match(['get', 'post'], '/register-page', [PageSettingsController::class, 'loginRegisterPageSettings'])->name('admin.login.register.page.settings')->permission('login-register-page-settings');
            Route::match(['get', 'post'], '/service-create-page/settings', [PageSettingsController::class, 'serviceCreateSettings'])->name('admin.service.create.settings')->permission('service-create-page-settings');
            Route::match(['get', 'post'], '/user-public-profile/settings', [PageSettingsController::class, 'userPublicProfileSettings'])->name('admin.user.public.profile.settings')->permission('user-public-profile-page-settings');
            Route::match(['get', 'post'], '/admin-login-page/settings', [PageSettingsController::class, 'adminLoginPageSettings'])->name('admin.login.page.settings')->permission('user-public-profile-page-settings');
        });

        /*------------------ EMAIL SETTINGS MANAGE --------------*/
        Route::prefix('email-settings')->group(function (){
            Route::post('/basic-settings',[EmailSettingsController::class, 'updateEmailSettings']);
            //smtp settings
            Route::get('/smtp',[EmailSettingsController::class, 'smtpSettings'])->name('admin.email.smtp.settings')->permission('smtp-settings');
            Route::post('/update-smtp',[EmailSettingsController::class, 'updateSmtpSettings'])->name('admin.email.smtp.update.settings');
            Route::post('/test-smtp', [EmailSettingsController::class, 'testSmtpSettings'])->name('admin.email.smtp.settings.test');

            //All Email  Templates
            Route::get('/all-email-templates', [EmailTemplateController::class, 'allEmailTemplates'])->name('admin.email.template.all');
            Route::match(['get', 'post'], '/global-template', [EmailTemplateController::class, 'globalEmailTemplateSettings'])->name('admin.email.global.template');
            Route::match(['get', 'post'], '/user/register/template', [EmailTemplateController::class, 'userRegisterTemplate'])->name('admin.email.user.register.template');
            Route::match(['get', 'post'], '/user/identity-verification/template', [EmailTemplateController::class, 'userIdentityVerificationTemplate'])->name('admin.email.user.identity.verification.template');
            Route::match(['get', 'post'], '/user/email-verify/template', [EmailTemplateController::class, 'userEmailVerifyTemplate'])->name('admin.email.user.verify.template');
            Route::match(['get', 'post'], '/user/wallet-deposit/template', [EmailTemplateController::class, 'userWalletDepositTemplate'])->name('admin.email.user.wallet.deposit.template');
            Route::match(['get', 'post'], '/user/new-service-approval/template', [EmailTemplateController::class, 'userNewServiceApprovalTemplate'])->name('admin.email.user.new.service.approval.template');
            Route::match(['get', 'post'], '/user/new-service-publish/template', [EmailTemplateController::class, 'userNewServicePublishTemplate'])->name('admin.email.user.new.service.publish.template');
            Route::match(['get', 'post'], '/user/new-service-unpublished/template', [EmailTemplateController::class, 'userNewServiceUnpublishedTemplate'])->name('admin.email.user.new.service.unpublished.template');

            // order email template
            Route::match(['get', 'post'], '/orders/new-order/template', [EmailTemplateController::class, 'newOrderTemplate'])->name('admin.email.new.order.template');
     });

        /*------------------ GENERAL SETTINGS MANAGE --------------*/
        Route::prefix('general-settings')->group(function (){
            Route::match(['get','post'],'/reading',[GeneralSettingsController::class, 'reading'])->name('admin.general.settings.reading')->permission('reading-settings');
            Route::get('/site-identity',[GeneralSettingsController::class, 'siteIdentity'])->name('admin.general.site.identity')->permission('site-identity-settings');
            Route::post('/site-identity',[GeneralSettingsController::class, 'updateSiteIdentity']);

            Route::get('/basic-settings',[GeneralSettingsController::class, 'basicSettings'])->name('admin.general.basic.settings')->permission('basic-settings');
            Route::post('/basic-settings',[GeneralSettingsController::class, 'updateBasicSettings']);

            Route::get('/scripts',[GeneralSettingsController::class, 'scriptsSettings'])->name('admin.general.scripts.settings')->permission('scripts-settings');
            Route::post('/scripts',[GeneralSettingsController::class, 'updateScriptsSettings']);

            //license-setting
            Route::get('/license-setting',[GeneralSettingsController::class, 'licenseSettings'])->name('admin.general.license.settings')->permission('license-setting');
            Route::post('/license-setting',[GeneralSettingsController::class, 'updateLicenseSettings']);

            //cache settings
            Route::get('/cache-settings',[GeneralSettingsController::class, 'cacheSettings'])->name('admin.general.cache.settings')->permission('cache-setting');
            Route::post('/cache-settings',[GeneralSettingsController::class, 'updateCacheSettings']);

            //database upgrade
            Route::get('/database-upgrade', [GeneralSettingsController::class, 'databaseUpgrade'])->name('admin.general.database.upgrade')->permission('database-upgrade-setting');
            Route::post('/database-upgrade', [GeneralSettingsController::class, 'databaseUpgradePost']);

            Route::post('/license-setting-verify', [GeneralSettingsController::class, 'licenseKeyGenerate'])->name('admin.general.license.key.generate')->permission('license-key-generate');
            Route::get('/update-check', [GeneralSettingsController::class, 'updateVersionCheck'])->name('admin.general.update.version.check')->permission('update-version-check');
            Route::post('/download-update/{productId}/{tenant}', [GeneralSettingsController::class, 'updateDownloadLatestVersion'])->name('admin.general.update.download.settings');
            Route::get('/software-update-setting', [GeneralSettingsController::class, 'softwareUpdateCheckSettings'])->name('admin.general.software.update.settings')->permission('software-update-settings');
            Route::match(['get','post'],'/seo-settings',[GeneralSettingsController::class,'seo_settings'])->name('general.settings.seo')->permission('seo-settings');
        });


   // manage refund
   Route::prefix('refund/')->group(function (){
         Route::controller(RefundGatewayController::class)->group(function () {
            Route::get('gateway/settings','gateway_settings')->name('admin.refund.gateway')->permission('refund-payment-gateway-list');
            Route::post('gateway/create','gateway_create')->name('admin.refund.gateway.create')->permission('refund-payment-gateway-add');
            Route::post('gateway/update/{id?}','gateway_update')->name('admin.refund.gateway.update')->permission('refund-payment-gateway-edit');
            Route::post('change-status/{id}','change_status')->name('admin.refund.gateway.status')->permission('refund-payment-status-change');
            Route::post('delete-gateway/{id}', 'delete_gateway')->name('admin.refund.gateway.delete')->permission('refund-payment-gateway-delete');

        });
    });

    //review list

    Route::group(['prefix' => 'review'],function(){
        Route::controller(ReviewController::class)->group(function () {
            Route::get('all','allReviews')->name('admin.review.all')->permission('review-list');
            Route::get('/details/{id}','reviewDetails')->name('admin.review.details');
            Route::post('delete/{id}','reviewDelete')->name('admin.review.delete')->permission('review-delete');
            Route::get('paginate/data', 'reviewPaginate')->name('admin.review.paginate');
            Route::get('search', 'reviewSearch')->name('admin.review.search');
            Route::post('change-status/{id}','reviewStatus')->name('admin.review.status')->permission('admin-review-status');
        });
    });

    // mobile slider manage
    Route::prefix('slider/')->group(function (){
         Route::controller(SliderController::class)->group(function () {
             Route::match(['get','post'],'/add','add_new_slider')->name('admin.slider.add');
             Route::match(['get','post'],'/edit/{id?}','edit_slider')->name('admin.slider.edit');
             Route::post('/delete/{id}','delete_slider')->name('admin.slider.delete');
             Route::post('/bulk-action', 'bulk_action')->name('admin.slider.bulk.action');
        });
    });

    //  report reasons
    Route::controller(ReportReasonController::class)->group(function () {
        Route::match(['get','post'],'report/reason/all','all_reason')->name('admin.report.reason.all')->permission('report-reason-list');
        Route::post('report/reason/edit-reason','edit_reason')->name('admin.report.reason.edit')->permission('report-reason-edit');
        Route::post('report/reason/delete/{id}','delete_reason')->name('admin.report.reason.delete')->permission('report-reason-delete');
        Route::post('report/reason/bulk-action', 'bulk_action_reason')->name('admin.report.reason.delete.bulk.action')->permission('report-reason-bulk-delete');
        Route::get('report/reason/paginate/data', 'pagination')->name('admin.report.reason.paginate.data');
        Route::get('report/reason/search', 'search_reason')->name('admin.report.reason.search');
    });
    // firebase settings
    Route::match(['get','post'],'firebase/settings', [FireBaseSettingsController::class, 'uploadFirebaseJson'])->name('admin.firebase.settings');

});

    // media upload routes end
    Route::post('/media-upload/all', [MediaUploadController::class,'allUploadMediaFile'])->name('admin.upload.media.file.all');
    Route::post('/media-upload', [MediaUploadController::class,'uploadMediaFile'])->name('admin.upload.media.file');
    Route::post('/media-upload/alt', [MediaUploadController::class,'altChangeUploadMediaFile'])->name('admin.upload.media.file.alt.change');
    // media upload routes for restrict user in demo mode
    Route::post('/media-upload/loadmore',  [MediaUploadController::class,'getImageForLoadmore'])->name('admin.upload.media.file.loadmore');

