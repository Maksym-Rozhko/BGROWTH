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
