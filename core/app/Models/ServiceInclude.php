<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceInclude extends Model
{
    use HasFactory;

    protected $table = 'service_includes';

    protected $fillable = [
        'service_id',
        'title',
        'description',
    ];
}
