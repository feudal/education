$(document).ready(function() {
  $('.section-header-slider').slick({
    arrows: false,
    dots: true
  });

  $('.clients-slider1').slick({
  	centerMode: true,
  	centerPadding: '40px',
    slidesToShow: 5,
    slidesToScrol: 5,
  	infinite: true,
    arrows: true,
    dots: false,
    asNavFor: '.clients-slider2'
  });

  $('.clients-slider2').slick({
  	infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: '.clients-slider1'
  });

});