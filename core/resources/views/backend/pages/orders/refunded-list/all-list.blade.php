@extends('backend.admin-master')
@section('site-title')
    {{__('All Refunded Orders')}}
@endsection
@section('style')
    <style>
        .custom_table tr td:not(:first-child) {
            min-width: 42px;
        }

        #refunded-order-status
        {
            align-items: center;
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
                            <h4 class="dashboard__inner__header__title">{{ __('All Refunded Orders') }}</h4>
                       </div>
                   </div>
                 </div>
                <x-validation.error/>
                <div class="tableStyle_three mt-4">
                    <div class="table_wrapper custom_Table">
                        <div class="search_result">
                            @include('backend.pages.orders.refunded-list.search-refunded-order')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Status Modal -->
    <div class="modal fade" id="RefundedOrderStatusChangeModal" tabindex="-1" role="dialog"
         aria-labelledby="editModal"
         aria-hidden="true">
        <form action="{{ route('admin.redunded-order.status') }}" method="post">
            @csrf
            <input type="hidden" name="id" class="order_id">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModal">{{ __('Change Refunded Order Status') }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="status_id">{{ __('Select Status') }}</label>
                            <select name="status_id" id="status_id" class="form-control">
                                <option value="0">{{ __('Pending') }}</option>
                                <option value="1">{{ __('Completed') }}</option>
                                <option value="2">{{ __('Cancel') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ __('Save changes') }}</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
@section('scripts')
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){

                //refunded order status change
                $(document).on('click', '.refunded_order_status_change_modal', function () {
                    let el = $(this);
                    let order_id = el.data('order_id');
                    let form = $('#RefundedOrderStatusChangeModal');
                    form.find('.order_id').val(order_id);
                });


               

                // pagination
                $(document).on('click', '.pagination li a', function(e){
                    e.preventDefault();
                    let page = $(this).attr('href').split('page=')[1];
                  
                    admin_orders(page);
                });
                function admin_orders(page){
                    $.ajax({
                        url:"{{ route('admin.refunded-order.paginate').'?page='}}" + page ,
                        success:function(res){
                            $('.search_result').html(res);
                        }
                    });
                }
            });
        })(jQuery);
    </script>
@endsection
