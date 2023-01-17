if (document.querySelector(".banner__slides") != null) {
  new Swiper(".banner__slides", {
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}

if (document.querySelector(".cooperate__slider") != null) {
  new Swiper(".cooperate__slider", {
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
