<?php
namespace App\Http\Controllers\Frontend\Auth;
use App\Models\User;
use App\Mail\BasicMail;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use App\Models\UserCartItem;
use Illuminate\Http\Request;
use App\Models\UserSelectedCar;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Modules\Wallet\app\Models\Wallet;
use App\Jobs\SendRegisterUserEmailJob;
use Illuminate\Support\Facades\Validator;
use Modules\SMSGateway\app\Models\UserOtp;
use Modules\SMSGateway\app\Http\Traits\OtpGlobalTrait;

class SignupController extends Controller
{
    use OtpGlobalTrait;
    public function showSignupForm()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user) {
                return redirect()->route('user.dashboard');
            }

        }
        return view('auth.client.signup');
    }
    public function signup(Request $request)
    {

        //  Validate
        $validatedData = Validator::make($request->all(), [
            'email' => 'required|email|unique:users|max:191',
            'password' => [
                'required',
                'string',
                'min:8',
                'max:191',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
            ],
            'confirm_password' => 'required|same:password',
            'agree' => 'required|in:on',
        ]);

        if ($validatedData->fails()) {
            toastr_error($validatedData->errors()->first());
            // Return errors as JSON
            return redirect()->back()->withInput();
        }

        if(!empty(get_static_option('site_google_captcha_enable'))){
            $validatedDataCaptcha = Validator::make($request->all(), [
                'g-recaptcha-response' => 'required',
            ]);
            if ( $validatedDataCaptcha->fails()) {
                toastr_error( $validatedDataCaptcha->errors()->first());
                return redirect()->back()->withInput();
            }
            // Verify with Google using the secret key
            $secretKey = get_static_option('recaptcha_2_secret_key') ?? '';
            $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

            $response = Http::asForm()->post($verifyUrl, [
                'secret'   => $secretKey,
                'response' => $request->input('g-recaptcha-response'),
                'remoteip' => $request->ip(),
            ]);

            $googleResult = $response->json();

            if (empty($googleResult['success']) || $googleResult['success'] !== true) {
                toastr_error('Captcha verification failed.');
                return redirect()->back()->withInput();
            }
        }

        // Get validated data array
        $validatedData = $validatedData->validated();

        $emailParts = explode('@', $validatedData['email']);
        $userName = preg_replace('/[^a-zA-Z0-9_]/', '', $emailParts[0]);
        // Ensure the username is unique
        $originalUserName = $userName; // Store the original username
        $i = 1;
        while (User::where('username', $userName)->exists()) {
            $userName = $originalUserName . '_' . $i;
            $i++;
        }

        $email_verify_tokn = sprintf("%d", random_int(123456, 999999));

        // Create user record
        $user = User::create([
            'username' => $userName,
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'terms_condition' => $validatedData['agree'] ? 1 : 0,
            'email_verify_token'=> $email_verify_tokn,
            'status' => 1,
        ]);

        // create user balance
        if (!empty($user)) {
            Wallet::create([
                'user_id' => $user->id,
                'available_balance' => 0
            ]);
        }

        auth()->login($user);
        $guestToken = Cookie::get('guest_token');
        if ($guestToken) {
            UserCartItem::where('guest_token', $guestToken)
                ->update(['user_id' => $user->id, 'guest_token' => null]);

            UserSelectedCar::where('guest_token', $guestToken)
                ->update(['user_id' => $user->id, 'guest_token' => null]);

            // Remove guest token from session
            Cookie::forget('guest_token');
        }

        //send OTP to user Email
        if($user){
            if (!empty(get_static_option('user_email_verify_enable_disable'))){
                try {
                    Mail::to($user->email)->send(new BasicMail([
                        'subject' =>  __('Otp Email'),
                        'message' => __('Your otp code').' '.$email_verify_tokn
                    ]));
                }
                catch (\Exception $e) {}
            }

            $user_request_password = $request->password;
            // Dispatch job to send welcome email in the background
            dispatch(new SendRegisterUserEmailJob($user,$user_request_password));
        }
        toastr_success('Signup Successful!');
        return redirect()->route('user.dashboard');
    }

    public function phoneVerify(Request $request)
    {
        $user_details = Auth::guard('web')->user();
        if($request->isMethod('post')){
            $validated = $request->validate([
                'otp' => 'required|numeric|digits:6'
            ]);

            $phone = session('verify_phone');
            $userOtp = UserOtp::where('otp_code', $validated['otp'])->first();

            if (empty($userOtp)) {
                toastr_error(__('The OTP code you have entered is not correct'));
                return redirect()->back();
            }

            $user = User::select('id', 'first_name', 'last_name', 'email', 'phone', 'username','otp_verified')
                ->where('id', $userOtp->user_id)
                ->first();

            // Check user
            if (!$user) {
                toastr_error(__('User Not Found.'));
                return redirect()->back();
            }

            if (!now()->isAfter($userOtp->expire_date)) {
                // update user otp verified status
                $user->update([
                    'otp_verified' => 1,
                    'phone' => $phone,
                ]);

                toastr_success(__('Phone Number Changed Successfully.'));
                return redirect("/client/dashboard");

            } else {
                toastr_error(__('The OTP code is expired. Apply for new OTP code'));
                return redirect()->back();
            }
        }

        return view('auth.client.phone_verify');
    }

    public function resendPhoneCode(){
        $user_details = Auth::guard('web')->user();
        $phone = session('verify_phone');
        try {
            // Generate the OTP and send SMS
            $otp = $this->generateOtp($phone);
            $sentOtp = $this->sendSms([$phone, __('Your OTP: ') . $otp->otp_code, $otp->otp_code], 'otp');

            // Check if the OTP was successfully sent
            if ($sentOtp === true) {
                toastr_success(__('Resend Phone Verify Code, Please check your phone.'));
                return redirect()->route('phone.verify');

            } else {
                // If the OTP wasn't sent successfully, return an error response
                toastr_error(__('Failed to send OTP. Please try again later.'));
                return redirect()->back();

            }
        }catch (\Exception $e) {
            // Handle any other general exceptions
            toastr_error(__('An unexpected error occurred. Please try again later.'));
            return redirect()->back();
        }
    }
    public function emailVerify(Request $request)
    {

        $user_details = Auth::guard('web')->user();
        if($request->isMethod('post')){
            $this->validate($request,[
                'email_verify_token' => 'required|max:191',
                'email' => 'required'
            ],[
                'email_verify_token.required' => __('verify code is required')
            ]);

            $email=$request->email ?: $user_details->email ;
            $user_details = User::where(['email_verify_token' => $request->email_verify_token,'id' => auth()->user()->id ])->first();
            if(!is_null($user_details)){
                $user_details->email = $email;
                $user_details->email_verified = 1;
                $user_details->save();
                toastr_success(__('Your email has been verified successfully'));
                return redirect("/client/dashboard");
            }
            toastr_warning(__('Your verification code is wrong.'));
            $request_email=$email;
            return view('auth.client.email_verify',compact('request_email'));
        }
        $verify_token = $user_details->email_verify_token ?? null;
        try {
            //check user has verify token has or not
            if(is_null($verify_token)){
                $verify_token = Str::random(8);
                $user_details->email_verify_token = Str::random(8);
                $user_details->save();
                $message_body = __('Hello').' '.$user_details->name.' <br>'.__('Here is your verification code').' <span class="verify-code">'.$verify_token.'</span>';
                Mail::to($user_details->email)->send(new BasicMail([
                    'subject' => sprintf(__('Verify your email address %s'),get_static_option('site_title')),
                    'message' => $message_body
                ]));
            }
        }catch (\Exception $e){
        }
        $request_email=$request->email ?: $user_details->email ;
        return view('auth.client.email_verify',compact('request_email'));
    }
    public function resendCode(){
        $user_details = Auth::guard('web')->user();
        $verify_token = $user_details->email_verify_token ?? null;
        try {
            if(is_null($verify_token)){
                $verify_token = Str::random(8);
                $user_details->email_verify_token = Str::random(8);
                $user_details->save();
            }
            $message_body = __('Hello').' '.$user_details->name.' <br>'.__('Here is your verification code').' <span class="verify-code">'.$verify_token.'</span>';
            Mail::to($user_details->email)->send(new BasicMail([
                'subject' => sprintf(__('Verify your email address %s'),get_static_option('site_title')),
                'message' => $message_body
            ]));
        }catch (\Exception $e){
        }
        toastr_success(__('Resend Email Verify Code, Please check your inbox of spam.'));
        return redirect()->back();
    }
    public function userNameAvailability(Request $request)
    {
        $username = User::where('username',$request->username)->first();
        if(!empty($username) && $username->username == $request->username){
            $status = 'not_available';
            $msg = __('Sorry! Username name is not available');
        }else{
            $status = 'available';
            $msg = __('Congrats! Username name is available');
        }
        return response()->json([
            'status'=>$status,
            'msg'=>$msg,
        ]);
    }
    public function emailAvailability(Request $request)
    {
        $email = User::where('email',$request->email)->first();
        if(!empty($email) && $email->email == $request->email){
            $status = 'not_available';
            $msg = __('Sorry! Email has already taken');
        }else{
            $status = 'available';
            $msg = __('Congrats! Email is available');
        }
        return response()->json([
            'status'=>$status,
            'msg'=>$msg,
        ]);
    }
    public function phoneNumberAvailability(Request $request)
    {
        $phone = User::where('phone',$request->phone)->first();
        if(!empty($phone) && $phone->phone == $request->phone){
            $status = 'not_available';
            $msg = __('Sorry! Phone Number has already taken');
        }else{
            $status = 'available';
            $msg = __('Congrats! Phone number is available');
        }
        return response()->json([
            'status'=>$status,
            'msg'=>$msg,
            'phone'=>$phone,
        ]);
    }
}
