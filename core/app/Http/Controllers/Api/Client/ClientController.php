<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Backend\Admin_outlet_location;
use Illuminate\Http\Request;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;
use Modules\Coupon\app\Models\Coupon;
use Modules\Coupon\app\Resources\CouponPublicResources;
use Modules\DeliveryCharge\app\Models\CityDeliveryCharge;
use Modules\DeliveryCharge\app\Models\StateDeliveryCharge;
use Modules\Tax\app\Models\CityTax;
use Modules\Tax\app\Models\StateTax;

class ClientController extends Controller
{
    public function taxInfo(Request $request){
        $state_id=$request->state_id;
        $city_id=$request->city_id;
        $address=$request->address;
        $latitude=$request->latitude;
        $longitude=$request->longitude;
        $outlet_id=$request->outlet_id;

        $tax_info=calculateTaxBasedOnCoordinates($outlet_id,$address,$state_id,$city_id,$latitude,$longitude);
        return response()->json([
            'tax_info' => $tax_info,
        ]);
       
    }

    public function deliveryChargeInfo(Request $request){
        $state_id=$request->state_id;
        $city_id=$request->city_id;
        $address=$request->address;
        $latitude=$request->latitude;
        $longitude=$request->longitude;
        $outlet_id=$request->outlet_id;


       $delivery_amount = calculateDeliveryChargeBasedOnCoordinates($outlet_id,$address,$state_id,$city_id,$latitude,$longitude);
        return response()->json([
            'delivery_charge_system'=>get_static_option('delivery_charge_system'),
            'delivery_charge' => $delivery_amount
        ]);
    }


    public function tax_deliveryChargeInfo(Request $request){
        $state_id=$request->state_id;
        $city_id=$request->city_id;
        $address=$request->address;
        $latitude=$request->latitude;
        $longitude=$request->longitude;
        $outlet_id=$request->outlet_id;

        $tax_info=calculateTaxBasedOnCoordinates($outlet_id,$address,$state_id,$city_id,$latitude,$longitude);
        $delivery_amount = calculateDeliveryChargeBasedOnCoordinates($outlet_id,$address,$state_id,$city_id,$latitude,$longitude);

        return response()->json([
            'tax_info' => $tax_info,
            'delivery_charge' => $delivery_amount,
            'delivery_charge_system'=>get_static_option('delivery_charge_system'),
        ]);
    }

    public function couponInfo($coupon_code){

       $coupon = Coupon::where('code',$coupon_code)
           ->where('expire_date', '>=', now())// check date
           ->where('status',1)
           ->first();

        if ($coupon) {
            return response()->json([
                'coupon' => new CouponPublicResources($coupon),
            ]);
        }

        // error response
        return response()->json([
            'message' => __('Coupon not found, expired, or inactive.'),
        ], 404);
    }
}
