<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\UserCartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CartItemController extends Controller
{

    public function cartPopUpOpen()
    {
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $selectedItems = collect();

        if ($userId || $guestToken) {
            $query = UserCartItem::with(['user', 'service']);
            if ($userId) {
                $query->where('user_id', $userId);
            } else {
                $query->where('guest_token', $guestToken);
            }

            $selectedItems = $query->get();

        }

        return view('frontend.pages.cartItems.cart_items', compact('selectedItems'));
    }

    public function addCart(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'item_id' => 'required|exists:services,id',
            'price' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first()
            ], 422);
        }

        $userId = auth()->id(); // logged-in user
        $guestToken = Cookie::get('guest_token'); // guest token

        // Ensure guest_token exists for guest users
        if (!$userId && !$guestToken) {
            $guestToken = (string) Str::uuid();
            Cookie::queue('guest_token', $guestToken, 60 * 24 * 365);
        }

        // Create new cart item
        UserCartItem::create([
            'user_id' => $userId,
            'guest_token' => $userId ? null : $guestToken,
            'item_id' => $request->item_id,
            'quantity' => 1,
            'price' => $request->price,
        ]);

        return response()->json(['status' => 'added']);
    }

    public function increaseCartItem(Request $request)
    {
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');

        $cartItem = UserCartItem::where(function ($query) use ($userId, $guestToken) {
            if ($userId) $query->where('user_id', $userId);
            else $query->where('guest_token', $guestToken);
        })->where('id', $request->item_id)->first();

        if (!$cartItem) {
            return response()->json(['status' => 'error', 'message' => 'Item not found'], 404);
        }

        $cartItem->increment('quantity');
        return response()->json(['status' => 'success', 'message' => 'Quantity increased']);
    }

    public function removeCartItem(Request $request)
    {
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');

        $cartItem = UserCartItem::where(function ($query) use ($userId, $guestToken) {
            if ($userId) {
                $query->where('user_id', $userId);
            } else {
                $query->where('guest_token', $guestToken);
            }
        })->where('id', $request->item_id)->first();

        if (!$cartItem) {
            return response()->json(['status' => 'error', 'message' => 'Item not found'], 404);
        }

        $cartItem->delete();

        return response()->json(['status' => 'removed', 'message' => 'Item removed from cart']);
    }

    /**
     * Decrease quantity of cart item
     */
    public function decreaseCartItem(Request $request)
    {
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');

        $cartItem = UserCartItem::where(function ($query) use ($userId, $guestToken) {
            if ($userId) {
                $query->where('user_id', $userId);
            } else {
                $query->where('guest_token', $guestToken);
            }
        })->where('id', $request->item_id)->first();

        if (!$cartItem) {
            return response()->json(['status' => 'error', 'message' => 'Item not found'], 404);
        }

        if ($cartItem->quantity > 1) {
            $cartItem->decrement('quantity');
            return response()->json(['status' => 'decreased', 'message' => 'Item quantity decreased']);
        } else {
            $cartItem->delete();
            return response()->json(['status' => 'removed', 'message' => 'Item removed from cart']);
        }
    }

    public function clearCart()
    {
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');

        $query = UserCartItem::query();
        if ($userId) {
            $query->where('user_id', $userId);
        } elseif ($guestToken) {
            $query->where('guest_token', $guestToken);
        }

        $query->delete();

        return response()->json(['status' => 'success', 'message' => 'All items cleared']);
    }

}
