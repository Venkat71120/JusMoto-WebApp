<div id="popupContainer">
    <!-- Popup Overlay -->
    <div class="popup-overlay" id="popupOverlay"></div>

    <form action="<?php echo e(route('client.car.select')); ?>" method="POST" id="carSelectForm">
        <?php echo csrf_field(); ?>

        <!-- STEP 1: Select Brand -->
        <div class="popup containers shadow-lg rounded-2" id="stepOne">
            <div class="head position-relative">

                <h5 class="fs-md"><?php echo e(__('Select Your Brand')); ?></h5>
            </div>
            <div class="model-box">
                <button type="button" class="border-0 bg-transparent closePopup btnPosition">
                    <span class="slider-btn"><i class="icon-base ti tabler-x icon-30px"></i></span>
                </button>
                <div class="models-grid" id="brandList">
                    <div class="loading text-center p-4"><?php echo e(__('Loading brands...')); ?></div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button type="button" class="cmn-btn black-btn continue-btn"><?php echo e(__('Continue')); ?></button>
            </div>
            <input type="hidden" name="brand_id" id="selectedBrand">
        </div>

        <!-- STEP 2: Select Car -->
        <div class="popup containers shadow-lg rounded-2" id="stepTwo">
            <div class="head mb-3">
                <h1 class="title"><?php echo e(__('Select Your Car')); ?></h1>
            </div>
            <div class="model-box">
                <button type="button" class="border-0 bg-transparent back-btn btnPosition" data-prev="stepOne">
                    <span class="slider-btn"><i class="icon-base ti tabler-arrow-left icon-30px"></i></span>
                </button>
                <div class="models-grid" id="carList">
                    <div class="loading text-center p-4"><?php echo e(__('Select brand first')); ?></div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button type="button" class="cmn-btn black-btn continue-btn"><?php echo e(__('Continue')); ?></button>
            </div>
            <input type="hidden" name="car_id" id="selectedCar">
        </div>

        <!-- STEP 3: Selected Car + Variants -->
        <div class="popup containers shadow-lg rounded-2" id="stepThree">
            <div class="head">
                <button type="button" class="border-0 bg-transparent back-btn btnPositions" data-prev="stepTwo">
                    <span class="slider-btn"><i class="icon-base ti tabler-arrow-left icon-30px"></i></span>
                </button>
                <h1 class="title"><?php echo e(__('My Car')); ?></h1>
            </div>

            <div class="model-car">
                <div class="selected-car-info text-center mb-3">
                    <div class="car-box">
                        <div class="car-change d-flex justify-between align-items-center">
                            <h4 class="fs_md fw_semibold red-text">Change a car</h4>
                            <button type="button" class="cngBtn">
                                <i class="icon-base ti tabler-edit icon-30px selected"></i>
                            </button>
                        </div>
                        <div class="show-car">
                            <div class="showImg" id="selectedCarImgContainer"></div>
                            <span class="subtitle-2 black-text fw_semibold" id="selectedCarName"></span>
                        </div>
                    </div>
                </div>

                <div class="show-car-text">
                    <h4 class="fs-md fw_semibold"><?php echo e(__('Car Transmission Type')); ?></h4>
                    <div class="service-options" id="engineTypeList"></div>
                </div>

                <div class="show-car-text">
                    <h4><?php echo e(__('Car Fuel Type')); ?></h4>
                    <div class="d-flex align-items-center gap-4" id="fuelTypeList"></div>
                </div>
                <div class="show-car-text">
                    <h4 class="fs-md fw_semibold"><?php echo e(__('Registration Number')); ?></h4>
                    <div class="form-group">
                        <input type="text" name="registration_number" id="registrationNumber" class="form-control"
                            placeholder="<?php echo e(__('Enter your car registration number')); ?>" maxlength="20">
                        <small class="text-muted"><?php echo e(__('e.g., TN01AB1234')); ?></small>
                    </div>
                </div>
            </div>

            <div class="text-center mt-3">
                <button type="submit" class="cmn-btn black-btn"><?php echo e(__('Submit')); ?></button>
            </div>

            <input type="hidden" name="selected_fuel_type" id="selectedFuelType">
            <input type="hidden" name="selected_engine_type" id="selectedEngineType">
        </div>
    </form>

    <script>
        window.selectedCarFromBackend = <?php echo json_encode($selectedCar ?? null); ?>;
      $('#carSelectForm').on('submit', function (e) {

    e.preventDefault();

let regNumber = $('#registrationNumber').val().trim();

// Check empty
if (!regNumber) {
    toastr.error('Please enter registration number.');
    return;
}

// Indian vehicle format validation
let vehicleRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;

if (!vehicleRegex.test(regNumber)) {
    toastr.error('Enter valid registration number (Example: TN01AB1234)');
    return;
}


    $.ajax({
        url: $(this).attr('action'),
        type: 'POST',
        data: $(this).serialize(),
        success: function () {
            toastr.success('Your car has been selected successfully.');
            location.reload();
        },
        error: function (xhr) {
            toastr.error(xhr.responseJSON.message);
        }
    });

});
// Auto uppercase registration number while typing
$('#registrationNumber').on('input', function () {

    let value = $(this).val();

    // Remove spaces + convert to uppercase
    value = value.replace(/\s+/g, '').toUpperCase();

    $(this).val(value);

});

$(document).ready(function () {

    if (window.selectedCarFromBackend) {

        // Auto fill registration number
        if (window.selectedCarFromBackend.registration_number) {
            $('#registrationNumber').val(
                window.selectedCarFromBackend.registration_number
            );
        }

    }

});

    </script>
</div><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/myCar/setting.blade.php ENDPATH**/ ?>