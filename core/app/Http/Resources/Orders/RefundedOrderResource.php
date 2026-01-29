<?php

namespace app\Http\Resources\Orders;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\RefundGateway;

class RefundedOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $gateway_name=null;
        if($this->gateway_id)
        {
            $gateway=RefundGateway::where("id",$this->gateway_id)->first();
            $gateway_name=$gateway->name;
        }

        return [
            'id' => $this->id,
           'order_id' => $this->order_id,
            'user_id' => $this->user_id,
            'amount' => $this->amount,
            'gateway_id' => $this->gateway_id,
            'gateway_name'=>$gateway_name,
            'status' => $this->status,

        ];
    }
}
