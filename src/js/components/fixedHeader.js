function headerScrollFixed() {
    const headerFixed = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      scrollY > 50 ? headerFixed.classList.add('active-scroll') : headerFixed.classList.remove('active-scroll');
    });
};
headerScrollFixed();
  