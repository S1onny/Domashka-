

// ============== Верхний мейн слайдер
const previewSlider = new Swiper('.slider-preview', {
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.slider__preview-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider__preview-next',
        prevEl: '.slider__preview-prev',
    },
});

// ============== Cлайдер коллекций
const collectionSlider = new Swiper('.collection-slider', {
    slidesPerView: 4,
    spaceBetween: -30,
    
    // Navigation arrows
    navigation: {
        nextEl: '.collection__next',
        prevEl: '.collection__prev',
    },
});

// ============== Cлайдер отзывы 

const feedbackSlider = new Swiper('.feedback-slider', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 23,

    pagination: {
        el: '.feedback__pagination',
    },

});

// ================== Футер аккордион
const acc = document.getElementsByClassName("footer__accordion-inner");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('footer__accordion-active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
