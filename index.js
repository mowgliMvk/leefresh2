//======= hamburger ====================
function activeHamburg() {
  var hamburger = document.querySelector(".hamburger");
  var mobNav = document.querySelector(".mob-nav");
  var body = document.querySelector("body");
  body.classList.toggle("overflow-hidden");

  hamburger.classList.toggle("is-active");
  mobNav.classList.toggle("left-0");
}

//======= hamburger  ====================

//======= first slide js ====================
$(".leefresh-carousel-wrapper").slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
});
//======= first slide js  ====================

//======= second slide js ====================

$(".leefresh-slick-slider").slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
//======= second slide js ====================

//======= third slide js (single) ====================
// $(".leefresh-single-caraousal").slick({
//   autoplay: true,
//   infinite: true,
//   autoplaySpeed: 2000,
// });
//======= third slide js (single) ====================

//======= fourth slide js (single) ====================
$(".leefresh-fifth-section-carousal").slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
});
//======= fourth slide js (single) ====================
