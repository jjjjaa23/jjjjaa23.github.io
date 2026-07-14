document.addEventListener('DOMContentLoaded', () => {
  // Back to Top functionality
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Dynamic header styling on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.82)';
    }
  });
});
