(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(target) {
  var canvasSize = 500,
  centre = canvasSize/2,
  radius = canvasSize*0.8/2,
  s = Snap('#' + target.context.id),
  path = "",
  arc = s.path(path),
  startY = centre-radius,
  rating = target.data('rating'),
  endpoint = (rating / 10) * 360,
  text = s.text(250, 260, rating + " out of 10");
  text.attr({
    'font-size':50,
    'text-anchor': 'middle'
  });
  Snap.animate(0, endpoint,   function (val) {
      arc.remove();
      var d = val,
          dr = d-90;
          radians = Math.PI*(dr)/180,
          endx = centre + radius*Math.cos(radians),
          endy = centre + radius * Math.sin(radians),
          largeArc = d>180 ? 1 : 0;
          path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

      arc = s.path(path);
      arc.attr({
        stroke: 'red',
        fill: 'none',
        strokeWidth: 20
      });

  }, 1500, mina.easeout);
}

},{}],2:[function(require,module,exports){
var ratingMeter = require('./rating.js');

(function ($) {
  "use strict";

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
    // Materialize Materialbox
    $('.materialboxed').materialbox();
    // Classy Loader
    $('.loader').ClassyLoader({
      percentage: 60,
      speed: 8,
      diameter: 40,
      showText: false,
      fontSize: '20px',
      fontColor: 'rgba(73, 125, 164, 0.3)',
      lineColor: '#EC3022',
      remainingLineColor: 'rgba(73, 125, 164, 0.1)',
      lineWidth: 5
    });
    // Rating Meter
    $('.ratingmeter__meter-svg').each(function() {
      var target = $(this);
      ratingMeter(target);
    });
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

},{"./rating.js":1}]},{},[2]);
