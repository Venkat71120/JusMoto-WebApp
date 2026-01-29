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

class AdminProductController extends Controller
{

   public function adminAllProducts(){
       $all_products = Service::adminProducts()->latest()->paginate(10);
       return view('backend.pages.products.admin.admin-products', compact('all_products'));
   }

    public function adminChangeStatus($id){
        $product = Service::select('id','status')->where('id',$id)->first();
        if($product->status==1){
            $status = 0;
        }else{
            $status = 1;
        }
        Service::where('id',$id)->update(['status'=>$status]);
        return redirect()->back()->with(FlashMsg::item_new(__("Status Change Success")));
    }

    public function adminProductPublishedStatus($id)
    {
        // First check if the service exists
        $product = Service::find($id);
        if (!$product) {
            $message = __("Product not found.");
            toastr()->error($message);
            return redirect()->back();
        }
        // service publication status
        $product->is_published = !$product->is_published;
        $product->published_at = now();
        $product->save();

        // Show appropriate message
        if ($product->is_published) {
            $message = __("Product has been successfully published.");
            toastr()->success($message);
        } else {
            $message = __("Product has been successfully unpublished.");
            toastr()->warning($message);
        }

        return redirect()->back();
    }

    public function adminProductDelete($id){
        try {
            $product = Service::with(['faqs','metaData', 'reviews', 'serviceReports','serviceAdditional','serviceCar'])->find($id);

            $product->faqs()->delete(); // Deletes all related FAQs
            $product->metaData()->delete(); // Deletes the related meta data
            $product->reviews()->delete();
            $product->serviceReports()->delete();
            $product->serviceAdditional()->delete(); // Deletes all related additional dat
            $product->serviceCar()->delete(); // Deletes all related service Car
            $product->delete();

            return redirect()->back()->with(FlashMsg::item_delete(__("Product Deleted Success")));
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__("Product not found.")));
        } catch (\Exception $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__("An error occurred while deleting the product")));
        }
    }

    // search category
    public function adminSearchProduct(Request $request)
    {
        $all_products = Service::adminProducts()->where('title', 'LIKE', "%". strip_tags($request->string_search) ."%")->latest()->paginate(10);
        return $all_products->total() >= 1 ? view('backend.pages.products.admin.search-product',
            compact('all_products'))->render() : response()->json(['status'=>__("nothing")]);
    }

    // pagination
    public function adminPaginate(Request $request)
    {
        if($request->ajax()){
            $all_products = Service::adminProducts()->latest()->paginate(10);
            return view('backend.pages.products.admin.search-product', compact('all_products'))->render();
        }
    }

    public function bulkAction(Request $request){
        try {
            // Fetch services with the requested IDs and eager load relationships
            $products = Service::with(['includes','faqs','metaData', 'reviews', 'serviceReports','serviceAdditional','serviceCar'])
                ->adminProducts()
                ->whereIn('id',$request->ids)
                ->get();

            // Loop through each service to delete related records
            foreach ($products as $product) {
                // Delete related models
                $product->includes()->delete(); // Deletes all related includes
                $product->faqs()->delete(); // Deletes all related FAQs
                $product->metaData()->delete(); // Deletes the related meta data
                $product->reviews()->delete(); // Deletes all related reviews
                $product->serviceReports()->delete(); // Deletes all related reports
                $product->serviceAdditional()->delete(); // Deletes all related additional dat
                $product->serviceCar()->delete(); // Deletes all related service Car

                // Finally, delete the service itself
                $product->delete();
            }
        }catch (\Exception $e){}

        return response()->json(['status' => 'ok']);
    }

    public function adminAddProduct(Request $request)
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
                'description.required' => __("The description field is required."),
                'slug.required' => __("The slug field is required."),
                'slug.unique' => __("The slug has already been taken."),
                'price.required' => __("The price field is required."),
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

             $product_image = $request->product_image;
             $galleryImagesArray = array_map('trim', explode(',', $request->gallery_images));
             $gallery_images = is_array($galleryImagesArray) ? implode('|', $galleryImagesArray) : $galleryImagesArray;

            // Create a new Service instance
           $product = Service::create([
                'admin_id' => $admin->id,
                'category_id' => $request->category_id,
                'title' => $request->title,
                'slug' => Str::slug(purify_html($slug), '-', null),
                'description' => $request->description,
                'price' => $request->price,
                'discount_price' => $request->discount_price ?? 0,
                'duration'=>$request->duration,
                'max_qty' => $request->max_qty ?? 1,
                'image' => $product_image,
                'gallery_images' => $gallery_images,
                'video_url' => $video_url ?? null,
                'is_featured' => $request->is_featured ?? 0,
                'status' => 1,
                'type'=>1,
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
            $last_product_id = $product->id;
           

            DB::beginTransaction();
            try {
                $product->metaData()->create($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }

            $product_update = false;

            // Insert related records
            $this->insertRelatedRecords($request, $last_product_id, $product_update);

            return redirect()->back()->with(FlashMsg::item_new(__("Product Added Success")));
        }
        $admin_id = Auth::guard('admin')->user()->id;


        $categories = Category::where('status', 1)->where('type',1)->get();
        $sub_categories = SubCategory::where('status', 1);
        $all_states = State::all_states();
        $all_cities = City::all_cities();
        $all_areas = Area::all_areas();
        $user = Auth::guard('admin')->user();
        $brands = Brand::all();
        $all_cars = Car::with("brand")->get();

        return view('backend.pages.products.admin.create-product', [
            'user' => $user,
            'categories' => $categories,
            'sub_categories' => $sub_categories,
            'all_states' => $all_states,
            'all_cities' => $all_cities,
            'all_areas' => $all_areas,
            'brands' => $brands,
            'all_cars' => $all_cars,
        ]);

    }

    public function adminEditProduct(Request $request, $id)
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
                'title.required' => __("The title is required."),
                'title.max' => __("The title must not exceed 191 characters."),
                'description.required' => __("The description field is required."),
                'slug.required' => __("The slug field is required."),
                'slug.unique' => __("The slug has already been taken."),
                'price.required' => __("The price field is required."),
                'price.numeric' => __("The price must be a numeric value."),

                // other
               
                'service_car_id.required' => __("Select service car is required."),
                'car_variant_id.required' => __("Select service variant is required. "),
            ]);

            $product = Service::findOrFail($id);
            // country, state, city
            $admin = Admin::where('id', Auth::guard('admin')->user()->id)->first();
            $slug = !empty($request->slug) ? $request->slug : Str::slug($product->slug);

            // video url
            $video_url = null;
            if(!empty($request->video_url)){
                $video_url = getYoutubeEmbedUrl($request->video_url);
            }

            $service_image = $request->image;
            $galleryImagesArray = array_map('trim', explode(',', $request->gallery_images));
            $gallery_images = is_array($galleryImagesArray) ? implode('|', $galleryImagesArray) : $galleryImagesArray;

            // Create a new Service instance
            $product->update([
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
            $last_product_id = $product->id;
            DB::beginTransaction();
            try {
                $product->metaData()->update($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }

            $product_update = true;

            // Insert related records
            $this->insertRelatedRecords($request, $last_product_id, $product_update);

            return redirect()->back()->with(FlashMsg::item_new(__("Product Updated Success")));
        }

        $admin = Admin::where('id', Auth::guard('admin')->user()->id)->first();
        $product = Service::with('includes', 'excludes', 'faqs', 'addons','serviceAdditional')->findOrFail($id);
        $categories = Category::where('status', 1)->where("type",1)->get();
        $sub_categories = SubCategory::where('status', 1)->get();
        $all_countries = State::all_states();
        $all_states = City::all_cities();
        $all_cities = Area::all_areas();
        $all_cars =Car::with("brand")->get();
        $all_service_cars=Service_Car::where("service_id",$product->id)->get();

        $data=session("editProductValues",[]);
        if ($all_service_cars->isNotEmpty()) {
           
            foreach($all_service_cars as $service_car)
            {
                $variant=Varient::where("id",$service_car?->varient_id)->first();
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
        $session_values=session()->get("editProductValues");
       

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
                session()->put("editProductValues",$data);
            }
            
        }
        else
        {
            session()->put("editProductValues",$data);
        }
        

        $brands = Brand::all();



        return view('backend.pages.products.admin.edit-product', [
            'product' => $product,
            'categories' => $categories,
            'sub_categories' => $sub_categories,
            'all_countries' => $all_countries,
            'all_states' => $all_states,
            'all_cities' => $all_cities,
            'all_cars' => $all_cars,
            'all_service_cars' => $all_service_cars,
            'brands' => $brands,
        ]);

    }

    private function insertRelatedRecords(Request $request, $productId, $product_update)
    {
        // service update
        if ($product_update){
            // Clear existing related records
            ServiceInclude::where('service_id', $productId)->delete();
            ServiceFaq::where('service_id', $productId)->delete();
            Service_additional::where('service_id', $productId)->delete();
            Service_Car::where('service_id', $productId)->delete();
        }

       

        // Prepare and insert included services
        if($request->filled('include_product_title'))
        {
            $includedProducts = [];
            foreach ($request->include_product_title as $key => $title) {
                if(!empty($title))
                {
                    $includedProducts[] = [
                        'service_id' => $productId,
                        'title' => $title,
                    ];
                }
               
            }
            ServiceInclude::insert($includedProducts);
        }
            
        

      
        // Prepare and insert service FAQs
        if ($request->filled('faqs_title')) {
            $productFaqs = [];
            foreach ($request->faqs_title as $key => $title) {
                if (!empty($title)) {
                    $productFaqs[] = [
                        'service_id' => $productId,
                        'title' => $title,
                        'description' => $request->faqs_description[$key],
                    ];
                }
            }
            ServiceFaq::insert($productFaqs);
        }
        if ($request->filled('product_info_title')) {
            $productinfo = [];
            foreach ($request->product_info_title as $key => $title) {
                if (!empty($title)) {
                    $productinfo[] = [
                        'service_id' => $productId,
                        'title' => $title,
                        'image' => $request->product_information_image[$key],
                        'type'=>"info"
                    ];
                }
            }
            Service_additional::insert($productinfo);
        }
        if ($request->filled('product_specification_title')) {
            $productSpecification = [];
            foreach ($request->product_specification_title as $key => $title) {
                if (!empty($title)) {
                    $productSpecification[] = [
                        'service_id' => $productId,
                        'title' => $title,
                        'image' => $request->product_specification_image[$key],
                        'type'=>"specification"
                    ];
                }
            }
            Service_additional::insert($productSpecification);
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
                    $product=Service::where('id',$productId)->first();
                    $price=$product->price;
                    $discount_price=$product->discount_price;
                    $duration=$product->duration;
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
                            'service_id'=>$productId,
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
                        'service_id'=>$productId,
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
                session()->forget("productValues");
                session()->forget("editProductValues");
               
            }


        }
    }

    public function productDetails($id){
        $product = Service::with('includes', 'excludes', 'faqs', 'addons','serviceAdditional','serviceCar')->find($id);

        if (!$product) {
            try {
                AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);
            }catch (\Exception $exception){}

            abort(404);
        }

        AdminNotification::where('identity', $id)->update(['is_read'=> 'read']);

        return view('backend.pages.products.product-details', compact('product'));
    }

    public function makeFeatured($id){
        $product = Service::with('admin')
            ->where('id',$id)
            ->first();

        if (!$product) {
            return redirect()->back()->with(FlashMsg::item_new(__("Product not found.")));
        }

        if ($product->is_featured == 0) {
            $product->update([
                'is_featured' => 1,
            ]);
        }else{
            $product->update([
                'is_featured' => 0,
            ]);
        }


        if ($product->is_featured == 1){
            $message_title = FlashMsg::item_new(__("Product added to Featured Success"));

            // sent email to admin
            try {
                $subject = __("Your Product added to Featured List.");
                $message = __("Your product (ID: @service_id) has been added to the Featured List. Thanks.");
                $message = str_replace('@service_id', $product->id, $message);
                Mail::to($product->admin?->email)->send(new BasicMail([
                    'subject' => $subject,
                    'message' => $message
                ]));
            } catch (\Exception $e) {}

        }else{
            $message_title = FlashMsg::item_delete(__("Product remove to Featured Success"));

            // sent email to admin
            try {
                $subject = __("Your Product removed to Featured List.");
                $message = __("Your product (ID: @service_id) has been removed to the Featured List. Thanks.");
                $message = str_replace('@service_id', $product->id, $message);
                Mail::to($product->admin?->email)->send(new BasicMail([
                    'subject' => $subject,
                    'message' => $message
                ]));
            } catch (\Exception $e) {}
        }

        return redirect()->back()->with($message_title);
    }
    

}
