(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Rating Meter
 * Pass a DOM svg object that contains a unique id and a 'meter' data attribute
 * that contains a number between 1 and 10
 * @param  {DOM object} target
 */
module.exports = function(target) {
  'use strict';
  var canvasSize = 500,
  centre = canvasSize/2,
  radius = canvasSize*0.8/2,
  s = new Snap('#' + target.context.id),
  path = '',
  arc = s.path(path),
  startY = centre-radius,
  rating = target.data('rating'),
  endpoint = (rating / 10.0001) * 360,
  text1 = s.text(250, 270, rating),
  text2 = s.text(250, 330, ['out of ', '10']);
  text1.attr({
    'font-size': 150,
    'text-anchor': 'middle',
    'verticle-align': 'middle'
  });
  text2.attr({
    'font-size': 50,
    'text-anchor': 'middle',
  });
  Snap.animate(0, endpoint,   function (val) {
      arc.remove();
      var d = val,
          dr = d - 90,
          radians = Math.PI * (dr)/180,
          endx = centre + radius* Math.cos(radians),
          endy = centre + radius * Math.sin(radians),
          largeArc = d > 180 ? 1 : 0,
          path = 'M'+centre+','+startY+' A'+radius+','+radius+' 0 '+largeArc+',1 '+endx+','+endy;

      arc = s.path(path);
      arc.attr({
        stroke: 'red',
        fill: 'none',
        strokeWidth: 20
      });

  }, 1500, mina.easeinout);
};

},{}],2:[function(require,module,exports){
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

},{"./rating.js":1}]},{},[2]);
