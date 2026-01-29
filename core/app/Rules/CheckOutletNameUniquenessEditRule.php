<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Backend\Admin_outlet_location;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckOutletNameUniquenessEditRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    protected $outletId;
    public function __construct($outletId)
    {
        $this->outletId = $outletId; // Store the provided id
    }
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $latitude=request()->latitude;
        $longitude=request()->longitude;
        $existing=Admin_outlet_location::where('name',$value)->where('latitude',$latitude)->where('longitude',$longitude)->whereNot("id",$this->outletId)->first();
        if($existing)
        {
            $fail(__('Outlet with this location already exists.'));
        }
    }
}
