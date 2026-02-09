<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-2 mt-3">
            <div class="upload-img">
                <div class="media-upload-btn-wrapper">
                    <div class="img-wrap">
                        {!! render_attachment_preview_for_admin($car->image ?? '') !!}
                    </div>
                    <input type="hidden" name="image" value="{{$car->image ?? ''}}">
                    <button type="button" class="btn btn-info media_upload_form_btn"
                            data-btntitle="{{__('Select Image')}}"
                            data-modaltitle="{{__('Upload Image')}}"
                            data-bs-toggle="modal"
                            data-bs-target="#media_upload_modal">
                        {{__('Upload Car Image')}}
                    </button>
                    <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                    <small>{{ __('recommended size 810x450') }}</small>
                </div>
            </div>
        </div>
        <div class="col-lg-10 mt-3">
   
            <div class="row">
                <div class="col-lg-10">
                    <!-- Title -->
                    <div class="form__input__single">
                        <label class="form__input__single__label">{{ __('Name') }} <span class="text-danger">*</span></label>
                        <input type="text" class="form__control radius-5"  name="name" id="name" value="{{$car->name}}" placeholder="{{__('Add Car Name')}}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10">
                    <!-- Title -->
                    <div class="form__input__single">
                        <label class="form__input__single__label">{{ __('Year') }} <span class="text-danger">*</span></label>
                        <input type="number" class="form__control radius-5" name="year" id="year" value="{{$car->Year}}" placeholder="{{__('Add Year')}}" min="1900" max="2100">
                    </div>
                </div>
            </div>
            
            
            
            <div class="row mt-4">
                <div class="col-lg-10">
                
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Brand') }}  <span class="text-danger">*</span> </label>
                            <select name="brand_id" id="brand" class="select-itms select2_activation">
                                <option value="">{{__('Select Brand')}}</option>
                                @foreach($brands as $brand)
                                    <option value="{{ $brand->id }}" @if($brand->id == $car->brand_id) selected @endif>{{ $brand->name }}</option>
                                @endforeach
                            </select>
                        </div>
                </div> 
            </div>
            <div class="row mt-4">    
                <div class="col-lg-10">       
                    <div class="table-responsive">
                        <table id="fuel_type_table" class="table w-100">
                            <thead>
                                <tr>
                                    <th>{{ __('Engine Type') }}</th>
                                    <th>{{ __('Fuel Type') }}</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($varients as $key=>$varient)
                                    <tr>
                                        <td>
                                            <select name="engine_type_id[]" id="engine_type_id">
                                                <option value="">{{__('Select Engine Type')}}</option>
                                            
                                                @foreach($engines as $engine)
                                                    <option value="{{ $engine->id }}"  @if($engine->id == $varient->engine_type_id) selected @endif>{{ $engine->name }}</option>
                                                @endforeach
                                            
                                                
                                            </select>
                                        </td>
                                        <td>
                                            <select name="fual_type_id[]" id="fual_type_id" >
                                                <option value="">{{__('Select Fual Type')}}</option>
                                            
                                                @foreach($fuals as $fual)
                                                    <option value="{{ $fual->id }}"   @if($fual->id==$varient->fual_type_id) selected @endif>{{ $fual->name }}</option>
                                                @endforeach
                                            
                                            </select>
                                        </td>
                                        @if($key != 0)
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger remove-fuel-type"><i class="fas fa-trash"></i></button>
                                            </td>
                                        @endif    
                                    
                                    </tr>
                                @endforeach        
                            </tbody>
                        </table>
                    </div> 
                    <div class="btn_wrapper d-flex gap-3">
                        <button type="button" class="btn btn-sm btn-info add-fuel-type"><i class="fas fa-plus"></i></button>
                    </div>     
                    
                </div>
                <div  class="col-lg-12 mt-5">
                    <div class="btn_wrapper gap-3">
                        <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="submitBtn" type="submit">{{__('update car')}}</button>
                    </div>
                </div>
            </div>    
        </div>    
            
    </div>
            
</div>

@section('scripts')
    <x-media.js />
   
    <script>

const row = `
            <tr>
                <td>
                    <select name="engine_type_id[]" id="engine_type_id"  >
                        <option value="">{{__('Select Engine Type')}}</option>
                        @foreach($engines as $engine)
                            <option value="{{ $engine->id }}">{{ $engine->name }}</option>
                        @endforeach
                        
                    </select>
                </td>
                <td>
                    <select name="fual_type_id[]" id="fual_type_id" >
                        <option value="">{{__('Select Fual Type')}}</option>
                        
                        @foreach($fuals as $fual)
                            <option value="{{ $fual->id }}">{{ $fual->name }}</option>
                        @endforeach
                    </select>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-danger remove-fuel-type"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
    `;

    
    function add_table_row(){

        $('#fuel_type_table tbody').append(row);
    }

    (function ($) {
        "use strict";
        $(document).ready(function () {

            $(document).on('click', '.add-fuel-type', function () {
                add_table_row();
                
            });
            $(document).on('click', '.remove-fuel-type', function () {
              
                $(this).closest('tr').remove();
              
                
            });
            
        });

    })(jQuery);
       
    </script>
@endsection


