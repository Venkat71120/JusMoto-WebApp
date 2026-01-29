<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-6">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label">{{ __('Name') }} <span class="text-danger">*</span></label>
                <input type="text" class="form__control radius-5" name="name" id="name" value="{{ old('name') }}" placeholder="{{__('Add name')}}">
            </div>
           
            <!-- submit buttons -->
            <div  class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex gap-3">
                    <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type">{{__('Add New Engine')}}</button>
                </div>
            </div>
        </div>

    </div>
</div>
