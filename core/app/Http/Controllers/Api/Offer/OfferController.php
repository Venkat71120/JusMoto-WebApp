<?php

namespace App\Http\Controllers\Api\Offer;

use App\Actions\Services\GalleryImageModifier;
use App\Http\Controllers\Controller;
use App\Http\Resources\Services\CarServiceSummaryResource;
use App\Http\Resources\Services\OfferResource;
use App\Http\Resources\Services\ServiceSummaryResource;
use App\Models\Offer;
use App\Models\OfferService;
use App\Models\Service;
use App\Models\Service_Car;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function primaryOffer()
    {
        $offers = Offer::where('is_primary','1')->where("status",'1')->where("expires_at",">",now())->get();
        if($offers->isEmpty())
        {
            return response()->json([
                'offers'=>[]
            ]);
        }
        return response()->json([
            'offers'=>OfferResource::collection($offers),
        ]);
    }

    public function allActiveOffers()
    {
        $offers = Offer::where("status",'1')->where("expires_at",">",now())->get();

        return response()->json([
           'offers'=>OfferResource::collection($offers),
        ]);
    }
    public function offerServices(Request $request,$offer_id)
    {
        $offer= Offer::where("id",$offer_id)->where("status",'1')->where("expires_at",">",now())->first();
        $car_id = $request->input('car_id');
        if (is_null($car_id)) {
            return response()->json([
                'message' => __('Car id is required'),
            ]);
        }
        if($offer){
            $services = OfferService::where('offer_id', $offer_id)
            ->with([
                'service.reviews',
                'service.includes',
                'service.faqs',
                'service.admin',
                'service.offer_service',
                'service.serviceAdditional',
                'service.serviceCar'
            ])
            ->get()
            ->pluck('service'); 

          if($services)
          {
            
            foreach ($services as $service)
            {
                $service->car_id=$car_id;
            }
             
          }
            return response()->json([
                'offerServices' => CarServiceSummaryResource::collection($services),
            ]);
        }else{
            return response()->json([
                'offerServices'=>[]
            ]);
        }
    
    }
}
