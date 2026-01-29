@extends('backend.admin-master')
@section('site-title')
    {{__('Car Details')}}
@endsection
@section('style')
    <x-media.css/>
    <x-summernote.css/>
    <style>
        span {
            display: inline;
        }
        .dashboard__rates__card__thumb {
            gap: 6px;
            margin: 5px;
            padding: 7px;
            display: flex;
            flex-wrap: wrap;
        }

        .effectBorder {
            pointer-events: none; /* Disable interactions */
            cursor: not-allowed; /* Indicate non-interactivity */
        }
        .customer__account__details__item__flex {
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: flex-start;
        }

        .seller-img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #ddd;
            position: relative;
        }

        .seller-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
        }

    </style>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="header-wrap d-flex justify-content-between">
                    <div class="left-content">
                        <h4 class="header-title">{{__('Car Details')}}   </h4>
                    </div>
                    <div class="right-content d-flex">
                        <div class="btn-wrapper me-2">
                            <a href="{{ route('admin.car.edit',$car->id) }}" class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('Edit Car') }}</a>
                        </div>
                        <a class="cmnBtn btn_5 btn_bg_info radius-5" href="{{route('admin.car.all')}}">{{__('All Cars')}}</a>
                    </div>
                </div>
                <x-validation.error/>
               @include('backend.pages.admin.car.details-basic-info')

            </div>
        </div>
    </div>


   

    



    

    <x-media.markup/>
@endsection
@section('scripts')
    <x-media.js />
    <script src="{{asset('assets/backend/js/fontawesome-iconpicker.min.js')}}"></script>
    <link rel="stylesheet" href="{{asset('assets/backend/css/fontawesome-iconpicker.min.css')}}">
    <x-summernote.js/>
    <script>
        <x-icon.icon-picker/>
    </script>
    <script>
        (function ($) {
            "use strict";

            $(document).ready(function () {
                

                // Optionally, prevent keyboard events (spacebar) to toggle checkbox
                $(document).on('keydown', '#checkbox', function (e) {
                    if (e.which === 32) {
                        e.preventDefault();
                    }
                });

                

              
                });
            });
        (jQuery)
    </script>
@endsection
