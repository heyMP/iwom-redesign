var ratingMeter = require('./rating.js');

(function ($) {
  'use strict';

  // Nav
  function navToggle() {
    $('.nav-trigger a').on('click', function() {
      $('.nav__menu').toggleClass('opened');
    });
  }
  $(document).ready(function() {
    navToggle();
    // Materialize Menu
    $('.button-collapse').sideNav();
    // Materialize Tabs
    $('ul.tabs').tabs();
    // Materialize Parallax
    $('.parallax').parallax();
    // Materialize Materialbox
    $('.materialboxed').materialbox();
    // Materialize Modal. The "href" attribute of .modal-trigger must specify
    // the modal ID that wants to be triggered.
    $('.modal-trigger').leanModal();
    // Materialize Select
    $('select').not('.disabled').material_select();
    // Rating Meter
    $('.rating-meter').each(function() {
      var target = $(this);
      ratingMeter(target);
    });
  });

  // Accessible Tabs
  function accessibleTabs() {
    $('.tabs').accessibleTabs({
        tabhead:'.tabs__head',
        fx:'fadeIn',
        tabbody: '.tabs__body'
    });
  }
  $(document).ready(function(){
    accessibleTabs();
  });

  // Swiper Gallery
  $(function() {
    var $swiper = $('.swiper-container');
    var pager = $swiper.hasClass('swiper--pager') === true ? true : false;
    var responsive = $swiper.hasClass('swiper--responsive') === true ? true : false;

    var swiperContainer = $swiper.swiper({
      speed : 500,
      calculateHeight: responsive,
      keyboardControl: true,
      pagination: '.swiper-pager',
      paginationClickable: pager,
    });

    $(window).resize(function() {
      swiperContainer.reInit();
    });

    // swiperContainer.destroy();
  });

  // Swipebox
  function swipeboxLightbox() {
    $('.swipebox').swipebox();
  }
  $(document).ready(function(){
    swipeboxLightbox({
      hideCloseButtonOnMobile : false,
    });
  });

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
