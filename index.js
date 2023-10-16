let Menubtn = document.querySelector("#Menubtn");
let navbar = document.querySelector(".navbar");

Menubtn.onclick = () => {
    Menubtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

// login form
document.querySelector("button.btn").onclick = () => {
    document.querySelector(".loginformcontainer").classList.toggle("active");
};
document.querySelector("#closeloginform").onclick = () => {
    document.querySelector(".loginformcontainer").classList.remove("active");
}

document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".homeparallexeffect").forEach((el) => {
        let Speed = el.getAttribute("data-speed");
        let X = (window.innerWidth - e.pageX * Speed) / 60;
        let Y = (window.innerHeight - e.pageY * Speed) / 60;
        el.style.transform = `translateX(${X}px) translateY(${Y}px`;
    });
};

document.querySelector(".home").onmouseleave = (e) => {
    document.querySelectorAll(".homeparallexeffect").forEach((el) => {
        el.style.transform = `translateX(0px) translateY(0px)`;
    });
};

// swiper js for vehicles
var swiperVehicles = new Swiper(".VehiclesSlider", {
    grabCursor: true,
    spaceBetween: 20,
    centerSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// swiper js for featured
var swiperFeatured = new Swiper(".FeatureSlider", {
    grabCursor: true,
    spaceBetween: 20,
    centerSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// swiper js for review slider
var swiperReview = new Swiper(".ReviewSlider", {
    grabCursor: true,
    spaceBetween: 20,
    centerSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


