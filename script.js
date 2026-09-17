$(function () {

  /* ===== Mobile Hamburger Menu ===== */
  $('#hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar-links').toggleClass('show');
  });

  // Close mobile menu when a nav link is clicked
  $('.navlinks li a').on('click', function () {
    $('.navbar-links').removeClass('show');
    $('#hamburger').removeClass('active');
  });

  /* ===== Sticky header shadow on scroll ===== */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 40) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }

    // Back to top button show/hide
    if ($(window).scrollTop() > 500) {
      $('.back-to-top').addClass('show');
    } else {
      $('.back-to-top').removeClass('show');
    }
  });

  /* ===== Back to top button ===== */
  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  /* ===== Smooth scroll for in-page anchor links ===== */
  $('a[href^="#"]').not('[href="#"]').on('click', function (e) {
    var target = $($(this).attr('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 90 }, 600);
    }
  });

  /* ===== Newsletter / Join Us form validation ===== */
  $('.newsletter-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    var $input = $form.find('input[type="email"]');
    var email = $input.val().trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $form.find('.form-msg').remove();

    if (email === '') {
      $form.append('<p class="form-msg error">Please enter your email address.</p>');
      return;
    }
    if (!emailPattern.test(email)) {
      $form.append('<p class="form-msg error">Please enter a valid email address.</p>');
      return;
    }

    $form.append('<p class="form-msg success">Thanks for signing up!</p>');
    $input.val('');
  });

  /* ===== Highlight active nav link based on current page ===== */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.navlinks li a').each(function () {
    var linkPage = $(this).attr('href');
    if (linkPage === currentPage) {
      $(this).addClass('active');
    }
  });

});