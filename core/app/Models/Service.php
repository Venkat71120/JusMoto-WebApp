<?php

namespace App\Models;

use App\Models\Backend\Admin;
use App\Models\Backend\Category;
use App\Models\Backend\ChildCategory;
use App\Models\Backend\MetaData;
use App\Models\Backend\SubCategory;
use App\Models\Service_Car;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\State;
use Modules\CountryManage\app\Models\City;

class Service extends Model
{
    use HasFactory;

    protected $table = 'services';

    protected $fillable = [
        'admin_id',
        'category_id',
        'sub_category_id',
        'title',
        'slug',
        'description',
        'image',
        'gallery_images',
        'video_url',
        'price',
        'discount_price',
        'unit',
        'is_featured',
        'status',
        'is_published',
        'published_at',
        'max_qty',
        'type',
        'duration',
        'disable_staff',
        'sold_count'
    ];

    protected $casts = [
        'status' => 'integer',
    ];

    public function reviews(){
        return $this->hasMany(Review::class,'service_id','id');
    }

    public function admin(){
        return $this->belongsTo(Admin::class, 'admin_id', 'id');
    }

    public function includes(){
        return $this->hasMany(ServiceInclude::class,'service_id');
    }
    public function excludes(){
        return $this->hasMany(ServiceExclude::class,'service_id');
    }
    public function faqs(){
        return $this->hasMany(ServiceFaq::class,'service_id');
    }

    public function addons(){
        return $this->hasMany(ServiceAddon::class,'service_id');
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function sub_category()
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id', 'id');
    }

    public function child_category(){
        return $this->belongsTo(ChildCategory::class, 'child_category_id', 'id');
    }

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }

    public function area(){
        return $this->belongsTo(Area::class,'area_id','id');
    }

    public function metaData(){
        return $this->morphOne(MetaData::class,'meta_taggable');
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function scopeAdminServices($query)
    {
        return $query->whereNotNull('admin_id')->where('type',0);
    }
    public function scopeAdminProducts($query)
    {
        return $query->whereNotNull('admin_id')->where('type',1);
    }




    public function serviceReports()
    {
        return $this->hasMany(ServiceReport::class, 'service_id');
    }



    public function favoriteItems()
    {
        return $this->morphMany(FavoriteItem::class, 'favoritable');
    }

    // Helper method to determine if it's a provider or admin
    public function service_creator()
    {

        if ($this->admin_id) {
            return $this->admin();
        }
        return null;
    }
    public function serviceCar()
    {
        return $this->hasMany(Service_Car::class);
    }

    public function serviceAdditional()
    {
        return $this->hasMany(Service_additional::class);
    }

    public function offer_service()
    {
        return $this->hasMany(OfferService::class,'service_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class,'service_id');
    }

    public function review()
    {
        return $this->hasMany(Review::class);
    }

    public function cartItems()
    {
        return $this->hasMany(UserCartItem::class, 'item_id', 'id');
    }

    // Service.php
    public function getFinalPrice($variantId = null)
    {
        $serviceCar = $this->serviceCar()
            ->where('varient_id', $variantId)
            ->first();

        if (!$serviceCar) {
            $basePrice = $this->price;
        }else
        {
            $basePrice = $serviceCar->price;

        }

        // Apply offer discount if exists
        if ($this->offer_service->isNotEmpty()) {
            $activeOffer = $this->offer_service->first();

            if ($activeOffer->offer &&
                $activeOffer->offer->status == 1 &&
                $activeOffer->offer->expires_at >= now()->startOfDay()) {
                $discount_price= $basePrice - (($basePrice * $activeOffer->offer->offerPercentage )/100);

                return $discount_price ?? $basePrice;
            }
        }

        // If service has local discount price
        if ($serviceCar && $serviceCar->discount_price > 0) {
            return $serviceCar->discount_price;
        }else if(!$serviceCar && $this->discount_price > 0)
        {
            return $this->discount_price;
        }

        return $basePrice;
    }

}
