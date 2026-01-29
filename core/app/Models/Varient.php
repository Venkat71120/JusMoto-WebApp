<?php

namespace App\Models;

use App\Models\Backend\MetaData;
use App\Models\EngineType;
use App\Models\FualType;
use App\Models\Service_Car;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Varient extends Model
{
    use HasFactory;
    protected $fillable = [
        'car_id',
        'engine_type_id',
        'fual_type_id'];


        public function metaData(){
            return $this->morphOne(MetaData::class,'meta_taggable');
        }
        public function engineType(){
            return $this->belongsTo(EngineType::class,'engine_type_id');
        }
        public function fualType(){
            return $this->belongsTo(FualType::class,'fual_type_id');
        }
        public function car(){
            return $this->belongsTo(Car::class,'car_id');
        }
       
        public function serviceCar()
        {
            return $this->hasMany(Service_Car::class);
        }
}
