let mobileSwiper = null;

function initMobileSwiper() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile && !mobileSwiper) {
    mobileSwiper = new Swiper('.mySwiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && mobileSwiper) {
    mobileSwiper.destroy(true, true);
    mobileSwiper = null;
  }
}

window.addEventListener('load', initMobileSwiper);
window.addEventListener('resize', initMobileSwiper);

const swiper = new Swiper('.releases-carousel', {
  slidesPerView: "auto",
  spaceBetween: 17,
  centeredSlides: false,
  watchOverflow: true,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 5 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 2.3, spaceBetween: 10 },
    0: { slidesPerView: 2.3, spaceBetween: 10 },
  },
  on: {
    init() {
      updateNavButtons(this);
    },
    slideChange() {
      updateNavButtons(this);
    },
  },
});

function updateNavButtons(swiperInstance) {
  const prev = document.querySelector('.swiper-button-prev');
  const next = document.querySelector('.swiper-button-next');

  if (prev && next) {
    prev.classList.toggle('swiper-button-disabled', swiperInstance.isBeginning);
    next.classList.toggle('swiper-button-disabled', swiperInstance.isEnd);
  }
}
