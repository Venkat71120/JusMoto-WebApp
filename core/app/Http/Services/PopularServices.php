<?php

namespace App\Http\Services;

use App\Models\FavoriteItem;
use App\Models\Service;
use App\Models\Service_Car;
use App\Models\UserSelectedCar;
use App\Models\Varient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class PopularServices
{
    public function popularServices()
    {
        $today = now()->startOfDay();
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
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

        // Base popular services query
        $popular_services = Service::with(['offer_service' => function ($q) use ($today) {
            $q->whereHas('offer', function ($offerQuery) use ($today) {
                $offerQuery->where('status', 1)
                    ->where('expires_at', '>=', $today);
            });
        }])
            ->where('type', 0)
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
                // Filter services that have this variant in Service_Car
                $popular_services = $popular_services->whereHas('serviceCar', function ($q) use ($variant) {
                    $q->where('varient_id', $variant->id);
                })->take(6)->get(); // Limit to 6 here

                // Fetch all Service_Car records in one query to avoid N+1
                $serviceIds = $popular_services->pluck('id');
                $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
                    ->where('varient_id', $variant->id)
                    ->get()
                    ->keyBy('service_id');

                // Attach price and discount_price from Service_Car
                foreach ($popular_services as $service) {
                    if (isset($serviceCars[$service->id])) {
                        $serviceCar = $serviceCars[$service->id];
                        $service->price = $serviceCar->price;
                        $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                        $service->image= $serviceCar->image ?: $service->image;
                    }
                }
            } else {
                // No matching variant, just take top 6
                $popular_services = $popular_services->take(6)->get();
            }
        } else {
            // No selected car, just take top 6
            $popular_services = $popular_services->take(6)->get();
        }

        // Calculate ratings, favorites, and apply offers
        foreach ($popular_services as $service) {
            $service->rating = number_format($service->review()->avg('rating') ?? 0, 1);

            $service->is_favorite = FavoriteItem::where('user_id', Auth::id())
                ->where('item_id', $service->id)
                ->exists();

            $finalDiscountPrice = $service->discount_price;

            if ($service->offer_service->isNotEmpty()) {
                $offerService = $service->offer_service->first();
                if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                    $finalDiscountPrice = $service->price - (($service->price * $offerService->offer?->offerPercentage) / 100);
                }
            }

            $service->discount_price = $finalDiscountPrice;
        }

        return $popular_services;
    }
}
