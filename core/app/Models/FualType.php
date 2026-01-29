<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Backend\MetaData;

class FualType extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'image'];
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
        return $this->hasMany(UserSelectedCar::class,'fual_type_id');
    }
}
