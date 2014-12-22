(function ($) {
  // Nav
  function navToggle() {
    $('.nav-trigger a').on('click', function() {
      $('.nav__menu').toggleClass('opened');
    });
  }
  $(document).ready(function() {
    navToggle();
    // Materialize Menu
    $(".button-collapse").sideNav();
    // Materialize Tabs
    $('ul.tabs').tabs();
    // Materialize Parallax
    $('.parallax').parallax();
  });

  // Accessible Tabs
  function accessibleTabs() {
    $(".tabs").accessibleTabs({
        tabhead:'.tabs__head',
        fx:"fadeIn",
        tabbody: '.tabs__body'
    });
  }
  $(document).ready(function(){
    accessibleTabs();
  });

  // Swiper Gallery
  function swiperGallery() {
    var $swiper = $('.swiper-container');
    var pager = $swiper.hasClass('swiper--pager') === true ? true : false;
    var responsive = $swiper.hasClass('swiper--responsive') === true ? true : false;

    $swiper.swiper({
      speed : 500,
      calculateHeight: responsive,
      keyboardControl: true,
      pagination: '.swiper-pager',
      paginationClickable: pager,
    });
  }
  $(document).ready(function(){
    swiperGallery();
  })

  // Swipebox
  function swipeboxLightbox() {
    $('.swipebox').swipebox();
  }
  $(document).ready(function(){
    swipeboxLightbox({
      hideCloseButtonOnMobile : false,
    });
  })

  // product__banner Play Video Toggle
  function productBannerVideo() {
    $('a.product__banner-text').on('click', function() {
      $('.product__banner').toggleClass('play-video');
    });
  }
  $(document).ready(function() {
    productBannerVideo();
  });

})(jQuery);
