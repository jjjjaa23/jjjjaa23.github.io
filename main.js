/* ===========================================
   XIORVE Website V2.0
=========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.10)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.06)";
        header.style.background = "#ffffff";

    }

});

/* ===========================================
   Back To Top
=========================================== */

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.style.display = "flex";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================================
   Smooth Navigation
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================================
   Scroll Animation
=========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".application-card,.product-card,.why-card,.resource-card,.stat-card,.feature-box"

).forEach(el => {

    observer.observe(el);

});

/* ===========================================
   Button Hover Effect
=========================================== */

document.querySelectorAll(

    ".primary-btn,.secondary-btn,.quote-btn,.resource-btn"

).forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transition = ".3s";

    });

});

/* ===========================================
   Mobile Menu
=========================================== */

const menu = document.querySelector(".mobile-menu");

const navbar = document.querySelector(".navbar");

if (menu) {

    menu.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

/* ===========================================
   Image Lazy Loading
=========================================== */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.classList.add("loaded");

            observer.unobserve(img);

        }

    });

});

images.forEach(img => {

    imageObserver.observe(img);

});

/* ===========================================
   Console
=========================================== */

console.log(

    "%cXIORVE Website V2.0 Loaded Successfully",

    "color:#0057ff;font-size:16px;font-weight:bold;"

);