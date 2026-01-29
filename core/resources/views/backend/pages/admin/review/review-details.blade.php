@extends('backend.admin-master')
@section('site-title')
    {{__('Review Details')}}
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
                            <h4 class="dashboard__inner__header__title">{{ __('Review Details') }}</h4>
                        </div>
                    </div>
                </div>
                <x-validation.error/>
                <div class="tableStyle_three">
                    <div class="table_wrapper custom_Table">
                      <div class="dashboard__body">
                        <div class="dashboard__inner">
                            <div class="customer__details mt-4">
                                <div class="customer__details__author">
                                    <div class="row">
                                        <div class="col-xl-12  col-md-12">
                                            <div class="customer__details__author__item padding-20 radius-10">
                                                <div class="customer__details__author__item__header">
                                                    <div class="customer__details__author__item__header__flex">
                                                        <div class="customer__details__author__item__header__left">
                                                            <h4 class="customer__details__author__item__title">{{ __('Details') }}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="customer__details__author__item__inner border_top_1 top_15">
                                                    <div class="customer__account__details">
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Review ID:') }}</strong>
                                                                <span>{{ $review->id }}</span>
                                                            </div>
                                                        </div> 
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Admin Name:') }}</strong>
                                                                <span>{{ $review->admin?->name }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Reviwer Name:') }}</strong>
                                                                <span>{{ $review->reviewer?->first_name ?? $review->reviewer?->username }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Item Name:') }}</strong>
                                                                <span>{{ $review->service?->title }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Item Type:') }}</strong>
                                                                @php
                                                                $flag="";
                                                                if($review->service?->type == 0)
                                                                {
                                                                    $flag = __('Service');
                                                                }
                                                                elseif($review->service?->type == 1)
                                                                {
                                                                    $flag = __('Product');
                                                                }
                                                            @endphp
                                                                <span>{{ $flag }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Rating:') }}</strong>
                                                                <span>{{ $review->rating }}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="customer__account__details__item">
                                                            <div class="customer__account__details__item__flex">
                                                                <strong>{{ __('Status:') }}</strong>
                                                                <x-status.review-status :status="$review->status"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-xl-12  col-md-12">
                                            <div class="customer__details__author__item padding-20 radius-10">
                                                <div class="customer__details__author__item__header">
                                                    <div class="customer__details__author__item__header__flex">
                                                        <div class="customer__details__author__item__header__left">
                                                            <h4 class="customer__details__author__item__title">{{ __('Message') }}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="customer__details__author__item__inner border_top_1 top_15">
                                                    <div class="customer__account__details">
                                                        <div class="customer__account__details__item">
                                                          
                                                            <span>{{ $review->message}}</span>
                                                            
                                                        </div> 
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
   
@endsection
@section('scripts')
   
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){
                   
                       

            });
         })(jQuery);
    </script>
@endsection

