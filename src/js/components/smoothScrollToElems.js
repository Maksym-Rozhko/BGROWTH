const smoothScrollToElems = (links) => {
    const anchorsLink = document.querySelectorAll(links);
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');

    if (anchorsLink) {
        const smoothScroll = (anchors) => {
            for (let anchor of anchors) {
                const blockID = anchor.getAttribute('href');

                anchor.addEventListener('click', (e) => {
                    console.log('ss');
                    e.preventDefault();

                    if (menu.classList.contains('menu--active')) {
                        burger.click();
                    }

                    document.querySelector(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            };
        };

        smoothScroll(anchorsLink);
    }
};

smoothScrollToElems('.header .header__container a');
smoothScrollToElems('.header .mobile-menu .nav a');
