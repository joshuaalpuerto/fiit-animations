$(document).ready(() => {
  var slide = $('.slider-content .slider-single');
  var slideTotal = slide.length - 1;
  var slideCurrent = -1;

  function slideInitial() {
    slideRight();
    
    setInterval(function() {
      slideRight();
    }, 2000);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    } 

    slide.removeClass('animate-1')
    slide.eq(slideCurrent).addClass('animate-1')
  }

  slideInitial()
})

