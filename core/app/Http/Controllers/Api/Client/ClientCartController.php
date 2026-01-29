<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\UserCartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ClientCartController extends Controller
{
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

        $userId = Auth::guard('sanctum')->user()->id;
        // Create new cart item
        $cart_item=UserCartItem::create([
            'user_id' => $userId,
            'item_id' => $request->item_id,
            'quantity' => 1,
            'price' => $request->price,
        ]);

        return response()->json(['status' => 'added','msg' => 'Item added to your cart!','cart_item' => $cart_item]);
    }
    public function increaseCartItem(Request $request)
    {
        $userId = auth()->id();

        $cartItem = UserCartItem::where(function ($query) use ($userId) {
            if ($userId) $query->where('user_id', $userId);

        })->where('id', $request->cart_id)->first();

        if (!$cartItem) {
            return response()->json(['status' => 'error', 'message' => 'Item not found'], 404);
        }

        $cartItem->increment('quantity');
        return response()->json(['status' => 'success', 'message' => 'Quantity increased']);
    }
    public function removeCartItem(Request $request)
    {

        $userId = auth()->id();

        $cartItem = UserCartItem::where(function ($query) use ($userId) {
            if ($userId) {
                $query->where('user_id', $userId);
            }
        })->where('id', $request->cart_id)->first();

        if (!$cartItem) {
            return response()->json(['status' => 'error', 'message' => 'Item not found'], 404);
        }

        $cartItem->delete();

        return response()->json(['status' => 'removed', 'message' => 'Item removed from cart']);
    }

    public function decreaseCartItem(Request $request)
    {
        $userId = auth()->id();

        $cartItem = UserCartItem::where(function ($query) use ($userId) {
            if ($userId) {
                $query->where('user_id', $userId);
            }
        })->where('id', $request->cart_id)->first();

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
