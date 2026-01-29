<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service_Car extends Model
{
    use HasFactory;
    protected $fillable=['service_id', 'varient_id','image','price','discount_price','unit','sold_count','use_default','duration'];
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
    public function varient()
    {
        return $this->belongsTo(Varient::class);
    }

}
