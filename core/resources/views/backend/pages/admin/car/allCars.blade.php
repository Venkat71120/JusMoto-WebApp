@extends('backend.admin-master')
@section('site-title')
    {{__('Admin All Cars')}}
@endsection
@section('style')
    <style>
        .custom_status_style{
            font-size: 14px!important;
        }
        a.cmnBtn.btn_5.btn_bg_warning.btnIcon.radius-5.swal_status_change {
            min-width: 30px!important;
        }
      
        #string_search
        {
            font-size: 1rem;
            font-weight:400;
            color:#212529;
            border:1px solid #ced4da;
        }
        #string_search::placeholder
        {
            color:#212529;
        }
        #filter_brand
        {
           width:190px;
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
                            <h4 class="dashboard__inner__header__title">{{ __('All Cars') }}</h4>
                            @can('admin-service-bulk-delete')
                                <x-bulk-action.bulk-action/>
                            @endcan
                       </div>
                        <div class="dashboard__inner__header__right d-flex">
                            <div class="btn-wrapper me-3">
                                <form class="d-flex d-none d-lg-flex">
                                    <!-- Filter Dropdowns -->
                                    <div class="me-2 mt-1 mb-1" id="filter_brand">
                                        <select class="form-select type" name="brand_name" id="brand_name" aria-label="Brand Type">
                                            <option value="">{{ __('All Brands Cars') }}</option>
                                             @foreach($brands as $brand)
                                                 <option value="{{$brand->id }}">{{ $brand->name }}</option>
                                             @endforeach
                                        </select>
                                    </div>
                                </form>    
                            </div>
                            <div class="d-flex text-right w-100">
                                <input class="form__control notice_string_search" name="string_search" id="string_search" placeholder="{{ __('Enter Car Name') }}">
                            </div>
                       </div>
                   </div>
                 </div>
                <x-validation.error/>
                <div class="tableStyle_three mt-4">
                    <div class="table_wrapper custom_Table">
                        <div class="search_notice_result">
                            @include('backend.pages.admin.car.search-car')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    @can('admin-car-bulk-delete')
        <x-bulk-action.bulk-action-js :url="route('admin.car.bulk.action')"/>
    @endcan
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){
                $('#brand_name').on('change',function(){
                    let brand_id = $(this).val();
                    $.ajax({
                        url:"{{ route('admin.car.filter') }}",
                        method:'GET',
                        data:{brand_id:brand_id},
                        success:function(res){
                            if(res.status=='nothing'){
                                $('.search_notice_result').html('<h3 class="text-center text-danger">'+"{{ __('Nothing Found') }}"+'</h3>');
                            }else{
                                $('.search_notice_result').html(res);
                            }
                        }
                    })
                });
              
                // live search
                $(document).on('keyup','.notice_string_search',function(){
                    let string_search = $(this).val();
                    $.ajax({
                        url:"{{ route('admin.car.search') }}",
                        method:'GET',
                        data:{string_search:string_search},
                        success:function(res){
                            if(res.status=='nothing'){
                                $('.search_notice_result').html('<h3 class="text-center text-danger">'+"{{ __('Nothing Found') }}"+'</h3>');
                            }else{
                                $('.search_notice_result').html(res);
                            }
                        }
                    });
                });

                // pagination
                $(document).on('click', '.pagination li a', function(e){
                    e.preventDefault();
                    let page = $(this).attr('href').split('page=')[1];
                    notices(page);
                });
                function notices(page){
                    $.ajax({
                        url:"{{ route('admin.car.paginate.data').'?page='}}" + page,
                        success:function(res){
                            $('.search_notice_result').html(res);
                        }
                    });
                }

            });
        })(jQuery);
    </script>
@endsection
