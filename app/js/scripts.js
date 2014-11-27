(function ($) {
  // Nav
  $(document).ready(function() {
    $('.nav-trigger a').on('click', function() {
      $('.nav__menu').toggleClass('opened');
    });
  });

  // Accessible Tabs
  $(document).ready(function(){
    $(".tabs").accessibleTabs({
        tabhead:'.tabs__head',
        fx:"fadeIn",
        tabbody: '.tabs__body'
    });
  });
})(jQuery);
