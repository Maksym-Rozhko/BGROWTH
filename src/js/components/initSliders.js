import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.swiper.steps-slider', {
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
      nextEl: '.steps-slider__controls .steps-slider__btns.swiper-button-next',
      prevEl: '.steps-slider__controls .steps-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.steps-slider__controls .swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
});

new Swiper('.swiper.make__slider', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,

  navigation: {
      nextEl: '.slider__controls .make__btns.swiper-button-next',
      prevEl: '.slider__controls .make__btns.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    }
  },
});

new Swiper('.swiper.walking__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 500,


  pagination: {
    el: '.walking__pagin.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  },
});

new Swiper('.swiper.running__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 500,


  pagination: {
    el: '.running__pagin.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  },
});

new Swiper('.swiper.cycling__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 500,


  pagination: {
    el: '.cycling__pagin.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  },
});

/* Basic */

new Swiper('.swiper.basic-1__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .basic-1__btns.swiper-button-next',
      prevEl: '.slider__controls .basic-1__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.basic-2__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .basic-2__btns.swiper-button-next',
      prevEl: '.slider__controls .basic-2__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.basic-3__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .basic-3__btns.swiper-button-next',
      prevEl: '.slider__controls .basic-3__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.basic-4__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .basic-4__btns.swiper-button-next',
      prevEl: '.slider__controls .basic-4__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.basic-5__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .basic-5__btns.swiper-button-next',
      prevEl: '.slider__controls .basic-5__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.basic-6__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .basic-6__btns.swiper-button-next',
      prevEl: '.slider__controls .basic-6__btns.swiper-button-prev',
  },
});

/* Accessories */
new Swiper('.swiper.accessories-1__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .accessories-1__btns.swiper-button-next',
      prevEl: '.slider__controls .accessories-1__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.accessories-2__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .accessories-2__btns.swiper-button-next',
      prevEl: '.slider__controls .accessories-2__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.accessories-3__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .accessories-3__btns.swiper-button-next',
      prevEl: '.slider__controls .accessories-3__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.accessories-4__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .accessories-4__btns.swiper-button-next',
      prevEl: '.slider__controls .accessories-4__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.accessories-5__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .accessories-5__btns.swiper-button-next',
      prevEl: '.slider__controls .accessories-5__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.accessories-6__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .accessories-6__btns.swiper-button-next',
      prevEl: '.slider__controls .accessories-6__btns.swiper-button-prev',
  },
});

/* Amulets */
new Swiper('.swiper.amulets-1__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .amulets-1__btns.swiper-button-next',
      prevEl: '.slider__controls .amulets-1__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.amulets-2__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .amulets-2__btns.swiper-button-next',
      prevEl: '.slider__controls .amulets-2__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.amulets-3__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .amulets-3__btns.swiper-button-next',
      prevEl: '.slider__controls .amulets-3__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.amulets-4__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .amulets-4__btns.swiper-button-next',
      prevEl: '.slider__controls .amulets-4__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.amulets-5__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .amulets-5__btns.swiper-button-next',
      prevEl: '.slider__controls .amulets-5__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.amulets-6__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .amulets-6__btns.swiper-button-next',
      prevEl: '.slider__controls .amulets-6__btns.swiper-button-prev',
  },
});

/* Exclusive */
new Swiper('.swiper.exclusive-1__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive-1__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive-1__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.exclusive-2__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive-2__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive-2__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.exclusive-3__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive-3__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive-3__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.exclusive-4__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive-4__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive-4__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.exclusive-5__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive-5__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive-5__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.exclusive-6__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive-6__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive-6__btns.swiper-button-prev',
  },
});
new Swiper('.swiper.exclusive__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  mousewheel: true,

  navigation: {
      nextEl: '.slider__controls .exclusive__btns.swiper-button-next',
      prevEl: '.slider__controls .exclusive__btns.swiper-button-prev',
  },
});

new Swiper('.swiper.download__slider', {
  slidesPerView: 3,
  spaceBetween: 12,
  speed: 500,

  navigation: {
    nextEl: '.slider__controls .download__btns.swiper-button-next',
    prevEl: '.slider__controls .download__btns.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});

// const typesHorizSlider = new Swiper('.swiper.types__slider', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   speed: 1000,
  // mousewheel: true,

  // mousewheel: {
  //   // forceToAxis: true,
  //   sensitivity: 1,
  //   releaseOnEdges: true,
  // },
// });

// const shopHorizSlider = new Swiper('.swiper.shop__slider', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   speed: 1000,
  // mousewheel: true,

  // mousewheel: {
  //   // forceToAxis: true,
  //   sensitivity: 1,
  //   releaseOnEdges: true,
  // },
// });

// const referralHorizSlider = new Swiper('.swiper.referral__slider', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   speed: 1000,
  // mousewheel: true,

  // mousewheel: {
  //   // forceToAxis: true,
  //   sensitivity: 1,
  //   releaseOnEdges: true,
  // },
// });

// const eventsHorizSlider = new Swiper('.swiper.events__slider', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   speed: 1000,
  // mousewheel: true,

  // mousewheel: {
  //   // forceToAxis: true,
  //   sensitivity: 1,
  //   releaseOnEdges: true,
  // },
// });
// function updateParentSliderIndex(parent, slider) {
//   try {
//     // parent.children[0].children[0].classList.contains('swiper-slide-active') ? parent.classList.remove('z-index') : false;
//     // parent.children[0].lastElementChild.classList.contains('swiper-slide-active') ? parent.classList.remove('z-index') : false;
//     // parent.children[0].children[0].classList.contains('swiper-slide-active') ? slider.mousewheel.disable() : slider.mousewheel.enable();
//     // parent.children[0].lastElementChild.classList.contains('swiper-slide-active') ? slider.mousewheeldisable() : slider.mousewheel.enable();
//   } catch (error) {}
// }

// typesHorizSlider.on('slideChange', function () {
//   // const parent = document.querySelector('.types__slider');

//   typesHorizSlider.updateSlidesClasses();
//   // setTimeout(() => {
//   //   updateParentSliderIndex(parent, typesHorizSlider);
//   // }, 1000);
// });

// shopHorizSlider.on('slideChange', function () {
//   shopHorizSlider.updateSlidesClasses();
// });

// referralHorizSlider.on('slideChange', function () {
//   referralHorizSlider.updateSlidesClasses();
// });

// eventsHorizSlider.on('slideChange', function () {
//   eventsHorizSlider.updateSlidesClasses();
// });

// if (isMobile()) {
//   try {
//     typesHorizSlider.destroy();
//     shopHorizSlider.destroy();
//     referralHorizSlider.destroy();
//     eventsHorizSlider.destroy();
//   } catch (error) {}
// }

new Swiper('.swiper.stage1__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage1-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage1-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage1__pagin.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper.stage2__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage2-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage2-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage2__pagin.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper.stage3__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage3-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage3-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage3__pagin.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper.stage4__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage4-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage4-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage4__pagin.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper.stage5__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage5-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage5-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage5__pagin.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper.stage6__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage6-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage6-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage6__pagin.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper.stage7__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,

  navigation: {
    nextEl: '.tabs__panel .stage7-slider__btns.swiper-button-next',
    prevEl: '.tabs__panel .stage7-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.stage7__pagin.swiper-pagination',
    clickable: true,
  },
});