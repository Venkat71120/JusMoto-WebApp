<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Backend\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'username' => 'required|string|max:191',
            'password' => 'required|string'
        ]);

        // Check if login is email or username
        $loginType = filter_var($validatedData['username'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $admin = Admin::where($loginType, $validatedData['username'])->first();

        // Check if admin exists
        if (empty($admin)) {
            return response()->json([
                'success' => false,
                'message' => __('User not found.')
            ], 404);
        }

        // Check if account is active
        if ($admin->status != 1) {
            return response()->json([
                'success' => false,
                'message' => __('Your account is inactive. Please contact administrator.')
            ], 403);
        }

        // Check password
        if (!Hash::check($validatedData['password'], $admin->password)) {
            return response()->json([
                'success' => false,
                'message' => __('Invalid username or password.')
            ], 401);
        }

        // Generate API token for the admin
        $token = $admin->createToken(Str::slug(get_static_option('site_title', 'jusmoto')) . '_admin_api_keys')->plainTextToken;

        // Prepare admin data for response
        $adminData = [
            'id' => $admin->id,
            'name' => $admin->name,
            'username' => $admin->username,
            'email' => $admin->email,
            'phone' => $admin->phone,
            'image' => $admin->image,
            'role' => $admin->role,
            'is_franchise' => (bool) $admin->is_franchise,
            'franchise_code' => $admin->franchise_code,
            'franchise_location' => $admin->franchise_location,
            'outlet_location_id' => $admin->outlet_location_id,
        ];

        // Return success response with admin data and token
        return response()->json([
            'success' => true,
            'message' => __('Login successful.'),
            'user' => $adminData,
            'token' => $token,
        ]);
    }
}
