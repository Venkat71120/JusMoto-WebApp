<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-2 mt-2">
            <div class="upload-img">
                <div class="media-upload-btn-wrapper">
                    <div class="img-wrap">
                       
                        
                        <img src="{{ asset('assets/frontend/img/gallery/upload_image.png') }}" id="car_image" alt="images">
                       
                    </div>
                    <input type="hidden" name="image" id="image" value="{{ old('image') }}">
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
        <div class="col-lg-10 mt-2"> 
                <div class="row">
                    <div class="col-lg-8">
                        <!-- Title -->
                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Model') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form__control radius-5" name="name" id="name" value="{{ old('name') }}" placeholder="{{__('Add Model')}}">
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label">{{ __('Year') }} <span class="text-danger">*</span></label>
                            <input type="number" class="form__control radius-5" name="year" id="year" value="{{ old('year') }}" placeholder="{{__('Add Year')}}" min="1900" max="2100">
                        </div>

                    

                        <div class="d-flex justify-content-between gap-3 flex-wrap mt-3">
                            <div class="form__input__single">
                                <label class="form__input__single__label">{{ __('Brand') }}  <span class="text-danger">*</span> </label>
                                <select name="brand_id" id="brand" value="{{ old('brand_id') }}" class="select-itms select2_activation">
                                    <option value="">{{__('Select Brand')}}</option>
                                    @foreach($brands as $brand)
                                        <option value="{{ $brand->id }}" @if($brand->id== old('brand_id')) selected @endif>{{ $brand->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        
                    </div>
                </div>
                <div class="row">    

                    <div class="col-lg-8 mt-2">
                        <div class="table-responsive">
                            <table id="fuel_type_table" class="table w-100">
                                <thead>
                                    <tr>
                                        <th>{{ __('Engine Type') }}</th>
                                        <th >{{ __('Fual Type') }}</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >
                                            <select name="engine_type_id[]" id="engine_type_id">
                                                <option value="">{{__('Select Engine Type')}}</option>
                                                @foreach($engines as $engine)
                                                    <option value="{{ $engine->id }}"  @if(is_array(old('engine_type_id')) && in_array($engine->id, old('engine_type_id'))) selected @endif>{{ $engine->name }}</option>
                                                @endforeach
                                                
                                            </select>
                                        </td>
                                        <td>
                                            <select name="fual_type_id[]" id="fual_type_id" >
                                                <option value="">{{__('Select Fual Type')}}</option>
                                                
                                                @foreach($fuals as $fual)
                                                    <option value="{{ $fual->id }}"   @if(is_array(old('fual_type_id')) && in_array($fual->id, old('fual_type_id'))) selected @endif>{{ $fual->name }}</option>
                                                @endforeach
                                            </select>
                                        </td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="btn_wrapper d-flex gap-3">
                            <button type="button" class="btn btn-sm btn-info add-fuel-type"><i class="fas fa-plus"></i></button>
                        </div>  
                    </div>

                    <!-- submit buttons -->
                    <div  class="col-lg-12 mt-5">
                        <div class="btn_wrapper d-flex gap-3">
                            <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type">{{__('Add Car')}}</button>
                        </div>
                    </div>
                </div>
            </div>        

    </div>
</div>

@section('scripts')
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
                <td >
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
        var count=0;
        $(document).ready(function () {
 
           
               let image_id=$('#image').val();
               
                // Store image ID in Laravel session via AJAX
                if(image_id)
                {
                    $.ajax({
                        url: "{{ route('store.image.session') }}", // Create a route to handle session storage
                        method: "POST",
                        data: {
                            _token: "{{ csrf_token() }}",
                            car_image: image_id
                        },
                        success: function(response) {
                           
                              let data=response.data;
                              let updatedUrl = data.substring(data.indexOf("/assets"));;

                              let updated=`{{ asset('` +updatedUrl+ `') }}`;
                          
                            // Update the image source
                            $('#car_image').attr('src', updated);
                                
                            
                        }
                    });
                }
               
      

           
            $(document).on('click', '.add-fuel-type', function () {
                add_table_row();
                count++;
            });
            $(document).on('click', '.remove-fuel-type', function () {
               let count_value=count;
               if(count_value>0)
               {
                count--;
                $(this).closest('tr').remove();
               }
               else
               {
                 alert("{{__('You can not delete the last row.') }}");
                 
               }
                
            });
        });

    })(jQuery);

    </script>

    <x-media.js />
    <x-frontend.js.new-tag-add-js/>
    
    @if(session('success'))
        <script>
            toastr.success('{{ session('success') }}', 'Success');
        </script>
    @endif
@endsection

