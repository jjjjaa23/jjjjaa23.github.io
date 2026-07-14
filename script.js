/* ==========================================
   XIORVE Official Website
   Version 1.0
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
Header Blur
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.05)";

    } else {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "none";

    }

});

/* ===========================
Fade Up Animation
=========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

"section,.product-card,.why-card,.resource-card,.application-card"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

/* ===========================
Button Hover Effect
=========================== */

document.querySelectorAll(

".primary-btn,.secondary-btn,.quote-button"

).forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-3px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/* ===========================
Current Year
=========================== */

const year = new Date().getFullYear();

const copy = document.querySelector(".footer-copy p");

if(copy){

    copy.innerHTML =

    `© ${year} XIORVE. All Rights Reserved.`;

}

/* ===========================
Image Lazy Loading
=========================== */

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});

/* ===========================
Console
=========================== */

console.log(

"%cXIORVE Official Website",

"font-size:18px;color:#0B6CFB;font-weight:bold;"

);

console.log(

"Precision Motion Solutions for Robotics"

);