<?php

namespace App\Models;

use App\Models\AccountDeactivate;
use App\Models\Backend\Category;
use App\Models\Backend\IdentityVerification;
use App\Models\Backend\Language;
use App\Models\Review;
use App\Models\Service;
use App\Models\SubOrder;
use App\Models\UserServiceLocation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Modules\Chat\app\Models\LiveChat;
use Modules\Chat\app\Models\LiveChatMessage;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;
use Modules\JobPost\app\Models\JobPost;
use Modules\SupportTicket\app\Models\Ticket;
use Modules\Wallet\app\Models\Wallet;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, softDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $authPasswordName = 'password';
    protected $fillable = [
        'first_name',
        'last_name',
        'username',
        'phone',
        'email',
        'date_of_birth',
        'password',
        'terms_condition',
        'email_verify_token',
        'email_verified',
        'check_online_status',
        'verified_status',
        'is_suspend',
        'status',
        'firebase_token',
        'otp_verified',
        'image',
        'last_seen',
        'check_online_status',
        'selected_lang'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'check_online_status'=>'datetime',
        'last_seen' => 'datetime',
        'email_verified' =>'integer'
    ];

    //get user full name
    public function getFullnameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

public function user_selected_cars()
{
    return $this->hasMany(UserSelectedCar::class,'user_id');
}


    public function user_state()
    {
        return $this->belongsTo(State::class,'state_id');
    }
    public function user_city()
    {
        return $this->belongsTo(City::class,'city_id');
    }
    public function user_area()
    {
        return $this->belongsTo(Area::class,'area_id');
    }



    public function services(){
        return $this->hasMany(Service::class,'provider_id','id');
    }

    public function reviews(){
        return $this->hasMany(Review::class,'reviewer_id','id');
    }
    public function account_deactivates(){
        return $this->hasMany(AccountDeactivate::class,'user_id','id');
    }

    public function member_unseen_message()
    {
        if (moduleExists('Chat')) {
            return $this->hasManyThrough(LiveChatMessage::class, LiveChat::class, 'member_id', 'live_chat_id');
        }
        return null;
    }

    public function user_unseen_message()
    {
        if (moduleExists('Chat')) {
            return $this->hasManyThrough(LiveChatMessage::class, LiveChat::class, 'user_id', 'live_chat_id');
        }
        return null;
    }




    // Relationship for service categories
    public function serviceCategories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'user_service_categories', 'user_id', 'category_id');
    }

    // Relationship for provider service categories
    public function userServiceLocation()
    {
        return $this->hasOne(UserServiceLocation::class, 'user_id');
    }

    public function userServiceCategory()
    {
        return $this->hasMany(UserServiceCategory::class, 'user_id', 'id');
    }

    // Relationship for suborders




    public function client_unseen_message(): HasManyThrough
    {
        return $this->hasManyThrough(LiveChatMessage::class, LiveChat::class,'client_id','live_chat_id');
    }

    public function refundedorder()
    {
        return $this->hasMany(RefundedOrder::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function wallet()
    {
        return $this->hasOne(Wallet::class, 'user_id');
    }

  

    public function languageDirection()
    {
        $lang_slug = $this->selected_lang ?? 'en';
        $language = Language::where('slug', $lang_slug)->first();

        return $language->direction ?? 'ltr';
    }

    public function languageSlug()
    {
        return $this->selected_lang ?? 'en';
    }

    public function favoriteItems()
    {
        return $this->hasMany(FavoriteItem::class, 'user_id', 'id');
    }

    public function cartItems()
    {
        return $this->hasMany(UserCartItem::class, 'user_id', 'id');
    }



}
