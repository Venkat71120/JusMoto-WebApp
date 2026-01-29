<div class="dashboard__card mt-2">
    <div class="dashboard__card__header p-2">
        
        <h4 class="dashboard__card__title">{{ __('Choose an Option:') }}</h4>

    </div>
    <div class="dashboard__card__body custom__form p-2">
        <div class="form__input__single d-flex" id="choose_option">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="choose1" id="service_select" @if($typeService == 'true') checked @endif>
                <label class="form-check-label" for="service_select">
                    {{ __('Service') }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="choose2" id="product" @if($typeProduct == 'true') checked @endif>
                <label class="form-check-label" for="product">
                    {{ __('Product') }}
                </label>
            </div>
        </div>
    </div>
</div>

<div class="dashboard__card  d-none mt-2" id="service_choose">
    <div class="dashboard__card__header p-2">
        
        <h4 class="dashboard__card__title">{{ __(' Edit Offer Service') }}</h4>

    </div>
    <div class="dashboard__card__body custom__form p-2">
        <div class="single-settings">

            <div class="append-additional-includes">
                @foreach ($offer->offerService as $offerservice)
                    @if($offerservice->type == '0')
                        <div class="single-dashboard-input what-include-element"  >
                            
                            <div class="single-info-input margin-top-20">
                                <label class="form__input__single__label">{{ __('Service') }}  <span class="text-danger">*</span> </label>     
                                
                                <select name="offer_service_id[]" id="service" class="form-select">
                                    <option value="">{{__('Select Service')}}</option>
                                    @foreach($services as $service)
                                        @if($service->status== 1 && $service->is_published == 1 && $service->type== 0)
                                            <option value="{{ $service->id }}" data-price="{{ $service->price }}" @if(($service->id == $offerservice->service_id) && ($service->type == $offerservice->type)) selected @endif> {{ $service->title }}</option>    
                                        @endif    
                                    @endforeach
                                </select>
                            </div>
                        
                            <span class="btn btn-danger remove-service mt-2" data-id="{{$offerservice->service_id}}" >
                                <i class="las la-times"></i>
                            </span>
                            
                        </div>
                    @endif    
                @endforeach
                
                <input type="hidden" name="deleted_id" id="deleted_id">
            </div>
            <div class="btn-wrapper margin-top-20">
                <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-what-includes"> {{__('Add More')}} </a>
            </div>
        </div>

    </div>
</div>
<div class="dashboard__card  d-none mt-2" id="product_choose">
    <div class="dashboard__card__header p-2">
        
        <h4 class="dashboard__card__title">{{ __('Edit Offer Product') }}</h4>

    </div>
    <div class="dashboard__card__body custom__form p-2">
        <div class="single-settings">
            <div class="append-additional-products">
                @foreach ($offer->offerService as $offerservice)
                    @if($offerservice->type == '1')
                        <div class="single-dashboard-input what-include-product">
                            
                            <div class="single-info-input margin-top-20">
                                <label class="form__input__single__label">{{ __('Product') }}  <span class="text-danger">*</span> </label>     
                                
                                <select name="offer_product_id[]" id="product" class="form-select">
                                    <option value="">{{__('Select Product')}}</option>
                                    @foreach($services as $service)
                                        @if($service->status== 1 && $service->is_published == 1 && $service->type==1)
                                            <option value="{{ $service->id }}" data-price="{{ $service->price }}" @if(($service->id == $offerservice->service_id) && ($service->type == $offerservice->type)) selected @endif> {{ $service->title }}</option>    
                                        @endif    
                                    @endforeach
                                </select>
                            </div>

                        
                            <span class="btn btn-danger remove-product mt-2" data-id="{{$offerservice->service_id}}" >
                                <i class="las la-times"></i>
                            </span>
                        
                        </div>
                    @endif    
                @endforeach
               
                <input type="hidden" name="product_deleted_id" id="product_deleted_id">
            </div>

            <div class="btn-wrapper margin-top-20">
                <a href="javascript:void(0)" class="cmnBtn btn_5 btn_bg_blue radius-5 add-what-products"> {{__('Add More')}} </a>
            </div>
        </div>

    </div>
</div>

