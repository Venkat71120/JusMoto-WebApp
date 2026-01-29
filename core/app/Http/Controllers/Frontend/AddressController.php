<?php

namespace App\Http\Controllers\Frontend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Modules\CountryManage\app\Models\State;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\Area;
use App\Models\UserLocation;
use Illuminate\Support\Facades\Auth;
use Modules\JobPost\app\Models\JobPost;

class AddressController extends Controller
{
    public function user_all_multiple_location(Request $request){


        $client_id = Auth::guard('sanctum')->user()->id;
        $search = $request->string_search;

        // Start the query
        $query = UserLocation::with('state', 'city', 'area')->where('user_id', $client_id);

        if (!empty($search)) {

            $statusMap = [
                'home' => 0,
                'office'  => 1
            ];

            $searchLower = strtolower(trim($search));

            $query->where(function($q) use ($searchLower,$statusMap) {
                if (is_numeric($searchLower)) {
                    $q->where('user_locations.id', (int)  $searchLower);
                } else {
                    foreach ($statusMap as $key => $value) {
                        if (str_contains($key, $searchLower)) {
                            $q->orWhere('user_locations.type', $value);
                        }
                    }
                    $q->orwhere('user_locations.title', 'like', "%". strip_tags($searchLower) ."%")
                        ->orWhere('user_locations.address', 'like', "%". strip_tags($searchLower) ."%");
                }
            });
        }


        $all_locations = $query->latest()->paginate(10)->appends([
            'string_search' => $search,
        ]);

        return view('frontend.user.client.address.all-address', compact('all_locations'));

    }

    public function getCities($stateId)
    {
        $cities = City::where('state_id', $stateId)
            ->where('status', 1)
            ->get();

        return response()->json([
            'cities' => $cities,
        ]);
    }

    public function getAreas($cityId,$stateId)
    {
        $areas = Area::where('city_id', $cityId)
            ->where('state_id',$stateId)
            ->where('status', 1)
            ->get();

        return response()->json([
            'areas' => $areas,
        ]);
    }

    public function user_multiple_location_map_page(Request $request,$flag=null,$job_id=null)
    {
        // Get return URL from query parameter (defaults to order page)
        $return_url = $request->input('return_url', route('client.address.create'));
        return view('frontend.user.client.address.map.create',compact('return_url'));
    }


    public function user_multiple_location_create(Request $request)
    {
        // Get return URL from query parameter (defaults to order page)
        $return_url = $request->input('return_url', route('client.address.create'));

        if($request->isMethod('post')){
            $user = auth()->user();
            $user_id = $user->id;
            $fromMap = $request->input('from_map', false); // default false
            // Validate the request data
            $validator = Validator::make($request->all(),[
                'title' => 'required',
                'state_id' => $fromMap ? 'nullable|exists:states,id' : 'required|exists:states,id',
                'city_id'  => $fromMap ? 'nullable|exists:cities,id' : 'required|exists:cities,id',
                'area_id'  => $fromMap ? 'nullable|exists:areas,id' : 'required|exists:areas,id',
                'phone' => 'required|max:191',
                'emergency_phone' => 'nullable|max:20',
                'zipcode' => 'nullable|max:10',
                'address' => 'required|max:191',
                'latitude' => 'nullable|numeric',
                'longitude' => 'nullable|numeric',
                'type' => 'required',

            ]);

            if ($validator->fails()) {
                toastr_error( $validator->errors()->first());
                return redirect()->back()->withInput();
            }

            $data = $validator->validated();

            try {
                // Store user multiple locations
                $location=UserLocation::create([
                    'user_id'         => $user_id,
                    'state_id'        => $data['state_id'] ?? null,
                    'city_id'         => $data['city_id'] ?? null,
                    'area_id'         => $data['area_id'] ?? null,
                    'post_code'       => $data['zipcode'] ?? null,
                    'phone'           => $data['phone'] ?? null,
                    'emergency_phone' => $data['emergency_phone'] ?? null,
                    'address'         => $data['address'] ?? null,
                    'latitude'        => $data['latitude'] ?? null,
                    'longitude'       => $data['longitude'] ?? null,
                    'title'           => $data['title'] ?? null,
                    'type'            => $data['type'] ?? 0,
                ]);

                toastr_success('Address Added Successfully');

                $parsedUrl = parse_url($return_url);
                $baseUrl = $parsedUrl['scheme'] . '://' . $parsedUrl['host'] . $parsedUrl['path'] ?? '';
                $baseUrl = strtok($return_url, '?');
                return redirect()->to($baseUrl . '?new_address_id=' . $location->id)->withInput();



            } catch (\Exception $e) {

                toastr_error('An error occurred while creating the location.');
                return redirect()->back()->withInput();
            }
        }

        $states= State::all();

        return view('frontend.user.client.address.create',compact('states','return_url'));
    }

    public function user_multiple_location_map_edit_page($id)
    {
        $location = UserLocation::where('user_id', auth('sanctum')->user()->id)->where('id', $id)->first();
        $states= State::all();

        return view('frontend.user.client.address.map.edit', compact('location','states'));
    }

    public function user_multiple_location_edit(Request $request, $id=null)
    {

        if($request->isMethod('post')){
            $user = auth()->user();
            $user_id = $user->id;
            $fromMap = $request->input('from_map', false); // default false

            // Validate the request data
            $validator = Validator::make($request->all(),[
                'title' => 'required',
                'state_id' => $fromMap ? 'nullable|exists:states,id' : 'required|exists:states,id',
                'city_id'  => $fromMap ? 'nullable|exists:cities,id' : 'required|exists:cities,id',
                'area_id'  => $fromMap ? 'nullable|exists:areas,id' : 'required|exists:areas,id',
                'phone' => 'required|max:191',
                'emergency_phone' => 'nullable|max:20',
                'zipcode' => 'nullable|max:10',
                'address' => 'nullable|max:191',
                'latitude' => 'nullable|numeric',
                'longitude' => 'nullable|numeric',
                'type' => 'required',

            ]);

            if ($validator->fails()) {
                toastr_error( $validator->errors()->first());
                return redirect()->back()->withInput();
            }

            $data = $validator->validated();

            try {
                $location = UserLocation::where('user_id', $user_id)
                    ->where('id', $id)
                    ->first();

                if (!$location) {
                    toastr_error( 'Location not found');
                    return redirect()->back()->withInput();
                }

                // update user multiple locations
                $location->update([
                    'state_id' => $data['state_id'] ?? null,
                    'city_id' => $data['city_id'] ?? null,
                    'area_id' =>$data['area_id'] ?? null,
                    'post_code' => $data['zipcode'] ?? null,
                    'phone' => $data['phone'] ?? null,
                    'emergency_phone' => $data['emergency_phone'] ?? null,
                    'address' =>$data['address'] ?? null,
                    'latitude' => $data['latitude'] ?? null,
                    'longitude' =>$data['longitude'] ?? null,
                    'title' => $data['title'] ?? null,
                    'type' => $data['type'] ?? 0,
                ]);
                toastr_success( 'Address updated Successfully');
                return redirect()->back();

            } catch (\Exception $e) {

                toastr_error( 'An error occurred while updating the profile.');
                return redirect()->back()->withInput();
            }
        }
        $location = UserLocation::where('user_id', auth()->user()->id)->where('id', $id)->first();
        $states= State::all();

        return view('frontend.user.client.address.edit', compact('location','states'));
    }

    public function user_multiple_location_delete(Request $request, $id=null)
    {

        $user_id = auth()->user()->id;

        try {
            $location = UserLocation::where('user_id', $user_id)
                ->where('id', $id)
                ->first();

            if (!$location) {

                toastr_error( 'Location not found');
                return redirect()->back();

            }
            $location->delete();
            toastr_success( 'Address Delete Successfully');
            return redirect()->back();

        } catch (\Exception $e) {
            toastr_error( 'An error occurred while the delete.');
            return redirect()->back();

        }
    }
}
