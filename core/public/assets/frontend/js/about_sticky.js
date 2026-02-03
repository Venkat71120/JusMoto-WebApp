$(window).on('scroll', function () {
  const scroll = $(window).scrollTop();

  if (scroll > 50) {
    $('.header.style2 .navbar').addClass('about-allPage-Sticky');
  } else {
    $('.header.style2 .navbar').removeClass('about-allPage-Sticky');
  }
});
