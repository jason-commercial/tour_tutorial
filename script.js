const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu-open');
});
