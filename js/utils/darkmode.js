export default function darkMode(btnDarkMode) {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const icon = btnDarkMode.querySelector('i');

    // Recuperamos la preferencia guardada
    const savedTheme = localStorage.getItem('theme');

    // Si no existe, usamos la preferencia del sistema
    const initialDark = savedTheme === null
        ? prefersDark.matches
        : savedTheme === 'dark';

    btnDarkMode.setAttribute('aria-pressed', String(initialDark));
    document.body.classList.toggle('dark-mode', initialDark);

    icon.classList.toggle('bi-sun', initialDark);
    icon.classList.toggle('bi-moon-stars', !initialDark);

    // Evento del botón
    btnDarkMode.addEventListener('click', () => {

        const oscuro = document.body.classList.toggle('dark-mode');
        icon.classList.toggle('bi-sun', oscuro);
        icon.classList.toggle('bi-moon-stars', !oscuro);
        
        btnDarkMode.setAttribute('aria-pressed', String(oscuro));
        localStorage.setItem('theme', oscuro ? 'dark' : 'light');

    });

    // Detectamos cambios en la preferencia del sistema
    prefersDark.addEventListener('change', (event) => {

        if (localStorage.getItem('theme') === null) {

            document.body.classList.toggle('dark-mode', event.matches);

            icon.classList.toggle('bi-sun', event.matches);
            icon.classList.toggle('bi-moon-stars', !event.matches);
            btnDarkMode.setAttribute('aria-pressed', String(event.matches));
        }

    });
}
