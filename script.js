"use strict";

$(document).ready(function () {
  $('#mobile-menu-btn').click(function () {
    $('#mobile-menu').toggleClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').toggleClass('mobile-menu-close_js');
  });
  $('#mobile-menu__close-btn').click(function () {
    $('#mobile-menu').toggleClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').toggleClass('mobile-menu-close_js');
  });
});