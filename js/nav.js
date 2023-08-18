const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('nav--scroll');
  } else {
    nav.classList.remove('nav--scroll');
  }
});
