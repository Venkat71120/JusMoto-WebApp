@extends('backend.admin-master')
@section('title', __('All Blogs'))
@section('style')
    <style>
        .alert-warning {
            border-color: #f2f2f2;
            border-left: 3px solid #e0a800;
            background-color: #f2f2f2;
            color: #333;
            border-radius: 0;
            padding: 5px;
        }
        .alert-success {
            border-color: #f2f2f2;
            border-left: 3px solid #319a31;
            background-color: #f2f2f2;
            color: #333;
            border-radius: 0;
            padding: 5px;
        }
    </style>
@endsection
@section('content')
    <div class="dashboard__body">
        <div class="row">
            <div class="col-lg-12">
                <div class="dashboard__card bg__white padding-20 radius-10">
                    <div class="dashboard__inner__header">
                        <div class="dashboard__inner__header__flex">
                            <div class="dashboard__inner__header__left">
                                <h4 class="dashboard__inner__header__title">{{ __('All Blogs') }}</h4>
                            </div>
                            <div class="dashboard__inner__header__right">
                                <div class="btn-wrapper">
                                    @can('blog-add')
                                        <a href="{{ route('admin.blog.create') }}" class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('Add Blog') }}</a>
                                    @endcan
                                </div>
                                <div class="d-flex text-right  mt-3">
                                    <input class="form__control blog_string_search" name="string_search" placeholder="{{ __('Search') }}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <x-validation.error/>
                    <div class="tableStyle_three mt-4">
                        <div class="table_wrapper custom_Table">
                            <div class="search_page_result">
                                @include('blog::backend.search-result')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <x-sweet-alert.sweet-alert2-js/>
    @include('blog::backend.blog-js')
@endsection
