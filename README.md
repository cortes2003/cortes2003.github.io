# Portfolio Personal de Alberto Cortés Herranz

![Estado del Despliegue en GitHub Pages](https://github.com/cortes2003/cortes2003.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)

Una single-page application (SPA) estática y totalmente responsive construida con tecnologías web fundamentales para mostrar mis proyectos, habilidades y trayectoria profesional.

### [Ver la web en vivo](https://cortes2003.github.io/)

---

## Sobre el Proyecto

Este proyecto fue desarrollado desde cero como una forma de aplicar y demostrar mis conocimientos en desarrollo front-end. El objetivo era crear una web limpia, moderna y dinámica que sirviera como mi tarjeta de visita digital para oportunidades profesionales. Todo el diseño y las animaciones se han implementado con CSS puro y JavaScript moderno, sin depender de frameworks externos.

### Características Principales

* **Diseño Totalmente Responsive:** Adaptable a cualquier dispositivo, desde móviles hasta pantallas de escritorio con breakpoints optimizados.
* **Sistema de Temas Dinámico:** Toggle deslizable minimalista para alternar entre modo oscuro y claro, con persistencia de preferencias del usuario.
* **Hero Section Dinámica:** Con fondo animado de estrellas que se adapta al tema seleccionado y degradado en movimiento para el título y botones.
* **Animaciones al Hacer Scroll:** Los elementos de cada sección aparecen suavemente utilizando la `Intersection Observer API` para una experiencia de usuario fluida y un rendimiento óptimo.
* **Navegación Adaptativa:** Un menú lateral en escritorio que se transforma en una barra inferior en móviles para una mejor usabilidad.
* **Componentes Interactivos:** Incluye barras de progreso animadas para las habilidades y botones con efectos "ghost" y degradados.
* **Despliegue Automatizado:** Integrado con **GitHub Actions** para un ciclo de CI/CD que despliega automáticamente cada `push` a la rama `main`.

---

## Tecnologías Utilizadas

El proyecto está construido exclusivamente con las tecnologías base de la web:

* **HTML5:** Para la estructura semántica del contenido.
* **CSS3:** Para todo el diseño, layout (Flexbox y Grid), animaciones (`@keyframes`), sistema de temas con custom properties y la responsividad (`@media queries`).
* **JavaScript (ES6+):** Para la interactividad, el manejo de eventos, las animaciones basadas en el scroll (`IntersectionObserver`) y la gestión del sistema de temas con `localStorage`.

### Configuración de Despliegue

* **`.nojekyll`:** Archivo que deshabilita el procesamiento Jekyll en GitHub Pages, permitiendo que los archivos estáticos se sirvan directamente sin transformaciones adicionales.

---

## Cómo Ejecutar el Proyecto Localmente

Al ser un proyecto estático, no requiere un servidor complejo ni dependencias.

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/cortes2003/cortes2003.github.io.git](https://github.com/cortes2003/cortes2003.github.io.git)
    ```
2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd cortes2003.github.io
    ```
3.  **Abre el archivo `index.html`** en tu navegador de preferencia.

---

## Contacto

* **LinkedIn:** [LinkedIn Alberto Cortes](https://www.linkedin.com/feed/?trk=public_post_google-one-tap-submit)
* **Email:** [Alberto.Cortes1@alu.uclm.es](mailto:Alberto.Cortes1@alu.uclm.es)