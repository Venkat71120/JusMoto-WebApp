<?php

namespace App\Http\Controllers\Api\DeliveryCharge;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;
use Modules\DeliveryCharge\app\Models\CityDeliveryCharge;
use Modules\DeliveryCharge\app\Models\StateDeliveryCharge;

class DeliveryChargeController extends Controller
{
    public function deliveryCharge(Request $request)
    {
    
       $state_id=$request->state_id;
       $city_id=$request->city_id;
       $area_id=$request->area_id;
       $latitude=$request->latitude;
       $longitude=$request->longitude;

       if(!$state_id && !$city_id && !$area_id && !$latitude && !$longitude)
       {
           return response()->json([
               'status' => false,
               'message' => 'Please provide state or city or area or latitude or longitude'
           ]);
       }


        $state_delivery_charge = 0;
        $state_delivery_charge_rate = 0;

        $state_delivery_charge = StateDeliveryCharge::where('state_id', $state_id)->first();
       
        $city_delivery_charge = CityDeliveryCharge::where('city_id', $city_id)->first();

        if (!empty($city_delivery_charge) && $city_delivery_charge->delivery_charge >= 0) {
            $state_delivery_charge_rate = $city_delivery_charge->delivery_charge;
        } else {
            $state_delivery_charge_rate =  $state_delivery_charge?->delivery_charge ;
        }

        if ( $state_delivery_charge_rate == null && $state_delivery_charge_rate == '') 
        {

            if($area_id)
            {
               $area=Area::where('id',$area_id)->first();
               $state_id=$area->state_id;
                $city_id=$area->city_id;
                $state_delivery_charge = StateDeliveryCharge::where('state_id', $state_id)->first();
       
                $city_delivery_charge = CityDeliveryCharge::where('city_id', $city_id)->first();
                if (!empty($city_delivery_charge) && $city_delivery_charge->delivery_charge >= 0) {
                    $state_delivery_charge_rate = $city_delivery_charge->delivery_charge;
                } else {
                    $state_delivery_charge_rate =  $state_delivery_charge?->delivery_charge ;
                }
            }
        }    

        // If tax rate is still 0, calculate based on latitude/longitude
        if ( $state_delivery_charge_rate == null && $state_delivery_charge_rate == '') {


            // Fetch Google Maps API Key
            $google_map_api_key = get_static_option('google_map_api_key');
            $geocode_url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" . $latitude . "," . $longitude . "&key=" . $google_map_api_key;
            $geocode_data = @file_get_contents($geocode_url);

            if ($geocode_data !== false) {
                $geocode_data = json_decode($geocode_data, true);

                // Check if geocoding was successful
                if (isset($geocode_data['status']) && $geocode_data['status'] == 'OK') {
                    $state = $city = null;

                    // Extract state and city from geocode results
                    foreach ($geocode_data['results'] as $result) {
                        foreach ($result['address_components'] as $component) {
                            if (in_array('administrative_area_level_1', $component['types'])) {
                                $state = $component['long_name'];
                            }
                            if (in_array('locality', $component['types'])) {
                                $city = $component['long_name'];
                            }
                        }
                    }

                    // Normalize state and search for matching tax rates
                    if ($state && $city) {
                        $normalized_state = preg_replace('/\s+Division$/', '', trim($state));
                        $get_state = State::where('state', 'like', '%' . $normalized_state . '%')->first();
                        $get_city = City::where('city', 'like', '%' . $city . '%')->first();

                        if ($get_state !== null && $get_city !== null) {
                            $state_delivery_charge = StateDeliveryCharge::where('state_id', $get_state->id)->first();
                            $city_delivery_charge = CityDeliveryCharge::where('city_id', $get_city->id)->first();

                            if (!empty($city_delivery_charge) && $city_delivery_charge->delivery_charge >= 0) {
                                $state_delivery_charge_rate = $city_delivery_charge->delivery_charge;
                            } else {
                                $state_delivery_charge_rate = $state_delivery_charge?->delivery_charge;
                            }
                        }
                    }
                }
            }
        }

        // Fallback to default tax rate if no valid rate is found
        if (empty($state_delivery_charge_rate) || !is_numeric($state_delivery_charge_rate) || $state_delivery_charge_rate < 0) {
            $state_delivery_charge_rate = get_static_option('delivery_charge') ?? 0;
        }

        return response()->json([
            'status' => true,
            'delivery_charge' => $state_delivery_charge_rate,
            'delivery_charge_type' => get_static_option('delivery_charge_system') ,
        ]);

    }
}
