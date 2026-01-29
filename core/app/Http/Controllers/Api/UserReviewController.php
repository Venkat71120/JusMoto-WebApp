<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reviews\ReviewResource;
use App\Models\Review;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserReviewController extends Controller
{
    public function reviewAdd(Request $request)
    {
        $user = Auth::guard('sanctum')->user();

        if (!$user) {
            return response()->json([
                'message' => __('Please login to review this service.')
            ], 422);
        }

        try {
            $request->validate([
                'rating' => 'required|numeric|min:1|max:5',
                'message' => 'nullable',
                'service_id' => 'required|exists:services,id',
                'order_id'=>'required|exists:orders,id'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->errors(),
            ], 422);
        }

        $reviewer_id = Auth::guard('sanctum')->user()->id;
        $service_id = $request->service_id;
        $order_id=$request->order_id;
        $message = $request->message;
        $rating = $request->rating;


        $existingReview = Review::where('reviewer_id', $reviewer_id)
            ->where('service_id', $service_id)
            ->where('order_id', $order_id)
            ->exists();

        if ($existingReview) {
            return response()->json([
                'message' => __('You have already reviewed this service.')
            ], 422);
        }

        $service=Service::where("id", $service_id)->first();
        $admin_id=$service->admin_id;
        $type=$service->type;

        $review = Review::create([
            'admin_id' => $admin_id,
            'reviewer_id' => $reviewer_id,
            'rating' => $rating,
            'message' => $message,
            'service_id' => $service_id,
            'type' => $type,
            'order_id'=>$order_id,
        ]);

        if ($review) {
            return response()->json([
                'status' => 'add_success',
                'message' => __('Review added successfully.')
            ]);
        }
    }


    public function reviewListById(Request $request)
    {
       
        try {
            $request->validate([
                'service_id' => 'nullable|exists:services,id',
                'rating' => 'nullable'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->errors(),
            ], 422);
        }


        $service_id = $request->service_id;
        $rating = $request->rating;

        if(!$service_id && !$rating)
        {
            return response()->json([
                'message' => __('Provide service_id or rating or both.')
            ], 422);
        }
        $query = Review::with('reviewer','service')->where('status', 'published');
        if($service_id){
            $query->where('service_id', $service_id);
        }
        if($rating){
            $query->where('rating', $rating);
        }
        $reviews = $query->paginate(10);

        return response()->json([
            'all_reviews' => $reviews ? ReviewResource::collection($reviews) : null,
            'pagination' => [
                'total' => $reviews->total(),
                'count' => $reviews->count(),
                'per_page' => $reviews->perPage(),
                'current_page' => $reviews->currentPage(),
                'last_page' => $reviews->lastPage(),
                'next_page_url' => $reviews->nextPageUrl(),
                'prev_page_url' => $reviews->previousPageUrl(),
            ]
        ]);
       

    }

}
