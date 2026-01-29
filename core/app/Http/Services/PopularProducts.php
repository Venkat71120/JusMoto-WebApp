<?php

namespace App\Http\Services;

use App\Models\FavoriteItem;
use App\Models\Service;
use App\Models\Service_Car;
use App\Models\UserSelectedCar;
use App\Models\Varient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class PopularProducts
{
    public function popularProducts()
    {
        $today = now()->startOfDay();
        $userId = auth()->id();
        $guestToken =Cookie::get('guest_token');
        $selectedCar = null;

        // Get selected car for logged-in or guest user
        if ($userId) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('user_id', $userId)
                ->first();
        } elseif ($guestToken) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('guest_token', $guestToken)
                ->first();
        }
        $popular_products =Service::with(['offer_service' => function ($q) use ($today) {
            $q->whereHas('offer', function ($offerQuery) use ($today) {
                $offerQuery->where('status', 1)
                    ->where('expires_at', '>=', $today);
            });
        }])->where('type',1)
            ->withCount('orderItems')
            ->where('status', 1)
            ->where('is_published', 1)
            ->orderBy('order_items_count', 'desc');

        // Filter by selected car variant if available
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {
                // Filter products that have this variant in Service_Car
                $popular_products = $popular_products->whereHas('serviceCar', function ($q) use ($variant) {
                    $q->where('varient_id', $variant->id);
                })->take(4)->get(); // Limit to 6 here

                // Fetch all Service_Car records in one query to avoid N+1
                $productIds = $popular_products->pluck('id');
                $productCars = Service_Car::whereIn('service_id', $productIds)
                    ->where('varient_id', $variant->id)
                    ->get()
                    ->keyBy('service_id');

                // Attach price and discount_price from Service_Car
                foreach ($popular_products as $product) {
                    if (isset($productCars[$product->id])) {
                        $productCar = $productCars[$product->id];
                        $product->price = $productCar->price;
                        $product->discount_price = $productCar->discount_price ?? $productCar->price;
                        $product->image = $productCar->image ?: $product->image;
                    }
                }
            } else {
                // No matching variant, just take top 6
                $popular_products = $popular_products->take(4)->get();
            }
        } else {
            // No selected car, just take top 6
            $popular_products = $popular_products->take(4)->get();
        }

        //count rating
        foreach ($popular_products as $product) {
            $product->rating = number_format($product->review()->avg('rating') ?? 0, 1);
            $is_favorite=FavoriteItem::where('user_id', Auth::id())
                ->where('item_id', $product->id)
                ->exists();
            $product->is_favorite = $is_favorite ? true : false;

            $finalDiscountPrice = $product->discount_price;

            if ($product->offer_service->isNotEmpty()) {
                $offerProduct = $product->offer_service->first();
                if ($offerProduct && $offerProduct->offer && $offerProduct->offer->status == 1 && $offerProduct->offer->expires_at >= $today) {
                    $finalDiscountPrice = $product->price - (($product->price * $offerProduct->offer?->offerPercentage)/100);
                }
            }

            $product->discount_price = $finalDiscountPrice;

        }
        return $popular_products;
    }
}
