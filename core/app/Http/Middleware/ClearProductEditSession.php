<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class ClearProductEditSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $urlToCheck="admin/brand/get-model-by-brand";
        $debugbarUrl = "_debugbar/open";
        $editUrl="admin/products/admin-edit-product";
        $filterUrl="admin/carProduct/filter_editCar";
        if (!$request->is("*$editUrl*") && !$request->is("*$filterUrl*") && !$request->is("admin/media-upload/*") && !$request->is("admin/brand/get-variant-by-car") && !$request->is($urlToCheck) && !$request->is("*$debugbarUrl*") && !in_array(Route::currentRouteName(), ['admin.editCarProduct.add','admin.editCarProduct.delete','admin.allCarProduct.delete'])) {
            session()->forget('editProductValues');
        }
        return $next($request);
    }
}
