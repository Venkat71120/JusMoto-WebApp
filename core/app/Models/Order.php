<?php

namespace App\Models;

use App\Models\Backend\Admin_outlet_location;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Backend\Admin;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'admin_id',
        'staff_id',
        'outlet_location_id',
        'date',
        'schedule',
        'coupon_code',
        'coupon_type',
        'coupon_amount',
        'delivery_charge',
        'delivery_mode',
        'sub_total',
        'tax',
        'total',
        'payment_gateway',
        'transaction_id',
        "invoice_number",
        'payment_attachment',
        'complete_request',
        'payment_status',
        'status',
        'order_note',
        'is_refunded',
    ];

    protected $casts = [
        'status' =>'integer',
        'payment_status' => 'integer'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function OrderLocations()
    {
        return $this->hasOne(OrderLocation::class);
    }

    public function outletLocation()
    {
        return $this->belongsTo(Admin_outlet_location::class, 'outlet_location_id');
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class);
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }


    // Relationship to reviews


   public function orderItems()
   {
     return $this->hasMany(OrderItem::class);
   }

    public function refundedOrder()
    {
        return $this->hasOne(RefundedOrder::class);
    }

    public function review()
    {
      return $this->hasMany(Review::class);
    }

}
