$(function(){
    $('.slide_wrap1').slick({
        dots:false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autiolaySpeed:2000,
        centerMode: true,
        centerPadding: '40%',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 450,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '15%',
              slidesToShow: 1
            }
          }
        ]
      });      
});