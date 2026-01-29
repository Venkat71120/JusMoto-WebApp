<?php

namespace App\Http\Resources\Orders;

use App\Http\Resources\AdminResource;
use App\Http\Resources\ProviderResource;
use App\Http\Resources\Services\ItemsDetailsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderListForClientResource extends JsonResource
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
            'time'=>str_replace('"','',$this->schedule),
            'date'=>$this->date,
            'total' => $this->total,
            'invoice_number' => $this->invoice_number,
            'status' => $this->status,
            'payment_status' => $this->payment_status,
            'payment_gateway' => $this->payment_gateway,
            'created_at' => $this->created_at ? $this->created_at->format('d-m-Y') : null,
        ];
    }
}
