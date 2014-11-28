(function ($) {
  // Nav
  function navToggle() {
    $('.nav-trigger a').on('click', function() {
      $('.nav__menu').toggleClass('opened');
    });
  }
  $(document).ready(function() {
    navToggle();
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

    $swiper.swiper({
      speed : 500,
      calculateHeight: true,
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
})(jQuery);
