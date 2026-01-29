@extends('backend.admin-master')
@section('site-title')
    {{__('Edit Service')}}
@endsection
@section('style')
    <x-media.css/>
    <style>
        input#pac-input {
            background-color: ghostwhite;
        }
        input{
            font-size: 1rem;
            font-weight: 400;
            border:1px solid #ced4da !important;
           
        }
        input::placeholder
        {
            color:#212529;
        }

        #edit_select_brand_name
        {
            width:210px;
        }
        #edit_select_car_name
        {
            width:210px;
        }

        .listing_slug{
            display: none;
        }

        .slug_update_button
        {
            display: none;
        }

        #session_edit_service_car_card{
            width: 70rem;
        }

        .modal-dialog_custom{
            max-width: 800px !important;
            width: 100%;
        }

        .select2-container .select2-selection--single .select2-selection__rendered 
        {
            color: #212529;
            font-size: 1rem;
            font-weight: 400;
          
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

        /* price and number css start   */
        label.infoTitle.position-absolute {
            top: 0;
            background-color: whitesmoke;
            left: 0;
            padding: 10px 15px;
        }
        .checkBox {
            margin-top: 10px;
            border: 1px solid whitesmoke;
            border-radius: 8px;
            padding: 10px 15px;
            display: inline-block;
        }
        input#price, input#phone {
            padding: 5px 0 5px 76px;
        }
        input.effectBorder.checkBox__input {
            border: 2px solid #a3a3a3;
        }
        /* price and number css end   */

        .condition {
            padding: 13px;
            border: 2px solid #e9e9e9;
            border-radius: 6px;
        }

        .radio input {
            height: 20px;
            width: 20px;
        }
        .form__input__single {
            flex: 1;
        }

        .flex_0 {
            flex-shrink: 0;
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
                <div class="header-wrap d-flex justify-content-between mb-4">
                    <div class="left-content">
                        <h4 class="header-title">{{__('Edit Service')}}   </h4>
                    </div>
                    <div class="right-content">
                        <a class="cmnBtn btn_5 btn_bg_info radius-5" href="{{route('admin.all.services')}}">{{__('All Services')}}</a>
                    </div>
                </div>
                <x-validation.error/>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="add-listing-wrapper mt-4">
                                <!--Nav Bar Tabs markup start -->
                                <div class="nav nav-pills" id="add-listing-tab"
                                     role="tablist" aria-orientation="vertical">
                                    <a class="nav-link  stepIndicator active stepForm_btn__previous new_stepForm_list__item"
                                       id="listing-info-tab"
                                       data-bs-toggle="pill"
                                       href="#listing-info"
                                       role="tab"
                                       aria-controls="listing-info"
                                       aria-selected="true">
                                        <span class="new_stepForm_list__item__numb"><b class="numb">1</b></span>
                                        {{__('Service Details')}}
                                    </a>
                                    <a class="nav-link  stepIndicator new_stepForm_list__item" id="location-tab"
                                       data-bs-toggle="pill"
                                       href="#location" role="tab"
                                       aria-controls="location"
                                       aria-selected="false">
                                        <span class="new_stepForm_list__item__numb"><b class="numb">2</b></span>
                                        {{__('Service Attributes')}}
                                    </a>
                                    <a class="nav-link  stepIndicator new_stepForm_list__item"
                                        id="select-car-tab"
                                        data-bs-toggle="pill"
                                        href="#car"
                                        role="tab"
                                        aria-controls="car"
                                        aria-selected="true">
                                        <span class="new_stepForm_list__item__numb"><b class="numb">3</b></span>
                                        {{__('Select Car')}}
                                    </a>
                                </div>
                                <form action="{{route('admin.edit.service', $service->id)}}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    <div  class="add-listing-content-wrapper mt-4">
                                        <div class="tab-content add-listing-content" id="add-listing-tabContent">
                                            <!-- service Info start-->
                                           @include('backend.pages.services.admin.edit-service-details')
                                            <!-- service Info end-->
                                            <!-- Include start-->
                                            @include('backend.pages.services.admin.edit-service-include')
                                            <!-- Include end-->
                                            <!-- Car Select start-->
                                            @include('backend.pages.services.admin.edit-service-car')
                                            <!-- Car select end-->
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
   
    <script src="{{asset('assets/frontend/js/multi-step.js')}}"></script>
    @include('backend.pages.services.admin.service-add-more-option-js')
    <script src="{{asset('assets/backend/js/select2.min.js')}}"></script>  
    @include('backend.pages.services.admin.edit-service-js')
@endsection
