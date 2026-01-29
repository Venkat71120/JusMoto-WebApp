<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use App\Http\Services\UpdateDiscountPrice;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VarientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    

    // Accept additional parameters in the constructor
    public function toArray(Request $request): array
    {
        
        return [
            'id' => $this->id,
            'car_id' => $this->car_id,
            'engine_type' => new EngineTypeResource($this->engineType),
            'fual_type' => new FualTypeResource($this->fualType)
            
        ];
        
        
        
    }
}
