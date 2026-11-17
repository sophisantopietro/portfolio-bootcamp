import { header } from './templates.js';

const headerContainer = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

headerContainer.innerHTML = header;
markCurrentPage();
cargarEventListener();

function cargarEventListener() {
  hamburger.addEventListener('click', alternarMenu);
}

function alternarMenu() {
  const abierto = navList.classList.toggle('abierto');
  hamburger.setAttribute('aria-expanded', abierto);
}
