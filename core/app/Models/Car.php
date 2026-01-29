<?php

namespace App\Models;

use App\Models\Backend\MetaData;
use App\Models\Brand;
use App\Models\EngineType;
use App\Models\FualType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand_id',
        'name',
        'year',
        'image',
       ];

        public function brand()
        {
            return $this->belongsTo(Brand::class,'brand_id');
        }
        public function metaData(){
            return $this->morphOne(MetaData::class,'meta_taggable');
        }


        public function serviceCar()
        {
            return $this->hasMany(Service_Car::class);
        }
        public function varient()
        {
            return $this->hasMany(Varient::class);
        }

    public function user_selected_car()
    {
        return $this->hasMany(UserSelectedCar::class,'car_id');
    }

}
