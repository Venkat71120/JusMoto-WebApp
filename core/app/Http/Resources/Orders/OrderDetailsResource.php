<?php

namespace App\Http\Resources\Orders;

use App\Http\Resources\Orders\OrderLocationResource;
use App\Http\Resources\Services\ItemsDetailsResource;
use App\Http\Resources\Services\OutletDetailsResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\Users\ClientPublicDetailsResource;
use App\Models\Backend\Admin_outlet_location;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Modules\JobPost\app\Resources\JobDetailsPublicResource;

class OrderDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user=User::findOrFail($this->user_id);
        if($this->staff_id!=null)
        {
            $staff=Staff::findOrFail($this->staff_id);
        }
        else
        {
            $staff=null;
        }
       
        
        $outlet=Admin_outlet_location::where("id",$this->outlet_location_id)->first();
        return [
            'id' => $this->id,
            'user' =>$user ? new ClientPublicDetailsResource($user) : null,
            'user_location'=>$this->OrderLocations ?  new OrderLocationResource($this->Orderlocations) : null,
            'items' => $this->orderItems ? ItemsDetailsResource::collection($this->orderItems) : null,
            'outlet_details' => $outlet ?  new OutletDetailsResource($outlet) : null,
            'staff_details' => $staff ? new StaffResource($staff) : null,
            'delivery_charge' => $this->delivery_charge,
            'delivery_mode' => $this->delivery_mode,
            'time'=>str_replace('"','',$this->schedule),
            'date'=>$this->date,
            'sub_total' => $this->sub_total,
            'coupon_code' => $this->coupon_code,
            'coupon_type' => $this->coupon_type,
            'coupon_amount' => $this->coupon_amount,
            'tax' => $this->tax,
            'total' => $this->total,
            'payment_gateway' => $this->payment_gateway,
            'payment_attachment' => $this->payment_attachment,
            'payment_status' => $this->payment_status,
            'transaction_id' => $this->transaction_id,
            'invoice_number' => $this->invoice_number,
            'status' => $this->status,
            'order_note' => $this->order_note,
            'created_at' => $this->created_at,
        ];
    }
}
