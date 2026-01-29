<?php

use Illuminate\Support\Facades\Route;



Route::group(['as'=>'admin.','prefix'=>'admin/blog','middleware' => ['auth:admin','setlang']],function() {
    Route::get('all-blog', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@all_blog')->name('blog.index')->permission('blog-list');
    Route::get('create', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@create')->name('blog.create')->permission('blog-add');
    Route::post('store', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@store')->name('blog.store');
    Route::get('edit/{id}', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@edit')->name('blog.edit')->permission('blog-edit');
    Route::post('update/{id}', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@update')->name('blog.update');
    Route::post('delete/{id}', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@destroy')->name('blog.delete')->permission('blog-delete');
    //pagination
    Route::get('pagination', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@pagination')->name('blog.paginate.data');
    //search
    Route::get('search', 'Modules\Blog\app\Http\Controllers\Admin\BlogController@search_blog')->name('blog.search');
});
