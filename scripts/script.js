window.sr = ScrollReveal();

$(document).ready(function() {
  $("pre").remove();
  
  sr.reveal('.welcome-text', {
    duration: 2000,
    origin: 'bottom'
  });

  sr.reveal('#about img', {
    duration: 2000,
    origin: 'top',
    distance:'300px'
  });

  sr.reveal('#bio', {
    duration: 2000,
    delay: 500,
    origin: 'bottom',
  });

  sr.reveal('.flatiron', {
    duration: 2000,
    origin: 'left',
    distance:'300px'
  });

  sr.reveal('.fcc', {
    duration: 2000,
    origin: 'right',
    distance:'300px'
  });

  sr.reveal('#skills p', {
    duration: 2000,
    delay: 500,
    origin: 'bottom',
  });

  sr.reveal('.skills-images div', {
    duration: 2000,
    origin: 'left',
    distance:'300px'
  });

  sr.reveal('.projects-div', {
    duration: 2000,
    origin: 'bottom',
    distance:'300px'
  });

 });

 $(".navbar-brand").mouseenter(function(){
    $(".navbar-brand").addClass("animated bounceIn");
 });

 $(".navbar-brand").mouseout(function(){
    $(".navbar-brand").removeClass("animated bounceIn");
 });

 $(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

 

