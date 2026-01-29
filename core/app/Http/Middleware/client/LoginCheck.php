<?php

namespace App\Http\Middleware\client;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class LoginCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::check() && Auth::user()->email_verified==1)
        {
            return $next($request);

        }else if(Auth::check() && Auth::user()->email_verified==0 && !empty(get_static_option('user_email_verify_enable_disable')))
        {
            return redirect()->route('email.verify');

        }else if(Auth::check() && Auth::user()->email_verified==0 && empty(get_static_option('user_email_verify_enable_disable')))
        {
            return $next($request);

        }

        return redirect()->route('auth.login');
    }
}
