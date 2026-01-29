<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\AdminNotification;
use App\Models\FualType;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FualTypeController extends Controller
{
    public function allFuals(){
        $all_fuals = FualType::latest()->paginate(10);
        return view('backend.pages.admin.fual.allFuals', compact('all_fuals'));
    }
 
     public function fualDelete($id){
         try {
             $fual = FualType::findOrFail($id);
 
             $fual->metaData()->delete(); 
             $fual->varient()->delete();
             $fual->delete();
 
             return redirect()->back()->with(FlashMsg::item_delete(__("fual Deleted Success")));
         } catch (ModelNotFoundException $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__("fual not found.")));
         } catch (\Exception $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__("An error occurred while deleting the fual")));
         }
     }
 
     // search category
     public function fualSearch(Request $request)
     {
         $all_fuals = FualType::where('name', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
         return $all_fuals->total() >= 1 ? view('backend.pages.admin.fual.search-fual',
             compact('all_fuals'))->render() : response()->json(['status'=>__("nothing")]);
     }
 
     //  Car pagination
     public function fualPaginate(Request $request)
     {
         if($request->ajax()){
             $all_fuals = FualType::latest()->paginate(10);
             return view('backend.pages.admin.fual.search-fual', compact('all_fuals'))->render();
         }
     }
 
     public function bulkAction(Request $request){
         try {
             // Fetch fuals with the requested IDs and eager load relationships
             $fuals = FualType::whereIn('id',$request->ids)->get();
 
             // Loop through each fual to delete related records
             foreach ($fuals as $fual) {
                 // Delete related models
                 $fual->metaData()->delete(); // Deletes the related meta data
 
                 // Finally, delete the fual itself
                 $fual->delete();
             }
         }catch (\Exception $e){}
 
         return response()->json(['status' => 'ok']);
     }
 
     public function addfual(Request $request)
     {
        
        if ($request->isMethod('post')) {
             // Validate the request data
           $request->validate([
                 
                 'name' => 'required|max:191',
                 'image' => 'required|integer',
                 
                 
             ], [
                 'name.required' => __("The name field is required."),
                 'name.max' => __("The name must not exceed 191 characters."),
                 'image.required' => __("The  image is required.")
 
             ]);
 
 
            

            $car = fualType::create([
                 'name' => $request->name,
                 'image' => $request->image
                
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
 
 
 
             DB::beginTransaction();
             try {
                 $car->metaData()->create($Metas);
                 DB::commit();
 
             }catch (\Throwable $th){
                 DB::rollBack();
             }
 
 
             return redirect()->back()->with(FlashMsg::item_new(__("fual Added Success")));
         }
 
        
         
         return view('backend.pages.admin.fual.create');
 
     }
 
     public function editfual(Request $request, $id)
     {
         if ($request->isMethod('post')) {
 
            $request->validate([
                'name' => 'required|max:191',
                'image' => 'required|integer',
               
            ], [
                'name.required' => __("The name field is required."),
                'name.max' => __("The name must not exceed 191 characters."),
                'image.required' => __("The  image is required.")
                

            ]);
 
             $fual = FualType::findOrFail($id);
 
          
        
             // update a fual instance
             $fual->update([
            
                'name' => $request->name,
                'image' => $request->image
                
               
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
 
           
             DB::beginTransaction();
             try {
                 $fual->metaData()->update($Metas);
                 DB::commit();
 
             }catch (\Throwable $th){
                 DB::rollBack();
             }
 
 
             return redirect()->back()->with(FlashMsg::item_new(__("fual Updated Success")));
         }
 

         
         $fual = FualType::findOrFail($id);
       
 
         return view('backend.pages.admin.fual.edit-fual', [
             'fual' => $fual,
            
         ]);
 
     }
 
    
 
     public function fualDetails($id){
         $fual = FualType::find($id);
         
         if (!$fual) {
             try {
                 AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
             }catch (\Exception $exception){}
 
             abort(404);
         }
 
         AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
 
         return view('backend.pages.admin.fual.fual-details', compact('fual'));
     }
 
}
