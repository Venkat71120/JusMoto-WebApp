@extends('backend.admin-master')
@section('site-title')
    {{__('Add New Engine')}}
@endsection
@section('style')
    <x-media.css/>
    <style>
        input#pac-input {
            background-color: ghostwhite;
        }
        .select2-container .select2-selection--single {
            background-color: var(--white-bg);
            border: 1px solid #e3e3e3;
            border-radius: 4px;
            position: relative;
            padding: 10px 5px;
        }

        span.select2.select2-container.select2-container--default.select2-container--focus {
            width: 100% !important;
        }
        .select-itms span.select2{
            width: 100% !important;
        }


        .close{ border: none;  }
        .dashboard-switch-single{
            font-size: 20px;
        }
        .swal_delete_button{
            color: #da0000 !important;
        }
        /* Default styles for the input box */
        #pac-input {
            height: 3em;
            width:75%;
            margin-left: 140px;
            border: 1px solid;
            top: 4px;
            font-size: 16px;
        }

        /* Media query for screens smaller than 768px */
        @media (max-width: 1499px) {
            #pac-input {
                width: 100%;
                margin-left: 0;
            }
        }

        /*select tags start css*/
        .select2-container--default .select2-selection--multiple {
            border: 1px solid #e3e3e3;
        }
        .select2-container--default.select2-container--focus .select2-selection--multiple {
            border: 1px solid #e3e3e3;
        }
        .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
            font-size: 23px;
        }
        .select2-selection__choice__display {
            font-size: 15px;
            color: #000;
            font-weight: 400;
        }
        /*select tags end css*/
        .radio input {
            height: 20px;
            width: 20px;
        }
        .form__input__single {
             flex: 1;
        }

        /*  new css start  */
        .single-dashboard-input {
            display: flex;
            flex-wrap: wrap;
            gap: 22px;
            align-items: center;
        }
        .single-info-input {
            flex: 1;
        }
        .btn-wrapper.margin-top-20 {
            text-align: end;
        }
        /*  new css end  */

    </style>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="header-wrap d-flex justify-content-between mb-3">
                    <div class="left-content">
                        <h4 class="header-title">{{__('Add New Engine')}}   </h4>
                    </div>
                    <div class="right-content">
                        <a class="cmnBtn btn_5 btn_bg_info radius-5" href="{{route('admin.engine.all')}}">{{__('All Engines')}}</a>
                    </div>
                </div>
                <x-validation.error/>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="add-listing-wrapper mt-4">
                            <!--Nav Bar Tabs markup start -->
                            <div class="nav nav-pills" id="add-listing-tab"
                                 role="tablist" aria-orientation="vertical">
                               
                            </div>
                            <form action="{{route('admin.engine.add')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div  class="add-listing-content-wrapper mt-4">
                                    <div class="tab-content add-listing-content" id="add-listing-tabContent">

                                        <!-- Service general Info start-->
                                        @include('backend.pages.admin.engine.engine-general-info')
                                        <!-- Service general Info end-->

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <x-media.markup/>
@endsection
@section('scripts')
    <x-media.js />
    <x-frontend.js.new-tag-add-js/>
    @if(!empty(get_static_option('google_map_settings_on_off')))
    <x-map.google-map-api-key-set/>
    <x-map.google-map-listing-js/>
    @endif
    <script src="{{asset('assets/frontend/js/multi-step.js')}}"></script>
  
    <script>
        (function ($) {
            "use strict";
            $(document).ready(function () {


              
                });

            });
        })(jQuery)
    </script>
    @if(session('success'))
        <script>
            toastr.success('{{ session('success') }}', 'Success');
        </script>
    @endif
@endsection
