<?php

namespace App\Models;

use App\Models\Backend\MetaData;
use App\Models\OfferService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'subTitle', 'image', 'status', 'is_primary','expires_at','offerPercentage'];

    public function offerService()
    {
        return $this->hasMany(OfferService::class);
    }

    public function metaData(){
        return $this->morphOne(MetaData::class,'meta_taggable');
    }

}
