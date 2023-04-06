function accordion(trigger, activeClass) {
    const items = document.querySelectorAll(trigger);

    if (items) {
        const accordionRemoveItemElems = () => {
            items.forEach(item => item.parentElement.classList.remove(activeClass));
        }

        items.forEach(elem => {
            elem.addEventListener('click', () => {
              if (elem.parentElement.classList.contains(activeClass)) {
                accordionRemoveItemElems();
              } else {
                accordionRemoveItemElems();
                elem.parentElement.classList.add(activeClass);
              }
            });
          });
    }
};

accordion('.faq__question', 'faq__item--active');