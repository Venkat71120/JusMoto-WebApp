<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    public function addReview(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'rating' => 'required|numeric|min:1|max:5',
            'message' => 'nullable',
            'service_id' => 'required|exists:services,id',
            'order_id'=>'required|exists:orders,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'validation_error',
                'errors' => $validator->errors(), // Send all errors
            ]);
        }

        $reviewer_id = Auth::user()->id;
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
                'status' => "failed",
                'message' => __('You have already reviewed this service.')
            ], 200);
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
                'status' => 'success',
                'message' => __('Review added successfully.')
            ],200);
        }


    }
}
