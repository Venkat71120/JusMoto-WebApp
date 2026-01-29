<?php

namespace App\Http\Controllers\Backend;

use App\Actions\Services\ImageModifier;
use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\AdminNotification;
use App\Models\Brand;
use App\Models\Car;
use App\Models\EngineType;
use App\Models\FualType;
use App\Models\Varient;
use App\Rules\CheckCombinationOfEngineFualRule;
use App\Rules\ExistingModelCheckRule;
use App\Rules\ExistingModelEditCheckRule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function allCars(){
        $all_cars = Car::with('brand','varient')->latest()->paginate(10);
        $brands=Brand::all();
        return view('backend.pages.admin.car.allCars', compact('all_cars','brands'));
    }
 
     public function carDelete($id){
         try {
             $car = Car::findOrFail($id);
 
             $car->metaData()->delete();
             $car->varient()->delete(); 
             $car->delete();
 
             return redirect()->back()->with(FlashMsg::item_delete(__('Car Deleted Success')));
         } catch (ModelNotFoundException $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__('Car not found.')));
         } catch (\Exception $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__('An error occurred while deleting the car')));
         }
     }
 
     // search category
     public function carSearch(Request $request)
     {
         $all_cars = Car::with("brand")->where('name', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
         return $all_cars->total() >= 1 ? view('backend.pages.admin.car.search-car',
             compact('all_cars'))->render() : response()->json(['status'=>__('nothing')]);
     }
 
     //  Car pagination
     public function carPaginate(Request $request)
     {
         if($request->ajax()){
             $all_cars = Car::with("brand")->latest()->paginate(10);
             return view('backend.pages.admin.car.search-car', compact('all_cars'))->render();
         }
     }
 
     public function bulkAction(Request $request){
         try {
           
             // Fetch cars with the requested IDs and eager load relationships
             $cars = Car::whereIn('id',$request->ids)->get();
 
             // Loop through each car to delete related records
             foreach ($cars as $car) {
                 // Delete related models
                 $car->metaData()->delete(); // Deletes the related meta data
                 $car->varient()->delete(); // Deletes the relateed varient data
 
                 // Finally, delete the car itself
                 $car->delete();
             }
         }catch (\Exception $e){
         }
 
         return response()->json(['status' => 'ok']);
     }
 
     public function addCar(Request $request)
     {
        
        if ($request->isMethod('post')) {
             // Validate the request data
           $request->validate([
                 'brand_id' => ['required',new ExistingModelCheckRule],
                 'name' => 'required|max:191',
                 'image' => 'required|integer',
                 'engine_type_id' => ['required','array',new CheckCombinationOfEngineFualRule],
                 'engine_type_id.*' => ['required','integer'],
                 'fual_type_id.*' => 'required|integer',
                 'year' => 'required|integer|between:1900,2100',
                 
             ], [
                 'brand_id.required' => __('The brand is required.'),
                 
                 'name.required' => __('The car name is required.'),
                 'name.max' => __('The name must not exceed 191 characters.'),
                 'image.required' => __('The car image is required.'),
                 'engine_type_id.*.required' => __('At least one engine type is required.'),
                 'fual_type_id.*.required' => __('At least one fual type is required.'),
                 'year.required' => __('The year is required.'),
                 'year.between' => __('The year is not valid'),
 
            ]);

           

            $car_image = $request->image;

           

             // Create a new Car instance
            $car = Car::create([
                 'brand_id' => $request->brand_id,
                 'name' => $request->name,
                 'image' => $car_image,
                 'year' => $request->year,
                 
             ]);

            $carUpdate=false;
             if($car)
             {
                $car_id=$car->id;

                $this->insertRelatedRecords($request,$car_id,$carUpdate);
               
                
             }
 
 
             // Generate meta tags
             $words = explode(' ', $request->input('name'));
             $tags = collect($words)->map(fn($word) => strtolower(trim($word)));
             $tags_name = $tags->implode(', ');
 
             $Metas = [
                 'meta_title' => purify_html($request->title),
                 'meta_tags' => purify_html($tags_name),
                 'meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                 'facebook_meta_tags' => purify_html($tags_name),
                 'facebook_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                 'facebook_meta_image' => $request->image,
                 'twitter_meta_tags' => purify_html($tags_name),
                 'twitter_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                 'twitter_meta_image' => $request->image,
             ];
 
 
 
             DB::beginTransaction();
             try {
                 $car->metaData()->create($Metas);
                 DB::commit();
 
             }catch (\Throwable $th){
                 DB::rollBack();
             }
 
 
             return redirect()->back()->with(FlashMsg::item_new(__('Car Added Success')));
         }
 
 
         $brands = Brand::all();
         $engines= EngineType::all();
         $fuals = FualType::all();
        
         
         return view('backend.pages.admin.car.create', [
             'brands' => $brands,
             'engines' => $engines,
             'fuals' => $fuals
         ]);
 
     }
 
     public function editCar(Request $request, $id)
     {
         if ($request->isMethod('post')) {
           
            $request->validate([
                'brand_id' => ['required',new ExistingModelEditCheckRule($id)],
                 'name' => 'required|max:191',
                 'image' => 'required|integer',
                 'engine_type_id' => ['required','array',new CheckCombinationOfEngineFualRule],
                 'engine_type_id.*' => ['required','integer'],
                 'fual_type_id.*' => 'required|integer',
                 'year' => 'required|integer|between:1900,2100',
                
            ], [
                'brand_id.required' => __('The brand is required.'),
                'name.required' => __('The car name is required.'),
                'name.max' => __('The name must not exceed 191 characters.'),
                'image.required' => __('The car image is required.'),
                'engine_type_id.*.required' => __('At least one engine type is required.'),
                'fual_type_id.*.required' => __('At least one fual type is required.'),
                'year.required' => __('The year is required.'),
                'year.between' => __('The year is not valid'),

           ]);
 
             $car = Car::with("brand")->findOrFail($id);
 
             $car_image = $request->image;


            $existing=Car::where('brand_id',$request->brand_id)->where('name',$request->name)->where('Year',$request->year)->whereNot('id',$id)->first();
            if($existing)
            {
                return redirect()->back()->with(FlashMsg::item_delete(__('Car with this name and brand and year already exists.')));
            }
        
             // update a car instance
             $car->update([
                'brand_id' => $request->brand_id,
                'name' => $request->name,
                'image' => $car_image,
                'year' => $request->year
               
             ]);

             $car_update=true;

             if($car)
             {
                $this->insertRelatedRecords($request, $id, $car_update) ;
                
             }
 
             // Generate meta tags
             $words = explode(' ', $request->input('name'));
             $tags = collect($words)->map(fn($word) => strtolower(trim($word)));
             $tags_name = $tags->implode(', ');
 
             $Metas = [
                 'meta_title' => purify_html($request->title),
                 'meta_tags' => purify_html($tags_name),
                 'meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                 'facebook_meta_tags' => purify_html($tags_name),
                 'facebook_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                 'facebook_meta_image' => $request->image,
                 'twitter_meta_tags' => purify_html($tags_name),
                 'twitter_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                 'twitter_meta_image' => $request->image,
             ];
 
           
             DB::beginTransaction();
             try {
                 $car->metaData()->update($Metas);
                 DB::commit();
 
             }catch (\Throwable $th){
                 DB::rollBack();
             }
 
 
             return redirect()->back()->with(FlashMsg::item_new(__('Car Updated Success')));
         }
 
 
         $brands = Brand::all();
         $enginTypes= EngineType::all();
         $fualTypes = FualType::all();
        
         
         $car = Car::with('varient')->findOrFail($id);

        $varients=Varient::where('car_id',$id)->get();
 
         return view('backend.pages.admin.car.edit-car', [
             'car' => $car,
             'varients' => $varients,
             'brands' => $brands,
             'engines' => $enginTypes,
             'fuals' => $fualTypes,
         ]);
 
     }


     private function insertRelatedRecords(Request $request, $carId, $car_update)
    {
        // service update
        if ($car_update){
            // Clear existing related records
            Varient::where('car_id', $carId)->delete();
           
        }

        // Prepare and insert included services
        if ($request->filled('engine_type_id') && $request->filled('fual_type_id')) {
                  
            $includedTypes = [];
            foreach ($request->engine_type_id as $key => $id) 
            {
                $includedTypes[] = [
                    'car_id' => $carId,
                    'engine_type_id' => $request->engine_type_id[$key]?? null,
                    'fual_type_id' => $request->fual_type_id[$key]?? null,  
                ];
            }
            Varient::insert($includedTypes);
               
        }
    }    
 
    
 
     public function carDetails($id){
         $car = Car::with("brand","varient")->find($id);
         
         if (!$car) {
             try {
                 AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
             }catch (\Exception $exception){}
 
             abort(404);
         }
 
         AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
 
         return view('backend.pages.admin.car.car-details', compact('car'));
     }

     public function  getModelByBrandId(Request $request){
        
        $brand_id=$request->input("brand_id");
       
        $all_cars = Car::where("brand_id",$brand_id)->latest()->paginate(10);
        return $all_cars->total() >= 1 ? view('backend.pages.admin.car.search-car',
        compact('all_cars'))->render() : response()->json(['status'=>__('nothing')]);
    }

    

     
     public function getCarListByBrandId(Request $request){
       
        $brand_id=$request->input("brand_id");
       
        $all_cars = Car::where("brand_id",$brand_id)->get();
        return response()->json(
            [
                'status' => 'success',
                'data' => $all_cars,
                
            ]);
    }

    public function storeImage(Request $request)
    {
       

        $image_src=ImageModifier::ImageUrl($request->car_image);
    
        return response()->json(['status' =>'success','message' => __('Image uploaded successfully.'), 'data' => $image_src]);

        
    }

    

    public function getVariantListByCarId(Request $request){
       
        $car_id=$request->input("car_id");
       
        $all_variants = Varient::with('engineType','fualType')->where('car_id',$car_id)->get();
        return response()->json(
            [
                'status' => 'success',
                'data' => $all_variants,
                
            ]);
    }


 
     
}
