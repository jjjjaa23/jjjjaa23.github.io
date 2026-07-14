document.addEventListener('DOMContentLoaded', () => {
    // 1. 移动端菜单控制 (如果 index.html 中有移动端菜单按钮)
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. 询盘表单 AJAX 异步提交
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // 阻止页面默认刷新

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // 改变按钮状态为“发送中...”
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin mr-2"></i>Sending...';

            const formData = new FormData(contactForm);

            try {
                // 发送数据到后端的 api/contact.php
                const response = await fetch('api/contact.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.status === 'success') {
                    alert('✨ Thank you! Your inquiry has been sent successfully. Our team will contact you within 24 hours.');
                    contactForm.reset(); // 清空表单
                } else {
                    alert('❌ Error: ' + result.message);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('❌ Connection failed. Please email us directly at sales@xiorve.com.');
            } finally {
                // 恢复按钮状态
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});