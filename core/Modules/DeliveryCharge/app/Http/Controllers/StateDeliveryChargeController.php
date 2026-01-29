<?php

namespace Modules\DeliveryCharge\app\Http\Controllers;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Modules\CountryManage\app\Models\State;
use Modules\DeliveryCharge\app\Models\StateDeliveryCharge;



class StateDeliveryChargeController extends Controller
{
    public function index()
    {
        $all_states = State::all();
        $all_states_delivery_charge = StateDeliveryCharge::with('state')->get();
        return view('deliverycharge::backend.state-delivery-charge', compact('all_states_delivery_charge', 'all_states'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'state_id' => 'required|unique:state_delivery_charges',
            'delivery_charge' => 'required',
        ]);


        $state_delivery_charge = StateDeliveryCharge::create([
            'state_id' => $request->state_id,
            'delivery_charge' => $request->delivery_charge,
        ]);

        return $state_delivery_charge->id
            ? back()->with(FlashMsg::item_new('State DeliveryCharge'))
            : back()->with(FlashMsg::item_delete('State Deliverycharge'));
    }

    public function update(Request $request)
    {

        $request->validate([
            'state_id' => [
                'required',
                // Ensure uniqueness excluding the current record
                Rule::unique('state_delivery_charges', 'state_id')->ignore($request->state_id),
            ],
            'delivery_charge_rate' => 'required',
        ]);

        $state_delivery_charge = StateDeliveryCharge::findOrFail($request->id);

        // Update the StateTax record
        $updated = $state_delivery_charge->update([
            'state_id' => $request->state_id,
            'delivery_charge' => $request->delivery_charge_rate,
        ]);

        return $updated
            ? back()->with(FlashMsg::item_new('State Delivery Charge'))
            : back()->with(FlashMsg::item_delete('State Delivery Charge'));
    }


    public function destroy(StateDeliveryCharge $item)
    {
        return $item->delete()
            ? back()->with(FlashMsg::item_delete('State Delivery Charge'))
            : back()->with(FlashMsg::item_delete('State Delivery Charge'));
    }

    public function bulk_action(Request $request)
    {
        $deleted = StateDeliveryCharge::where('id', $request->ids)->delete();
        if ($deleted) {
            return 'ok';
        }
    }
}
