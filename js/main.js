import { header } from './templates.js';
import { footer } from './templates.js';

import markCurrentPage from './utils.js';

const headerContainer = document.getElementById('header');
headerContainer.innerHTML = header;

const footerContainer = document.getElementById('footer-container');
footerContainer.innerHTML = footer;
markCurrentPage();

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
