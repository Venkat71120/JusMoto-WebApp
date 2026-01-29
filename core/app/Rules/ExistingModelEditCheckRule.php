<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Car;
use App\Models\Offer;
use App\Models\OfferService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ExistingModelEditCheckRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */

     protected $carId;
     public function __construct($carId)
     {
         $this->carId = $carId; // Store the provided id
     }
   
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $existing=Car::where('brand_id',$value)->where('name',request()->name)->where('Year',request()->year)->whereNot('id',$this->carId)->first();
        if($existing)
        {
            $fail(__('Car with this name and brand and year already exists.'));
        }
    }
}
