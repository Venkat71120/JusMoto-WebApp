<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OutletDetailsResource extends JsonResource
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
            'outlet_name' => $this->name,
            'address' => $this->address,
            'state' => $this->state?->state,
            'city' => $this->city?->city,
            'area' => $this->area?->area,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'zip_code' => $this->post_code
            
        ];
        
        
        
    }
}
