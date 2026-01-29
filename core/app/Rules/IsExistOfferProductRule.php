<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\OfferService;
use App\Models\Offer;
class IsExistOfferProductRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        $productPresent=OfferService::where('service_id', $value)->where('type','1')->first();
       
        if($productPresent)
        {
            $fail(__('One or more products are already included in  offers.'));
                
        }
            
        
    }
}
