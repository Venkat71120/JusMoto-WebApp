<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\User;
use App\Models\UserCartItem;
use App\Models\UserSelectedCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class SigninController extends Controller
{

    public function showSocialLoginForm()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user) {
                return redirect()->route('user.dashboard');
            }

        }
        return view('auth.client.socialSignIn');
    }

    public function showLoginForm()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user) {
                return redirect()->route('user.dashboard');
            }

        }
        return view('auth.client.signin');
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            toastr_error($validator->errors()->first());
            // Return errors as JSON
            return redirect()->back()->withInput();
        }

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials, $request->get('remember'))) {
            $request->session()->regenerate();
            $user = Auth::user(); // logged-in user
            $guestToken = Cookie::get('guest_token');
            if ($guestToken) {

                $guestCar = UserSelectedCar::where('guest_token', $guestToken)->first();
                $existingCar = UserSelectedCar::where('user_id', $user->id)->first();

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
                        'user_id' => $user->id,
                        'guest_token' => null,
                    ]);

                    // Move cart items - avoid duplicates
                    $guestCartItems = UserCartItem::where('guest_token', $guestToken)->get();

                    foreach ($guestCartItems as $item) {
                        // Assign guest item to user
                        $item->update([
                            'user_id' => $user->id,
                            'guest_token' => null,
                        ]);
                    }
                }
                // Clear guest token
                Cookie::forget('guest_token');
            }
            toastr_success(__('Login Successful!'));

            if (session()->has('redirect_after_login')) {
                $url = session('redirect_after_login');
                session()->forget('redirect_after_login');
                return redirect($url);
            }
            return redirect()->route('user.dashboard');
        }
        toastr_error(__('Wrong Credentials'));
        return back()->withInput();
    }


    public function showUserForgetPasswordForm()
    {
        return view('auth.client.forget-password');
    }

    public function showUserResetPasswordForm($username, $token)
    {
        return view('auth.client.reset-password')->with([
            'username' => $username,
            'token' => $token
        ]);
    }

    public function sendUserForgetPasswordMail(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required|string:max:191'
        ]);

        if ($validator->fails()) {
            //handle error
            return redirect()->back()->with([
                'msg' => __('Enter your username or email'),
                'type' => 'danger'
            ]);
        }

        $user_info = User::where('username', $request->username)->orWhere('email', $request->username)->first();

        if(is_null($user_info)){
            return redirect()->back()->with([
                'msg' => __('your username or email does not found in our server'),
                'type' => 'danger'
            ]);
        }

        $token_id = Str::random(30);
        $existing_token = DB::table('password_resets')->where('email', $user_info->email)->delete();
        DB::table('password_resets')->insert(['email' => $user_info->email, 'token' => $token_id]);


        $message = __('Hello').' '.$user_info->username."\n";
        $message .= __('Here is you password reset link, If you did not request to reset your password just ignore this mail.') . ' <a class="btn" href="' . route('user.reset.password', ['user' => $user_info->username, 'token' => $token_id]) . '">' . __('Click Reset Password') . '</a>';
        $subject = __('Your Mail For Reset Password Link');
        try{
            Mail::to($user_info->email)->send(new BasicMail([
                'subject' => $subject,
                'message' => $message
            ]));

            return redirect()->back()->with([
                'msg' => __('Check Your Mail For Reset Password Link'),
                'type' => 'success'
            ]);
        }catch(\Exception $e){
            //handle error
            return redirect()->back()->with([
                'msg' => $e->getMessage(),
                'type' => 'danger'
            ]);
        }
    }

    public function UserResetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'username' => 'required',
            'new_password' => [
                'required',
                'string',
                'min:8',
                'confirmed',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
            ]
        ]);

        if ($validator->fails()) {
            //handle error
            return redirect()->back()->with([
                'msg' => $validator->errors()->first(),
                'type' => 'danger'
            ]);
        }
        $user_info = User::where('username', $request->username)->orWhere('email', $request->username)->first();
        $user = User::findOrFail($user_info?->id);
        $token_iinfo = DB::table('password_resets')->where(['email' => $user_info->email, 'token' => $request->token])->first();
        if (!empty($token_iinfo)) {
            $user->password = Hash::make($request->new_password);
            $user->save();
            toastr_success(__('Password Changed Successfully'));
            return redirect()->route('auth.login');
        }
        toastr_error(__('Somethings Going Wrong! Please Try Again or Check Your Old Password'));
        return redirect()->back();
    }



    public function logout(Request $request)
    {
        Auth::logout(); // remove user auth

        $request->session()->invalidate(); // clear all session data
        $request->session()->regenerateToken(); // regenerate CSRF token

        toastr_success(__('You have been logged out successfully.'));

        return redirect()->route('auth.login');
    }





}
