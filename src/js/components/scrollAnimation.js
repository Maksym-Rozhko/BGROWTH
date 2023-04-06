const scrollAnimation = endElem => {
    const elem = document.querySelector(endElem);

    const observer = new IntersectionObserver(
        entries => {
            entries[0].isIntersecting ? elem.previousElementSibling.classList.add('animated') : elem.previousElementSibling.classList.remove('animated');
        },
        {
            rootMargin: '100px',
        },
    );

    try {
        observer.observe(elem);
    } catch (error) {}
};

// const scrollSliderIndex = endElem => {
//     const elem = document.querySelector(endElem);

//     const observer = new IntersectionObserver(
//         entries => {
//             entries[0].isIntersecting ? elem.previousElementSibling.classList.add('z-index') : elem.previousElementSibling.classList.remove('z-index');
//         },
//         {
//             rootMargin: '500px',
//         },
//     );

//     try {
//         observer.observe(elem);
//     } catch (error) {}
// };

scrollAnimation('.gps .end-elem');
scrollAnimation('.ready .end-elem');
scrollAnimation('.demo .end-elem');
scrollAnimation('.types .end-elem');
scrollAnimation('.types.types-2.shop .end-elem');
scrollAnimation('.referral .end-elem');
scrollAnimation('.events .end-elem');
scrollAnimation('.statistic .end-elem');
scrollAnimation('.coin .end-elem');
scrollAnimation('.how-to-buy .end-elem');
scrollAnimation('.categories .end-elem');
scrollAnimation('.convert .end-elem');
scrollAnimation('.market .end-elem');
// scrollSliderIndex('#types .scroll-elem');
// scrollSliderIndex('#shop .scroll-elem');
// scrollSliderIndex('#referral .scroll-elem');
// scrollSliderIndex('#events .scroll-elem');

const timeoutAnimation = parentElem => {
    const parent = document.querySelector(parentElem);

    if (parent) {
        const animated = setTimeout(() => {
            parent.classList.add('animated');
        }, 1500);

        if (parent.classList.contains('animated')) {
            clearTimeout(animated);
        }
    }
};

timeoutAnimation('.nft .nft__images');