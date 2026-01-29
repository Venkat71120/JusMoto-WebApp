<?php

namespace Modules\DeliveryCharge\app\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\CountryManage\app\Models\State;
use Modules\DeliveryCharge\Database\factories\StateDeliveryChargeFactory;

class StateDeliveryCharge extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'state_id',
        'delivery_charge',
    ];

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    public function cities()
    {
        return $this->hasMany(CityDeliveryCharge::class, 'state_id');
    }
}
