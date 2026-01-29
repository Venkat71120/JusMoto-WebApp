@php
    $all_cars = session()->get('productValues', []);
    $all_cars = json_decode(json_encode($all_cars)); // Convert array to objects
@endphp
<div class="session_product_car">
    @foreach ($all_cars as $key=>$car)
        <div class="card mt-2 mb-4 w-100 car-card {{$key >=5 ? 'd-none' : ''}}" data-index="{{$key}}"id="session_product_car_card">
            <div class="card-body">
                <div class="row">
                    <!-- First Column -->
                    <div class="col-3">
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Brand') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="brand" id="brand" value="{{ $car?->brand ?? 'N/A' }}" disabled>
                            <input type="hidden" class="form__control radius-5" name="service_brand_id[]" id="service_brand_id" value="{{ $car->brand_id}}">
                        </div>
                    </div>  
                    <div class="col-3">  
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Car Model') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="car" id="car" value="{{ $car->car ?? 'N/A' }}" disabled>
                            <input type="hidden" class="form__control radius-5" name="service_car_id[]" id="service_car_id" value="{{ $car->car_id}}">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form__input__single" id="variant">
                            <label class="form__input__single__label">{{ __('Car Variant') }} <span class="text-danger">*</span></label>
                            @php
                                $variant_id=$car->variant_id;
                                if($variant_id =='all')
                                {
                                    $engine_fual="";
                                    $variants=App\Models\Varient::where('car_id',$car->car_id)->get();
                                    foreach ($variants as $variant) {
                                        $engine_details=App\Models\EngineType::where('id',$variant?->engine_type_id)->first();
                                        $fuel_details=App\Models\FualType::where('id',$variant?->fual_type_id)->first();
                                        $engine_fual.=$engine_details?->name."-".$fuel_details?->name;
                                        $engine_fual.=",";
                                    }
                                    
                                }
                                else {
                                    $variant=App\Models\Varient::where('id',$variant_id)->first();
                                    $engine_details=App\Models\EngineType::where('id',$variant?->engine_type_id)->first();
                                    $fuel_details=App\Models\FualType::where('id',$variant?->fual_type_id)->first();
                                    $engine_fual=$engine_details?->name."-".$fuel_details?->name;
                                }
                                

                            @endphp
                            <input type="text" class="form__control radius-5" name="variant" id="variant" value="{{ $engine_fual ?? 'N/A' }}" disabled>
                            <input type="hidden" class="form__control radius-5" name="car_variant_id[]" id="car_variant_id" value="{{ $variant_id}}">
                        </div>
                    </div>    
                    <div class="col-3">    
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Price') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="car_price1" id="price1" value="{{ $car->price ?? 'N/A' }}" disabled>
                                <input type="hidden" class="form__control radius-5" name="car_price[]" id="price" value="{{ $car->price ?? '0' }}" >
                        </div>
                    </div>
                </div>
                <div class="row">   
                    <div class="col-3">
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Discount Price') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="car_discount_price1" id="discount_price1" value="{{ $car->discount_price ?? 'N/A' }}" disabled>
                            <input type="hidden" class="form__control radius-5" name="car_discount_price[]" id="discount_price" value="{{ $car->discount_price ?? '0' }}">
                        </div>
                    </div>
                    <div class="col-3"> 
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Duration') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="car_duration1" id="duration1" value="{{ $car->duration ?? 0 }}" disabled>
                            <input type="hidden" class="form__control radius-5" name="car_duration[]" id="duration" value="{{ $car->duration ?? 0 }}">
                        </div>
                    </div> 
                    <div class="col-3">   
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Use Default Price') }} <span class="text-danger">*</span></label>
                            @php
                                $flag = $car->use_default == 1 ? "yes" : "no";
                            @endphp
                            <input type="text" class="form__control radius-5" name="use_default1[]" id="use_default1" value="{{ $flag }}" disabled>
                            <input type="hidden" class="form__control radius-5" name="use_default[]" id="use_default" value="{{ $car->use_default }}">
                        </div>
                    </div>  
                </div>   

                    <!-- Second row -->
                <div class="row">    
                   
                   
                    <div class="col-3">   
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Image') }}</label>
                            <div>
                                 {!! render_image_markup_by_attachment_id($car->image,'','thumb') !!}  
                            </div>
                            
                            <input type="hidden" class="form__control radius-5" name="service_car_image[]" id="service_car_image" value="{{ $car->image }}">
                        </div>
                    </div>  
                    
                   
                </div>
                <button type="button" class="btn btn-danger removeRowBtn mt-3" data-id="{{ $key }}">{{ __('Remove') }}</button>
            </div>
        </div>
    @endforeach
</div> 

<div id="search_product_car_result">
           
</div>


@if(count($all_cars)>5)
   <div class="text-center mt-3">
           <button type="button" class="btn btn-primary" id="loadMoreCarsForProduct">{{ __('Load More') }}</button>
    </div>
@endif



    