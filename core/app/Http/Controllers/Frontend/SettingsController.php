<?php
namespace App\Http\Controllers\Frontend;
use App\Actions\Media\MediaHelper;
use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\AccountDeactivate;
use App\Models\Backend\Language;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Modules\SMSGateway\app\Http\Traits\OtpGlobalTrait;

class SettingsController extends Controller
{

    use OtpGlobalTrait;
    /**
     * Display the settings page
     */
    public function index()
    {
        $user = Auth::user();
        $all_lang=Language::all();
        return view('frontend.user.client.settings', compact('user','all_lang'));
    }
    /**
     * Update user profile information
     */
    public function userProfileUpdate(Request $request){
        $validator=Validator::make($request->all(),[
            'first_name' => 'nullable|string|max:191|required_without_all:email,phone,profile_image',
            'last_name' => 'nullable|string|max:191|required_without_all:email,phone,profile_image',
            'email' => [
                'nullable',
                'email',
                'max:191',
                Rule::unique('users', 'email')->ignore(Auth::id()),
                'required_without_all:profile_image,first_name,phone',
            ],
            'phone' => [
                'nullable',
                'string',
                'regex:/^\+[0-9]{7,15}$/',
                'required_without_all:profile_image,first_name,email',
            ],

            'user_name' => [
                'nullable',
                'string',
                'max:191',
                Rule::unique('users', 'username')->ignore(Auth::id()),
                'required_without_all:email,phone,profile_image',
            ],
            'date_of_birth' => 'nullable|date',
            'profile_image' => 'nullable|image',
        ]);
        if ($validator->fails()) {
            toastr_error( $validator->errors()->first());
            return redirect()->back()->withInput();
        }
        $user=User::where('id',Auth::user()->id)->first();
        $video_url = !empty($request->video_url) ? getYoutubeEmbedUrl($request->video_url) : null;
        $galleryImagesArray = !empty($request->gallery_images)
            ? array_map('trim', explode(',', $request->gallery_images))
            : null;
        $gallery_images = !empty($galleryImagesArray)
            ? implode('|', $galleryImagesArray)
            : $user->store_images;
        $last_image_id = null;
        if ($request->hasFile('profile_image')) {
            MediaHelper::insert_media_image($request, 'web','profile_image');
            $last_image_id = DB::getPdo()->lastInsertId();
        }
        $image=$last_image_id ?? $user->image;
        $old_email=$user->email;
        $old_phone=$user->phone;

        $user->update([
            'first_name'=>$request->first_name ?? $user->first_name,
            'last_name' =>$request->last_name ?? $user->last_name,
            'username' => $request->user_name ?? $user->username,
            'email' => $old_email,
            'phone' => $user->phone,
            'image' => $image,
            'date_of_birth' => $request->date_of_birth ?? $user->date_of_birth,
            'about' => $request->about ?? $user->about,
            'video_url' => $video_url,
            'store_images' => $gallery_images,
        ]);
        if($request->email && ($old_email !== $request->email))
        {
            // Generate a verification token
            $verificationToken = mt_rand(100000, 999999);
            try {
                $user->update([
                    'email_verify_token' => $verificationToken,
                ]);
                $message = __('Hello,') . '<br>'
                    . __('You have requested to change your email. Please use the following OTP to verify your new email:')
                    . '<br>' . __('Your OTP is: ') . $verificationToken . '<br>'
                    . __('Please verify your email change request.');
                Mail::to($request->email)->send(new BasicMail([
                    'subject' => __('Email Change Verification'),
                    'message' => $message
                ]));
                toastr_success(__('A verification code has been sent to your new email address. Please check your inbox.'));
                $request_email=$request->email;
                return view('auth.client.email_verify',compact('request_email'));
            } catch (\Exception $e) {
                toastr_error(__('Failed to send verification email. Please try again later.'));
                return redirect()->back();
            }
        }
        if($request->phone && ($old_phone !== $request->phone))
        {
            try {
                // Generate the OTP and send SMS
                $otp = $this->generateOtp($request->phone);
                $sentOtp = $this->sendSms([$request->phone, __('Your OTP: ') . $otp->otp_code, $otp->otp_code], 'otp');

                // Check if the OTP was successfully sent
                if ($sentOtp === true) {
                    session(['verify_phone' => $request->phone]);
                    toastr_success(__('OTP has been sent to your mobile number.'));
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
        toastr_success('Profile Update Success');
        return redirect()->back();
    }
    /**
     * Update user password
     */
    public function userPasswordChange(Request $request){

        $validator = Validator::make($request->all(), [
            'old_password' => 'required|string',
            'new_password' => [
                'required',
                'string',
                'min:8',
                'max:191',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
            ],
            'new_password_confirmation' => 'required|same:new_password',
            'language' => 'nullable'
        ],[
            'old_password.required' => __("Your Old Password is required."),
            'new_password.required' => __("New Password is required."),
            'new_password_confirmation.required' => __("Confirm Your new Password")
        ]);

        if ($validator->fails()) {
            toastr_error( $validator->errors()->first());
            return redirect()->back()->withInput();
        }


        $user = User::findOrFail(Auth::user()->id);

        if (Hash::check($request->old_password ,$user->password)){
            $user->password = Hash::make($request->new_password);
            $user->password_changed_at=Carbon::now();
            $user->selected_lang = $request->language ?? $user->selected_lang;
            $user->save();
            Auth::guard('web')->logout();
            toastr_success('Password Change Successfully');
            return redirect()->back();
        }
        toastr_error('Old Password Does not matched');
        return redirect()->back()->withInput();
    }

    public function accountDelete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reason_id' => 'required',
            'description' => 'required|min:10',
            'password' => 'required',
        ],[
            'reason_id.required'=>"Reason is required",
            'description.required' => "Description is required",
            'description.min' => "Description must be at least 10 characters",
            'password.required' => "Password is required",
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                toastr_error($error);
            }
            return redirect()->back()->withInput();
        }

        $user = Auth::guard('sanctum')->user();
        $user_id = $user?->id;

        // Verify the provided password matches the current user's password
        if (!Hash::check($request->password, $user?->password)) {
            toastr_error('The provided password is incorrect.');
            return redirect()->back()->withInput();
        }

        $order = Order::where('user_id', $user_id)
            ->where(function ($q) {
                $q->where('status', 0);//pending
            })
            ->exists();
        if($order)
        {
            toastr_error(__('Your account cannot be deleted because you have pending orders. Please complete or cancel them before proceeding.'));
            return redirect()->back()->withInput();
        }



        $account_deactivate = AccountDeactivate::where('user_id', $user_id)->first();
        if($account_deactivate){
            $account_deactivate->reason_id= $request['reason_id'];
            $account_deactivate->description= $request['description'];
            $account_deactivate->status = 1;
            $account_deactivate->account_status = 1;
            $account_deactivate->save();
        }
        else
        {
            AccountDeactivate::create([
                'user_id' => $user_id,
                'reason_id' => $request['reason_id'],
                'description' => $request['description'],
                'status' => 1,
                'account_status' => 1,
            ]);
        }

        User::find($user_id)?->delete();
        // Revoke the user's API token
        $user?->tokens()->delete();

        Auth::logout();

        toastr_success('Your Account Has Been Deleted Successfully !!');
        return redirect()->back();

    }

}
