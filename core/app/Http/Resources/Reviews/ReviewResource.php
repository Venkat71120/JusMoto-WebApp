<?php

namespace App\Http\Resources\Reviews;

use App\Http\Resources\ClientResource;
use App\Http\Resources\Users\ClientPublicDetailsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'admin_id' => $this->admin_id,
            'order_id'=>$this->order_id,
            'reviewer_id' => $this->reviewer_id,
            'service_id' => $this->service_id,
            'service_title' => $this->service?->title,
            'type' => $this->type,
            'rating' => $this->rating,
            'message' => $this->message,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'reviewer' => $this->whenLoaded('reviewer', function () {
                return new ClientPublicDetailsResource($this->reviewer);
            }),
        ];
    }
}
