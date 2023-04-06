const btnScrollUp = document.querySelector('.scroll-top');
const topElem = document.querySelector('.main');

if (btnScrollUp) {
	window.addEventListener('scroll', () => {
		let scrollY = window.scrollY;
		scrollY > 1000 ? btnScrollUp.classList.remove('d-none') : btnScrollUp.classList.add('d-none');
	});

	btnScrollUp.addEventListener('click', () => {
		topElem.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}
