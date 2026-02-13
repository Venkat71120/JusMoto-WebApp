<?php

namespace App\Http\Controllers\Backend;

use App\Actions\Media\MediaHelper;
use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\AccountDeactivate;
use App\Models\Backend\MediaUpload;
use App\Models\Review;
use App\Models\Service;
use App\Models\ServiceAddon;
use App\Models\ServiceExclude;
use App\Models\ServiceFaq;
use App\Models\ServiceInclude;
use App\Models\ServiceReport;
use App\Models\User;
use App\Models\UserLocation;
use App\Models\UserNotification;
use App\Models\UserServiceCategory;
use App\Models\UserServiceLocation;
use App\Models\UserSocialInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Modules\Chat\app\Models\LiveChat;
use Modules\Chat\app\Models\LiveChatMessage;
use Modules\JobPost\app\Models\JobPost;
use Modules\JobPost\app\Models\JobPostLocation;
use Modules\JobPost\app\Models\JobPostOffer;
use Modules\SMSGateway\app\Models\UserOtp;
use Modules\SupportTicket\app\Models\ChatMessage;
use Modules\SupportTicket\app\Models\Ticket;
use Modules\Wallet\app\Models\Wallet;

class UserManageController extends Controller
{
// User car details page
public function userCarDetails($user_id)
{
    $user = User::with(['user_selected_car.brand', 'user_selected_car.car', 'user_selected_car.engine', 'user_selected_car.fual'])
        ->find($user_id);
    
    if (!$user) {
        return redirect()->back()->with(FlashMsg::error(__('User not found')));
    }
    
    return view('backend.pages.user.users.user-car-details', compact('user'));
}
    public function add_user(Request $request)
    {
        if($request->isMethod('post')){
            $request->validate([
                'first_name' => 'required|max:191',
                'last_name' => 'required|max:191',
                'email' => 'required|email|unique:users|max:191',
                'username' => 'required|unique:users|max:191',
                'phone' => 'required|unique:users|max:191',
                'password' => 'required|min:6|max:191|confirmed',
            ]);

            $email_verify_tokn = sprintf("%d", random_int(123456, 999999));
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'username' => $request->username,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
                'terms_conditions' =>1,
                'email_verify_token'=> $email_verify_tokn,
                'email_verified'=> 1
            ]);


            return back()->with(FlashMsg::item_new(__('User Successfully Created')));
        }
        return view('backend.pages.user.new-user.add-new-user');
    }
    //all user
    public function all_users(Request $request)
    {
        $status = $request->input('status', 'all');

        $query = User::latest();

        // filter with status
        if($status !== 'all' && $status !== null){
            $query->where('type', (int)$status);
        }

        $all_users = $query->paginate(10);

        $current_status = $status;
        // Total users count
        $total_users = User::count();

        return view('backend.pages.user.users.all-users',compact('all_users', 'current_status','total_users'));
    }
    // user pagination
    function user_pagination(Request $request)
    {
        if($request->ajax()){
            $all_users = User::latest()->paginate(10);
            return view('backend.pages.user.users.search-result',compact('all_users'));
        }
    }

    // search user
    public function search_user(Request $request)
    {
        $all_users= User::where(function($q) use($request){
            $q->where('first_name', 'LIKE', "%". strip_tags($request->string_search) ."%")
                ->orWhere('last_name', 'LIKE', "%". strip_tags($request->string_search) ."%")
                ->orWhere('email', 'LIKE', "%". strip_tags($request->string_search) ."%")
                ->orWhere('phone', 'LIKE', "%". strip_tags($request->string_search) ."%");
        })->paginate(10);
        return $all_users->total() >= 1 ? view('backend.pages.user.users.search-result', compact('all_users'))->render() : response()->json(['status'=>__('nothing')]);
    }

    //update user info with username
    public function edit_info(Request $request)
    {
        $request->validate([
            'edit_first_name'=>'required',
            'edit_last_name'=>'required',
            'edit_username'=>'required|max:191|unique:users,username,'.$request->edit_user_id,
            'edit_email'=>'required|max:191|unique:users,email,'.$request->edit_user_id,
            'edit_phone'=>'required|max:191|unique:users,phone,'.$request->edit_user_id,
        ]);

        // Check if the phone number does not start with '+'
        if (strpos($request->edit_phone, '+') !== 0) {
            $phone = '+' . $request->edit_phone;
        } else {
            $phone = $request->edit_phone;
        }

        User::where('id',$request->edit_user_id)->update([
            'first_name'=>$request->edit_first_name,
            'last_name'=>$request->edit_last_name,
            'username'=>$request->edit_username,
            'email'=>$request->edit_email,
            'phone'=> $phone,
        ]);

        try {
            $message = get_static_option('user_info_update_message') ?? __('Your information successfully updated');
            $message = str_replace(["@name","@username","@email"],[$request->edit_first_name.' '.$request->edit_last_name, $request->edit_username, $request->edit_email], $message);
            Mail::to($request->edit_email)->send(new BasicMail([
                'subject' => get_static_option('user_info_update_subject') ?? __('User Info Update Email'),
                'message' => $message
            ]));
        }
        catch (\Exception $e) {
        }
        FlashMsg::item_new(__('User Info Successfully Updated'));
        return back();
    }

    // password change
    public function change_password(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'password' => 'required|min:6',
                'confirm_password' => 'required|min:6',
            ]);
            if ($request->password === $request->confirm_password) {
                $user = User::select(['email','first_name','last_name'])->first();
                User::where('id', $request->user_id)->update(['password' => Hash::make($request->password)]);

                try {
                    $message = get_static_option('user_password_change_message') ?? __('Your password has been changed');
                    $message = str_replace(["@name","@password"],[$user->first_name.' '.$user->last_name, $request->password], $message);
                    Mail::to($user->email)->send(new BasicMail([
                        'subject' => get_static_option('user_password_change_subject') ?? __('User Password Change Email'),
                        'message' => $message
                    ]));
                }
                catch (\Exception $e) {
                }
                return response()->json(['status'=>__('ok')]);
            }
            return response()->json(['status'=>__('not_match')]);
        }
    }

   //user identity details
    public function identity_details(Request $request)
    {
        $user_details = User::where('id',$request->user_id)->first();
        if(!empty($user_details)){
            return view('backend.pages.user.profile-and-identity-compare', compact('user_details'))->render();
        }else{
            return response()->json(['status'=>__('nothing')]);
        }
    }

   

    //user active inactive status change
    public function change_status($id)
    {
        $user = User::select(['email','status'])->where('id',$id)->first();
        $user->status==1 ? $status=0 : $status=1;
        User::where('id',$id)->update(['status'=>$status]);
        if($user->status==0){
            try {
                $message = get_static_option('user_status_active_message') ?? __('Your account status has been changed from inactive to active.');
                $message = str_replace(["@name"],[$user->first_name.' '.$user->last_name], $message);
                Mail::to($user->email)->send(new BasicMail([
                    'subject' => get_static_option('user_status_active_subject') ?? __('User Status Activate Email'),
                    'message' => $message
                ]));
            }catch (\Exception $e) {

            }
        }else {
            try {
                $message = get_static_option('user_status_inactive_message') ?? __('Your account status has been changed from active to inactive.');
                $message = str_replace(["@name"], [$user->first_name . ' ' . $user->last_name], $message);
                Mail::to($user->email)->send(new BasicMail([
                    'subject' => get_static_option('user_status_inactive_subject') ?? __('User Status Inactivate Email'),
                    'message' => $message
                ]));
            } catch (\Exception $e) {

            }
        }
        return redirect()->back()->with(FlashMsg::item_new(__('Status Successfully Changed')));
    }

    // delete user (soft delete)
    public function delete_user($id)
    {
        User::find($id)->delete();
        return redirect()->back()->with(FlashMsg::error(__('User Successfully Deleted')));
    }

    //permanent delete user
    public function permanent_delete($user_id)
    {
        try {
            // Delete  and related tags
           
            UserNotification::where('user_id', $user_id)->delete();
            Review::where('reviewer_id', $user_id)->delete();
            AccountDeactivate::where('user_id', $user_id)->delete();

            // Check and delete SMS module related data if exists
            if (moduleExists("SMSGateway") && !empty(get_static_option('otp_login_status'))) {
                UserOtp::where('user_id', $user_id)->delete();
            }

            // Delete user media
            $media_uploads = MediaUpload::where(["user_id" => $user_id, "type" => "web"])->get();
            foreach ($media_uploads as $media) {
                MediaHelper::delete_user_media_image($media->id); // Assuming this function deletes the file
                $media->delete();
            }

            // Delete support tickets and related messages
            $tickets = Ticket::where('user_id', $user_id)->get();
            foreach ($tickets as $ticket) {
                ChatMessage::where("ticket_id", $ticket->id)->delete();
                $ticket->delete();
            }

            // Check and delete live chat messages and chats if module exists
            if (moduleExists("Chat")) {
                $live_chats = LiveChat::where('client_id', $user_id)->get();
             

                foreach ($live_chats as $chat) {
                    LiveChatMessage::where('live_chat_id', $chat->id)->delete();
                    $chat->delete();
                }
            }


            // if client 
            try {
                UserLocation::where('user_id', $user_id)->delete();
                ServiceReport::where('user_id', $user_id)->delete();
                UserServiceLocation::where('user_id', $user_id)->delete();
                UserSocialInfo::where('user_id', $user_id)->delete();
            }catch (\Exception $e) {}

            $user = User::select('id')->withTrashed()->find($user_id);
            $user->forceDelete();
        }catch (\Exception $e) {}

        return back()->with(FlashMsg::error(__('User Successfully Deleted Permanently.')));
    }

    // restore user (soft delete user restore)
    public function user_restore(Request $request, $id=null)
    {
        if($request->isMethod('post')){
            User::withTrashed()->find($id)->restore();
            return redirect()->back()->with(FlashMsg::item_new(__('User Successfully Restore')));
        }
        $all_users = User::onlyTrashed()->latest()->paginate(10);
        return view('backend.pages.user.trash-user.deleted-users',compact('all_users'));
    }

    // pagination
    function pagination_delete_user(Request $request)
    {
        if($request->ajax()){
            $all_users = User::onlyTrashed()->latest()->paginate(10);
            return view('backend.pages.user.trash-user.search-result-for-delete-users', compact('all_users'))->render();
        }
    }

    // search user
    public function search_delete_user(Request $request)
    {
        $all_users= User::withTrashed()->where('deleted_at','!=',null)->where('first_name', 'LIKE', "%". strip_tags($request->string_search) ."%")->paginate(10);
        return $all_users->total() >= 1 ? view('backend.pages.user.trash-user.search-result-for-delete-users', compact('all_users'))->render() : response()->json(['status'=>__('nothing')]);
    }

   

  

 

    //disable 2fa
    public function disable_2fa($id)
    {
        $user = User::select(['email','first_name','last_name'])->where('id',$id)->first();
        User::where('id',$id)->update([ 'google_2fa_enable_disable_disable' => 0]);
        try {
            $message = get_static_option('_2fa_disable_message') ?? __('2 factor authentication successfully disable from your account.');
            $message = str_replace(["@name"],[$user->first_name.' '.$user->last_name], $message);
            Mail::to($user->email)->send(new BasicMail([
                'subject' => get_static_option('_2fa_disable_subject') ?? __('Disable 2FA Email'),
                'message' => $message
            ]));
        }catch (\Exception $e) {}
        return back()->with(FlashMsg::item_new(__('2FA Successfully Disable')));
    }

    //verify user email
    public function verify_user_email($id)
    {
        $user = User::select(['email_verified','email','first_name','last_name'])->where('id',$id)->first();
        User::where('id',$id)->update([ 'email_verified' => 1]);
        try {
            $message = get_static_option('user_email_verified_message') ?? __('Your email address successfully verified.');
            $message = str_replace(["@name"],[$user->first_name.' '.$user->last_name], $message);
            Mail::to($user->email)->send(new BasicMail([
                'subject' => get_static_option('user_email_verified_subject') ?? __('Disable 2FA Email'),
                'message' => $message
            ]));
        }
        catch (\Exception $e) {}
        return redirect()->back()->with(FlashMsg::item_new(__('Email Address Successfully Verified')));
    }



    //Deactivated users
    public function user_deactivated_all()
    {
        $all_users = User::has('account_deactivates')->with('account_deactivates')->latest()->paginate(10);
        return view('backend.pages.user.deactivates-user.deactivates-users',compact('all_users'));
    }
    // user pagination
    function user_deactivated_pagination(Request $request)
    {
        if($request->ajax()){
            $all_users = User::has('account_deactivates')->with('account_deactivates')->latest()->paginate(10);
            return view('backend.pages.user.deactivates-user.search-result-for-deactivates-users',compact('all_users'));
        }
    }

    // search user
    public function search_deactivated_user(Request $request)
    {
        $all_users= User::has('account_deactivates')->with('account_deactivates')->where(function($q) use($request){
            $q->where('first_name', 'LIKE', "%". strip_tags($request->string_search) ."%")
                ->orWhere('last_name', 'LIKE', "%". strip_tags($request->string_search) ."%")
                ->orWhere('email', 'LIKE', "%". strip_tags($request->string_search) ."%")
                ->orWhere('phone', 'LIKE', "%". strip_tags($request->string_search) ."%");
        })->paginate(10);
        return $all_users->total() >= 1 ? view('backend.pages.user.deactivates-user.search-result-for-deactivates-users', compact('all_users'))->render() : response()->json(['status'=>__('nothing')]);
    }


}
