const abrirmodal = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const body = document.body;
const bot = document.querySelector('.bot');

abrirmodal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--activar');
  if (window.scrollY > 100 && window.innerWidth > 1050) {
    modal.classList.add('modal--scroll');
  } else {
    modal.classList.remove('modal--scroll');
  }
  bot.classList.add('bot--activa');
  body.classList.add('bloc-scroll');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal--activar');
    body.classList.remove('bloc-scroll');
    bot.classList.remove('bot--activa');
  }
});

