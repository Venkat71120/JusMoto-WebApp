<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AfterBookingStep extends Model
{
    use HasFactory;

    protected $fillable=['steps_no',"steps"];
}
