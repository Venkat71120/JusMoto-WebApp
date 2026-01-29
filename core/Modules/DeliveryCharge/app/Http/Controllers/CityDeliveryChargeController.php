<?php

namespace Modules\DeliveryCharge\app\Http\Controllers;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\CountryManage\app\Models\State;
use Modules\DeliveryCharge\app\Models\CityDeliveryCharge;
use Modules\Tax\app\Models\CityTax;

class CityDeliveryChargeController extends Controller
{
    public function index()
    {
        $all_states = State::where('status', 1)->get();
        $all_city_delivery_charge = CityDeliveryCharge::with('city')->get();
        return view('deliverycharge::backend.city-delivery-charge', compact('all_city_delivery_charge', 'all_states'));
    }

    public function store(Request $request)
    {

        $request->validate([
            'state_id' => 'required',
            'city_id' => 'required|unique:city_delivery_charges',
            'delivery_charge' => 'required',
        ]);

        $city_delivery_charge = CityDeliveryCharge::create([
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'delivery_charge' => $request->delivery_charge,
        ]);

        return $city_delivery_charge->id
            ? back()->with(FlashMsg::item_new('city DeliveryCharge'))
            : back()->with(FlashMsg::item_delete('city DeliveryCharge'));
    }


    public function update(Request $request)
    {
        $request->validate([
            'state_id' => 'required',
            'city_id' => 'required',
            'delivery_charge_rate' => 'required',
        ]);
        

        $updated = CityDeliveryCharge::findOrFail($request->id)->update([
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'delivery_charge' => $request->delivery_charge_rate,
        ]);
    
        return $updated
            ? back()->with(FlashMsg::item_update('City DeliveryCharge'))
            : back()->with(FlashMsg::item_delete('City DeliveryCharge'));
    }


    public function destroy(CityDeliveryCharge $item)
    {
        return $item->delete()
            ? back()->with(FlashMsg::item_update('City DeliveryCharge'))
            : back()->with(FlashMsg::item_delete('City DeliveryCharge'));
    }

    public function bulk_action(Request $request)
    {
        $deleted = CityDeliveryCharge::where('id', $request->ids)->delete();
        if ($deleted) {
            return 'ok';
        }
    }
}
