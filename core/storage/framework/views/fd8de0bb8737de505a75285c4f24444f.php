<!-- Car Edit Modal -->
<div class="modal fade" id="carEditModal" tabindex="-1" aria-labelledby="carEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <form action="<?php echo e(route('client.car.update')); ?>" method="POST" id="carEditForm">
                <?php echo csrf_field(); ?>
                <?php echo method_field('PUT'); ?>
                <input type="hidden" name="car_record_id" id="editCarRecordId">
                
                <div class="modal-header">
                    <h5 class="modal-title" id="carEditModalLabel"><?php echo e(__('Edit Car Details')); ?></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <!-- Current Car Display -->
                    <div class="selected-car-display mb-4 p-3 bg-light rounded">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <div id="editCarImage" class="car-image-preview">
                                    <!-- Car image will be loaded here -->
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h6 class="mb-2"><?php echo e(__('Current Car')); ?></h6>
                                <p class="mb-1"><strong><?php echo e(__('Brand:')); ?></strong> <span id="editCarBrand"></span></p>
                                <p class="mb-0"><strong><?php echo e(__('Model:')); ?></strong> <span id="editCarName"></span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Change Car Option -->
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="changeCarCheckbox">
                        <label class="form-check-label" for="changeCarCheckbox">
                            <?php echo e(__('I want to change my car model')); ?>

                        </label>
                    </div>

                    <!-- Car Selection Section (Hidden by default) -->
                    <div id="carSelectionSection" style="display: none;">
                        <!-- Brand Selection -->
                        <div class="mb-3">
                            <label class="form-label"><?php echo e(__('Select Brand')); ?></label>
                            <select name="brand_id" id="editBrandSelect" class="form-select">
                                <option value=""><?php echo e(__('Choose a brand')); ?></option>
                            </select>
                        </div>

                        <!-- Car Model Selection -->
                        <div class="mb-3">
                            <label class="form-label"><?php echo e(__('Select Car Model')); ?></label>
                            <select name="car_id" id="editCarSelect" class="form-select" disabled>
                                <option value=""><?php echo e(__('First select a brand')); ?></option>
                            </select>
                        </div>
                    </div>

                    <!-- Engine Type Section -->
                    <div class="mb-3">
                        <label class="form-label"><?php echo e(__('Car Transmission Type')); ?></label>
                        <div id="editEngineTypeList" class="service-options">
                            <!-- Engine types will be loaded here -->
                        </div>
                    </div>

                    <!-- Fuel Type Section -->
                    <div class="mb-3">
                        <label class="form-label"><?php echo e(__('Car Fuel Type')); ?></label>
                        <div id="editFuelTypeList" class="d-flex align-items-center gap-4">
                            <!-- Fuel types will be loaded here -->
                        </div>
                    </div>

                    <!-- Registration Number -->
                    <div class="mb-3">
                        <label class="form-label"><?php echo e(__('Registration Number')); ?></label>
                        <input type="text" 
                               name="registration_number" 
                               id="editRegistrationNumber" 
                               class="form-control"
                               placeholder="<?php echo e(__('Enter your car registration number')); ?>" 
                               maxlength="20">
                        <small class="text-muted"><?php echo e(__('e.g., TN01AB1234')); ?></small>
                    </div>

                    <input type="hidden" name="selected_fuel_type" id="editSelectedFuelType">
                    <input type="hidden" name="selected_engine_type" id="editSelectedEngineType">
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?php echo e(__('Cancel')); ?></button>
                    <button type="submit" class="cmn-btn black-btn"><?php echo e(__('Update Car')); ?></button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
// Global functions for car edit modal
window.loadBrandsForEdit = function() {
    $.ajax({
        url: '/brands',
        type: 'GET',
        success: function(response) {
            let options = '<option value=""><?php echo e(__("Choose a brand")); ?></option>';
            response.forEach(function(brand) {
                options += `<option value="${brand.id}">${brand.name}</option>`;
            });
            $('#editBrandSelect').html(options);
        },
        error: function() {
            toastr.error('Failed to load brands');
        }
    });
};

window.loadEngineTypesForEdit = function(carId) {
    $.ajax({
        url: '/engine-types',
        type: 'POST',
        data: {
            _token: '<?php echo e(csrf_token()); ?>',
            car_id: carId
        },
        success: function(response) {
            let html = '';
            response.forEach(function(engine) {
                html += `
                    <div class="form-check">
                        <input class="form-check-input edit-engine-type" 
                               type="radio" 
                               name="engine_type_radio" 
                               value="${engine.id}" 
                               id="editEngine${engine.id}">
                        <label class="form-check-label" for="editEngine${engine.id}">
                            ${engine.name}
                        </label>
                    </div>
                `;
            });
            $('#editEngineTypeList').html(html);

            // Handle engine type selection
            $('.edit-engine-type').on('change', function() {
                const engineId = $(this).val();
                $('#editSelectedEngineType').val(engineId);
                window.loadFuelTypesForEdit(carId, engineId);
            });
        },
        error: function() {
            toastr.error('Failed to load engine types');
        }
    });
};

window.loadFuelTypesForEdit = function(carId, engineId) {
    $.ajax({
        url: '/fuel-by-car-engine',
        type: 'POST',
        data: {
            _token: '<?php echo e(csrf_token()); ?>',
            car_id: carId,
            engine_type_id: engineId
        },
        success: function(response) {
            let html = '';
            response.forEach(function(fuel) {
                html += `
                    <div class="form-check">
                        <input class="form-check-input edit-fuel-type" 
                               type="radio" 
                               name="fuel_type_radio" 
                               value="${fuel.id}" 
                               id="editFuel${fuel.id}">
                        <label class="form-check-label" for="editFuel${fuel.id}">
                            ${fuel.name}
                        </label>
                    </div>
                `;
            });
            $('#editFuelTypeList').html(html);

            // Handle fuel type selection
            $('.edit-fuel-type').on('change', function() {
                $('#editSelectedFuelType').val($(this).val());
            });
        },
        error: function() {
            toastr.error('Failed to load fuel types');
        }
    });
};

// Function to open edit modal with car data
window.openCarEditModal = function(carData) {
    // Populate current car info
    $('#editCarRecordId').val(carData.id);
    $('#editCarBrand').text(carData.brand_name);
    $('#editCarName').text(carData.car_name);
    $('#editCarImage').html(carData.car_image_html);
    $('#editRegistrationNumber').val(carData.registration_number);

    // Reset form
    $('#changeCarCheckbox').prop('checked', false);
    $('#carSelectionSection').hide();
    
    // Load engine types for current car
    window.loadEngineTypesForEdit(carData.car_id);
    
    // Set current selections
    $('#editSelectedEngineType').val(carData.engine_type_id);
    $('#editSelectedFuelType').val(carData.fuel_type_id);

    // Open modal
    $('#carEditModal').modal('show');
};

// Document ready events
$(document).ready(function() {
    // Auto uppercase registration number while typing
    $('#editRegistrationNumber').on('input', function () {
        let value = $(this).val();
        value = value.replace(/\s+/g, '').toUpperCase();
        $(this).val(value);
    });

    // Toggle car selection section
    $('#changeCarCheckbox').on('change', function() {
        if ($(this).is(':checked')) {
            $('#carSelectionSection').slideDown();
            window.loadBrandsForEdit();
        } else {
            $('#carSelectionSection').slideUp();
            $('#editBrandSelect').val('');
            $('#editCarSelect').val('').prop('disabled', true);
        }
    });

    // Load cars when brand is selected
    $('#editBrandSelect').on('change', function() {
        const brandId = $(this).val();
        if (brandId) {
            $.ajax({
                url: '/cars',
                type: 'POST',
                data: {
                    _token: '<?php echo e(csrf_token()); ?>',
                    brand_id: brandId
                },
                success: function(response) {
                    let options = '<option value=""><?php echo e(__("Choose a car model")); ?></option>';
                    response.forEach(function(car) {
                        options += `<option value="${car.id}">${car.name}</option>`;
                    });
                    $('#editCarSelect').html(options).prop('disabled', false);
                },
                error: function() {
                    toastr.error('Failed to load cars');
                }
            });
        } else {
            $('#editCarSelect').val('').prop('disabled', true);
        }
    });

    // Load engine types when car is selected
    $('#editCarSelect').on('change', function() {
        const carId = $(this).val();
        if (carId) {
            window.loadEngineTypesForEdit(carId);
        }
    });

    // Form submission
    $('#carEditForm').on('submit', function(e) {
        e.preventDefault();

        let regNumber = $('#editRegistrationNumber').val().trim();

        // Validation
        if (!regNumber) {
            toastr.error('Please enter registration number.');
            return;
        }

        let vehicleRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;
        if (!vehicleRegex.test(regNumber)) {
            toastr.error('Enter valid registration number (Example: TN01AB1234)');
            return;
        }

        // If changing car, validate car selection
        if ($('#changeCarCheckbox').is(':checked')) {
            if (!$('#editCarSelect').val()) {
                toastr.error('Please select a car model');
                return;
            }
        }

        if (!$('#editSelectedEngineType').val()) {
            toastr.error('Please select transmission type');
            return;
        }

        if (!$('#editSelectedFuelType').val()) {
            toastr.error('Please select fuel type');
            return;
        }

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                toastr.success('Car updated successfully');
                $('#carEditModal').modal('hide');
                location.reload();
            },
            error: function(xhr) {
                toastr.error(xhr.responseJSON?.message || 'Failed to update car');
            }
        });
    });
});
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/myCar/car-edit-modal.blade.php ENDPATH**/ ?>