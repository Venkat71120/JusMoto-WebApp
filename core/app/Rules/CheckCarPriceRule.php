<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Car;
use App\Models\Offer;
use App\Models\OfferService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckCarPriceRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
   
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        
        $use_default=request()->use_default;
        $discount_price=request()->discount_price1;
        $unit=request()->unit1;
        $duration=request()->duration1;
        if($use_default != 1 && !$value)
        {
            $fail(__('Use default price of service or provide price .'));
        }else if($use_default == 1 && $value)
        {
            $fail(__('Use default price of service or provide price not both.'));
        }

        if($use_default == 1 && $discount_price )
        {
            $fail(__('Use default price of service or provide discount price not both.'));
        }

        if($use_default == 1 && $unit )
        {
            $fail(__('Use default unit of service or provide unit not both.'));
        }
        
        if($use_default == 1 && $duration )
        {
            $fail(__('Use default duration of service or provide duration not both.'));
        }

    }
}
