<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceFaq extends Model
{
    use HasFactory;

    protected $table = 'service_faqs';

    protected $fillable = [
        'service_id',
        'title',
        'description',
    ];
}
