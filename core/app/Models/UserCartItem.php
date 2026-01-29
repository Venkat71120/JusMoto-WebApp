<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCartItem extends Model
{
    protected $fillable=[
        'user_id',
        'guest_token',
        'item_id',
        'quantity',
        'price',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class,'item_id','id');
    }
}
