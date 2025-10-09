document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación para las barras de habilidades
    const skillsSection = document.querySelector('#habilidades');
    const skillBars = document.querySelectorAll('.skill-bar');

    const animateSkills = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress;
        });
    };

    // Usamos Intersection Observer para animar solo cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target); // Para que la animación ocurra solo una vez
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

    observer.observe(skillsSection);
});

console.log("Portfolio V2 cargado y listo.");