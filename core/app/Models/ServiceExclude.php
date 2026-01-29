<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceExclude extends Model
{
    use HasFactory;

    protected $table = 'service_excludes';

    protected $fillable = [
        'service_id',
        'title',
        'description',
    ];

}
