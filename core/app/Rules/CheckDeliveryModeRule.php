<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Backend\Admin_outlet_location;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckDeliveryModeRule implements ValidationRule
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
        if($delivery_mode != 'walkin' && !$outlet_id && !$value)
        {
            $fail(__('Location address is required'));
        }
    }
}
