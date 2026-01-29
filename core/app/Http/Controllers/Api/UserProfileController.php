<?php

namespace App\Http\Controllers\Api;

use App\Actions\Media\MediaHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\Users\ClientProfileDetailsResource;
use App\Http\Resources\Users\ClientPublicDetailsResource;
use App\Models\Service;
use App\Models\User;
use App\Models\UserLocation;
use App\Models\UserServiceLocation;
use App\Models\UserSocialInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserProfileController extends Controller
{
    public function profile(){
        $user_id = auth('sanctum')->id();
        $user = User::where('id',$user_id)->first();

        if (empty($user)) {
            return response()->json([
                'message' => __('User does not exist'),
            ], 404);
        }

       
           return response()->json([
               'user_details' => $user ? new ClientProfileDetailsResource($user) : null,
           ]);
        
    }

    public function updateProfile(Request $request)
    {
        $user = auth('sanctum')->user();
        $user_id = $user->id;

        if ($request->update_type == 'after_login'){
            // Validate the request data
            $request->validate([
                'first_name' => 'required|max:191',
                'last_name' => 'required|max:191',
                'file' => 'nullable|image',
                'date_of_birth' => 'nullable|date',
            ]);
        }else{
            // Validate the request data
            $request->validate([
                'first_name' => 'required|max:191',
                'last_name' => 'required|max:191',
                'file' => 'nullable|image',
            ]);
        }


        // Begin a transaction to ensure atomicity
        DB::beginTransaction();

        try {
            $last_image_id = null;
            if ($request->hasFile('file')) {
                MediaHelper::insert_media_image($request, 'web');
                $last_image_id = DB::getPdo()->lastInsertId();
            }

            // Get old image for fallback
            $old_image = User::where('id', $user_id)->value('image');

            // Update user after login
            if ($request->update_type == 'after_login'){
                User::where('id', $user_id)->update([
                    'first_name' => $request->input('first_name'),
                    'last_name' => $request->input('last_name'),
                    'date_of_birth' => $request->input('date_of_birth'),
                    'image' => $last_image_id ?? $old_image,
                ]);

                // Update or create user social info
                if (!empty($request->apple_id) || !empty($request->google_id) || !empty($request->facebook_id)) {
                    $user_social_info = UserSocialInfo::where('user_id', $user_id)->first();

                    if (!empty($user_social_info)) {
                        // Update existing record
                        $user_social_info->update([
                            'apple_id' => $request->apple_id ?? $user_social_info->apple_id,
                            'google_id' => $request->google_id ?? $user_social_info->google_id,
                            'facebook_id' => $request->facebook_id ?? $user_social_info->facebook_id,
                        ]);
                    } else {
                        // Create a new record
                        UserSocialInfo::create([
                            'user_id' => $user_id,
                            'apple_id' => $request->apple_id,
                            'google_id' => $request->google_id,
                            'facebook_id' => $request->facebook_id,
                        ]);
                    }
                }

            }else{
                // Update user after register
                User::where('id', $user_id)->update([
                    'first_name' => $request->input('first_name'),
                    'last_name' => $request->input('last_name'),
                    'date_of_birth' => $request->input('date_of_birth'),
                    'image' => $last_image_id ?? $old_image
                ]);
            }


            // Commit the transaction
            DB::commit();

            return response()->json([
                'message' => __('Profile Updated Successfully')
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            // Return an error response
            return response()->json(['error' => __('Failed to update profile')], 500);
        }
    }

    public function firebaseToken(Request $request)
    {
        $request->validate([
            'firebase_token' => 'required|string',
        ]);
        $user = auth('sanctum')->user();
        if (!$user) {
            return response()->json([
                'message' => __('Unauthorized'),
            ], 401);
        }
        $user->update([
            'firebase_token' => $request->input('firebase_token'),
        ]);
        return response()->json([
            'message' => __('Token Updated Successfully')
        ]);
    }
}
