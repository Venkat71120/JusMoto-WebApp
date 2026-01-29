<?php

namespace Modules\DeliveryCharge\app\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\CountryManage\app\Models\City;
use Modules\DeliveryCharge\Database\factories\CityDeliveryChargeFactory;

class CityDeliveryCharge extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'state_id',
        'city_id',
        'delivery_charge',
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function state()
    {
        return $this->belongsTo(StateDeliveryCharge::class, 'state_id');
    }

}
