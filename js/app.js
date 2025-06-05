const swiperDepo = new Swiper(".depoSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLink) {
                navLink.classList.add("active");
            }
        }
    });
}, {
    threshold: 0.8
});

sections.forEach(section => {
    observer.observe(section);
});

const navCollapse = document.querySelector('.navbar-collapse');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navCollapse).toggle();
        }
    });
});
