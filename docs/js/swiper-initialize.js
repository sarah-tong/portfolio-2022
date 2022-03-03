var homepageSwiper = new Swiper('.swiper-container', {

    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
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
            spaceBetween: 100,
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
            spaceBetween: 50,
        }
    }

});

var SMABrandingBookSwiper = new Swiper('#SMA-branding-book', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 80,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var SMABrochureSwiper = new Swiper('#SMA-brochure', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 80,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var RCPPersonaSwiper = new Swiper('#rcp-personas', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 80,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});