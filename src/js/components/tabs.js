const tabs = (btnSelectors, contentSelectors) => {
    const btns = document.querySelectorAll(btnSelectors);
    const contents = document.querySelectorAll(contentSelectors);

    const removeBtnsActiveClass = () => btns.forEach(btn => btn.classList.remove('custom-tabs__nav-btn--active'));
    const removeContentsActiveClass = () => contents.forEach(content => content.classList.remove('custom-tabs__panel--active'));

    if (btns) {
        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                removeBtnsActiveClass();
                removeContentsActiveClass();
                btn.classList.add('custom-tabs__nav-btn--active');
                contents[i].classList.add('custom-tabs__panel--active');
            });
        });
    }
}

tabs('.store .custom-tabs .custom-tabs__nav-btn', '.store .custom-tabs .custom-tabs__panel');

