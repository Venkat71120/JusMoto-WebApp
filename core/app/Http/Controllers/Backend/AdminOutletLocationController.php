<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\Admin_outlet_location;
use App\Models\Backend\Admin_service_location;
use App\Models\Backend\AdminNotification;
use App\Rules\CheckOutletNameUniquenessEditRule;
use App\Rules\CheckOutletNameUniquenessRule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;

class AdminOutletLocationController extends Controller
{
       public function outletAddressList()
       {
        $all_outlets = Admin_outlet_location::with('city', 'area', 'state')->latest()->paginate(10);
        return view('backend.pages.admin.serviceLocation.outletAddressList', compact('all_outlets'));

       }

       public function changeStatus($id){
        $outlet =Admin_outlet_location::select('id','status')->where('id',$id)->first();
        if($outlet->status==1){
            $status = 0;
        }else{
            $status = 1;
        }
        Admin_outlet_location::where('id',$id)->update(['status'=>$status]);
        return redirect()->back()->with(FlashMsg::item_new(__('Status Change Success')));
    }

       public function outletDelete($id){
        try {
            $outlet= Admin_outlet_location::findOrFail($id);
            $outlet->delete();

            return redirect()->back()->with(FlashMsg::item_delete(__('Outlet Deleted Success')));
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__('Outlet not found.')));
        } catch (\Exception $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__('An error occurred while deleting the outlet')));
        }
    }

    // search category
    public function outletSearch(Request $request)
    {
        $all_outlets = Admin_outlet_location::with('city', 'area', 'state')->where('name', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
        return $all_outlets->total() >= 1 ? view('backend.pages.admin.serviceLocation.search-outlet',
            compact('all_outlets'))->render() : response()->json(['status'=>__('nothing')]);
    }

    //  Car pagination
    public function outletPaginate(Request $request)
    {
        if($request->ajax()){
            $all_outlets = Admin_outlet_location::with('city', 'area', 'state')->latest()->paginate(10);
            return view('backend.pages.admin.serviceLocation.search-outlet', compact('all_outlets'))->render();
        }
    }

    public function bulkAction(Request $request){
        try {
            // Fetch outlets with the requested IDs and eager load relationships
            $outlets =Admin_outlet_location::whereIn('id',$request->ids)->get();

            // Loop through each outlet to delete related records
            foreach ($outlets as $outlet) {
                // Finally, delete the outlet itself
                $outlet->delete();
            }
        }catch (\Exception $e){}

        return response()->json(['status' => 'ok']);
    }


       public function addOutletAddress(Request $request)
       {
           if ($request->isMethod('post')) {
             $request->validate([
                 'name' => ['required',new CheckOutletNameUniquenessRule],
                 'outlet_address' => 'required',
                 'city_id' => 'nullable',
                 'area_id' => 'nullable',
                 'state_id' => 'required',
                 'latitude' => 'required|numeric',
                 'longitude' => 'required|numeric',
                 'zip_code' => 'nullable'
             ],[
                 'name.required' => 'Outlet Name is required',
                 'outlet_name.unique' => 'Outlet Name already exists',
                 'outlet_address.required' => 'Outlet Address is required',
                 'state_id.required' => 'State is required',
                 'latitude.required' => 'Latitude is required',
                 'longitude.required' => 'Longitude is required',
             ]);

               $admin= Auth::guard('admin')->user();
               $admin_outlet_location = new Admin_outlet_location();
               $admin_outlet_location->admin_id=$admin->id;
               $admin_outlet_location->name=$request->name;
               $admin_outlet_location->address = $request->outlet_address;
               $admin_outlet_location->city_id = $request->city_id;
               $admin_outlet_location->area_id = $request->area_id;
               $admin_outlet_location->state_id = $request->state_id;
               $admin_outlet_location->latitude = $request->latitude;
               $admin_outlet_location->longitude = $request->longitude;
               $admin_outlet_location->post_code = $request->zipcode;
               $admin_outlet_location->save();

           }

            $states=State::all();
           
            return view('backend.pages.admin.serviceLocation.serviceLocation',compact('states',));

       }

       public function editOutlet(Request $request, $id)
       {
           if ($request->isMethod('post')) {
   
            $request->validate([
                'name' => ['required',new CheckOutletNameUniquenessEditRule($id)],
                'outlet_address' => 'required',
                'city_id' => 'nullable',
                'area_id' => 'nullable',
                'state_id' => 'required',
                'latitude' => 'required|numeric',
                'longitude' => 'required|numeric',
                'zip_code' => 'nullable'
            ], [
                  'name.required' => __('The outlet name field is required.'),
                  'outlet_address.required' => __('The outlet address field is required.'),
                  'state_id.required' => __('The state field is required.'),
                  'latitude.required' => __('The latitude field is required.'),
                  'longitude.required' => __('The longitude field is required.'),
                    
                  
                  
  
              ]);
   
              $outlet= Admin_outlet_location::findOrFail($id);
   
            
          
               // update a fual instance
               $outlet->update([
              
                  'name' => $request->name,
                  'address' => $request->outlet_address,
                  'city_id' => $request->city_id,
                  'area_id' => $request->area_id,
                 'state_id' => $request->state_id,
                  'latitude' => $request->latitude,
                  'longitude' => $request->longitude,
                  'post_code' => $request->zipcode,
                  
                 
               ]);
   
   
               return redirect()->back()->with(FlashMsg::item_new(__('Outlet Location Updated Success')));
           }
   
  
           
           $outlet= Admin_outlet_location::findOrFail($id);
           $states=State::all();
   
           return view('backend.pages.admin.serviceLocation.edit-outlet', [
               'outlet' => $outlet,
               'states' => $states,
              
           ]);
   
       }
   
      
   
       public function outletDetails($id){
          $outlet= Admin_outlet_location::findOrFail($id);
           
           if (!$outlet) {
               try {
                   AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
               }catch (\Exception $exception){}
   
               abort(404);
           }
   
           AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
   
           return view('backend.pages.admin.serviceLocation.outlet-details', compact('outlet'));
       }

       public function getCity($stateId)
       {
       
            $cities = City::where('state_id', $stateId)->get();

            return response()->json([
                'cities' => $cities,
            ]);
        }
        public function getArea($cityId,$stateId)
        {
            $areas = Area::where('city_id', $cityId)->where('state_id',$stateId)->get();
            return response()->json([
                'areas' => $areas,
            ]);
       }


}
