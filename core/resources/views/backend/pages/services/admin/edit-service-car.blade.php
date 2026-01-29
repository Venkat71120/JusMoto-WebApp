<div class="tab-pane fade step " id="car" role="tabpanel" aria-labelledby="select-car-tab">
    <div class="btn-wrapper me-3 d-flex justify-content-between">
        <div class="d-flex">
            <button type="button" class="btn btn-danger me-3" id="editRemoveAllVariant">Remove All Variant</button>
            <button type="button" class="btn btn-warning me-3" id="addEditAllVariant">Add All Variant</button>
            <button type="button" class="btn btn-primary me-3" data-toggle="modal" data-target="#addModal" id="addEditBtn">Add</button>
            <input type="hidden" id="session_service_id" value="{{ $service->id }}">
           
        </div>
        <!-- Filter Dropdowns -->
        <form id="filter_select_car" class="ms-5">
            <div class="d-flex">
                <div class="me-2 mt-1 mb-1" id="edit_select_brand_name" >
                    <select class="form-select type" name="edit_brand_name" id="edit_brand_name" aria-label="Brand Type">
                        
                        <option value="0" selected>{{ __('All Brand') }}</option>
                            @foreach($brands as $brand)
                                <option value="{{$brand->id }}">{{ $brand->name }}</option>
                            @endforeach
                    </select>
                </div>
                <!-- Filter Dropdowns -->
                <div class="me-2 mt-1 mb-1" id="edit_select_car_name">
                    <select class="form-select type" name="edit_car_name" id="edit_car_name" aria-label="Car Type">
                        <option value="0" selecetd>{{ __('All Car') }}</option>
                            @foreach($cars as $car)
                                <option value="{{$car->id }}">{{ $car->name }}</option>
                            @endforeach
                    </select>
                </div>
                <button type="button" class="btn btn-primary me-3"  id="edit_filterBtn">Search</button>
            </div>
        </form>  
    </div>
    <input type="hidden" name="isModalOpen" id="isModalOpen" >

   <!-- Modal for Adding Data -->
   <div class="modal" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog_custom " role="document" >
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Data</h5>
                <button type="button" class="btn-close modal_close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="addCarServiceForm">
                    <span class="text-danger error-car"></span>
                    <div class="row">
                        <div class="col-lg-3 mt-3">
                            <div class="upload-img" id="service_product_edit_img">
                                <div class="media-upload-btn-wrapper">
                                    <div class="img-wrap">
                                        <img src="{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}" alt="images" class="w-100">
                                    </div>
                                    <input type="hidden" name="service_car_image1" id="service_car_image1">
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
                          
                        <div class="col-lg-9">    
                            <div class="form__input__single">
                                <label class="form__input__single__label brand">{{ __('Brand') }}  <span class="text-danger">*</span> </label>
                                <select name="brand_id[]" id="car_brand" class="form-select">
                                    <option value="">{{__('Select Brand')}}</option>
                                    @foreach($brands as $brand)
                                        <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form__input__single mt-2" id="car_model">
                                <label for="car" class="form__input__single__label"> {{__('Car Model')}} </label>
                                <select  name="car_id[]" id="car_model_value" class="form-select car_model">
                                    <option value="">{{__('Select Car Model')}}</option>
                                </select>
                               
                            </div>
                            <div class="form__input__single mt-2" id="variant">
                                <label for="car_variant" class="form__input__single__label"> {{__('Car Variant')}} </label>
                                <select  name="variant_id[]" id="car_variant" class="form-select car_variant">
                                    <option value="">{{__('Select Car Variant')}}</option>
                                </select>
                               
                            </div>
                           
                            <div class="form__input__single mt-2 position-relative">
                                <label for="price1" class="form__input__single__label">{{ __('Price') }} <span class="text-danger">*</span></label>
                                <div class="input-form input-form2">
                                    <input type="number" class="form__control radius-5" name="price1[]" id="price1"  placeholder="{{__('0.00')}}">
                                </div>
                                
                            </div>
                                
                    
                            <!-- Discount Price -->
                               
                            <div class="form__input__single mt-2 position-relative">
                                <label for="discount_price1" class="form__input__single__label">{{ __('Discount Price') }} <span class="text-danger">*</span></label>
                                <div class="input-form input-form2">
                                    <input type="number" class="form__control radius-5" name="discount_price1[]" id="discount_price1"  placeholder="{{__('0.00')}}">
                                </div>
                                
                            </div>
                               
                    
                          
                               
                            <!-- Service Duration -->
                               
                            <div class="form__input__single mt-2 position-relative">
                                <label for="duration1" class="form__input__single__label">{{ __('Duration') }}</label>
                                <div class="input-form input-form2">
                                    <input type="text" class="form__control radius-5" name="duration1[]" id="duration1"  placeholder="{{ __('e.g.hour,miute,second') }}">
                                </div>
                            </div>
                              
                               
                            <div class="form__input__single mt-2 position-relative">
                            
                                <label for="duration_checkbox" class="form__input__single__label">
                                    <input type="checkbox" name="duration_checkbox[]" id="duration_checkbox">
                                    {{ __('Use Default Service Price') }}
                                </label>
                                <!-- Hidden input to send 0 when unchecked -->
                                
                            </div>
                                
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary modal_close" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="addRowBtn">Add</button>
            </div>
        </div>
    </div>
   </div>
  

    <div id="edit_session_data">
        @include("backend.pages.services.admin.edit_session_data")
    </div>
    <div class="btn_wrapper d-flex justify-content-end gap-3 mt-4">
        <button class="cmnBtn btn_5 btn_bg_info radius-5" id="prevBtn" type="button">{{__('Previous')}}</button>
        <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type">{{__('Edit Service')}}</button>
    </div>
   

</div>



