const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

cargarEventListener();

function cargarEventListener() {
  hamburger.addEventListener('click', alternarMenu);
}

function alternarMenu() {
  const abierto = navList.classList.toggle('abierto');
  hamburger.setAttribute('aria-expanded', abierto);
}
