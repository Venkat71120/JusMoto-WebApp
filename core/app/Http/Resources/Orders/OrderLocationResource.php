<?php

namespace App\Http\Resources\Orders;

use App\Actions\Services\ImageModifier;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderLocationResource extends JsonResource
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
            'address' => $this->address,
            'state' => $this->state?->state,
            'city' => $this->city?->city,
            'area' => $this->area?->area,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'zip_code' => $this->post_code,
            'phone' => $this->phone,
            'emergency_phone' => $this->emergency_phone
            
        ];
        
        
        
    }
}
