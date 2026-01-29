<?php

namespace App\Http\Services;


use App\Actions\Media\MediaHelper;
use App\Models\Offer;
use App\Models\Service;
use App\Models\Service_Car;
use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UpdateDiscountPrice
{
   public static function updateServiceDiscountPrice($price,$discount_price,$percentage,$offer_id)
   {
       $offer = Offer::find($offer_id);
       $new_price=0;
       if($offer){
         if($offer->status==1 && strtotime($offer->expires_at)>time())
         {
             $new_price = $price - ($price * ($percentage / 100));
             return $new_price;

         }
         else
         {
             $new_price = $discount_price;
             return $new_price;
             
         }
            
       }
       else
       {
        $new_price = $discount_price;
        return $new_price;
       }
       
       
             
            

   }
}
