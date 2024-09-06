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


// services swiper
var swiper = new Swiper(".services-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true,
    },
    slidesPerView: 2,
    // autoplay: {
    //     delay: 3500,
    // },
    loop: true,
    breakpoints: {
      950: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });