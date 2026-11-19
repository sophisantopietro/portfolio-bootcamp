import skills from '../data/skills.js';

export default function renderSkills() {
    //Llamo renderSkills() solo si existe el contenedor 
    // de skills en la página actual
    const skillsContainer = document.querySelector('#skills-container');

    if (skillsContainer) {

        const cardsHTML = skills.map(skill => `
  <article class="skill-card">
    <i class="bi ${skill.logo}"></i>
    <h3>${skill.name}</h3>
    <span>${skill.level}</span>
    <p>${skill.description}</p>
    <div class="skill-topics">
      ${skill.topics.map(topic => `
        <span class="skill-chip">${topic}</span>
      `).join('')}
    </div>
  </article>
`).join('');

        skillsContainer.innerHTML = cardsHTML;
    }
}
