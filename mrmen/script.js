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
  }
});