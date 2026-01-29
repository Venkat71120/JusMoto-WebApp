<?php

namespace App\Http\Controllers\Api\Staff;

use App\Actions\Media\MediaHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStaffRequest;
use App\Http\Resources\StaffResource;
use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class StaffController extends Controller
{
   
    public function allStaffList(Request $request)
    {
        

        $all_staffs = Staff::where("status",1)->latest()->paginate(10);

        return response()->json([
            'success' => true,
            'all_staffs' => $all_staffs->isEmpty()
                ? ['message' => __("No Staff Found")]
                : StaffResource::collection($all_staffs),
            'pagination' => [
                'total' => $all_staffs->total(),
                'count' => $all_staffs->count(),
                'per_page' => $all_staffs->perPage(),
                'current_page' => $all_staffs->currentPage(),
                'last_page' => $all_staffs->lastPage(),
                'next_page_url' => $all_staffs->nextPageUrl(),
                'prev_page_url' => $all_staffs->previousPageUrl(),
            ]
        ], $all_staffs->isEmpty() ? 200 : 200);

    }

   

  
    
}
