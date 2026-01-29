<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\Backend\Admin;
use App\Models\Backend\AdminNotification;
use App\Models\Backend\Category;
use App\Models\Backend\ChildCategory;
use App\Models\Backend\SubCategory;
use App\Models\Brand;
use App\Models\Cache;
use App\Models\Car;
use App\Models\Service;
use App\Models\Service_additional;
use App\Models\Service_Car;
use App\Models\ServiceAddon;
use App\Models\ServiceExclude;
use App\Models\ServiceFaq;
use App\Models\ServiceInclude;
use App\Models\Varient;
use App\Rules\CheckSlugDuplicateRule;
use App\Rules\CheckVarientIdForCarRule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Modules\CountryManage\app\Models\Area;
use Modules\CountryManage\app\Models\City;
use Modules\CountryManage\app\Models\State;

class AdminServiceController extends Controller
{

   public function adminAllServices(){
       $all_services = Service::adminServices()->latest()->paginate(10);
       return view('backend.pages.services.admin.admin-services', compact('all_services'));
   }

    public function adminChangeStatus($id){
        $service = Service::select('id','status')->where('id',$id)->first();
        if($service->status==1){
            $status = 0;
        }else{
            $status = 1;
        }
        Service::where('id',$id)->update(['status'=>$status]);
        return redirect()->back()->with(FlashMsg::item_new(__("Status Change Success")));
    }

    public function adminServicePublishedStatus($id)
    {
        // First check if the service exists
        $service = Service::find($id);
        if (!$service) {
            $message = __("Service not found.");
            toastr()->error($message);
            return redirect()->back();
        }
        // service publication status
        $service->is_published = !$service->is_published;
        $service->published_at = now();
        $service->save();

        // Show appropriate message
        if ($service->is_published) {
            $message = __("Service has been successfully published.");
            toastr()->success($message);
        } else {
            $message = __("Service has been successfully unpublished.");
            toastr()->warning($message);
        }

        return redirect()->back();
    }

    public function adminServiceDelete($id){
        try {
            $service = Service::with(['includes','faqs','metaData', 'reviews', 'serviceReports','serviceAdditional','serviceCar'])->find($id);

            $service->includes()->delete(); // Deletes all related includes
            $service->faqs()->delete(); // Deletes all related FAQs
            $service->metaData()->delete(); // Deletes the related meta data
            $service->reviews()->delete();
            $service->serviceReports()->delete();
            $service->serviceAdditional()->delete(); // Deletes all related additional dat
            $service->serviceCar()->delete(); // Deletes all related service Car
            $service->delete();

            return redirect()->back()->with(FlashMsg::item_delete(__("Service Deleted Success")));
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__("Service not found.")));
        } catch (\Exception $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__("An error occurred while deleting the service")));
        }
    }

    // search category
    public function adminSearchService(Request $request)
    {
        $all_services = Service::adminServices()->where('title', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
        return $all_services->total() >= 1 ? view('backend.pages.services.admin.search-service',
            compact('all_services'))->render() : response()->json(['status'=>__("nothing")]);
    }

    // pagination
    public function adminPaginate(Request $request)
    {
        if($request->ajax()){
            $all_services = Service::adminServices()->latest()->paginate(10);
            return view('backend.pages.services.admin.search-service', compact('all_services'))->render();
        }
    }

    public function bulkAction(Request $request){
        try {
            // Fetch services with the requested IDs and eager load relationships
            $services = Service::with(['includes','faqs','metaData', 'reviews', 'serviceReports','serviceAdditional','serviceCar'])
                ->adminServices()
                ->whereIn('id',$request->ids)
                ->get();

            // Loop through each service to delete related records
            foreach ($services as $service) {
                // Delete related models
                $service->includes()->delete(); // Deletes all related includes
                $service->excludes()->delete(); // Deletes all related excludes
                $service->faqs()->delete(); // Deletes all related FAQs
                $service->addons()->delete(); // Deletes all related addons
                $service->metaData()->delete(); // Deletes the related meta data
                $service->reviews()->delete(); // Deletes all related reviews
                $service->serviceReports()->delete(); // Deletes all related reports
                $service->serviceAdditional()->delete(); // Deletes all related additional dat
                $service->serviceCar()->delete(); // Deletes all related service Car

                // Finally, delete the service itself
                $service->delete();
            }
        }catch (\Exception $e){}

        return response()->json(['status' => 'ok']);
    }

    public function adminAddService(Request $request)
    {
        
       if ($request->isMethod('post')) {
            // Validate the request data
          $request->validate([
                'category_id' => 'required',
                'title' => 'required|max:191',
                'description' => 'required',
                'slug' => 'required|unique:services',
                'price' => 'required|numeric',
                // other
                'include_service_title.*' => 'nullable|max:191',
                'include_service_price.*' => 'nullable|numeric',
                'addons_service_title.*' => 'max:191',
                'faqs_title.*' => 'max:191',
                'service_car_id' => ['required','array',new CheckVarientIdForCarRule],
                'service_car_id.*'=> ['required'],
                'car_variant_id.*'=> ['required',],
            ], [
                'category_id.required' => __("Category is required"),
                'title.required' => __("The title is required."),
                'title.max' => __("The title must not exceed 191 characters."),
                'description.required' => __("The description is required."),
                'slug.required' => __("The slug is required."),
                'slug.unique' => __("The slug has already been taken."),
                'price.required' => __("The price is required."),
                'price.numeric' => __("The price must be a numeric value."),

                // other
                'service_car_id.required' => __("Select service car is required."),
                'car_variant_id.required' => __("Select service variant is required. "),
                
            ]);


            // Retrieve the authenticated admin
            $admin = Auth::guard('admin')->user();
            // Generate slug from title if not provided
            $slug = $request->filled('slug') ? $request->slug : $request->title;
            // Process video URL if provided
            $video_url = !empty($request->video_url) ? getYoutubeEmbedUrl($request->video_url) : null;

             $service_image = $request->service_image;
             $galleryImagesArray = array_map('trim', explode(',', $request->gallery_images));
             $gallery_images = is_array($galleryImagesArray) ? implode('|', $galleryImagesArray) : $galleryImagesArray;

            // Create a new Service instance
           $service = Service::create([
                'admin_id' => $admin->id,
                'category_id' => $request->category_id,
                'title' => $request->title,
                'slug' => Str::slug(purify_html($slug), '-', null),
                'description' => $request->description,
                'price' => $request->price,
                'discount_price' => $request->discount_price ?? 0,
                'max_qty' => $request->max_qty ?? 1,
                'duration' => $request->duration ?? null,
                'image' => $service_image,
                'gallery_images' => $gallery_images,
                'video_url' => $video_url ?? null,
                'is_featured' => $request->is_featured ?? 0,
                'status' => 1,
            ]);


            // Generate meta tags
            $words = explode(' ', $request->input('title'));
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
            $last_service_id = $service->id;
            DB::beginTransaction();
            try {
                $service->metaData()->create($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }

            $service_update = false;

            // Insert related records
            $this->insertRelatedRecords($request, $last_service_id, $service_update);

            return redirect()->back()->with(FlashMsg::item_new(__("Service Added Success")));
        }
        $admin_id = Auth::guard('admin')->user()->id;


        $categories = Category::where('status', 1)->where('type',0)->get();
        $sub_categories = SubCategory::where('status', 1);
        $all_states = State::all_states();
        $all_cities = City::all_cities();
        $all_areas = Area::all_areas();
        $user = Auth::guard('admin')->user();
        $brands = Brand::all();
        $cars= Car::all();
     

        return view('backend.pages.services.admin.create-service', [
            'user' => $user,
            'categories' => $categories,
            'sub_categories' => $sub_categories,
            'all_states' => $all_states,
            'all_cities' => $all_cities,
            'all_areas' => $all_areas,
            'brands' => $brands,
            'cars' => $cars,
        ]);

    }

    public function adminEditService(Request $request, $id)
    {
        if ($request->isMethod('post')) {
           

            $request->validate([
                'category_id' => 'required',
                'title' => 'required|max:191',
                'description' => 'required',
                'slug' => ['required',new CheckSlugDuplicateRule($id)],
                'price' => 'required|numeric',
                // other
                'include_service_title.*' => 'nullable|max:191',
                'include_service_price.*' => 'nullable|numeric',
                'addons_service_title.*' => 'max:191',
                'faqs_title.*' => 'max:191',
                'service_car_id' => ['required','array',new CheckVarientIdForCarRule],
                'service_car_id.*'=> ['required'],
                'car_variant_id.*'=> ['required',],
               
            ], [
                'category_id.required' => __("Category is required"),
                'title.required' => __("The title  is required."),
                'title.max' => __("The title must not exceed 191 characters."),
                'description.required' => __("The description  is required."),
                'slug.required' => __("The slug is required."),
                'slug.unique' => __("The slug has already been taken."),
                'price.required' => __("The price is required."),
                'price.numeric' => __("The price must be a numeric value."),

                // other
               
                'service_car_id.required' => __("Select service car is required."),
                'car_variant_id.required' => __("Select service variant is required. "),
            ]);

            $service = Service::findOrFail($id);
            // country, state, city
            $admin = Admin::where('id', Auth::guard('admin')->user()->id)->first();
            $slug = !empty($request->slug) ? $request->slug : Str::slug($service->slug);

            // video url
            $video_url = null;
            if(!empty($request->video_url)){
                $video_url = getYoutubeEmbedUrl($request->video_url);
            }

            $service_image = $request->image;
            $galleryImagesArray = array_map('trim', explode(',', $request->gallery_images));
            $gallery_images = is_array($galleryImagesArray) ? implode('|', $galleryImagesArray) : $galleryImagesArray;

            // Create a new Service instance
            $service->update([
                'admin_id' => $admin->id,
                'category_id' => $request->category_id,
                'title' => $request->title,
                'slug' => Str::slug(purify_html($slug), '-', null),
                'description' => $request->description,
                'duration' => $request->duration,
                'price' => $request->price,
                'discount_price' => $request->discount_price ?? 0,
                'max_qty' => $request->max_qty ?? 1,
                'image' => $service_image,
                'gallery_images' => $gallery_images,
                'video_url' => $video_url,
                'is_featured' => $request->is_featured ?? 0,
                'status' => 1,
            ]);

            // Generate meta tags
            $words = explode(' ', $request->input('title'));
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
            $last_service_id = $service->id;
            DB::beginTransaction();
            try {
                $service->metaData()->update($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }

          

            $service_update = true;

            // Insert related records
            $this->insertRelatedRecords($request, $last_service_id, $service_update);

            return redirect()->back()->with(FlashMsg::item_new(__("Service Updated Success")));
        }

        $admin = Admin::where('id', Auth::guard('admin')->user()->id)->first();
        $service = Service::with('includes', 'excludes', 'faqs', 'addons','serviceAdditional')->findOrFail($id);
        $categories = Category::where('status', 1)->get();
        $sub_categories = SubCategory::where('status', 1)->get();
        $all_countries = State::all_states();
        $all_states = City::all_cities();
        $all_cities = Area::all_areas();
        $all_cars = Car::with(["brand"])->get();
        $all_service_cars=Service_Car::with("varient")->where("service_id",$service->id)->get();
        $data=session("editValues",[]);
        if ($all_service_cars->isNotEmpty()) {
            foreach($all_service_cars as $service_car)
            {
                $variant=Varient::where("id",$service_car->varient_id)->first();
                $car=Car::with("brand")->where("id",$variant?->car_id)->first();
                $data[]=(object)[
                    'brand_id' => $car?->brand_id,
                    'car_id' => $car?->id,
                    'variant_id' => $service_car?->varient_id,
                    'price' => $service_car?->price,
                    'discount_price' => $service_car?->discount_price,
                    'duration'=>$service_car?->duration,
                    'image'=>$service_car?->image,
                    'use_default' => $service_car?->use_default,
                    'brand'=>$car?->brand?->name,
                    'car'=>$car?->name,
                    
                ];
            }
        }  
        else
        {
           
            $data[]=(object)[
                'brand_id' => null,
                'car_id' =>null,
                'variant_id' => null,
                'price' => null,
                'discount_price' => null,
                'duration'=>null,
                'image'=>null,
                'use_default' => 0,
                'brand'=>null,
                'car'=>null,
                
            ];
        }    
        $session_values=session()->get("editValues");
        $flag=false;
    
        if($session_values)
        {

            foreach($data as $value)
            {
                if(in_array($value,$session_values))
                {
                     $flag=true;
                     break;
                }
            }  

            if($flag == false)
            {
                session()->put("editValues",$data);
            }
            
        }
        else
        {
            session()->put("editValues",$data);
        }

      
       
        $brands = Brand::all();
        $cars=Car::all();

        session()->put("service_id",$service->id);


        return view('backend.pages.services.admin.edit-service', [
            'service' => $service,
            'categories' => $categories,
            'sub_categories' => $sub_categories,
            'all_countries' => $all_countries,
            'all_states' => $all_states,
            'all_cities' => $all_cities,
            'all_cars' => $all_cars,
            'all_service_cars' => $all_service_cars,
            'brands' => $brands,
            'cars' => $cars,
            
        ]);

    }

    private function insertRelatedRecords(Request $request, $serviceId, $service_update)
    {
        // service update

        if ($service_update){
            // Clear existing related records
            ServiceInclude::where('service_id', $serviceId)->delete();
            ServiceFaq::where('service_id', $serviceId)->delete();
            Service_additional::where('service_id', $serviceId)->delete();
            Service_Car::where('service_id', $serviceId)->delete();
        }

        
       

        // Prepare and insert included services
    
        if($request->filled('include_service_title'))
        {
            $includedServices = [];
            foreach ($request->include_service_title as $key => $title) {
                if(!empty($title))
                {
                    $includedServices[] = [
                        'service_id' => $serviceId,
                        'title' => $title,
                    ];
                }

                
            }
            ServiceInclude::insert($includedServices);
        }
           
        

        // Prepare and insert service FAQs
        if ($request->filled('faqs_title')) {
            $serviceFaqs = [];
            foreach ($request->faqs_title as $key => $title) {
                if (!empty($title)) {
                    $serviceFaqs[] = [
                        'service_id' => $serviceId,
                        'title' => $title,
                        'description' => $request->faqs_description[$key],
                    ];
                }
            }
            ServiceFaq::insert($serviceFaqs);
        }
        if ($request->filled('service_info_title')) {
            $serviceinfo = [];
            foreach ($request->service_info_title as $key => $title) {
                if (!empty($title)) {
                    $serviceinfo[] = [
                        'service_id' => $serviceId,
                        'title' => $title,
                        'image' => $request->service_information_image[$key],
                        'type'=>"info"
                    ];
                }
            }
            Service_additional::insert($serviceinfo);
        }
        if ($request->filled('service_specification_title')) {
            $serviceSpecification = [];
            foreach ($request->service_specification_title as $key => $title) {
                if (!empty($title)) {
                    $serviceSpecification[] = [
                        'service_id' => $serviceId,
                        'title' => $title,
                        'image' => $request->service_specification_image[$key],
                        'type'=>"specification"
                    ];
                }
            }
            Service_additional::insert($serviceSpecification);
        }

        $service_cars=$request->input('service_car_id');
        $price=0;
        $discount_price=0;
        if($service_cars)
        {
            $include_car=[];
           
            foreach($service_cars as $key=>$value)
            {
                $car=Car::where('id',$request->service_car_id[$key])->first();
                if($request->use_default[$key] == 1)
                {
                    $service=Service::where('id',$serviceId)->first();
                    $price=$service->price;
                    $discount_price=$service->discount_price;
                    $duration=$service->duration;
                }
                else
                {
                    $price=$request->car_price[$key] ?? 0;
                    $discount_price=$request->car_discount_price[$key] ?? 0;
                    $duration=$request->car_duration[$key] ?? 0;
                }

                if($request->car_variant_id[$key] == "all")
                {
                    $variants=Varient::where("car_id",$request->service_car_id[$key])->get();
                    foreach($variants as $variant)
                    {
                        $include_car[]=[
                            'service_id'=>$serviceId,
                            'varient_id'=>$variant->id,
                            'image'=>$request->service_car_image[$key],
                            'price'=>$price,
                            'discount_price'=>$discount_price,
                            'duration'=>$duration,                        
                            'use_default'=>$request->use_default[$key]];
                    }
                }
                else
                {
                    $include_car[]=[
                        'service_id'=>$serviceId,
                        'varient_id'=>$request->car_variant_id[$key],
                         'image'=>$request->service_car_image[$key],
                         'price'=>$price,
                         'discount_price'=>$discount_price,
                         'duration'=>$duration,                        
                         'use_default'=>$request->use_default[$key]];
                }
               

            }
            $data=Service_Car::insert($include_car);
            if($data)
            {
                session()->forget("values");
                session()->forget("editValues");
            }


        }
    }

    public function serviceDetails($id){
        $service = Service::with('includes', 'faqs', 'addons','serviceAdditional','serviceCar')->find($id);
        
        if (!$service) {
            try {
                AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
            }catch (\Exception $exception){}

            abort(404);
        }

        AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);

        return view('backend.pages.services.service-details', compact('service'));
    }

    public function makeFeatured($id){
        $service = Service::with('admin')
            ->where('id',$id)
            ->first();

        if (!$service) {
            return redirect()->back()->with(FlashMsg::item_new(__("Service not found.")));
        }

        if ($service->is_featured == 0) {
            $service->update([
                'is_featured' => 1,
            ]);
        }else{
            $service->update([
                'is_featured' => 0,
            ]);
        }


        if ($service->is_featured == 1){
            $message_title = FlashMsg::item_new(__("Service added to Featured Success"));
            // sent email to admin
            try {
                $subject = __("Your Service added to Featured List.");
                $message = __("Your service (ID: @service_id) has been added to the Featured List. Thanks.");
                $message = str_replace('@service_id', $service->id, $message);
                Mail::to($service->admin?->email)->send(new BasicMail([
                    'subject' => $subject,
                    'message' => $message
                ]));
            } catch (\Exception $e) {}
        
        }else{
            $message_title = FlashMsg::item_delete(__("Service remove to Featured Success"));
            // sent email to admin
            try {
                $subject = __("Your Service removed to Featured List.");
                $message = __("Your service (ID: @service_id) has been removed to the Featured List. Thanks.");
                $message = str_replace('@service_id', $service->id, $message);
                Mail::to($service->admin?->email)->send(new BasicMail([
                    'subject' => $subject,
                    'message' => $message
                ]));
            } catch (\Exception $e) {}

        }

        return redirect()->back()->with($message_title);
    }
  

}
