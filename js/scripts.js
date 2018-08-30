$(document).ready(function () {
  // Venobox plugin
  $('.venobox').venobox();

  $('.venobox_custom').venobox({
    spinner: 'cube-grid',
    closeBackground: 'rgba(225,225,225,0)'
  });

  $('.venobox').venobox({
    titleattr: 'data-title'
  });

  $('.figlio').click(function(){
    $(this).addClass("max-size");
  });
// End Venobox plugin

  // Back to top
  if ($('#back-top').length) {
    var scrollTrigger = 300, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-top').addClass('show-top');
        } else {
          $('#back-top').removeClass('show-top');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
  // End Back to top
  // fixed navbar
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $('.navbar').addClass('nav-fixed');
    } else {
      $('.navbar').removeClass('nav-fixed');
    }
  });
  // end fixed navbar

  // Scroll suave
  $('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset - 100
    }, 500);
  });
});

