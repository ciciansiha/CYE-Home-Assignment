document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.reviews-slider', {
        initialSlide: 1,
        pagination: {
            el: '.reviews-slider-pagination',
            clickable: true,
        },
        breakpoints: {
            0: { // Mobile and Tablet
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
            },
            970: { // Desktop
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 100,
            },
        }
    });
});