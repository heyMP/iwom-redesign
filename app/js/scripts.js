var eqjs = require('../bower_components/eq.js/dist/eq.min.js');

(function ($) {
  // Nav
  $(document).ready(function() {
    $('.nav-trigger a').click(function() {
      $('.nav__menu').toggleClass('opened');
    });
  });
})(jQuery);
