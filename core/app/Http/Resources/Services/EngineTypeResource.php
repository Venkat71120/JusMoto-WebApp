<?php

namespace App\Http\Resources\Services;

use App\Actions\Services\ImageModifier;
use App\Http\Services\UpdateDiscountPrice;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EngineTypeResource extends JsonResource
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
            'name'=>$this->name,
            
        ];
        
        
        
    }
}
