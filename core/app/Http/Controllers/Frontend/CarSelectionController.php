<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\UserCartItem;
use App\Models\UserSelectedCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CarSelectionController extends Controller
{

    public function popUpOpen()
    {
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $selectedCar = null;

        if ($userId || $guestToken) {
            $query = UserSelectedCar::with(['car','brand','engine','fual']);
            if($userId) $query->where('user_id',$userId);
            else $query->where('guest_token',$guestToken);

            $selectedCars = $query->get();
            if($selectedCar && $selectedCar->car){
                $selectedCar->car->image_html = render_image_markup_by_attachment_id($selectedCar->car->image,'','thumb');
            }
        }

        return view('frontend.user.client.myCar.setting', compact('selectedCars'));
    }
    public function selectCar(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'brand_id' => 'required|exists:brands,id',
            'car_id' => 'required|exists:cars,id',
            'selected_engine_type' => 'required|exists:engine_types,id',
            'selected_fuel_type' => 'required|exists:fual_types,id',
        ]);

        if ($validator->fails()) {

            // If AJAX → return JSON instead of redirect
            if ($request->ajax()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ], 422);
            }

            // Backup fallback (not used now)
            toastr_error($validator->errors()->first());
            return redirect()->back()->withInput();
        }

        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');

        if (!$userId && !$guestToken) {
            $guestToken = (string) Str::uuid();
            Cookie::queue('guest_token', $guestToken, 60 * 24 * 365);
        }

    UserSelectedCar::create([
    'user_id' => $userId,
    'guest_token' => $guestToken,
    'brand_id' => $request->brand_id,
    'car_id' => $request->car_id,
    'engine_type_id' => $request->selected_engine_type,
    'fual_type_id' => $request->selected_fuel_type,
    'registration_number' => $request->registration_number
]);



        if ($userId) {
            UserCartItem::where('user_id', $userId)->delete();
        } elseif ($guestToken) {
            UserCartItem::where('guest_token', $guestToken)->delete();
        }

        // Return JSON success for AJAX
        if ($request->ajax()) {
            return response()->json([
                'message' => __('Your car has been selected successfully.')
            ]);
        }

        toastr_success(__('Your car has been selected successfully.'));
        return redirect()->back();
    }


    public function showMergeConfirm()
    {
        $conflict = session('car_merge_conflict');
        $user = Auth::user();

        // Get total orders for the logged-in user
        $totalOrders = Order::where('user_id', $user->id)->count();

        // Get cancelled orders (status = 4)
        $cancelledOrders = Order::where('user_id', $user->id)
            ->where('status', 4)
            ->count();

        // Get pending orders (status = 0)
        $pendingOrders = Order::where('user_id', $user->id)
            ->where('status', 0)
            ->count();

        // Get completed orders (status = 2)
        $completedOrders = Order::where('user_id', $user->id)
            ->where('status', 2)
            ->count();

        // Get greeting based on time of day
        $hour = now()->format('H');
        if ($hour < 12) {
            $greeting = 'Good Morning';
        } elseif ($hour < 18) {
            $greeting = 'Good Afternoon';
        } else {
            $greeting = 'Good Evening';
        }

        // Get recent orders for the table with eager loading
        $orders = Order::where('user_id', $user->id)
            ->with(['orderLocations', 'staff', 'admin'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('frontend.user.client.dashboard', compact('conflict','totalOrders',
            'cancelledOrders',
            'pendingOrders',
            'completedOrders',
            'greeting',
            'orders',
            'user'));
    }

    public function handleMergeChoice(Request $request)
    {
        $choice = $request->input('choice');
        $conflict = session('car_merge_conflict');

        $user_id= auth()->id();
        $guest_token = Cookie::get('guest_token');

        if ($choice === 'use_guest_car') {
            // Replace user's car with guest car
            UserSelectedCar::where('user_id', $user_id)->delete();

            UserSelectedCar::where('car_id', $conflict['guest_car_id'])
                ->where('guest_token', $guest_token)
                ->update([
                    'user_id' => $user_id,
                    'guest_token' => null,
                ]);

            UserCartItem::where('user_id', $user_id)->delete();
            $guestCartItems = UserCartItem::where('guest_token', $guest_token)->get();
            foreach ($guestCartItems as $item) {
                // Assign guest item to user
                $item->update([
                    'user_id' => $user_id,
                    'guest_token' => null,
                ]);
            }

        }else
        {
            UserSelectedCar::where('guest_token', $guest_token)->delete();
            UserCartItem::where('guest_token', $guest_token)->delete();
        }

        session()->forget('car_merge_conflict');
        toastr_success(__('Car selection updated.'));

        if (session()->has('redirect_after_login')) {
            $url = session('redirect_after_login');
            session()->forget('redirect_after_login');
            $cartCount = UserCartItem::where('user_id', $user_id)->count();
            if($cartCount>0)
            {
                return redirect($url);
            }

        }

        return redirect()->route('user.dashboard');
    }

}
