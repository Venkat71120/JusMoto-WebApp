$(document).ready(() => {
  const popupContainer = $('#popupContainer');
  const popupUrl = popupContainer.data('popup-url');

  popupContainer.load(popupUrl, function () {
    const overlay = $('#popupOverlay');
    const stepOne = $('#stepOne');
    const stepTwo = $('#stepTwo');
    const stepThree = $('#stepThree');

    let selectedBrandId = null;
    let selectedCarData = null;
    let selectedEngineType = null;
    let selectedFuelType = null;


    // SAVE BACKEND ORIGINAL SELECTIONS
    const backendData =
        window.selectedCarFromBackend && window.selectedCarFromBackend.car
            ? {
              brand: window.selectedCarFromBackend.car.brand_id,
              car: {
                id: window.selectedCarFromBackend.car.id,
                name: window.selectedCarFromBackend.car.name,
                image_html: window.selectedCarFromBackend.car.image_html,
                brand_id: window.selectedCarFromBackend.car.brand_id
              },
              engine: window.selectedCarFromBackend.engine_type_id,
              fuel: window.selectedCarFromBackend.fual_type_id
            }
            : null;

    // APPLY BACKEND VALUES
    if (backendData) {
      selectedBrandId = backendData.brand;
      selectedCarData = backendData.car;
      selectedEngineType = backendData.engine;
      selectedFuelType = backendData.fuel;

      $('#selectedBrand').val(selectedBrandId);
      $('#selectedCar').val(selectedCarData.id);
      $('#selectedEngineType').val(selectedEngineType);
      $('#selectedFuelType').val(selectedFuelType);
    }

    // LOAD BRANDS
    function loadBrands(preselectedBrandId = null) {
      $.ajax({
        url: '/brands',
        type: 'GET',
        success: function (brands) {
          const container = $('#brandList').empty();

          brands.forEach(b => {
            container.append(`
                <div class="model-card" data-id="${b.id}">
                    <div class="text-center brand_name">${b.image_html}</div>
                </div>
            `);
          });

          if (preselectedBrandId) {
            $(`#stepOne .model-card[data-id="${preselectedBrandId}"]`)
                .addClass('selected');
          }
        }
      });
    }

    loadBrands(selectedBrandId);


    // BRAND SELECTION — RESET CAR + ENGINE + FUEL
    $(document).on('click', '#stepOne .model-card', function () {
      const clickedBrandId = $(this).data('id');

      // Only reset if user selected a different brand
      if (selectedBrandId !== clickedBrandId) {
        selectedCarData = null;
        selectedEngineType = null;
        selectedFuelType = null;

        $('#selectedCar,#selectedEngineType,#selectedFuelType').val('');
        $('#carList,#engineTypeList,#fuelTypeList').empty();
      }

      $('#stepOne .model-card').removeClass('selected');
      $(this).addClass('selected');

      selectedBrandId = clickedBrandId;
      $('#selectedBrand').val(selectedBrandId);
    });

    $(document).on('click', '#stepOne .continue-btn', function () {
      if (!selectedBrandId) return toastr.error('Please select a brand!');
      showStepTwo(selectedCarData ?? null);
    });

    // SHOW CAR LIST
    function showStepTwo(preselectedCar = null) {
      $.ajax({
        url: '/cars',
        type: 'POST',
        data: {
          _token: $('meta[name="csrf-token"]').attr('content'),
          brand_id: selectedBrandId
        },
        success: function (cars) {

          const container = $('#carList').empty();

          if (!cars || cars.length === 0) {

            container.html(`
                <div class="text-center p-4" style="width:100%">
                    <strong>No car available for this brand.</strong>
                </div>
            `);
            stepOne.removeClass('show');
            stepThree.removeClass('show');
            stepTwo.addClass('show');

            return;
          }

          cars.forEach(c => {
            container.append(`
                <div class="model-card" data-id="${c.id}" data-name="${c.name}" data-image-html='${c.image_html || ''}'>
                    <div class="text-center car_name">
                        ${c.image_html || ''}<span>${c.name}</span>
                    </div>
                </div>
            `);
          });

          stepOne.removeClass('show');
          stepThree.removeClass('show');
          stepTwo.addClass('show');


          if (preselectedCar) {
            $(`#stepTwo .model-card[data-id="${preselectedCar.id}"]`)
                .addClass('selected');
          }
        }
      });
    }

    // CAR SELECTION – RESET ENGINE + FUEL
    $(document).on('click', '#stepTwo .model-card', function () {

      selectedEngineType = null;
      selectedFuelType = null;

      $('#selectedEngineType,#selectedFuelType').val('');
      $('#engineTypeList,#fuelTypeList').empty();

      $('#stepTwo .model-card').removeClass('selected');
      $(this).addClass('selected');

      selectedCarData = {
        id: $(this).data('id'),
        name: $(this).data('name'),
        image_html: $(this).data('image-html')
      };

      $('#selectedCar').val(selectedCarData.id);
    });

    $(document).on('click', '#stepTwo .continue-btn', function () {
      if (!selectedCarData) return toastr.error('Please select a car!');
      showStepThree(selectedCarData);
    });

    // SHOW STEP 3 (ENGINE + FUEL)
    function showStepThree(car) {
      $('#selectedCarImgContainer').html(car.image_html);
      $('#selectedCarName').text(car.name);

      $.ajax({
        url: '/engine-types',
        type: 'POST',
        data: { _token: $('meta[name="csrf-token"]').attr('content'), car_id: car.id },
        success: function (engines) {

          let html = '<div class="service-options">';

          engines.forEach(e => {
            const checked = selectedEngineType == e.id ? 'checked' : '';
            html += `
                            <div class="service-option">
                                <input type="radio" name="engine_type" id="engine_${e.id}" value="${e.id}" ${checked}>
                                <label for="engine_${e.id}">
                                    <div class="radio-custom"></div>
                                    <span>${e.name}</span>
                                </label>
                            </div>
                        `;
          });

          html += '</div>';
          $('#engineTypeList').html(html);

          // Auto-load fuel for pre-selected engine
          $('input[name="engine_type"]:checked').trigger('change');

          stepTwo.removeClass('show');
          stepThree.addClass('show');
        }
      });
    }


    // ENGINE SELECTION — RESET FUEL

    $(document).on('change', 'input[name="engine_type"]', function () {
      selectedFuelType = null;
      $('#selectedFuelType').val('');
      $('#fuelTypeList').empty();

      selectedEngineType = $(this).val();
      $('#selectedEngineType').val(selectedEngineType);

      $.ajax({
        url: '/fuel-by-car-engine',
        type: 'POST',
        data: {
          _token: $('meta[name="csrf-token"]').attr('content'),
          car_id: selectedCarData.id,
          engine_type_id: selectedEngineType
        },
        success: function (fuels) {

          let html = '';

          fuels.forEach(f => {
            html += `
                  <div class="oil-box model-card" data-id="${f.id}">
                      <div class="fuel_type_image">${f.image_html || ''}</div>
                      <span>${f.name}</span>
                  </div>
              `;
          });

          $('#fuelTypeList').html(html);
          // If user is opening popup first time → use backend data
          if (backendData && selectedEngineType == backendData.engine) {
            selectedFuelType = backendData.fuel;

            $(`#fuelTypeList .model-card[data-id="${selectedFuelType}"]`)
                .addClass('selected');
          }

        }
      });
    });

    // FUEL SELECTION
    $(document).on('click', '#fuelTypeList .model-card', function () {
      $('#fuelTypeList .model-card').removeClass('selected');
      $(this).addClass('selected');

      selectedFuelType = $(this).data('id');
      $('#selectedFuelType').val(selectedFuelType);
    });


    // BACK BUTTON (NO RESET)
    $(document).on('click', '.back-btn', function () {
      const prev = $(this).data('prev');

      stepOne.add(stepTwo).add(stepThree).removeClass('show');

      if (prev === 'stepTwo') {
        showStepTwo(selectedCarData);
      } else if (prev === 'stepOne') {
        stepOne.addClass('show');
      }
    });

    // EDIT BUTTON – NO RESET
    $(document).on('click', '.cngBtn', function () {
      if (selectedCarData) {
        showStepTwo(selectedCarData);
      } else {
        stepThree.removeClass('show');
        stepOne.addClass('show');
      }
    });

    // RESTORE BACKEND ON CLOSE POPUP
    function restoreBackendSelections() {
      if (!backendData) {
        selectedBrandId = null;
        selectedCarData = null;
        selectedEngineType = null;
        selectedFuelType = null;
        $('#selectedBrand,#selectedCar,#selectedEngineType,#selectedFuelType').val('');
        return;
      }

      selectedBrandId = backendData.brand;
      selectedCarData = backendData.car;
      selectedEngineType = backendData.engine;
      selectedFuelType = backendData.fuel;

      $('#selectedBrand').val(selectedBrandId);
      $('#selectedCar').val(selectedCarData.id);
      $('#selectedEngineType').val(selectedEngineType);
      $('#selectedFuelType').val(selectedFuelType);
    }

    $(document).on('click', '.closePopup', function () {
      overlay.removeClass('show');
      stepOne.add(stepTwo).add(stepThree).removeClass('show');
      restoreBackendSelections();
    });

    overlay.on('click', e => {
      if (e.target === overlay[0]) {
        overlay.removeClass('show');
        stepOne.add(stepTwo).add(stepThree).removeClass('show');
        restoreBackendSelections();
      }
    });

    // OPEN POPUP
    $(document).on('click', '.openPop', function (e) {
      e.preventDefault();
      overlay.addClass('show');

      if (selectedCarData) showStepThree(selectedCarData);
      else stepOne.addClass('show');
    });
  });
});
