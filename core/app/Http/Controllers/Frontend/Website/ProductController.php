<?php

namespace App\Http\Controllers\Frontend\Website;

use App\Http\Controllers\Controller;
use App\Http\Services\filterServiceList;
use App\Http\Services\PopularProducts;
use App\Models\AfterBookingStep;
use App\Models\Backend\Category;
use App\Models\FavoriteItem;
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

class ProductController extends Controller
{
    //service list
    public function allProductList(Request $request)
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
        $products = Service::with([
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
            ->where('type',1);

        // Category filter
        if ($request->has('category') && $request->category !== null) {
            $category = Category::where('slug', $request->category)->first();
            if ($category) {
                $products->where('category_id', $category->id);
                $selected_category = $category->id;
            }
        }

        // Title search filter
        if ($request->has('title') && $request->title !== null) {
            $products->where('title', 'like', '%' . $request->title . '%');
        }

        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {

                // Filter by serviceCar variant
                $products = $products->whereHas('serviceCar', function ($q) use ($variant) {
                    $q->where('varient_id', $variant->id);
                });

                // IMPORTANT → apply pagination
                $products = $products->paginate(6);

                // Add custom price
                $productIds = $products->pluck('id');

                $productCars = Service_Car::whereIn('service_id', $productIds)
                    ->where('varient_id', $variant->id)
                    ->get()
                    ->keyBy('service_id');

                foreach ($products as $product) {
                    if (isset($productCars[$product->id])) {
                        $productCar = $productCars[$product->id];
                        $product->price = $productCar->price;
                        $product->discount_price = $productCar->discount_price ?? $productCar->price;
                        $product->image = $productCar->image ?: $product->image;
                    }
                }

            } else {
                // No matching variant → paginate default list
                $products = $products->paginate(6);
            }

        } else {
            // No selected car → paginate default list
            $products = $products->paginate(6);
        }

        // Append rating + discount
        foreach ($products as $product) {

            $product->rating = number_format($product->reviews()->avg('rating') ?? 0, 1);

            $product->is_favorite = FavoriteItem::where('user_id', Auth::id())
                ->where('item_id',$product->id)
                ->exists();

            $finalDiscountPrice = $product->discount_price;

            if ($product->offer_service->isNotEmpty()) {
                $offerService = $product->offer_service->first();
                if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                    $finalDiscountPrice = $product->price - (($product->price * $offerService->offer?->offerPercentage) / 100);
                }
            }

            $product->final_price = $finalDiscountPrice;
        }

        // Categories list
        $categories = Category::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->get();

        $popular_products=new PopularProducts();
        $popular_products= $popular_products->popularProducts();

        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();

        return view('frontend.pages.ProductPage.product-list', compact('products', 'categories', 'selected_category','popular_products','cartItemIds'));
    }

    //all service list
    public function filterProductList(Request $request)
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
        $products =Service::with([
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
            ->where('type',1)
            ->where('is_published', 1);

        // Filters that can be applied in DB
        if ($title) {
            $products->where('title', 'LIKE', "%$title%");
        }

        if ($cat_id) {
            $products->where('category_id', $cat_id);
        }

        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {
                // Filter by serviceCar variant
                $variant = Varient::where('car_id', $selectedCar->car_id)
                    ->where('fual_type_id', $selectedCar->fual_type_id)
                    ->where('engine_type_id', $selectedCar->engine_type_id)
                    ->first();

                $variantId = $variant->id ?? null;

            }
        }

        // Get the paginated results
        $products = $products->get();

        // Add custom price
        $productIds = $products->pluck('id');

        $productCars = Service_Car::whereIn('service_id', $productIds)
            ->where('varient_id',  $variantId)
            ->get()
            ->keyBy('service_id');

        foreach ($products as $product) {
            if (isset($productCars[$product->id])) {
                $productCar = $productCars[$product->id];
                $product->price = $productCar->price;
                $product->discount_price = $productCar->discount_price ?? $productCar->price;
                $product->image = $productCar->image ?: $product->image;
            }
        }
        // Attach final price
        foreach ($products as $product) {
            $product->final_price = $product->getFinalPrice($variantId);
            $product->rating = round($product->review()->avg('rating') ?? 0, 1); // Use float
        }
        if($minPrice || $maxPrice || $rating)
        {
            $products = filterServiceList::filterList($products, $minPrice, $maxPrice, $rating);
        }

        // Manual pagination
        $perPage = 6;
        $currentPage = LengthAwarePaginator::resolveCurrentPage();
        $pagedData = $products->slice(($currentPage - 1) * $perPage, $perPage)->values();

        $products = new LengthAwarePaginator(
            $pagedData,
            $products->count(),
            $perPage,
            $currentPage,
            ['path' => request()->url(), 'query' => request()->query()]
        );

        $categories = Category::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->get();

        $popular_products=new PopularProducts();
        $popular_products= $popular_products->popularProducts();
        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();

        $html = view('frontend.pages.ProductPage.listing-page', compact('products','categories','popular_products','cartItemIds'))->render();

        return response()->json([
            'html' => $html
        ]);
    }



    //product details
    public function productDetails($slug,$notificationId=null){

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

        $product = Service::with(['includes', 'excludes', 'faqs', 'addons', 'offer_service' => function ($q) use ($today) {
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
                $productCar = Service_Car::where('service_id', $product->id)
                    ->where('varient_id', $variant->id)
                    ->first();

                if ($productCar) {
                    $product->price = $productCar->price;
                    $product->discount_price = $productCar->discount_price ?? $productCar->price;
                    $product->image = $productCar->image ?: $product->image;
                }
            }
        }
        if(!$product)
        {
            return redirect()->back();
        }
        $product->rating = number_format($product?->reviews()->avg('rating') ?? 0, 1);
        $finalDiscountPrice = $product->discount_price;

        if ($product->offer_service->isNotEmpty()) {
            $offerService = $product->offer_service->first();
            if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                $finalDiscountPrice = $product->price - (($product->price * $offerService->offer?->offerPercentage) / 100);
            }
        }
        $product->discount_price = $finalDiscountPrice;
        // Get all reviews for the service
        $all_reviews = $product->reviews()
            ->where('status', 'published')
            ->latest()
            ->paginate(5);

        // Total number of published reviews for the service
        $total_reviews = $product->reviews()
            ->where('status', 'published')
            ->count();

        $afterBookingSteps=AfterBookingStep::all();


        $relatedProducts = $this->relatedProduct($product?->id);
        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();
        return view('frontend.pages.ProductPage.product-details', compact('product', 'all_reviews','relatedProducts','total_reviews','afterBookingSteps','cartItemIds'));
    }

    public function relatedProduct($id)
    {
        $product = Service::find($id);
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

        $relatedProducts = Service::with([
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
            ->where(function ($query) use ($product) {
                $query->Where('category_id', $product->category_id)
                    ->orWhere('admin_id', $product->admin_id);
            })
            ->where('type',1)
            ->where('id', '!=', $id);

        // If selected car exists → variant filter
        if ($selectedCar && isset($selectedCar->car_id, $selectedCar->engine_type_id, $selectedCar->fual_type_id)) {

            $variant = Varient::where('car_id', $selectedCar->car_id)
                ->where('fual_type_id', $selectedCar->fual_type_id)
                ->where('engine_type_id', $selectedCar->engine_type_id)
                ->first();

            if ($variant) {

                // Filter by serviceCar variant
                $relatedProducts = $relatedProducts->whereHas('serviceCar', function ($q) use ($variant) {
                    $q->where('varient_id', $variant->id);
                });

                // IMPORTANT → apply pagination
                $relatedProducts = $relatedProducts->limit(3)->get();

                // Add custom price
                $productIds =$relatedProducts->pluck('id');

                $productCars = Service_Car::whereIn('service_id', $productIds)
                    ->where('varient_id', $variant->id)
                    ->get()
                    ->keyBy('service_id');

                foreach ($relatedProducts as $product) {
                    if (isset($productCars[$product->id])) {
                        $productCar = $productCars[$product->id];
                        $product->price = $productCar->price;
                        $product->discount_price = $productCar->discount_price ?? $productCar->price;
                    }
                }

            } else {
                // No matching variant → paginate default list
                $relatedProducts = $relatedProducts->limit(3)->get();
            }

        } else {
            // No selected car → paginate default list
            $relatedProducts = $relatedProducts->limit(3)->get();
        }

        foreach ($relatedProducts as $relatedProduct) {
            $relatedProduct->rating = number_format($relatedProduct->reviews()->avg('rating') ?? 0, 1);
            $relatedProduct->is_favorite = FavoriteItem::where('user_id', Auth::id())
                ->where('item_id', $relatedProduct->id)
                ->exists();

            $finalDiscountPrice = $relatedProduct->discount_price;

            if ($relatedProduct->offer_service->isNotEmpty()) {
                $offerService = $relatedProduct->offer_service->first();
                if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                    $finalDiscountPrice = $relatedProduct->price - (($relatedProduct->price * $offerService->offer?->offerPercentage) / 100);
                }
            }

            $relatedProduct->final_price = $finalDiscountPrice;
        }

        return $relatedProducts;
    }
}
