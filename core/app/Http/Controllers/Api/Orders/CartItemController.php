<?php

namespace App\Http\Controllers\Api\Orders;

use App\Http\Controllers\Controller;
use App\Models\UserCartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CartItemController extends Controller
{
    public function toggleCart(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'item_id' => 'required|exists:services,id',
            'price' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first()
            ], 422);
        }
        $user_id=Auth::guard('sanctum')->user()->id;
        $cartItem=UserCartItem::where('user_id',$user_id)->where('item_id',$request->item_id)->first();
        if($cartItem)
        {
            $cartItem->delete();
            return response()->json(['status' => 'removed','msg' => 'Item removed from your cart!']);
        }
        UserCartItem::create([
            'user_id' => $user_id,
            'item_id' => $request->item_id,
            'quantity' =>1,
            'price' => $request->price
        ]);
        return response()->json(['status' => 'added','msg' => 'Item added to your cart!']);
    }
}
