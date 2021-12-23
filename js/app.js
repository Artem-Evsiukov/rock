"use strict";

$(document).ready(function () {
  // burger
  $('.js-burger').click(function () {
    $(this).toggleClass('active');
    $('.js-menu-burger').toggleClass('active');
    $('body').toggleClass('overflow');
  }); // open modal

  $('.js-open-reg').click(function () {
    $('.js-modal-singin').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); // sliders

  var cardSwiper = new Swiper('.js-card-slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.card-button-next',
      prevEl: '.card-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 32
      }
    }
  });
  var onlineSwiper = new Swiper('.js-online-slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.online-button-next',
      prevEl: '.online-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 3.6,
        spaceBetween: 32
      }
    }
  });
  var webinarsSwiper = new Swiper('.js-webinars-slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 16
      },
      1360: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
  var recordsSwiper = new Swiper('.js-records-slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.records-button-next',
      prevEl: '.records-button-prev'
    },
    breakpoints: {
      500: {
        slidesPerView: 1.8,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 3.6,
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  }); // nice select

  $('select').niceSelect(); // forms

  $('.form__accordion-head').click(function () {
    $(this).next().slideToggle();
  });
  $('.js-tag').click(function () {
    $('.js-tag').removeClass('active');
    $(this).addClass('active');
  }); // tabs

  $(function () {
    $('ul.js-tabs-nav').on('click', 'li:not(.active)', function () {
      $(this).addClass('active').siblings().removeClass('active').closest('div.js-tabs').find('div.js-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
  $(function () {
    $('ul.js-tabs-nav2').on('click', 'li:not(.active)', function () {
      $(this).addClass('active').siblings().removeClass('active').closest('div.js-tabs2').find('div.js-tabs-content2').removeClass('active').eq($(this).index()).addClass('active');
    });
  }); // tabs open

  $('.js-tabs-open').click(function () {
    $('.js-tabs-content').removeClass('active');
  }); // open staff editor

  $('.js-staff-edit-open').hover(function () {
    $('.js-staff-edit').toggleClass('active');
  });
});