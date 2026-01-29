<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;


class GuestTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // If user not logged in and no guest_token yet, create one
        if (!auth()->check() && !session()->has('guest_token')) {
            session(['guest_token' => (string) Str::uuid()]);
        }

        return $next($request);
    }
}
