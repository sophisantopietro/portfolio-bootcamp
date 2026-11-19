# Portfolio de Sophia Santopietro

Portfolio personal realizado como parte del bootcamp Full Stack de The Bridge. Presenta mi perfil, experiencia, habilidades y una página de contacto.

## Funcionalidades

- Páginas de inicio, acerca de mí y contacto.
- Header y footer compartidos, generados mediante plantillas de JavaScript.
- Menú hamburguesa adaptable a pantallas pequeñas.
- Modo claro y oscuro, con preferencia del sistema y opción de guardar la elección.
- Tarjetas de habilidades generadas dinámicamente a partir de datos JavaScript.
- Diseño responsive con CSS Grid, Flexbox y media queries.

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES modules)
- Bootstrap Icons

## Estructura

- `index.html`, `about.html`, `contact.html`: páginas del portfolio.
- `css/`: estilos generales, reset y estilos responsive.
- `js/main.js`: inicializa las plantillas y las funcionalidades compartidas.
- `js/templates/templates.js`: contiene las plantillas del header y footer.
- `js/data/skills.js`: datos de las habilidades.
- `js/utils/renderSkills.js`: genera las tarjetas de habilidades.
- `js/utils/darkmode.js`: gestiona el tema claro y oscuro.
- `js/utils/utils.js`: utilidades de navegación.

## Aprendizajes practicados

- Importar y exportar funciones y datos usando módulos de JavaScript.
- Seleccionar elementos del DOM, insertar contenido y manejar eventos.
- Comprobar si un elemento existe antes de utilizarlo en páginas diferentes.
- Generar HTML con template literals, `.map()` y `.join('')`.
- Cambiar clases y estados accesibles con `classList` y atributos ARIA.
- Guardar preferencias con `localStorage` y consultar el tema del sistema con `matchMedia`.
- Organizar estilos con variables CSS y media queries.

## Cómo visualizar el proyecto

Abrir la carpeta con una extensión como **Live Server** en VS Code. Al usar módulos de JavaScript, es mejor servir las páginas desde un servidor local en lugar de abrirlas directamente con `file://`.