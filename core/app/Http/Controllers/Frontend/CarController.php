<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Car;
use App\Models\EngineType;
use App\Models\FualType;
use App\Models\Varient;
use Illuminate\Http\Request;

class CarController extends Controller
{
    // STEP 1: Get Brand List
    public function getBrands()
    {
        $brands = Brand::select('id','name','image')->get()->map(function($brand){
            $brand->image_html = render_image_markup_by_attachment_id($brand->image, '', 'thumb');
            return $brand;
        });

        return response()->json($brands);
    }

    // STEP 2: Get Car List by Brand
    public function getCarsByBrand(Request $request)
    {
        $cars = Car::where('brand_id', $request->brand_id)
            ->select('id','name','image')
            ->get()
            ->map(function($car){
                $car->image_html = render_image_markup_by_attachment_id($car->image, '', 'thumb');
                return $car;
            });

//        if ($cars->isEmpty()) {
//            return response()->json(['error' => 'No cars found for this brand'], 404);
//        }

        return response()->json($cars);
    }

    // STEP 3a: Get Engine Types for Selected Car
    public function getEngineTypesByCar(Request $request)
    {
        $carId = $request->car_id;

        $engineIds = Varient::where('car_id', $carId)
            ->pluck('engine_type_id')
            ->unique()
            ->filter();

        $engineTypes = EngineType::whereIn('id', $engineIds)
            ->select('id','name')
            ->get();


        return response()->json($engineTypes);
    }

    // STEP 3b: Get Fuel Types by Car + Engine
    public function getFuelByCarAndEngine(Request $request)
    {
        $carId = $request->car_id;
        $engineId = $request->engine_type_id;

        $fuelIds = Varient::where('car_id', $carId)
            ->where('engine_type_id', $engineId)
            ->pluck('fual_type_id')
            ->unique()
            ->filter();

        $fuelTypes = FualType::whereIn('id', $fuelIds)
            ->select('id','name','image')
            ->get()
            ->map(function($fuel){
                $fuel->image_html = render_image_markup_by_attachment_id($fuel->image,'','thumb');
                return $fuel;
            });


        return response()->json($fuelTypes);
    }
}
