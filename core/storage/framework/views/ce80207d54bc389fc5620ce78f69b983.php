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

                 $('body').on('click','#loadMoreCarsForServiceFilter', function () {
                    let total = $('.car-card-filter').length;
                    $('.car-card-filter.d-none').slice(0, 5).removeClass('d-none');
                    visible_filter += 5;

                    if (visible_filter >= total) {
                        $('#loadMoreCarsForServiceFilter').hide();
                    }
                });


                // const params = new URLSearchParams(window.location.search);

                // // Get a specific parameter by name
                // const tab = params.get('tabs');
                // console.log(tab,'tab')
                // if(tab==3)
                // {
                //     $("#select-car-tab").trigger('click')
                //     var triggerEl = document.querySelector('#select-car-tab'); // or any tab ID
                //     var tabEl = new bootstrap.Tab(triggerEl);
                //     tabEl.show();
                // }


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
                    let service_id=$("#session_service_id").val();
                    $.ajax({
                                method: 'post',
                                url: "<?php echo e(route('admin.editCarService.add')); ?>",
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
                                url: "<?php echo e(route('admin.allCarService.delete')); ?>",
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

                $('#addRowBtn').on('click', function () 
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
                        url: "<?php echo e(route('admin.editCarService.add')); ?>",
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
                                $("#service_product_edit_img .thumbnail img").attr("src", "<?php echo e(asset('assets/frontend/img/gallery/single-image-upload.png')); ?>");
                                $('#service_car_image1').attr("src","");
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
                                toastr.error("<?php echo e(__('An error occurred. Please try again.')); ?>");
                            }
                        }
                    });
                });

                // Remove row when clicked
                $(document).on('click', '.removeRowBtn', function () {
                    let carId = $(this).data('id');
                   
                    $.ajax({
                        method: 'post',
                        url: `/admin/carService/delete_editCar/${carId}`,
                        success: function(res) 
                        {
                            if (res.status =='success') 
                            {
                                $("#edit_session_data").html(res.view);
                            }
                        }
                    });

                    
                });



                $('#edit_filterBtn').on('click', function () {
                    let brand_id = $('#edit_brand_name').val();
                    let car_id = $('#edit_car_name').val();
                
                    $.ajax({
                        url: "<?php echo e(route('admin.editCarService.filter')); ?>",
                        method: 'GET',
                        data: { brand_id: brand_id, car_id:car_id},
                        success: function (res) {
                            if (res.status == 'success') {
                                if(res.cars=="all")
                                {
                                    $('.session_edit_service_car').removeClass('d-none');
                                    $('#search_edit_service_car_result').empty(); // Clear previous results
                                    $('#loadMoreCars').removeClass('d-none');
                                }
                                else
                                {
                                        $('#search_edit_service_car_result').empty(); // Clear previous results
                                        $('.session_edit_service_car').addClass('d-none');

                                        let length=0;
                                        visible_filter=5;
                                        
                                        $.each(res.cars, function (key, car) {
                                            length=length+1;
                                            let hiddenElement=length > 5 ? 'd-none' :'';
                                            let card = `
                                                <div class="card mt-2 mb-4 w-100 car-card-filter ${hiddenElement}" data-index="${key}" id="session_edit_service_car_card">
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
                                            
                                            $('#search_edit_service_car_result').append(card);
                                        });
                                         $('#loadMoreCars').addClass('d-none');
                                         if(length>5)
                                        {
                                            let loadMore=` <div class="text-center mt-3">
                                                <button type="button" class="btn btn-primary" id="loadMoreCarsForServiceFilter"><?php echo e(__('Load More')); ?></button>
                                            </div>`;
                                            $('#search_edit_service_car_result').append(loadMore);
                                        }
                                }    
                            }
                        }
                   });
               });

            });
        })(jQuery)
    </script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/services/admin/edit-service-js.blade.php ENDPATH**/ ?>