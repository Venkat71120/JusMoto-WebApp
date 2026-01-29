<?php

namespace App\Http\Controllers\Api\Car;

use App\Actions\Services\ImageModifier;
use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Http\Resources\Services\CarResource;
use App\Models\Backend\AdminNotification;
use App\Models\Brand;
use App\Models\Car;
use App\Models\EngineType;
use App\Models\FualType;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function allCars(Request $request){


        $brand_id = $request->input('brand_id');
        $car_id = $request->input('car_id');



        $query =  Car::with('brand','varient');

        // Filter by brand
        if ($brand_id) {
            $query->where('brand_id', $brand_id);
        }
         // Filter by car
         if ($car_id) {
            $query->where('id', $car_id);
        }


        $all_cars = $query->paginate(40);




        if ($all_cars->isNotEmpty()) {

            return response()->json([
               'all_cars'=>CarResource::collection($all_cars->items()),
                'pagination' => [
                    'total' => $all_cars->total(),
                    'count' => count($all_cars->items()),
                    'per_page' => $all_cars->perPage(),
                    'current_page' => $all_cars->currentPage(),
                    'last_page' => $all_cars->lastPage(),
                    'next_page_url' => $all_cars->nextPageUrl(),
                    'prev_page_url' => $all_cars->previousPageUrl(),
                ]
            ]);
        }

        return response()->json([
            'message' => __('Car Not Available'),
        ]);


    }


     // search category


     public function carDetails($id){
         $car = Car::with("brand","varient")->find($id);

         if (!$car) {
            return response()->json([
                'all_cars'=>[]
            ]);
         }

         return response()->json([
            'all_cars'=> new CarResource($car),
        ]);
     }





}
