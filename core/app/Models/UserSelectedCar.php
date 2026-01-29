<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSelectedCar extends Model
{
    protected $fillable=[
        'user_id',
        'guest_token',
        'brand_id',
        'car_id',
        'engine_type_id',
        'fual_type_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }

    public function engine()
    {
        return $this->belongsTo(EngineType::class);
    }
    public function fual()
    {
        return $this->belongsTo(FualType::class);
    }
}
