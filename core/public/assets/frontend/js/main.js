
(function ($) {
  ('use strict');
  $(document).ready(function () {
    // let fvt_icon = document.querySelectorAll('.fvt-icon');
    // // querySelectorAll always returns a NodeList. Check length (and truthiness)
    // if (fvt_icon && fvt_icon.length > 0) {
    //   fvt_icon.forEach(icon => {
    //     icon.addEventListener('click', function () {
    //       if (icon.classList.contains('selected')) {
    //         icon.classList.remove('selected');
    //       } else {
    //         icon.classList.add('selected');
    //       }
    //     });
    //   });
    // }


    $('.pass_eye_btn').on('click', function () {
      const input = $(this).siblings('input');
      const eye = $(this).find('.tabler-eye');
      const eyeOff = $(this).find('.tabler-eye-off');

      if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        eyeOff.addClass('d-none');
        eye.removeClass('d-none');
      } else {
        input.attr('type', 'password');
        eyeOff.removeClass('d-none');
        eye.addClass('d-none');
      }
    });

    /*-----------------------------------
          Custom budget selector
      -------------------------------------*/

    document.querySelectorAll('.budget-filter-wraper').forEach(wrapper => {
      const input = wrapper.querySelector('.custom-selector');
      const dropdown = wrapper.querySelector('.custom-selector-option');
      const minInput = wrapper.querySelector('.min-input');
      const maxInput = wrapper.querySelector('.max-input');

      // Toggle dropdown
      input.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });

      // Prevent non-numeric and negative input
      function sanitizeInput(inputField) {
        inputField.value = inputField.value.replace(/[^\d]/g, '');
      }

      // Update input field with formatted min/max
      function updateBudgetValue() {
        sanitizeInput(minInput);
        sanitizeInput(maxInput);

        const min = minInput.value.trim();
        const max = maxInput.value.trim();
        //
        // if (min && max && Number(min) > Number(max)) {
        //     maxInput.value = min;
        // } else if (max && min && Number(max) < Number(min)) {
        //     minInput.value = max;
        // }

        const formattedMin = minInput.value || '0';
        const formattedMax = maxInput.value || '∞';

        if (min || max) {
          input.value = `Budget: ${formattedMin} - ${formattedMax}`;
        } else {
          input.value = '';
          input.placeholder = 'Budget';
        }
      }

      minInput.addEventListener('input', updateBudgetValue);
      maxInput.addEventListener('input', updateBudgetValue);

      // Close dropdown when clicking outside
      document.addEventListener('click', function (e) {
        if (!wrapper.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    });
    /*-----------------------------------
            global slick slicer control
        -----------------------------------*/
    var globalSlickInit = $('.global-slick-init');
    if (globalSlickInit.length > 0) {
      // have to check slider item
      $.each(globalSlickInit, function (index, value) {
        if ($(this).children('div').length > 1) {
          // configure slider settings object
          var sliderSettings = {};
          var allData = $(this).data();
          var infinite =
            typeof allData.infinite == 'undefined' ? false : allData.infinite;
          var arrows =
            typeof allData.arrows == 'undefined' ? false : allData.arrows;
          var autoplay =
            typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
          var focusOnSelect =
            typeof allData.focusonselect == 'undefined'
              ? false
              : allData.focusonselect;
          var swipeToSlide =
            typeof allData.swipetoslide == 'undefined'
              ? false
              : allData.swipetoslide;
          var slidesToShow =
            typeof allData.slidestoshow == 'undefined'
              ? 1
              : allData.slidestoshow;
          var slidesToScroll =
            typeof allData.slidestoscroll == 'undefined'
              ? 1
              : allData.slidestoscroll;
          var speed =
            typeof allData.speed == 'undefined' ? '500' : allData.speed;
          var dots = typeof allData.dots == 'undefined' ? false : allData.dots;
          var cssEase =
            typeof allData.cssease == 'undefined' ? 'linear' : allData.cssease;
          var prevArrow =
            typeof allData.prevarrow == 'undefined' ? '' : allData.prevarrow;
          var nextArrow =
            typeof allData.nextarrow == 'undefined' ? '' : allData.nextarrow;
          var centerMode =
            typeof allData.centermode == 'undefined'
              ? false
              : allData.centermode;
          var centerPadding =
            typeof allData.centerpadding == 'undefined'
              ? false
              : allData.centerpadding;
          var rows =
            typeof allData.rows == 'undefined' ? 1 : parseInt(allData.rows);
          var autoplay =
            typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
          var autoplaySpeed =
            typeof allData.autoplayspeed == 'undefined'
              ? 2000
              : parseInt(allData.autoplayspeed);
          var lazyLoad =
            typeof allData.lazyload == 'undefined' ? false : allData.lazyload; // have to remove it from settings object if it undefined
          var appendDots =
            typeof allData.appenddots == 'undefined'
              ? false
              : allData.appenddots;
          var appendArrows =
            typeof allData.appendarrows == 'undefined'
              ? false
              : allData.appendarrows;
          var asNavFor =
            typeof allData.asnavfor == 'undefined' ? false : allData.asnavfor;
          var verticalSwiping =
            typeof allData.verticalswiping == 'undefined'
              ? false
              : allData.verticalswiping;
          var vertical =
            typeof allData.vertical == 'undefined' ? false : allData.vertical;
          var fade = typeof allData.fade == 'undefined' ? false : allData.fade;
          var rtl = typeof allData.rtl == 'undefined' ? false : allData.rtl;
          var responsive =
            typeof $(this).data('responsive') == 'undefined'
              ? false
              : $(this).data('responsive');

          //slider settings object setup
          sliderSettings.infinite = infinite;
          sliderSettings.arrows = arrows;
          sliderSettings.autoplay = autoplay;
          sliderSettings.focusOnSelect = focusOnSelect;
          sliderSettings.swipeToSlide = swipeToSlide;
          sliderSettings.slidesToShow = slidesToShow;
          sliderSettings.slidesToScroll = slidesToScroll;
          sliderSettings.speed = speed;
          sliderSettings.dots = dots;
          sliderSettings.cssEase = cssEase;
          sliderSettings.prevArrow = prevArrow;
          sliderSettings.nextArrow = nextArrow;
          sliderSettings.rows = rows;
          sliderSettings.autoplaySpeed = autoplaySpeed;
          sliderSettings.autoplay = autoplay;
          sliderSettings.verticalSwiping = verticalSwiping;
          sliderSettings.vertical = vertical;
          sliderSettings.rtl = rtl;

          if (centerMode != false) {
            sliderSettings.centerMode = centerMode;
          }
          if (centerPadding != false) {
            sliderSettings.centerPadding = centerPadding;
          }
          if (lazyLoad != false) {
            sliderSettings.lazyLoad = lazyLoad;
          }
          if (appendDots != false) {
            sliderSettings.appendDots = appendDots;
          }
          if (appendArrows != false) {
            sliderSettings.appendArrows = appendArrows;
          }
          if (asNavFor != false) {
            sliderSettings.asNavFor = asNavFor;
          }
          if (fade != false) {
            sliderSettings.fade = fade;
          }
          if (responsive != false) {
            sliderSettings.responsive = responsive;
          }
          $(this).slick(sliderSettings);
        }
      });
    }
  });
  // Flatpicker init
  $('.selector').each(function () {
    this._flatpickr = flatpickr(this);
  });

  // Time picker
  $('.times').each(function () {
    this._flatpickr = flatpickr(this, {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    });
  });
})(jQuery);

// --------------------------------
//  FAQ part
// FAQ accordion
$(document).ready(function () {
  $('.faq-question').click(function () {
    $(this).toggleClass('active').next().toggleClass('active');

    const icon = $(this).find('i');
    if ($(this).hasClass('active')) {
      icon.removeClass('tabler-plus').addClass('tabler-minus');
    } else {
      icon.removeClass('tabler-minus').addClass('tabler-plus');
    }
  });
});

$(document).ready(function () {
  $('.tab').click(function () {
    $('.tab, .tab-content').removeClass('active');
    $(this).addClass('active');
    $('#' + $(this).data('target')).addClass('active');
  });
});



// ------------------- checkout page edit ----------------------

// Map toggle functionality
// Map toggle functionality

$(document).on('click', '.map-toggle', function (e) {
  let isMapActive = false;
  isMapActive = !isMapActive;
  $('.toggle-switch').toggleClass('active'); // jQuery
  console.log('Map toggle:', isMapActive ? 'ON' : 'OFF');
});

// Quantity increase/decrease functionality

$(document).on('click', '.proPlus', function () {
  const container = $(this).closest('.quantity-control');
  const quantityEl = container.find('.proQuantity');
  let count = parseInt(quantityEl.text());
  count++;
  quantityEl.text(count);
});

$(document).on('click', '.proMinus', function () {
  const container = $(this).closest('.quantity-control');
  const quantityEl = container.find('.proQuantity');
  let count = parseInt(quantityEl.text());
  if (count > 1) {
    count--;
    quantityEl.text(count);
  }
});

$(document).ready(function () {
  $('#category').select2();
  $('#search-reviews').select2();
});

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('myVideo');
  const playIcon = video.previousElementSibling;

  if (video && playIcon) {
    playIcon.addEventListener('click', function() {
      video.play();
      playIcon.style.visibility = 'hidden';
    });

    video.addEventListener('play', function() {
      playIcon.style.visibility = 'hidden';
    });

    video.addEventListener('pause', function() {
      playIcon.style.visibility = 'visible';
    });
  }
});



