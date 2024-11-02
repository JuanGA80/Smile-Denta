const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
      el: '.swiper-pagination',
  },
  autoplay: {
      delay: 3000,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      480: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
  },
});
