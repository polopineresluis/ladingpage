var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigator: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
    },

    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }


});