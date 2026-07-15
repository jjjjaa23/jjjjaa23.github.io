document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const backToTopBtn = document.getElementById("backToTop");

    // 1. 监听滚动 - 让导航栏在滚动时添加立体阴影
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "var(--shadow-md)";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        } else {
            header.style.boxShadow = "none";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
        }

        // 2. 显示或隐藏“返回顶部”按钮
        if (window.scrollY > 400) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // 3. 点击返回顶部逻辑
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 4. 平滑滚动锚点
    const navLinks = document.querySelectorAll("nav a, .footer-nav a, a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // 扣除导航栏高度 (72px)
                    const offsetPosition = targetElement.offsetTop - 72;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
