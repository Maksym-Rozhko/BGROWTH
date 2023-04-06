function preloader(preloader) {
    const loader = document.querySelector(preloader);
    const video = document.querySelector('.main-screen__video');

    if (loader) {
        setTimeout(() => {
            loader.children[0].classList.add('active');
        }, 1500);
        setTimeout(() => {
            loader.classList.add('remove');
        }, 3500);
        setTimeout(() => {
            loader.remove();
            video.setAttribute('autoplay', 'autoplay');
            video.play();
        }, 5500);
    }
};

preloader('.preloader');