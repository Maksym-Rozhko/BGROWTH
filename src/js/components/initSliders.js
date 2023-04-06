import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
	},
});
