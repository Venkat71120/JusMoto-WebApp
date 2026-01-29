<?php

namespace App\Http\Controllers\Api\Outlet;

use App\Http\Controllers\Controller;
use App\Http\Resources\Services\OutletDetailsResource;
use App\Http\Resources\Services\OutletResource;
use App\Models\Backend\Admin_outlet_location;
use Illuminate\Http\Request;

class OutletLocationController extends Controller
{
    public function outletList(Request $request)
    {
        $title=$request->input('title');
        $query=Admin_outlet_location::with("state","city","area")->where('status',1);
        if ($title) {
            $query->where('name', 'like', '%' . $title . '%');
        }

        $outlets = $query->paginate(10);

        if ($outlets) {
            return response()->json([
                'all_outlets' => OutletResource::collection($outlets->items()),
                'pagination' => [
                    'total' => $outlets->total(),
                    'count' => count($outlets->items()),
                    'per_page' => $outlets->perPage(),
                    'current_page' =>$outlets->currentPage(),
                    'last_page' => $outlets->lastPage(),
                    'next_page_url' =>$outlets->nextPageUrl(),
                    'prev_page_url' => $outlets->previousPageUrl(),
                ]
            ]);
         }
 
         return response()->json([
            'message' => __('Outlet Not Available'),
        ]);

    }

    public function outletDetails($id)
    {
      
        $outlet = Admin_outlet_location::with("state","city","area")->find($id);

        if ($outlet) {
            return response()->json([
                'outlet_detail' => new OutletDetailsResource($outlet),
            ]);
        }

        return response()->json([
           'message' => __('Outlet Not Available'),
        ]);
    }
}
