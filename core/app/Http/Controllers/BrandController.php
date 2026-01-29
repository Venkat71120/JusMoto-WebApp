<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Helpers\FlashMsg;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Backend\AdminNotification;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BrandController extends Controller
{

    public function allBrands(){
        $all_brands = Brand::latest()->paginate(10);
        return view('backend.pages.admin.brand.allBrands', compact('all_brands'));
    }
    public function searchBrand(Request $request)
    {
        $all_brands = Brand::where('name', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
        return $all_brands->total() >= 1 ? view('backend.pages.admin.brand.search-brand',
            compact('all_brands'))->render() : response()->json(['status'=>__("nothing")]);
    }

    public function brandDetails($id){
        $brand = Brand::find($id);

        if (!$brand) {
            try {
                AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
            }catch (\Exception $exception){}

            abort(404);
        }

        AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);

        return view('backend.pages.admin.brand.brand-details', compact('brand'));
    }
    public function add_brand(Request $request)
    {
        if($request->isMethod('post')){
            $request->validate([
                'name' => 'required|unique:brands,name|max:191',
                'brand_image'=>'required|integer',
            ]);

            $brand = Brand::create([
                'name' => $request->name,
                'image' => $request->brand_image
                
            ]);

            
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


            // Retrieve the last inserted ID
            $last_service_id = $brand->id;

            DB::beginTransaction();
            try {
                $brand->metaData()->create($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }


            return redirect()->back()->with(FlashMsg::item_new(__("Brand Successfully Created")));
        }
        return view('backend.pages.admin.brand.create');
    }

    public function editBrand(Request $request, $id)
    {
        if ($request->isMethod('post')) {

            $request->validate([
                'name' => 'required|max:191',
                'image' => 'required|integer'
            ], [
                'name.required' => __("The name field is required."),
                'name.max' => __("The name must not exceed 191 characters."),
                'image.required' => __("The image field is required."),
            ]);

            $brand = Brand::findOrFail($id);
           
         
            $brand_image = $request->image;
           
            // Update a new Brand instance
            $brand->update([
                'name' => $request->name,
                'image' => $brand_image,
            ]);

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

            // Retrieve the last inserted ID
            $last_brand_id = $brand->id;
            DB::beginTransaction();
            try {
                $brand->metaData()->update($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }

            return redirect()->back()->with(FlashMsg::item_new(__("Brand Updated Success")));
        }


        $brand = Brand::findOrFail($id);

        return view('backend.pages.admin.brand.edit_brand', [
            'brand' => $brand,
           
        ]);

    }

     // pagination
     public function brandPaginate(Request $request)
     {
         if($request->ajax()){
             $all_brands = Brand::latest()->paginate(10);
             return view('backend.pages.admin.brand.search-service', compact('all_brands'))->render();
         }
     }
 
     public function bulkAction(Request $request){
         try {
             // Fetch brands with the requested IDs and eager load relationships
             $brands = Brand::whereIn('id',$request->ids)->get();
 
             // Loop through each brand to delete related records
             foreach ($brands as $brand) {
                
                 $brand->metaData()->delete(); // Deletes the related meta data
 
                 // Finally, delete the brand itself
                 $brand->delete();
             }
         }catch (\Exception $e){}
 
         return response()->json(['status' => 'ok']);
     }

    public function brandDelete($id){
        try {
            $brand = Brand::find($id);

            $brand->metaData()->delete(); 
            foreach($brand->car as $car)
            {
               
                $car->varient()->delete();
            }
            $brand->car()->delete();
            $brand->delete();

            return redirect()->back()->with(FlashMsg::item_delete(__("Brand Deleted Success")));
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__("Brand not found.")));
        } catch (\Exception $e) {
            
            return redirect()->back()->with(FlashMsg::item_delete(__("An error occurred while deleting the brand")));
        }
    }

}
