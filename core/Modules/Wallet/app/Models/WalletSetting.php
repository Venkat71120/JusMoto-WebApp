<?php

namespace Modules\Wallet\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Wallet\Database\factories\WalletSettingFactory;

class WalletSetting extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];
    
    protected static function newFactory(): WalletSettingFactory
    {
        //return WalletSettingFactory::new();
    }
}
