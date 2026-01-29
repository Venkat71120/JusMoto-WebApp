<?php

namespace App\Models;

use App\Models\Backend\MetaData;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable=["name","image"];

    public function metaData(){
        return $this->morphOne(MetaData::class,'meta_taggable');
    }

    public function car()
    {
        return $this->hasMany(Car::class);
    }
    public function caches()
    {
        return $this->hasMany(Cache::class);
    }

    public function user_selected_car()
    {
        return $this->hasMany(UserSelectedCar::class,'brand_id');
    }

}
