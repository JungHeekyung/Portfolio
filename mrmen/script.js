const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,

/*   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, */
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  }
});
