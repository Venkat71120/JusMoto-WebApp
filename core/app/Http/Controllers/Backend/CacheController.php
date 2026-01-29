<?php

namespace App\Http\Controllers\Backend;

use App\Actions\Services\ImageModifier;
use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Cache;
use App\Models\Car;
use App\Models\EngineType;
use App\Models\FualType;
use App\Models\Service_Car;
use App\Models\Varient;
use App\Rules\CheckCarPriceRule;
use App\Rules\CheckDuplicateVariantRule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class CacheController extends Controller
{
   
  public function allCarServiceDelete()
  { 

      $datas=session()->get('values');
      $editDatas=session()->get('editValues');
      if($datas)
      {
        // Remove the session data
        session()->forget('values');
        $session_data = view("backend.pages.services.admin.session_data")->render();

      }
      else if($editDatas)
      {
        // Remove the session data
        session()->forget('editValues');
        $session_data = view("backend.pages.services.admin.edit_session_data")->render();
      }
     
      return response()->json([
          'view' => $session_data,
        'status' => 'success'
      ]);
           
  }
    
   public function carServiceDelete($id)
    {
        
          

            $datas=session()->get('values');
            unset($datas[$id]);
            $datas = array_values($datas);

            // Store the updated array back in the session
            session()->put('values', $datas);

            $session_data = view("backend.pages.services.admin.session_data")->render();
            
            
       
             return response()->json([
                'view' => $session_data,
              'status' => 'success'
            ]);
    
            
    }

    public function addServiceCar(Request $request)
    {
      try
      {
        $variant_id=$request->input("variant_id");
        if($variant_id)
        {
          $variants=Varient::all();
          $data=session("values",[]);
          $existings=session()->get("values");
          if($existings)
          {
            $existingIds = array_map(function ($existing) {
              return is_object($existing) ? $existing->variant_id : $existing; 
            }, $existings);
            $variantIds = $variants->pluck('id')->toArray();
  
            // Check if all variant IDs exist in existing IDs
            $allSame = empty(array_diff($variantIds, $existingIds));
            if($allSame)
            {
              return response()->json([
                'status' => 'error',
                'errors' => 'Service with that car and variant already exists', // Send all errors
              ]);
            }
          }
          foreach($variants as $variant)
          {
            if($existings)
            {  
              if(!in_array($variant->id,$existingIds))
               {
                  $data[]=(object)[
                    'brand_id' => $variant?->car?->brand->id,
                    'car_id' => $variant?->car?->id,
                    'variant_id' => $variant?->id,
                    'price' => 0,
                    'discount_price' => 0,
                    'duration'=>0,
                    'image'=>null,
                    'use_default' => 1,
                    'brand'=> $variant?->car?->brand?->name,
                    'car'=> $variant?->car?->name,
                  
                  ];
               }
            }
             else
             {
                $data[]=(object)[
                  'brand_id' => $variant?->car?->brand->id,
                  'car_id' => $variant?->car?->id,
                  'variant_id' => $variant?->id,
                  'price' => 0,
                  'discount_price' => 0,
                  'duration'=>0,
                  'image'=>null,
                  'use_default' => 1,
                  'brand'=> $variant?->car?->brand?->name,
                  'car'=> $variant?->car?->name,
                
                ];
             }
            
          }
         
          session()->put("values",$data);

          $session_data = view("backend.pages.services.admin.session_data")->render();
          
          
    
          return response()->json([
              'view' => $session_data,
              'status' => 'success'
          ]);
        }
        $validator = Validator::make($request->all(), [
            'brand_id' => 'required',
            'car_id' => ['required',new CheckDuplicateVariantRule],
            'price1' => [new CheckCarPriceRule],
            'discount_price1' => 'nullable|numeric',
            'duration1' => 'nullable|string',
            'service_car_image1'=>'nullable',
            'car_variant' => 'required'
            
        ], [
            'brand_id.required' => __("The Brand  is required."),
            'car_id.required' => __("The Car  is required."),
            'car_variant.required' => __("The Car variant is required."),
            'price1.numeric' => __("The Price must be a number."),
            'discount_price1.numeric' => __("The Discount Price must be a number."),
        ]);

        if ($validator->fails()) {
          return response()->json([
              'status' => 'validation_error',
              'errors' => $validator->errors(), // Send all errors
          ]);
      }

    
        
        $brand=Brand::find($request->brand_id);
        $data=session("values",[]);
        $data[]=(object)[
            'brand_id' => $request->brand_id,
            'car_id' => $request->car_id,
            'variant_id' => $request->car_variant,
            'price' => $request->price1,
            'discount_price' => $request->discount_price1,
            'duration'=>$request->duration1,
            'image'=>$request->service_car_image1,
            'use_default' => $request->use_default,
            'brand'=>$brand->name,
            'car'=>Car::find($request->car_id)->name,
            
        ];
        session()->put("values",$data);
        
        $session_data = view("backend.pages.services.admin.session_data")->render();
        
        
  
        return response()->json([
            'view' => $session_data,
            'status' => 'success'
        ]);
      }catch(\Exception $e)
      {
        return response()->json([
            'status' => 'error',
            'error' => $e->getMessage()
           
        ],500);
      }      
    

    }

    public function searchCar(Request $request)
    {
        $brand_id=$request->brand_id;
        $car_id=$request->car_id;
        $datas=Session::get('values');
        $cars=[];
        if(($brand_id==0 && $car_id==0))
        {
          
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
        if($brand_id && $car_id)
        {
          
          if($brand_id==0 && $car_id!=0)
          {
            
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->car_id==$car_id)
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }
                 
                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
          }
          else if($car_id==0 && $brand_id!=0)
          {
          
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->brand_id==$brand_id)
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }
                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
          }
          else
          {
          
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->brand_id==$brand_id && $data->car_id==$car_id )
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }
                 
                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
          }
        }  
        else if($brand_id)
        {
          if(($brand_id==0))
          {
             
              return response()->json(['status' => 'success', 'cars' => "all"]);
          }
              if(isset($datas))
              {
                foreach($datas as $key=>$data)
                {
                  if($data->brand_id==$brand_id)
                  {
                    $variant_id=$data->variant_id;
                    if($variant_id =='all')
                    {
                        $engine_fual="";
                        $variants=Varient::where('car_id',$data->car_id)->get();
                        foreach ($variants as $variant) {
                            $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                            $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                            $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                            $engine_fual.=",";
                        }
                        
                    }
                    else {
                        $variant=Varient::where('id',$variant_id)->first();
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                    }    
                    $data->engineFuel=$engine_fual;
                    if($data->image)
                    {
                        $data->imageSrc=ImageModifier::ImageUrl($data->image);
                    }
                    else
                    {
                      $data->imageSrc=asset('assets/uploads/no-image.png');
                    }
                    if($data->use_default==1)
                    {
                      $data->flag="yes";
                    }
                    else if($data->use_default== 0)
                    {
                      $data->flag="no";
                    }
                                        
                    $cars[$key]=$data;
                  }
                }
              }
              
              return response()->json(['status' => 'success', 'cars' => $cars]);
        }
          
        else if($car_id)
        {
          if(($car_id==0))
          {
             
              return response()->json(['status' => 'success', 'cars' => "all"]);
          }
          
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->car_id==$car_id)
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }

                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        
    }

   
    public function carEditServiceDelete($id)
    {
        
            $datas=session()->get('editValues');
            unset($datas[$id]);
            $datas = array_values($datas);

            // Store the updated array back in the session
            session()->put('editValues', $datas);

            $session_data = view("backend.pages.services.admin.edit_session_data")->render();
            
            
       
             return response()->json([
                'view' => $session_data,
              'status' => 'success'
            ]);
    
            
    }

    public function editServiceCar(Request $request)
    {
      try
      {

        $variant_id=$request->input("variant_id");
        if($variant_id)
        {
          $variants=Varient::all();
          $data=session("editValues",[]);
          $existings=session()->get("editValues");
          if($existings)
          {
            $existingIds = array_map(function ($existing) {
              return is_object($existing) ? $existing->variant_id : $existing; 
            }, $existings);
            $variantIds = $variants->pluck('id')->toArray();
  
            // Check if all variant IDs exist in existing IDs
            $allSame = empty(array_diff($variantIds, $existingIds));
            if($allSame)
            {
              return response()->json([
                'status' => 'error',
                'errors' => 'Service with that car and variant already exists', // Send all errors
              ]);
            }
          }

          foreach($variants as $variant)
          {
            if($existings)
            {
               if(!in_array($variant->id,$existingIds))
               {
                  $data[]=(object)[
                    'brand_id' => $variant?->car?->brand->id,
                    'car_id' => $variant?->car?->id,
                    'variant_id' => $variant?->id,
                    'price' => 0,
                    'discount_price' => 0,
                    'duration'=>0,
                    'image'=>null,
                    'use_default' => 1,
                    'brand'=> $variant?->car?->brand?->name,
                    'car'=> $variant?->car?->name,
                  
                  ];
               }
                 
            }
             else
             {
                $data[]=(object)[
                  'brand_id' => $variant?->car?->brand->id,
                  'car_id' => $variant?->car?->id,
                  'variant_id' => $variant?->id,
                  'price' => 0,
                  'discount_price' => 0,
                  'duration'=>0,
                  'image'=>null,
                  'use_default' => 1,
                  'brand'=> $variant?->car?->brand?->name,
                  'car'=> $variant?->car?->name,
                
                ];
             }
            
          }
         
          session()->put("editValues",$data);

          $session_data = view("backend.pages.services.admin.edit_session_data")->render();
          
          
    
          return response()->json([
              'view' => $session_data,
              'status' => 'success'
          ]);
        }
        $validator = Validator::make($request->all(), [
            'brand_id' => 'required',
            'car_id' =>['required',new CheckDuplicateVariantRule],
            'price1' => [new CheckCarPriceRule],
            'discount_price1' => 'nullable|numeric',
            'duration1' => 'nullable|string',
            'service_car_image1'=>'nullable',
            'car_variant' => 'required'
            
        ], [
            'brand_id.required' => __("The Brand  is required."),
            'car_id.required' => __("The Car  is required."),
            'car_variant.required' => __("The Car variant is required."),
            'price1.numeric' => __("The Price must be a number."),
            'discount_price1.numeric' => __("The Discount Price must be a number."),
        ]);

        if ($validator->fails()) {
          return response()->json([
              'status' => 'validation_error',
              'errors' => $validator->errors(), // Send all errors
          ]);
      }

    
        
        $brand=Brand::find($request->brand_id);
        $data=session("editValues",[]);
        $data[]=(object)[
            'brand_id' => $request->brand_id,
            'car_id' => $request->car_id,
            'variant_id' => $request->car_variant,
            'price' => $request->price1,
            'discount_price' => $request->discount_price1,
            'duration'=>$request->duration1,
            'image'=>$request->service_car_image1,
            'use_default' => $request->use_default,
            'brand'=>$brand->name,
            'car'=>Car::find($request->car_id)->name,
            
        ];
        session()->put("editValues",$data);
        
        $session_data = view("backend.pages.services.admin.edit_session_data")->render();
        
        
  
        return response()->json([
            'view' => $session_data,
            'status' => 'success'
        ]);
      }catch(\Exception $e)
      {
        return response()->json([
            'status' => 'error',
            'error' => $e->getMessage()
           
        ],500);
      }      
    

    }

    public function editSearchCar(Request $request)
    {
      $brand_id=$request->brand_id;
      $car_id=$request->car_id;
      $datas=Session::get('editValues');
      $cars=[];
      if(($brand_id==0 && $car_id==0))
      {
        return response()->json(['status' => 'success', 'cars' => "all"]);
      }
      if($brand_id && $car_id)
      {
        
        if($brand_id==0 && $car_id!=0)
        {
          
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->car_id==$car_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }

                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        else if($car_id==0 && $brand_id!=0)
        {
         
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->brand_id==$brand_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }

                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        else
        {
         
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->brand_id==$brand_id && $data->car_id==$car_id )
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }

                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
      }  
      else if($brand_id)
      {
        if(($brand_id==0))
        {
           
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
           
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->brand_id==$brand_id)
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }

                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
      }
        
      else if($car_id)
      {
        if(($car_id==0))
        {
           
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->car_id==$car_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }


                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
      }
      
    }
    

public function addProductCar(Request $request)
{
      try
      {
        $variant_id=$request->input("variant_id");
        if($variant_id)
        {
          $variants=Varient::all();
          $data=session("productValues",[]);
          $existings=session()->get("productValues");
          if($existings)
          {
            $existingIds = array_map(function ($existing) {
              return is_object($existing) ? $existing->variant_id : $existing; 
            }, $existings);
            $variantIds = $variants->pluck('id')->toArray();
  
            // Check if all variant IDs exist in existing IDs
            $allSame = empty(array_diff($variantIds, $existingIds));
            if($allSame)
            {
              return response()->json([
                'status' => 'error',
                'errors' => 'Service with that car and variant already exists', // Send all errors
              ]);
            }
          }
         
          
          foreach($variants as $variant)
          {
            if($existings)
            {  
              if(!in_array($variant->id,$existingIds))
               {
                  $data[]=(object)[
                    'brand_id' => $variant?->car?->brand->id,
                    'car_id' => $variant?->car?->id,
                    'variant_id' => $variant?->id,
                    'price' => 0,
                    'discount_price' => 0,
                    'duration'=>0,
                    'image'=>null,
                    'use_default' => 1,
                    'brand'=> $variant?->car?->brand?->name,
                    'car'=> $variant?->car?->name,
                  
                  ];
               }
            }
             else
             {
                $data[]=(object)[
                  'brand_id' => $variant?->car?->brand->id,
                  'car_id' => $variant?->car?->id,
                  'variant_id' => $variant?->id,
                  'price' => 0,
                  'discount_price' => 0,
                  'duration'=>0,
                  'image'=>null,
                  'use_default' => 1,
                  'brand'=> $variant?->car?->brand?->name,
                  'car'=> $variant?->car?->name,
                
                ];
             }
            
          }
         
          session()->put("productValues",$data);

          $session_data = view("backend.pages.products.admin.session_data")->render();
          
          
    
          return response()->json([
              'view' => $session_data,
              'status' => 'success'
          ]);
        }
        $validator = Validator::make($request->all(), [
            'brand_id' => 'required',
            'car_id' => ['required',new CheckDuplicateVariantRule],
            'price1' => [new CheckCarPriceRule],
            'discount_price1' => 'nullable|numeric',
            'duration1' => 'nullable|string',
            'service_car_image1'=>'nullable',
            'car_variant' => 'required'
            
        ], [
            'brand_id.required' => __("The Brand  is required."),
            'car_id.required' => __("The Car  is required."),
            'car_variant.required' => __("The Car variant is required."),
            'price1.numeric' => __("The Price must be a number."),
            'discount_price1.numeric' => __("The Discount Price must be a number."),
        ]);

        if ($validator->fails()) {
          return response()->json([
              'status' => 'validation_error',
              'errors' => $validator->errors(), // Send all errors
          ]);
      }


        
        $brand=Brand::find($request->brand_id);
        $data=session("productValues",[]);
        $data[]=(object)[
            'brand_id' => $request->brand_id,
            'car_id' => $request->car_id,
            'variant_id' => $request->car_variant,
            'price' => $request->price1,
            'discount_price' => $request->discount_price1,
            'duration'=>$request->duration1,
            'image'=>$request->service_car_image1,
            'use_default' => $request->use_default,
            'brand'=>$brand->name,
            'car'=>Car::find($request->car_id)->name,
            
        ];
        session()->put("productValues",$data);
       
        $session_data = view("backend.pages.products.admin.session_data")->render();
        
        

        return response()->json([
            'view' => $session_data,
            'status' => 'success'
        ]);
      }catch(\Exception $e)
      {
        return response()->json([
            'status' => 'error',
            'error' => $e->getMessage()
          
        ],500);
      }      


    }

    public function productSearchCar(Request $request)
    {
      $brand_id=$request->brand_id;
      $car_id=$request->car_id;
      $datas=Session::get('productValues');
      $cars=[];
      if(($brand_id==0 && $car_id==0))
      {
        
          return response()->json(['status' => 'success', 'cars' => "all"]);
      }
      if($brand_id && $car_id)
      {
        
        if($brand_id==0 && $car_id!=0)
        {
          
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->car_id==$car_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }
                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        else if($car_id==0 && $brand_id!=0)
        {
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->brand_id==$brand_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }
                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        else
        {
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->brand_id==$brand_id && $data->car_id==$car_id )
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
               if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }


                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
      }  
      else if($brand_id)
      {
        if(($brand_id==0))
        {
           
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->brand_id==$brand_id)
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }

                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
      }
        
      else if($car_id)
      {
        if(($car_id==0))
        {
           
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->car_id==$car_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }


                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
      }
      
    }


    public function carProductDelete($id){
        
     

      $datas=Session::get('productValues');
     
      // Remove the item if it exists
     
      unset($datas[$id]);
      $datas = array_values($datas); // Reindex the array
   
      // Store the updated array back in the session
      session()->put('productValues', $datas);

      $session_data = view("backend.pages.products.admin.session_data")->render();
      
      
 
       return response()->json([
          'view' => $session_data,
        'status' => 'success'
      ]);

      
    }


    public function allCarProductDelete()
  { 

      $datas=session()->get('productValues');
      $editDatas=session()->get('editProductValues');
      $session_data="";
      if($datas)
      {
        // Remove the session data
        session()->forget('productValues');
        $session_data = view("backend.pages.products.admin.session_data")->render();
        return response()->json([
          'view' => $session_data,
        'status' => 'success'
      ]);
           

      }
      else if($editDatas)
      {
        // Remove the session data
        session()->forget('editProductValues');
        $session_data = view("backend.pages.products.admin.edit_session_data")->render();
        return response()->json([
          'view' => $session_data,
        'status' => 'success'
      ]);
           
      }
      
     
  }
    



    public function editProductCar(Request $request)
{
      try
      {
        $variant_id=$request->input("variant_id");
        if($variant_id)
        {
          $variants=Varient::all();
          $data=session("editProductValues",[]);
          $existings=session()->get("editProductValues");
          if($existings)
          {
            $existingIds = array_map(function ($existing) {
              return is_object($existing) ? $existing->variant_id : $existing; 
            }, $existings);
            $variantIds = $variants->pluck('id')->toArray();
  
            // Check if all variant IDs exist in existing IDs
            $allSame = empty(array_diff($variantIds, $existingIds));
            if($allSame)
            {
              return response()->json([
                'status' => 'error',
                'errors' => 'Service with that car and variant already exists', // Send all errors
              ]);
            }
          }
          
          foreach($variants as $variant)
          {
            if($existings)
            {  
              if(!in_array($variant->id,$existingIds))
               {
                  $data[]=(object)[
                    'brand_id' => $variant?->car?->brand->id,
                    'car_id' => $variant?->car?->id,
                    'variant_id' => $variant?->id,
                    'price' => 0,
                    'discount_price' => 0,
                    'duration'=>0,
                    'image'=>null,
                    'use_default' => 1,
                    'brand'=> $variant?->car?->brand?->name,
                    'car'=> $variant?->car?->name,
                  
                  ];
               }
            }
             else
             {
                $data[]=(object)[
                  'brand_id' => $variant?->car?->brand->id,
                  'car_id' => $variant?->car?->id,
                  'variant_id' => $variant?->id,
                  'price' => 0,
                  'discount_price' => 0,
                  'duration'=>0,
                  'image'=>null,
                  'use_default' => 1,
                  'brand'=> $variant?->car?->brand?->name,
                  'car'=> $variant?->car?->name,
                
                ];
             }
            
          }
         
          session()->put("editProductValues",$data);

          $session_data = view("backend.pages.products.admin.edit_session_data")->render();
          
          
    
          return response()->json([
              'view' => $session_data,
              'status' => 'success'
          ]);
        }
        $validator = Validator::make($request->all(), [
            'brand_id' => 'required',
            'car_id' => ['required',new CheckDuplicateVariantRule],
            'price1' => [new CheckCarPriceRule],
            'discount_price1' => 'nullable|numeric',
            'duration1' => 'nullable|string',
            'service_car_image1'=>'nullable',
            'car_variant' => 'required'
            
        ], [
            'brand_id.required' => __("The Brand  is required."),
            'car_id.required' => __("The Car  is required."),
            'car_variant.required' => __("The Car variant is required."),
            'price1.numeric' => __("The Price must be a number."),
            'discount_price1.numeric' => __("The Discount Price must be a number."),
        ]);

        if ($validator->fails()) {
          return response()->json([
              'status' => 'validation_error',
              'errors' => $validator->errors(), // Send all errors
          ]);
      }


        
        $brand=Brand::find($request->brand_id);
        $data=session("editProductValues",[]);
        $data[]=(object)[
            'brand_id' => $request->brand_id,
            'car_id' => $request->car_id,
            'variant_id' => $request->car_variant,
            'price' => $request->price1,
            'discount_price' => $request->discount_price1,
            'duration'=>$request->duration1,
            'image'=>$request->service_car_image1,
            'use_default' => $request->use_default,
            'brand'=>$brand->name,
            'car'=>Car::find($request->car_id)->name,
            
        ];
        session()->put("editProductValues",$data);
       
        $session_data = view("backend.pages.products.admin.edit_session_data")->render();
        
        

        return response()->json([
            'view' => $session_data,
            'status' => 'success'
        ]);
      }catch(\Exception $e)
      {
        return response()->json([
            'status' => 'error',
            'error' => $e->getMessage()
          
        ],500);
      }      


    }


    public function editProductSearchCar(Request $request)
    {
      $brand_id=$request->brand_id;
      $car_id=$request->car_id;
      $datas=Session::get('editProductValues');
      $cars=[];
      if(($brand_id==0 && $car_id==0))
      {
        
          return response()->json(['status' => 'success', 'cars' => "all"]);
      }
      if($brand_id && $car_id)
      {
        
        if($brand_id==0 && $car_id!=0)
        {
          
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->car_id==$car_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }


                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        else if($car_id==0 && $brand_id!=0)
        {
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->brand_id==$brand_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }


                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
        else
        {
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->brand_id==$brand_id && $data->car_id==$car_id )
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }

                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
        }
      }  
      else if($brand_id)
      {
        if(($brand_id==0))
        {
           
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
            if(isset($datas))
            {
              foreach($datas as $key=>$data)
              {
                if($data->brand_id==$brand_id)
                {
                  $variant_id=$data->variant_id;
                  if($variant_id =='all')
                  {
                      $engine_fual="";
                      $variants=Varient::where('car_id',$data->car_id)->get();
                      foreach ($variants as $variant) {
                          $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                          $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                          $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                          $engine_fual.=",";
                      }
                      
                  }
                  else {
                      $variant=Varient::where('id',$variant_id)->first();
                      $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                      $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                      $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                  }    
                  $data->engineFuel=$engine_fual;
                  if($data->image)
                  {
                      $data->imageSrc=ImageModifier::ImageUrl($data->image);
                  }
                  else
                  {
                    $data->imageSrc=asset('assets/uploads/no-image.png');
                  }

                  if($data->use_default==1)
                  {
                    $data->flag="yes";
                  }
                  else if($data->use_default== 0)
                  {
                    $data->flag="no";
                  }
                                      
                  $cars[$key]=$data;
                }
              }
            }
            
            return response()->json(['status' => 'success', 'cars' => $cars]);
      }
        
      else if($car_id)
      {
        if(($car_id==0))
        {
           
            return response()->json(['status' => 'success', 'cars' => "all"]);
        }
        
          if(isset($datas))
          {
            foreach($datas as $key=>$data)
            {
              if($data->car_id==$car_id)
              {
                $variant_id=$data->variant_id;
                if($variant_id =='all')
                {
                    $engine_fual="";
                    $variants=Varient::where('car_id',$data->car_id)->get();
                    foreach ($variants as $variant) {
                        $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                        $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                        $engine_fual.=",";
                    }
                    
                }
                else {
                    $variant=Varient::where('id',$variant_id)->first();
                    $engine_details=EngineType::where('id',$variant?->engine_type_id)->first();
                    $fuel_details=FualType::where('id',$variant?->fual_type_id)->first();
                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                }    
                $data->engineFuel=$engine_fual;
                if($data->image)
                {
                    $data->imageSrc=ImageModifier::ImageUrl($data->image);
                }
                else
                {
                  $data->imageSrc=asset('assets/uploads/no-image.png');
                }
                
                if($data->use_default==1)
                {
                  $data->flag="yes";
                }
                else if($data->use_default== 0)
                {
                  $data->flag="no";
                }
                                    
                $cars[$key]=$data;
              }
            }
          }
          
          return response()->json(['status' => 'success', 'cars' => $cars]);
      }
      
    }


    public function carEditProductDelete($id){
        
      
      $datas=Session::get('editProductValues');
     
      // Remove the item if it exists
     
      unset($datas[$id]);
      $datas = array_values($datas); // Reindex the array
   
      // Store the updated array back in the session
      session()->put('editProductValues', $datas);

      $session_data = view("backend.pages.products.admin.edit_session_data")->render();
      
      
 
       return response()->json([
          'view' => $session_data,
        'status' => 'success'
      ]);

      
    }


  
}
