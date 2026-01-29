<?php

namespace App\Http\Resources\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Actions\Services\ImageModifier;


class Reviewerresource extends JsonResource
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
            'full_name' => $this->first_name.' '.$this->last_name,
            'email' => $this->email,
            'image' => ImageModifier::ImageUrl($this->image),
            
        ];
        
        
        
    }
}
