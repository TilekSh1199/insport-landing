/**
 * Sports
 *
 * This file contains all template JS functions
 *
 * @package Omi Sports
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Search

--------------------------------------------------------------*/
(function($) {
  "use strict";

  // Search
    $('.search-icon').on('click', function (e) {
      e.preventDefault();
      $('.search').addClass('active');
    });

    $('.search-close').on('click', function (e) {
      e.preventDefault();
      $('.search').removeClass('active');
    });
    
})(jQuery);