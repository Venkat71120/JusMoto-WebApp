<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\OfferService;
use App\Models\Offer;
class IsExistOfferServiceRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        

        $servicePresent=OfferService::where('service_id', $value)->where('type','0')->first();
       
        if($servicePresent)
        {
            $fail(__('One or more services are already included in  offers.'));
                
        }
            
        
    }
}
