<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserCartItem;
use App\Models\UserSelectedCar;
use App\Models\UserSocialInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    public function facebook_redirect()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function facebook_callback()
    {
        try {
            $user_fb_details = Socialite::driver('facebook')->user();
            $user_details = User::where('email', $user_fb_details->getEmail())->first();

            if ($user_details) {
                Auth::login($user_details);
                if($user_details){
                    $guestToken = Cookie::get('guest_token');
                    if ($guestToken) {
                        $guestCar = UserSelectedCar::where('guest_token', $guestToken)->first();
                        $existingCar = UserSelectedCar::where('user_id', $user_details->id)->first();

                        if ($guestCar && $existingCar) {
                            // Conflict exists: show choice to user
                            session([
                                'car_merge_conflict' => [
                                    'guest_car_id' => $guestCar->car_id,
                                    'user_car_id' => $existingCar->car_id,
                                ]
                            ]);

                            // Redirect to a page/modal to ask user choice
                            return redirect()->route('car.merge.confirm');
                        } elseif ($guestCar) {
                            // No conflict, assign guest car to user
                            $guestCar->update([
                                'user_id' => $user_details->id,
                                'guest_token' => null,
                            ]);

                            // Move cart items - avoid duplicates
                            $guestCartItems = UserCartItem::where('guest_token', $guestToken)->get();

                            foreach ($guestCartItems as $item) {
                                // Assign guest item to user
                                $item->update([
                                    'user_id' => $user_details->id,
                                    'guest_token' => null,
                                ]);
                            }
                        }
                        // Clear guest token
                        Cookie::forget('guest_token');
                    }
                    return redirect()->intended('client/dashboard');
                }
            } else {
                $new_user = User::create([
                    'username' => 'fb_' . explode('@', $user_fb_details->getEmail())[0],
                    'first_name' => $user_fb_details->getName(),
                    'last_name' => $user_fb_details->getName(),
                    'email' => $user_fb_details->getEmail(),
                    'email_verified' => 1,
                    'terms_condition' => 1,
                    'password' => Hash::make(\Illuminate\Support\Str::random(8))
                ]);

                // Create a new record
                UserSocialInfo::create([
                    'user_id' => $new_user->id,
                    'facebook_id' =>$user_fb_details->getId(),
                ]);

                Auth::login($new_user);
                $guestToken = Cookie::get('guest_token');
                if ($guestToken) {
                    $guestCar = UserSelectedCar::where('guest_token', $guestToken)->first();
                    $existingCar = UserSelectedCar::where('user_id', $new_user->id)->first();

                    if ($guestCar && $existingCar) {
                        // Conflict exists: show choice to user
                        session([
                            'car_merge_conflict' => [
                                'guest_car_id' => $guestCar->car_id,
                                'user_car_id' => $existingCar->car_id,
                            ]
                        ]);

                        // Redirect to a page/modal to ask user choice
                        return redirect()->route('car.merge.confirm');
                    } elseif ($guestCar) {
                        // No conflict, assign guest car to user
                        $guestCar->update([
                            'user_id' => $new_user->id,
                            'guest_token' => null,
                        ]);

                        // Move cart items - avoid duplicates
                        $guestCartItems = UserCartItem::where('guest_token', $guestToken)->get();

                        foreach ($guestCartItems as $item) {
                            // Assign guest item to user
                            $item->update([
                                'user_id' => $new_user->id,
                                'guest_token' => null,
                            ]);
                        }
                    }
                    // Clear guest token
                    Cookie::forget('guest_token');
                }
                return redirect()->intended('client/dashboard');
            }
        } catch (\Exception $e) {
            return redirect()->intended('login')->with(['msg' => $e->getMessage(), 'type' => 'danger']);
        }
    }

    public function google_redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function google_callback()
    {
        try {
            $user_go_details = Socialite::driver('google')->user();
            $user_details = User::where('email', $user_go_details->getEmail())->first();

            if ($user_details) {
                Auth::login($user_details);
                return redirect()->intended('client/dashboard');

            } else {
                $new_user = User::create([
                    'username' => 'go_' . explode('@', $user_go_details->getEmail())[0],
                    'first_name' => $user_go_details->getName(),
                    'last_name' => $user_go_details->getName(),
                    'email' => $user_go_details->getEmail(),
                    'email_verified' => 1,
                    'terms_condition' => 1,
                    'password' => Hash::make(\Illuminate\Support\Str::random(8))
                ]);
                // Create a new record

                UserSocialInfo::create([
                    'user_id' => $new_user->id,
                    'google_id' => $user_go_details->getId(),
                ]);

                Auth::login($new_user);
                return redirect()->intended('client/dashboard');
            }
        } catch (\Exception $e) {
            return redirect()->intended('login')->with(['msg' => $e->getMessage(), 'type' => 'danger']);
        }
    }
}
