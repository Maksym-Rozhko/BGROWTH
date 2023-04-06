import { isMobile } from '../functions/check-viewport';

function cursor() {
    const cursor = document.querySelector('.cursor');
    
    if (isMobile()) {
        cursor.remove();
    } else {
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', `
                top: ${e.pageY - 10}px;
                left: ${e.pageX - 10}px;
            `);
        });
    }
};

cursor();