<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label">{{ __('Name') }} <span class="text-danger">*</span></label>
                <input type="text" class="form__control radius-5"  name="name" id="name" value="{{$brand->name}}" placeholder="{{__('Add brand')}}">
            </div>

           

            <!--single image -->
            <div class="col-lg-12 mt-3">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            {!! render_attachment_preview_for_admin($brand->image ?? '') !!}
                        </div>
                        <input type="hidden" name="image" value="{{$brand->image ?? ''}}">
                        <button type="button" class="btn btn-info media_upload_form_btn"
                                data-btntitle="{{__('Select Image')}}"
                                data-modaltitle="{{__('Upload Image')}}"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            {{__('Upload Main Image')}}
                        </button>
                        <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                        <small>{{ __('recommended size 810x450') }}</small>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

@section('scripts')
    <x-media.js />
    @if(!empty(get_static_option('google_map_settings_on_off')))
        <x-map.google-map-api-key-set/>
        <x-map.google-map-listing-js/>
    @endif
    >
@endsection



