@extends('backend.admin-master')
@section('site-title')
    {{__('Edit Blog')}}
@endsection
@section('style')
    <x-summernote.css/>
    <link rel="stylesheet" href="{{asset('assets/backend/css/bootstrap-tagsinput.css')}}">
    <x-media.css/>
    <style>
        #slug_edit .form-control {
            height: 30px;
            width: 100%;
        }

        .slug_edit_button {
            line-height: 0px;
            margin: 0;
            padding: 8px 8px;
        }

        .slug_update_button {
            line-height: 0px;
            margin: 0;
            padding: 12px;
        }

        .meta .flex-column{
            background-color: #f2f2f2;
        }

        .meta .flex-column a{
            color: #0c0c0c;
        }
    </style>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header mb-3">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title">{{ __('Edit Blog') }}</h4>
                        </div>
                        <div class="dashboard__inner__header__right">
                            <div class="btn-wrapper">
                                <a href="{{ route('admin.blog.index') }}" class="cmnBtn btn_5 btn_bg_blue radius-5">{{__('All Blogs')}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <x-validation.error/>
                <form action="{{route('admin.blog.update',$blog->id)}}" method="POST" enctype="multipart/form-data" id="blog_new_form">
                    @csrf
                    <div class="form__input__flex mt-3">
                        <div class="form__input__single">
                            <label for="title" class="form__input__single__label">{{__('Title')}} <span class="text-danger">*</span> </label>
                            <input type="text" class="form__control" name="title" id="title" placeholder="{{ __('Enter title') }}" value="{{$blog->title}}">
                        </div>
                        <div class="form__input__single permalink_label">
                            <label class="text-dark">{{__('Permalink * :')}}
                                <span id="slug_show" class="display-inline"></span>
                                <span id="slug_edit" class="d-inline">
                                  <button class="btn btn-warning btn-sm slug_edit_button"> <i class="fas fa-edit"></i> </button>
                                  <input type="text" name="slug" value="{{$blog->slug}}" class="form__control radius-5 blog_slug mt-2" style="display: none">
                                  <button class="cmnBtn btn_5 btn_bg_info radius-5 slug_update_button mt-2" style="display: none">{{__('Update')}}</button>
                                </span>
                            </label>
                        </div>
                        <div class="form__input__single classic-editor-wrapper">
                            <label class="form__input__single__label">{{__('Content')}}</label>
                            <input type="hidden" name="blog_content" value="{{$blog->content}}">
                            <div class="summernote" data-content="{{ $blog->content }}"></div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="form__input__flex">

                    <div class="form__input__single col-md-12">
                        <label class="label-title">{{ __('Select Category') }}</label>
                        <select name="category" id="category" class="form-control select2_category">
                            <option value="">{{ __('Select Category') }}</option>
                            @foreach($categories as $data)
                                <option value="{{ $data->id }}" @if($data->id === $blog->category_id) selected @endif>{{ $data->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form__input__single col-md-12">
                        <label for="tag_name" class="label-title mt-3">{{__('Blog Tags')}}</label>
                        <input type="text" class="form-control" placeholder="tags" name="tag_name" data-role="tagsinput" value="{{$blog->tag_name}}">
                    </div>
                    <div class="form__input__single col-md-12">
                        <label>{{ __('Status') }}</label>
                        <select name="status" class="form__control radius-5">
                            <option @if($blog->status === 1) selected @endif value="publish">{{__('Publish')}}</option>
                            <option @if($blog->status === 0) selected @endif value="draft">{{__('Draft')}}</option>
                        </select>
                    </div>
                    <div class="form__input__single col-md-12">
                        <div class="upload-img mt-3">
                            <div class="media-upload-btn-wrapper">
                                <div class="img-wrap">
                                    {!! render_image_markup_by_attachment_id($blog->image) !!}
                                </div>
                                <input type="hidden" name="image">
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

                <div class="btn_wrapper mt-4">
                    <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('Submit') }}</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    </div>
    <x-media.markup/>
@endsection
@section('scripts')
    <script src="{{asset('assets/backend/js/bootstrap-tagsinput.js')}}"></script>
    <x-summernote.js/>
    <x-media.js/>
    <script>
        (function ($) {
            "use strict";
            $(document).ready(function () {

                function makeSlug(slug){
                    let finalSlug = slug.replace(/[^a-zA-Z0-9]/g, ' ');
                    finalSlug = slug.replace(/  +/g, ' ');
                    finalSlug = slug.replace(/\s/g, '-').toLowerCase().replace(/[^\w-]+/g, '-');
                    return finalSlug;
                }

                //Permalink Code
                var sl =  $('.blog_slug').val();
                var url = `{{url('/')}}/` + sl;
                var data = $('#slug_show').text(url).css('color', 'blue');

                var form = $('#blog_new_form');

                $(document).on('keyup', '#title', function (e) {
                    var slug = makeSlug($(this).val());
                    var url = `{{url('/')}}/` + slug;
                    $('.permalink_label').show();
                    var data = $('#slug_show').text(url).css('color', 'blue');
                    $('.blog_slug').val(slug);

                });

                //Slug Edit Code
                $(document).on('click', '.slug_edit_button', function (e) {
                    e.preventDefault();
                    $('.blog_slug').show();
                    $(this).hide();
                    $('.slug_update_button').show();
                });

                //Slug Update Code
                $(document).on('click', '.slug_update_button', function (e) {
                    e.preventDefault();
                    $(this).hide();
                    $('.slug_edit_button').show();
                    var update_input = $('.blog_slug').val();
                    var slug = makeSlug(update_input);
                    var url = `{{url('/')}}/` + slug;
                    $('#slug_show').text(url);
                    $('.blog_slug').val(slug);
                    $('.blog_slug').hide();
                });


                $(document).on('change','#langchange',function(e){
                    $('#langauge_change_select_get_form').trigger('submit');
                });

                $(".summernote").tooltip("hide");

                $('.summernote').summernote({
                    height: 400,
                    codemirror: {
                        theme: 'monokai'
                    },
                    callbacks: {
                        onChange: function (contents, $editable) {
                            $(this).prev('input').val(contents);
                        }
                    }
                });

                if ($('.summernote').length > 0) {
                    $('.summernote').each(function (index, value) {
                        $(this).summernote('code', $(this).data('content'));
                    });
                }
            });

        })(jQuery);
    </script>
@endsection
