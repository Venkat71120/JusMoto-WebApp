<?php

namespace App\Http\Resources\Services;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AfterBookingStepsResource extends JsonResource
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
            'step_no' => $this->steps_no,
            "steps" => $this->steps  
        ];
        
        
        
    }
}
