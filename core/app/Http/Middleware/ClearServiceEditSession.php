<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class ClearServiceEditSession
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
        $editUrl="admin/services/admin-edit-service";
        $filterUrl="admin/carService/filter";
        if (!$request->is("*$editUrl*") && !$request->is("*$filterUrl*") && !$request->is("admin/media-upload/*") && !$request->is("admin/brand/get-variant-by-car") && !$request->is($urlToCheck) && !$request->is("*$debugbarUrl*") && !in_array(Route::currentRouteName(), ['admin.editCarService.add','admin.editCarService.delete','admin.allCarService.delete'])) {
            session()->forget('editValues');
        }
        return $next($request);
    }
}
