@extends('backend.admin-master')
@section('site-title')
    {{__('Order Details')}}
@endsection
@section('style')
   <style>
  


       .table_customer.provider_wrapper {
           border-bottom: 1px solid #d1d1d1;
       }
   </style>
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title">{{ __('Order Details') }}</h4>
                        </div>
                    </div>
                </div>
                <x-validation.error/>
                <div class="tableStyle_three">
                    <div class="table_wrapper custom_Table">
                      <div class="dashboard__body">
                        <div class="dashboard__inner">
                            <div class="customer__details mt-2">
                                <div class="customer__details__author">
                                    <div class="row">
                                      @include('backend.pages.orders.order-details-step-01')
                                      @include('backend.pages.orders.order-details-step-02')
                                      @include('backend.pages.orders.order-details-step-03')
                                      @include('backend.pages.orders.order-details-step-04')
                                    </div>
                                </div>
                            </div>
                               
                                @include('backend.pages.orders.order-items-details')
                                @if($order->OrderLocations)
                                   @include('backend.pages.orders.order-location-details')
                                @endif
                                @if($outlet_location)
                                   @include('backend.pages.orders.outlet-location-details')
                                @endif
                                @include('backend.pages.orders.order-notes-details')
                        </div>
                       </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
    @include('backend.pages.orders.sub-order-status-modal')
    @include('backend.pages.orders.add_order_staff_modal')
@endsection
@section('scripts')
    <script src="{{asset('assets/backend/js/select2.min.js')}}"></script>    
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){
                    //sub order status change
                    $('#staff_id').select2( {
                    dropdownParent: $('#OrderStaffAddModal'),
                });
                    $(document).on('click', '.order_status_change_modal', function () {
                        let el = $(this);
                        let order_id = el.data('order_id');
                        let form = $('#OrderStatusChangeModal');
                        form.find('#order_id').val(order_id);
                    });

                    $(document).on('click', '.add_order_staff_modal', function () {
                        
                        $('#OrderStaffAddModal').modal('show');
                        
                    });    


            });
         })(jQuery);
    </script>
@endsection

