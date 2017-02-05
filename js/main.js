//Fixed Header

function fixedHeader() {
 var logoactive ='img/flexible-logo-active.png';
 var logowhite ='img/flexible-logo.png';
 var setHeader = function() {
  if ($(window).scrollTop()>10) {
    $('#top-nav').addClass('fixed-header');
    $('#logo').attr('src',logoactive);
  } else {
   $('#top-nav').removeClass('fixed-header');
   $('#logo').attr('src',logowhite);
  }

  if ($(window).width() <= 762) {
   $('#logo').attr('src',logoactive);
  }
 }
 try {
  setHeader();
  $(window).scroll(setHeader).resize(setHeader);
 } catch (error) {
  console.log(error);
 }
}

















function carouselSwipe() {
    try {
        $("#myCarousel").swiperight(function () {
            $("#myCarousel").carousel('prev');
        });
        $("#myCarousel").swipeleft(function () {
            $("#myCarousel").carousel('next');
        });

    } catch (error) {
        console.log(error);
    }
}

jQuery(document).ready(function($){
  carouselSwipe();
});
