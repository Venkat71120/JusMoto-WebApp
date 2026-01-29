<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Backend\MetaData;

class EngineType extends Model
{
    use HasFactory;
    protected $fillable = ['name'];
    public function car()
    {
        return $this->hasMany(Car::class);
    }
    public function metaData(){
        return $this->morphOne(MetaData::class,'meta_taggable');
    }
    public function varient()
    {
        return $this->hasMany(Varient::class);
    }

    public function user_selected_car()
    {
        return $this->hasMany(UserSelectedCar::class,'engine_type_id');
    }
}
