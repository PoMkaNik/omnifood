$(document).ready(function () {
  // waiponint jquery plugin http://imakewebthings.com/waypoints/
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else if (direction == 'up') {
        $('nav').removeClass('sticky');
      }
    },
    { offset: '25%' },
  );

  // scroll on buttons
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      1000,
    );
  });
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      1000,
    );
  });

  // scroll on navigation

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        let target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({ scrollTop: target.offset().top }, 1000);
          return false;
        }
      }
    });
  });

  // Animation on scroll
  // waypoint-1
  $('.js--waypoint-1').waypoint(
    function () {
      $('.js--waypoint-1')
        .addClass('animate__animated')
        .addClass('animate__fadeIn');
    },
    { offset: '50%' },
  );

  //waypoint-2
  $('.js--waypoint-2').waypoint(
    function () {
      $('.js--waypoint-2')
        .addClass('animate__animated')
        .addClass('animate__fadeInUp');
    },
    { offset: '50%' },
  );

  //waypoint-3
  $('.js--waypoint-3').waypoint(
    function () {
      $('.js--waypoint-3')
        .addClass('animate__animated')
        .addClass('animate__fadeIn');
    },
    { offset: '50%' },
  );

  //waypoint-4
  $('.js--waypoint-4').waypoint(
    function () {
      $('.js--waypoint-4')
        .addClass('animate__animated')
        .addClass('animate__pulse');
    },
    { offset: '50%' },
  );

  // Mobile navigation

  $('.js--nav-icon').click(function () {
    let nav = $('.js--main-nav');
    nav.slideToggle(200);
    $('ion-icon').toggleClass('hidden');
  });
});
