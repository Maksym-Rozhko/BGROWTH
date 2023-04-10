const inputNumberElems = document.querySelectorAll('.form .input-number');

const onlyDigitsEnterInput = (inputElems) => {
    if (inputElems) {
        inputElems.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace (/\D/, '');
            });
        });
    }
};

onlyDigitsEnterInput(inputNumberElems);

const footerYearSpans = document.querySelectorAll('.footer .footer__copyright strong span');

if (footerYearSpans) {
    const date = new Date();
    const year = date.getFullYear();

    footerYearSpans.forEach(span => {
        span.textContent = year;
    });
}
