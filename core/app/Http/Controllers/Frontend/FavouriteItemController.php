<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\FavoriteItem;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavouriteItemController extends Controller
{
    public function favoriteLists(Request $request){

        $user_id = Auth::guard('sanctum')->user()->id;

        $favoriteItems = FavoriteItem::where('user_id', $user_id)
            ->latest()
            ->paginate(10);

        foreach ($favoriteItems as $item) {
            $service=Service::where("id",$item->item_id)->first();
            if ($service) {
                $item->title = $service->title;
                $item->category_name = $service->category?->name ?? null;
                $item->sold = $service->sold_count;
                $item->price = $service->price;
                $item->slug = $service->slug;
            }
        }

        return view('frontend.user.client.favourite-item.all-favourite-items', compact('favoriteItems'));
    }

    public function toggleFavorite(Request $request)
    {
        $userId = auth()->id();
        $item_id = $request->input('item_id');
        $favorite = FavoriteItem::where('user_id', $userId)
            ->where('item_id', $item_id)
            ->first();
        $service=Service::where('id',$item_id)->first();
        $type=$service->type;
        if ($favorite) {
            $favorite->delete();
            return response()->json(['status' => 'removed']);
        } else {
            FavoriteItem::create([
                'user_id' => $userId,
                'item_id' => $item_id,
                'type' => $type,
            ]);
            return response()->json(['status' => 'added']);
        }
    }
}
