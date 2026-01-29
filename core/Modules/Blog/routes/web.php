<?php

use Illuminate\Support\Facades\Route;
use Modules\Blog\app\Http\Controllers\Frontend\BlogController;

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
require_once __DIR__ . '/admin.php';

Route::group(['prefix' => 'blogs','middleware' => ['globalVariable','setlang']], function () {
    // Job Post
    Route::controller(BlogController::class)->group(function () {
        Route::get('/', 'allBlogList')->name('frontend.blog.list');
        Route::get('/category/{slug}', 'searchByCategory')->name('frontend.blog.category.wise.list');
        Route::get('/tag-name/{tag}', 'searchByTag')->name('frontend.blog.tag.wise.list');
        Route::get('/{slug}', 'blogDetails')->name('frontend.blog.details');

    });
});
