<?php

namespace App\Http\Resources\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Services\Reviewerresource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    

    // Accept additional parameters in the constructor
    public function toArray(Request $request): array
    {
        $reviewer = User::where("id","$this->reviewer_id")->first();
        return [
            'id' => $this->id,
            'admin_id' => $this->admin_id,
            'reviewer'=>$reviewer ? new Reviewerresource($reviewer) : null,
            'service_id' => $this->service_id,
            'rating' => $this->rating,
            'message' => $this->message,
            'created_at' => $this->created_at, 
            
        ];
        
        
        
    }
}
