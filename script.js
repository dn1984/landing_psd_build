"use strict";

$(document).ready(function () {
  //Нажатие на кнопку бургера
  $('#mobile-menu-btn').click(function () {
    $('#mobile-menu').toggleClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').toggleClass('mobile-menu-close_js');
  }); //При нажатии кнопки модильного меню крест

  $('#mobile-menu__close-btn').click(function () {
    $('#mobile-menu').toggleClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').toggleClass('mobile-menu-close_js');
  }); //Меню десктопное прокрутка к пунктам

  $('#price-btn').click(function () {
    $('#price').animatescroll({
      padding: 30
    });
  });
  $('#specifications-btn').click(function () {
    $('#specifications').animatescroll({
      padding: 60
    });
  });
  $('#about-btn').click(function () {
    $('#about').animatescroll({
      padding: 100
    });
  });
  $('#description-btn').click(function () {
    $('#description').animatescroll({
      padding: 60
    });
  }); // Пункты мобильного меню

  $('#price-mobile-btn').click(function () {
    $('#price').animatescroll({
      scrollSpeed: 3000,
      padding: 30
    });
    $('#mobile-menu').addClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').addClass('mobile-menu-close_js');
  });
  $('#specifications-mobile-btn').click(function () {
    $('#specifications').animatescroll({
      scrollSpeed: 3000,
      padding: 60
    });
    $('#mobile-menu').addClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').addClass('mobile-menu-close_js');
  });
  $('#about-mobile-btn').click(function () {
    $('#about').animatescroll({
      scrollSpeed: 3000,
      padding: 100
    });
    $('#mobile-menu').addClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').addClass('mobile-menu-close_js');
  });
  $('#description-mobile-btn').click(function () {
    $('#description').animatescroll({
      scrollSpeed: 3000,
      padding: 60
    });
    $('#mobile-menu').addClass('mobile-menu-close_js');
    $('#mobile-menu-wrapper').addClass('mobile-menu-close_js');
  }); //Кнопка наверх

  $(window).scroll(function () {
    // Если отступ сверху больше 1500px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 1500) {
      $('#button-up').removeClass('hidden');
    } else {
      $('#button-up').addClass('hidden');
    }
  });
  /** При нажатии на кнопку мы перемещаемся к началу страницы */

  $('#button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});