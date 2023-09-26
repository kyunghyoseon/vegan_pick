$(function(){
    $('.slide_wrap').slick({
        dots:true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autiolaySpeed:2000,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 450,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });      
});