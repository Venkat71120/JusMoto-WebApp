<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service_additional extends Model
{
    use HasFactory;
    protected $fillable=['service_id','title','image','type'];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
