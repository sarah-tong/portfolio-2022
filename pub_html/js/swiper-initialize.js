var mySwiper = new Swiper('.swiper-container', {

    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 150,
        },
        1480: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 80,
        },
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 60,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
        475: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        }
    }

});
