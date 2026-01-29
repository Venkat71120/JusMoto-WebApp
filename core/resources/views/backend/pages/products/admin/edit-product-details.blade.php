<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8">
            <!-- Title -->
            <div class="form__input__single">
                <label class="form__input__single__label">{{ __('Title') }} <span class="text-danger">*</span></label>
                <input type="text" class="form__control radius-5"  name="title" id="title" value="{{$product->title}}" placeholder="{{__('Add title')}}">
            </div>

            <div class="form__input__single mt-3">
                <div class="input-form input-form2 permalink_label">
                    <label for="title" class="form__input__single__label text-dark"> {{__('Permalink')}}  <span class="text-danger">*</span>  </label>
                    <span id="slug_show" class="display-inline"></span>
                    <span id="slug_edit" class="display-inline d-inline">
                    <button class="btn btn-warning btn-sm slug_edit_button">  <i class="las la-edit"></i> </button>
                    <input class="listing_slug form__control radius-5" name="slug" value="{{$product->slug}}" id="slug"  type="text">
                    <button class="btn btn-info btn-sm slug_update_button mt-2">{{__('Update')}}</button>
                </span>
                </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between gap-3 mt-4">
                <div class="form__input__single">
                    <label class="form__input__single__label">{{ __('Category') }}  <span class="text-danger">*</span> </label>
                    <select name="category_id" id="category" class="select-itms select2_activation">
                        <option value="">{{__('Select Category')}}</option>
                        @foreach($categories as $cat)
                            <option value="{{ $cat->id }}" @if($cat->id == $product->category_id) selected @endif>{{ $cat->name }}</option>
                        @endforeach
                    </select>
                </div>
               

            </div>

            <!-- Description -->
            <div class="form__input__single mt-4">
                <label class="form__input__single__label">{{ __('Description') }} <span class="text-danger">*</span> </label>
                <div class="input-form input-form2">
                    <textarea class="textarea--form" name="description" placeholder="{{__('Type Description')}}" rows="8" cols="8">{{ $product->description }}</textarea>
                </div>
            </div>

            <div class="d-flex">
                <!-- video url -->
                <div class="form__input__single">
                    <label class="form__input__single__label">{{ __('Video Url') }} </label>
                    <div class="input-form input-form2">
                        <input type="text" class="form__control radius-5" name="video_url" id="video_url" value="{{ $product->video_url }}" placeholder="{{__('youtube url')}}">
                    </div>
                    <small class="text-danger video_url_design">{{ __('Example:') }} https://www.youtube.com/watch?v=IcM8_Llgxf4&t=1s </small>
                </div>

                <!-- featured services -->
                <div class="form__input__single mt-4 mx-3">
                    <div class="checkBox">
                        <label class="is_featured form__input__single__label d-flex gap-2">
                            <input class="checkBox__input effectBorder" type="checkbox" name="is_featured" id="is_featured" value="{{$product->is_featured}}" @if($product->is_featured == 1) checked @endif>
                            {{ __('Is Featured') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-lg-4">
            <!-- Price -->
            <div class="col-lg-12 col-md-12 mt-5">
                <div class="form__input__single position-relative">
                    <label class="infoTitle position-absolute">{{ __('Price') }} <span class="text-danger">*</span></label>
                    <div class="input-form input-form2">
                        <input type="number" class="form__control radius-5" name="price" id="price" value="{{ $product->price }}" placeholder="{{__('0.00')}}" step="0.01">
                    </div>
                </div>
            </div>

            <!-- Discount Price -->
            <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle">{{ __('Discount Price') }} <span class="text-danger">*</span></label>
                    <div class="input-form input-form2">
                        <input type="number" class="form__control radius-5" name="discount_price" id="discount_price" value="{{ $product->discount_price }}" placeholder="{{__('0.00')}}" step="0.01">
                    </div>
                </div>
            </div>

             <!-- Service Duration -->
             <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle">{{ __('Duration') }}</label>
                    <div class="input-form input-form2">
                        <input type="text" class="form__control radius-5" name="duration" id="duration" value="{{ $product->duration }}" placeholder="{{ __('e.g.year,month,day') }}">
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 mt-4">
                <div class="form__input__single position-relative">
                    <label class="infoTitle">{{ __('Max Quantity') }}</label>
                    <div class="input-form input-form2">
                        <input type="text" class="form__control radius-5" name="max_qty" id="max_qty" value="{{ $product->max_qty }}" placeholder="{{ __('Enter Max Quantity')}}">
                    </div>
                </div>
            </div>

            <!--single image -->
            <div class="col-lg-12 mt-3">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            {!! render_attachment_preview_for_admin($product->image ?? '') !!}
                        </div>
                        <input type="hidden" name="image" value="{{$product->image ?? ''}}">
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

            <div class="col-lg-12 mt-3">
                <div class="upload-img">
                    <div class="media-upload-btn-wrapper">
                        <div class="img-wrap">
                            {!! render_gallery_image_attachment_preview($product->gallery_images ?? '') !!}
                        </div>
                        <input type="hidden" name="gallery_images" value="{{ $product->gallery_images }}">
                        <button type="button" class="btn btn-info media_upload_form_btn"
                                data-btntitle="{{__('Select Image')}}"
                                data-modaltitle="{{__('Upload Image')}}"
                                data-mulitple="true"
                                data-bs-toggle="modal"
                                data-bs-target="#media_upload_modal">
                            {{__('Upload Gallery Images')}}
                        </button>
                        <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                        <small>{{ __('recommended size 810x450') }}</small>
                    </div>
                </div>
            </div>

            <!-- start previous / next buttons -->
            <div  class="col-lg-12 mt-5">
                <div class="btn_wrapper d-flex justify-content-end gap-3">
                    <button class="cmnBtn btn_5 btn_bg_blue radius-5" id="nextBtn" type="button">{{__('Next')}}</button>
                </div>
            </div>

        </div>
    </div>
</div>
