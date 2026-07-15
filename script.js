document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTop");
    const header = document.querySelector(".header");

    // 1. 监听滚动条事件
    window.addEventListener("scroll", function () {
        // 滚动超过 300px 显示回到顶部按钮
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }

        // 滚动时让导航栏产生微小收缩，更具动感
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    // 2. 点击回到顶部
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 3. 锚点流畅跳转
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
