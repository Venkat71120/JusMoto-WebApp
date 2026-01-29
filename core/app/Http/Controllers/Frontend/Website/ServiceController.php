<?php

namespace App\Http\Controllers\Frontend\Website;

use App\Http\Controllers\Controller;
use App\Http\Services\filterServiceList;
use App\Models\AfterBookingStep;
use App\Models\Backend\Category;
use App\Models\FavoriteItem;
use App\Models\Order;
use App\Models\OrderCancellationPolicy;
use App\Models\Service;
use App\Models\Service_Car;
use App\Models\Staff;
use App\Models\UserSelectedCar;
use App\Models\UserServiceLocation;
use App\Models\Varient;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class ServiceController extends Controller
{
    //service list
    public function allServiceList(Request $request)
    {
        $selected_category = null;
        $today = now()->startOfDay();

        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $selectedCar = null;

        // Selected car for logged-in or guest user
        if ($userId) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('user_id', $userId)->first();
        } elseif ($guestToken) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('guest_token', $guestToken)->first();
        }

        // Base query
        $services = Service::with([
            'reviews',
            'includes',
            'excludes',
            'faqs',
            'addons',
            'admin',
            'offer_service' => function ($q) use ($today) {
                $q->whereHas('offer', function ($offerQuery) use ($today) {
                    $offerQuery->where('status', 1)
                        ->where('expires_at', '>=', $today);
                });
            }
        ])
            ->where('status', 1)
            ->where('is_published', 1)
            ->where('type',0);

        // Category filter
        if ($request->has('category') && $request->category !== null) {
            $category = Category::where('slug', $request->category)->first();
            if ($category) {
                $services->where('category_id', $category->id);
                $selected_category = $category->id;
            }
        }

        // Title search filter
        if ($request->has('title') && $request->title !== null) {
            $services->where('title', 'like', '%' . $request->title . '%');
        }

        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {

                // Filter by serviceCar variant
                $services = $services->whereHas('serviceCar', function ($q) use ($variant) {
                    $q->where('varient_id', $variant->id);
                });

                // IMPORTANT → apply pagination
                $services = $services->paginate(6);

                // Add custom price
                $serviceIds = $services->pluck('id');

                $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
                    ->where('varient_id', $variant->id)
                    ->get()
                    ->keyBy('service_id');

                foreach ($services as $service) {
                    if (isset($serviceCars[$service->id])) {
                        $serviceCar = $serviceCars[$service->id];
                        $service->price = $serviceCar->price;
                        $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                        $service->image= $serviceCar->image ?: $service->image;
                    }
                }

            } else {
                // No matching variant → paginate default list
                $services = $services->paginate(6);
            }

        } else {
            // No selected car → paginate default list
            $services = $services->paginate(6);
        }

        // Append rating + discount
        foreach ($services as $service) {

            $service->rating = number_format($service->reviews()->avg('rating') ?? 0, 1);

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

            $service->final_price = $finalDiscountPrice;
        }

        // Categories list
        $categories = Category::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->get();

        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();

        return view('frontend.pages.ServicePage.service-list', compact('services', 'categories', 'selected_category','cartItemIds'));
    }

    //all service list
    public function filterServiceList(Request $request)
    {
        $today = now()->startOfDay();
        $title = $request->input('search');
        $cat_id = $request->input('category');
        $minPrice = $request->input('min_price', 0);
        $maxPrice = $request->input('max_price', PHP_INT_MAX);
        $rating = $request->input('reviews');
        $sortBy = $request->input('sort_by', 'latest'); // Default sorting
        $sort = $request->input('sort', 'desc'); // Default order
        $variantId=null;

        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $selectedCar = null;

        // Selected car for logged-in or guest user
        if ($userId) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('user_id', $userId)->first();
        } elseif ($guestToken) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('guest_token', $guestToken)->first();
        }

        // For other users, show all active services
        $services =Service::with([
            'reviews',
            'includes',
            'excludes',
            'faqs',
            'addons',
            'admin',
            'offer_service' => function ($q) use ($today) {
                $q->whereHas('offer', function ($offerQuery) use ($today) {
                    $offerQuery->where('status', 1)
                        ->where('expires_at', '>=', $today);
                });
            },
            'serviceCar'
        ])
            ->where('status', 1)
            ->where('type',0)
            ->where('is_published', 1);

        // Filters that can be applied in DB
        if ($title) {
            $services->where('title', 'LIKE', "%$title%");
        }

        if ($cat_id) {
            $services->where('category_id', $cat_id);
        }

        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {

                $variantId = $variant->id ?? null;

            }
        }

        // Get the paginated results
        $services = $services->get();
        // Add custom price
        $serviceIds = $services->pluck('id');

        $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
            ->where('varient_id', $variantId)
            ->get()
            ->keyBy('service_id');

        foreach ($services as $service) {
            if (isset($serviceCars[$service->id])) {
                $serviceCar = $serviceCars[$service->id];
                $service->price = $serviceCar->price;
                $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                $service->image= $serviceCar->image ?: $service->image;
            }
        }
        // Attach final price
        foreach ($services as $service) {
            $service->final_price = $service->getFinalPrice($variantId);
            $service->rating = round($service->review()->avg('rating') ?? 0, 1); // Use float
        }
        if($minPrice || $maxPrice || $rating)
        {
            $services = filterServiceList::filterList($services, $minPrice, $maxPrice, $rating);
        }

        // Manual pagination
        $perPage = 6;
        $currentPage = LengthAwarePaginator::resolveCurrentPage();
        $pagedData = $services->slice(($currentPage - 1) * $perPage, $perPage)->values();

        $services = new LengthAwarePaginator(
            $pagedData,
            $services->count(),
            $perPage,
            $currentPage,
            ['path' => request()->url(), 'query' => request()->query()]
        );

        $categories = Category::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->get();

        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();

        $html = view('frontend.pages.ServicePage.listing-page', compact('services','categories','cartItemIds'))->render();

        return response()->json([
            'html' => $html
        ]);
    }

    //service details
    public function serviceDetails($slug,$notificationId=null){

        $totalOrderCount=0;
        $completedOrderCount=0;
        $today = now()->startOfDay();
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $selectedCar = null;
        // Selected car for logged-in or guest user
        if ($userId) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('user_id', $userId)->first();
        } elseif ($guestToken) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('guest_token', $guestToken)->first();
        }

        $service = Service::with(['includes', 'excludes', 'faqs', 'addons', 'offer_service' => function ($q) use ($today) {
            $q->whereHas('offer', function ($offerQuery) use ($today) {
                $offerQuery->where('status', 1)
                    ->where('expires_at', '>=', $today);
            });
        }])->where('slug',$slug)->first();
        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {
                $serviceCar = Service_Car::where('service_id', $service->id)
                    ->where('varient_id', $variant->id)
                    ->first();

                if ($serviceCar) {
                    $service->price = $serviceCar->price;
                    $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                    $service->image= $serviceCar->image ?: $service->image;
                }
            }
        }
        if(!$service)
        {
            return redirect()->back();
        }
        $service->rating = number_format($service?->reviews()->avg('rating') ?? 0, 1);
        $finalDiscountPrice = $service->discount_price;

        if ($service->offer_service->isNotEmpty()) {
            $offerService = $service->offer_service->first();
            if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                $finalDiscountPrice = $service->price - (($service->price * $offerService->offer?->offerPercentage) / 100);
            }
        }
        $service->discount_price = $finalDiscountPrice;
        // Get all reviews for the service
        $all_reviews = $service->reviews()
            ->where('status', 'published')
            ->latest()
            ->paginate(5);

        // Total number of published reviews for the service
        $total_reviews = $service->reviews()
            ->where('status', 'published')
            ->count();

        $afterBookingSteps=AfterBookingStep::all();


        $relatedServices = $this->relatedServices($service?->id);

        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();
        return view('frontend.pages.ServicePage.service-details', compact('service', 'all_reviews','relatedServices','total_reviews','afterBookingSteps','cartItemIds'));
    }

    public function relatedServices($id)
    {
        $service = Service::find($id);
        $today = now()->startOfDay();
        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $selectedCar = null;

        // Selected car for logged-in or guest user
        if ($userId) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('user_id', $userId)->first();
        } elseif ($guestToken) {
            $selectedCar = UserSelectedCar::with(['brand', 'car', 'engine', 'fual'])
                ->where('guest_token', $guestToken)->first();
        }

        $relatedServices = Service::with([
            'includes',
            'excludes',
            'faqs',
            'addons',
            'admin',
            'category',
            'sub_category',
            'child_category',
            'admin.adminStaff',
            'reviews.reviewer',
            'offer_service'
        ])
            ->where('status', 1)
            ->where('is_published', 1)
            ->where(function ($query) use ($service) {
                $query->Where('category_id', $service->category_id)
                    ->orWhere('admin_id', $service->admin_id);
            })
            ->where('type',0)
            ->where('id', '!=', $id);

        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {

                // Filter by serviceCar variant
                $relatedServices = $relatedServices->whereHas('serviceCar', function ($q) use ($variant) {
                    $q->where('varient_id', $variant->id);
                });

                // IMPORTANT → apply pagination
                $relatedServices = $relatedServices->limit(3)->get();

                // Add custom price
                $serviceIds = $relatedServices->pluck('id');

                $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
                    ->where('varient_id', $variant->id)
                    ->get()
                    ->keyBy('service_id');

                foreach ($relatedServices as $service) {
                    if (isset($serviceCars[$service->id])) {
                        $serviceCar = $serviceCars[$service->id];
                        $service->price = $serviceCar->price;
                        $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                        $service->image= $serviceCar->image ?: $service->image;
                    }
                }

            } else {
                // No matching variant → paginate default list
                $relatedServices = $relatedServices->limit(3)->get();
            }

        } else {
            // No selected car → paginate default list
            $relatedServices = $relatedServices->limit(3)->get();
        }

        foreach ($relatedServices as $relatedService) {
            $relatedService->rating = number_format($relatedService->reviews()->avg('rating') ?? 0, 1);
            $relatedService->is_favorite = FavoriteItem::where('user_id', Auth::id())
                ->where('item_id', $relatedService->id)
                ->exists();

            $finalDiscountPrice = $relatedService->discount_price;

            if ($relatedService->offer_service->isNotEmpty()) {
                $offerService = $relatedService->offer_service->first();
                if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                    $finalDiscountPrice = $relatedService->price - (($relatedService->price * $offerService->offer?->offerPercentage) / 100);
                }
            }

            $relatedService->final_price = $finalDiscountPrice;
        }

        return $relatedServices;
    }


}
