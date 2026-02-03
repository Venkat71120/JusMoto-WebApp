// $(window).scroll(function () {
//   var scrolling = $(this).scrollTop();

//   if (scrolling > 200) {
//     $('.navbar').addClass('sticky_header');
//   } else {
//     $('.navbar').removeClass('sticky_header');
//   }
// });

$(window).on('scroll', function () {
  const scroll = $(window).scrollTop();

  if (scroll > 200) {
    $('.header.asbolute-header .navbar').addClass('sticky_header');
  } else {
    $('.header.asbolute-header .navbar').removeClass('sticky_header');
  }
});

