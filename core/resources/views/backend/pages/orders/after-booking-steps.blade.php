@extends('backend.admin-master')
@section('site-title')
    {{__('Add New After Booking Steps')}}
@endsection
@section('style')
    <x-media.css/>
    <style>
        input#pac-input {
            background-color: ghostwhite;
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

        #after_booking_steps_table {
            tr td:first-child input{
             max-width: 50px;
             height:45px;
             padding-left:15px;
            }
        tr td:nth-child(2) input{
            width: 100%;
            height:45px;
          }
          tr td:nth-child(3) input{
            max-width: 50px;
            height:45px;
          }
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
                        <h4 class="header-title">{{__('Add New After Booking Steps')}}   </h4>
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
                            <form action="{{route('admin.order.after-booking-steps')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div  class="add-listing-content-wrapper mt-4">
                                    <div class="tab-content add-listing-content" id="add-listing-tabContent">

                                        <!-- Service general Info start-->
                                        @include('backend.pages.orders.steps-general-info')
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
