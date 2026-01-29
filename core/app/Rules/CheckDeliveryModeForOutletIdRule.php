<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Backend\Admin_outlet_location;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckDeliveryModeForOutletIdRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $delivery_mode=request()->delivery_mode;
        $outlet_id=request()->outlet_id;
        if($delivery_mode == 'walkin' && !$outlet_id)
        {
            $fail(__('Outlet id is required'));
        }
    }
}
