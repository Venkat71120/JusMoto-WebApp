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

class CheckSlugDuplicateRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    protected $serviceId;
     public function __construct($serviceId)
     {
         $this->serviceId = $serviceId; // Store the provided id
     }
   
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $existing=Service::where('slug',$value)->whereNot('id',$this->serviceId)->first();
        if($existing)
        {
            $fail(__('Service with this slug already exists.'));
        }
    }
}
