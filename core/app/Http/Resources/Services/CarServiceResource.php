<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use App\Http\Services\UpdateDiscountPrice;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CarServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

     protected $percentage;
     protected $offer_id;
   
    

    // Accept additional parameters in the constructor
    public function __construct($resource,$percentage,$offer_id)
    {
        parent::__construct($resource);
        $this->percentage=$percentage;
        $this->offer_id=$offer_id;
    }
    public function toArray(Request $request): array
    {
        
        return [
            'id'=>$this->id,
            'name' => $this->varient?->car?->name,
            'image' => ImageModifier::ImageUrl($this->image),
            'price' => $this->price,
            'discount_price' => UpdateDiscountPrice::updateServiceDiscountPrice($this->price,$this->discount_price,$this->percentage,$this->offer_id),
            'variant'=>$this->varient ? new VariantServiceResource($this->varient) : null
        ];
        
        
        
    }
}
