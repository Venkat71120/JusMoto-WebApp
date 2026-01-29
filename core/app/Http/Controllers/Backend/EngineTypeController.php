<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\EngineType;
use Illuminate\Http\Request;
use phpseclib3\Math\BigInteger\Engines\Engine;
use App\Models\Backend\AdminNotification;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Helpers\FlashMsg;
use Illuminate\Support\Facades\DB;

class EngineTypeController extends Controller
{
    public function allEngines(){
        $all_engines = EngineType::latest()->paginate(10);
        return view('backend.pages.admin.engine.allEngines', compact('all_engines'));
    }
 
     public function engineDelete($id){
         try {
             $engine = EngineType::findOrFail($id);
 
             $engine->metaData()->delete(); 
             $engine->varient()->delete();
            
             $engine->delete();
 
             return redirect()->back()->with(FlashMsg::item_delete(__("Engine Deleted Success")));
         } catch (ModelNotFoundException $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__("Engine not found.")));
         } catch (\Exception $e) {
             return redirect()->back()->with(FlashMsg::item_delete(__("An error occurred while deleting the Engine")));
         }
     }
 
     // search category
     public function engineSearch(Request $request)
     {
         $all_engines = EngineType::where('name', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
         return $all_engines->total() >= 1 ? view('backend.pages.admin.engine.search-engine',
             compact('all_engines'))->render() : response()->json(['status'=>__("nothing")]);
     }
 
     //  Car pagination
     public function enginePaginate(Request $request)
     {
         if($request->ajax()){
             $all_engines = EngineType::latest()->paginate(10);
             return view('backend.pages.admin.engine.search-engine', compact('all_engines'))->render();
         }
     }
 
     public function bulkAction(Request $request){
         try {
             // Fetch engines with the requested IDs and eager load relationships
             $engines = EngineType::whereIn('id',$request->ids)->get();
 
             // Loop through each engine to delete related records
             foreach ($engines as $engine) {
                 // Delete related models
                 $engine->metaData()->delete(); // Deletes the related meta data
 
                 // Finally, delete the engine itself
                 $engine->delete();
             }
         }catch (\Exception $e){}
 
         return response()->json(['status' => 'ok']);
     }
 
     public function addEngine(Request $request)
     {
        
        if ($request->isMethod('post')) {
             // Validate the request data
           $request->validate([
                 
                 'name' => 'required|max:191',
                 
                 
             ], [
                 'name.required' => __("The name field is required."),
                 'name.max' => __("The name must not exceed 191 characters."),
              
 
             ]);
 
 
            

            $car = EngineType::create([
                 'name' => $request->name
                
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
 
 
             return redirect()->back()->with(FlashMsg::item_new(__("Engine Added Success")));
         }
 
        
         
         return view('backend.pages.admin.engine.create');
 
     }
 
     public function editEngine(Request $request, $id)
     {
         if ($request->isMethod('post')) {
 
            $request->validate([
                'name' => 'required|max:191',
               
            ], [
                'name.required' => __("The name field is required."),
                'name.max' => __("The name must not exceed 191 characters."),
                

            ]);
 
             $engine = EngineType::findOrFail($id);
 
          
        
             // update a engine instance
             $engine->update([
            
                'name' => $request->name,
               
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
                 $engine->metaData()->update($Metas);
                 DB::commit();
 
             }catch (\Throwable $th){
                 DB::rollBack();
             }
 
 
             return redirect()->back()->with(FlashMsg::item_new(__("Engine Updated Success")));
         }
 

         
         $engine = EngineType::findOrFail($id);
       
 
         return view('backend.pages.admin.engine.edit-engine', [
             'engine' => $engine,
            
         ]);
 
     }
 
    
 
     public function engineDetails($id){
         $engine = EngineType::find($id);
         
         if (!$engine) {
             try {
                 AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
             }catch (\Exception $exception){}
 
             abort(404);
         }
 
         AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
 
         return view('backend.pages.admin.engine.engine-details', compact('engine'));
     }
 
}
