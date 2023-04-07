import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const pointSlider = new Swiper('.swiper.point-slider', {
	slidesPerView: 2,
	spaceBetween: 20,
    speed: 1000,

	breakpoints: {
		320: {
			slidesPerView: 1,
            spaceBetween: 10,
		},
        768: {
			slidesPerView: 2,
            spaceBetween: 20,
        }
	},
});

