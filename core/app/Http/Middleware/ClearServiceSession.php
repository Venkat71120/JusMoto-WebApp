<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class ClearServiceSession
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
        if (!$request->is("admin/media-upload/*") && !$request->is("admin/brand/get-variant-by-car") && !$request->is($urlToCheck) && !$request->is("*$debugbarUrl*") && !in_array(Route::currentRouteName(), ['admin.add.new.service', 'admin.carService.add', 'admin.carService.delete','admin.carService.filter','admin.allCarService.delete'])) {
            session()->forget('values');
        }
        return $next($request);
    }
}
