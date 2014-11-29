(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
})(jQuery);

},{}]},{},[1]);
