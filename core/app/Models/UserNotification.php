<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class UserNotification extends Model
{
    use HasFactory;
    protected $fillable = ['identity','user_id','type','message','is_read'];

    public static function notification()
    {
        return self::where("user_id",Auth::user()->id)->latest()->take(10)->get();
    }

    public static function unread_notification_count()
    {
        return self::where("user_id",Auth::user()->id)->where('is_read', 'unread')->count();
    }
}
