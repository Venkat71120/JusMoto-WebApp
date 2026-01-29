<?php

namespace App\Http\Resources\Users;

use App\Actions\Services\ImageModifier;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientPublicDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $reviews = $this->reviews ?? collect();
        $reviewCount = $reviews->count();
        $averageRating = $reviewCount > 0 ? $reviews->avg('rating') : 0;

        

        return [
            'id' => $this->id,
            'fullname' => $this->firstName . ' ' . $this->lastName,
            'image' => ImageModifier::ImageUrl($this->image),
            'review_count' => $reviewCount,
            'average_rating' => number_format($averageRating, 1),
            'created_at' => $this->created_at,
            'client_last_seen' => $this->last_seen,
            
        ];
    }
}
