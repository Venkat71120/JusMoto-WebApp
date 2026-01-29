@extends('backend.admin-master')
@section('site-title')
    {{__('Login Register Settings')}}
@endsection
@section('style')
    <x-media.css/>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <h2 class="dashboard__card__header__title mb-3">{{__('Login Register Settings')}}</h2>
                <x-validation.error/>
                <form action="{{route('admin.login.register.page.settings')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <!--register page start -->
                    <!--register page start -->
                    <div class="form__input__single">
                        <label for="register_page_title" class="form__input__single__label">{{__('Register Page Title')}}</label>
                        <input type="text" name="register_page_title"  class="form-control" value="{{get_static_option('register_page_title')}}" id="register_page_title">
                    </div>
                    <div class="form__input__single mb-3">
                        <label for="register_page_button" class="form__input__single__label">{{__('Register Button ')}}</label>
                        <input type="text" name="register_page_button"  class="form-control" value="{{get_static_option('register_page_button')}}" id="register_page_description">
                    </div>

                    <div class="upload-img mt-4">
                        <div class="media-upload-btn-wrapper">
                            <div class="img-wrap">
                                {!! render_attachment_preview_for_admin(get_static_option('register_page_image') ?? '') !!}
                            </div>
                            <input type="hidden" name="register_page_image">
                            <button type="button" class="btn btn-info media_upload_form_btn"
                                    data-btntitle="{{__('Select Image')}}"
                                    data-modaltitle="{{__('Upload Image')}}"
                                    data-bs-toggle="modal"
                                    data-bs-target="#media_upload_modal">
                                {{__('Upload Register Image')}}
                            </button>
                            <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                            <small>{{ __('recommended size 810x450') }}</small>
                        </div>
                    </div>
                    <!--register page end -->

                    <div class="form__input__single">
                        <label for="login_form_title" class="form__input__single__label">{{__('Login Form Title')}}</label>
                        <input type="text" name="login_form_title"  class="form-control" value="{{get_static_option('login_form_title')}}" id="login_form_title">
                    </div>

                    <div class="form__input__single">
                        <label for="login_form_button" class="form__input__single__label">{{__('Login Form Button')}}</label>
                        <input type="text" name="login_form_button"  class="form-control" value="{{get_static_option('login_form_button')}}" id="login_form_button">
                    </div>
                    <div class="upload-img mt-4">
                        <div class="media-upload-btn-wrapper">
                            <div class="img-wrap">
                                {!! render_attachment_preview_for_admin(get_static_option('login_page_image') ?? '') !!}
                            </div>
                            <input type="hidden" name="login_page_image">
                            <button type="button" class="btn btn-info media_upload_form_btn"
                                    data-btntitle="{{__('Select Image')}}"
                                    data-modaltitle="{{__('Upload Image')}}"
                                    data-bs-toggle="modal"
                                    data-bs-target="#media_upload_modal">
                                {{__('Upload Login Image')}}
                            </button>
                            <small>{{ __('image format: jpg,jpeg,png,gif,webp')}}</small> <br>
                            <small>{{ __('recommended size 810x450') }}</small>
                        </div>
                    </div>

                    @php
                        $all_pages = \App\Models\Backend\Page::select('id','title','slug')->latest()->get();
                    @endphp

                    <div class="form__input__single">
                        <label for="register_buyer_title" class="form__input__single__label">{{__('Set Terms & Condition')}}</label>
                        <select name="select_terms_condition_page" id="select_terms_condition_page" class="form-control select2_activation">
                            <option value="">{{ __('Select Page') }}</option>
                            @foreach($all_pages as $page)
                                <option @if(get_static_option('select_terms_condition_page') == $page->slug ) selected @endif value="{{ $page->slug }}">{{ $page->title }}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="form__input__single d-grid mt-3">
                        <label for="register_page_social_login_show_hide"><strong>{{__('Social Login register page show/hide')}}</strong></label>
                        <div class="switch_box style_7">
                            <input type="checkbox" name="register_page_social_login_show_hide"  @if(!empty(get_static_option('register_page_social_login_show_hide'))) checked @endif>
                            <label></label>
                        </div>
                        <small class="form-text text-muted">  {{__('Enable, means Frontend register page show social login')}} </small>
                    </div>

                    <div class="form__input__single">
                        <label for="recaptcha_2_site_key" class="form__input__single__label">{{__('Google Recaptcha 2 (Site Key)')}} </label>
                        <input type="text" name="recaptcha_2_site_key"  class="form-control" value="{{get_static_option('recaptcha_2_site_key')}}">
                    </div>
                    @if(isset($isDemoMiddlewareIsEnabled))
                        <div class="form__input__single">
                            <label for="recaptcha_2_secret_key" class="form__input__single__label">{{__('Google Recaptcha 2 (Secret Key)')}} </label>
                            <input type="text" name="recaptcha_2_secret_key"  class="form-control" value="Your secret key is hidden in demo" readonly>
                        </div>
                    @else
                        <div class="form__input__single">
                            <label for="recaptcha_2_secret_key" class="form__input__single__label">{{__('Google Recaptcha 2 (Secret Key)')}} </label>
                            <input type="text" name="recaptcha_2_secret_key"  class="form-control" value="{{get_static_option('recaptcha_2_secret_key')}}">
                        </div>
                    @endif


                    <div class="btn_wrapper mt-4">
                        <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('Update Changes') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <x-media.markup/>
@endsection
@section('scripts')
    <x-media.js />
    <script>
        (function($){
            "use strict";
            $(document).ready(function(){
                <x-btn.update/>
            });
        }(jQuery));
    </script>
@endsection
