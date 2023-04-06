const btnScrollUp = document.querySelector('.scroll-top');
const topElem = document.querySelector('.main');
const privacyParentContainerElem = document.querySelector('.privacy .fq__container');
const faqItemElems = document.querySelectorAll('.privacy .faq__question');

try {
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

  faqItemElems.forEach(btn => {
    btn.addEventListener('click', () => {
      privacyParentContainerElem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
} catch (error) {}
