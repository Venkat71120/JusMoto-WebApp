<?php

namespace App\Rules;

use App\Models\Offer;
use App\Models\OfferService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Helpers\FlashMsg;

class CheckCombinationOfEngineFualRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    protected $collections=[];
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
      
        $fual_type_id=request()->fual_type_id;
        for($i=0;$i<count($value);$i++)
                {
                    for($j=$i+1;$j<count($value);$j++)
                    {
                        if($value[$i]==$value[$j] && $fual_type_id[$i] == $fual_type_id[$j])
                        {
                            $fail(__('This combination of engine and fual type already exists.'));
                        }
                    }
                }
        
       
    }
}
