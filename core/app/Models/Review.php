<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Backend\Admin;

class Review extends Model
{
    use HasFactory;
    protected $table = 'reviews';
    protected $fillable = ['admin_id','reviewer_id','rating','service_id','type', 'message','status','order_id'];

    public function ratingMax($max)
    {
        return $this->avg('rating') <= $max;
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id', 'id');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }

    
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

}
