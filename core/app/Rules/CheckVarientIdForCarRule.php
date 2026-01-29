<?php

namespace App\Rules;

use App\Models\Offer;
use App\Models\OfferService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Helpers\FlashMsg;

class CheckVarientIdForCarRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    protected $collections=[];
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
      
        $car_variant_id=request()->car_variant_id;
        for($i=0;$i<count($value);$i++)
                {
                    for($j=$i+1;$j<count($value);$j++)
                    {
                        if($value[$i]==$value[$j] && $car_variant_id[$i] == $car_variant_id[$j])
                        {
                            $fail(__('This combination of car and variant already exists.'));
                        }
                    }
                }
        
       
    }
}
