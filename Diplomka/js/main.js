document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest ('.burger-icon')
    const burgerNavLink = e.target.closest ('.nav__link')

    if (!burgerIcon && !burgerNavLink) return

    if(document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }

}

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
    slidesPerView: 3,
    spaceBetween: 40,
    
    // Navigation arrows
    navigation: {
        nextEl: '.collection__next',
        prevEl: '.collection__prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        601: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        801: {
            spaceBetween: 40,
        },
        1101: {
        slidesPerView: 4,
        }
    }
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
