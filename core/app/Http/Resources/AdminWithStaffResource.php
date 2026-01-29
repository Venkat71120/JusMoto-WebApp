<?php

namespace App\Http\Resources;

use App\Actions\Services\ImageModifier;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminWithStaffResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // Paginate the staff data with a limit of 10 per page

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'image' => ImageModifier::ImageUrl($this->image),
            
        ];
    }
}
