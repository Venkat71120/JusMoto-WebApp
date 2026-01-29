<?php

namespace App\Http\Resources\Orders;

use App\Http\Resources\Orders\OrderDetailsResource;
use App\Http\Resources\Orders\OrderLocationResource;
use App\Http\Resources\Services\ItemsDetailsResource;
use App\Http\Resources\Services\OutletDetailsResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\Users\ClientPublicDetailsResource;
use App\Models\Backend\Admin_outlet_location;
use App\Models\Order;
use App\Models\RefundGateway;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Modules\JobPost\app\Resources\JobDetailsPublicResource;

class RefundDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $order=Order::findOrFail($this->order_id);
        $gateway_name=null;
        if($this->gateway_id)
        {
            $gateway=RefundGateway::where("id",$this->gateway_id)->first();
            $gateway_name=$gateway->name;
        }
        
       
        return [
            'id' => $this->id,
            'user' =>$this->user_id,
            "order"=>$order ? new OrderDetailsResource($order) : null,
            'amount'=>$this->amount,
            'cancel_reason'=>$this->cancel_reason,
            'gateway_id'=>$this->gateway_id,
            'gateway_name'=>$gateway_name,
            "gateway_fields"=>json_decode($this->gateway_fields, true),
            'image'=>$this->image,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}
