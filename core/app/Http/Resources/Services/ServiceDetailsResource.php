<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\GalleryImageModifier;
use App\Actions\Services\ImageModifier;
use App\Http\Resources\AdminWithStaffResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ChildCategoryResource;
use App\Http\Resources\ProviderWithStaffResource;
use App\Http\Resources\Reviews\ServiceReviewResource;
use App\Http\Resources\Services\AfterBookingStepsResource;
use App\Http\Resources\Services\CarServiceResource;
use App\Http\Resources\Services\ReviewResource;
use App\Http\Resources\Services\ServiceAdditionalResource;
use App\Http\Resources\Services\ServiceExcludesResource;
use App\Http\Resources\Services\ServiceIncludesResource;
use App\Http\Resources\Services\ServicsAddonResource;
use App\Http\Resources\Services\ServicsFaqResource;
use App\Http\Resources\SubCategoryResource;
use App\Http\Services\UpdateDiscountPrice;
use App\Models\AfterBookingStep;
use App\Models\Offer;
use App\Models\OfferService;
use App\Models\Review;
use App\Models\Service_Car;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        if($this->variant_id)
        {
            $car_service=Service_Car::with('varient')->where("varient_id",$this->variant_id)->where('service_id',$this->id)->first();
        }
        else
        {
            $car_service=null;
        }

        $offer=OfferService::where("service_id",$this->id)->where('type',$this->type)->first();
        $offer_id=$offer?->offer_id;
        $offers=Offer::where("id",$offer_id)->first();
        $percentage=$offers?->offerPercentage;
        $afterBookingSteps=AfterBookingStep::all();

        $review=Review::where("service_id",$this->id)->where("status","published")->paginate(5);
        $averageRating = $review->avg('rating');



        return [
            'id' => $this->id,
            'category' => $this->category ? new CategoryResource($this->category) : null,
            'sub_category' => $this->sub_category ? new SubCategoryResource($this->sub_category) : null,
            'title' => $this->title,
            'type' => $this->type,
            'slug' => $this->slug,
            'unit' => $this->unit,
            'price' => $this->price,
            'discount_price' => $this->discount_price,
            'sold_count' => $this->sold_count,
            'duration'=>$this->duration,
            'max_qty'=>$this->max_qty,
            'description' => $this->description,
            'is_featured' => $this->is_featured,
            'is_published' => $this->is_published,
            'status' => $this->status,
            'total_reviews' => $review->count(),
            'average_rating' =>number_format($averageRating ?? 0, 1),
            'image' => ImageModifier::ImageUrl($this->image),
            'gallery_images' => GalleryImageModifier::ImageUrl($this->gallery_images),
            'includes' => ServiceIncludesResource::collection($this->includes)->collection,
            'faqs' => ServicsFaqResource::collection($this->faqs)->collection,
            'service_additionals' => ServiceAdditionalResource::collection($this->serviceAdditional)->collection,
            'service_car'=> $car_service ? new CarServiceResource($car_service,$percentage,$offer_id) : null,
            'after_booking_steps' => $afterBookingSteps ? AfterBookingStepsResource::collection($afterBookingSteps) : null,
            'reviews_all'=>$review ? ReviewResource::collection($review) : null,
             'pagination' => [
                        'total' => $review->total(),
                        'count' => $review->count(),
                        'per_page' => $review->perPage(),
                        'current_page' => $review->currentPage(),
                        'last_page' => $review->lastPage(),
                        'next_page_url' => $review->nextPageUrl(),
                        'prev_page_url' => $review->previousPageUrl(),
                    ]

        ];
    }
}
