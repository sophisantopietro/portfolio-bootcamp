import { header, footer } from './templates/templates.js';
// import { footer } from './templates/templates.js';

import darkMode from './utils/darkmode.js';
import markCurrentPage from './utils/utils.js';
import renderSkills from './utils/renderSkills.js';

const headerContainer = document.getElementById('header');
headerContainer.innerHTML = header;

const footerContainer = document.getElementById('footer-container');
footerContainer.innerHTML = footer;

markCurrentPage();

renderSkills();

const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');
const btnDarkMode = document.querySelector('#dark-mode-btn');

darkMode(btnDarkMode)
cargarEventListener();

function cargarEventListener() {
  hamburger.addEventListener('click', alternarMenu);
}

function alternarMenu() {
  const abierto = navList.classList.toggle('abierto');
  hamburger.setAttribute('aria-expanded', abierto);
}
