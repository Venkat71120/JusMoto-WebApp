<?php

namespace App\Http\Controllers\Api\Service;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reviews\ReviewResource;
use App\Http\Resources\Reviews\ServiceReviewResource;
use App\Http\Resources\Services\RelevantServiceListResource;
use App\Http\Resources\Services\ScheduleResource;
use App\Http\Resources\Services\ServiceDetailsResource;
use App\Http\Resources\Services\ServiceSummaryResource;
use App\Http\Resources\Services\ServicsResource;
use App\Http\Resources\StaffResource;
use App\Http\Services\filterServiceList;
use App\Models\Review;
use App\Models\Schedule;
use App\Models\Service;
use App\Models\Service_Car;
//use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Object_;

class ServiceController extends Controller
{


    public function scheduleByDay(Request $request)
    {

        $day = $request->input('day');
        $admin = $request->input('admin');

        $schedules = Schedule::whereNotNull('admin_id')
                ->where('day', $day)
                ->get();

        if ($schedules->isNotEmpty()) {
            return response()->json([
                'schedules' => ScheduleResource::collection($schedules),
            ]);
        }

        return response()->json([
            'status' => __('No schedule found'),
        ], 404);
    }


//    public function allServices(Request $request)
//    {
//
//        $title = $request->input('title');
//        $sort = $request->input('sort', 'desc');
//        $minPrice = $request->input('min_price');
//        $maxPrice = $request->input('max_price');
//        $sortBy = $request->input('sort_by', 'created_at');
//        $cat_id = $request->input('cat_id');
//        $variant_id = $request->input('variant_id');
//        $search_type=$request->input('search_type');
//
//        if (is_null($variant_id)) {
//            return response()->json([
//                'message' => __('Variant id is required'),
//            ]);
//        }
//
//        if($search_type==1)//if servce
//        {
//            $query = Service::with( 'reviews','includes','faqs','admin','serviceAdditional','serviceCar',)
//            ->where('type',0)
//            ->where('status', 1)
//            ->where('is_published', 1);
//
//        }
//        elseif($search_type==2)//if product
//        {
//            $query = Service::with( 'reviews','includes','faqs','admin','serviceAdditional','serviceCar',)
//            ->where('type',1)
//            ->where('status', 1)
//            ->where('is_published', 1);
//        }
//        else
//        {
//            $query = Service::with( 'reviews','includes','faqs','admin','serviceAdditional','serviceCar',)
//            ->where('status', 1)
//            ->where('is_published', 1);
//        }
//
//        // Filter by car
//        if ($variant_id) {
//            $service_variant=Service_Car::where("varient_id", $variant_id)->get();
//            $service_ids = $service_variant->pluck('service_id'); // Get all service_ids from the collection
//            $query->whereIn('id', $service_ids);
//        }
//
//        if ($title) {
//            $query->where('title', 'like', '%' . $title . '%');
//        }
//
//        if ($minPrice) {
//            $query->where('price', '>=', $minPrice);
//        }
//
//        if ($maxPrice) {
//            $query->where('price', '<=', $maxPrice);
//        }
//
//        // Filter by category
//        if ($cat_id) {
//            $query->where('category_id', $cat_id);
//        }
//
//
//        // rating by filter
//        if (!empty(request()->get("rating"))) {
//            $rating = (int) request()->get("rating");
//            $query->whereHas("reviews", function ($q) use ($rating) {
//                $q->groupBy("reviews.id")
//                    ->havingRaw("AVG(reviews.rating) >= ?", [$rating])
//                    ->havingRaw("AVG(reviews.rating) < ?", [$rating + 1]);
//            });
//        }
//
//
//        // Sort by specified column and order
//        if ($sortBy === 'created_at') {
//            $query->orderBy('created_at', $sort);
//        }
//
//        $all_services = $query->paginate(10);
//
//
//        if ($all_services->isNotEmpty()) {
//
//            foreach ($all_services as $service)
//            {
//                $service->variant_id=$variant_id;
//            }
//
//
//            return response()->json([
//                'all_services' => ServiceSummaryResource::collection($all_services->items()),
//                'pagination' => [
//                    'total' => $all_services->total(),
//                    'count' => count($all_services->items()),
//                    'per_page' => $all_services->perPage(),
//                    'current_page' => $all_services->currentPage(),
//                    'last_page' => $all_services->lastPage(),
//                    'next_page_url' => $all_services->nextPageUrl(),
//                    'prev_page_url' => $all_services->previousPageUrl(),
//                ]
//            ]);
//        }
//
//        return response()->json([
//            'message' => __('Service Not Available'),
//        ]);
//    }


    public function allServices(Request $request)
    {
        $title = $request->input('title');
        $sort = $request->input('sort', 'desc');
        $sortBy = $request->input('sort_by', 'created_at');
        $minPrice = $request->input('min_price');
        $maxPrice = $request->input('max_price');
        $cat_id = $request->input('cat_id');
        $variant_id = $request->input('variant_id');
        $search_type = $request->input('search_type');
        $rating = $request->input('rating');

        if (is_null($variant_id)) {
            return response()->json([
                'message' => __('Variant id is required'),
            ]);
        }

        // Base query
        $query = Service::with(['reviews','includes','faqs','admin','serviceAdditional','serviceCar'])
            ->where('status', 1)
            ->where('is_published', 1);

        if ($search_type == 1) {
            $query->where('type', 0);
        } elseif ($search_type == 2) {
            $query->where('type', 1);
        }

        if ($title) {
            $query->where('title', 'like', '%' . $title . '%');
        }

        if ($cat_id) {
            $query->where('category_id', $cat_id);
        }

        // Fetch paginated results first
        $all_services = $query->orderBy($sortBy, $sort)->get();
        $services = $all_services;

        $serviceIds = collect($services)->pluck('id');

        // Get variant-specific prices/images
        $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
            ->where('varient_id', $variant_id)
            ->get()
            ->keyBy('service_id');

        foreach ($services as $service) {
            if (isset($serviceCars[$service->id])) {
                $serviceCar = $serviceCars[$service->id];
                $service->price = $serviceCar->price;
                $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                $service->image = $serviceCar->image ?: $service->image;
            }
            $service->final_price = $service->getFinalPrice($variant_id);
            $service->rating = round($service->reviews->avg('rating') ?? 0, 1);
            $service->variant_id = $variant_id;
        }

        // Apply minPrice, maxPrice, rating filter on updated collection
        if($minPrice || $maxPrice || $rating)
        {
            $services = filterServiceList::filterList($services, $minPrice, $maxPrice, $rating);
        }

        $services = collect($services);

        // Manual pagination
        $currentPage = $request->input('page', 1);
        $perPage = 10;
        $total = $services->count();
        $paginatedServices = $services->forPage($currentPage, $perPage);

       //  preserving all filters
        $queryParams = $request->except('page');

        if ($paginatedServices->isEmpty()) {
            return response()->json(['message' => __('Service Not Available')]);
        }

        return response()->json([
            'all_services' => ServiceSummaryResource::collection($paginatedServices),
            'pagination' => [
                'total' => $total,
                'count' => count($paginatedServices),
                'per_page' => $perPage,
                'current_page' => $currentPage,
                'last_page' => ceil($total / $perPage),
                'next_page_url' => $currentPage < ceil($total / $perPage)
                    ? url()->current() . '?' . http_build_query(array_merge($queryParams, ['page' => $currentPage + 1]))
                    : null,
                'prev_page_url' => $currentPage > 1
                    ? url()->current() . '?' . http_build_query(array_merge($queryParams, ['page' => $currentPage - 1]))
                    : null,
            ]
        ]);

    }



    // service details
    public function serviceDetails(Request $request,$id=null,$variant_id=null){
        // Validate the provided ID
        if (is_null($id) || !is_numeric($id)) {
            return response()->json([
                'message' => __('Invalid service ID provided'),
            ]);
        }
        $variant_id = $variant_id;

        if (is_null($variant_id)) {
            return response()->json([
                'message' => __('Variant id is required'),
            ]);
        }

        $services=Service_Car::where("varient_id",$variant_id)->where("service_id",$id)->get();
        if ($services->isEmpty()) {
            return response()->json([
                "message"=> __("No Service Available"),
            ]);

        }
        $service_ids=[];
        $today = now()->startOfDay();
        foreach($services as $service)
        {
            $service_ids[]= $service->service_id;
        }


        // service details
        $query = Service::with([
            'includes',
            'faqs',
            'admin',
            'category',
            'sub_category',
            'serviceAdditional',
            'reviews.reviewer',
            'serviceCar',
        ])->whereIn('id', $service_ids);


       $service_details = $query->where('id', $id)
            ->where('status', 1)
            ->where('is_published', 1)
            ->first();

        // Validate the provided ID
        if (is_null($service_details)) {
            return response()->json([
                'message' => __('Service not found'),
            ]);
        }

        $service_details->variant_id=$variant_id;
        $serviceCar = Service_Car::where('service_id', $id)
            ->where('varient_id', $variant_id)
            ->first();

        if ($serviceCar) {
            $service_details->price = $serviceCar->price;
            $service_details->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
            $service_details->image= $serviceCar->image ?: $service_details->image;
        }

        $finalDiscountPrice = $service->discount_price;

        if ($service_details->offer_service->isNotEmpty()) {
            $offerService = $service_details->offer_service->first();
            if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                $finalDiscountPrice = $service_details->price - (($service_details->price * $offerService->offer?->offerPercentage) / 100);
            }
        }

        $service_details->discount_price = $finalDiscountPrice;

        // Fetch relevant services based on provider and category
        $relevant_services = Service::with([
            'includes',
            'faqs',
            'admin',
            'category',
            'sub_category',
            'admin.adminStaff',
            'reviews.reviewer',
            'offer_service',
            'serviceCar',
            'serviceAdditional',
        ])
            ->whereHas('serviceCar', function ($q) use ($variant_id) {
                $q->where('varient_id', $variant_id);
            })
        ->where('status', 1)
        ->where('is_published', 1)
        ->where(function ($query) use ($service_details) {
            $query->Where('category_id', $service_details->category_id)
                  ->orWhere('admin_id', $service_details->admin_id);
        })
         ->where('id', '!=', $id)
        ->limit(10)
        ->get();

       foreach ($relevant_services as $relevant)
       {
           $relevant->variant_id=$variant_id;
       }

        // Add custom price
        $serviceIds = $relevant_services->pluck('id');

        $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
            ->where('varient_id', $variant_id)
            ->get()
            ->keyBy('service_id');

        foreach ($relevant_services as $service) {
            if (isset($serviceCars[$service->id])) {
                $serviceCar = $serviceCars[$service->id];
                $service->price = $serviceCar->price;
                $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                $service->image= $serviceCar->image ?: $service->image;
            }
            $finalDiscountPrice = $service->discount_price;

            if ($service->offer_service->isNotEmpty()) {
                $offerService = $service->offer_service->first();
                if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                    $finalDiscountPrice = $service->price - (($service->price * $offerService->offer?->offerPercentage) / 100);
                }
            }

            $service->final_price = $finalDiscountPrice;
        }



        if ($service_details) {

            return response()->json([
                'service_details' => new ServiceDetailsResource($service_details),
                'relevant_service_lists' => $relevant_services ? ServiceSummaryResource::collection($relevant_services) : null,
            ]);
        }

        // Return a not found response if no service was found
        return response()->json([
            'message' => __('Service Not Available'),
        ]);

    }


    public function featuredServices(Request $request)
    {
        $variant_id=$request->input("variant_id");
        $today = now()->startOfDay();
        if (is_null($variant_id)) {
            return response()->json([
               'message' => __('Variant id is required'),
            ]);
        }

        $services=Service_Car::where("varient_id",$variant_id)->get();
        if ($services->isEmpty()) {
            return response()->json([
                "message"=> __("No Service Available"),
            ]);

        }
        $service_ids=[];
        foreach($services as $service)
        {
            $service_ids[]= $service->service_id;
        }

        $query = Service::with( 'reviews', 'includes','faqs',  'serviceCar', 'serviceAdditional')
            ->whereIn('id', $service_ids)
            ->where('status',1)
            ->where('is_published',1)
            ->where('is_featured', 1);

        $all_services = $query->inRandomOrder()->paginate(10);
        // Add custom price
        $serviceIds = $all_services->pluck('id');

        $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
            ->where('varient_id', $variant_id)
            ->get()
            ->keyBy('service_id');

        foreach ($all_services as $service) {
            if (isset($serviceCars[$service->id])) {
                $serviceCar = $serviceCars[$service->id];
                $service->price = $serviceCar->price;
                $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                $service->image= $serviceCar->image ?: $service->image;
            }
            $finalDiscountPrice = $service->discount_price;

            if ($service->offer_service->isNotEmpty()) {
                $offerService = $service->offer_service->first();
                if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                    $finalDiscountPrice = $service->price - (($service->price * $offerService->offer?->offerPercentage) / 100);
                }
            }

            $service->final_price = $finalDiscountPrice;
            $service->variant_id=$variant_id;
        }
        $all_services->appends($request->all());
        if ($all_services->isNotEmpty()) {
            return response()->json([
                'all_services' => ServiceSummaryResource::collection($all_services->items()),
                'pagination' => [
                    'total' => $all_services->total(),
                    'count' => $all_services->count(),
                    'per_page' => $all_services->perPage(),
                    'current_page' => $all_services->currentPage(),
                    'last_page' => $all_services->lastPage(),
                    'next_page_url' => $all_services->nextPageUrl(),
                    'prev_page_url' => $all_services->previousPageUrl(),
                ]
            ]);
        }

        return response()->json([
            'message' => __('Service Not Available'),
        ]);
    }

    public function popularServices(Request $request)
    {
        $today = now()->startOfDay();
        $variant_id=$request->input("variant_id");
        if (is_null($variant_id)) {
            return response()->json([
               'message' => __('Variant id is required'),
            ]);
        }
        $type=2;


        if(isset($request->type))
        {
            if($request->type==0 ||$request->type=='0')
            {
                $type=0;

            }
            else if($request->type==1 || $request->type=='1')
            {
                $type=1;
            }
        }

        $services=Service_Car::where("varient_id",$variant_id)->get();
        if ($services->isEmpty()) {
            return response()->json([
                "message"=> __("No Service Available"),
            ]);

        }
        $service_ids=[];
        foreach($services as $service)
        {
            $service_ids[]= $service->service_id;
        }
        if($type == 0 || $type == 1)
        {
            $popularServices = Service::with('reviews', 'includes', 'excludes', 'faqs', 'addons', 'orderItems')
            ->where("services.type", $type)
            ->whereIn('services.id', $service_ids)
            ->where('services.status', 1)
            ->where('services.is_published', 1)
            ->withCount('orderItems')  // Count the related order items
            ->orderByDesc('order_items_count') // Sort by the counted order items
            ->paginate(10);

        }
        else
        {
            $popularServices = Service::with('reviews', 'includes', 'excludes', 'faqs', 'addons', 'orderItems')
            ->whereIn('services.id', $service_ids)
            ->where('services.status', 1)
            ->where('services.is_published', 1)
            ->withCount('orderItems')  // Count the related order items
            ->orderByDesc('order_items_count') // Sort by the counted order items
            ->paginate(10);

        }


        if ($popularServices->isNotEmpty()) {
            // Add custom price
            $serviceIds = $popularServices->pluck('id');

            $serviceCars = Service_Car::whereIn('service_id', $serviceIds)
                ->where('varient_id', $variant_id)
                ->get()
                ->keyBy('service_id');

            foreach ($popularServices as $service) {
                if (isset($serviceCars[$service->id])) {
                    $serviceCar = $serviceCars[$service->id];
                    $service->price = $serviceCar->price;
                    $service->discount_price = $serviceCar->discount_price ?? $serviceCar->price;
                    $service->image= $serviceCar->image ?: $service->image;
                }
                $finalDiscountPrice = $service->discount_price;

                if ($service->offer_service->isNotEmpty()) {
                    $offerService = $service->offer_service->first();
                    if ($offerService && $offerService->offer && $offerService->offer->status == 1 && $offerService->offer->expires_at >= $today) {
                        $finalDiscountPrice = $service->price - (($service->price * $offerService->offer?->offerPercentage) / 100);
                    }
                }

                $service->final_price = $finalDiscountPrice;
                $service->variant_id=$variant_id;
            }
            $popularServices->appends($request->all());
            return response()->json([
                'all_services' => ServiceSummaryResource::collection($popularServices->items()),
                'pagination' => [
                    'total' => $popularServices->total(),
                    'count' => $popularServices->count(),
                    'per_page' => $popularServices->perPage(),
                    'current_page' => $popularServices->currentPage(),
                    'last_page' => $popularServices->lastPage(),
                    'next_page_url' => $popularServices->nextPageUrl(),
                    'prev_page_url' => $popularServices->previousPageUrl(),
                ]
            ]);
        }

        return response()->json([
            'message' => __('Service Not Available'),
        ]);
    }



}
