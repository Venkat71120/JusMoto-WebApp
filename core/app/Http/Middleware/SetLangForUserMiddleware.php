<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class SetLangForUserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user=User::where("id",Auth::user()->id)->first();
        $lang_slug = $user->selected_lang ?? 'en';
        app()->setLocale($lang_slug);
        Carbon::setLocale($lang_slug);

        return $next($request);
    }
}
