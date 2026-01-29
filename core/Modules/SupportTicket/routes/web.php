<?php

use Illuminate\Support\Facades\Route;
use Modules\SupportTicket\app\Http\Controllers\Backend\DepartmentController;
use Modules\SupportTicket\app\Http\Controllers\Backend\SupportTicketController;
use Modules\SupportTicket\app\Http\Controllers\Backend\SupportTicketEmailTemplateController;
use Modules\SupportTicket\app\Http\Controllers\Frontend\TicketController;




// Support Ticket Admin
Route::get('/client/tickets', [TicketController::class, 'index'])->name('tickets.index');
Route::post('/client/tickets', [TicketController::class, 'store'])->name('ticket.store');
Route::put('/client/tickets/{id}', [TicketController::class, 'update'])->name('ticket.update');
Route::match(['get','post'],'/client/ticket/{id}/{notificationId?}', [TicketController::class, 'ticket_details'])->name('ticket.details');






Route::group([], function () {
    Route::resource('supportticket', SupportTicketController::class)->names('supportticket');
});


//admin routes
Route::group(['as'=>'admin.','prefix'=>'admin/support-ticket','middleware' => ['auth:admin','setlang']],function() {
    //department
    Route::match(['get', 'post'], '/department', [DepartmentController::class, 'department'])->name('department')->permission('department-list');
    Route::post('edit-department', [DepartmentController::class, 'edit_department'])->name('department.edit')->permission('department-edit');
    Route::post('department-change-status/{id}', [DepartmentController::class, 'change_status'])->name('department.status')->permission('department-status-change');
    Route::post('delete-department/{id}', [DepartmentController::class, 'delete_department'])->name('department.delete')->permission('department-delete');
    Route::post('department-bulk-action', [DepartmentController::class, 'bulk_action'])->name('department.delete.bulk.action')->permission('department-bulk-delete');
    //ticket
    Route::match(['get', 'post'], '/tickets', [SupportTicketController::class, 'ticket'])->name('ticket')->permission('support-ticket-list');
    Route::get('/pagination', [SupportTicketController::class, 'paginate'])->name('ticket.paginate.data');
    Route::post('/search', [SupportTicketController::class, 'search_ticket'])->name('ticket.search');
    Route::post('change-status/{id}', [SupportTicketController::class, 'change_status'])->name('ticket.status')->permission('support-ticket-status-change');
    Route::post('delete-ticket/{id}', [SupportTicketController::class, 'delete_ticket'])->name('ticket.delete')->permission('support-ticket-delete');
    Route::post('bulk-action', [SupportTicketController::class, 'bulk_action'])->name('ticket.delete.bulk.action')->permission('support-ticket-bulk-delete');
    Route::match(['get','post'],'/details/{id}/{notificationId?}', [SupportTicketController::class, 'ticket_details'])->name('ticket.details')->permission('support-ticket-details');


    /*------------------ EMAIL SETTINGS MANAGE --------------*/
    Route::prefix('email-settings')->group(function (){
     Route::match(['get', 'post'], '/user/support-ticket/to-admin-template',[SupportTicketEmailTemplateController::class,'supportTicketToAdminTemplate'])->name('user.support.ticket.to.admin.template');
     Route::match(['get', 'post'], '/user/support-ticket/to-user-template',[SupportTicketEmailTemplateController::class,'supportTicketToUserTemplate'])->name('user.support.ticket.to.user.template');
    });

});
