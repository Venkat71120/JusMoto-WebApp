<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OutletResource extends JsonResource
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
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            
        ];
        
        
        
    }
}
