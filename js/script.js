$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
});

$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.arrow-btn').addClass('show');
    } else {
      $('.arrow-btn').removeClass('show');
    }
  });

  $('.arrow-btn a').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0
      },
      500,
      'linear'
    );
  });
});

var typed=new Typed(".auto-type",{
  strings:["Student","Coder","Front-End Developer","Web Development Enthusiast"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})


