function readmore(trigger, content) {
    const btn = document.querySelector(trigger);
    const text = document.querySelector(content);

    if (btn) {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('remove-margin');
            text.classList.toggle('text-hidden');
        });
    }
};

readmore('.btn-readmore', '.text-trigger');