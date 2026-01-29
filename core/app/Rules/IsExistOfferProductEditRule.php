<?php

namespace App\Rules;

use App\Models\Offer;
use App\Models\OfferService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class IsExistOfferProductEditRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    protected $offerId;
    public function __construct($offerId)
    {
        $this->offerId = $offerId; // Store the provided id
    }
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        //
        $productPresent=OfferService::where('service_id', $value)->where('offer_id','!=',$this->offerId)->where('type','1')->first();
      
            if($productPresent)
            {
              
                $fail(__('One or more product are already included in offers.'));      
                
            }
    }
}
