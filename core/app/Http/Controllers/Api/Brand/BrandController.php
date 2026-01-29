<?php

namespace App\Http\Controllers\Api\Brand;

use App\Actions\Services\ImageModifier;
use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Http\Resources\Services\BrandResource;
use App\Http\Resources\Services\CarResource;
use App\Models\Backend\AdminNotification;
use App\Models\Brand;
use App\Models\Car;
use App\Models\EngineType;
use App\Models\FualType;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BrandController extends Controller
{
    public function allBrands(){


        $all_brands = Brand::latest()->paginate(40);


        if ($all_brands->isNotEmpty()) {

            return response()->json([
              'all_brands'=>BrandResource::collection($all_brands->items()),
                'pagination' => [
                    'total' => $all_brands->total(),
                    'count' => count($all_brands->items()),
                    'per_page' => $all_brands->perPage(),
                    'current_page' => $all_brands->currentPage(),
                    'last_page' => $all_brands->lastPage(),
                    'next_page_url' => $all_brands->nextPageUrl(),
                    'prev_page_url' => $all_brands->previousPageUrl(),
                ]
            ]);
        }

        return response()->json([
            'message' => __('Brand Not Available'),
        ]);

    }










}
