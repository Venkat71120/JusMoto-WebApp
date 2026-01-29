<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Jobs\SendWhatsAppMessage;
use App\Models\Backend\AdminNotification;
use App\Models\Review;
use App\Rules\CheckCombinationOfEngineFualRule;
use App\Rules\ExistingModelCheckRule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Modules\SMSGateway\app\Models\SmsGateway;
use Twilio\Rest\Client;

class ReviewController extends Controller
{
    public function allReviews(){
        $all_reviews = Review::with('reviewer','service','admin')->latest()->paginate(10);
        return view('backend.pages.admin.review.allReviews', compact('all_reviews'));
    }
 
     public function reviewDelete($id){
         try {
             $review = Review::findOrFail($id);
 
             $review->delete();
 
             return redirect()->back()->with(FlashMsg::item_delete(__('Review Deleted Success')));
         } catch (ModelNotFoundException $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__('Review not found.')));
         } catch (\Exception $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__('An error occurred while deleting the review')));
         }
     }
 
     // search category
     public function reviewSearch(Request $request)
     {
         $all_reviews = Review::with('reviewer','service','admin')->where('rating',$request->string_search)->latest()->paginate(10);
         return $all_reviews->total() >= 1 ? view('backend.pages.admin.review.search-review',
             compact('all_reviews'))->render() : response()->json(['status'=>__('nothing')]);
     }
 
     //  Car pagination
     public function reviewPaginate(Request $request)
     {
         if($request->ajax()){
             $all_reviews =  Review::with('reviewer','service','admin')->latest()->paginate(10);
             return view('backend.pages.admin.review.search-review', compact('all_reviews'))->render();
         }
     }

 
     public function reviewDetails($id){
         $review = Review::with('reviewer','service','admin')->find($id);
         
         if (!$review) {
             abort(404);
         }
 
       
 
         return view('backend.pages.admin.review.review-details', compact('review'));
     }

        public function reviewStatus($id){
            $review = Review::findOrFail($id);

           
            if (!$review) {
                abort(404);
            }

            if($review->status == "published"){
                $review->status = "pending";

            }else{
                $review->status = "published";
            }
            $review->save();
          
         
            return redirect()->back()->with(FlashMsg::item_new(__('Review status changed successfully')));
           
        } 


    

 
}
