<?php

namespace App\Http\Controllers\Api;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Http\Resources\Users\IdentityVerificationResource;
use App\Mail\BasicMail;
use App\Models\AccountDeactivate;
use App\Models\Backend\IdentityVerification;
use App\Models\Order;
use App\Models\Service;
use App\Models\SubOrder;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Modules\JobPost\app\Models\JobPost;
use Modules\JobPost\app\Models\JobPostOffer;

class AccountSettingController extends Controller
{

    public function accountDeactive(Request $request)
    {
        $request->validate([
            'reason_id' => 'required',
            'description' => 'required|max:150',
        ]);

        $userId = Auth::guard('sanctum')->user()->id;
        $accountDeactivation = AccountDeactivate::where('user_id', $userId)->first();
        if ($accountDeactivation) {
            return response()->json([
                'message' => __('Your account is already deactivated.'),
            ]);
        }

        //Deactivate Account
        AccountDeactivate::create([
            'user_id' => $userId,
            'reason_id' => $request['reason_id'],
            'description' => $request['description'],
            'status' => 0,
            'account_status' => 0,
        ]);


        return response()->json([
            'message' => __('Your Account Successfully Deactivate'),
        ]);

    }

    public function accountActive()
    {
        $user_id = Auth::guard('sanctum')->user()->id;
        $account_details = AccountDeactivate::where('user_id', $user_id)->first();

        if (!empty($account_details)){
            $account_details->delete();

        }


        return response()->json([
            'message' => __('Your Account Successfully Active'),
        ]);
    }

    public function accountDelete(Request $request)
    {

        $request->validate([
            'reason_id' => 'required',
            'description' => 'required|min:10',
            'password' => 'required',
        ]);

        $user = Auth::guard('sanctum')->user();
        $user_id = $user->id;

        // Verify the provided password matches the current user's password
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => __('The provided password is incorrect.'),
            ], 403);
        }
        $order = Order::where('user_id', $user_id)
            ->where(function ($q) {
                $q->where('status', 0);//pending
            })
            ->exists();
        if($order)
        {
            return response()->json([
                'message' => __('Your account cannot be deleted because you have pending orders. Please complete or cancel them before proceeding.'),
            ], 403);

        }
        $account_deactivate= AccountDeactivate::where('user_id', $user_id)->first();
        if($account_deactivate){
            $account_deactivate->reason_id= $request['reason'];
            $account_deactivate->description= $request['description'];
            $account_deactivate->status = 1;
            $account_deactivate->account_status = 1;
            $account_deactivate->save();
        }
        else
        {
            AccountDeactivate::create([
                'user_id' => $user_id,
                'reason_id' => $request['reason'],
                'description' => $request['description'],
                'status' => 1,
                'account_status' => 1,
            ]);
        }
        User::find($user_id)?->delete();
        // Revoke the user's API token
        $user?->tokens()->delete();

        return response()->json([
            'message' => __('Your Account Has Been Deleted Successfully'),
            'logout' => true,
        ]);

    }

}
