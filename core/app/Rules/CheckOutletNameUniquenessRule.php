<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Backend\Admin_outlet_location;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckOutletNameUniquenessRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
   
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $latitude=request()->latitude;
        $longitude=request()->longitude;
        $existing=Admin_outlet_location::where('name',$value)->where('latitude',$latitude)->where('longitude',$longitude)->first();
        if($existing)
        {
            $fail(__('Outlet with this location already exists.'));
        }
    }
}
