// projects swiper
var swiper = new Swiper(".projects-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 3500,
    // },
    loop: true,
  });