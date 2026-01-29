<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use App\Http\Resources\AdminResource;
use App\Http\Resources\CategoryDetailsResource;
use App\Http\Resources\ChildCategoryDetailsResource;
use App\Http\Resources\Reviews\ServiceReviewResource;
use App\Http\Resources\Services\CarServiceResource;
use App\Http\Resources\Services\ServiceIncludesResource;
use App\Http\Resources\SubCategoryDetailsResource;
use App\Http\Resources\Users\ProviderPublicDetailsResource;
use App\Http\Resources\Users\ProviderShortInfoResource;
use App\Http\Services\UpdateDiscountPrice;
use App\Models\Offer;
use App\Models\OfferService;
use App\Models\Service_Car;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CarServiceSummaryResource extends JsonResource
{
   

    public function toArray(Request $request): array
    {
        if($this->car_id)
        {
            $car_service=Service_Car::with('car')->where("car_id",$this->car_id)->where('service_id',$this->id)->first();
           
        }
        else
        {
            $car_service=null;
        }

        $offer=OfferService::where("service_id",$this->id)->where('type',$this->type)->first();
        $offer_id=$offer?->offer_id;
        $offers=Offer::where("id",$offer_id)->first();
        $percentage=$offers?->offerPercentage;
        
        return [
            'id' => $this->id,
            'category' => $this->category ? new CategoryDetailsResource($this->category) : null,
            'sub_category' => $this->sub_category ? new SubCategoryDetailsResource($this->sub_category) : null,
            'title' => $this->title,
            'slug' => $this->slug,
            'type' => $this->type,
            'unit' => $this->unit,
            'price' => $this->price,
            'discount_price' => UpdateDiscountPrice::updateServiceDiscountPrice($this->price,$this->discount_price,$percentage,$offer_id),
            'sold_count' => $this->old_count,
            'duration'=>$this->duration,
            'max_qty' => $this->max_qty,
            'is_featured' => $this->is_featured,
            'image' => $this->image ? ImageModifier::ImageUrl($this->image) : '',
            'status' => $this->status,
            'is_published' => $this->is_published,
            'created_at' => $this->created_at,
            'total_reviews' => $this->reviews()->count(),
            'average_rating' => number_format($this->reviews()->avg('rating') ?? 0, 1),
            'includes' => ServiceIncludesResource::collection($this->includes)->collection,
            'service_car'=>$car_service ? new CarServiceResource($car_service,$percentage,$offer_id) : null,
        ];                    
    }
}
