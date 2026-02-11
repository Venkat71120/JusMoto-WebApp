<?php

namespace App\Models\Backend;

use App\Models\Review;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Authenticatable
{
    use HasFactory, HasRoles, Notifiable, HasApiTokens;
    protected $fillable = [
        'name',
        'email',
        'image',
        'role',
        'password',
        'username',
        'email_verified',
        'about',
        'status'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    
    public function adminStaff()
    {
        return $this->hasMany(Staff::class, 'admin_id', 'id');
    }

    public function review()
    {
        return $this->hasMany(Review::class, 'admin_id', 'id');
    }
}
