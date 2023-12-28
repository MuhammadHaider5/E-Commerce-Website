/*============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

/*========= SEARCH SHOW ==========*/
/* Validate if constant exists*/
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

/*======== SEARCH HIDDEN =========*/
/* Validate if constant exists */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

/*============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login_close'),
    loginContent = document.getElementById('login-content')

/*========= SEARCH SHOW ==========*/
/* Validate if constant exists*/
if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

/*======== SEARCH HIDDEN =========*/
/* Validate if constant exists */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}

/*============== HOME SWIPER =============*/
document.addEventListener('DOMContentLoaded', function () {
    let swiperHome = new Swiper('.home_swiper', {
        loop: true,                  // Enable looping
        spaceBetween: 9,           // Set space between slides (negative value for overlap)
        grabCursor: true,            // Change cursor to grabbing hand
        slidesPerView: 'auto',       // Automatically calculate the number of visible slides
        centeredSlides: 'auto',      // Center the active slide

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {
            1220: {
                slidesPerView: 3,
                centeredSlides: true,
            }
        }
    });
});

/*============== ADD SHADOW HEADER ==============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*============== FEATURED SWIPER ================*/
document.addEventListener('DOMContentLoaded', function () {
    let swiperFeatured = new Swiper('.featured__swiper', {
        loop: true,                  // Enable looping
        spaceBetween: 4,            // Set space between slides (negative value for overlap)
        grabCursor: true,            // Change cursor to grabbing hand
        slidesPerView: 'auto',       // Automatically calculate the number of visible slides
        centeredSlides: 'auto',      // Center the active slide

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1220: {
                slidesPerView: 4,
                centeredSlides: false,
            }
        }
    });
});

/*============== NEW SWIPER ===============*/
document.addEventListener('DOMContentLoaded', function () {
    let swiperNew = new Swiper('.new__swiper', {
        loop: true,                  // Enable looping
        spaceBetween: 24,             // Set space between slides (negative value for overlap)
        slidesPerView: 'auto',       // Automatically calculate the number of visible slides

        breakpoints: {
            1220: {
                slidesPerView: 3,

            }
        }
    });
});

/*============== TESTIMONIAL SWIPER ===============*/
document.addEventListener('DOMContentLoaded', function () {
    let swiperTestimonial = new Swiper('.testimonial__swiper', {
        loop: true,                  // Enable looping
        spaceBetween: -1,            // Set space between slides (negative value for overlap)
        grabCursor: true,            // Change cursor to grabbing hand
        slidesPerView: 'auto',       // Automatically calculate the number of visible slides
        centeredSlides: 'auto',      // Center the active slide

        breakpoints: {
            1220: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    });
});


/*============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewpoint height, add the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtein the current theme thst ther interface has by validaiting the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

//We validate if the user previouly chose a topic
if (selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activated / Deactivated the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark /icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, // Animation Repeat
})

sr.reveal(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {intervel: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})