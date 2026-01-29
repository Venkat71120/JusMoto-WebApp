<?php

namespace Modules\DeliveryCharge\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeliveryChargeManageController extends Controller
{
    public function settings()
    {
        return view("deliverycharge::backend.settings");
    }

    public function handleSettings(Request $request){

        update_static_option("delivery_charge_system", $request->delivery_charge_system ?? "");
        update_static_option("delivery_charge", $request->delivery_charge ?? 0);

        return back()->with([
            "msg" => __("Delivery Charge settings updated successfully."),
            "type" => "success"
        ]);
    }

}
