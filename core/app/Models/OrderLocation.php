<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;


class OrderLocation extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'state_id',
        'city_id',
        'area_id',
        'title',
        'post_code',
        'address',
        'phone',
        'emergency_phone',
        'latitude',
        'longitude',
        'type',
    ];

    public function Order()
    {
        return $this->belongsTo(Order::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }
    public function area()
    {
        return $this->belongsTo(Area::class, 'area_id');
    }

}
