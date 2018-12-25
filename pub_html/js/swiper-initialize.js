var mySwiper = new Swiper('.swiper-container', {

    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 80,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 150,
        },

        1691: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 100,
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

        575: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        }
    }

});
