
@php 
$id = isset($id) ? $id : null; 
$name = 'image'; 
$title = __('Signature Image');
$dimentions = '200x200';
@endphp

<div class="form__input__single mt-2">
    @php $image_upload_btn_label = __('Upload Image'); @endphp
    <div class="media-upload-btn-wrapper">
        <div class="img-wrap">
            @php
                $profile_img = get_attachment_image_by_id($id,null,true);
            @endphp
            @if (!empty($profile_img))
                <div class="attachment-preview">
                    <div class="thumbnail">
                        <div class="centered">
                            <img class="avatar user-thumb" src="{{$profile_img['img_url']}}" >
                        </div>
                    </div>
                </div>
                @php $image_upload_btn_label = __('Change Image'); @endphp
            @endif
        </div>
        <input type="hidden" name="{{  $name }}" value="{{ $id }}">
        <button type="button" class="cmnBtn btn_5 btn_bg_secondary radius-5 media_upload_form_btn"
                data-btntitle="{{__('Select Image')}}"
                data-modaltitle="{{__('Upload Image')}}"
                data-imgid="{{auth()->user()->image}}"
                data-bs-toggle="modal"
                data-bs-target="#media_upload_modal">
            {{__($image_upload_btn_label)}}
        </button>
    </div>
    <small class="info-text">{{ __("Recommended Image Size $dimentions")}}</small>
</div>
