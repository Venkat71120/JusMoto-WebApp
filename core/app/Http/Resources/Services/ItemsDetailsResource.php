<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use App\Http\Resources\Services\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ItemsDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public function toArray(Request $request): array
    {
        $user_id = Auth::guard('sanctum')->user()->id;
        $review=Review::where("service_id",$this->service_id)->where("reviewer_id",$user_id)->where("order_id",$this->order_id)->where("status","published")->get();
        return [
            'id' => $this->id,
            'service_id'=>$this->service_id,
            'image' => ImageModifier::ImageUrl($this->image),
            'item_title' => $this->service?->title,
            'type' => $this->type,
            'qty' => $this->qty,
            'price' => $this->price, 
            'reviews_all'=>$review ? ReviewResource::collection($review) : null,
        ];
    }
}
