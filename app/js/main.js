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

if (document.querySelector(".novelty__slider") != null) {
  new Swiper(".novelty__slider", {
    slidesPerView: 4,
    spaceBetween: 7,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

let mapBg = document.querySelector(".address__map-bg");

document.addEventListener("click", (e) => {
  if (e.target === mapBg) {
    mapBg.classList.add("active");
  } else {
    mapBg.classList.remove("active");
  }
});
