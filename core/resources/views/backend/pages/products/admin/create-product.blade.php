@extends('backend.admin-master')
@section('site-title')
    {{__('Add New Product')}}
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

        .listing_slug{
            display: none;
        }

        .slug_update_button
        {
            display: none;
        }
        #select_brand_name
        {
            width:210px;
        }
        #select_car_name
        {
            width:210px;
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
        #session_product_car_card
        {
            width: 70rem;
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
        #select2-car_name-container{
            z-index: 10001 !important;
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
                <div class="header-wrap d-flex justify-content-between mb-4">
                    <div class="left-content">
                        <h4 class="header-title">{{__('Add New Product')}}   </h4>
                    </div>
                    <div class="right-content">
                        <a class="cmnBtn btn_5 btn_bg_info radius-5" href="{{route('admin.all.products')}}">{{__('All Products')}}</a>
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
                                    {{__('Product Details')}}
                                </a>
                                <a class="nav-link  stepIndicator stepForm_btn__previous new_stepForm_list__item"
                                   id="location-tab"
                                   data-bs-toggle="pill"
                                   href="#location"
                                   role="tab"
                                   aria-controls="location"
                                   aria-selected="true">
                                    <span class="new_stepForm_list__item__numb"><b class="numb">2</b></span>
                                    {{__('Product Attributes')}}
                                </a>
                                <a class="nav-link  stepIndicator new_stepForm_list__item"
                                id="select-car-tab"
                                data-bs-toggle="pill"
                                href="#car"
                                role="tab"
                                aria-controls="car"
                                aria-selected="true">
                                 <span class="new_stepForm_list__item__numb"><b class="numb">3</b></span>
                                 {{__('Product Car')}}
                             </a>
                            </div>
                            <form action="{{route('admin.add.new.product')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div  class="add-listing-content-wrapper mt-4">
                                    <div class="tab-content add-listing-content" id="add-listing-tabContent">

                                        <!-- Service general Info start-->
                                        @include('backend.pages.products.admin.product-general-info')
                                        <!-- Service general Info end-->

                                        <!-- Service include start-->
                                       @include('backend.pages.products.admin.product-include')
                                        <!-- Service include end-->

                                        @include('backend.pages.products.admin.select-product-car')
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
   
    <script src="{{asset('assets/frontend/js/multi-step.js')}}"></script>
  
    @include('backend.pages.products.admin.product-add-more-option-js')
   
    <script src="{{asset('assets/backend/js/select2.min.js')}}"></script>    
        
    <script>
        (function ($) {
            "use strict";
            
            $(document).ready(function () {


                let visible=5;
                let visible_filter=5;

                 $('body').on('click','#loadMoreCarsForProduct', function () {
                    let total = $('.car-card').length;
                    $('.car-card.d-none').slice(0, 5).removeClass('d-none');
                    visible += 5;

                    if (visible >= total) {
                        $('#loadMoreCarsForProduct').hide();
                    }
                });

                 $('body').on('click','#loadMoreCarsForProductFilter', function () {
                    let total = $('.car-card-filter').length;
                    $('.car-card-filter.d-none').slice(0, 5).removeClass('d-none');
                    visible_filter += 5;

                    if (visible_filter >= total) {
                        $('#loadMoreCarsForProductFilter').hide();
                    }
                });


                $('#car_brand_id').select2(
                {
                    dropdownParent: $('#addModal'),
                }
                );
                $('.car_model_id').select2({
                    dropdownParent: $('#addModal'),
                });
                $('#brand_name').select2();
                $('#car_name').select2();



                // is featured
                $(document).on('click', '.is_featured', function () {
                    $('#is_featured').val($('#is_featured').is(':checked') ? '1' : '');
                });

                //Permalink Code
                $('.permalink_label').hide();
                $(document).on('keyup', '#title', function (e) {
                    let slug = converToSlug($(this).val());
                    let url = "{{url('/product/')}}/" + slug;
                    $('.permalink_label').show();
                    let data = $('#slug_show').text(url).css('color', '#3c3cf7');
                    $('.listing_slug').val(slug);
                });

                function converToSlug(slug){
                    let finalSlug = slug.replace(/[^a-zA-Z0-9]/g, ' ');
                    //remove multiple space to single
                    finalSlug = slug.replace(/  +/g, ' ');
                    // remove all white spaces single or multiple spaces
                    finalSlug = slug.replace(/\s/g, '-').toLowerCase().replace(/[^\w-]+/g, '-');
                    return finalSlug;
                }

                //Slug Edit Code
                $(document).on('click', '.slug_edit_button', function (e) {
                    e.preventDefault();
                    $('.listing_slug').show();
                    $(this).hide();
                    $('.slug_update_button').show();
                });

                //Slug Update Code
                $(document).on('click', '.slug_update_button', function (e) {
                    e.preventDefault();
                    $(this).hide();
                    $('.slug_edit_button').show();
                    var update_input = $('.listing_slug').val();
                    var slug = converToSlug(update_input);
                    var url = `{{url('/product/')}}/` + slug;
                    $('#slug_show').text(url);
                    $('.listing_slug').hide();
                });

                $('#category').on('change',function(){
                    let category_id = $(this).val();
                    $.ajax({
                        method:'post',
                        url:"{{route('get.subcategory')}}",
                        data:{category_id:category_id},
                        success:function(res){
                            if(res.status=='success'){
                                let alloptions = "<option value=''>{{__('Select Sub Category')}}</option>";
                                let allSubCategory = res.sub_categories;
                                $.each(allSubCategory,function(index,value){
                                    alloptions +="<option value='" + value.id + "'>" + value.name + "</option>";
                                });
                                $(".subcategory").html(alloptions);
                                $('#subcategory').niceSelect('update');
                            }
                        }
                    })
                });

                $('#car_brand_id').on('change',function(){
                    let brand_id = $(this).val();
                  
                    $.ajax({
                        method:'post',
                        url:"{{route('get.car_model')}}",
                        data:{brand_id:brand_id},
                        success:function(res){
                           
                            if(res.status=='success'){
                                let alloptions = "<option value=''>{{__('Select car Model')}}</option>";
                                let allModel = res.data;
                                

                                $.each(allModel,function(index,value){
                                    let car_name=value.name+"-"+value.Year;
                                    alloptions +="<option value='" + value.id + "'data-image='"+value.image+"'data-url='"+value.image_url+"'>" + car_name + "</option>";
                                    
                                });
                                $(".car_model_id").html(alloptions);
                              
                            }
                        }
                       
                    })
                });

                $('#car_model_value').on('change',function(){
                    let car_id = $(this).val();
                  
                    $.ajax({
                        method:'post',
                        url:"{{route('get.car_variant')}}",
                        data:{car_id:car_id},
                        success:function(res){
                           
                            if(res.status=='success'){
                                let alloptions = "<option value='all'>{{__('Select All Variant')}}</option>";
                                let allVariant = res.data;
                                

                                $.each(allVariant,function(index,value){
                                    let engine_fuel=value.engine_type.name+"-"+value.fual_type.name;
                                    alloptions +="<option value='" + value.id + "'data-image='"+value.image+"'data-url='"+value.image_url+"'>" + engine_fuel + "</option>";
                                   
                                });
                                $(".car_variant").html(alloptions);
                               
                            }
                        }
                       
                    })
                });

               

                // change country and get state
                $(document).on('change','#country_id', function() {
                    let country = $(this).val();
                    $.ajax({
                        method: 'post',
                        url: "{{ route('au.state.all') }}",
                        data: {
                            country: country
                        },
                        success: function(res) {
                            if (res.status == 'success') {
                                let all_options = "<option value=''>{{__('Select State')}}</option>";
                                let all_state = res.states;
                                $.each(all_state, function(index, value) {
                                    all_options += "<option value='" + value.id +
                                        "'>" + value.state + "</option>";
                                });
                                $(".get_country_state").html(all_options);
                                $(".state_info").html('');
                                if(all_state.length <= 0){
                                    $(".state_info").html('<span class="text-danger"> {{ __("No state found for selected country!") }} <span>');
                                }
                            }
                        }
                    })
                })

                // change state and get city
                $(document).on('change','#state_id', function() {
                    let state = $(this).val();
                    $.ajax({
                        method: 'post',
                        url: "{{ route('au.city.all') }}",
                        data: {
                            state: state
                        },
                        success: function(res) {
                            if (res.status == 'success') {
                                let all_options = "<option value=''>{{__('Select City')}}</option>";
                                let all_city = res.cities;
                                $.each(all_city, function(index, value) {
                                    all_options += "<option value='" + value.id +
                                        "'>" + value.city + "</option>";
                                });
                                $(".get_state_city").html(all_options);

                                $(".city_info").html('');
                                if(all_city.length <= 0){
                                    $(".city_info").html('<span class="text-danger"> {{ __("No city found for selected state!") }} <span>');
                                }
                            }
                        }
                    });
                });

            });
        })(jQuery);

    $(document).ready(function () 
    {

        
           
        $('#addBtn').on('click', function (e) {
            e.preventDefault();
           
            $('#addModal').modal('show');
            $('#isModalOpen').val('true');
        });

        $(document).on('click', '.modal_close', function () {
            $('#isModalOpen').val('false');
        });
        
        $('#addAllVariant').on('click', function () 
        {
            $.ajax({
                        method: 'post',
                        url: "{{ route('admin.carProduct.add') }}",
                        data: {
                            variant_id:'all',
                        },
                        success: function(res) 
                        {
                            if (res.status == 'success') 
                            {
                                toastr.success("{{__('Success')}}");
                                $("#session_data").html(res.view);
                            }
                            else if (res.status == 'error')
                            {
                                
                               toastr.error(res.errors);
                              
                                
                            }
                        },
                        error: function(xhr, status, error)
                        {
                            if (xhr.status === 422) { 
                                let errors = xhr.responseJSON.errors;
                                let errorMessage = "";
                                $.each(errors, function (key, value) {
                                    errorMessage += value[0] + "<br>";
                                });
                                toastr.error(errorMessage);
                            } else {
                                toastr.error("{{__('An error occurred. Please try again.') }}");
                            }
                        }
            });    
        });

        
        $('#removeAllVariant').on('click', function () 
        {
            $.ajax({
                        method: 'post',
                        url: "{{ route('admin.allCarProduct.delete') }}",
                        success: function(res) 
                        {
                            if (res.status == 'success') 
                            {
                                toastr.success("{{__('Success')}}");
                                $("#session_data").html(res.view);
                            }
                            else if (res.status == 'error')
                            {
                                
                               toastr.error(res.errors);
                               
                                
                            }
                        },
                        error: function(xhr, status, error)
                        {
                            if (xhr.status === 422) { 
                                let errors = xhr.responseJSON.errors;
                                let errorMessage = "";
                                $.each(errors, function (key, value) {
                                    errorMessage += value[0] + "<br>";
                                });
                                toastr.error(errorMessage);
                            } else {
                                toastr.error("{{__('An error occurred. Please try again.') }}");
                            }
                        }
            });    
        });
    
        $('#addRowBtn').on('click', function () 
        {
           
            var brand = $('#car_brand_id').val();
            var car = $('.car_model_id').val();
            var price = $('#price1').val();
            var discount_price = $('#discount_price1').val();
            var unit = $('#unit1').val();
            var duration = $('#duration1').val();
            var service_car_image1=$('#service_car_image1').val();
            var car_variant=$('#car_variant').val();
            if (!$('#duration_checkbox').prop('checked')) {
                // If the checkbox is unchecked, set value to 0
                $('#duration_checkbox').val(0);
            }
            else{
                // If the checkbox is unchecked, set value to 0
                $('#duration_checkbox').val(1);
            }
            var useDefault = $('#duration_checkbox').val();
           


       
            $.ajax({
                        method: 'post',
                        url: "{{ route('admin.carProduct.add') }}",
                        data: {
                            brand_id:brand,
                            car_id:car,
                            price1:price,
                            discount_price1: discount_price,
                            unit1: unit,
                            duration1: duration,
                            use_default:useDefault,
                            service_car_image1:service_car_image1,
                            car_variant:car_variant
                        },
                        success: function(res) 
                        {
                            if (res.status == 'success') 
                            {
                                toastr.success("{{__('Success')}}");
                                $("#session_data").html(res.view);
                                $("#car_brand_id").val("").trigger("change");
                                $("#car_model_value").val("").trigger("change");
                                $('#car_variant').val('');
                                $("#price1").val('');
                                $("#discount_price1").val('');
                                $("#unit1").val('');
                                $("#duration1").val('');
                                $("#duration_checkbox").prop("checked", false);
                                $("#service_car_image1").attr("src", "");
                                $("#service_product_img .thumbnail img").attr("src", "{{ asset('assets/frontend/img/gallery/single-image-upload.png') }}");
                                $('#addModal').modal('hide');
                                $('#isModalOpen').val('false');

                                
                            }
                            else if (res.status == 'validation_error')
                            {
                                let errorMessage = "";
                                $.each(res.errors, function (key, value) {
                                    
                                    
                                   $('.error-car').text(value[0]);
                                });
                               
                              
                                
                            }
                            
                        },
                        error:function(xhr)
                        {
                            if (xhr.status === 422) { 
                                let errors = xhr.responseJSON.errors;
                                let errorMessage = "";
                                $.each(errors, function (key, value) {
                                    errorMessage += value[0] + "<br>";
                                });
                                toastr.error(errorMessage);
                            } else {
                                toastr.error("{{__('An error occurred. Please try again.') }}");
                            }
                        }
                });
        });
            
    

    // Remove row when clicked
    $(document).on('click', '.removeRowBtn', function () {
        let carId = $(this).data('id');
        $.ajax({
            method: 'post',
            url: `/admin/carProduct/delete/${carId}`,
            success: function(res) 
            {
                if (res.status =='success') 
                {
                    $("#session_data").html(res.view);
                    $('#brand_name').val('');
                }
            }
        });

       
    });

    $('#filterBtn').on('click', function () {
        let brand_id = $('#brand_name').val();
        let car_id = $('#car_name').val();
    
        $.ajax({
            url: "{{ route('admin.carProduct.filter') }}",
            method: 'GET',
            data: { brand_id: brand_id ,car_id:car_id},
            success: function (res) {
                if (res.status == 'success') {
                    if(res.cars=="all")
                    {
                        $('.session_product_car').removeClass('d-none');
                        $('#search_product_car_result').empty();
                        $('#loadMoreCarsForProduct').removeClass('d-none');
                    }
                    else
                    {
                            $('#search_product_car_result').empty(); // Clear previous results
                            $('.session_product_car').addClass('d-none');
                            let length=0;
                            visible_filter=5;
                            
                            $.each(res.cars, function (key, car) {
                                
                                length=length+1;
                                let hiddenElement=length >5 ? 'd-none' :'';

                                let card = `
                                    <div class="card mt-2 mb-4 w-100 car-card-filter ${hiddenElement}" data-index="${key}" id="session_product_car_card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div class="form__input__single">
                                                        <label>Brand <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5" value="${car.brand ?? 'N/A'}" disabled>
                                                    </div>
                                                </div>  
                                                <div class="col-3">
                                                    <div class="form__input__single">
                                                        <label>Car Model <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5" value="${car.car ?? 'N/A'}" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form__input__single">
                                                        <label>Car Variant <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5" value="${car.engineFuel}" disabled>
                                                    </div>
                                                </div>    
                                                <div class="col-3">
                                                    <div class="form__input__single">
                                                        <label>Price <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5" value="${car.price ?? 'N/A'}" disabled>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">   
                                                <div class="col-3">
                                                    <div class="form__input__single">
                                                        <label class="form__input__single__label">{{ __('Discount Price') }} <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5"  value="${car.discount_price ?? 'N/A' }" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-3">    
                                                    <div class="form__input__single">
                                                        <label class="form__input__single__label">{{ __('Unit') }} <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5" value="${car.unit ?? 0 }" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-3"> 
                                                    <div class="form__input__single">
                                                        <label class="form__input__single__label">{{ __('Duration') }} <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5" value="${car.duration ?? 0 }" disabled>
                                                    </div>
                                                </div> 
                                                <div class="col-3">   
                                                    <div class="form__input__single">
                                                        <label class="form__input__single__label">{{ __('Use Default Price') }} <span class="text-danger">*</span></label>
                                                        <input type="text" class="form__control radius-5"  value="${car.flag }" disabled>
                                                    </div>
                                                </div>  
                                            </div>   

                                                <!-- Second row -->
                                            <div class="row">    
                                            
                                            
                                                <div class="col-3">   
                                                    <div class="form__input__single">
                                                        <label class="form__input__single__label">{{ __('Image') }}</label>
                                                        <div>
                                                        <img src="${car.imageSrc}" alt="" class="img-responsive img-centered">
                                                        </div>
                                                        
                                                    </div>
                                                </div>  
                                                
                                            
                                            </div>
                                            <button type="button" class="btn btn-danger removeRowBtn mt-3" data-id="${key}">Remove</button>
                                        </div>
                                    </div>`;
                                
                                $('#search_product_car_result').append(card);
                            });

                            $('#loadMoreCarsForProduct').addClass('d-none');
                            if(length>5)
                            {
                                let loadMore=` <div class="text-center mt-3">
                                    <button type="button" class="btn btn-primary" id="loadMoreCarsForProductFilter">{{ __('Load More') }}</button>
                                </div>`;
                                $('#search_product_car_result').append(loadMore);
                                
                            }
                    }    
                }
            }
        });
    });
});

        
    </script>
    @if(session('success'))
        <script>
            toastr.success('{{ session("success") }}', 'Success');
        </script>
    @endif
@endsection
