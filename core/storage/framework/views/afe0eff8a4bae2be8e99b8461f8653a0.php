<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Edit Product')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <?php if (isset($component)) { $__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.css','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.css'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa)): ?>
<?php $attributes = $__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa; ?>
<?php unset($__attributesOriginalbc1bcd20222d67be5eb46ea1d22a74fa); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa)): ?>
<?php $component = $__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa; ?>
<?php unset($__componentOriginalbc1bcd20222d67be5eb46ea1d22a74fa); ?>
<?php endif; ?>
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

        #session_edit_product_car_card{
            width: 100%;
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

        #session_edit_product_car_card
        {
            width: 70rem;
        }    

        .modal-dialog_custom{
            max-width: 800px !important;
            width: 100%;
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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="header-wrap d-flex justify-content-between mb-4">
                    <div class="left-content">
                        <h4 class="header-title"><?php echo e(__('Edit Product')); ?>   </h4>
                    </div>
                    <div class="right-content">
                        <a class="cmnBtn btn_5 btn_bg_info radius-5" href="<?php echo e(route('admin.all.products')); ?>"><?php echo e(__('All Products')); ?></a>
                    </div>
                </div>
                <?php if (isset($component)) { $__componentOriginal4bb59b834d778ff0cb72af5a473e2885 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.validation.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('validation.error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $attributes = $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $component = $__componentOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
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
                                        <?php echo e(__('Product Details')); ?>

                                    </a>
                                    <a class="nav-link  stepIndicator new_stepForm_list__item" id="location-tab"
                                       data-bs-toggle="pill"
                                       href="#location" role="tab"
                                       aria-controls="location"
                                       aria-selected="false">
                                        <span class="new_stepForm_list__item__numb"><b class="numb">2</b></span>
                                        <?php echo e(__('Product Attributes')); ?>

                                    </a>
                                    <a class="nav-link  stepIndicator new_stepForm_list__item"
                                        id="select-car-tab"
                                        data-bs-toggle="pill"
                                        href="#car"
                                        role="tab"
                                        aria-controls="car"
                                        aria-selected="true">
                                        <span class="new_stepForm_list__item__numb"><b class="numb">3</b></span>
                                        <?php echo e(__('Select Car')); ?>

                                    </a>
                                </div>
                                <form action="<?php echo e(route('admin.edit.product', $product->id)); ?>" method="post" enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>
                                    <div  class="add-listing-content-wrapper mt-4">
                                        <div class="tab-content add-listing-content" id="add-listing-tabContent">
                                            <!-- product Info start-->
                                           <?php echo $__env->make('backend.pages.products.admin.edit-product-details', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                            <!-- service Info end-->
                                            <!-- Include start-->
                                            <?php echo $__env->make('backend.pages.products.admin.edit-product-include', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                                            <!-- Include end-->
                                            <!-- Car Select start-->
                                            <?php echo $__env->make('backend.pages.products.admin.edit-product-car', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
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
    <?php if (isset($component)) { $__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.markup','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.markup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75)): ?>
<?php $attributes = $__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75; ?>
<?php unset($__attributesOriginal0a0c44ec0e77c6e781a03c2fda86fc75); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75)): ?>
<?php $component = $__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75; ?>
<?php unset($__componentOriginal0a0c44ec0e77c6e781a03c2fda86fc75); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <?php if (isset($component)) { $__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.media.js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('media.js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e)): ?>
<?php $attributes = $__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e; ?>
<?php unset($__attributesOriginal9c9e2f22010721f1a8a11abf87b15b5e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e)): ?>
<?php $component = $__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e; ?>
<?php unset($__componentOriginal9c9e2f22010721f1a8a11abf87b15b5e); ?>
<?php endif; ?>
    <script src="<?php echo e(asset('assets/frontend/js/multi-step.js')); ?>"></script>
    <?php echo $__env->make('backend.pages.products.admin.product-add-more-option-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <script>
        (function ($) {
            "use strict";
            $(document).ready(function () {

                let visible=5;
                let visible_filter=5;

                 $('body').on('click','#loadMoreCars', function () {
                    let total = $('.car-card').length;

                    $('.car-card.d-none').slice(0, 5).removeClass('d-none');
                    visible += 5;

                    if (visible >= total) {
                        $('#loadMoreCars').hide();
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

                $('#car_brand').select2(
                {
                    dropdownParent: $('#addModal'),
                }
                );
                $('#car_model_value').select2(
                {
                    dropdownParent: $('#addModal'),
                }
                );
                $('#edit_brand_name').select2();
                $('#edit_car_name').select2();

                $(document).on('click', ".removeCarRowBtn", function() {
                    $(this).closest('.service_car').remove();
            });

                // is featured
                $(document).on('click', '.is_featured', function () {
                    $('#is_featured').val($('#is_featured').is(':checked') ? '1' : '');
                });


                //Permalink Code
                let slug = $('.listing_slug').val();
                let url = "<?php echo e(url('/service/')); ?>/" + slug;
                let data = $('#slug_show').text(url).css('color', '#3c3cf7');


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
                    var url = `<?php echo e(url('/service/')); ?>/` + slug;
                    $('#slug_show').text(url);
                    $('.listing_slug').hide();
                });

                $(document).on('change','#category', function() {
                    let category_id = $(this).val();
                    $.ajax({
                        method:'post',
                        url:"<?php echo e(route('get.subcategory')); ?>",
                        data:{category_id:category_id},
                        success:function(res){
                            if(res.status=='success'){
                                let alloptions = "<option value=''><?php echo e(__('Select Sub Category')); ?></option>";
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

                //  sub category and child category
                $(document).on('change','#subcategory', function() {
                    var sub_cat_id = $(this).val();
                    $.ajax({
                        method: 'post',
                        url: "<?php echo e(route('get.subcategory.with.child.category')); ?>",
                        data: {
                            sub_cat_id: sub_cat_id
                        },
                        success: function(res) {

                            if (res.status == 'success') {
                                var alloptions = "<option value=''><?php echo e(__('Select Child Category')); ?></option>";
                                var allList = "<li data-value='' class='option'><?php echo e(__('Select Child Category')); ?></li>";
                                var allChildCategory = res.child_category;

                                $.each(allChildCategory, function(index, value) {
                                    alloptions += "<option value='" + value.id +
                                        "'>" + value.name + "</option>";
                                    allList += "<li class='option' data-value='" + value.id +
                                        "'>" + value.name + "</li>";
                                });

                                $("#child_category").html(alloptions);
                                $(".child_category_wrapper ul.list").html(allList);
                                $(".child_category_wrapper").find(".current").html("Select Child Category");
                            }
                        }
                    });
                });

                // change country and get state
                $(document).on('change','#country_id', function() {
                    let country = $(this).val();
                    $.ajax({
                        method: 'post',
                        url: "<?php echo e(route('au.state.all')); ?>",
                        data: {
                            country: country
                        },
                        success: function(res) {
                            if (res.status == 'success') {
                                let all_options = "<option value=''><?php echo e(__('Select State')); ?></option>";
                                let all_state = res.states;
                                $.each(all_state, function(index, value) {
                                    all_options += "<option value='" + value.id +
                                        "'>" + value.state + "</option>";
                                });
                                $(".get_country_state").html(all_options);
                                $(".state_info").html('');
                                if(all_state.length <= 0){
                                    $(".state_info").html('<span class="text-danger"> <?php echo e(__("No state found for selected country!")); ?> <span>');
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
                        url: "<?php echo e(route('au.city.all')); ?>",
                        data: {
                            state: state
                        },
                        success: function(res) {
                            if (res.status == 'success') {
                                let all_options = "<option value=''><?php echo e(__('Select City')); ?></option>";
                                let all_city = res.cities;
                                $.each(all_city, function(index, value) {
                                    all_options += "<option value='" + value.id +
                                        "'>" + value.city + "</option>";
                                });
                                $(".get_state_city").html(all_options);

                                $(".city_info").html('');
                                if(all_city.length <= 0){
                                    $(".city_info").html('<span class="text-danger"> <?php echo e(__("No city found for selected state!")); ?> <span>');
                                }
                            }
                        }
                    })
                });
                $('#car_brand').on('change',function(){
                    let brand_id = $(this).val();
                    $.ajax({
                        method:'post',
                        url:"<?php echo e(route('get.car_model')); ?>",
                        data:{brand_id:brand_id},
                        success:function(res){
                           
                            if(res.status=='success'){
                                let alloptions = "<option value=''><?php echo e(__('Select car Model')); ?></option>";
                                let allModel = res.data;
                                

                                $.each(allModel,function(index,value){
                                    let car_name=value.name+"-"+value.Year;
                                    alloptions +="<option value='" + value.id + "'data-image='"+value.image+"'data-url='"+value.image_url+"'>" + car_name + "</option>";
                                });
                                $(".car_model").html(alloptions);
                            }
                        }
                       
                    })
                });

                $('#car_model_value').on('change',function(){
                    let car_id = $(this).val();
                    $.ajax({
                        method:'post',
                        url:"<?php echo e(route('get.car_variant')); ?>",
                        data:{car_id:car_id},
                        success:function(res){
                           
                            if(res.status=='success'){
                                let alloptions = "<option value='all'><?php echo e(__('Select All Variant')); ?></option>";
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

                $('#addEditBtn').on('click', function () {
                    
                    $('#addModal').modal('show');
                    $('#isModalOpen').val('true');
                });

                $(document).on('click', '.modal_close', function () {
                    $('#isModalOpen').val('false');
                });

                $('#addEditAllVariant').on('click', function () 
                {
                    let service_id=$("#session_product_id").val();
                    $.ajax({
                                method: 'post',
                                url: "<?php echo e(route('admin.editCarProduct.add')); ?>",
                                data: {
                                    variant_id:'all',
                                    service_id:service_id
                                },
                                success: function(res) 
                                {
                                    if (res.status == 'success') 
                                    {
                                        toastr.success("<?php echo e(__('Success')); ?>");
                                        $("#edit_session_data").html(res.view);
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
                                        toastr.error("<?php echo e(__('An error occurred. Please try again.')); ?>");
                                    }
                                }
                    });    
                });

                $('#editRemoveAllVariant').on('click', function () 
                {
                    $.ajax({
                                method: 'post',
                                url: "<?php echo e(route('admin.allCarProduct.delete')); ?>",
                                success: function(res) 
                                {
                                    if (res.status == 'success') 
                                    {
                                        toastr.success("<?php echo e(__('Success')); ?>");
                                        $("#edit_session_data").html(res.view);
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
                                        toastr.error("An error occurred. Please try again.");
                                    }
                                }
                    });    
                });

                $('#addEditRowBtn').on('click', function () 
                {
           
                    var brand = $('#car_brand').val();
                    var car = $('.car_model').val();
                    var price = $('#price1').val();
                    var discount_price = $('#discount_price1').val();
                    var unit = $('#unit1').val();
                    var duration = $('#duration1').val();
                    var car_variant=$('#car_variant').val();
                    var service_car_image1=$('#service_car_image1').val();
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
                        url: "<?php echo e(route('admin.editCarProduct.add')); ?>",
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
                                toastr.success('Success');
                                $("#edit_session_data").html(res.view);
                                $("#car_brand").val("").trigger("change");
                                $("#car_model_value").val("").trigger("change");
                                $('#car_variant').val('');
                                $("#price1").val('');
                                $("#discount_price1").val('');
                                $("#unit1").val('');
                                $("#duration1").val('');
                                $("#duration_checkbox").prop("checked", false);
                                $("#car_image").attr("src", "");
                                $('#service_car_image1').attr("src","");
                                $("#service_product_edit_img .thumbnail img").attr("src", "<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>");
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
                                toastr.error("An error occurred. Please try again.");
                            }
                        }
                    });
                });

                // Remove row when clicked
                $(document).on('click', '.removeRowBtn', function () {
                    let carId = $(this).data('id');
                    $.ajax({
                        method: 'post',
                        url: `/admin/carProduct/delete_editCar/${carId}`,
                        success: function(res) 
                        {
                            if (res.status =='success') 
                            {
                                $("#edit_session_data").html(res.view);
                                $("#edit_brand_name").val("");
                            }
                        }
                    });

                    
                });

                $('#edit_filterBtn').on('click', function () {
                    let brand_id = $('#edit_brand_name').val();
                    let car_id = $('#edit_car_name').val();
                
                
                    $.ajax({
                        url: "<?php echo e(route('admin.editCarProduct.filter')); ?>",
                        method: 'GET',
                        data: { brand_id: brand_id,car_id: car_id },
                        success: function (res) {
                            if (res.status == 'success') {
                                if(res.cars=="all")
                                {
                                    $('.session_edit_product_car').removeClass('d-none');
                                    $('#search_edit_product_car_result').empty();
                                    $('#loadMoreCars').removeClass('d-none');
                                }
                                else
                                {
                                        $('#search_edit_product_car_result').empty(); // Clear previous results
                                        $('.session_edit_product_car').addClass('d-none');
                                        let length=0;
                                        visible_filter=5;

                                        console.log(res.cars);
                                        
                                        $.each(res.cars, function (key, car) {
                                            length=length+1;
                                            let hiddenElement=length > 5 ? 'd-none' :'';
                                            let card = `
                                                <div class="card mt-2 mb-4 w-100 car-card-filter ${hiddenElement}" data-index="${key}"  id="session_edit_product_car_card">
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
                                                                    <label class="form__input__single__label"><?php echo e(__('Discount Price')); ?> <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form__control radius-5"  value="${car.discount_price ?? 'N/A' }" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">    
                                                                <div class="form__input__single">
                                                                    <label class="form__input__single__label"><?php echo e(__('Unit')); ?> <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form__control radius-5" value="${car.unit ?? 0 }" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="col-3"> 
                                                                <div class="form__input__single">
                                                                    <label class="form__input__single__label"><?php echo e(__('Duration')); ?> <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form__control radius-5" value="${car.duration ?? 0 }" disabled>
                                                                </div>
                                                            </div> 
                                                            <div class="col-3">   
                                                                <div class="form__input__single">
                                                                    <label class="form__input__single__label"><?php echo e(__('Use Default Price')); ?> <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form__control radius-5"  value="${car.flag }" disabled>
                                                                </div>
                                                            </div>  
                                                        </div>   

                                                            <!-- Second row -->
                                                        <div class="row">    
                                                        
                                                        
                                                            <div class="col-3">   
                                                                <div class="form__input__single">
                                                                    <label class="form__input__single__label"><?php echo e(__('Image')); ?></label>
                                                                    <div>
                                                                    <img src="${car.imageSrc}" alt="" class="img-responsive img-centered">
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>  
                                                            
                                                        
                                                        </div>
                                                        <button type="button" class="btn btn-danger removeRowBtn mt-3" data-id="${key}">Remove</button>
                                                    </div>
                                                </div>`;
                                            
                                            $('#search_edit_product_car_result').append(card);
                                        });
                                        $('#loadMoreCars').addClass('d-none');
                                       
                                         if(length>5)
                                        {
                                           
                                            let loadMore=` <div class="text-center mt-3">
                                                <button type="button" class="btn btn-primary" id="loadMoreCarsForProductFilter"><?php echo e(__('Load More')); ?></button>
                                            </div>`;
                                            $('#search_edit_product_car_result').append(loadMore);
                                            
                                        }
                                }    
                            }
                        }
                    });
                });

            });
        })(jQuery)
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/products/admin/edit-product.blade.php ENDPATH**/ ?>