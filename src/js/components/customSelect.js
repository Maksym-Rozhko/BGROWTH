function customSelect(select, selectTitle, selectLabels) {
    const selectSingle = document.querySelector(select);
    const selectSingleTitle = selectSingle.querySelector(selectTitle);
    const selectSingleLabels = selectSingle.querySelectorAll(selectLabels);

    selectSingleTitle.addEventListener('click', () => {
        selectSingle.getAttribute('data-state') === 'active' ? selectSingle.setAttribute('data-state', '') : selectSingle.setAttribute('data-state', 'active');
    });

    selectSingleLabels.forEach(item => {
        item.addEventListener('click', () => {
            selectSingleTitle.textContent = item.textContent;
            selectSingle.setAttribute('data-state', '');
        });      
    });
}

customSelect('.select', '.select-title', '.select-label');