
$(document).ready(function(){
    $('.slick').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        adaptiveHeight: true,
        adaptiveWidth: true,
        nextArrow: $('.slider'),
      });
    $('.slick-prev').remove();

    $('.screens').slick({
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3,
      adaptiveHeight: true,
      adaptiveWidth: true,
      infinite: true,
      slidesToScroll: 0,
      nextArrow: $('.screens'),
    });
  $('.slick-prev').remove();
})

