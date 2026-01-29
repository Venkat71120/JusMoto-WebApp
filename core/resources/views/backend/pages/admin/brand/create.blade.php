@extends('backend.admin-master')
@section('site-title')
 {{ __('Add New Brand') }}
@endsection
@section('style')
    <x-media.css />
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title">{{ __('Add New Brand') }}</h4>
                        </div>
                        <div class="dashboard__inner__header__right">
                            <div class="btn-wrapper">
                                <a href="{{ route('admin.brand.all') }}" class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('All Brand') }}</a>
                            </div>
                       </div>
                    </div>
                </div>
                <x-validation.error/>
                <div class="customMarkup__single__inner mt-4">
                    <form action="{{route('admin.brand.add')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row">
                            <div class="col-lg-6">
                                <x-form.text :title="__('Name')" :type="__('text')" :name="'name'" :value="old('name', '')" :required="'yes'" :placeholder="__('Enter Brand name')"/>
                            </div>
                           
                            <div class="col-lg-12 mt-3">
                                <div class="upload-img">
                                    <div class="media-upload-btn-wrapper">
                                        <div class="img-wrap">
                                            <img src="{{ asset('assets/frontend/img/gallery/upload_image.png') }}" alt="images" class="w-50">
                                        </div>
                                        <input type="hidden" name="brand_image">
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
                           
                            <div class="col-lg-6 mt-3">
                               
                            </div>

                        </div>
                        <br>
                        <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type">{{__('Add Brand')}}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <x-media.markup/>
@endsection
@section('scripts')
    <x-custom-js.phone-number-config selector="#telephone" submit-button-id="test-sms-btn" key="1"/>
    <x-custom-js.phone-number-config selector="#set-telephone" submit-button-id="test-sms-btn" key="2"/>
    <x-media.js />
@endsection
