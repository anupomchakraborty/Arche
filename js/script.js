$(function () {
  'use strict';

// manu fixed

var navOff = $(".menu_head").offset().top;
$(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navOff) {
        $(".menu_head").addClass("menu_fix");
    } else {
        $(".menu_head").removeClass("menu_fix");
    }
});




  // banner slicks
  $('.banner_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small_slider',
  });

  $('.small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_big',
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    arrows: false,
  });


// about counterup


$('.counter').counterUp({
  delay: 10,
  time: 2000
});


// service slider


$('.service_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

// project venubox


$('.venobox').venobox({
  spinner:'wave',
  framewidth : '400px', 
  frameheight: '600px',
  border     : '3px',   
  bgcolor    : '#d9b257',
}); 

// testimonial slider
$('.test_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


// member_bar start

$('#bar1').barfiller({
  barColor: '#d9b257',
  tooltip: true,
  duration: 1000,
  animateOnResize: true,
  symbol: "%"
});
$('#bar2').barfiller({
  barColor: '#d9b257',
  tooltip: true,
  duration: 1000,
  animateOnResize: true,
  symbol: "%"
});
$('#bar3').barfiller({
  barColor: '#d9b257',
  tooltip: true,
  duration: 1000,
  animateOnResize: true,
  symbol: "%"
});
$('#bar4').barfiller({
  barColor: '#d9b257',
  tooltip: true,
  duration: 1000,
  animateOnResize: true,
  symbol: "%"
});







});