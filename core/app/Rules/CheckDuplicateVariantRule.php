<?php

namespace App\Rules;

use App\Helpers\FlashMsg;
use App\Models\Car;
use App\Models\Offer;
use App\Models\OfferService;
use App\Models\Service;
use App\Models\Service_Car;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckDuplicateVariantRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $existings=session()->get("values");
        $editExistings=session()->get("editValues");
        $productExistings=session()->get("productValues");
        $productEditExistings=session()->get("editProductValues");
        $variant_id=request()->car_variant;
        if($existings)
        {
            foreach($existings as $existing)
            {
                if($existing->variant_id==$variant_id && $existing->car_id==$value)
                {
                    $fail(__('Service with this car and variant already exists.'));
                }
            }
           
        }
        else if($editExistings)
        {
            foreach($editExistings as $existing)
            {
                if($existing->variant_id==$variant_id && $existing->car_id==$value)
                {
                    $fail(__('Service with this car and variant already exists.'));
                }
            }
        }
        else if($productExistings)
        {
            foreach($productExistings as $existing)
            {
                if($existing->variant_id==$variant_id && $existing->car_id==$value)
                {
                    $fail(__('Service with this car and variant already exists.'));
                }
            }
        }
        else if($productEditExistings)
        {
            foreach($productEditExistings as $existing)
            {
                if($existing->variant_id==$variant_id && $existing->car_id==$value)
                {
                    $fail(__('Service with this car and variant already exists.'));
                }
            }
        }
    }
}
